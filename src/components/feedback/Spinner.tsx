export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  variant?: "mint" | "canvas" | "current";
}

export function Spinner({ size = "md", variant = "mint" }: SpinnerProps) {
  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-2",
    lg: "w-12 h-12 border-3",
  };

  const variants = {
    mint: "border-mint/30 border-t-mint",
    canvas: "border-canvas/30 border-t-canvas",
    current: "border-current/30 border-t-current",
  };

  return (
    <div
      className={`
        ${sizes[size]} ${variants[variant]}
        rounded-full animate-spin
      `}
      role="status"
      aria-label="Loading"
    />
  );
}
