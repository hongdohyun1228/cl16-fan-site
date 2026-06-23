"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ChapterHunt() {
  return (
    <section className="py-20 border-b border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-red/70 mb-2">
          2022–2023 · The title fight
        </div>
        <h2
          className="font-display font-black uppercase leading-[0.92] text-cream mb-12"
          style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
        >
          So Close.<br />
          <span className="text-red">So Brutally Close.</span>
        </h2>

        <div className="space-y-14">
          {/* 2022 Opening */}
          <ScrollReveal>
            <div>
              <h3 className="font-display font-black text-[28px] uppercase text-cream mb-4">
                Three wins in the first three races.<br />
                Then the heartbreak began.
              </h3>
              <p className="font-body text-[15px] text-cream/65 leading-[1.75] mb-4">
                The 2022 season started like a declaration. Bahrain — first. Australia — first. The
                championship lead after two races stood at 46 points. The F1-75 was the fastest car
                in the field and Charles Leclerc was driving it at a level that made other drivers
                study his onboard footage.
              </p>
              <p className="font-body text-[15px] text-cream/65 leading-[1.75] mb-6">
                Then came Spain. Lap 27. A mechanical failure. The lead disappeared. Two weeks later:
                Monaco. His home race. He sat on pole. He led every lap. And then came the pit stop.
              </p>
              <div className="flex gap-8 bg-surface-2 border border-white/[0.06] rounded p-5 w-fit">
                <div>
                  <div className="font-telemetry text-[10px] text-live">After Australia R3</div>
                  <div className="font-display font-black text-[28px] text-cream">+46 <span className="text-[16px] text-live">pts ahead</span></div>
                </div>
                <div>
                  <div className="font-telemetry text-[10px] text-red">By British GP R10</div>
                  <div className="font-display font-black text-[28px] text-red">−80 <span className="text-[16px]">pts behind</span></div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Monaco 2022 - special treatment */}
          <ScrollReveal delay={0.05}>
            <div className="relative rounded overflow-hidden">
              <div className="aspect-video bg-surface-2 flex items-center justify-center border border-white/[0.06] mb-6 relative">
                <div className="text-center">
                  <div className="font-display font-black text-[48px] text-cream/10 leading-none">🇲🇨</div>
                  <div className="font-body text-[10px] text-cream/15 mt-2 tracking-widest uppercase">
                    Monaco 2022 — the image desaturates as you scroll
                  </div>
                </div>
              </div>
              <h3 className="font-display font-black text-[28px] uppercase text-cream mb-4">
                He led every lap. He did not win.
              </h3>
              <p className="font-body text-[15px] text-cream/65 leading-[1.75] mb-4">
                The Monaco Grand Prix, 2022. Charles Leclerc qualified on pole. He led the race from
                lights to flag — every single lap, for 77 of 78 laps. And then Ferrari called him in
                for a tyre change that, in hindsight, was the wrong call.
              </p>
              <p className="font-body text-[15px] text-cream/65 leading-[1.75] mb-4">
                He finished fourth. In Monaco. His home race. In a car that was, on that day, the
                fastest on the circuit. He sat in the cockpit for a long time before he climbed out.
              </p>
              <p className="font-body text-[15px] text-cream/50 leading-[1.75] italic">
                He said nothing in public. He went back to the factory. He trained harder. He came back
                the following year and qualified on pole again.
              </p>
            </div>
          </ScrollReveal>

          {/* 2023 */}
          <ScrollReveal delay={0.05}>
            <div>
              <h3 className="font-display font-black text-[24px] uppercase text-cream mb-4">
                Faster. Sharper. Ready.
              </h3>
              <p className="font-body text-[15px] text-cream/65 leading-[1.75]">
                The 2023 season was not the title year, but it was proof of concept. He set the fastest
                time in Singapore qualifying in conditions that made no meteorological sense. He won
                at Monza. He drove the second-fastest car better than the fastest car deserved to be
                beaten. Ferrari noted it. The engineers noted it. The fans noted it most of all.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
