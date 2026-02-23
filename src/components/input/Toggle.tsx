"use client";

import { useState } from "react";

export interface ToggleProps {
  label?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export function Toggle({
  label,
  defaultChecked = false,
  onChange,
  disabled = false,
}: ToggleProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    if (disabled) return;
    const newValue = !checked;
    setChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <label className="inline-flex items-center gap-3 cursor-pointer group">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={handleToggle}
        disabled={disabled}
        className={`
          relative w-12 h-6 rounded-full transition-all
          focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2 focus:ring-offset-night-bg
          disabled:opacity-50 disabled:cursor-not-allowed
          ${checked ? "bg-mint" : "bg-white/[0.12]"}
        `}
      >
        <span
          className={`
            absolute top-0.5 w-5 h-5 rounded-full bg-canvas shadow-md transition-transform
            ${checked ? "translate-x-6" : "translate-x-0.5"}
          `}
        />
      </button>
      {label && (
        <span className="font-mono text-sm text-canvas group-hover:text-canvas/90">
          {label}
        </span>
      )}
    </label>
  );
}
