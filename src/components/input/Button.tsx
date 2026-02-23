import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "mint" | "outline" | "danger" | "link";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-display font-semibold rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2 focus:ring-offset-night-bg disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-ink text-canvas border-2 border-ink hover:bg-transparent hover:text-canvas",
    ghost: "bg-transparent text-canvas border-2 border-ink hover:bg-ink hover:text-canvas",
    mint: "bg-mint text-ink border-2 border-mint hover:bg-mint-dark hover:border-mint-dark",
    outline: "bg-transparent text-canvas border-2 border-white/20 hover:border-mint hover:text-mint",
    danger: "bg-coral text-canvas border-2 border-coral hover:bg-coral-light hover:border-coral-light",
    link: "bg-transparent text-mint underline-offset-4 hover:underline p-0 h-auto",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
