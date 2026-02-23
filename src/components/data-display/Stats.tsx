import { ReactNode } from "react";

export interface StatsProps {
  label: string;
  value: string | number;
  change?: {
    value: string;
    trend: "up" | "down" | "neutral";
  };
  icon?: ReactNode;
}

export function Stats({ label, value, change, icon }: StatsProps) {
  const trendColors = {
    up: "text-mint",
    down: "text-coral",
    neutral: "text-amber",
  };

  return (
    <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg p-5 hover:bg-white/[0.06] transition-colors">
      <div className="flex items-start justify-between mb-3">
        <span className="font-mono text-xs uppercase tracking-wider text-canvas/60">
          {label}
        </span>
        {icon && <div className="text-xl">{icon}</div>}
      </div>
      <div className="font-display text-3xl font-semibold tracking-tight mb-1">
        {value}
      </div>
      {change && (
        <div className={`font-mono text-xs ${trendColors[change.trend]}`}>
          {change.value}
        </div>
      )}
    </div>
  );
}
