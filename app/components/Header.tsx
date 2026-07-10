"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "./icons";
import { navItems } from "./siteData";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-9 z-40 overflow-visible transition-colors duration-300 ${
        isScrolled || isOpen ? "bg-dark-navy shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-[88px] max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link aria-label="Genset Tech home" href="/">
          <Image
            alt="Genset Tech, Inc."
            className="h-[4.8rem] w-auto object-contain"
            height={460}
            priority
            src="/site-logo.png"
            width={460}
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                className={`text-sm font-black tracking-[0.03em] transition-colors hover:text-primary ${
                  active ? "text-primary" : "text-white"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/25 text-white transition-colors hover:border-primary hover:text-primary lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {isOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-dark-navy px-4 py-5 lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  className={`rounded-sm px-3 py-3 text-sm font-black tracking-[0.08em] transition-colors hover:bg-white/10 hover:text-primary ${
                    active ? "text-primary" : "text-white"
                  }`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
