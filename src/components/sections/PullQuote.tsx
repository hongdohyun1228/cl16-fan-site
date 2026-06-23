"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WORDS =
  "In Monaco, we don't have a football club. We don't have a basketball team. We have Charles.".split(" ");

export function PullQuote() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="py-20 px-8 bg-red relative overflow-hidden"
      aria-label="Fan quote"
    >
      {/* Decorative large quote mark */}
      <div
        className="absolute top-0 left-6 font-display font-black leading-none text-[#9B0E28] select-none pointer-events-none"
        style={{ fontSize: "180px", lineHeight: 1 }}
        aria-hidden
      >
        &ldquo;
      </div>

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[800px] mx-auto text-center relative z-10">
        <blockquote>
          <p className="font-display font-light text-[clamp(22px,4vw,38px)] text-white italic leading-[1.25] mb-6">
            {WORDS.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 4 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.04,
                  duration: 0.2,
                  ease: "easeIn",
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </p>
          <motion.cite
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: WORDS.length * 0.04 + 0.2, duration: 0.3 }}
            className="font-body text-[11px] text-white/60 not-italic tracking-[0.08em]"
          >
            — Tifosi Community Member, Season Forum 2024
          </motion.cite>
        </blockquote>
      </div>
    </section>
  );
}
