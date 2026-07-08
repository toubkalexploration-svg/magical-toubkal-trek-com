"use client";

import { useState } from "react";
import { Compass, CheckSquare, Square, RefreshCw } from "lucide-react";

type GearItem = {
  name: string;
  desc: string;
  essential: boolean;
};

type GearCategory = {
  title: string;
  items: GearItem[];
};

const initialGear: GearCategory[] = [
  {
    title: "Clothing (Layering System)",
    items: [
      { name: "Thermal Base Layers", desc: "Moisture-wicking top and bottom (merino wool or synthetic, avoid cotton)", essential: true },
      { name: "Trekking Shirts", desc: "Breathable, quick-dry activewear shirts", essential: false },
      { name: "Fleece or Insulated Down Jacket", desc: "Mid-layers for cold nights and the freezing summit push", essential: true },
      { name: "Waterproof Outer Jacket", desc: "Windproof and rainproof shell (Gore-Tex or similar)", essential: true },
      { name: "Hiking Pants", desc: "Comfortable, stretchy, quick-dry trousers (convertible are ideal)", essential: true },
      { name: "Waterproof Trousers", desc: "Windproof/rainproof shell pants for stormy weather", essential: true },
    ]
  },
  {
    title: "Footwear",
    items: [
      { name: "Trekking Boots", desc: "Sturdy, waterproof, broken-in boots with good ankle support and grip", essential: true },
      { name: "Hiking Socks", desc: "Thick merino wool or synthetic socks to prevent blisters (3-4 pairs)", essential: true },
      { name: "Camp Shoes", desc: "Lightweight trainers or sandals to wear at the mountain refuge", essential: false },
    ]
  },
  {
    title: "Equipment & Technical Gear",
    items: [
      { name: "Sleeping Bag", desc: "Rated to at least -5°C (23°F) for spring/autumn, and -15°C (5°F) for winter", essential: true },
      { name: "Daypack (30L - 40L)", desc: "To carry your water, layers, camera, sun cream, and lunch (main bag goes on mules)", essential: true },
      { name: "Trekking Poles", desc: "Highly recommended to protect your knees on steep scree descents", essential: true },
      { name: "Headlamp", desc: "Essential for pre-dawn summit push (bring spare batteries)", essential: true },
      { name: "Reusable Water Bottles/Bladder", desc: "Minimum 2L to 3L capacity. Camelbak bladders are highly practical", essential: true },
    ]
  },
  {
    title: "Sun Protection & Personal Care",
    items: [
      { name: "Sunglasses", desc: "UV protective glasses (critical when walking on reflective snow)", essential: true },
      { name: "Sun Cream", desc: "High SPF (30+) protection, and lip balm with SPF", essential: true },
      { name: "Sun Hat & Warm Beanie", desc: "Sun hat for hot valleys, warm beanie to cover ears for summit mornings", essential: true },
      { name: "Personal First Aid Kit", desc: "Band-aids, blister treatment, pain killers, hydration sachets, personal meds", essential: true },
      { name: "Toiletries & Small Towel", desc: "Biodegradable soap, wet wipes, hand sanitizer, quick-dry travel towel", essential: true },
    ]
  }
];

export default function GearList() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  function toggleItem(name: string) {
    setCheckedItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }

  function resetChecklist() {
    setCheckedItems({});
  }

  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-terracotta mb-4">
            <Compass className="h-3.5 w-3.5" />
            Preparation
          </span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-brand-slate sm:text-4xl">
            Trekking Packing Essentials
          </h1>
          <div className="h-1 w-12 bg-brand-terracotta mx-auto mt-4" />
          <p className="mt-4 text-sm text-slate-500">
            Use our interactive checklist below to organize your gear. Pack light; your main luggage will be carried by our support mules (max 15kg per person).
          </p>
        </div>

        {/* Action Row */}
        <div className="flex justify-between items-center mb-8 bg-white border border-slate-100 rounded-xl p-4 shadow-[0_4px_30px_rgba(28,45,55,0.01)]">
          <span className="text-xs font-bold uppercase text-slate-400">
            Interactive Checklist
          </span>
          <button
            onClick={resetChecklist}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <RefreshCw className="h-3.5 w-3.5 text-brand-terracotta" />
            <span>Reset List</span>
          </button>
        </div>

        {/* Checklist Categories */}
        <div className="space-y-8">
          {initialGear.map((category) => (
            <div
              key={category.title}
              className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_4px_30px_rgba(28,45,55,0.01)] space-y-4"
            >
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-3 flex items-center justify-between">
                <span>{category.title}</span>
              </h2>

              <ul className="grid gap-4">
                {category.items.map((item) => {
                  const isChecked = !!checkedItems[item.name];
                  return (
                    <li
                      key={item.name}
                      onClick={() => toggleItem(item.name)}
                      className={`flex gap-4 items-start p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isChecked
                          ? "bg-emerald-50/20 border-emerald-200 text-slate-400"
                          : "border-slate-100 hover:bg-slate-50/50"
                      }`}
                    >
                      {/* Checkbox button */}
                      <button className="shrink-0 mt-0.5">
                        {isChecked ? (
                          <CheckSquare className="h-5 w-5 text-emerald-500 fill-emerald-50" />
                        ) : (
                          <Square className="h-5 w-5 text-slate-300 bg-white" />
                        )}
                      </button>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-bold tracking-tight ${isChecked ? "line-through text-slate-400" : "text-slate-800"}`}>
                            {item.name}
                          </span>
                          {item.essential && !isChecked && (
                            <span className="rounded-full bg-amber-50 border border-amber-200 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-800">
                              Essential
                            </span>
                          )}
                        </div>
                        <p className={`text-xs mt-0.5 leading-relaxed ${isChecked ? "text-slate-300" : "text-slate-500"}`}>
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Note on gear hire */}
        <div className="mt-12 rounded-2xl border border-brand-terracotta/20 bg-brand-terracotta/5 p-6 text-xs text-slate-600 leading-relaxed text-center max-w-xl mx-auto">
          <p className="font-bold text-brand-terracotta-dark uppercase tracking-wider mb-1">
            🎒 Need to Rent Gear?
          </p>
          Don't buy expensive gear for a single trek! High-quality sleeping bags, hiking poles, winter boots, and waterproof shells can be rented locally in Imlil on arrival. Let us know what you need in your booking form so we can reserve it for you.
        </div>

      </div>
    </main>
  );
}
