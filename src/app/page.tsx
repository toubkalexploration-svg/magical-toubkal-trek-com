import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Check,
  Compass,
  ExternalLink,
  HeartHandshake,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";
import { TrekCard } from "./components/TrekCard";
import { JsonLd } from "./components/JsonLd";
import { blogPosts } from "./data/blog";
import { googleMapsUrl, tripAdvisorUrl, whatsappUrl } from "./data/contact";
import { aggregateRating, reviews } from "./data/reviews";
import { treks } from "./data/treks";

export const metadata: Metadata = {
  title: "Mount Toubkal Treks & High Atlas Tours | Local Imlil Guides",
  description:
    "Book private Mount Toubkal climbs and High Atlas trekking tours with licensed local guides from Imlil. Clear itineraries, group prices and Marrakech transfers.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mount Toubkal Treks with Local Imlil Guides",
    description:
      "Private Toubkal climbs, Berber valley walks and longer High Atlas adventures led by a licensed local team.",
    url: "/",
    images: [
      {
        url: "/toubkal-hero.webp",
        width: 1254,
        height: 836,
        alt: "Mount Toubkal trekking in Morocco's High Atlas Mountains",
      },
    ],
  },
};

const reasons = [
  {
    icon: Award,
    title: "Born in the High Atlas",
    text: "A local Amazigh team from Imlil and the surrounding valleys—not a distant booking desk.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed mountain guides",
    text: "Safety-led pacing, seasonal route decisions and practical support from first message to return.",
  },
  {
    icon: HeartHandshake,
    title: "Private, flexible trips",
    text: "Dates, walking pace and route options shaped around your group, experience and the weather.",
  },
];

const faqItems = [
  {
    question: "Do I need a guide to climb Mount Toubkal?",
    answer:
      "A licensed local guide is required on the standard Toubkal approach, with checks operating on the route above Imlil.",
  },
  {
    question: "Which trek is best for a first visit?",
    answer:
      "Choose the Imlil day hike for a gentle introduction, the two-day Toubkal climb if you are fit and short on time, or a three-day route for a steadier experience.",
  },
  {
    question: "Are Marrakech transfers included?",
    answer:
      "Most multi-day Toubkal packages include private pickup and return from Marrakech. Every tour page lists the exact inclusions clearly.",
  },
  {
    question: "Can Mount Toubkal be climbed in winter?",
    answer:
      "Yes, but snow and ice can make it a mountaineering objective. Winter trips require suitable equipment, a weather-led plan and appropriate fitness.",
  },
];

export default function Home() {
  const featuredGuides = blogPosts.slice(-3).reverse();
  const visibleReviews = reviews.slice(0, 3);

  return (
    <>
      <JsonLd />
      <main className="min-h-screen bg-white">
        <section className="relative isolate flex min-h-[76svh] items-center overflow-hidden bg-brand-slate pb-24 pt-28 text-white md:min-h-[88vh] md:pb-32">
          <Image
            src="/toubkal-hero.webp"
            alt="Trekkers approaching Mount Toubkal in Morocco's High Atlas Mountains"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={60}
            className="-z-20 object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-brand-slate/75 to-brand-slate/25" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-slate/80 via-transparent to-slate-950/20" />

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-amber-200 backdrop-blur-sm">
                <MapPin className="h-4 w-4" aria-hidden="true" /> Local guides based in Imlil, Morocco
              </p>
              <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Mount Toubkal &amp; High Atlas Treks
                <span className="mt-2 block text-brand-terracotta">Led by Local Mountain Guides</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                Private summit climbs, Berber valley walks and multi-day mountain journeys—with clear prices, honest route advice and optional Marrakech transfers.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#treks"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-terracotta px-7 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-lg transition-colors hover:bg-brand-terracotta-dark"
                >
                  Compare all treks <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-black uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-brand-slate"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" /> Ask a local guide
                </a>
              </div>

              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-100">
                {[
                  "Licensed guides",
                  "Private groups",
                  "Transparent pricing",
                ].map((item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-300" aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section aria-label="Traveller ratings and local credentials" className="relative z-10 -mt-14 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.14)] md:grid-cols-[1.25fr_1fr_1fr]">
            <div className="flex items-center gap-4 p-6 sm:p-7">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
                <Star className="h-6 w-6 fill-current" aria-hidden="true" />
              </div>
              <div>
                <p className="text-lg font-black text-brand-slate">{aggregateRating.ratingValue}/5 from {aggregateRating.reviewCount} reviews</p>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold">
                  <a href={tripAdvisorUrl} target="_blank" rel="noopener noreferrer" className="text-[#006B54] hover:underline">Tripadvisor reviews</a>
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Google reviews</a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 border-t border-slate-200 p-6 md:border-l md:border-t-0">
              <ShieldCheck className="h-7 w-7 shrink-0 text-brand-terracotta" aria-hidden="true" />
              <div><p className="font-black text-brand-slate">Licensed &amp; safety-led</p><p className="mt-1 text-xs text-slate-600">Season-aware mountain planning</p></div>
            </div>
            <div className="flex items-center gap-3 border-t border-slate-200 p-6 md:border-l md:border-t-0">
              <Compass className="h-7 w-7 shrink-0 text-brand-terracotta" aria-hidden="true" />
              <div><p className="font-black text-brand-slate">100% local team</p><p className="mt-1 text-xs text-slate-600">Guides, cooks and muleteers</p></div>
            </div>
          </div>
        </section>

        <section id="treks" aria-labelledby="treks-heading" className="scroll-mt-24 bg-slate-50/70 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-terracotta">Seven ways into the mountains</p>
              <h2 id="treks-heading" className="mt-3 text-3xl font-black tracking-tight text-brand-slate sm:text-5xl">Choose your High Atlas trek</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">Compare duration, difficulty, highest point and price. Open any route for the day-by-day itinerary and full inclusions.</p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-7 md:grid-cols-2">
              {treks.map((trek) => <TrekCard key={trek.slug} trek={trek} />)}
            </div>
            <div className="mt-10 text-center">
              <Link href="/treks" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-brand-slate px-6 py-3 text-xs font-black uppercase tracking-wider text-brand-slate transition-colors hover:bg-brand-slate hover:text-white">
                Open the trek comparison page <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-terracotta">Why walk with us</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-slate sm:text-5xl">Mountain knowledge, without agency distance</h2>
                <p className="mt-5 text-base leading-relaxed text-slate-600">We plan and guide from Imlil, at the foot of the routes we sell. That means direct answers about snow, fitness, refuge conditions, pacing and what actually suits your dates.</p>
                <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-brand-terracotta hover:underline">Meet the local team <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {reasons.map(({ icon: Icon, title, text }) => (
                  <article key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-slate text-amber-300"><Icon className="h-5 w-5" aria-hidden="true" /></div>
                    <h3 className="mt-5 font-black leading-snug text-brand-slate">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="reviews-heading" className="bg-brand-slate py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-300">Independent traveller feedback</p>
                <h2 id="reviews-heading" className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">What trekkers remember</h2>
              </div>
              <a href={tripAdvisorUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 self-start text-sm font-black text-amber-300 hover:underline md:self-auto">Read all Tripadvisor reviews <ExternalLink className="h-4 w-4" aria-hidden="true" /></a>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {visibleReviews.map((review) => (
                <figure key={review.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex gap-1 text-amber-300" role="img" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />)}
                  </div>
                  <blockquote className="mt-5 line-clamp-6 text-sm leading-relaxed text-slate-200">“{review.text}”</blockquote>
                  <figcaption className="mt-6 border-t border-white/10 pt-4"><p className="font-black text-white">{review.name}</p><p className="mt-1 text-xs text-slate-400">{review.trek} · {review.source}</p></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="guides-heading" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-terracotta">Plan with local knowledge</p>
                <h2 id="guides-heading" className="mt-3 text-3xl font-black tracking-tight text-brand-slate sm:text-5xl">Answers before the trail</h2>
                <p className="mt-4 text-slate-600">Useful guides about fitness, seasons, winter equipment and choosing the right route.</p>
              </div>
              <Link href="/blog" className="inline-flex min-h-11 items-center gap-2 self-start rounded-xl border border-brand-slate px-5 py-3 text-xs font-black uppercase tracking-wider text-brand-slate hover:bg-brand-slate hover:text-white md:self-auto">All planning guides <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {featuredGuides.map((post) => (
                <article key={post.slug} className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-brand-terracotta/40">
                  <BookOpen className="h-6 w-6 text-brand-terracotta" aria-hidden="true" />
                  <p className="mt-5 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">{post.eyebrow} · {post.readTime}</p>
                  <h3 className="mt-3 text-xl font-black leading-snug text-brand-slate group-hover:text-brand-terracotta"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">{post.description}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-black uppercase tracking-wider text-brand-terracotta">Read guide <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-heading" className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.65fr_1.35fr] lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-terracotta">Quick planning answers</p>
              <h2 id="faq-heading" className="mt-3 text-3xl font-black tracking-tight text-brand-slate sm:text-4xl">Before you book</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">Need a route recommendation for your dates? Send your group size and hiking experience.</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-brand-terracotta hover:underline">Ask your question <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="font-black leading-snug text-brand-slate">{item.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-terracotta px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
            <div><p className="text-2xl font-black sm:text-3xl">Not sure which High Atlas route fits?</p><p className="mt-2 text-sm text-orange-50">Tell us your dates, group and experience. A local guide will answer directly.</p></div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-black uppercase tracking-wider text-brand-slate shadow-lg hover:bg-slate-100"><MessageCircle className="h-5 w-5" aria-hidden="true" /> Plan on WhatsApp</a>
          </div>
        </section>
      </main>
    </>
  );
}
