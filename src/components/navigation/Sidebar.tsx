"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  {
    title: "Foundations",
    items: [
      { href: "/foundations#color", label: "Color System", icon: "🎨" },
      { href: "/foundations#typography", label: "Typography", icon: "📝" },
      { href: "/foundations#spacing", label: "Spacing", icon: "📐" },
      { href: "/foundations#layout", label: "Layout Grid", icon: "⊞" },
    ],
  },
  {
    title: "Components",
    items: [
      { href: "/components#navigation", label: "Navigation", icon: "🧭" },
      { href: "/components#input", label: "Input", icon: "⌨️" },
      { href: "/components#feedback", label: "Feedback", icon: "💬" },
      { href: "/components#data", label: "Data Display", icon: "📊" },
      { href: "/components#media", label: "Media", icon: "🖼️" },
    ],
  },
  {
    title: "Resources",
    items: [
      { href: "/patterns", label: "Patterns", icon: "🔄" },
      { href: "/tokens", label: "Tokens", icon: "🎯" },
      { href: "/docs", label: "Documentation", icon: "📚" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 border-r border-white/[0.06] flex-shrink-0 overflow-y-auto p-4">
      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-2 px-3">
              {section.title}
            </h3>
            <nav className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center gap-2.5 px-3 py-2 rounded-md text-sm
                      transition-all font-mono
                      ${
                        isActive
                          ? "bg-white/[0.08] text-canvas"
                          : "text-ink-muted hover:bg-white/[0.05] hover:text-canvas"
                      }
                    `}
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      <div className="mt-8 px-3 py-4 rounded-lg bg-white/[0.04] border border-white/[0.06]">
        <div className="font-pixel text-xs text-mint mb-1">&gt; SYSTEM_STATUS</div>
        <div className="font-mono text-xs text-canvas/70">
          v1.0 — Night Operator
        </div>
      </div>
    </aside>
  );
}
