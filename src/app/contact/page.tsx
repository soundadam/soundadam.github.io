import { PageShell } from "@/components/page-shell";

const contacts = [
  {
    label: "Email",
    value: "liutc1013@gmail.com",
    href: "mailto:liutc1013@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/soundadam",
    href: "https://github.com/soundadam",
  },
];

const publicChannels = [
  "Primary site: soundadam.com",
  "Mirror: soundadam.github.io",
  "Live demo: se.soundadam.com",
];

export default function ContactPage() {
  return (
    <PageShell>
      <section className="max-w-4xl py-8">
        <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
          Contact
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
          Direct and simple.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-muted)]">
          This page stays simple: one primary email and one public code surface.
        </p>
      </section>

      <section className="mt-4 max-w-4xl border-t border-[var(--color-border)] pt-8">
        <div className="grid gap-6 md:grid-cols-2">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="border-b border-[var(--color-border)] pb-6"
            >
              <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
                {item.label}
              </p>
              <h2 className="mt-3 break-all font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                {item.value}
              </h2>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-8 max-w-4xl border-t border-[var(--color-border)] pt-8">
        <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
          Public Channels
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {publicChannels.map((channel) => (
            <div
              key={channel}
              className="border-b border-[var(--color-border)] pb-3 text-sm leading-7 text-[var(--color-text-muted)]"
            >
              {channel}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
