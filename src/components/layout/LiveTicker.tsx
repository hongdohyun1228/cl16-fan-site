"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TickerItem {
  text: string;
  variant?: "default" | "highlight" | "gold" | "live";
}

const RACE_WEEKEND_ITEMS: TickerItem[] = [
  { text: "🔴 LIVE", variant: "live" },
  { text: "MONACO GRAND PRIX", variant: "highlight" },
  { text: "LAP 48 / 78" },
  { text: "P1", variant: "highlight" },
  { text: "GAP +2.341s" },
  { text: "SOFT · LAP 14" },
  { text: "✦ FASTEST LAP 1:13.456", variant: "gold" },
  { text: "ON COURSE FOR VICTORY" },
];

const BETWEEN_RACE_ITEMS: TickerItem[] = [
  { text: "NEXT RACE:", variant: "highlight" },
  { text: "BRITISH GRAND PRIX" },
  { text: "SILVERSTONE CIRCUIT", variant: "highlight" },
  { text: "07D 04H 22M" },
  { text: "CHARLES'S BEST HERE: P1 QUALIFYING 2022" },
  { text: "1:24.303", variant: "gold" },
  { text: "2,612,847 TIFOSI WORLDWIDE" },
];

// Toggle to simulate race weekend
const IS_RACE_WEEKEND = false;

export function LiveTicker() {
  const [expanded, setExpanded] = useState(false);
  const items = IS_RACE_WEEKEND ? RACE_WEEKEND_ITEMS : BETWEEN_RACE_ITEMS;
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      className="fixed top-[64px] left-0 right-0 z-[200] bg-carbon-mid border-b border-white/[0.1] cursor-pointer select-none"
      style={{ height: "var(--ticker-height, 52px)" }}
      onClick={() => setExpanded(!expanded)}
      role="marquee"
      aria-label="Live race information"
    >
      <div className="flex items-center h-full overflow-hidden relative">
        {/* Live dot */}
        {IS_RACE_WEEKEND && (
          <div className="absolute left-0 z-10 flex items-center h-full px-4 bg-gradient-to-r from-carbon-mid via-carbon-mid to-transparent w-20">
            <span className="w-2 h-2 rounded-full bg-live animate-pulse-dot" />
          </div>
        )}

        {/* Scrolling content */}
        <div className="ticker-animate flex items-center gap-0 whitespace-nowrap">
          {doubled.map((item, i) => (
            <TickerSegment key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Expanded standings panel */}
      {expanded && (
        <div className="absolute top-full left-0 right-0 bg-carbon-mid border-b border-white/10 p-4">
          <div className="max-w-4xl mx-auto">
            <p className="font-telemetry text-[10px] text-cream/50 mb-2">
              {IS_RACE_WEEKEND ? "LIVE STANDINGS" : "NEXT RACE INFO"}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {IS_RACE_WEEKEND ? (
                <>
                  <StatBox label="Position" value="P1" accent />
                  <StatBox label="Gap ahead" value="+2.341s" />
                  <StatBox label="Tyre" value="SOFT" />
                  <StatBox label="Laps left" value="30" />
                </>
              ) : (
                <>
                  <StatBox label="Race" value="British GP" />
                  <StatBox label="Circuit" value="Silverstone" />
                  <StatBox label="Charles record" value="P1 2022" accent />
                  <StatBox label="Lap record" value="1:27.097" />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TickerSegment({ item }: { item: TickerItem }) {
  return (
    <>
      <span
        className={cn(
          "font-telemetry text-[11px] px-5",
          item.variant === "highlight" && "text-cream font-semibold",
          item.variant === "gold" && "text-gold",
          item.variant === "live" && "text-live",
          (!item.variant || item.variant === "default") && "text-cream/60"
        )}
      >
        {item.text}
      </span>
      <span className="text-cream/20 text-[10px]">·</span>
    </>
  );
}

function StatBox({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <div className="font-telemetry text-[9px] text-cream/40 mb-1 uppercase tracking-widest">
        {label}
      </div>
      <div
        className={cn(
          "font-telemetry text-[18px] font-bold",
          accent ? "text-red" : "text-cream"
        )}
      >
        {value}
      </div>
    </div>
  );
}
