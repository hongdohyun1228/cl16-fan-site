"use client";

import { useState } from "react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const QUALI_DATA_2022 = [
  { race: "BHR", gap: -0.15 }, { race: "SAU", gap: 0.03 }, { race: "AUS", gap: -0.22 },
  { race: "EMI", gap: -0.18 }, { race: "MIA", gap: 0.08 }, { race: "ESP", gap: -0.31 },
  { race: "MON", gap: -0.41 }, { race: "AZE", gap: -0.28 }, { race: "CAN", gap: 0.12 },
  { race: "GBR", gap: -0.19 }, { race: "AUT", gap: -0.09 }, { race: "FRA", gap: -0.25 },
];

export function QualifyingPace() {
  const [season, setSeason] = useState("2022");

  const maxAbs = Math.max(...QUALI_DATA_2022.map((d) => Math.abs(d.gap)));

  return (
    <section className="py-16 px-8 border-b border-white/[0.06] bg-surface/10">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <SectionEyebrow className="mb-4">Pure pace</SectionEyebrow>
          <h2
            className="font-display font-black uppercase leading-[0.92] text-cream mb-2"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            When It Matters Most
          </h2>
          <p className="font-body text-[14px] text-cream/55 mb-8 max-w-[520px]">
            Charles Leclerc in qualifying is a different category of driver. The data proves it.
          </p>

          {/* Pull stat */}
          <div className="bg-surface-2 border border-white/[0.06] rounded p-5 w-fit mb-8">
            <div className="font-telemetry text-[10px] text-gold mb-2">CAREER STAT</div>
            <div>
              <span className="font-display font-black text-[40px] text-cream">0.18</span>
              <span className="font-display text-[20px] text-red">s</span>
            </div>
            <div className="font-body text-[11px] text-cream/50">
              Average advantage over teammate in Q3 · Ferrari career
            </div>
          </div>

          {/* Season selector */}
          <div className="flex items-center gap-4 mb-6">
            <div className="font-body text-[10px] font-bold tracking-[0.1em] uppercase text-cream/40">
              Season
            </div>
            {["2019", "2020", "2021", "2022", "2023", "2024"].map((s) => (
              <button
                key={s}
                onClick={() => setSeason(s)}
                className={`font-telemetry text-[11px] px-3 py-1 rounded-sm border transition-colors ${
                  season === s
                    ? "bg-red border-red text-white"
                    : "border-white/20 text-cream/50 hover:border-red/50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-surface-2 border border-white/[0.06] rounded p-6">
            <div className="flex items-end gap-2 h-36">
              {QUALI_DATA_2022.map((d) => {
                const isPole = d.gap <= 0;
                const height = (Math.abs(d.gap) / maxAbs) * 100;
                return (
                  <div key={d.race} className="flex flex-col items-center gap-1 flex-1">
                    {/* Bar */}
                    <div className="relative flex items-center justify-center w-full">
                      <div
                        className={`w-full rounded-sm transition-all ${isPole ? "bg-red" : "bg-surface-3"}`}
                        style={{ height: `${Math.max(height, 4)}px` }}
                        title={`${d.race}: ${d.gap > 0 ? "+" : ""}${d.gap.toFixed(3)}s`}
                      />
                      {isPole && (
                        <span className="absolute -top-4 text-[8px] text-red">★</span>
                      )}
                    </div>
                    <div className="font-telemetry text-[7px] text-cream/40">{d.race}</div>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red rounded-sm" />
                <span className="font-body text-[10px] text-cream/50">Pole position ★</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-surface-3 rounded-sm" />
                <span className="font-body text-[10px] text-cream/50">Gap to pole</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
