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
        a: "Mount Toubkal is a non-technical climb, meaning no ropes or mountaineering skills are required. However, it is physically demanding. You will walk 5-6 hours on Day 1 and 8-10 hours on Day 2. The terrain is steep, containing loose rock and scree, and the high altitude (4,167m) will make breathing heavier. Active walkers with good cardiovascular fitness will find it highly manageable."
      },
      {
        q: "What is Altitude Sickness and how is it prevented?",
        a: "Acute Mountain Sickness (AMS) is caused by ascending to high altitudes too quickly. Symptoms include headache, mild nausea, and fatigue. The best prevention is a gradual ascent rate, walking at a slow rhythmic pace ('Berber step'), and drinking 3-4 liters of water daily. We recommend our 3-day Azzadene circular route or our 6-day circuit, both of which provide superior acclimatization."
      },
      {
        q: "Are the mountain guides qualified?",
        a: "Yes. All our guides are licensed mountain guides certified by the Moroccan Ministry of Tourism after completing professional training at the Center for Training Mountain Guides (CFAMM) in Tabant. They speak multiple languages and are trained in first aid, rescue, and high-altitude safety."
      }
    ]
  },
  {
    title: "Logistics & Bookings",
    items: [
      {
        q: "Where does the trek start and how do I get there?",
        a: "Most High Atlas treks start in the village of Imlil (1,740m), located 64km south of Marrakech. We include private, air-conditioned return transport from your Marrakech hotel or riad directly to the trailhead in Imlil in all our trek packages."
      },
      {
        q: "What happens to our luggage during the trek?",
        a: "You only need to carry a small daypack (30-40L) containing water, camera, sun cream, layers, and personal items. Your main luggage (duffel bag or backpack up to 15kg) will be loaded onto mules driven by our local muleteers, who will transport it safely to the mountain refuges."
      },
      {
        q: "What is the accommodation like on the mountain?",
        a: "On Mount Toubkal routes, you will stay at the Toubkal Refuge (Neltner Hut) at 3,207m. It provides bunk beds in shared dormitories, shared bathrooms with hot showers (paid locally), and a warm dining area. For wilderness routes like M'goun or our grand circuit, we camp in high-quality dual-layer tents with comfortable foam mattresses, dining tents, and toilet tents."
      }
    ]
  },
  {
    title: "Pricing & Inclusions",
    items: [
      {
        q: "What is included in the tour price?",
        a: "Our packages are all-inclusive: private transfer from Marrakech, certified mountain guide, cook, mule support, all meals during the trek, and mountain refuge/camping accommodation. There are no hidden costs. Exclusions are travel insurance, tips, personal gear rentals, and soft drinks."
      },
      {
        q: "What is the tipping custom for mountain teams?",
        a: "Tipping is custom in Moroccan culture and is highly appreciated by the local crews as it directly boosts their seasonal income. As a general guide, we recommend around €15 to €25 per traveler per day, pooled and shared among the guide, cook, and muleteers."
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
            Read our comprehensive answers to the most common questions regarding difficulty, safety, packing, and booking logistics for your High Atlas trip.
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
            If you need specific information on trail conditions, route planning, or group bookings, send us an inquiry directly.
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
