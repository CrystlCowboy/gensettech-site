import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit";
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center rounded-sm bg-primary px-7 py-3 text-sm font-black uppercase tracking-[0.08em] text-white transition-colors hover:bg-light-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-70";

export function Button({
  children,
  className = "",
  href,
  type = "button",
}: ButtonProps) {
  const classes = `${baseClasses} ${className}`;

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
}
