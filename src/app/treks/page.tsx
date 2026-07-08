"use client";

import { useState, useMemo } from "react";
import { Compass, Search, Filter } from "lucide-react";
import { treks } from "../data/treks";
import { TrekCard } from "../components/TrekCard";

export default function TreksCatalog() {
  const [search, setSearch] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  const filteredTreks = useMemo(() => {
    return treks.filter((t) => {
      const matchSearch =
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.subtitle.toLowerCase().includes(search.toLowerCase()) ||
        t.highlights.some((hl) => hl.toLowerCase().includes(search.toLowerCase()));

      const matchDifficulty = difficultyFilter === "All" || t.difficulty === difficultyFilter;

      return matchSearch && matchDifficulty;
    });
  }, [search, difficultyFilter]);

  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-terracotta mb-4">
            <Compass className="h-3.5 w-3.5" />
            Atlas Trek Collection
          </span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-brand-slate sm:text-4xl">
            Choose Your High Atlas Trek
          </h1>
          <div className="h-1 w-12 bg-brand-terracotta mx-auto mt-4" />
          <p className="mt-4 text-sm md:text-base text-slate-500">
            Compare our 1-day guided village walks, standard 2-day Toubkal ascents, 3-day waterfall routes, and multi-day wilderness treks through Jebel M'goun.
          </p>
        </div>

        {/* Filter bar */}
        <div className="glass-panel rounded-2xl p-5 mb-10 border border-slate-200/60 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between bg-white/70">
          
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search treks, peaks, highlights..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta"
            />
          </div>

          {/* Difficulty Filter */}
          <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
            <Filter className="h-4 w-4 text-slate-400 shrink-0" />
            <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Difficulty:</span>
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta text-slate-700 cursor-pointer"
            >
              <option value="All">All Levels</option>
              <option value="Easy">Easy Day Hikes</option>
              <option value="Moderate">Moderate</option>
              <option value="Challenging">Challenging Summit Climbs</option>
              <option value="Strenuous">Strenuous Wilderness</option>
            </select>
          </div>

        </div>

        {/* Catalog Grid */}
        {filteredTreks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreks.map((trek) => (
              <TrekCard key={trek.slug} trek={trek} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <Compass className="h-16 w-16 text-slate-300 mx-auto mb-4 animate-pulse" />
            <h3 className="text-lg font-bold text-slate-700">No Trekking Tours Found</h3>
            <p className="text-sm text-slate-400 mt-1 max-w-md mx-auto">
              We couldn't find any treks matching your query. Try resetting your search term or selecting a different difficulty filter.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setDifficultyFilter("All");
              }}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-brand-terracotta px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-brand-terracotta-dark"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
