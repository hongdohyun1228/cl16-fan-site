"use client";

import { ScrollReveal, StaggerReveal } from "@/components/shared/ScrollReveal";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { Badge } from "@/components/shared/Badge";

export function EditorialSection() {
  return (
    <section className="py-16 px-8 border-b border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <SectionEyebrow className="mb-8">The Latest</SectionEyebrow>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
          {/* Large editorial card */}
          <ScrollReveal>
            <article className="group bg-surface border border-white/[0.08] rounded overflow-hidden hover:border-red/30 transition-colors duration-250 cursor-pointer">
              {/* Photo placeholder */}
              <div className="w-full aspect-video bg-surface-3 flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="font-display font-black text-[40px] text-red/10 leading-none">🏎</div>
                  <div className="font-body text-[10px] text-cream/20 mt-1 tracking-widest uppercase">
                    Race Photograph
                  </div>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(220,20,60,0.15) 0%, transparent 60%)" }}
                />
              </div>
              <div className="p-6">
                <Badge variant="red" className="mb-3">Race Report</Badge>
                <h3 className="font-display font-black text-[24px] uppercase leading-[1.1] text-cream mb-3">
                  The four-tenths nobody saw coming
                </h3>
                <p className="font-body text-[14px] text-cream/60 leading-[1.65] mb-4">
                  Charles Leclerc's final qualifying run in Monaco didn't just secure pole. It left
                  the entire paddock silent.
                </p>
                <span className="font-body text-[10px] font-bold tracking-[0.1em] uppercase text-red">
                  Read More →
                </span>
              </div>
            </article>
          </ScrollReveal>

          {/* Side cards */}
          <div className="flex flex-col gap-4">
            <ScrollReveal delay={0.08}>
              <div className="bg-surface border border-white/[0.08] rounded p-5 hover:border-red/25 transition-colors duration-200 cursor-pointer">
                <div className="font-body text-[10px] font-bold tracking-[0.1em] uppercase text-cream/40 mb-3">
                  Stat of the Week
                </div>
                <div className="font-display font-black text-[48px] leading-none text-cream mb-1">
                  +0.412<span className="text-[22px] text-red">s</span>
                </div>
                <p className="font-body text-[12px] text-cream/50 leading-[1.55]">
                  Leclerc's advantage over second place in Q3 Monaco qualifying. More than four-tenths.
                  On a circuit where hundredths decide everything.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <div className="bg-surface border border-white/[0.08] rounded p-5 hover:border-red/25 transition-colors duration-200 cursor-pointer flex-1">
                <div className="font-body text-[10px] font-bold tracking-[0.1em] uppercase text-gold mb-2">
                  Tifosi Leaderboard
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-red/20 border border-red/30 flex items-center justify-center text-lg">
                    🏆
                  </div>
                  <div>
                    <div className="font-body text-[13px] font-semibold text-cream">FerrariForever</div>
                    <div className="font-body text-[11px] text-cream/40">Week 23 Champion</div>
                  </div>
                </div>
                <div className="font-telemetry text-[14px] font-bold text-gold">9,870 pts</div>
                <div className="font-body text-[10px] text-cream/30 mt-1">Leggenda tier</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
