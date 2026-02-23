import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/feedback/Badge";
import { tokens } from "@/lib/tokens";

export default function FoundationsPage() {
  return (
    <Container size="xl" className="py-12">
      <div className="mb-12">
        <div className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-mint mb-6">
          Foundations
        </div>
        <h1 className="font-display text-[clamp(48px,6vw,80px)] font-light leading-[1.08] tracking-[-0.03em] text-cream max-w-[800px] mb-8">
          Design <em className="italic font-medium text-mint">Foundations</em>
        </h1>
        <p className="text-[18px] text-cream-muted max-w-[600px] leading-[1.7]">
          Core design elements that form the foundation of the Sidechat design system.
          Color, typography, spacing, and layout principles following Apple HIG standards.
        </p>
      </div>

      {/* Color System */}
      <section id="color" className="mb-20">
        <h2 className="text-heading mb-6 flex items-center gap-3">
          🎨 Color System
          <Badge variant="mint" size="sm">20+ Tokens</Badge>
        </h2>

        {/* Primary Colors */}
        <div className="mb-8">
          <h3 className="font-display text-xl font-semibold mb-4">Primary Palette</h3>
          <div className="grid grid-cols-3 gap-2 rounded-lg overflow-hidden">
            <ColorSwatch
              name="Mint"
              hex={tokens.color.mint}
              usage="Brand primary, actions, success"
              contrast="WCAG AAA"
            />
            <ColorSwatch
              name="Ink"
              hex={tokens.color.ink}
              usage="Primary text, buttons"
              contrast="WCAG AAA"
              textLight
            />
            <ColorSwatch
              name="Canvas"
              hex={tokens.color.canvas}
              usage="Light backgrounds"
              contrast="WCAG AAA"
            />
          </div>
        </div>

        {/* Accent Colors */}
        <div className="mb-8">
          <h3 className="font-display text-xl font-semibold mb-4">Accent Colors</h3>
          <div className="grid grid-cols-5 gap-2">
            <ColorBlock name="Coral" hex={tokens.color.coral} />
            <ColorBlock name="Cobalt" hex={tokens.color.cobalt} />
            <ColorBlock name="Plum" hex={tokens.color.plum} />
            <ColorBlock name="Amber" hex={tokens.color.amber} />
            <ColorBlock name="Phosphor" hex={tokens.color.phosphor} />
          </div>
        </div>

        {/* Dark Mode */}
        <div className="mb-8">
          <h3 className="font-display text-xl font-semibold mb-4">
            Night Operator (Dark Mode)
          </h3>
          <div className="grid grid-cols-4 gap-2">
            <DarkColorBlock name="Background" value={tokens.color.dark.bg} />
            <DarkColorBlock name="Surface" value={tokens.color.dark.surface} />
            <DarkColorBlock name="Border" value={tokens.color.dark.border} />
            <DarkColorBlock name="Text" value={tokens.color.dark.text} />
          </div>
        </div>
      </section>

      {/* Typography */}
      <section id="typography" className="mb-20 border-t border-white/[0.06] pt-16">
        <h2 className="text-heading mb-6 flex items-center gap-3">
          📝 Typography
          <Badge variant="mint" size="sm">3 Font Families</Badge>
        </h2>

        {/* Font Families */}
        <div className="space-y-8 mb-12">
          <TypeSpecimen
            family="Fraunces"
            role="Display & Headings"
            weights="Light 300, Regular 400, Medium 500, Semi-Bold 600, Bold 700"
            usage="Headlines, wordmark, hero text, feature titles"
            example="The quick brown fox jumps over the lazy dog"
            className="font-display"
          />
          <TypeSpecimen
            family="DM Sans"
            role="Body & UI Text"
            weights="Light 300, Regular 400, Medium 500, Semi-Bold 600, Bold 700"
            usage="Body text, UI copy, descriptions, paragraphs"
            example="Sidechat thinks, drafts your memos, organizes your files."
            className="font-body"
          />
          <TypeSpecimen
            family="IBM Plex Mono"
            role="Code & Technical"
            weights="Light 300, Regular 400, Medium 500"
            usage="Code snippets, technical labels, monospace data"
            example="> SYSTEM READY_ > LOAD SIDECHAT"
            className="font-mono"
          />
        </div>

        {/* Type Scale */}
        <div>
          <h3 className="font-display text-xl font-semibold mb-6">Type Scale</h3>
          <div className="space-y-4">
            <TypeScale label="Display XL" size="4rem" example="Sidechat." />
            <TypeScale label="Display LG" size="3rem" example="Design System" />
            <TypeScale label="Heading" size="1.8rem" example="The future of chat" />
            <TypeScale label="Title" size="1.4rem" example="Get started today" />
            <TypeScale label="Body" size="1rem" example="This is body text in Courier Prime" mono />
            <TypeScale label="Caption" size="0.8rem" example="Small labels and metadata" mono />
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section id="spacing" className="mb-20 border-t border-white/[0.06] pt-16">
        <h2 className="text-heading mb-6 flex items-center gap-3">
          📐 Spacing System
          <Badge variant="mint" size="sm">8px Base</Badge>
        </h2>
        <p className="font-mono text-sm text-canvas/60 mb-8">
          Geometric spacing scale based on multiples of 4px. Consistent spacing creates rhythm and hierarchy.
        </p>

        <div className="space-y-3">
          {Object.entries(tokens.spacing).map(([key, value]) => (
            <SpacingBar key={key} label={key} value={value} />
          ))}
        </div>
      </section>

      {/* Layout Grid */}
      <section id="layout" className="mb-20 border-t border-white/[0.06] pt-16">
        <h2 className="text-heading mb-6 flex items-center gap-3">
          ⊞ Layout Grid
          <Badge variant="mint" size="sm">12 Columns</Badge>
        </h2>

        <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg p-8">
          <div className="grid grid-cols-12 gap-4 mb-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-24 bg-mint/20 border border-mint/40 rounded flex items-center justify-center font-mono text-xs text-mint"
              >
                {i + 1}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 font-mono text-sm">
            <div>
              <div className="text-canvas/50 mb-1">Columns</div>
              <div className="text-canvas font-bold">12</div>
            </div>
            <div>
              <div className="text-canvas/50 mb-1">Max Width</div>
              <div className="text-canvas font-bold">1200px</div>
            </div>
            <div>
              <div className="text-canvas/50 mb-1">Gutter</div>
              <div className="text-canvas font-bold">16px / 24px / 32px</div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

function ColorSwatch({
  name,
  hex,
  usage,
  contrast,
  textLight = false,
}: {
  name: string;
  hex: string;
  usage: string;
  contrast: string;
  textLight?: boolean;
}) {
  return (
    <div
      className="aspect-[4/3] rounded-lg p-6 flex flex-col justify-end"
      style={{ background: hex }}
    >
      <div className={`font-mono text-sm font-bold mb-1 ${textLight ? "text-canvas" : "text-ink"}`}>
        {name}
      </div>
      <div className={`font-mono text-xs ${textLight ? "text-canvas/80" : "text-ink/80"}`}>
        {hex}
      </div>
      <div className={`font-mono text-xs mt-3 ${textLight ? "text-canvas/70" : "text-ink/70"}`}>
        {usage}
      </div>
      <div className={`font-mono text-[10px] mt-1 ${textLight ? "text-canvas/50" : "text-ink/50"}`}>
        {contrast}
      </div>
    </div>
  );
}

function ColorBlock({ name, hex }: { name: string; hex: string }) {
  return (
    <div className="aspect-[3/2] rounded-lg p-4 flex flex-col justify-end" style={{ background: hex }}>
      <div className="font-mono text-xs font-bold text-white">{name}</div>
      <div className="font-mono text-[10px] text-white/80">{hex}</div>
    </div>
  );
}

function DarkColorBlock({ name, value }: { name: string; value: string }) {
  return (
    <div className="aspect-[3/2] rounded-lg p-4 flex flex-col justify-end border border-white/[0.06]" style={{ background: value }}>
      <div className="font-mono text-xs font-bold text-canvas">{name}</div>
      <div className="font-mono text-[10px] text-canvas/60">{value}</div>
    </div>
  );
}

function TypeSpecimen({
  family,
  role,
  weights,
  usage,
  example,
  className,
}: {
  family: string;
  role: string;
  weights: string;
  usage: string;
  example: string;
  className?: string;
}) {
  return (
    <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-display text-lg font-semibold mb-1">{family}</h4>
          <p className="font-mono text-xs text-canvas/50 uppercase tracking-wider">{role}</p>
        </div>
        <Badge variant="neutral" size="sm">{weights.split(",")[0]}</Badge>
      </div>
      <div className={`text-2xl mb-4 ${className}`}>{example}</div>
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.04]">
        <div>
          <div className="font-mono text-xs text-canvas/50 mb-1">Weights</div>
          <div className="font-mono text-xs text-canvas">{weights}</div>
        </div>
        <div>
          <div className="font-mono text-xs text-canvas/50 mb-1">Use For</div>
          <div className="font-mono text-xs text-canvas">{usage}</div>
        </div>
      </div>
    </div>
  );
}

function TypeScale({
  label,
  size,
  example,
  mono = false,
}: {
  label: string;
  size: string;
  example: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-baseline gap-6 pb-4 border-b border-white/[0.04]">
      <span className="font-mono text-xs uppercase tracking-wider text-canvas/50 w-32 flex-shrink-0">
        {label}
      </span>
      <div className={mono ? "font-mono" : "font-display"} style={{ fontSize: size, lineHeight: 1 }}>
        {example}
      </div>
      <span className="font-mono text-xs text-canvas/40 ml-auto">{size}</span>
    </div>
  );
}

function SpacingBar({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-6">
      <span className="font-mono text-xs uppercase tracking-wider text-canvas/50 w-16">
        {label}
      </span>
      <div className="h-7 bg-mint/40 border border-mint/60 rounded" style={{ width: value }} />
      <span className="font-mono text-xs text-canvas/40">{value}</span>
    </div>
  );
}
