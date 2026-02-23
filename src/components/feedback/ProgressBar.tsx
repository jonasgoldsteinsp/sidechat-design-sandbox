export interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  variant?: "mint" | "cobalt" | "amber" | "coral";
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showValue = true,
  variant = "mint",
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  const variants = {
    mint: "bg-mint",
    cobalt: "bg-cobalt",
    amber: "bg-amber",
    coral: "bg-coral",
  };

  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex items-center justify-between mb-2">
          {label && (
            <span className="font-mono text-xs text-canvas/70">{label}</span>
          )}
          {showValue && (
            <span className="font-mono text-xs text-canvas/70">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div className="w-full h-2 bg-white/[0.08] rounded-full overflow-hidden">
        <div
          className={`h-full ${variants[variant]} transition-all duration-300 ease-out`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
}
