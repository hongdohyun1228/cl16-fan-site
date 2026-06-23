"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const SEASON_DATA: Record<string, Record<string, number>> = {
  "2019": { wins: 2, podiums: 10, poles: 7, dnfs: 2, avgFinish: 6.1, points: 264 },
  "2020": { wins: 0, podiums: 2, poles: 2, dnfs: 4, avgFinish: 9.8, points: 98 },
  "2021": { wins: 2, podiums: 9, poles: 7, dnfs: 2, avgFinish: 7.2, points: 159 },
  "2022": { wins: 3, podiums: 9, poles: 9, dnfs: 7, avgFinish: 7.4, points: 308 },
  "2023": { wins: 2, podiums: 9, poles: 5, dnfs: 2, avgFinish: 6.9, points: 206 },
  "2024": { wins: 7, podiums: 16, poles: 12, dnfs: 1, avgFinish: 4.1, points: 356 },
};

const METRICS = [
  { key: "wins", label: "Race Wins", max: 10 },
  { key: "podiums", label: "Podiums", max: 20 },
  { key: "poles", label: "Pole Positions", max: 15 },
  { key: "points", label: "Points", max: 400 },
];

export function SeasonComparison() {
  const [seasonA, setSeasonA] = useState("2022");
  const [seasonB, setSeasonB] = useState("2024");

  const dataA = SEASON_DATA[seasonA];
  const dataB = SEASON_DATA[seasonB];

  return (
    <section className="py-16 px-8 border-b border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <SectionEyebrow className="mb-4">Era vs era</SectionEyebrow>
          <h2
            className="font-display font-black uppercase leading-[0.92] text-cream mb-2"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Stack Any Two Seasons
          </h2>
          <p className="font-body text-[14px] text-cream/55 mb-8">
            Select any two seasons from Charles's career and watch the numbers race each other.
          </p>

          {/* Season selectors */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div>
              <div className="font-body text-[9px] font-bold uppercase tracking-[0.15em] text-red mb-2">Season A</div>
              <div className="flex gap-2 flex-wrap">
                {Object.keys(SEASON_DATA).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSeasonA(s)}
                    className={`font-telemetry text-[11px] px-3 py-1 rounded-sm border transition-all ${
                      seasonA === s ? "bg-red border-red text-white" : "border-white/20 text-cream/50 hover:border-red/50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="font-body text-[9px] font-bold uppercase tracking-[0.15em] text-cream/40 mb-2">Season B</div>
              <div className="flex gap-2 flex-wrap">
                {Object.keys(SEASON_DATA).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSeasonB(s)}
                    className={`font-telemetry text-[11px] px-3 py-1 rounded-sm border transition-all ${
                      seasonB === s ? "bg-surface-3 border-white/40 text-cream" : "border-white/20 text-cream/50 hover:border-white/40"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bar chart race */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {METRICS.map((metric) => {
              const valA = dataA[metric.key];
              const valB = dataB[metric.key];
              const pctA = (valA / metric.max) * 100;
              const pctB = (valB / metric.max) * 100;
              const aWins = valA > valB;

              return (
                <div key={metric.key} className="bg-surface-2 border border-white/[0.06] rounded p-4">
                  <div className="font-body text-[10px] font-bold tracking-[0.1em] uppercase text-cream/40 mb-4">
                    {metric.label}
                  </div>

                  {/* Season A bar */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-telemetry text-[9px] text-red">{seasonA}</span>
                      <span className={`font-display font-black text-[24px] leading-none ${aWins ? "text-red" : "text-cream"}`}>
                        {valA}
                      </span>
                    </div>
                    <div className="h-2 bg-surface-3 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-red rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${pctA}%` }}
                        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                        key={`${seasonA}-a`}
                      />
                    </div>
                  </div>

                  {/* Season B bar */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-telemetry text-[9px] text-cream/40">{seasonB}</span>
                      <span className={`font-display font-black text-[24px] leading-none ${!aWins ? "text-cream" : "text-cream/40"}`}>
                        {valB}
                      </span>
                    </div>
                    <div className="h-2 bg-surface-3 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-surface rounded-full"
                        style={{ background: "rgba(250,250,248,0.25)" }}
                        initial={{ width: 0 }}
                        animate={{ width: `${pctB}%` }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                        key={`${seasonB}-b`}
                      />
                    </div>
                  </div>

                  {aWins && (
                    <div className="mt-2 font-body text-[9px] text-red font-bold uppercase tracking-wide">
                      {seasonA} leads ↑
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
