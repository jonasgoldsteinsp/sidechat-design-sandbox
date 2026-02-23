import { ReactNode } from "react";

export interface BadgeProps {
  variant?: "mint" | "coral" | "cobalt" | "amber" | "dark" | "neutral";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  children: ReactNode;
}

export function Badge({
  variant = "neutral",
  size = "md",
  dot = false,
  children,
}: BadgeProps) {
  const variants = {
    mint: "bg-mint/15 text-mint-dark border-mint/20",
    coral: "bg-coral/12 text-coral border-coral/20",
    cobalt: "bg-cobalt/12 text-cobalt border-cobalt/20",
    amber: "bg-amber/12 text-amber border-amber/20",
    dark: "bg-ink text-canvas border-ink-soft",
    neutral: "bg-white/10 text-canvas border-white/20",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-3 py-1 text-xs",
    lg: "px-4 py-1.5 text-sm",
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 font-mono uppercase tracking-wider rounded-full border
        ${variants[variant]} ${sizes[size]}
      `}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
      )}
      {children}
    </span>
  );
}
