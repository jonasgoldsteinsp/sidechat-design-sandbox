import { Container } from "@/components/layout/Container";
import { Card } from "@/components/data-display/Card";
import { Badge } from "@/components/feedback/Badge";
import { Alert } from "@/components/feedback/Alert";

export default function DocsPage() {
  return (
    <Container size="xl" className="py-12">
      <div className="mb-12">
        <div className="font-pixel text-mint text-sm mb-4">&gt; DOCUMENTATION</div>
        <h1 className="text-display-lg mb-4">
          Implementation <em className="italic text-mint">Guide</em>
        </h1>
        <p className="font-mono text-canvas/70 max-w-3xl">
          Everything you need to start using the Sidechat Design System in your projects.
          Following Apple Human Interface Guidelines with retro-computing aesthetics.
        </p>
      </div>

      {/* Design Principles */}
      <section className="mb-20">
        <h2 className="text-heading mb-6">Design Principles</h2>

        <div className="grid grid-cols-1 gap-6">
          <PrincipleCard
            number="01"
            title="Warm & Intelligent"
            description="We combine editorial warmth with machine precision. The Fraunces display font brings humanist character, while Courier Prime provides technical clarity. Every interaction should feel both friendly and capable."
            examples={[
              "Use conversational copy, not corporate jargon",
              "Show personality through font styling (italics for emphasis)",
              "Balance visual warmth (mint greens, beiges) with sharp UI",
            ]}
          />

          <PrincipleCard
            number="02"
            title="Tactile & Responsive"
            description="Interactions should feel physical and immediate. Hover states, smooth transitions, and clear feedback create engagement. Users should always know what's clickable and what their actions accomplish."
            examples={[
              "Every interactive element has distinct hover/focus states",
              "Use 200-400ms transitions for state changes",
              "Provide immediate feedback for user actions (toasts, alerts)",
            ]}
          />

          <PrincipleCard
            number="03"
            title="Retro-Futuristic"
            description="We reference the optimism of early personal computing—not with nostalgia, but with the belief that technology should be delightful. CRT scanlines, phosphor greens, and beige machines inspire our visual language."
            examples={[
              "CRT aesthetic: scanlines, phosphor green accents",
              "Machine neutrals: beige tones for 3D objects and surfaces",
              "VT323 pixel font for system-level UI elements",
            ]}
          />
        </div>
      </section>

      {/* Getting Started */}
      <section className="mb-20 border-t border-white/[0.06] pt-16">
        <h2 className="text-heading mb-6">Getting Started</h2>

        <div className="space-y-6">
          <Card>
            <h3 className="font-display text-lg font-semibold mb-4">1. Install Dependencies</h3>
            <pre className="bg-night-bg border border-white/[0.08] rounded p-4 overflow-x-auto mb-4">
              <code className="font-mono text-sm text-phosphor">
                npm install
              </code>
            </pre>
            <p className="font-mono text-sm text-canvas/70">
              This project uses Next.js 15, React 19, TypeScript, and Tailwind CSS v4.
            </p>
          </Card>

          <Card>
            <h3 className="font-display text-lg font-semibold mb-4">2. Import Components</h3>
            <pre className="bg-night-bg border border-white/[0.08] rounded p-4 overflow-x-auto mb-4">
              <code className="font-mono text-sm text-phosphor">
{`import { Button } from '@/components/input/Button';
import { Badge } from '@/components/feedback/Badge';
import { Card } from '@/components/data-display/Card';

export default function MyPage() {
  return (
    <Card>
      <h1>Welcome</h1>
      <Badge variant="mint">New</Badge>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}`}
              </code>
            </pre>
          </Card>

          <Card>
            <h3 className="font-display text-lg font-semibold mb-4">3. Use Design Tokens</h3>
            <pre className="bg-night-bg border border-white/[0.08] rounded p-4 overflow-x-auto mb-4">
              <code className="font-mono text-sm text-phosphor">
{`import { tokens } from '@/lib/tokens';

// Access tokens directly
const primaryColor = tokens.color.mint;
const spacing = tokens.spacing.md;

// Or use Tailwind classes
<div className="bg-mint text-canvas p-4 rounded-lg">
  Content
</div>`}
              </code>
            </pre>
          </Card>
        </div>
      </section>

      {/* Component Guidelines */}
      <section className="mb-20 border-t border-white/[0.06] pt-16">
        <h2 className="text-heading mb-6">Component Guidelines</h2>

        <div className="space-y-6">
          <GuidelineCard
            title="Accessibility"
            badge="WCAG AAA"
            items={[
              "All components meet WCAG 2.1 Level AA standards minimum",
              "Color contrast ratios tested for readability",
              "Keyboard navigation supported throughout",
              "Screen reader friendly with proper ARIA labels",
              "Focus indicators visible on all interactive elements",
            ]}
          />

          <GuidelineCard
            title="Responsive Design"
            badge="Mobile First"
            items={[
              "Breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (wide)",
              "Components adapt fluidly between breakpoints",
              "Touch targets minimum 44x44px on mobile",
              "Text scales using clamp() for fluid typography",
              "Grid system collapses gracefully on smaller screens",
            ]}
          />

          <GuidelineCard
            title="Performance"
            badge="Optimized"
            items={[
              "Components are client-side rendered only when needed",
              "Use React Server Components by default",
              "Lazy load heavy components (modals, charts)",
              "CSS is scoped to prevent style conflicts",
              "Minimal JavaScript footprint per component",
            ]}
          />
        </div>
      </section>

      {/* Customization */}
      <section className="mb-20 border-t border-white/[0.06] pt-16">
        <h2 className="text-heading mb-6">Customization</h2>

        <div className="space-y-6">
          <Card>
            <h3 className="font-display text-lg font-semibold mb-4">Extending Components</h3>
            <pre className="bg-night-bg border border-white/[0.08] rounded p-4 overflow-x-auto">
              <code className="font-mono text-sm text-phosphor">
{`// Create a custom button variant
import { Button, ButtonProps } from '@/components/input/Button';

export function PremiumButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className="bg-gradient-to-r from-plum to-cobalt border-0"
    />
  );
}`}
              </code>
            </pre>
          </Card>

          <Card>
            <h3 className="font-display text-lg font-semibold mb-4">Modifying Tokens</h3>
            <p className="font-mono text-sm text-canvas/70 mb-4">
              Edit <code className="bg-night-bg px-2 py-1 rounded text-mint">src/lib/tokens.ts</code> to customize colors, spacing, typography, and other design tokens.
              Changes will propagate throughout the entire system.
            </p>
            <Alert variant="warning" title="Important">
              When modifying core tokens, test across all components to ensure consistency.
            </Alert>
          </Card>
        </div>
      </section>

      {/* Resources */}
      <section className="mb-20 border-t border-white/[0.06] pt-16">
        <h2 className="text-heading mb-6">Resources</h2>

        <div className="grid grid-cols-2 gap-6">
          <ResourceCard
            icon="📚"
            title="Apple HIG"
            description="Official Human Interface Guidelines that inspire this system"
            link="https://developer.apple.com/design/human-interface-guidelines"
          />
          <ResourceCard
            icon="🎨"
            title="Design Tokens"
            description="Learn about design tokens and cross-platform design systems"
            link="https://designtokens.org"
          />
          <ResourceCard
            icon="♿"
            title="WCAG Guidelines"
            description="Web Content Accessibility Guidelines for inclusive design"
            link="https://www.w3.org/WAI/WCAG21/quickref/"
          />
          <ResourceCard
            icon="⚛️"
            title="Next.js Docs"
            description="Framework documentation for building with Next.js 15"
            link="https://nextjs.org/docs"
          />
        </div>
      </section>

      {/* Support */}
      <section className="bg-white/[0.04] border border-white/[0.06] rounded-lg p-8">
        <h2 className="text-heading mb-4">Need Help?</h2>
        <p className="font-mono text-sm text-canvas/70 mb-6">
          This design system is a living document. If you encounter issues or have suggestions,
          please reach out to the design team.
        </p>
        <div className="flex gap-3">
          <Badge variant="mint" size="sm">v1.0</Badge>
          <Badge variant="neutral" size="sm">Night Operator</Badge>
          <Badge variant="cobalt" size="sm">February 2026</Badge>
        </div>
      </section>
    </Container>
  );
}

function PrincipleCard({
  number,
  title,
  description,
  examples,
}: {
  number: string;
  title: string;
  description: string;
  examples: string[];
}) {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute top-0 left-0 font-display text-[200px] font-light text-beige-dark/10 leading-none -mt-16 -ml-4">
        {number}
      </div>
      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="font-display text-6xl font-light text-mint/40">{number}</div>
          <div className="flex-1">
            <h3 className="font-display text-2xl font-semibold mb-2">{title}</h3>
            <p className="font-mono text-sm text-canvas/70 leading-relaxed">{description}</p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-white/[0.06]">
          <div className="font-mono text-xs uppercase tracking-wider text-canvas/50 mb-3">
            Examples
          </div>
          <ul className="space-y-2">
            {examples.map((example, i) => (
              <li key={i} className="flex items-start gap-3 font-mono text-sm text-canvas/70">
                <span className="text-mint flex-shrink-0">→</span>
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}

function GuidelineCard({
  title,
  badge,
  items,
}: {
  title: string;
  badge: string;
  items: string[];
}) {
  return (
    <Card>
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display text-lg font-semibold">{title}</h3>
        <Badge variant="mint" size="sm">{badge}</Badge>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 font-mono text-sm text-canvas/70">
            <span className="text-mint flex-shrink-0 mt-0.5">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function ResourceCard({
  icon,
  title,
  description,
  link,
}: {
  icon: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="hover:bg-white/[0.06] transition-colors h-full">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-mint transition-colors">
          {title}
        </h3>
        <p className="font-mono text-sm text-canvas/60">{description}</p>
        <div className="mt-4 font-mono text-xs text-mint">
          Learn more →
        </div>
      </Card>
    </a>
  );
}
