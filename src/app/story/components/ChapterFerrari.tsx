"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ChapterFerrari() {
  return (
    <section
      className="py-20 border-b border-white/[0.06]"
      style={{ background: "linear-gradient(180deg, #0A0A0A 0%, #120008 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-red/70 mb-2">
          Scuderia Ferrari · 2019–2021
        </div>
        <h2
          className="font-display font-black uppercase leading-[0.92] mb-12"
          style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}
        >
          First Blood at<br />
          <span className="text-red">Bahrain</span>
        </h2>

        <div className="space-y-16">
          {/* Bahrain 2019 */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="aspect-video bg-surface-2 rounded flex items-center justify-center border border-white/[0.06] relative overflow-hidden group">
                <div className="text-center z-10">
                  <div className="text-[56px]">🏁</div>
                  <div className="font-body text-[10px] text-cream/20 mt-1 uppercase tracking-widest">
                    Bahrain 2019
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-red/5 to-transparent" />
              </div>
              <div>
                <h3 className="font-display font-black text-[28px] uppercase text-red mb-4">
                  First blood at Bahrain
                </h3>
                <p className="font-body text-[15px] text-cream/65 leading-[1.75] mb-4">
                  Race two of the 2019 Formula 1 season. Sakhir, Bahrain. Charles Leclerc in a Ferrari,
                  leading the race. The car behind him was a Mercedes, driven by a five-time World
                  Champion. For the final ten laps, Lewis Hamilton was close enough to see the #16
                  on the rear wing.
                </p>
                <p className="font-body text-[15px] text-cream/65 leading-[1.75] mb-6">
                  He held on. He crossed the line first. His hands came off the wheel and into the air.
                  He was 21 years old and he had just won a Formula 1 race in a Ferrari.
                </p>
                {/* Radio transcript */}
                <div className="bg-surface-3 border border-white/[0.06] rounded p-4 mb-4">
                  <div className="font-telemetry text-[9px] text-red mb-3">TEAM RADIO · BAHRAIN 2019 · LAP 57</div>
                  <div className="space-y-2">
                    <div className="font-body text-[13px] text-cream/70">
                      <span className="font-bold text-cream">Engineer:</span>{" "}
                      "Keep pushing Charles. Keep pushing. You're doing it."
                    </div>
                    <div className="font-body text-[13px] text-cream/70">
                      <span className="font-bold text-cream">Charles:</span>{" "}
                      "Oh my God, oh my God."
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-red text-white font-body text-[9px] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-sm">P1</span>
                  <span className="font-telemetry text-[11px] text-cream/40">LAP 57/57</span>
                  <span className="font-telemetry text-[11px] text-cream/40">+0.857s</span>
                  <span className="font-telemetry text-[11px] text-gold">✦ FASTEST LAP</span>
                  <span className="font-telemetry text-[11px] text-cream/40">25 PTS</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Monza 2019 */}
          <ScrollReveal delay={0.05}>
            <div>
              <h3 className="font-display font-black text-[28px] uppercase text-cream mb-4">
                The Tifosi finally had their driver
              </h3>
              <p className="font-body text-[15px] text-cream/65 leading-[1.75] mb-4">
                The Italian Grand Prix has a particular electricity that no other race can replicate.
                Monza is Ferrari's home race — not just in geography, but in soul. When Charles Leclerc
                won there in 2019, just two weeks after Bahrain, 60,000 people in red became something
                beyond a crowd.
              </p>
              <blockquote className="border-l-2 border-red pl-5 bg-red/[0.03] py-4 rounded-r">
                <p className="font-display font-light text-[20px] text-cream italic leading-[1.35] mb-2">
                  "When I crossed the line, I heard the crowd even through my helmet. I have never felt
                  anything like it in a racing car."
                </p>
                <cite className="font-body text-[11px] text-cream/40 not-italic">
                  — Charles Leclerc, Italian Grand Prix 2019
                </cite>
              </blockquote>
            </div>
          </ScrollReveal>

          {/* Difficult years */}
          <ScrollReveal delay={0.05}>
            <div className="opacity-75">
              <h3 className="font-display font-black text-[24px] uppercase text-cream/70 mb-4">
                Talent without a car
              </h3>
              <p className="font-body text-[14px] text-cream/50 leading-[1.75] mb-4">
                The 2020 season was brutal. The SF1000 was the slowest Ferrari in sixteen years.
                Charles Leclerc extracted performances from it that the car's aerodynamic data
                suggested were impossible.
              </p>
              <p className="font-body text-[14px] text-cream/50 leading-[1.75]">
                He said in an interview that he had never worked harder in his life and shown less for it.
                He said it without self-pity. He went back to the simulator. He waited.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
