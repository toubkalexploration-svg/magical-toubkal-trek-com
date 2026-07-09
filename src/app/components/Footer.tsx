import Link from "next/link";
import { Compass, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { contactEmail, contactPhoneDisplay, whatsappUrl } from "../data/contact";
import { treks } from "../data/treks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-slate text-white pt-16 pb-8 border-t border-brand-slate-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-terracotta text-white shadow-md">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-lg font-black uppercase tracking-wider text-white">
                  Magical Toubkal
                </span>
                <span className="block -mt-1.5 text-xs font-semibold tracking-[0.25em] text-brand-terracotta uppercase">
                  Trek & guiding
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed">
              Specialist mountain guides for Mount Toubkal climbs, M&apos;goun wilderness circuits, and authentic Berber valley treks. Based locally in the High Atlas.
            </p>
            {/* Social credentials */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Certified Local Team</span>
              <div className="flex gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Trekking Tours Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-terracotta mb-4">Trekking Tours</h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {treks.map((trek) => (
                <li key={trek.slug}>
                  <Link href={`/treks/${trek.slug}`} className="hover:text-brand-terracotta transition-colors duration-200">
                    {trek.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-terracotta mb-4">Helpful Links</h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-brand-terracotta transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link href="/gear-list" className="hover:text-brand-terracotta transition-colors duration-200">Packing Essentials</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-brand-terracotta transition-colors duration-200">Objection & FAQ</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-terracotta transition-colors duration-200">Our Story & Guides</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-terracotta transition-colors duration-200">Booking Form</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-terracotta mb-4">Local Office</h3>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-brand-terracotta shrink-0" />
                <span>Imlil Center, Village of Imlil, Asni, BP 42152, Morocco</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-5 w-5 text-brand-terracotta shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-terracotta">
                  {contactPhoneDisplay} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-5 w-5 text-brand-terracotta shrink-0" />
                <a href={`mailto:${contactEmail}`} className="hover:text-brand-terracotta break-all">
                  {contactEmail}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* SEO Trust Copy & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <p className="text-xs text-slate-400 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
            Magical Toubkal Trek is an independent local tour guiding team specialized in the High Atlas Mountains. We arrange safe, sustainable, and memorable trekking tours to Mount Toubkal (4,167m) and Jebel M&apos;goun (4,071m), with certified mountain guides, local cooks, and muleteers. Booking policy requires written confirmation and local payment or secure transfer. All climbs comply with Moroccan mountain safety regulations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>&copy; {currentYear} Magical Toubkal Trek. All rights reserved.</p>
            <div className="flex gap-4">
              <span className="hover:text-slate-400">Licensed Mountain Operator</span>
              <span>&bull;</span>
              <span className="hover:text-slate-400">Imlil Eco-Tourism Associate</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
