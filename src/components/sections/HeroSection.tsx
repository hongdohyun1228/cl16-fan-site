"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden bg-carbon"
      aria-label="Charles Leclerc hero"
    >
      {/* Background gradient layers */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 70% 50%, rgba(220,20,60,0.18) 0%, transparent 70%), radial-gradient(ellipse 30% 40% at 75% 30%, rgba(201,168,76,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* #16 watermark */}
      <div
        className="absolute right-[-20px] top-1/2 -translate-y-1/2 font-display font-black leading-none select-none pointer-events-none"
        style={{
          fontSize: "clamp(120px, 25vw, 280px)",
          color: "rgba(220,20,60,0.05)",
          letterSpacing: "-0.04em",
        }}
      >
        #16
      </div>

      {/* Monaco flag pill (fixed) */}
      <div className="absolute top-6 right-8 font-body text-[10px] font-bold tracking-[0.12em] uppercase border border-red/30 bg-red/10 text-red px-3 py-1.5 rounded-sm">
        🇲🇨 Monégasque
      </div>

      {/* Hero content */}
      <div className="relative z-10 px-8 md:px-16 pb-16 md:pb-24 max-w-[1200px] mx-auto w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-cream/70 mb-4"
        >
          Scuderia Ferrari · Driver #16 · Monaco, 1997
        </motion.div>

        {/* H1 — CHARLES */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
            animate={loaded ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.38, duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-display font-black uppercase leading-[0.88] text-cream"
            style={{ fontSize: "clamp(64px, 12vw, 120px)", letterSpacing: "-0.01em" }}
          >
            CHARLES
          </motion.h1>
        </div>

        {/* H1 — LECLERC */}
        <div className="overflow-hidden mb-6">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
            animate={loaded ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.46, duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-display font-black uppercase leading-[0.88] text-red"
            style={{ fontSize: "clamp(64px, 12vw, 120px)", letterSpacing: "-0.01em" }}
            aria-hidden
          >
            LECLERC
          </motion.div>
        </div>

        {/* Red underline sweep */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={loaded ? { scaleX: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          className="h-[2px] bg-red mb-6 origin-left"
          style={{ maxWidth: "clamp(280px, 40vw, 480px)" }}
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-display font-light text-[clamp(16px,2.5vw,22px)] text-cream/70 max-w-[380px] leading-[1.3] mb-8 tracking-[0.02em]"
        >
          Monaco's son. Ferrari's heart.
          <br />
          The fastest man through the streets
          <br />
          he grew up on.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ delay: 1.1, duration: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            href="/story"
            className="font-body text-[10px] font-bold tracking-[0.1em] uppercase border border-red text-cream px-[22px] py-[10px] rounded-sm hover:bg-red transition-all duration-150"
          >
            Enter the Universe →
          </Link>
          <button
            className="font-body text-[11px] font-semibold tracking-[0.08em] uppercase text-cream/70 hover:text-cream transition-colors duration-150 flex items-center gap-2"
            onClick={() => {
              const el = document.getElementById("story-teaser");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="w-8 h-8 rounded-full border border-cream/30 flex items-center justify-center text-sm">
              ▶
            </span>
            Watch His Story
          </button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 0.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[2px] h-10 bg-gradient-to-b from-red to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
