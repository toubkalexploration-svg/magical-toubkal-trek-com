import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Users, Heart, Award, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story & Guides",
  description: "Learn about the local Berber mountain guides, cooks, and muleteers of Magical Toubkal Trek based in Imlil, High Atlas.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const credentials = [
    "Certified by the National School of Mountain Guides (CFAMM) in Tabant",
    "Over 10+ years of active guiding experience in Mount Toubkal & Jebel M'goun",
    "Trained in wilderness first aid and high-altitude navigation",
    "Fluent in English, French, Arabic, and native Tashelhit (Berber)",
  ];

  return (
    <main className="min-h-screen bg-slate-50/20 pt-28 pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-terracotta mb-4">
            <Users className="h-3.5 w-3.5" />
            Our Story
          </span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-brand-slate sm:text-4xl">
            Meet the Local Berber Guides
          </h1>
          <div className="h-1 w-12 bg-brand-terracotta mx-auto mt-4" />
        </div>

        {/* Narrative & Image */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold uppercase text-brand-slate tracking-tight">
              Rooted in the High Atlas Mountains
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Atlas Toubkal Trek is run by mountain people from Imlil, Azzadene, and nearby valleys. We grew up with these paths before they became our work.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We guide directly from the mountains. No middlemen, no overpromising. Just clear plans, safe pacing, and money staying with local families.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000"
              alt="Local guides leading a village hike near Imlil in the High Atlas Mountains"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Credentials Section */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-[0_24px_80px_rgba(28,45,55,0.02)] mb-16 space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-terracotta/10 text-brand-terracotta">
              <Award className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-bold uppercase tracking-wider text-brand-slate">Professional Guide Credentials</h2>
          </div>
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider leading-relaxed">
            Licensed guides, local crews, and routes checked against season, weather, and group level.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {credentials.map((cred, idx) => (
              <li key={idx} className="flex gap-2.5 items-start text-sm text-slate-600">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{cred}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sustainable Tourism Values */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-brand-slate">Our Values</h2>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Responsible & Sustainable Guiding</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_4px_30px_rgba(28,45,55,0.01)] text-center space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-terracotta/10 text-brand-terracotta mx-auto">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Environmental Respect</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We carry out rubbish, protect water points, and keep camps clean for the next group.
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_4px_30px_rgba(28,45,55,0.01)] text-center space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-terracotta/10 text-brand-terracotta mx-auto">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Fair Wages for Mules</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our muleteers are part of the team. Loads are limited, and wages are agreed fairly.
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_4px_30px_rgba(28,45,55,0.01)] text-center space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-terracotta/10 text-brand-terracotta mx-auto">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Berber Heritage</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We share the food, language, and mountain customs we live with every day.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
