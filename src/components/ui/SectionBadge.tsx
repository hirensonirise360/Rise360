import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  label?: string;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export function SectionBadge({ label, title, children, className }: SectionBadgeProps) {
  const content = label || title || children;
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-slow" />
      {content}
    </div>
  );
}
