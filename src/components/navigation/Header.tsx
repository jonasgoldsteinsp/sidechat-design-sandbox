"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/foundations", label: "Foundations" },
    { href: "/components", label: "Components" },
    { href: "/patterns", label: "Patterns" },
    { href: "/tokens", label: "Tokens" },
    { href: "/docs", label: "Docs" },
  ];

  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-white/[0.06] flex-shrink-0">
      <Link
        href="/"
        className="font-display text-2xl font-light tracking-tight text-canvas hover:opacity-80 transition-opacity"
      >
        Side<em className="italic text-mint">chat.</em>
      </Link>

      <nav className="flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`
              font-mono text-xs uppercase tracking-wider transition-all
              border-b-[1.5px] pb-1
              ${
                pathname === item.href
                  ? "text-canvas border-canvas"
                  : "text-ink-muted border-transparent hover:text-canvas"
              }
            `}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-mint flex items-center justify-center font-display text-sm font-semibold text-ink">
          D
        </div>
        <span className="font-mono text-sm text-canvas">Designer</span>
      </div>
    </header>
  );
}
