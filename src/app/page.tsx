import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, Compass, ExternalLink, ShieldCheck, HeartHandshake, MapPin, Award, Star, PhoneCall } from "lucide-react";
import { treks } from "./data/treks";
import { blogPosts } from "./data/blog";
import { TrekCard } from "./components/TrekCard";
import { ReviewSlider } from "./components/ReviewSlider";
import { JsonLd } from "./components/JsonLd";
import { aggregateRating } from "./data/reviews";
import {
  contactPhoneDisplay,
  googleMapsUrl,
  tripAdvisorUrl,
  whatsappUrl,
} from "./data/contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const heroTrek = treks.find((trek) => trek.slug === "2-day-toubkal-trek") ?? treks[0];
  const planningGuides = blogPosts.slice(-3).reverse();

  const trekPaths = [
    {
      eyebrow: "1 day \u00b7 Easy",
      title: "A gentle Atlas introduction",
      desc: "Village paths, waterfalls, and lunch in Imlil without a summit push.",
      href: "/treks/1-day-imlil-valley-tour",
      cta: "See the day walk",
    },
    {
      eyebrow: "2 days \u00b7 Challenging",
      title: "Climb Mount Toubkal",
      desc: "The direct summit route for fit hikers who are comfortable with altitude.",
      href: "/treks/2-day-toubkal-trek",
      cta: "See the summit climb",
    },
    {
      eyebrow: "2 days \u00b7 Moderate",
      title: "Walk through Berber valleys",
      desc: "A quieter village-to-village trek for scenery, culture, and a steadier pace.",
      href: "/treks/2-day-azzaden-valley-berber-villages",
      cta: "See the valley trek",
    },
    {
      eyebrow: "5\u20136 days \u00b7 Strenuous",
      title: "Go deeper into the mountains",
      desc: "High passes and remote camps for experienced walkers seeking a full expedition.",
      href: "/treks/5-day-mgoun-trek",
      cta: "See the M\u2019goun trek",
    },
  ];

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
        <section className="relative flex min-h-[74svh] items-center justify-center overflow-hidden bg-slate-700 pt-24 text-white md:min-h-[90vh]">
          <div className="absolute inset-0">
            <Image
              src="/toubkal-hero.webp"
              alt={heroTrek.imageAlt}
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              quality={60}
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
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#treks"
                className="w-full sm:w-auto rounded-xl bg-brand-terracotta px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-brand-terracotta-dark hover:scale-105"
              >
                Explore All Treks
              </Link>
              <Link
                href="/treks"
                className="w-full sm:w-auto rounded-xl border border-slate-400 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-brand-slate hover:scale-105"
              >
                Browse All Tours
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction and review trust signals */}
        <section aria-labelledby="homepage-introduction" className="border-b border-slate-100 bg-white py-12 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 id="homepage-introduction" className="text-2xl font-black uppercase tracking-tight text-brand-slate sm:text-3xl">
              Local High Atlas Treks, From Planning to Summit
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Discover guided Mount Toubkal climbs, Berber valley walks, multi-day High Atlas treks, practical planning guides, and private itineraries led by our local Imlil team.
            </p>
            <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center justify-center gap-3 text-sm sm:flex-row sm:flex-wrap">
              <span className="inline-flex items-center gap-2 font-semibold text-brand-slate">
                <span className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </span>
                Trusted by hundreds of trekkers
              </span>
              <span className="hidden text-slate-300 sm:inline" aria-hidden="true">\u2022</span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-brand-slate underline decoration-slate-300 underline-offset-4 transition-colors hover:text-brand-terracotta"
              >
                Google reviews <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <span className="hidden text-slate-300 sm:inline" aria-hidden="true">\u2022</span>
              <a
                href={tripAdvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-brand-slate underline decoration-slate-300 underline-offset-4 transition-colors hover:text-brand-terracotta"
              >
                {aggregateRating.ratingValue} on Tripadvisor ({aggregateRating.reviewCount} reviews)
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Value Props Row */}
        <section className="relative z-10 mx-4 max-w-7xl rounded-2xl border-y border-slate-100 bg-white py-10 shadow-[0_24px_80px_rgba(28,45,55,0.04)] lg:mx-auto">
          <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <h2 className="sr-only">Why trek with our local Imlil team</h2>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-terracotta/10 text-brand-terracotta shrink-0">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Local Experts</h3>
                <p className="text-xs text-slate-500 mt-0.5">Native Berber guiding crew from Imlil</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:border-x md:border-slate-100 md:px-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-terracotta/10 text-brand-terracotta shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Certified Guides</h3>
                <p className="text-xs text-slate-500 mt-0.5">Fully licensed mountain professionals</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-terracotta/10 text-brand-terracotta shrink-0">
                <Star className="h-6 w-6 text-brand-terracotta" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Hassle-Free</h3>
                <p className="text-xs text-slate-500 mt-0.5">Transparent group rates & custom support</p>
              </div>
            </div>
          </div>
        </section>

        {/* All trekking tours */}
        <section id="treks" aria-labelledby="treks-heading" className="deferred-section scroll-mt-24 bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 id="treks-heading" className="text-xs font-black uppercase tracking-[0.25em] text-brand-terracotta">High Atlas Adventures</h2>
              <p className="mt-3 text-3xl font-black uppercase tracking-tight text-brand-slate sm:text-4xl">
                Choose Your Trek
              </p>
              <div className="mx-auto mt-4 h-1 w-12 bg-brand-terracotta" />
              <p className="mt-4 text-base text-slate-600">
                Explore every route: summit climbs, quiet Berber valleys, day walks, and longer journeys through the High Atlas.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {treks.map((trek) => (
                <TrekCard key={trek.slug} trek={trek} />
              ))}
            </div>
          </div>
        </section>

        {/* Guided route finder */}
        <section id="find-your-trek" aria-labelledby="trek-finder-heading" className="deferred-section scroll-mt-24 border-t border-slate-100 bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 id="trek-finder-heading" className="text-xs font-black uppercase tracking-[0.25em] text-brand-terracotta">
                Start with what suits you
              </h2>
              <p className="mt-3 text-3xl font-black uppercase tracking-tight text-brand-slate sm:text-4xl">
                Find Your High Atlas Trek
              </p>
              <div className="mx-auto mt-4 h-1 w-12 bg-brand-terracotta" />
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Choose by time, pace, and the kind of experience you want. Each page shows the full route, inclusions, and group price.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {trekPaths.map((path) => (
                <Link
                  key={path.href}
                  href={path.href}
                  className="group flex min-h-64 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-terracotta/50 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta"
                >
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-brand-terracotta">{path.eyebrow}</span>
                  <h3 className="mt-4 text-xl font-black leading-tight text-brand-slate">{path.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{path.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-black uppercase tracking-wider text-brand-slate group-hover:text-brand-terracotta">
                    {path.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl bg-brand-slate px-6 py-6 text-center text-white sm:flex-row sm:text-left">
              <div>
                <p className="font-bold">Still deciding between routes?</p>
                <p className="mt-1 text-sm text-slate-300">Tell our Imlil team your dates, experience, and group size.</p>
              </div>
              <Link href="/contact" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl bg-brand-terracotta px-6 py-3 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-brand-terracotta-dark">
                Ask a Local Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Why Book With Us (Detailed) */}
        <section className="deferred-section relative overflow-hidden bg-brand-slate py-24 text-white">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <Image src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=75&w=600&auto=format" alt="Mount Toubkal trekking silhouette in the High Atlas Mountains" width={500} height={333} sizes="500px" className="w-[500px]" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-16 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Berber Guiding Heritage</span>
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
        <section className="deferred-section bg-white py-24">
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

        {/* Planning guides */}
        <section aria-labelledby="planning-guides-heading" className="deferred-section border-t border-slate-100 bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <h2 id="planning-guides-heading" className="text-xs font-black uppercase tracking-[0.25em] text-brand-terracotta">Plan Before You Book</h2>
                <p className="mt-3 text-3xl font-black uppercase tracking-tight text-brand-slate sm:text-4xl">Local Trekking Guides</p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">Practical answers about weather, fitness, routes, and winter conditions from a team based beside the trails.</p>
              </div>
              <Link href="/blog" className="inline-flex min-h-11 items-center gap-2 self-start rounded-xl border border-brand-slate px-5 py-3 text-xs font-black uppercase tracking-wider text-brand-slate transition-colors hover:bg-brand-slate hover:text-white md:self-auto">
                View all guides <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {planningGuides.map((post) => (
                <article key={post.slug} className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <BookOpen className="h-4 w-4 text-brand-terracotta" aria-hidden="true" />
                    <span>{post.eyebrow}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-black leading-snug text-brand-slate">
                    <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-brand-terracotta">{post.title}</Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">{post.description}</p>
                  <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <CalendarDays className="h-4 w-4" aria-hidden="true" /> {post.readTime}
                    </span>
                    <Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`} className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-brand-terracotta">
                      Read guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="deferred-section border-t border-slate-100 bg-slate-50 py-24">
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
        <section className="deferred-section relative overflow-hidden border-t border-brand-slate-light bg-brand-slate py-20 text-white">
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
