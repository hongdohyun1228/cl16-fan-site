"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "none";
  threshold?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const initial = {
    opacity: 0,
    y: direction === "up" ? 30 : 0,
    x: direction === "left" ? -30 : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({
  children,
  className,
  staggerMs = 80,
}: {
  children: React.ReactNode[];
  className?: string;
  staggerMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={cn(className)}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{
            duration: 0.4,
            delay: i * (staggerMs / 1000),
            ease: [0.22, 0.61, 0.36, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
