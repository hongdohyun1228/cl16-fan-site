"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import type { Race } from "@/types";

interface RaceDetailOverlayProps {
  race: Race | null;
  onClose: () => void;
}

function getResultBadgeVariant(result: string) {
  if (result === "P1") return "win" as const;
  if (result === "P2" || result === "P3") return "podium" as const;
  if (result === "DNF") return "dnf" as const;
  return "white" as const;
}

export function RaceDetailOverlay({ race, onClose }: RaceDetailOverlayProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = race ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [race]);

  return (
    <AnimatePresence>
      {race && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[400] bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            className="fixed right-0 top-0 bottom-0 z-[401] w-full max-w-[800px] bg-surface overflow-y-auto"
            role="dialog"
            aria-modal
            aria-label={`${race.circuit} ${race.season} details`}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="font-body text-[10px] font-bold tracking-[0.15em] uppercase text-red mb-1">
                    Season {race.season} · Race {race.round}
                  </div>
                  <h2 className="font-display font-black text-[36px] uppercase leading-[0.92] text-cream">
                    {race.circuit}
                  </h2>
                  <div className="font-body text-[13px] text-cream/50 mt-1">{race.date}</div>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <Badge variant={getResultBadgeVariant(race.result)} className="text-[14px] px-3 py-1.5">
                    {race.result}
                  </Badge>
                  <button
                    onClick={onClose}
                    className="w-9 h-9 flex items-center justify-center bg-surface-2 border border-white/10 rounded-sm text-cream/70 hover:bg-red hover:border-red hover:text-white transition-all"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Stats strip */}
              <div className="grid grid-cols-4 gap-0 bg-surface-2 border border-white/[0.08] rounded mb-6">
                <StatBox label="Laps" value={`${race.laps}`} />
                {race.fastestLap && <StatBox label="Fastest Lap" value="✦" gold />}
                {race.points > 0 && <StatBox label="Points" value={`${race.points}`} />}
                {race.gap && <StatBox label="Gap" value={race.gap} />}
                {race.dnfReason && (
                  <div className="col-span-4 px-4 py-3 border-t border-white/[0.06]">
                    <span className="text-[11px] text-red/70">{race.dnfReason}</span>
                  </div>
                )}
              </div>

              {/* Circuit image area */}
              <div className="w-full aspect-video bg-surface-3 rounded flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="font-telemetry text-[60px] text-red/15 leading-none">{race.flag}</div>
                  <div className="font-body text-[12px] text-cream/20 mt-2 tracking-widest uppercase">
                    {race.country} · {race.season}
                  </div>
                </div>
              </div>

              {/* Editorial */}
              <div className="border-l-2 border-red pl-5 mb-8">
                <p className="font-body text-[15px] text-cream/70 leading-[1.75]">
                  {race.editorial}
                </p>
              </div>

              {/* Related */}
              <div>
                <div className="font-body text-[10px] font-bold tracking-[0.15em] uppercase text-cream/40 mb-3">
                  Related
                </div>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={onClose}
                    className="font-body text-[11px] text-cream/50 border border-white/[0.08] px-3 py-1.5 rounded-sm hover:border-red hover:text-red transition-all"
                  >
                    ← Back to Race Vault
                  </button>
                  <button className="font-body text-[11px] text-cream/50 border border-white/[0.08] px-3 py-1.5 rounded-sm hover:border-red hover:text-red transition-all">
                    View telemetry →
                  </button>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function StatBox({ label, value, gold }: { label: string; value: string; gold?: boolean }) {
  return (
    <div className="flex flex-col items-center py-3 border-r border-white/[0.06] last:border-r-0">
      <div className={cn("font-telemetry text-[18px] font-bold", gold ? "text-gold" : "text-cream")}>
        {value}
      </div>
      <div className="font-body text-[9px] text-cream/40 uppercase tracking-wider mt-0.5">{label}</div>
    </div>
  );
}
