import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  arrow,
  children,
  className,
  external,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4DA6FF] focus-visible:outline-offset-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#0052CC] to-[#0066FF] hover:from-[#0044B3] hover:to-[#0052CC] text-white !text-white font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5",
    secondary:
      "bg-white text-[#0052CC] !text-[#0052CC] font-bold border border-blue-200 hover:border-[#0052CC] shadow-sm hover:-translate-y-0.5",
    ghost:
      "bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-200",
    outline:
      "bg-transparent border-2 border-[#0066FF] text-[#0066FF] !text-[#0066FF] hover:bg-[#0066FF] hover:!text-white font-bold",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {arrow && <ArrowRight size={size === "sm" ? 14 : 16} />}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {arrow && <ArrowRight size={size === "sm" ? 14 : 16} />}
    </button>
  );
}
