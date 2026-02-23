import { ReactNode } from "react";

export interface ListProps {
  children: ReactNode;
  variant?: "default" | "divided" | "bordered";
}

export function List({ children, variant = "default" }: ListProps) {
  const variants = {
    default: "",
    divided: "divide-y divide-white/[0.04]",
    bordered: "border border-white/[0.06] rounded-lg divide-y divide-white/[0.04]",
  };

  return <ul className={`${variants[variant]}`}>{children}</ul>;
}

export interface ListItemProps {
  children: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  onClick?: () => void;
}

export function ListItem({ children, icon, action, onClick }: ListItemProps) {
  const Component = onClick ? "button" : "li";

  return (
    <Component
      className={`
        flex items-center gap-3 px-4 py-3 w-full text-left
        ${onClick ? "hover:bg-white/[0.04] cursor-pointer transition-colors" : ""}
      `}
      onClick={onClick}
    >
      {icon && <div className="flex-shrink-0 text-lg">{icon}</div>}
      <div className="flex-1 min-w-0 font-mono text-sm text-canvas">{children}</div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </Component>
  );
}
