export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "circle" | "rounded" | "square";
}

export function Avatar({
  src,
  alt,
  fallback,
  size = "md",
  variant = "circle",
}: AvatarProps) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-base",
    xl: "w-24 h-24 text-2xl",
  };

  const variants = {
    circle: "rounded-full",
    rounded: "rounded-lg",
    square: "rounded-none",
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt || ""}
        className={`${sizes[size]} ${variants[variant]} object-cover`}
      />
    );
  }

  return (
    <div
      className={`
        ${sizes[size]} ${variants[variant]}
        bg-mint flex items-center justify-center
        font-display font-semibold text-ink
      `}
    >
      {fallback}
    </div>
  );
}
