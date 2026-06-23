"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";

const BEYOND_CARDS = [
  {
    emoji: "🎹",
    headline: "Scales before sectors",
    body: "Before race weekends, Charles Leclerc plays piano. Not as a hobby — as preparation. The same mental discipline that isolates a braking zone also isolates a musical passage. He started at age six. He still practises on race weekends.",
    imageLabel: "Charles at a grand piano",
  },
  {
    emoji: "🇲🇨",
    headline: "Not a resident. A local.",
    body: "Most drivers who live in Monaco arrived for the tax advantages. Charles Leclerc grew up there. The streets he races in May are the streets where he learned to ride a bicycle. When he wins in Monaco, it means something different for him than for any other driver in the field.",
    imageLabel: "Charles in Monaco streets",
  },
  {
    emoji: "❤️",
    headline: "Giving back to the grid",
    body: "Through his support of the Jules Bianchi Foundation and various charitable initiatives, Charles Leclerc has been consistent about using his platform in a way that extends beyond the paddock. He is, in this as in racing, precise and deliberate.",
    imageLabel: "Charitable work",
  },
];

export function BeyondCockpit() {
  return (
    <section className="py-20 px-8 border-b border-white/[0.06] bg-surface/20">
      <div className="max-w-[1200px] mx-auto">
        <SectionEyebrow className="mb-4">Three things they don't tell you</SectionEyebrow>
        <h2
          className="font-display font-black uppercase leading-[0.92] text-cream mb-12"
          style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
        >
          The Man Behind<br />the Visor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BEYOND_CARDS.map((card, i) => (
            <ScrollReveal key={card.headline} delay={i * 0.1}>
              <div className="bg-surface border border-white/[0.08] rounded overflow-hidden hover:border-red/25 transition-colors duration-200">
                <div className="aspect-[4/3] bg-surface-2 flex items-center justify-center border-b border-white/[0.06]">
                  <div className="text-center">
                    <div className="text-[44px]">{card.emoji}</div>
                    <div className="font-body text-[10px] text-cream/20 mt-1 uppercase tracking-widest">
                      {card.imageLabel}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-black text-[20px] uppercase text-cream mb-3">
                    {card.headline}
                  </h3>
                  <p className="font-body text-[13px] text-cream/55 leading-[1.65]">{card.body}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
