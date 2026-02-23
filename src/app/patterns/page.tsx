import { Container } from "@/components/layout/Container";
import { Card } from "@/components/data-display/Card";
import { Button } from "@/components/input/Button";
import { TextField } from "@/components/input/TextField";
import { Badge } from "@/components/feedback/Badge";
import { Alert } from "@/components/feedback/Alert";
import { List, ListItem } from "@/components/data-display/List";
import { Avatar } from "@/components/media/Avatar";

export default function PatternsPage() {
  return (
    <Container size="xl" className="py-12">
      <div className="mb-12">
        <div className="font-mono text-mint text-sm mb-4">&gt; PATTERNS</div>
        <h1 className="text-display-lg mb-4">
          Design <em className="italic text-mint">Patterns</em>
        </h1>
        <p className="font-mono text-canvas/70 max-w-3xl">
          Reusable design patterns and page templates for common user flows.
          These patterns combine multiple components following best practices.
        </p>
      </div>

      {/* Page Templates */}
      <section className="mb-20">
        <h2 className="text-heading mb-6 flex items-center gap-3">
          📄 Page Templates
        </h2>

        <div className="space-y-8">
          {/* Landing Page Pattern */}
          <PatternCard title="Landing Page" description="Hero-driven marketing page">
            <div className="bg-night-soft rounded-lg overflow-hidden border border-white/[0.08]">
              <div className="p-12 text-center bg-gradient-to-b from-mint/10 to-transparent">
                <div className="font-mono text-mint text-xs mb-4">&gt; TAGLINE</div>
                <h1 className="font-display text-4xl font-light mb-4">
                  Your Product <em className="italic text-mint">Here</em>
                </h1>
                <p className="font-mono text-sm text-canvas/60 max-w-md mx-auto mb-8">
                  Brief value proposition that explains what you do and why it matters
                </p>
                <div className="flex gap-3 justify-center">
                  <Button variant="mint">Get Started</Button>
                  <Button variant="ghost">Learn More</Button>
                </div>
              </div>
            </div>
          </PatternCard>

          {/* Dashboard Pattern */}
          <PatternCard title="Dashboard" description="Data overview and metrics">
            <div className="bg-night-soft rounded-lg p-6 border border-white/[0.08]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-lg font-semibold">Dashboard</h2>
                <Badge variant="mint" dot>Live</Badge>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white/[0.04] border border-white/[0.06] rounded p-3">
                    <div className="font-mono text-[10px] text-canvas/50 mb-1">METRIC</div>
                    <div className="font-display text-xl font-semibold">1,234</div>
                    <div className="font-mono text-[10px] text-mint">+12%</div>
                  </div>
                ))}
              </div>
              <div className="bg-white/[0.04] border border-white/[0.06] rounded p-4">
                <div className="font-mono text-xs text-canvas/50">Activity Chart</div>
                <div className="h-24 flex items-end gap-2 mt-2">
                  {[40, 65, 45, 80, 55, 70, 85, 60].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-mint/40 rounded-sm"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </PatternCard>

          {/* Settings Page */}
          <PatternCard title="Settings" description="User preferences and configuration">
            <div className="bg-night-soft rounded-lg p-6 border border-white/[0.08]">
              <h2 className="font-display text-lg font-semibold mb-6">Settings</h2>
              <div className="space-y-4 max-w-md">
                <TextField label="Display Name" placeholder="John Doe" />
                <TextField label="Email" placeholder="john@example.com" type="email" />
                <div className="pt-4 border-t border-white/[0.06]">
                  <Button variant="mint">Save Changes</Button>
                </div>
              </div>
            </div>
          </PatternCard>
        </div>
      </section>

      {/* User Flows */}
      <section className="mb-20 border-t border-white/[0.06] pt-16">
        <h2 className="text-heading mb-6 flex items-center gap-3">
          🔄 User Flows
        </h2>

        <div className="space-y-8">
          {/* Authentication Flow */}
          <PatternCard title="Authentication" description="Sign in / Sign up flow">
            <div className="bg-night-soft rounded-lg p-8 border border-white/[0.08] max-w-md mx-auto">
              <h2 className="font-display text-2xl font-semibold text-center mb-8">
                Sign <em className="italic text-mint">In</em>
              </h2>
              <div className="space-y-4 mb-6">
                <TextField label="Email" type="email" placeholder="you@example.com" />
                <TextField label="Password" type="password" placeholder="••••••••" />
              </div>
              <Button variant="mint" className="w-full mb-4">
                Sign In
              </Button>
              <p className="font-mono text-xs text-center text-canvas/50">
                Don't have an account?{" "}
                <Button variant="link" className="text-xs">Sign up</Button>
              </p>
            </div>
          </PatternCard>

          {/* Empty State */}
          <PatternCard title="Empty State" description="No data placeholder">
            <div className="bg-night-soft rounded-lg p-12 border border-white/[0.08] text-center">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="font-display text-xl font-semibold mb-2">No messages yet</h3>
              <p className="font-mono text-sm text-canvas/50 mb-6 max-w-sm mx-auto">
                When you receive messages, they'll appear here
              </p>
              <Button variant="mint">Compose Message</Button>
            </div>
          </PatternCard>

          {/* Loading State */}
          <PatternCard title="Loading State" description="Skeleton screens">
            <div className="bg-night-soft rounded-lg p-6 border border-white/[0.08]">
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/[0.08] animate-pulse" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-white/[0.08] rounded w-3/4 animate-pulse" />
                      <div className="h-3 bg-white/[0.08] rounded w-1/2 animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PatternCard>

          {/* Success Confirmation */}
          <PatternCard title="Success State" description="Action confirmation">
            <div className="bg-night-soft rounded-lg p-8 border border-white/[0.08] text-center max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-mint/20 border-2 border-mint flex items-center justify-center text-2xl mx-auto mb-4">
                ✓
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">All Set!</h3>
              <p className="font-mono text-sm text-canvas/60 mb-6">
                Your changes have been saved successfully
              </p>
              <Button variant="ghost">Continue</Button>
            </div>
          </PatternCard>
        </div>
      </section>

      {/* Feedback Patterns */}
      <section className="mb-20 border-t border-white/[0.06] pt-16">
        <h2 className="text-heading mb-6 flex items-center gap-3">
          💬 Feedback Patterns
        </h2>

        <div className="space-y-8">
          <PatternCard title="Error Handling" description="User-friendly error messages">
            <div className="space-y-4">
              <Alert variant="error" title="Connection Error">
                Unable to connect to the server. Please check your internet connection.
              </Alert>
              <Alert variant="warning" title="Validation Error">
                Please fill in all required fields before continuing.
              </Alert>
            </div>
          </PatternCard>

          <PatternCard title="Success Messages" description="Positive feedback">
            <div className="space-y-4">
              <Alert variant="success" title="Saved!">
                Your preferences have been updated successfully.
              </Alert>
              <Alert variant="info" title="Tip">
                You can customize this later in Settings.
              </Alert>
            </div>
          </PatternCard>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="mb-20 border-t border-white/[0.06] pt-16">
        <h2 className="text-heading mb-6">
          Design Do's and Don'ts
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <DoCard>
            <h4 className="font-display font-semibold mb-3 flex items-center gap-2 text-mint">
              <span className="text-lg">✓</span> Do
            </h4>
            <List>
              <ListItem>Use consistent spacing from the 8px scale</ListItem>
              <ListItem>Provide clear feedback for all user actions</ListItem>
              <ListItem>Follow typography hierarchy (Display → Heading → Body)</ListItem>
              <ListItem>Use semantic color (mint for success, coral for errors)</ListItem>
              <ListItem>Include helpful error messages with recovery actions</ListItem>
            </List>
          </DoCard>

          <DontCard>
            <h4 className="font-display font-semibold mb-3 flex items-center gap-2 text-coral">
              <span className="text-lg">✕</span> Don't
            </h4>
            <List>
              <ListItem>Mix spacing values outside the defined scale</ListItem>
              <ListItem>Use generic "Error" messages without context</ListItem>
              <ListItem>Override font families except for special cases</ListItem>
              <ListItem>Use color alone to convey meaning (add icons/text)</ListItem>
              <ListItem>Forget hover/focus states on interactive elements</ListItem>
            </List>
          </DontCard>
        </div>
      </section>
    </Container>
  );
}

function PatternCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-4">
        <h3 className="font-display text-lg font-semibold mb-1">{title}</h3>
        <p className="font-mono text-xs text-canvas/50">{description}</p>
      </div>
      {children}
    </div>
  );
}

function DoCard({ children }: { children: React.ReactNode }) {
  return (
    <Card variant="outlined" className="border-mint/30 bg-mint/5">
      {children}
    </Card>
  );
}

function DontCard({ children }: { children: React.ReactNode }) {
  return (
    <Card variant="outlined" className="border-coral/30 bg-coral/5">
      {children}
    </Card>
  );
}
