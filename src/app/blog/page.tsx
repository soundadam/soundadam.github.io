import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { blogPosts } from "@/content/blog-posts";

export default function BlogPage() {
  return (
    <PageShell>
      <section className="rounded-[40px] border border-white/60 bg-[linear-gradient(145deg,rgba(255,250,243,0.94),rgba(244,237,227,0.98))] px-6 py-10 shadow-[0_24px_80px_rgba(24,20,16,0.10)] backdrop-blur sm:px-8 lg:px-10">
        <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
          Personal Blog
        </p>
        <h1 className="mt-3 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-semibold tracking-[-0.05em] text-[var(--color-text)]">
          Writing should stay static, searchable, and fast.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-text-muted)]">
          This page is the static writing layer of the site. It is a good fit
          for GitHub Pages: project notes, research logs, design reasoning, and
          progress updates that should remain accessible even when the live demo
          service is under load.
        </p>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <article className="rounded-[34px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur">
          <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
            Published Notes
          </p>
          <div className="mt-4 grid gap-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-[26px] border border-[var(--color-border)] bg-white/70 px-5 py-5 transition-transform hover:-translate-y-1"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs tracking-[0.14em] text-[var(--color-text-muted)] uppercase">
                  <span>{post.tag}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                  {post.summary}
                </p>
              </Link>
            ))}
          </div>
        </article>

        <article className="rounded-[34px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur">
          <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
            Writing Role
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
            The blog is not meant to be a feed of polished announcements. It is
            the quiet public layer for technical notes, system boundaries,
            project rationale, and research direction that should remain
            readable on a static host.
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
            This makes `soundadam.github.io` useful even when the live server is
            unavailable. The public site still explains what is being built and
            why it is structured this way.
          </p>
          <Link
            href="/se"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-5 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-[var(--color-panel)]"
          >
            Open the SE page
          </Link>
        </article>
      </section>
    </PageShell>
  );
}
