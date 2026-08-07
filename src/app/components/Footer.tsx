import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Trekking Tours", href: "/treks" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faq" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-brand-slate text-white py-8 border-t border-brand-slate-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="group shrink-0" aria-label="Magical Toubkal Trek home">
            <Image
              src="/logo.png"
              alt="Magical Toubkal Trek"
              width={384}
              height={384}
              sizes="112px"
              className="h-28 w-28 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-wider text-slate-300">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors duration-200 hover:text-brand-terracotta">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="text-center text-xs font-semibold text-slate-300 md:text-right">
            <p>&copy; {currentYear} Magical Toubkal Trek.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
