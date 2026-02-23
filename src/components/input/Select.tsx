import { SelectHTMLAttributes, forwardRef } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block font-mono text-xs uppercase tracking-wider text-canvas/70 mb-2">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-md font-mono text-sm
            bg-white/[0.04] border transition-all
            text-canvas
            focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? "border-coral" : "border-white/[0.08] hover:border-white/[0.12]"}
            ${className}
          `}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-night-bg">
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1.5 font-mono text-xs text-coral">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
