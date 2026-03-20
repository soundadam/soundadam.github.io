import { PageShell } from "@/components/page-shell";

const items = [
  ["School", "Nanjing University"],
  ["Major", "Acoustics, School of Physics"],
  ["Stage", "Undergraduate student"],
  ["Time", "2023.09 - present"],
  ["GPA", "4.54 / 5.0"],
  ["Rank", "3 / 44"],
];

const interests = [
  "speech enhancement and separation",
  "multimodal perception",
  "speech interaction",
  "signal processing",
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="max-w-4xl py-8">
        <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
          About Me
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
          Liu Tianchi
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-muted)]">
          I am a third-year undergraduate student in acoustics at Nanjing
          University. My current interests are speech enhancement, multimodal
          perception, speech interaction, and signal processing. This page keeps
          the public profile simple and only includes information that is safe
          to publish.
        </p>
      </section>

      <section className="mt-4 max-w-4xl border-t border-[var(--color-border)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
          Basic Information
        </h2>
        <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {items.map(([label, value]) => (
            <div key={label} className="border-b border-[var(--color-border)] pb-4">
              <dt className="text-sm tracking-[0.14em] text-[var(--color-text-muted)] uppercase">
                {label}
              </dt>
              <dd className="mt-2 text-base leading-7 text-[var(--color-text)]">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-8 max-w-4xl border-t border-[var(--color-border)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
          Current Interests
        </h2>
        <ul className="mt-6 grid gap-3 text-base leading-7 text-[var(--color-text-muted)]">
          {interests.map((interest) => (
            <li key={interest} className="border-b border-[var(--color-border)] pb-3">
              {interest}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 max-w-4xl border-t border-[var(--color-border)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
          Public Note
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-muted)]">
          This page is intentionally plain. It is a short public summary rather
          than a full CV. Detailed private records and application materials are
          not published here.
        </p>
      </section>
    </PageShell>
  );
}
