"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { CAREER_STATS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="bg-carbon-mid border-t border-b border-white/[0.08] py-10 px-8"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionEyebrow className="mb-8">A career in figures</SectionEyebrow>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0">
          {CAREER_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.1,
                duration: 0.4,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className={cn(
                "flex flex-col items-center text-center py-5 px-3",
                "border-r border-white/[0.08] last:border-r-0",
                "group hover:bg-red/[0.04] transition-colors duration-200"
              )}
            >
              <div
                className={cn(
                  "font-display font-black leading-none mb-2",
                  stat.isGold ? "text-gold" : "text-cream",
                  "text-[44px] sm:text-[52px]"
                )}
              >
                {inView ? (
                  <>
                    <AnimatedCounter
                      target={parseInt(stat.value)}
                      duration={1200}
                      className={stat.isGold ? "text-gold" : "text-cream"}
                    />
                    {stat.unit && (
                      <span
                        className={cn(
                          "text-[22px]",
                          stat.isGold ? "text-gold" : "text-red"
                        )}
                      >
                        {stat.unit}
                      </span>
                    )}
                  </>
                ) : (
                  <span>0</span>
                )}
              </div>
              <div className="font-body text-[9px] font-bold tracking-[0.12em] uppercase text-cream/50 group-hover:text-cream/70 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
