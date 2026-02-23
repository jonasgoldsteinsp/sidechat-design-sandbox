"use client";

import { useEffect, useState } from "react";

export interface ToastProps {
  message: string;
  variant?: "info" | "success" | "warning" | "error";
  duration?: number;
  onClose?: () => void;
}

export function Toast({
  message,
  variant = "info",
  duration = 3000,
  onClose,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose?.(), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const variants = {
    info: "bg-cobalt border-cobalt-light",
    success: "bg-mint border-mint-light",
    warning: "bg-amber border-amber",
    error: "bg-coral border-coral-light",
  };

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-[500]
        px-5 py-3 rounded-lg border-l-4 shadow-lg
        bg-night-soft/95 backdrop-blur-sm border-r border-t border-b border-white/[0.1]
        transform transition-all duration-300
        ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        ${variants[variant]}
      `}
      role="status"
      aria-live="polite"
    >
      <p className="font-mono text-sm text-canvas">{message}</p>
    </div>
  );
}
