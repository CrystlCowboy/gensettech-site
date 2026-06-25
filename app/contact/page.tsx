import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { HeroInner } from "../components/HeroInner";
import { MailIcon, PhoneIcon } from "../components/icons";
import { contact } from "../components/siteData";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Genset Tech, Inc. for generator sales, service, maintenance, and repair in Cross Plains and Canaan, Indiana.",
};

export default function ContactPage() {
  return (
    <>
      <HeroInner title="Contact Us" />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
          <div>
            <h1 className="text-3xl font-black uppercase leading-tight text-dark-navy sm:text-4xl">
              Have a Question? / Interested in Working With Us?
            </h1>
            <p className="mt-5 text-xl font-black uppercase tracking-[0.04em] text-primary">
              Send Us a Message!
            </p>
            <p className="mt-6 text-lg leading-8 text-body-gray">
              Thank you for your interest in Genset Tech, Inc. Contact us using
              the information below or send us a message using the form and
              we&apos;ll get back to you as soon as we can.
            </p>

            <div className="mt-8 grid gap-4 text-lg font-bold text-dark-navy">
              <a
                className="flex items-center gap-3 transition-colors hover:text-primary"
                href={`tel:${contact.phone.replaceAll("-", "")}`}
              >
                <PhoneIcon className="h-5 w-5 text-primary" />
                <span>{contact.phone}</span>
              </a>
              <a
                className="flex items-center gap-3 transition-colors hover:text-primary"
                href={`mailto:${contact.email}`}
              >
                <MailIcon className="h-5 w-5 text-primary" />
                <span>{contact.email}</span>
              </a>
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
            <ContactForm idPrefix="contact" variant="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
