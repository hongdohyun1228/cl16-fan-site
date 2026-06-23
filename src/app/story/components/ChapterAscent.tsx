"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";

const CAREER_LADDER = [
  { year: "2011–15", series: "Karting", result: "Multiple titles" },
  { year: "2016", series: "Formula Renault / GP3", result: "GP3 Champion" },
  { year: "2017", series: "Formula 2", result: "F2 Champion · 282 pts" },
  { year: "2018", series: "Formula 1 — Alfa Romeo Sauber", result: "First F1 points" },
  { year: "2019", series: "Formula 1 — Scuderia Ferrari", result: "2 race wins" },
];

export function ChapterAscent() {
  return (
    <section className="py-20 border-b border-white/[0.06] bg-surface/20">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-red/70 mb-2">
          Formula Renault to Formula 1 · 2011–2018
        </div>
        <h2
          className="font-display font-black uppercase leading-[0.92] text-cream mb-12"
          style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}
        >
          Every Rung of the Ladder,<br />
          <span className="text-red">Taken at a Sprint</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Career ladder visualization */}
          <ScrollReveal>
            <div className="relative">
              <div className="font-body text-[10px] font-bold tracking-[0.15em] uppercase text-cream/40 mb-6">
                Career Ladder
              </div>
              <div className="relative">
                {CAREER_LADDER.map((rung, i) => (
                  <div
                    key={rung.year}
                    className="flex gap-4 pb-6 relative"
                    style={{ marginLeft: `${i * 20}px` }}
                  >
                    {/* Connector */}
                    {i < CAREER_LADDER.length - 1 && (
                      <div className="absolute left-3 top-8 bottom-0 w-[2px] bg-red/20" />
                    )}
                    {/* Dot */}
                    <div className="mt-1 w-6 h-6 rounded-full bg-red/10 border border-red/40 flex items-center justify-center flex-shrink-0 z-10">
                      <div className="w-2 h-2 rounded-full bg-red" />
                    </div>
                    <div>
                      <div className="font-telemetry text-[10px] text-red mb-1">{rung.year}</div>
                      <div className="font-body text-[14px] font-semibold text-cream">{rung.series}</div>
                      <div className="font-body text-[12px] text-cream/50">{rung.result}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Text content */}
          <div className="space-y-10">
            <ScrollReveal>
              <p className="font-body text-[15px] text-cream/65 leading-[1.75]">
                Most talented drivers spend five or six years moving through the junior formulae.
                Charles Leclerc did it in three. Formula Renault. GP3. Formula 2. Each category entered,
                each championship contested with the same mechanical intelligence: preserve the tyre,
                nail the sector, never leave time on the table.
              </p>
            </ScrollReveal>

            {/* F2 Championship block - gold treatment */}
            <ScrollReveal delay={0.1}>
              <div className="border border-gold/30 rounded p-6 bg-gold/[0.04]">
                <div className="font-body text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-4">
                  F2 Champion 2017
                </div>
                <h3 className="font-display font-black text-[24px] uppercase text-cream mb-3">
                  The year everything changed
                </h3>
                <p className="font-body text-[15px] text-cream/65 leading-[1.75] mb-5">
                  The 2017 Formula 2 season was the definitive performance. Charles Leclerc took the
                  title by 282 points — dominant in a series where the cars are too close for dominance
                  to come easily. Ferrari had seen enough. The contract was signed before the season ended.
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-telemetry text-[32px] font-bold text-gold">282</span>
                  <span className="font-body text-[13px] text-cream/50">championship points · F2 2017</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="font-display font-black text-[24px] uppercase text-cream mb-3">
                  The youngest Ferrari project since Schumi
                </h3>
                <p className="font-body text-[15px] text-cream/65 leading-[1.75]">
                  His first Formula 1 season with Alfa Romeo Sauber in 2018 was what the sport calls
                  a development year — which is a polite way of saying the car couldn't match his ability.
                  He finished sixth in Azerbaijan. He finished fifth in Italy. He put the car where it had
                  no right to be. By the time the season ended, the question was no longer whether Charles
                  Leclerc would drive for Ferrari. It was only a matter of when.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
