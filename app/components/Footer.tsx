import Image from "next/image";
import Link from "next/link";
import { BrandLogoChips } from "./BrandLogoChips";
import { ContactForm } from "./ContactForm";
import { MailIcon, MapPinIcon, PhoneIcon } from "./icons";
import { contact, navItems } from "./siteData";

export function Footer() {
  return (
    <footer>
      <div className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <ul className="grid gap-4 text-base text-body-gray">
              <li className="flex gap-3">
                <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>{contact.address}</span>
              </li>
              <li>
                <a
                  className="flex gap-3 transition-colors hover:text-primary"
                  href={`tel:${contact.phone.replaceAll("-", "")}`}
                >
                  <PhoneIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>{contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  className="flex gap-3 transition-colors hover:text-primary"
                  href={`mailto:${contact.email}`}
                >
                  <MailIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>{contact.email}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ContactForm
              className="rounded-md border border-slate-200 bg-slate-50 p-5 shadow-sm"
              idPrefix="footer"
              variant="footer"
            />
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xl font-black uppercase tracking-[0.03em] text-dark-navy">
              What Brands We Carry
            </h2>
            <BrandLogoChips className="mt-5" />
          </div>
        </div>
      </div>

      <div className="bg-dark-navy py-10 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-7 lg:flex-row">
            <Link aria-label="Genset Tech home" href="/">
              <Image
                alt="Genset Tech, Inc."
                className="h-auto w-40"
                height={95}
                src="/site-logo.png"
                width={380}
              />
            </Link>
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-black uppercase tracking-[0.08em]"
            >
              {navItems.map((item) => (
                <Link
                  className="transition-colors hover:text-primary"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <p className="mt-8 text-center text-sm text-white/75">
            Copyright &copy; 2026. Genset Tech, Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
