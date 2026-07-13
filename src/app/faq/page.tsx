"use client";

import { useState } from "react";
import { Compass, ChevronDown, ChevronUp } from "lucide-react";

type FaqItem = {
  q: string;
  a: string;
};

type FaqCategory = {
  title: string;
  items: FaqItem[];
};

const faqData: FaqCategory[] = [
  {
    title: "Difficulty & Safety",
    items: [
      {
        q: "How difficult is it to climb Mount Toubkal?",
        a: "Toubkal does not need ropes, but it is still hard work. Expect long walking days, loose stone, and thin air near 4,167m. If you walk regularly and pace yourself, it is manageable."
      },
      {
        q: "What is Altitude Sickness and how is it prevented?",
        a: "Altitude sickness can happen when you climb too fast. We walk slowly, drink often, and watch the group. The 3-day Azzadene route and 6-day circuit give your body more time."
      },
      {
        q: "Are the mountain guides qualified?",
        a: "Yes. Our guides are licensed in Morocco and trained for mountain safety, first aid, and high-altitude routes."
      }
    ]
  },
  {
    title: "Logistics & Bookings",
    items: [
      {
        q: "Where does the trek start and how do I get there?",
        a: "Most routes start in Imlil, about 90 minutes from Marrakech. We can arrange pickup from your hotel or riad and bring you straight to the trailhead."
      },
      {
        q: "What happens to our luggage during the trek?",
        a: "You carry a daypack with water, layers, sun cream, and personal items. Main bags go with the muleteers, up to 15kg per person."
      },
      {
        q: "What is the accommodation like on the mountain?",
        a: "On Toubkal routes, nights are usually in mountain refuges with shared dorms. On wilder routes such as M'goun, we camp with proper tents, mattresses, and a simple dining setup."
      }
    ]
  },
  {
    title: "Pricing & Inclusions",
    items: [
      {
        q: "What is included in the tour price?",
        a: "The price covers guide, cook, mule support, trek meals, accommodation or camp, and transport when listed. Not included: insurance, tips, drinks, and personal gear rental."
      },
      {
        q: "What is the tipping custom for mountain teams?",
        a: "Tips are not forced, but they are appreciated. Most groups give one shared tip at the end for the guide, cook, and muleteers."
      },
      {
        q: "Do I need travel insurance?",
        a: "Yes. Personal travel insurance is mandatory to participate in our treks. Your policy must specifically cover high-altitude trekking (up to 4,200m) and search and rescue costs."
      }
    ]
  }
];

export default function FaqPage() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  function toggleFaq(q: string) {
    setExpandedItems((prev) => ({
      ...prev,
      [q]: !prev[q]
    }));
  }

  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-terracotta mb-4">
            <Compass className="h-3.5 w-3.5" />
            Support
          </span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-brand-slate sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <div className="h-1 w-12 bg-brand-terracotta mx-auto mt-4" />
          <p className="mt-4 text-sm text-slate-500">
            Short answers about difficulty, safety, packing, and how the trip works.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-10">
          {faqData.map((category) => (
            <div key={category.title} className="space-y-4">
              <h2 className="text-base font-black uppercase tracking-wider text-brand-slate pl-1">
                {category.title}
              </h2>
              
              <div className="space-y-3">
                {category.items.map((item) => {
                  const isOpen = !!expandedItems[item.q];
                  return (
                    <div
                      key={item.q}
                      className="rounded-2xl border border-slate-200/50 bg-white shadow-[0_4px_30px_rgba(28,45,55,0.01)] overflow-hidden transition-all duration-200"
                    >
                      {/* Accordion header */}
                      <button
                        onClick={() => toggleFaq(item.q)}
                        className="w-full flex items-center justify-between gap-4 p-5 text-left font-bold text-slate-800 text-sm md:text-base hover:bg-slate-50/50 transition-colors"
                      >
                        <span className="leading-snug">{item.q}</span>
                        <span className="shrink-0 text-brand-terracotta">
                          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                        </span>
                      </button>

                      {/* Accordion body */}
                      {isOpen && (
                        <div className="p-5 pt-0 text-xs md:text-sm text-slate-500 leading-relaxed border-t border-slate-50 bg-slate-50/20">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action card */}
        <div className="mt-16 text-center bg-brand-slate text-white rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">Have More Questions?</h3>
          <p className="mt-3 text-slate-300 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Ask us about current trail conditions, weather, or the best route for your group.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-brand-terracotta px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-brand-terracotta-dark transition-colors"
            >
              Contact Guiding Crew
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
