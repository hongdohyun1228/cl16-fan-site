"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const TIMELINE_EVENTS = [
  { lap: "Pole", label: "Qualified on pole for the 3rd time", color: "text-live" },
  { lap: "Lap 1", label: "Clean start from P1", color: "text-live" },
  { lap: "Lap 23", label: "Safety car — gap maintained", color: "text-gold" },
  { lap: "Lap 50", label: "Gap +4.2s and building", color: "text-live" },
  { lap: "Lap 78", label: "Chequered flag — HOME", color: "text-red" },
];

const CLOSING_WORDS =
  "Charles Leclerc had driven through Monaco a thousand times before as a child. To school. To the beach. Past the barriers he would one day race behind. He always knew he would win here. He just had to make everyone else believe it too.".split(" ");

export function ChapterMonaco() {
  const heroRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  const closingInView = useInView(closingRef, { once: true });

  return (
    <section className="border-b border-white/[0.06]">
      {/* Full-viewport hero */}
      <div
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(220,20,60,0.12) 0%, #0A0A0A 70%)",
        }}
      >
        {/* Eyebrow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 font-body text-[10px] font-bold tracking-[0.2em] uppercase text-red">
          Monaco Grand Prix · 26 May 2024
        </div>

        <div className="text-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="font-display font-black uppercase leading-[0.88] text-cream"
              style={{ fontSize: "clamp(72px, 14vw, 160px)" }}
            >
              HOME.
            </h2>
            <h2
              className="font-display font-black uppercase leading-[0.88] text-cream"
              style={{ fontSize: "clamp(72px, 14vw, 160px)" }}
            >
              FINALLY.
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Race content */}
      <div className="max-w-[1200px] mx-auto px-8 py-16 space-y-14">
        {/* Race timeline */}
        <ScrollReveal>
          <div className="bg-surface-2 border border-white/[0.06] rounded p-6">
            <div className="font-telemetry text-[9px] text-red mb-5 tracking-[0.15em]">
              RACE TIMELINE · LAP BY LAP
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-0">
              {TIMELINE_EVENTS.map((event, i) => (
                <div
                  key={event.lap}
                  className="flex flex-col items-center text-center px-2 py-3 border-r border-white/[0.06] last:border-r-0"
                >
                  <div className={`font-body text-[11px] font-bold mb-1 ${event.color}`}>
                    {event.lap}
                  </div>
                  <div className="font-body text-[10px] text-cream/40 leading-tight">
                    {event.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* The race */}
        <ScrollReveal>
          <div>
            <h3 className="font-display font-black text-[28px] uppercase text-cream mb-4">
              Seventy-eight laps. One city. Twenty-seven years.
            </h3>
            <p className="font-body text-[15px] text-cream/65 leading-[1.75] mb-4">
              He had won in Bahrain. He had won in Monza. He had won in Azerbaijan and Singapore and
              Austria and Australia. He had never won in Monaco.
            </p>
            <p className="font-body text-[15px] text-cream/65 leading-[1.75]">
              In 2024, Charles Leclerc started from pole position at the Monaco Grand Prix for the
              third time in his career. This time, the car held. The strategy held. The pressure held.
              On lap 78, he crossed the line first and the circuit where he had grown up became,
              for a few extraordinary minutes, the loudest place on earth.
            </p>
          </div>
        </ScrollReveal>

        {/* Radio */}
        <ScrollReveal>
          <div className="border border-gold/30 bg-gold/[0.04] rounded p-6">
            <div className="font-telemetry text-[9px] text-gold mb-4 tracking-[0.15em]">
              TEAM RADIO · MONACO 2024 · LAP 78 — THE MOMENT
            </div>
            <div className="space-y-3">
              <div className="font-body text-[15px] text-cream/70">
                <span className="font-bold text-cream">Engineer:</span>{" "}
                "P1 Charles! P1 Charles! This is for you. This is for Monaco."
              </div>
              <div className="font-body text-[16px] text-cream">
                <span className="font-bold">Charles:</span>{" "}
                <em>"For Jules. This one's for Jules."</em>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* The podium */}
        <ScrollReveal>
          <div>
            <h3 className="font-display font-black text-[24px] uppercase text-cream mb-4">
              The city stood still
            </h3>
            <p className="font-body text-[15px] text-cream/65 leading-[1.75]">
              He stood on the top step and looked out at the harbour below — the harbour his father
              had raced around, the harbour he had cycled past every morning to school. He held the
              trophy and he wept. No one who watched it could quite explain why it affected them as
              deeply as it did. Perhaps because it had taken this long. Perhaps because some victories
              feel earned in ways that go beyond a single race.
            </p>
          </div>
        </ScrollReveal>

        {/* Closing paragraph */}
        <div ref={closingRef} className="py-10 text-center">
          <p
            className="font-display font-light italic leading-[1.35] text-cream mx-auto"
            style={{ fontSize: "clamp(20px, 3vw, 32px)", maxWidth: "800px" }}
          >
            {CLOSING_WORDS.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 4 }}
                animate={closingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.035, duration: 0.2, ease: "easeIn" }}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>

        {/* World Champion */}
        <ScrollReveal>
          <div className="text-center border border-gold/30 bg-gold/[0.04] rounded py-10 px-6">
            <div className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-gold mb-3">
              FIA Formula 1 World Drivers' Championship
            </div>
            <div
              className="font-display font-black uppercase leading-[0.9] text-gold"
              style={{ fontSize: "clamp(48px, 8vw, 80px)" }}
            >
              World<br />Champion
            </div>
            <div className="font-telemetry text-[14px] text-gold-light mt-3">2024</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
