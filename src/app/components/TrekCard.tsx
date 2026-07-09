import Link from "next/link";
import Image from "next/image";
import { Clock, ChevronRight } from "lucide-react";
import type { Trek } from "../data/treks";

type TrekCardProps = {
  trek: Trek;
};

export function TrekCard({ trek }: TrekCardProps) {
  // Get difficulty color style
  const difficultyColors = {
    Easy: "bg-emerald-50 text-emerald-700 border-emerald-200/50",
    Moderate: "bg-blue-50 text-blue-700 border-blue-200/50",
    Challenging: "bg-amber-50 text-amber-800 border-amber-200/50",
    Strenuous: "bg-rose-50 text-rose-800 border-rose-200/50",
  };

  const diffStyle = difficultyColors[trek.difficulty] || difficultyColors.Moderate;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-[0_4px_30px_rgba(28,45,55,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(28,45,55,0.06)]">
      {/* Visual cover */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <Image
          src={trek.imageSrc}
          alt={trek.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={trek.slug === "2-day-toubkal-trek"} // pre-load first card LCP
        />
        {/* Duration float badge */}
        <div className="absolute left-4 top-4 rounded-full bg-brand-slate/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm flex items-center gap-1 backdrop-blur-sm">
          <Clock className="h-3.5 w-3.5 text-brand-terracotta" />
          <span>{trek.duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 mb-2">
          {/* Difficulty */}
          <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${diffStyle}`}>
            {trek.difficulty}
          </span>
          {/* Max Altitude */}
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            {trek.maxElevation} Peak
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800 tracking-tight transition-colors duration-200 group-hover:text-brand-terracotta mb-2">
          <Link href={`/treks/${trek.slug}`}>
            {trek.title}
          </Link>
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
          {trek.subtitle}
        </p>

        {/* Highlights summary */}
        <div className="border-t border-slate-100 pt-4 mb-4">
          <ul className="space-y-1.5 text-xs text-slate-600">
            {trek.highlights.slice(0, 2).map((hl, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-brand-terracotta font-bold mt-0.5">&bull;</span>
                <span className="line-clamp-1">{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & CTA */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100/60">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">From</span>
            <div className="flex items-baseline gap-0.5">
              <span className="text-2xl font-black text-brand-slate">€{trek.startingPrice}</span>
              <span className="text-xs text-slate-400 font-semibold uppercase">/ person</span>
            </div>
          </div>
          <Link
            href={`/treks/${trek.slug}`}
            className="inline-flex items-center justify-center gap-1 rounded-xl bg-slate-50 border border-slate-200/80 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all duration-200 hover:bg-brand-terracotta hover:text-white hover:border-brand-terracotta"
          >
            <span>Details</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
