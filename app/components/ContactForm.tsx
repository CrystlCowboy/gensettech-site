"use client";

import { useState } from "react";
import { Button } from "./Button";

type ContactFormProps = {
  className?: string;
  idPrefix: string;
  variant: "home" | "footer" | "contact";
};

type FormState = {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm({ className = "", idPrefix, variant }: ContactFormProps) {
  const [values, setValues] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  const isHero = variant === "home";
  const isFooter = variant === "footer";
  const inputBase =
    "w-full rounded-sm border px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/25";
  const inputClasses = isHero
    ? `${inputBase} border-white/20 bg-white text-dark-navy placeholder:text-body-gray`
    : `${inputBase} border-slate-200 bg-white text-dark-navy placeholder:text-body-gray`;
  const labelClasses = isHero
    ? "text-sm font-bold text-white"
    : "text-sm font-bold text-dark-navy";

  function updateValue(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify({ ...values, source: variant }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Unable to submit the form.");
      }

      setValues(initialState);
      setStatus("success");
      setMessage("Thanks. Your message has been sent.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit the form.");
    }
  }

  return (
    <form className={`grid gap-4 ${className}`} onSubmit={handleSubmit}>
      {variant === "contact" ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            classes={inputClasses}
            id={`${idPrefix}-first-name`}
            label="First Name"
            labelClasses={labelClasses}
            name="firstName"
            onChange={updateValue}
            required
            value={values.firstName}
          />
          <Field
            classes={inputClasses}
            id={`${idPrefix}-last-name`}
            label="Last Name"
            labelClasses={labelClasses}
            name="lastName"
            onChange={updateValue}
            required
            value={values.lastName}
          />
        </div>
      ) : (
        <Field
          classes={inputClasses}
          id={`${idPrefix}-name`}
          label={isFooter ? "Name" : "Full Name"}
          labelClasses={labelClasses}
          name="name"
          onChange={updateValue}
          required
          value={values.name}
        />
      )}

      {!isFooter ? (
        <Field
          classes={inputClasses}
          id={`${idPrefix}-email`}
          label="Email Address"
          labelClasses={labelClasses}
          name="email"
          onChange={updateValue}
          required
          type="email"
          value={values.email}
        />
      ) : null}

      <Field
        classes={inputClasses}
        id={`${idPrefix}-phone`}
        label="Phone Number"
        labelClasses={labelClasses}
        name="phone"
        onChange={updateValue}
        required={isFooter}
        type="tel"
        value={values.phone}
      />

      <Field
        as="textarea"
        classes={`${inputClasses} min-h-32 resize-y`}
        id={`${idPrefix}-message`}
        label="Message"
        labelClasses={labelClasses}
        name="message"
        onChange={updateValue}
        placeholder="Reason for reaching out..."
        required
        value={values.message}
      />

      <Button
        className={isFooter ? "w-full bg-dark-navy hover:bg-primary" : "w-full"}
        type="submit"
      >
        {status === "submitting" ? "Submitting..." : "Submit"}
      </Button>

      <p
        aria-live="polite"
        className={`min-h-5 text-sm font-bold ${
          status === "error"
            ? "text-red-600"
            : isHero
              ? "text-white"
              : "text-dark-navy"
        }`}
      >
        {message}
      </p>
    </form>
  );
}

type FieldProps = {
  as?: "input" | "textarea";
  classes: string;
  id: string;
  label: string;
  labelClasses: string;
  name: keyof FormState;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value: string;
};

function Field({
  as = "input",
  classes,
  id,
  label,
  labelClasses,
  name,
  onChange,
  placeholder,
  required = false,
  type = "text",
  value,
}: FieldProps) {
  return (
    <div className="grid gap-2">
      <label className={labelClasses} htmlFor={id}>
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          className={classes}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          value={value}
        />
      ) : (
        <input
          className={classes}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          type={type}
          value={value}
        />
      )}
    </div>
  );
}
