import Link from "next/link";

import { PageShell } from "@/components/page-shell";

const staticAssets = [
  "project overview",
  "sample gallery snapshots",
  "evaluation notes",
  "links to code and papers",
];

export default function SePage() {
  return (
    <PageShell>
      <section className="rounded-[40px] border border-white/60 bg-[linear-gradient(145deg,rgba(255,250,243,0.94),rgba(244,237,227,0.98))] px-6 py-10 shadow-[0_24px_80px_rgba(24,20,16,0.10)] backdrop-blur sm:px-8 lg:px-10">
        <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
          Speech Enhancement
        </p>
        <h1 className="mt-3 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-semibold tracking-[-0.05em] text-[var(--color-text)]">
          Static framing here, live demo on your own server.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-text-muted)]">
          This route is the durable project page. It should remain accessible
          from `soundadam.com` and `soundadam.github.io`, even if the server-side
          interactive demo is unavailable. The actual live speech enhancement app
          is intended for `se.soundadam.com`.
        </p>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[34px] border border-[rgba(15,118,110,0.20)] bg-[linear-gradient(160deg,rgba(11,54,51,0.96),rgba(15,118,110,0.84))] p-6 text-[#edf7f6] shadow-[0_20px_60px_rgba(15,118,110,0.24)]">
          <p className="text-sm tracking-[0.18em] text-[#9fdad3] uppercase">
            Live Destination
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight font-semibold tracking-[-0.04em]">
            se.soundadam.com
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#d4ece9]">
            The live system should eventually sit behind the same-origin pattern
            `se.soundadam.com` plus `/api/*`, leaving this site free to remain
            fast and static.
          </p>
          <a
            href="https://github.com/soundadam/setrain"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 font-[family-name:var(--font-display)] text-sm font-semibold text-white transition-colors hover:bg-white/16"
          >
            Open setrain repository
          </a>
        </article>

        <article className="rounded-[34px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur">
          <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
            Static Contents
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
            {staticAssets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)]">
            This split keeps the project understandable when the live service is
            down, slow, or still evolving.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-5 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-[var(--color-panel)]"
          >
            Read project notes
          </Link>
        </article>
      </section>
    </PageShell>
  );
}
