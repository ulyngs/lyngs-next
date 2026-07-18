"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/publications/", label: "Publications" },
  { href: "/cv/", label: "CV" },
  { href: "/blog/", label: "Blog" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dark = pathname === "/";

  return (
    <header
      className={
        dark
          ? "bg-navy text-white"
          : "sticky top-0 z-50 border-b border-border bg-cream/95 text-navy backdrop-blur-sm"
      }
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 font-[family-name:var(--font-geist-sans)] md:px-8">
        <Link
          href="/"
          className={`font-serif text-lg font-medium tracking-tight md:text-xl ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          Ulrik Lyngs
        </Link>

        <button
          type="button"
          className={`rounded-lg px-3 py-2 text-sm md:hidden ${
            dark ? "hover:bg-white/10" : "hover:bg-hoverWash"
          }`}
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-5">
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${
                      dark
                        ? active
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                        : active
                          ? "font-medium text-teal"
                          : "text-muted hover:text-navy"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href="mailto:ulrik@digitalhabits.org?subject=Speaking%20enquiry"
            className="inline-flex h-9 items-center rounded-md bg-teal px-3.5 text-sm font-medium text-white transition hover:bg-teal/90"
          >
            Book me to speak
          </a>
        </div>
      </nav>

      {open && (
        <ul
          className={`border-t px-5 py-3 md:hidden ${
            dark ? "border-white/10" : "border-border"
          }`}
        >
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm ${
                    dark
                      ? active
                        ? "text-white"
                        : "text-white/70"
                      : active
                        ? "font-medium text-teal"
                        : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="mt-2 px-3 pb-2">
            <a
              href="mailto:ulrik@digitalhabits.org?subject=Speaking%20enquiry"
              className="inline-flex h-9 items-center rounded-md bg-teal px-3.5 text-sm font-medium text-white"
            >
              Book me to speak
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
