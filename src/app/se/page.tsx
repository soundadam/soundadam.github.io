import Link from "next/link";

import { PageShell } from "@/components/page-shell";

const staticAssets = [
  "project overview",
  "sample gallery snapshots",
  "evaluation notes",
  "links to code and papers",
];

const liveCapabilities = [
  "audio upload and enhancement inference",
  "same-origin API routing under /api/*",
  "health checks, logging, and deployment control",
];

export default function SePage() {
  return (
    <PageShell>
      <section className="max-w-4xl py-8">
        <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
          Speech Enhancement
        </p>
        <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
          Project overview here, live demo on se.soundadam.com.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-muted)]">
          This route is the durable project page. It should remain accessible
          from soundadam.com and soundadam.github.io, even if the server-side
          interactive demo is unavailable.
        </p>
      </section>

      <section className="mt-4 max-w-4xl border-t border-[var(--color-border)] pt-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
              Static Contents
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
              {staticAssets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)]">
              This split keeps the project understandable when the live service
              is down, slow, or still evolving.
            </p>
            <Link
              href="/blog/static-vs-live"
              className="site-button site-button-secondary mt-6"
            >
              Read the architecture note
            </Link>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
              Live Layer
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
              The live system should sit behind se.soundadam.com with the
              same-origin API pattern /api/*.
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
              {liveCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8 max-w-4xl border-t border-[var(--color-border)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
          Current Focus
        </h2>
        <div className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
          <p>
            The project is moving toward a reliable speech-enhancement surface:
            controlled preprocessing, transparent evaluation, and an interface
            that explains its own boundaries instead of hiding them behind a
            single upload button.
          </p>
          <p className="mt-4">
            This static project page should keep the work legible even before
            the live service is fully online.
          </p>
        </div>
        <a
          href="https://github.com/soundadam/setrain"
          target="_blank"
          rel="noreferrer"
          className="site-button site-button-secondary mt-6"
        >
          Open setrain repository
        </a>
      </section>
    </PageShell>
  );
}
