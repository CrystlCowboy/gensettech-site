import { Resend } from "resend";

type ContactPayload = {
  email?: unknown;
  firstName?: unknown;
  lastName?: unknown;
  message?: unknown;
  name?: unknown;
  phone?: unknown;
  source?: unknown;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid JSON payload.", ok: false }, { status: 400 });
  }

  const source = clean(payload.source);
  const firstName = clean(payload.firstName);
  const lastName = clean(payload.lastName);
  const name = clean(payload.name);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const message = clean(payload.message);
  const displayName = name || [firstName, lastName].filter(Boolean).join(" ");

  if (!displayName) {
    return Response.json({ error: "Please provide your name.", ok: false }, { status: 400 });
  }

  if (!message) {
    return Response.json({ error: "Please provide a message.", ok: false }, { status: 400 });
  }

  if (!email && !phone) {
    return Response.json(
      { error: "Please provide an email address or phone number.", ok: false },
      { status: 400 },
    );
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "Please provide a valid email address.", ok: false },
      { status: 400 },
    );
  }

  const submission = {
    email,
    message,
    name: displayName,
    phone,
    source,
  };

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Email service is not configured. Missing RESEND_API_KEY.", ok: false },
      { status: 500 },
    );
  }

  const formSource = source || "unknown";
  const lines = [
    `Name: ${submission.name}`,
    submission.email ? `Email: ${submission.email}` : "Email: Not provided",
    submission.phone ? `Phone: ${submission.phone}` : "Phone: Not provided",
    `Form variant: ${formSource}`,
    "",
    "Message:",
    submission.message,
  ];
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Genset Tech Website <noreply@gensetin.com>",
      html: `
        <h2>New website inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(submission.name)}</p>
        <p><strong>Email:</strong> ${
          submission.email ? escapeHtml(submission.email) : "Not provided"
        }</p>
        <p><strong>Phone:</strong> ${
          submission.phone ? escapeHtml(submission.phone) : "Not provided"
        }</p>
        <p><strong>Form variant:</strong> ${escapeHtml(formSource)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(submission.message).replaceAll("\n", "<br />")}</p>
      `,
      subject: `New website inquiry from ${submission.name}`,
      text: lines.join("\n"),
      to: "genset@gen-set-tech.com",
    });

    if (error) {
      return Response.json(
        { error: `Unable to send email: ${error.message}`, ok: false },
        { status: 502 },
      );
    }
  } catch (error) {
    return Response.json(
      {
        error: `Unable to send email: ${
          error instanceof Error ? error.message : "Unexpected Resend failure."
        }`,
        ok: false,
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
