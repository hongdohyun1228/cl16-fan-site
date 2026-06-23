"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  className?: string;
  suffix?: string;
  isLapTime?: boolean;
}

function easeInFerri(t: number): number {
  // cubic-bezier(0.22, 0.61, 0.36, 1) approximation
  return 1 - Math.pow(1 - t, 3);
}

export function AnimatedCounter({
  target,
  duration = 1200,
  className,
  suffix = "",
  isLapTime = false,
}: AnimatedCounterProps) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!inView) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInFerri(progress);

      if (isLapTime) {
        // Count DOWN from target+5 to target
        setCurrent(target + 5 - eased * 5);
      } else {
        setCurrent(Math.floor(eased * target));
      }

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCurrent(target);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, target, duration, isLapTime]);

  const display = isLapTime
    ? current.toFixed(3)
    : Math.floor(current).toString();

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
