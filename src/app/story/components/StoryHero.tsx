"use client";

import { motion } from "framer-motion";

export function StoryHero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/[0.06]">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(220,20,60,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Large chapter number watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(200px, 35vw, 360px)", color: "rgba(220,20,60,0.04)" }}
        aria-hidden
      >
        01
      </div>

      <div className="text-center px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-body text-[10px] font-bold tracking-[0.22em] uppercase text-red mb-4"
        >
          1997 → Present
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-display font-black uppercase leading-[0.88] text-cream mb-8"
          style={{ fontSize: "clamp(52px, 9vw, 96px)" }}
        >
          The Boy From<br />
          <span className="text-red">Monte Carlo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-display font-light text-[clamp(16px,2.5vw,22px)] text-cream/65 italic max-w-[680px] mx-auto leading-[1.4]"
        >
          There is a corner in Monaco, just before the tunnel, where Charles Leclerc
          first understood what speed felt like. He was seven years old, watching his father
          race. He never forgot the feeling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 font-body text-[11px] text-cream/40"
        >
          ~12 min read · 5 chapters
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-red/60 to-transparent mx-auto"
        />
      </div>
    </div>
  );
}
