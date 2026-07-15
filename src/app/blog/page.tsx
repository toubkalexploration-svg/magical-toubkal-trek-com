import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, CalendarDays, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blog";

export const metadata: Metadata = {
  title: "High Atlas Hiking Blog | Morocco Trekking Stories & Guides",
  description:
    "Read expert local guides to High Atlas hiking, Berber valleys, Mount Toubkal trekking, seasons, routes, and mountain culture in Morocco.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50/40 pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-terracotta">
            <BookOpen className="h-3.5 w-3.5" />
            Local Trekking Journal
          </span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-brand-slate sm:text-4xl">
            High Atlas Hiking Stories & Field Guides
          </h1>
          <div className="mx-auto mt-4 h-1 w-12 bg-brand-terracotta" />
          <p className="mt-4 text-sm leading-relaxed text-slate-500 md:text-base">
            Source-backed, locally grounded articles for hikers planning Toubkal, Berber valley walks, and deeper High Atlas treks in Morocco.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_4px_30px_rgba(28,45,55,0.02)]"
            >
              <Link href={`/blog/${post.slug}`} className="flex w-full flex-col group">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta">
                    {post.eyebrow}
                  </p>
                  <h2 className="mt-2 text-xl font-black uppercase leading-tight tracking-tight text-brand-slate">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                    {post.description}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {new Date(post.publishedAt).toLocaleDateString("en", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-brand-terracotta">
                    Read guide
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
