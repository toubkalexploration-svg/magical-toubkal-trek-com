import Link from "next/link";
import { Compass, ShieldCheck, HeartHandshake, MapPin, Award, Star } from "lucide-react";
import { treks } from "./data/treks";
import { TrekCard } from "./components/TrekCard";
import { ReviewSlider } from "./components/ReviewSlider";
import { JsonLd } from "./components/JsonLd";

export default function Home() {
  const whyUs = [
    {
      icon: <Award className="h-6 w-6 text-brand-terracotta" />,
      title: "100% Local Berber Team",
      desc: "Our guides, cooks, and muleteers are all native to the High Atlas valleys. By booking with us, your money directly supports mountain families.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand-terracotta" />,
      title: "Licensed & Safety-First",
      desc: "We prioritize safety with certified mountain guides, well-paced routes for proper acclimatization, and local emergency support systems.",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-brand-terracotta" />,
      title: "Tailored & Flexible Walks",
      desc: "From private alpine climbs to relaxed valley walks for families, we customize start dates, route pacing, and accommodation options.",
    },
  ];

  const faqItems = [
    {
      q: "Is a guide mandatory for Mount Toubkal?",
      a: "Yes. Due to local safety regulations, all trekkers climbing Mount Toubkal must be accompanied by a licensed local mountain guide. Safety checkpoints are in place along the trail to verify guide papers.",
    },
    {
      q: "When is the best season to trek in the High Atlas?",
      a: "The ideal trekking season is from May to October when weather is warm and mountain passes are free of snow. Winters (November to April) are beautiful but require alpine equipment like crampons, ice axes, and winter layers.",
    },
    {
      q: "How do we handle altitude sickness (AMS)?",
      a: "Altitude sickness can affect anyone. The best prevention is gradual ascent ('climbing high, sleeping low') and staying hydrated. Our 3-day and 6-day routes are specifically structured to optimize acclimatization before the summit push.",
    },
    {
      q: "What meals are included during the treks?",
      a: "All meals on the trek are fully included and freshly prepared by our professional mountain cooks. You can expect hearty tagines, hot pasta, fresh salads, local bread, seasonal fruits, and plenty of Moroccan mint tea. We cater to all dietary needs (vegetarian, gluten-free, vegan) at no extra charge.",
    },
  ];

  return (
    <>
      <JsonLd />
      <main className="min-h-screen">
        
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-slate text-white pt-24">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1800&auto=format&fit=crop"
              alt="Beautiful High Atlas Mountains panorama in Morocco"
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-slate/40 via-brand-slate/85 to-brand-slate" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,119,6,0.15),transparent_40%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta mb-6">
              <Compass className="h-4 w-4 animate-spin-slow" />
              Imlil Valley's Premier Mountain Guides
            </span>
            <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl max-w-4xl mx-auto leading-[1.1] text-white">
              Magical High Atlas <span className="text-brand-terracotta">Trekking Tours</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Explore Mount Toubkal (4,167m) climbs, Jebel M'goun wilderness ridges, and authentic Berber villages with certified local guides who know every stone of these historic mountains.
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
                Choose from our handpicked treks, ranging from challenging Mount Toubkal summit climbs to remote wilderness trails and cultural day walks.
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
            <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600" alt="Mountain silhouette overlay" className="w-[500px]" />
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
                  We are not a massive travel agency based in Europe or Marrakech. We are a family-run cooperative of guides, cooks, and muleteers born and raised in the high-altitude villages of the Atlas Mountains. 
                  <br /><br />
                  To us, the mountains are not just a business; they are our home. We take pride in sharing our rich Amazigh (Berber) culture, preparing fresh, local meals, and guiding you safely along trails we have walked since childhood.
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
              Contact us today for booking inquiries, custom route suggestions, or advice on weather conditions and packing lists. We respond within 1 hour.
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
          </div>
        </section>

      </main>
    </>
  );
}
