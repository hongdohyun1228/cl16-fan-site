import { cn } from "@/lib/utils";

type BadgeVariant = "red" | "gold" | "white" | "live" | "win" | "podium" | "dnf" | "dns";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  red: "bg-red/10 text-red border border-red/25",
  gold: "bg-gold/12 text-gold-light border border-gold/25",
  white: "bg-white/[0.06] text-cream/70 border border-white/[0.12]",
  live: "bg-live/10 text-live border border-live/25",
  win: "bg-red text-white border border-red",
  podium: "bg-[#9E9E9E] text-[#111] border border-[#9E9E9E]",
  dnf: "bg-[#4A0010] text-cream/70 border border-[#4A0010]/60",
  dns: "bg-surface-2 text-cream/30 border border-white/[0.12]",
};

export function Badge({ variant = "white", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-body text-[9px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm leading-none",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function LiveDot() {
  return (
    <span className="inline-block w-1.5 h-1.5 rounded-full bg-live animate-pulse-dot" />
  );
}
