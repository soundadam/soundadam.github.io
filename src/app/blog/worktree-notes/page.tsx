import Link from "next/link";

import { PageShell } from "@/components/page-shell";

const points = [
  "Separate worktrees let design, live-demo integration, deployment notes, and static gallery work move without clobbering each other.",
  "Git history stays clearer because each line of work has a bounded scope and can be reviewed on its own.",
  "The public site benefits from the same discipline: stable content should not be coupled too tightly to fast-moving experiment code.",
];

export default function WorktreeNotesPage() {
  return (
    <PageShell>
      <article className="article-panel rounded-[40px] px-6 py-10 sm:px-8 lg:px-10">
        <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
          Workflow
        </p>
        <h1 className="mt-3 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-semibold tracking-[-0.05em] text-[var(--color-text)]">
          Parallel worktrees for faster frontend iteration
        </h1>
        <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
          2026-03-20
        </p>
        <div className="mt-8 grid gap-4">
          {points.map((point) => (
            <div
              key={point}
              className="article-card rounded-[28px] px-5 py-5 text-sm leading-7 text-[var(--color-text-muted)]"
            >
              {point}
            </div>
          ))}
        </div>
        <p className="mt-8 text-base leading-8 text-[var(--color-text-muted)]">
          The rule that matters most is still simple: use Git commits as the
          rollback surface. Worktrees increase throughput, but recovery should
          stay legible.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/blog"
            className="site-button site-button-primary"
          >
            Back to blog
          </Link>
          <Link
            href="/contact"
            className="site-button site-button-secondary"
          >
            Contact
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
