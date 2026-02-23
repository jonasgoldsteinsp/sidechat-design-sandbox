import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/feedback/Badge";
import tokensJson from "@/lib/tokens.json";

export default function TokensPage() {
  return (
    <Container size="xl" className="py-12">
      <div className="mb-12">
        <div className="font-pixel text-mint text-sm mb-4">&gt; DESIGN_TOKENS</div>
        <h1 className="text-display-lg mb-4">
          Design <em className="italic text-mint">Tokens</em>
        </h1>
        <p className="font-mono text-canvas/70 max-w-3xl mb-6">
          Design tokens in JSON format for developer handoff and multi-platform implementation.
          Use these tokens to maintain consistency across web, iOS, Android, and other platforms.
        </p>
        <div className="flex gap-3">
          <Badge variant="mint" size="sm">JSON Format</Badge>
          <Badge variant="cobalt" size="sm">Developer Ready</Badge>
          <Badge variant="neutral" size="sm">Multi-Platform</Badge>
        </div>
      </div>

      {/* Color Tokens */}
      <section className="mb-16">
        <h2 className="text-heading mb-6">Color Tokens</h2>
        <div className="bg-night-soft border border-white/[0.08] rounded-lg overflow-hidden">
          <div className="border-b border-white/[0.06] px-6 py-3 bg-white/[0.04]">
            <div className="grid grid-cols-4 gap-4 font-mono text-xs uppercase tracking-wider text-canvas/60">
              <div>Token Name</div>
              <div>Value</div>
              <div>Type</div>
              <div>Description</div>
            </div>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {Object.entries(tokensJson.color).map(([key, value]) => (
              <TokenRow
                key={key}
                name={key}
                value={value.value}
                type={value.type}
                description={value.description || "—"}
                showSwatch
              />
            ))}
          </div>
        </div>
      </section>

      {/* Typography Tokens */}
      <section className="mb-16">
        <h2 className="text-heading mb-6">Typography Tokens</h2>
        <div className="bg-night-soft border border-white/[0.08] rounded-lg overflow-hidden">
          <div className="border-b border-white/[0.06] px-6 py-3 bg-white/[0.04]">
            <div className="grid grid-cols-3 gap-4 font-mono text-xs uppercase tracking-wider text-canvas/60">
              <div>Token Name</div>
              <div>Value</div>
              <div>Type</div>
            </div>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {Object.entries(tokensJson.typography).map(([key, value]) => (
              <div key={key} className="grid grid-cols-3 gap-4 px-6 py-4">
                <div className="font-mono text-sm text-mint">{key}</div>
                <div className="font-mono text-sm text-canvas">{String(value.value)}</div>
                <div className="font-mono text-xs text-canvas/50">{value.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing Tokens */}
      <section className="mb-16">
        <h2 className="text-heading mb-6">Spacing Tokens</h2>
        <div className="bg-night-soft border border-white/[0.08] rounded-lg overflow-hidden">
          <div className="border-b border-white/[0.06] px-6 py-3 bg-white/[0.04]">
            <div className="grid grid-cols-4 gap-4 font-mono text-xs uppercase tracking-wider text-canvas/60">
              <div>Token Name</div>
              <div>Value</div>
              <div>Visual</div>
              <div>Type</div>
            </div>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {Object.entries(tokensJson.spacing).map(([key, value]) => (
              <div key={key} className="grid grid-cols-4 gap-4 px-6 py-4 items-center">
                <div className="font-mono text-sm text-mint">{key}</div>
                <div className="font-mono text-sm text-canvas">{value.value}</div>
                <div>
                  <div
                    className="h-6 bg-mint/40 border border-mint/60 rounded"
                    style={{ width: value.value }}
                  />
                </div>
                <div className="font-mono text-xs text-canvas/50">{value.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Border Radius Tokens */}
      <section className="mb-16">
        <h2 className="text-heading mb-6">Border Radius Tokens</h2>
        <div className="bg-night-soft border border-white/[0.08] rounded-lg overflow-hidden">
          <div className="border-b border-white/[0.06] px-6 py-3 bg-white/[0.04]">
            <div className="grid grid-cols-4 gap-4 font-mono text-xs uppercase tracking-wider text-canvas/60">
              <div>Token Name</div>
              <div>Value</div>
              <div>Example</div>
              <div>Type</div>
            </div>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {Object.entries(tokensJson.radius).map(([key, value]) => (
              <div key={key} className="grid grid-cols-4 gap-4 px-6 py-4 items-center">
                <div className="font-mono text-sm text-mint">{key}</div>
                <div className="font-mono text-sm text-canvas">{value.value}</div>
                <div>
                  <div
                    className="w-16 h-16 bg-mint/20 border-2 border-mint"
                    style={{ borderRadius: value.value }}
                  />
                </div>
                <div className="font-mono text-xs text-canvas/50">{value.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shadow Tokens */}
      <section className="mb-16">
        <h2 className="text-heading mb-6">Shadow Tokens</h2>
        <div className="bg-night-soft border border-white/[0.08] rounded-lg overflow-hidden">
          <div className="border-b border-white/[0.06] px-6 py-3 bg-white/[0.04]">
            <div className="grid grid-cols-3 gap-4 font-mono text-xs uppercase tracking-wider text-canvas/60">
              <div>Token Name</div>
              <div>Value</div>
              <div>Example</div>
            </div>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {Object.entries(tokensJson.shadow).map(([key, value]) => (
              <div key={key} className="grid grid-cols-3 gap-4 px-6 py-4 items-center">
                <div className="font-mono text-sm text-mint">{key}</div>
                <div className="font-mono text-xs text-canvas/60">{value.value}</div>
                <div>
                  <div
                    className="w-20 h-20 bg-white/[0.08] rounded"
                    style={{ boxShadow: value.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guide */}
      <section className="mb-16 bg-white/[0.04] border border-white/[0.06] rounded-lg p-8">
        <h2 className="text-heading mb-6">Usage Guide</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-display font-semibold mb-3">Import Tokens (JavaScript/TypeScript)</h3>
            <pre className="bg-night-bg border border-white/[0.08] rounded p-4 overflow-x-auto">
              <code className="font-mono text-sm text-phosphor">
{`import { tokens } from '@/lib/tokens';

// Use in styled-components
const Button = styled.button\`
  background: \${tokens.color.mint};
  padding: \${tokens.spacing.md};
  border-radius: \${tokens.radius.md};
\`;

// Use in inline styles
<div style={{ color: tokens.color.mint }} />`}
              </code>
            </pre>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3">Import Tokens (CSS)</h3>
            <pre className="bg-night-bg border border-white/[0.08] rounded p-4 overflow-x-auto">
              <code className="font-mono text-sm text-phosphor">
{`/* Tokens are auto-loaded via Tailwind CSS */
.button {
  background: var(--color-mint);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
}`}
              </code>
            </pre>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-3">Platform-Specific (iOS/Android)</h3>
            <p className="font-mono text-sm text-canvas/70 mb-3">
              Use tools like Style Dictionary or Figma Tokens to transform the JSON tokens
              into platform-specific formats (Swift, Kotlin, XML).
            </p>
            <div className="flex gap-3">
              <Badge variant="cobalt" size="sm">iOS (Swift)</Badge>
              <Badge variant="cobalt" size="sm">Android (XML)</Badge>
              <Badge variant="cobalt" size="sm">React Native</Badge>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

function TokenRow({
  name,
  value,
  type,
  description,
  showSwatch = false,
}: {
  name: string;
  value: string;
  type: string;
  description: string;
  showSwatch?: boolean;
}) {
  return (
    <div className="grid grid-cols-4 gap-4 px-6 py-4 items-center hover:bg-white/[0.02] transition-colors">
      <div className="flex items-center gap-3">
        {showSwatch && (
          <div
            className="w-8 h-8 rounded border border-white/[0.12] flex-shrink-0"
            style={{ background: value }}
          />
        )}
        <span className="font-mono text-sm text-mint">{name}</span>
      </div>
      <div className="font-mono text-sm text-canvas">{value}</div>
      <div className="font-mono text-xs text-canvas/50">{type}</div>
      <div className="font-mono text-xs text-canvas/60">{description}</div>
    </div>
  );
}
