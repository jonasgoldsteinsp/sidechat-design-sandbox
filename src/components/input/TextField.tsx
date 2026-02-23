import { InputHTMLAttributes, forwardRef } from "react";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, helperText, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block font-mono text-xs uppercase tracking-wider text-canvas/70 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-md font-mono text-sm
            bg-white/[0.04] border transition-all
            text-canvas placeholder:text-canvas/40
            focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? "border-coral" : "border-white/[0.08] hover:border-white/[0.12]"}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-1.5 font-mono text-xs text-coral">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 font-mono text-xs text-canvas/50">{helperText}</p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";
