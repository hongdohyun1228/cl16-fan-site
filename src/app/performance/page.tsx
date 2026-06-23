"use client";
import type { Metadata } from "next";
import { MonacoLapReplay } from "./components/MonacoLapReplay";
import { QualifyingPace } from "./components/QualifyingPace";
import { SeasonComparison } from "./components/SeasonComparison";
import { StrategyExplorer } from "./components/StrategyExplorer";

export const metadata: Metadata = {
  title: "Charles Leclerc Telemetry & Stats — Performance Lab",
  description:
    "Deep dive into Charles Leclerc's race telemetry, qualifying pace analysis, and season statistics.",
};

export default function PerformancePage() {
  return (
    <>
      {/* Terminal header */}
      <div className="px-8 py-12 border-b border-live/20" style={{ background: "#001A00" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="font-telemetry text-[10px] text-live mb-4 tracking-[0.15em]">
            ● SYSTEM ACTIVE · DATA CURRENT · ALL SESSIONS LOGGED
          </div>
          <div className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-live/60 mb-2">
            Telemetry · Data · Analysis
          </div>
          <h1
            className="font-display font-black uppercase leading-[0.88] text-cream"
            style={{ fontSize: "clamp(48px, 8vw, 80px)" }}
          >
            Performance Lab
          </h1>
          <p className="font-body text-[15px] text-cream/50 mt-4 max-w-[480px]">
            The numbers behind the name.
          </p>
        </div>
      </div>

      <MonacoLapReplay />
      <QualifyingPace />
      <SeasonComparison />
      <StrategyExplorer />
    </>
  );
}
