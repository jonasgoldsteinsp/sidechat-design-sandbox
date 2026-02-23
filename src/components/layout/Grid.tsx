import { ReactNode } from "react";

export interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Grid({
  children,
  cols = 3,
  gap = "md",
  className = "",
}: GridProps) {
  const colsMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
    12: "grid-cols-12",
  };

  const gaps = {
    sm: "gap-3",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  };

  return (
    <div className={`grid ${colsMap[cols]} ${gaps[gap]} ${className}`}>
      {children}
    </div>
  );
}
