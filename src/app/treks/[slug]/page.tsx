import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, TrendingUp, MapPin, Check, X, Shield, Star } from "lucide-react";
import { treks, getTrekBySlug } from "../../data/treks";
import { BookingWidget } from "../../components/BookingWidget";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return treks.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const trek = getTrekBySlug(slug);
  
  if (!trek) {
    return {
      title: "Trek Not Found",
    };
  }

  return {
    title: `${trek.title} | High Atlas Mountains Morocco`,
    description: trek.subtitle,
    alternates: {
      canonical: `/treks/${trek.slug}`,
    },
  };
}

export default async function TrekDetail({ params }: Props) {
  const { slug } = await params;
  const trek = getTrekBySlug(slug);

  if (!trek) {
    notFound();
  }

  const difficultyColors = {
    Easy: "bg-emerald-50 text-emerald-700 border-emerald-200/50",
    Moderate: "bg-blue-50 text-blue-700 border-blue-200/50",
    Challenging: "bg-amber-50 text-amber-800 border-amber-200/50",
    Strenuous: "bg-rose-50 text-rose-800 border-rose-200/50",
  };

  const diffStyle = difficultyColors[trek.difficulty] || difficultyColors.Moderate;

  return (
    <main className="min-h-screen bg-slate-50/30 pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 gap-2">
          <a href="/" className="hover:text-brand-terracotta transition-colors">Home</a>
          <span>/</span>
          <a href="/treks" className="hover:text-brand-terracotta transition-colors">Trekking Tours</a>
          <span>/</span>
          <span className="text-slate-500">{trek.title}</span>
        </nav>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.45fr] gap-12 items-start">
          
          {/* Main Content Column */}
          <div className="space-y-10">
            
            {/* Header Area */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`rounded-full border px-3 py-0.5 text-xs font-bold uppercase tracking-wider ${diffStyle}`}>
                  {trek.difficulty}
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Peak Altitude: {trek.maxElevation}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-brand-slate tracking-tight leading-[1.1]">
                {trek.title}
              </h1>
              <p className="mt-4 text-base md:text-lg text-slate-500 leading-relaxed font-medium">
                {trek.subtitle}
              </p>
            </div>

            {/* Trek Cover Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-100 shadow-sm bg-slate-100">
              <Image
                src={trek.imageSrc}
                alt={trek.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover"
                priority // Priority LCP image for trek detail page
              />
            </div>

            {/* Quick stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_4px_30px_rgba(28,45,55,0.01)] text-center">
              <div className="space-y-1">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Duration</span>
                <span className="text-sm font-bold text-slate-800 flex items-center justify-center gap-1">
                  <Clock className="h-4 w-4 text-brand-terracotta shrink-0" />
                  {trek.duration}
                </span>
              </div>
              <div className="space-y-1 border-l border-slate-100">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Max Altitude</span>
                <span className="text-sm font-bold text-slate-800 flex items-center justify-center gap-1">
                  <TrendingUp className="h-4 w-4 text-brand-terracotta shrink-0" />
                  {trek.maxElevation}
                </span>
              </div>
              <div className="space-y-1 border-l border-slate-100">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Start point</span>
                <span className="text-sm font-bold text-slate-800 flex items-center justify-center gap-1">
                  <MapPin className="h-4 w-4 text-brand-terracotta shrink-0" />
                  {trek.startLocation.split(" ")[0]}
                </span>
              </div>
              <div className="space-y-1 border-l border-slate-100">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Starting Price</span>
                <span className="text-sm font-black text-brand-slate">
                  €{trek.startingPrice} <span className="text-[10px] text-slate-400 font-semibold uppercase">pp</span>
                </span>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold uppercase tracking-wider text-brand-slate">Tour Overview</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {trek.summary}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold uppercase tracking-wider text-brand-slate">Climb Highlights</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {trek.highlights.map((hl, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-sm text-slate-600">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary (Timeline style) */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold uppercase tracking-wider text-brand-slate">Day-by-Day Itinerary</h2>
              <div className="relative border-l-2 border-slate-200 pl-6 ml-3 space-y-8">
                {trek.itinerary.map((day) => (
                  <div key={day.day} className="relative">
                    {/* Timeline bullet */}
                    <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-terracotta border border-white" />
                    
                    {/* Day Content */}
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_4px_30px_rgba(28,45,55,0.01)] space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <h3 className="text-base font-extrabold uppercase tracking-wide text-brand-slate">
                          Day {day.day}: {day.title}
                        </h3>
                        {day.walkingTime && (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-terracotta uppercase">
                            <Clock className="h-3.5 w-3.5" />
                            {day.walkingTime}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {day.description}
                      </p>

                      {/* Day Metadata */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold pt-1 text-slate-400">
                        {day.distance && (
                          <div>
                            <span className="block uppercase text-[10px] font-bold text-slate-400">Distance</span>
                            <span className="text-slate-600 font-bold">{day.distance}</span>
                          </div>
                        )}
                        {day.elevationChange && (
                          <div>
                            <span className="block uppercase text-[10px] font-bold text-slate-400">Elevation</span>
                            <span className="text-slate-600 font-bold">{day.elevationChange}</span>
                          </div>
                        )}
                        {day.meals && (
                          <div>
                            <span className="block uppercase text-[10px] font-bold text-slate-400">Meals included</span>
                            <span className="text-brand-terracotta font-bold">{day.meals}</span>
                          </div>
                        )}
                        {day.accommodation && (
                          <div>
                            <span className="block uppercase text-[10px] font-bold text-slate-400">Lodging</span>
                            <span className="text-slate-600 font-bold">{day.accommodation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions / Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Inclusions */}
              <div className="bg-emerald-50/20 border border-emerald-100 rounded-2xl p-6 space-y-4">
                <h3 className="text-base font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                  What's Included
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {trek.inclusions.map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-rose-50/20 border border-rose-100 rounded-2xl p-6 space-y-4">
                <h3 className="text-base font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <X className="h-5 w-5 text-rose-500 shrink-0" />
                  What's Excluded
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {trek.exclusions.map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <X className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Packing checklist essentials */}
            <div className="bg-slate-100/50 border border-slate-200/50 rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-bold uppercase tracking-wider text-slate-800">Trek Specific Packing Essentials</h3>
              <p className="text-xs text-slate-500">Ensure you have these critical items specifically prepared for this itinerary:</p>
              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-slate-600 font-semibold">
                {trek.packingList.slice(0, 6).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-terracotta shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-xs">
                <a href="/gear-list" className="text-brand-terracotta font-bold underline hover:text-brand-terracotta-dark">
                  View full gear checklist &rarr;
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (Sticky Calculator & Trust) */}
          <div className="space-y-6">
            <BookingWidget trek={trek} />

            {/* Local business trust card */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_30px_rgba(28,45,55,0.01)] space-y-4">
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-2">
                <Shield className="h-4 w-4 text-brand-terracotta" />
                Guaranteed Local Service
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-500">
                <li className="flex gap-2 items-start">
                  <Star className="h-3.5 w-3.5 text-brand-terracotta shrink-0 mt-0.5 fill-brand-terracotta" />
                  <span>No middleman commissions. Pay locally in Imlil or via secure wire.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Star className="h-3.5 w-3.5 text-brand-terracotta shrink-0 mt-0.5 fill-brand-terracotta" />
                  <span>Free cancellation up to 7 days before tour departure.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Star className="h-3.5 w-3.5 text-brand-terracotta shrink-0 mt-0.5 fill-brand-terracotta" />
                  <span>All routes customizable. Adjust pacing or upgrade refuges on private climbs.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
