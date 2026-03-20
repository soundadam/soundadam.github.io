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
  "Primary static site: soundadam.com",
  "Stable mirror: soundadam.github.io",
  "Live speech-enhancement surface: se.soundadam.com",
];

export default function ContactPage() {
  return (
    <PageShell>
      <section className="rounded-[40px] border border-white/60 bg-[linear-gradient(145deg,rgba(255,250,243,0.94),rgba(244,237,227,0.98))] px-6 py-10 shadow-[0_24px_80px_rgba(24,20,16,0.10)] backdrop-blur sm:px-8 lg:px-10">
        <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
          Contact
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-semibold tracking-[-0.05em] text-[var(--color-text)]">
          Direct and lightweight.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-text-muted)]">
          This route stays intentionally simple: one primary email, one public
          code surface. It should be as stable as the homepage itself.
        </p>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        {contacts.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="rounded-[34px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur transition-transform hover:-translate-y-1"
          >
            <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
              {item.label}
            </p>
            <h2 className="mt-3 break-all font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
              {item.value}
            </h2>
          </a>
        ))}
      </section>

      <section className="mt-6 rounded-[34px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur">
        <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
          Public Channels
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {publicChannels.map((channel) => (
            <div
              key={channel}
              className="rounded-[24px] border border-[var(--color-border)] bg-white/70 px-4 py-4 text-sm leading-7 text-[var(--color-text-muted)]"
            >
              {channel}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
