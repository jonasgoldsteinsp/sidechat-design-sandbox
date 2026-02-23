import { ReactNode } from "react";

export interface AlertProps {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  children: ReactNode;
  onClose?: () => void;
}

export function Alert({
  variant = "info",
  title,
  children,
  onClose,
}: AlertProps) {
  const variants = {
    info: {
      bg: "bg-cobalt/10",
      border: "border-cobalt/30",
      text: "text-cobalt-light",
      icon: "ℹ️",
    },
    success: {
      bg: "bg-mint/10",
      border: "border-mint/30",
      text: "text-mint-light",
      icon: "✓",
    },
    warning: {
      bg: "bg-amber/10",
      border: "border-amber/30",
      text: "text-amber",
      icon: "⚠",
    },
    error: {
      bg: "bg-coral/10",
      border: "border-coral/30",
      text: "text-coral-light",
      icon: "✕",
    },
  };

  const config = variants[variant];

  return (
    <div
      className={`
        rounded-lg border p-4
        ${config.bg} ${config.border}
      `}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <span className="text-lg flex-shrink-0">{config.icon}</span>
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className={`font-display font-semibold mb-1 ${config.text}`}>
              {title}
            </h4>
          )}
          <div className="font-mono text-sm text-canvas/80">{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-canvas/50 hover:text-canvas transition-colors flex-shrink-0"
            aria-label="Close alert"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
