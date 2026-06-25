import { MailIcon, PhoneIcon } from "./icons";
import { contact } from "./siteData";

export function UtilityBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-dark-navy to-primary text-white">
      <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-center gap-4 px-4 text-xs font-bold sm:justify-end sm:gap-7 sm:px-6">
        <a
          className="inline-flex items-center gap-2 transition-colors hover:text-dark-navy"
          href={`mailto:${contact.email}`}
        >
          <MailIcon />
          <span>{contact.email}</span>
        </a>
        <a
          className="inline-flex items-center gap-2 transition-colors hover:text-dark-navy"
          href={`tel:${contact.phone.replaceAll("-", "")}`}
        >
          <PhoneIcon />
          <span>{contact.phone}</span>
        </a>
      </div>
    </div>
  );
}
