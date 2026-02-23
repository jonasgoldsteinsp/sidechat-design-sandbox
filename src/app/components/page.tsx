"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { Button } from "@/components/input/Button";
import { TextField } from "@/components/input/TextField";
import { Checkbox } from "@/components/input/Checkbox";
import { Toggle } from "@/components/input/Toggle";
import { Select } from "@/components/input/Select";
import { Badge } from "@/components/feedback/Badge";
import { Alert } from "@/components/feedback/Alert";
import { Modal } from "@/components/feedback/Modal";
import { ProgressBar } from "@/components/feedback/ProgressBar";
import { Spinner } from "@/components/feedback/Spinner";
import { Card } from "@/components/data-display/Card";
import { Table } from "@/components/data-display/Table";
import { List, ListItem } from "@/components/data-display/List";
import { Stats } from "@/components/data-display/Stats";
import { Avatar } from "@/components/media/Avatar";
import { Tabs } from "@/components/navigation/Tabs";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export default function ComponentsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container size="xl" className="py-12">
      <div className="mb-12">
        <div className="font-pixel text-mint text-sm mb-4">&gt; COMPONENTS</div>
        <h1 className="text-display-lg mb-4">
          Component <em className="italic text-mint">Library</em>
        </h1>
        <p className="font-mono text-canvas/70 max-w-3xl">
          30+ production-ready components with variants, states, and accessibility built-in.
          All components follow Apple HIG principles with the Night Operator aesthetic.
        </p>
      </div>

      {/* Navigation Components */}
      <section id="navigation" className="mb-20">
        <h2 className="text-heading mb-6 flex items-center gap-3">
          🧭 Navigation
        </h2>

        <div className="space-y-8">
          <ComponentShowcase title="Breadcrumb" description="Navigate hierarchical paths">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Components", href: "/components" },
                { label: "Navigation" },
              ]}
            />
          </ComponentShowcase>

          <ComponentShowcase title="Tabs" description="Switch between related content">
            <Tabs
              tabs={[
                { id: "1", label: "Overview", content: <div className="font-mono text-sm text-canvas/70">Overview content</div> },
                { id: "2", label: "Details", content: <div className="font-mono text-sm text-canvas/70">Details content</div> },
                { id: "3", label: "Settings", content: <div className="font-mono text-sm text-canvas/70">Settings content</div> },
              ]}
            />
          </ComponentShowcase>
        </div>
      </section>

      {/* Input Components */}
      <section id="input" className="mb-20 border-t border-white/[0.06] pt-16">
        <h2 className="text-heading mb-6 flex items-center gap-3">
          ⌨️ Input
        </h2>

        <div className="space-y-8">
          <ComponentShowcase title="Button" description="Trigger actions and interactions">
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="mint">Mint</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="link">Link Button</Button>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </ComponentShowcase>

          <ComponentShowcase title="TextField" description="Capture user text input">
            <div className="grid grid-cols-2 gap-4 max-w-2xl">
              <TextField label="Email" placeholder="you@example.com" type="email" />
              <TextField label="Password" placeholder="••••••••" type="password" />
              <TextField label="With Error" error="This field is required" />
              <TextField label="With Helper" helperText="We'll never share your email" />
            </div>
          </ComponentShowcase>

          <ComponentShowcase title="Select" description="Choose from a dropdown">
            <div className="max-w-xs">
              <Select
                label="Framework"
                options={[
                  { value: "react", label: "React" },
                  { value: "vue", label: "Vue" },
                  { value: "svelte", label: "Svelte" },
                  { value: "angular", label: "Angular" },
                ]}
              />
            </div>
          </ComponentShowcase>

          <ComponentShowcase title="Checkbox & Toggle" description="Binary selections">
            <div className="space-y-4">
              <div className="flex gap-6">
                <Checkbox label="Accept terms" />
                <Checkbox label="Subscribe to newsletter" defaultChecked />
                <Checkbox label="Disabled" disabled />
              </div>
              <div className="flex gap-6">
                <Toggle label="Enable notifications" />
                <Toggle label="Dark mode" defaultChecked />
                <Toggle label="Disabled" disabled />
              </div>
            </div>
          </ComponentShowcase>
        </div>
      </section>

      {/* Feedback Components */}
      <section id="feedback" className="mb-20 border-t border-white/[0.06] pt-16">
        <h2 className="text-heading mb-6 flex items-center gap-3">
          💬 Feedback
        </h2>

        <div className="space-y-8">
          <ComponentShowcase title="Badge" description="Status indicators and labels">
            <div className="flex flex-wrap gap-3">
              <Badge variant="mint">Online</Badge>
              <Badge variant="mint" dot>Active</Badge>
              <Badge variant="coral">Error</Badge>
              <Badge variant="cobalt">Info</Badge>
              <Badge variant="amber">Warning</Badge>
              <Badge variant="dark">v1.0</Badge>
              <Badge variant="neutral">Neutral</Badge>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <Badge variant="mint" size="sm">Small</Badge>
              <Badge variant="mint" size="md">Medium</Badge>
              <Badge variant="mint" size="lg">Large</Badge>
            </div>
          </ComponentShowcase>

          <ComponentShowcase title="Alert" description="Contextual messages">
            <div className="space-y-4">
              <Alert variant="success" title="Success">
                Your changes have been saved successfully.
              </Alert>
              <Alert variant="info" title="Info">
                New features are available in this update.
              </Alert>
              <Alert variant="warning" title="Warning">
                Your session will expire in 5 minutes.
              </Alert>
              <Alert variant="error" title="Error" onClose={() => console.log("close")}>
                There was an error processing your request.
              </Alert>
            </div>
          </ComponentShowcase>

          <ComponentShowcase title="Progress Bar" description="Show task completion">
            <div className="space-y-6 max-w-2xl">
              <ProgressBar value={75} label="Upload progress" />
              <ProgressBar value={45} label="Processing" variant="cobalt" />
              <ProgressBar value={90} label="Complete" variant="mint" />
              <ProgressBar value={30} label="Warning" variant="amber" showValue={false} />
            </div>
          </ComponentShowcase>

          <ComponentShowcase title="Spinner" description="Loading indicator">
            <div className="flex gap-8 items-center">
              <div className="text-center">
                <Spinner size="sm" />
                <div className="font-mono text-xs text-canvas/50 mt-2">Small</div>
              </div>
              <div className="text-center">
                <Spinner size="md" />
                <div className="font-mono text-xs text-canvas/50 mt-2">Medium</div>
              </div>
              <div className="text-center">
                <Spinner size="lg" />
                <div className="font-mono text-xs text-canvas/50 mt-2">Large</div>
              </div>
              <div className="text-center">
                <Spinner variant="canvas" />
                <div className="font-mono text-xs text-canvas/50 mt-2">Canvas</div>
              </div>
            </div>
          </ComponentShowcase>

          <ComponentShowcase title="Modal" description="Focus user attention">
            <div>
              <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
              <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Example Modal"
                footer={
                  <>
                    <Button variant="ghost" onClick={() => setModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button variant="mint" onClick={() => setModalOpen(false)}>
                      Confirm
                    </Button>
                  </>
                }
              >
                <p className="font-mono text-sm text-canvas/70 leading-relaxed">
                  This is a modal dialog. It focuses user attention on important information
                  or actions. Click outside or press the close button to dismiss.
                </p>
              </Modal>
            </div>
          </ComponentShowcase>
        </div>
      </section>

      {/* Data Display Components */}
      <section id="data" className="mb-20 border-t border-white/[0.06] pt-16">
        <h2 className="text-heading mb-6 flex items-center gap-3">
          📊 Data Display
        </h2>

        <div className="space-y-8">
          <ComponentShowcase title="Card" description="Flexible content container">
            <Grid cols={3} gap="md">
              <Card header={<h3 className="font-display font-semibold">Default Card</h3>}>
                <p className="font-mono text-sm text-canvas/70">
                  Basic card with header
                </p>
              </Card>
              <Card variant="elevated">
                <p className="font-mono text-sm text-canvas/70">
                  Elevated card with shadow
                </p>
              </Card>
              <Card variant="outlined">
                <p className="font-mono text-sm text-canvas/70">
                  Outlined card variant
                </p>
              </Card>
            </Grid>
          </ComponentShowcase>

          <ComponentShowcase title="Stats" description="Display key metrics">
            <Grid cols={4} gap="md">
              <Stats label="Active Users" value="1,234" icon="👥" />
              <Stats
                label="Revenue"
                value="$12.5K"
                change={{ value: "+12%", trend: "up" }}
                icon="💰"
              />
              <Stats
                label="Conversion"
                value="3.2%"
                change={{ value: "-0.8%", trend: "down" }}
                icon="📈"
              />
              <Stats
                label="Tasks"
                value="42"
                change={{ value: "12 pending", trend: "neutral" }}
                icon="✓"
              />
            </Grid>
          </ComponentShowcase>

          <ComponentShowcase title="Table" description="Structured data display">
            <Table
              data={[
                { id: 1, name: "Lucy", role: "Agent", status: "Online", tasks: 147 },
                { id: 2, name: "Keith's PA", role: "Agent", status: "Online", tasks: 82 },
                { id: 3, name: "Data Analyst", role: "Agent", status: "Offline", tasks: 0 },
              ]}
              columns={[
                { key: "name", header: "Name" },
                { key: "role", header: "Role" },
                {
                  key: "status",
                  header: "Status",
                  render: (item) => (
                    <Badge variant={item.status === "Online" ? "mint" : "neutral"} size="sm" dot>
                      {item.status}
                    </Badge>
                  ),
                },
                { key: "tasks", header: "Tasks" },
              ]}
              keyExtractor={(item) => item.id}
            />
          </ComponentShowcase>

          <ComponentShowcase title="List" description="Sequential items">
            <div className="max-w-md">
              <List variant="bordered">
                <ListItem icon="📁">Documents</ListItem>
                <ListItem icon="🖼️">Images</ListItem>
                <ListItem icon="🎵">Music</ListItem>
                <ListItem icon="🎬">Videos</ListItem>
              </List>
            </div>
          </ComponentShowcase>
        </div>
      </section>

      {/* Media Components */}
      <section id="media" className="mb-20 border-t border-white/[0.06] pt-16">
        <h2 className="text-heading mb-6 flex items-center gap-3">
          🖼️ Media
        </h2>

        <div className="space-y-8">
          <ComponentShowcase title="Avatar" description="User profile images">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <Avatar fallback="SM" size="sm" />
                <div className="font-mono text-xs text-canvas/50 mt-2">Small</div>
              </div>
              <div className="text-center">
                <Avatar fallback="MD" size="md" />
                <div className="font-mono text-xs text-canvas/50 mt-2">Medium</div>
              </div>
              <div className="text-center">
                <Avatar fallback="LG" size="lg" />
                <div className="font-mono text-xs text-canvas/50 mt-2">Large</div>
              </div>
              <div className="text-center">
                <Avatar fallback="XL" size="xl" />
                <div className="font-mono text-xs text-canvas/50 mt-2">Extra Large</div>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-6">
              <Avatar fallback="C" variant="circle" />
              <Avatar fallback="R" variant="rounded" />
              <Avatar fallback="S" variant="square" />
            </div>
          </ComponentShowcase>
        </div>
      </section>
    </Container>
  );
}

function ComponentShowcase({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg p-6">
      <div className="mb-6">
        <h3 className="font-display text-xl font-semibold mb-1">{title}</h3>
        <p className="font-mono text-xs text-canvas/50">{description}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}
