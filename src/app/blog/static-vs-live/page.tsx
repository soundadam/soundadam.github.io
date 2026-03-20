import Link from "next/link";

import { PageShell } from "@/components/page-shell";

export default function StaticVsLivePage() {
  return (
    <PageShell>
      <article className="rounded-[40px] border border-white/60 bg-[linear-gradient(145deg,rgba(255,250,243,0.94),rgba(244,237,227,0.98))] px-6 py-10 shadow-[0_24px_80px_rgba(24,20,16,0.10)] backdrop-blur sm:px-8 lg:px-10">
        <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
          Architecture
        </p>
        <h1 className="mt-3 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-semibold tracking-[-0.05em] text-[var(--color-text)]">
          Why this site stays static while the SE demo goes live elsewhere
        </h1>
        <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
          2026-03-20
        </p>
        <div className="mt-8 grid gap-5 text-base leading-8 text-[var(--color-text-muted)]">
          <p>
            The public site and the speech-enhancement demo should not be forced
            into the same operational shape. A personal homepage needs to stay
            fast, stable, and easy to mirror. A live inference demo needs file
            upload handling, operational logs, health checks, and room for
            backend iteration.
          </p>
          <p>
            That is why `soundadam.com` and `soundadam.github.io` remain
            static-first. They carry the about page, writing, contact links, and
            the project framing for speech enhancement. The interactive demo is
            reserved for `se.soundadam.com`, where the frontend shell and the
            inference API can sit behind the same origin.
          </p>
          <p>
            This split is not only about deployment convenience. It also keeps
            the public narrative readable even when the live service is slow,
            down, or still changing. The stable layer explains what the project
            is. The live layer proves what it can do.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/se"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-5 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-cream)]"
          >
            Open the SE page
          </Link>
          <Link
            href="/blog"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-5 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text)]"
          >
            Back to blog
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
