"use client";

import { useState, useMemo } from "react";
import { RaceCard } from "@/components/shared/RaceCard";
import { RaceDetailOverlay } from "@/components/shared/RaceDetailOverlay";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { FEATURED_RACES } from "@/lib/data";
import type { Race } from "@/types";
import { cn } from "@/lib/utils";

const SEASONS = ["All", "2024", "2023", "2022", "2021", "2020", "2019", "2018"];
const RESULTS = ["All", "Win", "Podium", "Points", "DNF"];

const COLLECTIONS = [
  { title: "The Five Greatest Drives", count: 5, desc: "Races where the talent was so obvious that even the stopwatch seemed inadequate." },
  { title: "Monaco Through the Years", count: 7, desc: "Pole positions, heartbreaks, and finally — the victory he was always going to win." },
  { title: "Qualifying Masterclasses", count: 12, desc: "The laps that made engineers look twice at their data." },
  { title: "The Comebacks", count: 8, desc: "When the grid position made the result look impossible." },
  { title: "First Times", count: 6, desc: "First win. First pole. First championship point." },
];

export function RaceVaultClient() {
  const [selectedRace, setSelectedRace] = useState<Race | null>(null);
  const [filterSeason, setFilterSeason] = useState("All");
  const [filterResult, setFilterResult] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return FEATURED_RACES.filter((race) => {
      if (filterSeason !== "All" && race.season.toString() !== filterSeason) return false;
      if (filterResult === "Win" && race.position !== 1) return false;
      if (filterResult === "Podium" && (race.position === null || race.position > 3)) return false;
      if (filterResult === "DNF" && race.result !== "DNF") return false;
      if (search) {
        const q = search.toLowerCase();
        if (!race.circuit.toLowerCase().includes(q) && !race.country.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [filterSeason, filterResult, search]);

  const clearFilters = () => {
    setFilterSeason("All");
    setFilterResult("All");
    setSearch("");
  };

  const hasFilters = filterSeason !== "All" || filterResult !== "All" || search !== "";

  return (
    <>
      {/* Page header */}
      <div className="px-8 py-14 border-b border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <SectionEyebrow className="mb-4">The complete archive</SectionEyebrow>
          <h1
            className="font-display font-black uppercase leading-[0.92] text-cream mb-3"
            style={{ fontSize: "clamp(48px, 8vw, 80px)" }}
          >
            The Race Vault
          </h1>
          <p className="font-body text-[15px] text-cream/55 mb-6 max-w-[640px]">
            Every start. Every fight. Every chequered flag. The definitive record of Charles Leclerc's
            Formula 1 career.
          </p>
          {/* Stat strip */}
          <div className="flex gap-8 flex-wrap">
            {[
              ["35+", "Wins"],
              ["77+", "Poles"],
              ["103+", "Podiums"],
              ["7", "Seasons"],
            ].map(([num, label]) => (
              <div key={label}>
                <span className="font-telemetry text-[20px] font-bold text-cream">{num} </span>
                <span className="font-body text-[11px] text-red font-bold uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky filter bar */}
      <div className="sticky top-[116px] z-[100] bg-carbon-mid border-b border-white/[0.08] px-8 h-14 flex items-center gap-3">
        <div className="max-w-[1200px] w-full mx-auto flex items-center gap-3 overflow-x-auto">
          <select
            value={filterSeason}
            onChange={(e) => setFilterSeason(e.target.value)}
            className="bg-surface-2 border border-white/[0.08] rounded-sm px-3 py-1.5 text-[11px] font-bold tracking-wide uppercase text-cream/70 cursor-pointer appearance-none focus:outline-none focus:border-red h-8 shrink-0"
          >
            {SEASONS.map((s) => <option key={s} value={s}>Season: {s}</option>)}
          </select>

          <select
            value={filterResult}
            onChange={(e) => setFilterResult(e.target.value)}
            className="bg-surface-2 border border-white/[0.08] rounded-sm px-3 py-1.5 text-[11px] font-bold tracking-wide uppercase text-cream/70 cursor-pointer appearance-none focus:outline-none focus:border-red h-8 shrink-0"
          >
            {RESULTS.map((r) => <option key={r} value={r}>Result: {r}</option>)}
          </select>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search circuits..."
            className="bg-surface-2 border border-white/[0.08] rounded-sm px-3 py-1.5 text-[12px] text-cream placeholder:text-cream/30 focus:outline-none focus:border-red h-8 w-40 shrink-0"
          />

          {hasFilters && (
            <>
              {filterSeason !== "All" && (
                <button
                  onClick={() => setFilterSeason("All")}
                  className="flex items-center gap-1.5 bg-red/10 text-red border border-red/25 rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide shrink-0"
                >
                  {filterSeason} <span className="text-[12px]">×</span>
                </button>
              )}
              {filterResult !== "All" && (
                <button
                  onClick={() => setFilterResult("All")}
                  className="flex items-center gap-1.5 bg-red/10 text-red border border-red/25 rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide shrink-0"
                >
                  {filterResult} <span className="text-[12px]">×</span>
                </button>
              )}
              <button
                onClick={clearFilters}
                className="font-body text-[11px] text-cream/40 hover:text-cream transition-colors shrink-0"
              >
                Clear all
              </button>
            </>
          )}
        </div>
      </div>

      {/* Race grid */}
      <div className="px-8 py-10">
        <div className="max-w-[1200px] mx-auto">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filtered.map((race, i) => (
                <RaceCard
                  key={race.id}
                  race={race}
                  index={i}
                  onClick={setSelectedRace}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="font-display font-black text-[48px] text-red/20 mb-3">?</div>
              <div className="font-body text-[14px] text-cream/40 mb-4">No races match your filters.</div>
              <button
                onClick={clearFilters}
                className="font-body text-[11px] font-bold tracking-[0.1em] uppercase text-red hover:text-red-light transition-colors"
              >
                Clear filters →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Curated collections */}
      <div className="px-8 py-16 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <SectionEyebrow className="mb-4">Curated</SectionEyebrow>
          <h2 className="font-display font-black text-[32px] uppercase text-cream mb-8">
            Races That Define a Career
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {COLLECTIONS.map((col, i) => (
              <div
                key={col.title}
                className="bg-surface border border-white/[0.08] rounded p-5 hover:border-red/30 transition-colors cursor-pointer"
              >
                <div className="font-display font-black text-[32px] text-red/15 leading-none mb-2">
                  0{i + 1}
                </div>
                <div className="font-body text-[12px] font-bold text-cream mb-1">{col.title}</div>
                <div className="font-telemetry text-[9px] text-red mb-2">{col.count} races</div>
                <p className="font-body text-[11px] text-cream/45 leading-[1.55]">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Race detail overlay */}
      <RaceDetailOverlay race={selectedRace} onClose={() => setSelectedRace(null)} />
    </>
  );
}
