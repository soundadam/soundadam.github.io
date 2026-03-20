import Link from "next/link";

import { PageShell } from "@/components/page-shell";

export default function StaticVsLivePage() {
  return (
    <PageShell>
      <article className="article-panel rounded-[40px] px-6 py-10 sm:px-8 lg:px-10">
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
            className="site-button site-button-primary"
          >
            Open the SE page
          </Link>
          <Link
            href="/blog"
            className="site-button site-button-secondary"
          >
            Back to blog
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
