import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, CalendarDays, Clock, ExternalLink, MapPin } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "../../data/blog";
import { getTrekBySlug } from "../../data/treks";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} | Magical Toubkal Trek`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.imageSrc,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedTreks = post.relatedTreks
    .map((trekSlug) => getTrekBySlug(trekSlug))
    .filter(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.imageSrc,
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "Magical Toubkal Trek"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Magical Toubkal Trek"
    },
    "mainEntityOfPage": `https://www.magical-toubkal-trek.com/blog/${post.slug}`,
    "keywords": post.keywords.join(", ")
  };

  return (
    <main className="min-h-screen bg-white pt-28 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-brand-terracotta hover:text-brand-terracotta-dark"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <header className="mb-8">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-terracotta">
              <BookOpen className="h-3.5 w-3.5" />
              {post.eyebrow}
            </span>
            <h1 className="text-3xl font-black uppercase leading-tight tracking-tight text-brand-slate sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-500 md:text-lg">
              {post.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" />
                {new Date(post.publishedAt).toLocaleDateString("en", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </header>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-sm">
            <Image
              src={post.imageSrc}
              alt={post.imageAlt}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.35fr] lg:px-8">
          <div className="space-y-10">
            <div className="rounded-2xl border border-brand-terracotta/20 bg-brand-terracotta/5 p-6">
              <p className="text-sm font-semibold leading-relaxed text-slate-700 md:text-base">
                {post.localNote}
              </p>
            </div>

            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight text-brand-slate">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-slate-600">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm font-semibold leading-relaxed text-slate-600">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-terracotta" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
              <h3 className="text-sm font-black uppercase tracking-wider text-brand-slate">
                Related Treks
              </h3>
              <div className="mt-4 space-y-3">
                {relatedTreks.map((trek) => (
                  trek && (
                    <Link
                      key={trek.slug}
                      href={`/treks/${trek.slug}`}
                      className="block rounded-xl border border-slate-100 bg-white p-4 transition-colors hover:border-brand-terracotta/40"
                    >
                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-terracotta">
                        <MapPin className="h-3 w-3" />
                        {trek.duration}
                      </span>
                      <span className="mt-1 block text-sm font-bold leading-snug text-slate-800">
                        {trek.title}
                      </span>
                    </Link>
                  )
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_30px_rgba(28,45,55,0.02)]">
              <h3 className="text-sm font-black uppercase tracking-wider text-brand-slate">
                Sources & Field References
              </h3>
              <ul className="mt-4 space-y-3">
                {post.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-2 text-xs font-semibold leading-relaxed text-slate-500 hover:text-brand-terracotta"
                    >
                      <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                      <span>{source.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
