"use client";

import { ReactNode, useState } from "react";

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className="w-full">
      <div className="border-b border-white/[0.06] mb-6">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 py-2.5 font-mono text-sm transition-all border-b-2
                ${
                  activeTab === tab.id
                    ? "text-canvas border-mint"
                    : "text-canvas/50 border-transparent hover:text-canvas/70 hover:border-white/[0.12]"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div>{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  );
}
