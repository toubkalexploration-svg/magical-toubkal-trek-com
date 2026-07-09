"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { reviews, aggregateRating } from "../data/reviews";
import { googleMapsUrl, tripAdvisorUrl } from "../data/contact";

export function ReviewSlider() {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((prev) => (prev + 1) % reviews.length);
  }

  function prev() {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }

  const review = reviews[index];

  return (
    <div className="relative mx-auto max-w-4xl px-4 py-8">
      {/* Verified aggregate rating */}
      <div className="mx-auto mb-8 flex w-full max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={tripAdvisorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-200/70 bg-white/80 px-5 py-2.5 shadow-sm transition-all duration-200 hover:border-[#00AF87]/40 hover:shadow-md sm:w-auto"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00AF87] text-[10px] font-black text-white">
            TA
          </span>
          <span className="text-2xl font-black text-brand-slate">
            {aggregateRating.ratingValue.toFixed(1)}
          </span>
          <span className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-[#00AF87] text-[#00AF87]"
              />
            ))}
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {aggregateRating.reviewCount} reviews on TripAdvisor
          </span>
        </a>
        <a
          href={tripAdvisorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-[#00AF87]/30 bg-[#00AF87] px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-[#008F70] hover:shadow-md sm:w-auto"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[9px] font-black text-[#00AF87]">
            TA
          </span>
          <span>See more Reviews</span>
        </a>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-md sm:w-auto"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm font-black shadow-sm ring-1 ring-slate-200">
            <span className="text-blue-600">G</span>
          </span>
          <span>View our Google reviews too</span>
        </a>
      </div>

      {/* Testimonial card */}
      <div className="glass-panel rounded-3xl p-8 md:p-12 shadow-[0_24px_80px_rgba(28,45,55,0.04)] border border-slate-200/60 relative overflow-hidden bg-white/80">
        
        {/* Giant decorative quote mark */}
        <div className="absolute right-8 top-6 text-brand-terracotta/10 pointer-events-none">
          <Quote className="h-28 w-28 -scale-x-100" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-brand-terracotta text-brand-terracotta" />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-lg md:text-xl font-medium text-slate-700 italic leading-relaxed max-w-2xl mb-8">
            &ldquo;{review.text}&rdquo;
          </blockquote>

          {/* Author Details */}
          <div>
            <cite className="not-italic block font-bold text-slate-800 text-base">{review.name}</cite>
            <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">
              {review.country ? `${review.country} \u2022 ` : ""}{review.date} &bull; via {review.source}
            </span>
          </div>

          {/* Trek badge */}
          <div className="mt-4 rounded-full bg-slate-100 border border-slate-200/60 px-4 py-1.5 text-xs font-semibold text-slate-600">
            Tour: {review.trek}
          </div>

        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none">
          <button
            onClick={prev}
            className="pointer-events-auto h-11 w-11 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 hover:bg-brand-slate hover:text-white hover:border-brand-slate shadow-md transition-all duration-200"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="pointer-events-auto h-11 w-11 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 hover:bg-brand-slate hover:text-white hover:border-brand-slate shadow-md transition-all duration-200"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === idx ? "w-8 bg-brand-terracotta" : "w-2.5 bg-slate-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
