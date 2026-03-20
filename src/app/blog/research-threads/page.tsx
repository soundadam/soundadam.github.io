import Link from "next/link";

import { PageShell } from "@/components/page-shell";

const threads = [
  {
    title: "Speech enhancement and separation",
    copy:
      "Improving intelligibility and reducing distortion in noisy conditions remains the most concrete and active technical thread.",
  },
  {
    title: "Multimodal perception",
    copy:
      "Audio systems become more useful when they are understood alongside spatial, visual, or embodied context instead of as isolated waveforms.",
  },
  {
    title: "Interfaces that can be trusted",
    copy:
      "A system is not complete when the model works. It becomes trustworthy when its behavior, boundaries, and failure modes are legible to users.",
  },
];

export default function ResearchThreadsPage() {
  return (
    <PageShell>
      <article className="rounded-[40px] border border-white/60 bg-[linear-gradient(145deg,rgba(255,250,243,0.94),rgba(244,237,227,0.98))] px-6 py-10 shadow-[0_24px_80px_rgba(24,20,16,0.10)] backdrop-blur sm:px-8 lg:px-10">
        <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
          Research
        </p>
        <h1 className="mt-3 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-semibold tracking-[-0.05em] text-[var(--color-text)]">
          Research threads I want this site to carry in public
        </h1>
        <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
          2026-03-20
        </p>
        <div className="mt-8 grid gap-4">
          {threads.map((thread) => (
            <section
              key={thread.title}
              className="rounded-[28px] border border-[var(--color-border)] bg-white/70 px-5 py-5"
            >
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                {thread.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                {thread.copy}
              </p>
            </section>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-5 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-cream)]"
          >
            Read the about page
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
