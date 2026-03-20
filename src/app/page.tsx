import Link from "next/link";

import { PageShell } from "@/components/page-shell";

const highlights = [
  "南京大学声学本科在读，GPA 4.54/5.0，专业排名 3/44。",
  "关注具身智能、多模态感知、语音交互，以及声信号处理。",
  "当前研究主线是基于深度学习的单通道/多通道语音增强与分离。",
];

const entryCards = [
  {
    href: "/about",
    eyebrow: "About Me",
    title: "Education, research direction, and selected work.",
    copy:
      "A public-facing summary distilled from the resume, without publishing sensitive personal records.",
  },
  {
    href: "/blog",
    eyebrow: "Personal Blog",
    title: "Static notes, architecture decisions, and build logs.",
    copy:
      "Published notes live here as first-class static pages that remain readable and mirrorable on GitHub Pages.",
  },
  {
    href: "/se",
    eyebrow: "Speech Enhancement",
    title: "Stable project framing, sample strategy, and the live route.",
    copy:
      "This route explains what stays on the public site and what should run at se.soundadam.com.",
  },
  {
    href: "/contact",
    eyebrow: "Contact",
    title: "Direct links without friction.",
    copy:
      "Primary email and GitHub stay visible and lightweight, without hiding behind complex forms or heavy integrations.",
  },
];

export default function Home() {
  return (
    <PageShell>
      <section className="grid min-h-[74vh] items-center gap-6 lg:grid-cols-[1.16fr_0.84fr]">
        <div className="relative overflow-hidden rounded-[40px] border border-white/60 bg-[linear-gradient(145deg,rgba(255,250,243,0.94),rgba(244,237,227,0.98))] px-6 py-10 shadow-[0_24px_80px_rgba(24,20,16,0.10)] backdrop-blur sm:px-8 lg:px-10 lg:py-12">
          <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-accent),var(--color-support))]" />
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[rgba(255,107,44,0.24)] bg-[rgba(255,107,44,0.08)] px-4 py-2 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
            About Me x Writing x SE
          </div>
          <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[0.9] font-semibold tracking-[-0.06em] text-[var(--color-text)] sm:text-6xl lg:text-[5.2rem]">
            Liu Tianchi. Sound, learning systems, and interfaces that can be trusted.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
            This site now carries four public layers: about me, personal blog,
            speech enhancement, and contact. The static parts should remain
            stable and fast on GitHub Pages. The live SE experience should move
            onto your own server when ready.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-6 font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.02em] text-[var(--color-cream)] shadow-[0_18px_45px_rgba(255,107,44,0.22)] transition-transform hover:-translate-y-0.5"
              href="/about"
            >
              Read about me
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/55 px-6 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-white"
              href="/blog"
            >
              Read the notes
            </Link>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[var(--color-border)] bg-white/66 px-4 py-4 text-sm leading-7 text-[var(--color-text-muted)] shadow-[0_12px_30px_rgba(24,20,16,0.05)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <aside className="grid gap-4">
          <article className="rounded-[32px] border border-[rgba(15,118,110,0.20)] bg-[linear-gradient(160deg,rgba(11,54,51,0.96),rgba(15,118,110,0.84))] p-6 text-[#edf7f6] shadow-[0_20px_60px_rgba(15,118,110,0.24)]">
            <p className="text-sm tracking-[0.18em] text-[#9fdad3] uppercase">
              Stable Static Layer
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight font-semibold tracking-[-0.04em]">
              soundadam.github.io should remain useful even when the server is slow.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#d4ece9]">
              About, blog, project framing, and contact are all static by
              design. They should continue to load quickly from GitHub Pages
              even if the live demo runs elsewhere.
            </p>
          </article>

          <article className="rounded-[32px] border border-white/50 bg-white/58 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur">
            <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
              Sensitive Data Policy
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
              The resume is used as source material, but transcript pages,
              phone number, ID details, and similar sensitive records should not
              be published directly.
            </p>
          </article>
        </aside>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
        {entryCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-[32px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur transition-transform hover:-translate-y-1"
          >
            <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
              {card.eyebrow}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
              {card.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
              {card.copy}
            </p>
          </Link>
        ))}
      </section>
    </PageShell>
  );
}
