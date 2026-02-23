import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  variant?: "default" | "elevated" | "outlined";
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
}

export function Card({
  children,
  header,
  footer,
  variant = "default",
  padding = "md",
  className = "",
}: CardProps) {
  const variants = {
    default: "bg-white/[0.04] border border-white/[0.06]",
    elevated: "bg-white/[0.06] border border-white/[0.08] shadow-lg",
    outlined: "bg-transparent border-2 border-white/[0.12]",
  };

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div className={`rounded-lg ${variants[variant]} ${className}`}>
      {header && (
        <div className={`border-b border-white/[0.06] ${paddings[padding]}`}>
          {header}
        </div>
      )}
      <div className={paddings[padding]}>{children}</div>
      {footer && (
        <div className={`border-t border-white/[0.06] ${paddings[padding]}`}>
          {footer}
        </div>
      )}
    </div>
  );
}
