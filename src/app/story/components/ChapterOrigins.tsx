"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ChapterOrigins() {
  return (
    <section className="py-20 border-b border-white/[0.06]">
      {/* Chapter header */}
      <div className="px-8 max-w-[1200px] mx-auto mb-16">
        <div className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-red/70 mb-2">
          Monaco, 1997–2011
        </div>
        <h2
          className="font-display font-black uppercase leading-[0.92] text-cream"
          style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
        >
          Hervé's Son
        </h2>
      </div>

      {/* Timeline layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] max-w-[1200px] mx-auto px-8 gap-12">
        {/* Sticky timeline */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="relative pl-6">
              <div className="absolute left-3 top-2 bottom-2 w-[2px] bg-red/20" />
              {["1997", "2001", "2005", "2009", "2011"].map((year, i) => (
                <div key={year} className="mb-8 relative">
                  <div className="absolute -left-[14px] top-[5px] w-3 h-3 rounded-full border-2 border-red bg-carbon" />
                  <div className="font-telemetry text-[11px] text-red mb-1">{year}</div>
                  <div className="font-body text-[12px] text-cream/40 leading-[1.5]">
                    {["Monaco birth", "First kart session", "Karting trophies", "FDA attention", "Junior contract"][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="space-y-16">
          {/* Block: Born */}
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-2/5 w-full">
                <div className="aspect-[4/3] bg-surface-2 rounded flex items-center justify-center border border-white/[0.06]">
                  <div className="text-center">
                    <div className="text-[48px]">👶</div>
                    <div className="font-body text-[10px] text-cream/20 mt-1 uppercase tracking-widest">Young Charles, Monaco</div>
                  </div>
                </div>
              </div>
              <div className="lg:w-3/5">
                <h3 className="font-display font-black text-[28px] uppercase text-cream mb-4">
                  The boy who raced gods
                </h3>
                <p className="font-body text-[15px] text-cream/65 leading-[1.75] mb-4">
                  Charles Marc Hervé Perceval Leclerc was born on the 16th of October, 1997,
                  in the Principality of Monaco. His father, Hervé Leclerc, raced cars. His godfather,
                  Jules Bianchi, would go on to become a Formula 1 driver. Charles didn't choose this
                  world. He was born into it.
                </p>
                <p className="font-body text-[15px] text-cream/65 leading-[1.75]">
                  The family home sat within walking distance of the circuit where the greatest drivers
                  on earth raced every May. Charles would stand at the barriers as a child, watching
                  the machinery blur past, close enough to feel the pressure wave on his chest.
                  He did not dream of racing. He assumed it.
                </p>
                <div className="mt-6 bg-surface-2 border border-white/[0.06] rounded p-4 inline-block">
                  <div className="font-telemetry text-[10px] text-red mb-1">PULL STAT</div>
                  <div className="font-telemetry text-[13px] text-cream">Age 4 — First kart session, Cap d'Ail circuit</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Block: Karting */}
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="font-display font-black text-[28px] uppercase text-cream mb-4">
                The fastest kid on the Riviera
              </h3>
              <p className="font-body text-[15px] text-cream/65 leading-[1.75] mb-4">
                At four years old, Charles sat in a kart for the first time at the Cap d'Ail circuit
                just outside Monaco. By his early teens, he was winning regional championships and
                attracting attention from the Ferrari Driver Academy — the most coveted talent programme
                in motorsport.
              </p>
              <p className="font-body text-[15px] text-cream/65 leading-[1.75]">
                His style was already distinctive: a smooth entry into corners that preserved rear
                traction, combined with an aggression under braking that older, more experienced drivers
                found difficult to counter. Ferrari noticed. They always notice.
              </p>
            </div>
          </ScrollReveal>

          {/* Block: Jules - special treatment */}
          <ScrollReveal delay={0.05}>
            <div
              className="rounded p-8 border-l-2 border-gold"
              style={{ background: "rgba(6,0,6,0.9)" }}
            >
              <h3 className="font-display font-black text-[28px] uppercase text-cream mb-4">
                The mentor, the loss, the promise
              </h3>
              <p className="font-body text-[15px] text-cream/65 leading-[1.75] mb-4">
                Jules Bianchi was more than a godfather. He was the proof that Monaco could produce
                a Formula 1 driver. He was Charles's benchmark, his big brother in the sport, the one
                who told him — with the certainty of someone who believed it absolutely — that Charles
                would one day be World Champion.
              </p>
              <p className="font-body text-[15px] text-cream/65 leading-[1.75] mb-4">
                On the 5th of October 2014, Jules Bianchi was involved in a catastrophic accident at
                the Japanese Grand Prix. He never regained consciousness. He died on the 17th of July,
                2015. Charles Leclerc was 17 years old.
              </p>
              <p className="font-body text-[15px] text-cream/65 leading-[1.75] mb-8">
                In every interview since, in every cockpit camera that catches his eyes before the
                lights go out, there is something that was not there before. A weight. A purpose.
                A person he is driving for.
              </p>
              <blockquote className="border-l border-gold/50 pl-5">
                <p className="font-display font-light text-[22px] text-cream italic leading-[1.35] mb-2">
                  "Jules told me I could be Formula 1 World Champion. I intend to prove him right."
                </p>
                <cite className="font-body text-[11px] text-cream/40 not-italic">— Charles Leclerc</cite>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
