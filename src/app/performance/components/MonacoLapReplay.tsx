"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";

// Simplified Monaco circuit path points [x, y, speed_0_1]
const TRACK_POINTS = [
  [80, 240, 0.95], [100, 220, 0.85], [120, 200, 0.75], [150, 185, 0.9],
  [185, 175, 0.95], [220, 170, 0.98], [255, 172, 0.92], [280, 180, 0.7],
  [295, 195, 0.55], [300, 215, 0.45], [290, 235, 0.5], [275, 248, 0.6],
  [258, 255, 0.75], [240, 258, 0.88], [220, 256, 0.92], [200, 250, 0.78],
  [185, 238, 0.6], [178, 220, 0.5], [182, 200, 0.55], [190, 185, 0.65],
  [198, 170, 0.8], [205, 155, 0.88], [205, 138, 0.92], [200, 122, 0.7],
  [188, 112, 0.55], [172, 108, 0.48], [155, 110, 0.52], [142, 120, 0.6],
  [135, 135, 0.68], [132, 152, 0.72], [130, 168, 0.78], [125, 185, 0.82],
  [115, 198, 0.88], [100, 210, 0.92], [88, 222, 0.94], [80, 240, 0.95],
];

const CORNERS = [
  { x: 298, y: 210, label: "Casino" },
  { x: 180, y: 235, label: "Portier" },
  { x: 170, y: 108, label: "Hairpin" },
];

const SPEEDS = [287, 265, 248, 271, 285, 293, 286, 259, 198, 142, 134, 152, 198, 245, 278, 268, 234, 148, 142, 162, 188, 221, 252, 228, 165, 138, 132, 148, 168, 188, 212, 238, 262, 278, 282, 287];

function speedToColor(speed: number): string {
  // ice blue (slow) → deep red (fast)
  const t = (speed - 130) / (295 - 130);
  const r = Math.floor(30 + t * 190);
  const g = Math.floor(144 - t * 124);
  const b = Math.floor(255 - t * 235);
  return `rgb(${r},${g},${b})`;
}

export function MonacoLapReplay() {
  const [progress, setProgress] = useState(0); // 0 to 1
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [showCorners, setShowCorners] = useState(true);
  const animRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  const LAP_DURATION_MS = 70346; // 1:10.346 in ms

  const tick = useCallback((timestamp: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const delta = (timestamp - lastTimeRef.current) * speed;
    lastTimeRef.current = timestamp;
    setProgress((p) => {
      const next = p + delta / LAP_DURATION_MS;
      if (next >= 1) {
        setPlaying(false);
        return 0;
      }
      return next;
    });
    animRef.current = requestAnimationFrame(tick);
  }, [speed]);

  useEffect(() => {
    if (playing) {
      lastTimeRef.current = 0;
      animRef.current = requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(animRef.current);
    }
    return () => cancelAnimationFrame(animRef.current);
  }, [playing, tick]);

  const idx = Math.floor(progress * (TRACK_POINTS.length - 1));
  const pt = TRACK_POINTS[idx];
  const currentSpeed = SPEEDS[idx] ?? 287;
  const gear = currentSpeed > 260 ? 7 : currentSpeed > 220 ? 6 : currentSpeed > 180 ? 5 : currentSpeed > 150 ? 4 : currentSpeed > 130 ? 3 : 2;
  const throttle = Math.min(100, Math.floor((currentSpeed / 295) * 100));

  // Build SVG path
  const pathD = TRACK_POINTS.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ") + " Z";

  return (
    <section className="py-16 px-8 border-b border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <SectionEyebrow className="mb-4">The definitive lap</SectionEyebrow>
        <h2
          className="font-display font-black uppercase leading-[0.92] text-cream mb-2"
          style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
        >
          The Lap That Shocked the World
        </h2>
        <div className="font-telemetry text-[12px] text-gold mb-8">
          Monaco Qualifying · 2021 · 1:10.346 · Track Record
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-4">
          {/* Track map */}
          <div className="bg-surface-2 border border-white/[0.06] rounded relative overflow-hidden">
            <svg
              viewBox="50 90 280 185"
              className="w-full h-full"
              style={{ minHeight: "300px" }}
              role="img"
              aria-label="Monaco circuit lap replay"
            >
              {/* Track base */}
              <path d={pathD} fill="none" stroke="rgba(250,250,248,0.15)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />

              {/* Speed-colored overlay */}
              {TRACK_POINTS.slice(0, -1).map((pt, i) => {
                const next = TRACK_POINTS[i + 1];
                const driven = i / TRACK_POINTS.length <= progress;
                return (
                  <line
                    key={i}
                    x1={pt[0]} y1={pt[1]}
                    x2={next[0]} y2={next[1]}
                    stroke={driven ? speedToColor(SPEEDS[i]) : "transparent"}
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                );
              })}

              {/* Car dot */}
              <circle cx={pt[0]} cy={pt[1]} r="6" fill="#DC143C" />
              <circle cx={pt[0]} cy={pt[1]} r="10" fill="rgba(220,20,60,0.3)" />

              {/* Corner labels */}
              {showCorners && CORNERS.map((c) => (
                <g key={c.label}>
                  <circle cx={c.x} cy={c.y} r="3" fill="rgba(250,250,248,0.3)" />
                  <text x={c.x + 5} y={c.y + 4} fill="rgba(250,250,248,0.4)" fontSize="7" fontFamily="monospace">
                    {c.label}
                  </text>
                </g>
              ))}
            </svg>

            {/* Sector times */}
            <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
              {[["S1", "26.143", true], ["S2", "17.841", true], ["S3", "26.362", true]].map(([s, t, purple]) => (
                <div key={String(s)} className="bg-surface-3/90 border border-white/[0.08] rounded px-2 py-1 flex items-center gap-1.5">
                  <span className="font-telemetry text-[9px] text-red">{s}</span>
                  <span className={`font-telemetry text-[11px] font-bold ${purple ? "text-live" : "text-cream"}`}>{t}</span>
                  {purple && <span className="text-[8px] text-live">★</span>}
                </div>
              ))}
              <div className="bg-surface-3/90 border border-gold/30 rounded px-2 py-1">
                <span className="font-telemetry text-[10px] text-gold font-bold">1:10.346 ✦</span>
              </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3">
              <button
                onClick={() => setPlaying((p) => !p)}
                className="w-8 h-8 rounded-full bg-red flex items-center justify-center text-white text-sm hover:bg-red-light transition-colors"
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? "⏸" : "▶"}
              </button>

              <div className="flex-1 relative h-1 bg-white/10 rounded-full cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setProgress((e.clientX - rect.left) / rect.width);
                }}
              >
                <div className="h-full bg-red rounded-full transition-all" style={{ width: `${progress * 100}%` }} />
              </div>

              <div className="flex gap-1">
                {[0.5, 1, 2, 4].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpeed(s)}
                    className={`font-telemetry text-[9px] px-1.5 py-0.5 rounded transition-colors ${speed === s ? "bg-red text-white" : "text-cream/40 hover:text-cream"}`}
                  >
                    {s}×
                  </button>
                ))}
              </div>

              <button
                onClick={() => setShowCorners((c) => !c)}
                className={`font-body text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border transition-colors ${showCorners ? "border-red text-red" : "border-white/20 text-cream/40"}`}
              >
                Corners
              </button>
            </div>
          </div>

          {/* Telemetry data panel */}
          <div
            className="rounded border border-live/20 p-4 space-y-4"
            style={{ background: "#001A00" }}
          >
            <div className="font-telemetry text-[9px] text-live/70 tracking-widest">TELEMETRY</div>

            <div>
              <div className="font-telemetry text-[9px] text-live/50 mb-1">SPEED</div>
              <div className="font-telemetry text-[36px] font-bold text-cream leading-none">{currentSpeed}</div>
              <div className="font-telemetry text-[10px] text-live">km/h</div>
            </div>

            <div>
              <div className="font-telemetry text-[9px] text-live/50 mb-1">GEAR</div>
              <div className="font-telemetry text-[36px] font-bold text-red leading-none">{gear}</div>
            </div>

            <div>
              <div className="font-telemetry text-[9px] text-live/50 mb-2">THROTTLE</div>
              <div className="h-28 w-5 bg-red/10 rounded-sm relative overflow-hidden">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-red transition-all duration-100 rounded-sm"
                  style={{ height: `${throttle}%` }}
                />
              </div>
              <div className="font-telemetry text-[10px] text-red mt-1">{throttle}%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
