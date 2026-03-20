import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { blogPosts } from "@/content/blog-posts";

export default function BlogPage() {
  return (
    <PageShell>
      <section className="max-w-4xl py-8">
        <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
          Personal Blog
        </p>
        <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
          Notes, progress, and technical writing.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-muted)]">
          This page stays simple. It holds notes that should remain readable and
          accessible as static pages.
        </p>
      </section>

      <section className="mt-4 max-w-4xl border-t border-[var(--color-border)] pt-8">
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border-b border-[var(--color-border)] pb-6"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs tracking-[0.14em] text-[var(--color-text-muted)] uppercase">
                <span>{post.tag}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                {post.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
                {post.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 max-w-4xl border-t border-[var(--color-border)] pt-8">
        <p className="max-w-3xl text-base leading-8 text-[var(--color-text-muted)]">
          The blog is for durable notes rather than announcements. It should
          stay useful on a static mirror and readable without extra interface
          noise.
        </p>
        <Link
          href="/se"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-border)] px-5 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-white"
        >
          Open the SE page
        </Link>
      </section>
    </PageShell>
  );
}
