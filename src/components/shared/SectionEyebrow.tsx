import { cn } from "@/lib/utils";

interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionEyebrow({ children, className }: SectionEyebrowProps) {
  return (
    <div className={cn("section-divider mb-3", className)}>
      <span className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-red whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}
