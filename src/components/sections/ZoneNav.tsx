"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { ZONE_CARDS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ZoneNav() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="py-20 px-8 bg-surface/30 border-b border-white/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionEyebrow className="mb-4">Explore the Universe</SectionEyebrow>
        <h2
          className="font-display font-black uppercase leading-[0.92] text-cream mb-12"
          style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
        >
          Six Zones. One Driver.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ZONE_CARDS.map((zone, i) => (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.06,
                duration: 0.4,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            >
              <Link href={zone.href}>
                <article
                  className={cn(
                    "group relative bg-surface border border-white/[0.08] rounded p-5",
                    "overflow-hidden cursor-pointer",
                    "red-bar-left",
                    "transition-all duration-250",
                    "hover:border-red/35 hover:bg-red/[0.03] hover:-translate-y-[2px]"
                  )}
                >
                  {/* Background circuit SVG hint */}
                  <div className="absolute inset-0 flex items-center justify-end pr-4 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity">
                    <div
                      className="font-display font-black text-[80px] leading-none text-red"
                      aria-hidden
                    >
                      {zone.icon}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="text-[28px] mb-3">{zone.icon}</div>
                    <h3 className="font-display font-bold text-[22px] uppercase text-cream mb-1">
                      {zone.name}
                    </h3>
                    <div className="font-body text-[11px] font-bold tracking-[0.06em] uppercase text-red mb-2">
                      {zone.tagline}
                    </div>
                    <p className="font-body text-[13px] text-cream/55 leading-[1.55] mb-4">
                      {zone.description}
                    </p>
                    <span className="font-body text-[9px] font-bold tracking-[0.1em] uppercase text-red opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                      → Enter
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
