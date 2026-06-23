"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import type { Race } from "@/types";

interface RaceCardProps {
  race: Race;
  onClick?: (race: Race) => void;
  index?: number;
}

function getResultBadgeVariant(result: string) {
  if (result === "P1") return "win" as const;
  if (result === "P2" || result === "P3") return "podium" as const;
  if (result === "DNF") return "dnf" as const;
  if (result === "DNS") return "dns" as const;
  return "white" as const;
}

export function RaceCard({ race, onClick, index = 0 }: RaceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{
        duration: 0.4,
        delay: (index % 3) * 0.06,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      onClick={() => onClick?.(race)}
      className={cn(
        "group relative bg-surface border border-white/[0.08] rounded overflow-hidden cursor-pointer",
        "red-bar-left card-hover"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
        <div>
          <div className="font-body text-[13px] font-semibold text-cream">
            {race.flag} {race.circuit}
          </div>
          <div className="font-body text-[10px] text-cream/50 mt-0.5">
            Season {race.season} · Race {race.round}
          </div>
        </div>
        <Badge variant={getResultBadgeVariant(race.result)}>{race.result}</Badge>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-surface-3 flex items-center justify-center">
        <div className="text-center">
          <div className="font-telemetry text-[28px] font-bold text-red/20 leading-none">
            {race.flag}
          </div>
          <div className="font-body text-[10px] text-cream/20 mt-1 tracking-wider uppercase">
            {race.country}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="font-body text-[10px] text-cream/50">
          {race.laps} laps
          {race.fastestLap && (
            <span className="text-gold ml-2">✦ Fastest</span>
          )}
          {race.gap && <span className="ml-2">{race.gap}</span>}
          {race.dnfReason && (
            <span className="text-cream/40 ml-2">{race.dnfReason}</span>
          )}
        </div>
        <span className="font-body text-[9px] font-bold tracking-[0.08em] uppercase text-red opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          View Race →
        </span>
      </div>
    </motion.article>
  );
}
