"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";

const STORY_MOMENTS = [
  {
    id: "origins",
    imageAlt: "Young Charles, karting, Monaco",
    headline: "The boy who raced gods",
    body: "Charles Leclerc grew up three corners from the circuit. He watched Formula 1 from the pavements of the Principality before he could read the lap times. Jules Bianchi was his godfather, his benchmark, his reason. The karting trophies came early. Ferrari came looking before he was seventeen.",
    link: "Read his full story →",
    imageLeft: true,
    emoji: "🏎",
  },
  {
    id: "bahrain",
    imageAlt: "Bahrain 2019, fist pump, podium",
    headline: "Bahrain. Race two. Ferrari.",
    body: "In only his second race for Scuderia Ferrari, Charles Leclerc crossed the finish line first. He was 21 years old. He radioed the team and his voice broke. The Tifosi, seven thousand kilometres away in Maranello, heard it.",
    link: "The race that changed everything →",
    imageLeft: false,
    emoji: "🏆",
  },
  {
    id: "monaco-2024",
    imageAlt: "Charles in Ferrari cockpit, Monaco 2024",
    headline: "Home. Finally.",
    body: "He had come close before. Four times, agonisingly close. In 2024, Charles Leclerc won the Monaco Grand Prix — the race he had circled on every calendar since childhood. He cried on the podium in the city where he was born.",
    link: "The race that made history →",
    imageLeft: true,
    emoji: "🇲🇨",
  },
];

export function StoryTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="story-teaser"
      ref={ref}
      className="py-20 px-8 border-b border-white/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionEyebrow className="mb-8">The Making of #16</SectionEyebrow>

        <div className="flex flex-col gap-0 divide-y divide-white/[0.06]">
          {STORY_MOMENTS.map((moment, i) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.15,
                duration: 0.45,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 py-12 items-center ${
                !moment.imageLeft ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <div className={!moment.imageLeft ? "[direction:ltr]" : ""}>
                <div className="aspect-[4/3] bg-surface-2 rounded flex items-center justify-center border border-white/[0.06] relative overflow-hidden group">
                  <div className="text-center">
                    <div className="font-display font-black text-[56px] text-red/10 leading-none group-hover:text-red/20 transition-colors duration-300">
                      {moment.emoji}
                    </div>
                    <div className="font-body text-[10px] text-cream/20 mt-2 tracking-widest uppercase">
                      {moment.imageAlt}
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, rgba(220,20,60,0.06) 0%, transparent 70%)",
                    }}
                  />
                </div>
              </div>

              {/* Text */}
              <div className={!moment.imageLeft ? "[direction:ltr]" : ""}>
                <h3
                  className="font-display font-black uppercase leading-[0.95] text-cream mb-4"
                  style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
                >
                  {moment.headline}
                </h3>
                <p className="font-body text-[15px] text-cream/65 leading-[1.75] mb-5">
                  {moment.body}
                </p>
                <Link
                  href="/story"
                  className="font-body text-[10px] font-bold tracking-[0.1em] uppercase text-red hover:text-red-light transition-colors"
                >
                  {moment.link}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
