"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

type Compound = "SOFT" | "MEDIUM" | "HARD" | "INTER" | "WET";

interface Stint {
  compound: Compound;
  startLap: number;
  endLap: number;
}

interface StrategyRace {
  id: string;
  name: string;
  season: number;
  totalLaps: number;
  stints: Stint[];
  positions: { lap: number; pos: number }[];
  result: string;
  pitStops: { lap: number; duration: number }[];
}

const COMPOUND_COLORS: Record<Compound, { bg: string; text: string; label: string }> = {
  SOFT:   { bg: "#DC143C", text: "#fff",     label: "Soft" },
  MEDIUM: { bg: "#F5D800", text: "#111",     label: "Medium" },
  HARD:   { bg: "#FAFAF8", text: "#111",     label: "Hard" },
  INTER:  { bg: "#2D9B27", text: "#fff",     label: "Inter" },
  WET:    { bg: "#0066FF", text: "#fff",     label: "Wet" },
};

const STRATEGY_DATA: StrategyRace[] = [
  {
    id: "bahrain-2019",
    name: "Bahrain 2019",
    season: 2019,
    totalLaps: 57,
    stints: [
      { compound: "SOFT",   startLap: 1,  endLap: 20 },
      { compound: "MEDIUM", startLap: 21, endLap: 38 },
      { compound: "HARD",   startLap: 39, endLap: 57 },
    ],
    pitStops: [
      { lap: 20, duration: 2.4 },
      { lap: 38, duration: 2.1 },
    ],
    positions: [
      { lap: 1, pos: 1 }, { lap: 10, pos: 1 }, { lap: 20, pos: 1 },
      { lap: 21, pos: 2 }, { lap: 25, pos: 1 }, { lap: 38, pos: 1 },
      { lap: 39, pos: 2 }, { lap: 42, pos: 1 }, { lap: 57, pos: 1 },
    ],
    result: "P1",
  },
  {
    id: "monaco-2024",
    name: "Monaco 2024",
    season: 2024,
    totalLaps: 78,
    stints: [
      { compound: "MEDIUM", startLap: 1,  endLap: 16 },
      { compound: "HARD",   startLap: 17, endLap: 78 },
    ],
    pitStops: [
      { lap: 16, duration: 2.8 },
    ],
    positions: [
      { lap: 1, pos: 1 }, { lap: 16, pos: 1 },
      { lap: 17, pos: 1 }, { lap: 78, pos: 1 },
    ],
    result: "P1",
  },
  {
    id: "singapore-2023",
    name: "Singapore 2023",
    season: 2023,
    totalLaps: 62,
    stints: [
      { compound: "MEDIUM", startLap: 1,  endLap: 18 },
      { compound: "HARD",   startLap: 19, endLap: 42 },
      { compound: "MEDIUM", startLap: 43, endLap: 62 },
    ],
    pitStops: [
      { lap: 18, duration: 2.3 },
      { lap: 42, duration: 2.2 },
    ],
    positions: [
      { lap: 1, pos: 1 }, { lap: 18, pos: 1 },
      { lap: 19, pos: 2 }, { lap: 22, pos: 1 },
      { lap: 42, pos: 1 }, { lap: 43, pos: 2 },
      { lap: 46, pos: 1 }, { lap: 62, pos: 1 },
    ],
    result: "P1",
  },
  {
    id: "spain-2022",
    name: "Spain 2022",
    season: 2022,
    totalLaps: 27,
    stints: [
      { compound: "SOFT", startLap: 1, endLap: 27 },
    ],
    pitStops: [],
    positions: [
      { lap: 1, pos: 1 }, { lap: 10, pos: 1 },
      { lap: 20, pos: 1 }, { lap: 27, pos: 0 },
    ],
    result: "DNF",
  },
];

function TyreChip({ compound }: { compound: Compound }) {
  const c = COMPOUND_COLORS[compound];
  return (
    <span
      className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[9px] font-bold border-2 flex-shrink-0"
      style={{ borderColor: c.bg, color: c.bg }}
      title={c.label}
    >
      {compound[0]}
    </span>
  );
}

export function StrategyExplorer() {
  const [selectedId, setSelectedId] = useState("monaco-2024");
  const [hoveredLap, setHoveredLap] = useState<number | null>(null);

  const race = STRATEGY_DATA.find((r) => r.id === selectedId)!;

  // Interpolate position at a given lap
  const posAtLap = (lap: number): number => {
    const pts = race.positions;
    for (let i = pts.length - 1; i >= 0; i--) {
      if (pts[i].lap <= lap) return pts[i].pos;
    }
    return pts[0].pos;
  };

  return (
    <section className="py-16 px-8 border-b border-white/[0.06] bg-surface/10">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <SectionEyebrow className="mb-4">The strategy board</SectionEyebrow>
          <h2
            className="font-display font-black uppercase leading-[0.92] text-cream mb-2"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Every Stop. Every Call.
          </h2>
          <p className="font-body text-[14px] text-cream/55 mb-8 max-w-[520px]">
            Select any race and see the full strategy played out — compounds, pit
            timing, and the position changes that defined each stint.
          </p>

          {/* Race selector */}
          <div className="flex flex-wrap gap-2 mb-8">
            {STRATEGY_DATA.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedId(r.id)}
                className={`font-body text-[11px] font-bold tracking-[0.06em] px-4 py-2 rounded-sm border transition-all duration-150 ${
                  selectedId === r.id
                    ? "bg-red border-red text-white"
                    : "border-white/[0.12] text-cream/50 hover:border-red/50 hover:text-cream/80"
                }`}
              >
                {r.name}
              </button>
            ))}
          </div>

          {/* Strategy board */}
          <div className="bg-surface-2 border border-white/[0.08] rounded overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
              <div>
                <span className="font-display font-bold text-[18px] uppercase text-cream">
                  {race.name}
                </span>
                <span className="font-body text-[11px] text-cream/40 ml-3">
                  {race.totalLaps} laps ·{" "}
                  <span className={race.result === "P1" ? "text-red" : "text-cream/50"}>
                    {race.result}
                  </span>
                  {" "}· {race.pitStops.length} pit stop{race.pitStops.length !== 1 ? "s" : ""}
                </span>
              </div>
              {/* Compound legend */}
              <div className="hidden sm:flex items-center gap-4">
                {Array.from(new Set(race.stints.map((s) => s.compound))).map((c) => (
                  <div key={c} className="flex items-center gap-1.5">
                    <TyreChip compound={c} />
                    <span className="font-body text-[10px] text-cream/40">
                      {COMPOUND_COLORS[c].label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="px-6 pt-6 pb-4">
              {/* Lap numbers */}
              <div className="flex mb-2">
                <div className="w-16 shrink-0" />
                <div className="flex-1 relative">
                  {[1, Math.floor(race.totalLaps * 0.25), Math.floor(race.totalLaps * 0.5), Math.floor(race.totalLaps * 0.75), race.totalLaps].map((lap) => (
                    <span
                      key={lap}
                      className="absolute font-telemetry text-[9px] text-cream/30 -translate-x-1/2"
                      style={{ left: `${((lap - 1) / (race.totalLaps - 1)) * 100}%` }}
                    >
                      {lap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stint bars */}
              <div className="flex items-center mb-3">
                <div className="w-16 shrink-0 font-body text-[9px] text-cream/40 uppercase tracking-wider">
                  Tyres
                </div>
                <div
                  className="flex-1 relative h-10 bg-surface-3 rounded-sm overflow-hidden cursor-crosshair"
                  onMouseLeave={() => setHoveredLap(null)}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pct = (e.clientX - rect.left) / rect.width;
                    setHoveredLap(Math.round(pct * (race.totalLaps - 1)) + 1);
                  }}
                >
                  {race.stints.map((stint, i) => {
                    const left = ((stint.startLap - 1) / (race.totalLaps - 1)) * 100;
                    const width = ((stint.endLap - stint.startLap) / (race.totalLaps - 1)) * 100;
                    const c = COMPOUND_COLORS[stint.compound];
                    return (
                      <motion.div
                        key={i}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                        className="absolute top-0 bottom-0 flex items-center justify-center border-r border-surface-3 last:border-r-0"
                        style={{
                          left: `${left}%`,
                          width: `${width}%`,
                          background: c.bg,
                          opacity: 0.85,
                          originX: 0,
                        }}
                      >
                        <span
                          className="font-body text-[10px] font-bold"
                          style={{ color: c.text }}
                        >
                          {c.label}
                        </span>
                      </motion.div>
                    );
                  })}

                  {/* Pit stop markers */}
                  {race.pitStops.map((pit) => {
                    const left = ((pit.lap - 1) / (race.totalLaps - 1)) * 100;
                    return (
                      <div
                        key={pit.lap}
                        className="absolute top-0 bottom-0 w-[2px] bg-white/60 z-10 flex items-end justify-center pb-1"
                        style={{ left: `${left}%` }}
                        title={`Pit stop Lap ${pit.lap} (${pit.duration}s)`}
                      >
                        <div className="w-1 h-1 rounded-full bg-white" />
                      </div>
                    );
                  })}

                  {/* Hover line */}
                  {hoveredLap !== null && (
                    <div
                      className="absolute top-0 bottom-0 w-px bg-white/40 pointer-events-none z-20"
                      style={{ left: `${((hoveredLap - 1) / (race.totalLaps - 1)) * 100}%` }}
                    />
                  )}
                </div>
              </div>

              {/* Position line */}
              <div className="flex items-center mb-4">
                <div className="w-16 shrink-0 font-body text-[9px] text-cream/40 uppercase tracking-wider">
                  Position
                </div>
                <div className="flex-1 relative h-10 bg-surface-3 rounded-sm overflow-hidden">
                  <svg
                    viewBox={`0 0 100 10`}
                    preserveAspectRatio="none"
                    className="w-full h-full"
                  >
                    {race.positions
                      .filter((p) => p.pos > 0)
                      .map((p, i, arr) => {
                        if (i === arr.length - 1) return null;
                        const next = arr[i + 1];
                        const x1 = ((p.lap - 1) / (race.totalLaps - 1)) * 100;
                        const y1 = p.pos === 1 ? 1.5 : Math.min(9, p.pos * 1.5);
                        const x2 = ((next.lap - 1) / (race.totalLaps - 1)) * 100;
                        const y2 = next.pos === 1 ? 1.5 : Math.min(9, next.pos * 1.5);
                        return (
                          <line
                            key={i}
                            x1={x1} y1={y1} x2={x2} y2={y2}
                            stroke="#DC143C"
                            strokeWidth="0.6"
                            strokeLinecap="round"
                          />
                        );
                      })}
                    {/* P1 reference line */}
                    <line x1="0" y1="1.5" x2="100" y2="1.5" stroke="rgba(220,20,60,0.15)" strokeWidth="0.3" strokeDasharray="2,2" />
                  </svg>
                  <div className="absolute top-1 left-1 font-telemetry text-[7px] text-red/50">P1</div>
                </div>
              </div>

              {/* Hover tooltip */}
              {hoveredLap !== null && (
                <div className="bg-surface-3 border border-white/[0.08] rounded px-3 py-2 flex gap-6 flex-wrap">
                  <div>
                    <span className="font-telemetry text-[9px] text-cream/40">LAP </span>
                    <span className="font-telemetry text-[13px] text-cream font-bold">{hoveredLap}</span>
                  </div>
                  <div>
                    <span className="font-telemetry text-[9px] text-cream/40">POSITION </span>
                    <span className="font-telemetry text-[13px] text-red font-bold">
                      {posAtLap(hoveredLap) === 0 ? "DNF" : `P${posAtLap(hoveredLap)}`}
                    </span>
                  </div>
                  <div>
                    <span className="font-telemetry text-[9px] text-cream/40">COMPOUND </span>
                    <span className="font-telemetry text-[13px] text-cream font-bold">
                      {race.stints.find(
                        (s) => hoveredLap >= s.startLap && hoveredLap <= s.endLap
                      )?.compound ?? "—"}
                    </span>
                  </div>
                  {race.pitStops.find((p) => p.lap === hoveredLap) && (
                    <div className="flex items-center gap-1">
                      <span className="font-telemetry text-[9px] text-white">PIT STOP</span>
                      <span className="font-telemetry text-[13px] text-white font-bold">
                        {race.pitStops.find((p) => p.lap === hoveredLap)?.duration}s
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Pit stop detail strip */}
            {race.pitStops.length > 0 && (
              <div className="px-6 pb-5 border-t border-white/[0.06] pt-4">
                <div className="font-body text-[9px] font-bold tracking-[0.15em] uppercase text-cream/30 mb-3">
                  Pit Stops
                </div>
                <div className="flex gap-4 flex-wrap">
                  {race.pitStops.map((pit, i) => (
                    <div
                      key={pit.lap}
                      className="bg-surface-3 border border-white/[0.06] rounded px-4 py-2 flex items-center gap-3"
                    >
                      <span className="font-body text-[10px] text-cream/40">
                        Stop {i + 1}
                      </span>
                      <span className="font-telemetry text-[11px] text-cream font-bold">
                        Lap {pit.lap}
                      </span>
                      <span className="font-telemetry text-[11px] text-red">
                        {pit.duration}s
                      </span>
                      {i < race.stints.length - 1 && (
                        <div className="flex items-center gap-1.5">
                          <TyreChip compound={race.stints[i].compound} />
                          <span className="font-body text-[9px] text-cream/30">→</span>
                          <TyreChip compound={race.stints[i + 1].compound} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
