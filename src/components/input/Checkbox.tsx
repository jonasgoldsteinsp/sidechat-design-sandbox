"use client";

import { InputHTMLAttributes, ReactNode } from "react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: ReactNode;
}

export function Checkbox({ label, className = "", ...props }: CheckboxProps) {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer group">
      <input
        type="checkbox"
        className={`
          w-5 h-5 rounded border-2 cursor-pointer
          bg-white/[0.04] border-white/[0.12]
          text-mint focus:ring-2 focus:ring-mint focus:ring-offset-2 focus:ring-offset-night-bg
          transition-all
          checked:bg-mint checked:border-mint
          hover:border-white/[0.2]
          disabled:opacity-50 disabled:cursor-not-allowed
          ${className}
        `}
        {...props}
      />
      {label && (
        <span className="font-mono text-sm text-canvas group-hover:text-canvas/90">
          {label}
        </span>
      )}
    </label>
  );
}
