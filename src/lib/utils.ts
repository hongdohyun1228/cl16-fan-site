import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatLapTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = (seconds % 60).toFixed(3);
  return `${mins}:${secs.padStart(6, "0")}`;
}

export function formatGap(gap: number): string {
  return gap > 0 ? `+${gap.toFixed(3)}s` : `${gap.toFixed(3)}s`;
}

export function staggerDelay(index: number, base: number = 80): string {
  return `${index * base}ms`;
}
