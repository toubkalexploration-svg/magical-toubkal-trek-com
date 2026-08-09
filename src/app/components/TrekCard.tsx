import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, Clock, Mountain } from "lucide-react";
import type { Trek } from "../data/treks";

type TrekCardProps = {
  trek: Trek;
};

export function TrekCard({ trek }: TrekCardProps) {
  const difficultyColors = {
    Easy: "bg-emerald-500 text-white",
    Moderate: "bg-sky-600 text-white",
    Challenging: "bg-amber-500 text-slate-950",
    Strenuous: "bg-rose-600 text-white",
  };

  const diffStyle = difficultyColors[trek.difficulty] || difficultyColors.Moderate;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(28,45,55,0.07)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-brand-terracotta/30 hover:shadow-[0_24px_55px_rgba(28,45,55,0.14)] focus-within:border-brand-terracotta/50 focus-within:ring-2 focus-within:ring-brand-terracotta/20 motion-reduce:transform-none">
      <Link
        href={`/treks/${trek.slug}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-100 focus-visible:outline-none"
        aria-label={`View ${trek.title}`}
      >
        <Image
          src={trek.imageSrc}
          alt={trek.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={45}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/45 via-transparent to-black/10" />

        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-brand-slate/90 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-lg backdrop-blur-md">
          <Clock className="h-3.5 w-3.5 text-amber-300" aria-hidden="true" />
          <span>{trek.duration}</span>
        </div>
        <span className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-wider shadow-lg ${diffStyle}`}>
          {trek.difficulty}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-black leading-snug tracking-tight text-brand-slate transition-colors duration-200 group-hover:text-brand-terracotta sm:text-[1.35rem]">
          <Link href={`/treks/${trek.slug}`} className="rounded-sm focus-visible:outline-none">
            {trek.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
          {trek.subtitle}
        </p>

        <div className="mt-5 grid grid-cols-2 divide-x divide-slate-200 rounded-2xl border border-slate-200/80 bg-slate-50/80 py-3">
          <div className="flex min-w-0 items-center gap-2 px-3">
            <Mountain className="h-4 w-4 shrink-0 text-brand-terracotta" aria-hidden="true" />
            <div className="min-w-0">
              <span className="block text-[9px] font-black uppercase tracking-[0.14em] text-slate-500">Highest point</span>
              <span className="block truncate text-xs font-bold text-brand-slate">{trek.maxElevation}</span>
            </div>
          </div>
          <div className="flex min-w-0 items-center gap-2 px-3">
            <Check className="h-4 w-4 shrink-0 text-brand-terracotta" aria-hidden="true" />
            <div className="min-w-0">
              <span className="block text-[9px] font-black uppercase tracking-[0.14em] text-slate-500">Trip style</span>
              <span className="block truncate text-xs font-bold text-brand-slate">Private & guided</span>
            </div>
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 pt-5">
          <div>
            <span className="block text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">From</span>
            <div className="mt-0.5 flex items-baseline gap-1">
              <span className="text-2xl font-black tracking-tight text-brand-slate">€{trek.startingPrice}</span>
              <span className="text-[11px] font-semibold text-slate-500">per person</span>
            </div>
          </div>
          <Link
            href={`/treks/${trek.slug}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-slate px-4 py-3 text-xs font-black uppercase tracking-wider text-white shadow-sm transition-colors duration-200 hover:bg-brand-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta focus-visible:ring-offset-2 sm:px-5"
          >
            <span>View trek</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
