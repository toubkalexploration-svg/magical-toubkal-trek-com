import Link from "next/link";
import { Compass } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Trekking Tours", href: "/treks" },
    { name: "FAQs", href: "/faq" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-brand-slate text-white py-8 border-t border-brand-slate-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-terracotta text-white shadow-md">
              <Compass className="h-6 w-6" />
            </div>
            <span className="text-lg font-black uppercase tracking-wider text-white">
              Atlas Toubkal Trek
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-wider text-slate-300">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors duration-200 hover:text-brand-terracotta">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="text-center text-xs font-semibold text-slate-500 md:text-right">
            <p>&copy; {currentYear} Atlas Toubkal Trek.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
