import Link from "next/link";
import { Button } from "@/components/input/Button";
import { Badge } from "@/components/feedback/Badge";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="scanlines absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <div className="font-pixel text-mint text-base mb-6 tracking-wide">
            &gt; DESIGN_SYSTEM_v1.0
          </div>
          <h1 className="text-display-xl mb-8">
            Side<em className="italic text-mint-dark">chat.</em>
            <br />
            <span className="text-canvas/80">Design System</span>
          </h1>
          <p className="font-mono text-lg text-canvas/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            A comprehensive design system following Apple Human Interface Guidelines,
            powered by retro-computing aesthetics and the Night Operator theme.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/foundations">
              <Button variant="primary" size="lg">
                Explore Foundations
              </Button>
            </Link>
            <Link href="/components">
              <Button variant="ghost" size="lg">
                View Components
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-6">
            <StatCard
              icon="🎨"
              value="20+"
              label="Color Tokens"
              description="Primary, semantic, dark mode"
            />
            <StatCard
              icon="🔤"
              value="3"
              label="Font Families"
              description="Display, Mono, Pixel"
            />
            <StatCard
              icon="🧩"
              value="30+"
              label="Components"
              description="Fully accessible, documented"
            />
            <StatCard
              icon="📱"
              value="4"
              label="Breakpoints"
              description="Mobile to wide desktop"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-display-lg mb-12 text-center">
            Get <em className="italic text-mint">Started</em>
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <QuickLinkCard
              title="Foundations"
              description="Color system, typography, spacing, layout grid, and core design principles."
              href="/foundations"
              badge="Start Here"
            />
            <QuickLinkCard
              title="Components"
              description="30+ production-ready components with variants, states, and accessibility built-in."
              href="/components"
              badge="Popular"
            />
            <QuickLinkCard
              title="Tokens"
              description="Design tokens in JSON format for developer handoff and multi-platform use."
              href="/tokens"
              badge="Dev-Ready"
            />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-display-lg mb-4 text-center">
            Design <em className="italic text-mint">Principles</em>
          </h2>
          <p className="font-mono text-sm text-center text-canvas/60 mb-12 max-w-2xl mx-auto">
            Inspired by Apple HIG with a retro-computing twist
          </p>
          <div className="grid grid-cols-3 gap-8">
            <PrincipleCard
              number="01"
              title="Warm & Intelligent"
              description="Combine editorial warmth with machine precision. Human-centered design with technical excellence."
            />
            <PrincipleCard
              number="02"
              title="Tactile & Responsive"
              description="Interactions should feel physical. Hover states, transitions, and feedback create engagement."
            />
            <PrincipleCard
              number="03"
              title="Retro-Futuristic"
              description="Reference the optimism of early personal computing. CRT screens, phosphor greens, beige machines."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({
  icon,
  value,
  label,
  description,
}: {
  icon: string;
  value: string;
  label: string;
  description: string;
}) {
  return (
    <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg p-6 hover:bg-white/[0.06] transition-colors">
      <div className="text-2xl mb-3">{icon}</div>
      <div className="font-display text-4xl font-semibold tracking-tight mb-2">
        {value}
      </div>
      <div className="font-mono text-sm text-canvas mb-1">{label}</div>
      <div className="font-mono text-xs text-canvas/50">{description}</div>
    </div>
  );
}

function QuickLinkCard({
  title,
  description,
  href,
  badge,
}: {
  title: string;
  description: string;
  href: string;
  badge: string;
}) {
  return (
    <Link
      href={href}
      className="block bg-white/[0.04] border border-white/[0.06] rounded-lg p-6 hover:bg-white/[0.06] hover:border-mint/30 transition-all group"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display text-xl font-semibold">{title}</h3>
        <Badge variant="mint" size="sm">
          {badge}
        </Badge>
      </div>
      <p className="font-mono text-sm text-canvas/70 leading-relaxed">{description}</p>
      <div className="mt-4 font-mono text-xs text-mint group-hover:translate-x-1 transition-transform inline-block">
        Explore →
      </div>
    </Link>
  );
}

function PrincipleCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative">
      <div className="font-display text-7xl font-light text-beige-dark/20 mb-4">
        {number}
      </div>
      <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
      <p className="font-mono text-sm text-canvas/70 leading-relaxed">{description}</p>
    </div>
  );
}
