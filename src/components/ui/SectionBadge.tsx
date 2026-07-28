import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  label: string;
  className?: string;
}

export function SectionBadge({ label, className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-slow" />
      {label}
    </div>
  );
}
