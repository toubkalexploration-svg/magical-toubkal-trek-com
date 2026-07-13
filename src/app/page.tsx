import Link from "next/link";
import { Compass, ShieldCheck, HeartHandshake, MapPin, Award, Star, PhoneCall } from "lucide-react";
import { treks } from "./data/treks";
import { TrekCard } from "./components/TrekCard";
import { ReviewSlider } from "./components/ReviewSlider";
import { JsonLd } from "./components/JsonLd";
import {
  contactPhoneDisplay,
  whatsappUrl,
} from "./data/contact";

export default function Home() {
  const heroTrek = treks.find((trek) => trek.slug === "2-day-toubkal-trek") ?? treks[0];

  const whyUs = [
    {
      icon: <Award className="h-6 w-6 text-brand-terracotta" />,
      title: "100% Local Berber Team",
      desc: "Guides, cooks, and muleteers from the valleys. Your booking stays with local families.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand-terracotta" />,
      title: "Licensed & Safety-First",
      desc: "Licensed guides, steady pacing, and routes chosen for the weather and the group.",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-brand-terracotta" />,
      title: "Tailored & Flexible Walks",
      desc: "Private climbs, family walks, and flexible dates. We shape the route around you.",
    },
  ];

  const faqItems = [
      {
        q: "Is a guide mandatory for Mount Toubkal?",
        a: "Yes. A licensed local guide is required on Toubkal. There are checkpoints on the trail, and guide papers are checked.",
      },
      {
        q: "When is the best season to trek in the High Atlas?",
        a: "May to October is easiest: warmer days and fewer snow problems. Winter is beautiful, but you need crampons, warm layers, and a slower plan.",
      },
      {
        q: "How do we handle altitude sickness (AMS)?",
        a: "We walk slow, drink often, and do not rush the mountain. For better acclimatization, choose the 3-day route or the 6-day circuit.",
      },
      {
        q: "What meals are included during the treks?",
        a: "Meals are included on trek days. Expect tagine, pasta, bread, salads, fruit, and mint tea. Tell us early about vegetarian, vegan, or gluten-free needs.",
    },
  ];

  return (
    <>
      <JsonLd />
      <main className="min-h-screen">
        
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-700 text-white pt-24">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroTrek.imageSrc}
              alt={heroTrek.imageAlt}
              className="h-full w-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/25 via-slate-950/35 to-brand-slate/70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,119,6,0.1),transparent_42%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta mb-6">
              <Compass className="h-4 w-4 animate-spin-slow" />
              Imlil Valley&apos;s Premier Mountain Guides
            </span>
            <h1 className="text-4xl font-black uppercase tracking-normal sm:text-5xl md:text-6xl max-w-4xl mx-auto leading-[1.2] text-white">
              Magical High Atlas <span className="text-brand-terracotta">Trekking Tours</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Walk Toubkal, M&apos;goun, and the valleys with local guides from the High Atlas. Clear routes, steady pace, real village hospitality.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/treks"
                className="w-full sm:w-auto rounded-xl bg-brand-terracotta px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-brand-terracotta-dark hover:scale-105"
              >
                Explore Trekking Tours
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-xl border border-slate-400 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-brand-slate hover:scale-105"
              >
                Get Custom Itinerary
              </Link>
            </div>
          </div>
        </section>

        {/* Value Props Row */}
        <section className="bg-white border-y border-slate-100 py-10 relative z-10 -mt-10 mx-4 max-w-7xl lg:mx-auto rounded-2xl shadow-[0_24px_80px_rgba(28,45,55,0.04)]">
          <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-terracotta/10 text-brand-terracotta shrink-0">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Local Experts</h4>
                <p className="text-xs text-slate-500 mt-0.5">Native Berber guiding crew from Imlil</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:border-x md:border-slate-100 md:px-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-terracotta/10 text-brand-terracotta shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Certified Guides</h4>
                <p className="text-xs text-slate-500 mt-0.5">Fully licensed mountain professionals</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-terracotta/10 text-brand-terracotta shrink-0">
                <Star className="h-6 w-6 text-brand-terracotta" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Hassle-Free</h4>
                <p className="text-xs text-slate-500 mt-0.5">Transparent group rates & custom support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tours Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-brand-terracotta">High Atlas Adventures</h2>
              <p className="mt-3 text-3xl font-black uppercase tracking-tight text-brand-slate sm:text-4xl">
                Featured Trekking Packages
              </p>
              <div className="h-1 w-12 bg-brand-terracotta mx-auto mt-4" />
              <p className="mt-4 text-base text-slate-500">
                Pick a summit climb, a quiet valley walk, or a longer trail toward the wild side of the Atlas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treks.map((trek) => (
                <TrekCard key={trek.slug} trek={trek} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Book With Us (Detailed) */}
        <section className="py-24 bg-brand-slate text-white relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600" alt="Mount Toubkal trekking silhouette in the High Atlas Mountains" className="w-[500px]" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-16 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">Berber Guiding Heritage</span>
                <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                  True Mountain Hospitality
                </h2>
                <div className="h-1 w-12 bg-brand-terracotta mt-4 mb-6" />
                <p className="text-sm text-slate-300 leading-relaxed">
                  We are not a desk agency far from the trail. We are guides, cooks, and muleteers from the mountain villages around Imlil. 
                  <br /><br />
                  These paths are our home ground: walnut valleys, high passes, stone villages, and the dry ridges that look toward the desert. We keep the pace honest and the welcome simple.
                </p>
                <div className="mt-8 flex gap-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-brand-terracotta" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Based in Imlil</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-brand-terracotta" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Licensed in Morocco</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                {whyUs.map((prop, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 mb-4">
                      {prop.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{prop.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">{prop.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Slider */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-brand-terracotta">Reviews & Feedback</h2>
              <p className="mt-3 text-3xl font-black uppercase tracking-tight text-brand-slate sm:text-4xl">
                What Our Trekkers Say
              </p>
              <div className="h-1 w-12 bg-brand-terracotta mx-auto mt-4" />
            </div>
            <ReviewSlider />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-brand-terracotta">Pre-Booking support</h2>
              <p className="text-3xl font-black uppercase tracking-tight text-brand-slate mt-3">
                Frequently Asked Questions
              </p>
              <div className="h-1 w-12 bg-brand-terracotta mx-auto mt-4" />
            </div>

            <div className="grid gap-6">
              {faqItems.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-[0_4px_30px_rgba(28,45,55,0.01)]">
                  <h3 className="text-base font-extrabold text-slate-800 uppercase tracking-wide flex items-start gap-2.5">
                    <span className="text-brand-terracotta">Q:</span>
                    <span>{item.q}</span>
                  </h3>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed pl-6 border-l border-brand-terracotta/20">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action (Inquiry) */}
        <section className="bg-brand-slate text-white py-20 relative overflow-hidden border-t border-brand-slate-light">
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
              Ready to Begin Your High Atlas Journey?
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-sm leading-relaxed">
              Send your dates and group size. We will tell you what works, what to pack, and which route fits the season.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-xl bg-brand-terracotta px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-brand-terracotta-dark hover:scale-105"
              >
                Inquire & Book Now
              </Link>
              <Link
                href="/faq"
                className="w-full sm:w-auto rounded-xl border border-slate-500 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-brand-slate"
              >
                Read Trek FAQs
              </Link>
            </div>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-emerald-100 transition-colors duration-200 hover:bg-emerald-500/20 sm:w-auto"
              >
                <PhoneCall className="h-4 w-4" />
                <span>{contactPhoneDisplay}</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
