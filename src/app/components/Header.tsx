"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, X, PhoneCall } from "lucide-react";
import { contactPhoneDisplay, whatsappUrl } from "../data/contact";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Trekking Tours", href: "/treks" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faq" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-white/95 py-3 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-brand-slate group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-terracotta text-white shadow-md transition-transform duration-300 group-hover:scale-110">
              <Compass className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-lg font-black uppercase tracking-wider text-brand-slate">
                Magical Toubkal Trekking
              </span>
              <span className="block -mt-1.5 text-xs font-semibold tracking-[0.25em] text-brand-terracotta uppercase">
                Trek & guiding
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-200 hover:text-brand-terracotta ${
                    isActive ? "text-brand-terracotta" : "text-brand-slate"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-brand-terracotta px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-brand-terracotta-dark hover:scale-105"
            >
              <PhoneCall className="h-3.5 w-3.5 animate-pulse" />
              <span>{contactPhoneDisplay}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-brand-slate hover:bg-slate-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 visibility-visible"
            : "max-h-0 opacity-0 visibility-hidden overflow-hidden"
        }`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 pb-4 pt-2 bg-white shadow-xl border-t border-slate-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-semibold tracking-wide uppercase ${
                  isActive
                    ? "bg-brand-terracotta/10 text-brand-terracotta"
                    : "text-brand-slate hover:bg-slate-100 hover:text-brand-terracotta"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 pb-2 border-t border-slate-200">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md bg-brand-terracotta py-3 text-sm font-bold uppercase tracking-wider text-white"
            >
              <PhoneCall className="h-4 w-4" />
              <span>WhatsApp: {contactPhoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
