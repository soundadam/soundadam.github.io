import Link from "next/link";

import { GravityPlayground } from "@/components/gravity-playground";
import { PageShell } from "@/components/page-shell";

const entries = [
  {
    href: "/about",
    label: "About",
    title: "A concise public profile.",
    copy: "Education, current interests, and a short background.",
  },
  {
    href: "/blog",
    label: "Blog",
    title: "Notes and progress logs.",
    copy: "Static writing that should remain stable and easy to access.",
  },
  {
    href: "/se",
    label: "SE",
    title: "Speech enhancement project page.",
    copy: "Project framing here, live demo on se.soundadam.com.",
  },
  {
    href: "/contact",
    label: "Contact",
    title: "Direct contact links.",
    copy: "Email and GitHub, without forms or extra layers.",
  },
];

export default function Home() {
  return (
    <PageShell>
      <section className="max-w-4xl py-8">
        <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
          soundadam
        </p>
        <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-tight font-semibold tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
          A personal site for notes, current work, and a stable path to the speech enhancement demo.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
          The homepage stays intentionally light. Personal details live in the
          about page. Writing and project context stay static here. The live
          demo belongs on se.soundadam.com.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-text)] px-5 font-[family-name:var(--font-display)] text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-strong)]"
            href="/se"
          >
            Open SE page
          </Link>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-border)] px-5 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-white"
            href="/about"
          >
            About me
          </Link>
        </div>
      </section>

      <section className="mt-8 border-t border-[var(--color-border)] pt-8">
        <div className="grid gap-6 md:grid-cols-2">
          {entries.map((entry) => (
            <Link
              key={entry.href}
              href={entry.href}
              className="border-b border-[var(--color-border)] pb-6 transition-colors hover:text-[var(--color-accent-strong)]"
            >
              <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
                {entry.label}
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                {entry.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
                {entry.copy}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <GravityPlayground />
    </PageShell>
  );
}
