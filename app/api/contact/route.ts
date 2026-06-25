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

  // TODO: wire to Resend using the owner's verified sending domain.
  void submission;

  return Response.json({ ok: true });
}
