export type SourceSnippet = {
  id: string;
  path: string;
  command: string;
  summary: string;
  content: string;
};

export const sourceSnippets: SourceSnippet[] = [
  {
    id: "home",
    path: "src/app/page.tsx",
    command: "cat src/app/page.tsx",
    summary: "Homepage structure and the restrained entry layout.",
    content: `import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { EmojiTerminal } from "@/components/emoji-terminal";

const entries = [
  {
    href: "/about",
    label: "About",
    title: "A concise public profile.",
  },
  {
    href: "/blog",
    label: "Blog",
    title: "Notes and progress logs.",
  },
];

export default function Home() {
  return (
    <PageShell>
      <section className="max-w-4xl py-8">
        <h1 className="...">
          A personal site for notes, current work, and a stable path to the speech enhancement demo.
        </h1>
      </section>

      <EmojiTerminal />
    </PageShell>
  );
}`,
  },
  {
    id: "playground",
    path: "src/components/emoji-terminal.tsx",
    command: "cat src/components/emoji-terminal.tsx",
    summary: "The playful homepage surface: particle pool first, source terminal second.",
    content: `"use client";

import { useMemo, useState } from "react";

import { sourceSnippets } from "@/content/source-snippets";

export function EmojiTerminal() {
  const [mode, setMode] = useState<"pool" | "terminal">("pool");
  const [activeId, setActiveId] = useState(sourceSnippets[0].id);

  // Pool mode: click to spawn floating particles.
  // Terminal mode: browse curated source files with command-style output.
}`,
  },
  {
    id: "se",
    path: "src/app/se/page.tsx",
    command: "cat src/app/se/page.tsx",
    summary: "Static framing for the speech-enhancement project and the live split.",
    content: `const liveCapabilities = [
  "audio upload and enhancement inference",
  "same-origin API routing under /api/*",
  "health checks, logging, and deployment control",
];

export default function SePage() {
  return (
    <PageShell>
      <section className="max-w-4xl py-8">
        <h1 className="...">
          Project overview here, live demo on se.soundadam.com.
        </h1>
      </section>
    </PageShell>
  );
}`,
  },
];
