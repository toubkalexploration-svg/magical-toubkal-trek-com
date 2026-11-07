import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, MessageCircle, ExternalLink, ShieldCheck } from "lucide-react";
import {
  contactEmail,
  contactPhoneDisplay,
  whatsappUrl,
  tripAdvisorUrl,
  googleMapsUrl,
} from "../data/contact";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const toubkalTreks = [
    { name: "2-Day Mount Toubkal Climb", href: "/treks/2-day-toubkal-trek" },
    { name: "3-Day Toubkal via Azzadene & Tamsoult", href: "/treks/3-day-toubkal-tamsoult" },
    { name: "3-Day Toubkal Acclimatization Trek", href: "/treks/3-day-mount-toubkal-acclimatization-trek" },
    { name: "6-Day Mount Toubkal Grand Circuit", href: "/treks/6-day-toubkal-circuit" },
    { name: "5-Day Jebel M'goun Wilderness Trek", href: "/treks/5-day-mgoun-trek" },
  ];

  const valleyTreks = [
    { name: "4-Day Berber Valleys Trek", href: "/treks/4-day-berber-valleys-trek" },
    { name: "1-Day Imlil Valley & Berber Village Hike", href: "/treks/1-day-imlil-valley-tour" },
    { name: "2-Day Azzaden Valley & Berber Villages", href: "/treks/2-day-azzaden-valley-berber-villages" },
    { name: "2-Day Imlil & Imenane Valleys Trek", href: "/treks/2-day-imlil-imenane-valleys-trek" },
    { name: "5-Day High Atlas Traverse", href: "/treks/5-day-high-atlas-traverse" },
    { name: "3-Day Merzouga Desert Tour", href: "/treks/3-day-merzouga-desert-tour-from-marrakech" },
  ];

  const resources = [
    { name: "Mount Toubkal Packing List", href: "/gear-list" },
    { name: "Frequently Asked Questions", href: "/faq" },
    { name: "High Atlas Hiking Guides & Blog", href: "/blog" },
    { name: "Meet Our Local Berber Guides", href: "/about" },
    { name: "Plan a Custom Trek / Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-brand-slate text-white pt-16 pb-12 border-t border-brand-slate-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-700/60">
          
          {/* Brand & Local Credibility */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group" aria-label="Magical Toubkal Trek home">
              <Image
                src="/logo.png"
                alt="Magical Toubkal Trek"
                width={384}
                height={384}
                sizes="80px"
                className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed">
              Official local Berber mountain guides, cooks, and muleteers native to Imlil in the High Atlas Mountains of Morocco. Direct bookings with zero middleman markups.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-1">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>Licensed Mountain Guiding Team</span>
            </div>
            <div className="flex items-center gap-3 pt-2 text-xs">
              <a
                href={tripAdvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#34E0A1] hover:underline"
              >
                <span>Tripadvisor</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <span className="text-slate-600">•</span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-400 hover:underline"
              >
                <span>Google Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Mount Toubkal Treks */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-brand-terracotta">
              Mount Toubkal Climbs
            </h3>
            <ul className="space-y-2 text-xs">
              {toubkalTreks.map((trek) => (
                <li key={trek.href}>
                  <Link
                    href={trek.href}
                    className="text-slate-300 hover:text-white transition-colors duration-150 inline-block leading-snug"
                  >
                    {trek.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Berber Valleys & Day Hikes */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-brand-terracotta">
              Berber Valleys & Tours
            </h3>
            <ul className="space-y-2 text-xs">
              {valleyTreks.map((trek) => (
                <li key={trek.href}>
                  <Link
                    href={trek.href}
                    className="text-slate-300 hover:text-white transition-colors duration-150 inline-block leading-snug"
                  >
                    {trek.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-brand-terracotta">
              Trekker Resources & Contact
            </h3>
            <ul className="space-y-2 text-xs pb-3">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors duration-150 inline-block leading-snug"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-700/60">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-brand-terracotta shrink-0" />
                <span>Imlil Center, High Atlas, Morocco</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: {contactPhoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-brand-terracotta shrink-0" />
                <a href={`mailto:${contactEmail}`} className="hover:text-white transition-colors truncate">
                  {contactEmail}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {currentYear} Magical Toubkal Trek. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-white transition-colors">Our Guides</Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-white transition-colors">Safety & FAQs</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
