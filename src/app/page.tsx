export default function Home() {
  return (
    <div className="container max-w-[1200px] mx-auto px-12">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center py-20">
        <div className="label font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-mint mb-6">
          Design System v1.0
        </div>
        <h1 className="font-display text-[clamp(48px,6vw,80px)] font-light leading-[1.08] tracking-[-0.03em] text-cream max-w-[800px] mb-8">
          Three directions.<br />
          <em className="italic font-medium text-mint">One system.</em>
        </h1>
        <p className="text-[18px] text-cream-muted max-w-[520px] leading-[1.7] mb-12">
          A comprehensive design system for Sidechat — rooted in retro-computing aesthetics but pushing into new territory. Each section offers rationale, tokens, and components.
        </p>
        <div className="flex gap-8 font-mono text-xs text-cream-muted">
          <div>Product <span className="opacity-50">—</span> AI Agent Platform</div>
          <div>Audience <span className="opacity-50">—</span> SMB + Technical</div>
          <div>Date <span className="opacity-50">—</span> February 2026</div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="pt-[120px]">
        <div className="border-b border-cream/[0.08] pb-8 mb-16">
          <span className="font-mono text-xs font-medium tracking-[0.1em] uppercase text-mint block mb-4">
            01
          </span>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.15] tracking-[-0.02em] mb-4">
            What's Inside
          </h2>
          <p className="text-base text-cream-muted max-w-[600px] leading-[1.7]">
            Four core sections covering color, typography, layout, and component patterns. Each with clear rationale and implementation guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mb-[120px]">
          <NavCard
            label="Foundations"
            title="Color, Type & Layout"
            description="Three color directions (Night Operator, Warm Machine, Paper Stack), three typography systems, and a responsive 12-column grid with 8px spacing scale."
            link="/foundations"
          />
          <NavCard
            label="Components"
            title="30+ Production Components"
            description="Navigation, input, feedback, data display, and media components. All accessible, all documented, all following the Night Operator aesthetic."
            link="/components"
          />
          <NavCard
            label="Patterns"
            title="User Flows & Templates"
            description="Page patterns, authentication flows, empty states, loading skeletons, and success confirmations. Real-world examples you can ship."
            link="/patterns"
          />
          <NavCard
            label="Tokens"
            title="Design Tokens (JSON)"
            description="Complete design tokens in JSON format for developer handoff. Colors, typography, spacing, shadows — everything you need for multi-platform implementation."
            link="/tokens"
          />
        </div>
      </section>

      {/* Design Principles */}
      <section className="pt-[120px] pb-[120px]">
        <div className="border-b border-cream/[0.08] pb-8 mb-16">
          <span className="font-mono text-xs font-medium tracking-[0.1em] uppercase text-mint block mb-4">
            02
          </span>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.15] tracking-[-0.02em] mb-4">
            Design Principles
          </h2>
          <p className="text-base text-cream-muted max-w-[600px] leading-[1.7]">
            Three core principles that guide every decision in this system.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <PrincipleCard
            label="Principle"
            title="Warm & Intelligent"
            body="Editorial warmth meets machine precision. Fraunces brings humanist character while Courier Prime provides technical clarity. Every interaction feels both friendly and capable."
          />
          <PrincipleCard
            label="Principle"
            title="Tactile & Responsive"
            body="Interactions feel physical and immediate. Hover states, smooth transitions (200-400ms), and clear feedback create engagement. Users always know what's clickable and what their actions accomplish."
          />
          <PrincipleCard
            label="Principle"
            title="Retro-Futuristic"
            body="We reference early personal computing optimism — not nostalgia. CRT scanlines, phosphor greens, and beige machines inspire our visual language. The future was exciting then. It still is."
          />
          <PrincipleCard
            label="Principle"
            title="Content Over Container"
            body="Containers expand and contract to fit content, not the other way around. A chat message gets exactly the width it needs. The grid provides alignment rails, but content decides how much space to claim."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cream/[0.06] py-12 text-center">
        <p className="font-mono text-[11px] text-cream-muted tracking-[0.05em]">
          Sidechat Design System — February 2026
        </p>
      </footer>
    </div>
  );
}

function NavCard({
  label,
  title,
  description,
  link,
}: {
  label: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="block bg-surface border border-cream/[0.06] rounded-2xl p-12 hover:border-cream/[0.12] transition-colors group"
    >
      <div className="font-mono text-[11px] font-medium tracking-[0.1em] uppercase text-mint mb-3">
        {label}
      </div>
      <h3 className="font-display text-[28px] font-normal mb-3 tracking-[-0.01em] group-hover:text-mint transition-colors">
        {title}
      </h3>
      <p className="text-cream-muted text-[15px] leading-[1.7] max-w-[640px]">
        {description}
      </p>
    </a>
  );
}

function PrincipleCard({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-surface border border-cream/[0.06] rounded-2xl p-9">
      <div className="font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-mint mb-4">
        {label}
      </div>
      <h4 className="font-display text-[20px] font-normal mb-3 leading-[1.3]">
        {title}
      </h4>
      <p className="text-cream-muted text-sm leading-[1.7]">
        {body}
      </p>
    </div>
  );
}
