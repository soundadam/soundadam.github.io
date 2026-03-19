const quickLinks = [
  {
    title: "GitHub",
    href: "https://github.com/soundadam",
    label: "@soundadam",
  },
  {
    title: "setrain",
    href: "https://github.com/soundadam/setrain",
    label: "speech enhancement workspace",
  },
  {
    title: "Now",
    href: "https://github.com/soundadam/setrain",
    label: "frontend redesign in progress",
  },
];

const signals = [
  "speech enhancement",
  "systems for model work",
  "interfaces that explain outputs",
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 pb-12 pt-6 sm:px-8 lg:px-10">
        <header className="mb-12 flex items-center justify-between rounded-full border border-white/60 bg-white/58 px-4 py-3 shadow-[0_12px_36px_rgba(24,20,16,0.08)] backdrop-blur md:px-6">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_18px_rgba(255,107,44,0.55)]" />
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.22em] text-[var(--color-accent-strong)] uppercase">
              soundadam
            </p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[var(--color-text-muted)] md:flex">
            <a href="#setrain" className="transition-colors hover:text-[var(--color-text)]">
              setrain
            </a>
            <a href="#links" className="transition-colors hover:text-[var(--color-text)]">
              links
            </a>
          </nav>
        </header>

        <section className="grid flex-1 items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="pt-4 lg:pt-10">
            <p className="mb-6 text-sm tracking-[0.20em] text-[var(--color-accent-strong)] uppercase">
              audio x systems x interface
            </p>
            <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[0.9] font-semibold tracking-[-0.06em] text-[var(--color-text)] sm:text-6xl lg:text-7xl">
              A quiet front door for technical work.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
              I build around machine listening, experiment workflows, and product
              surfaces that make models easier to inspect. For now, this site stays
              intentionally sparse. The clearest entry is setrain.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-6 font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.02em] text-[var(--color-cream)] shadow-[0_18px_45px_rgba(255,107,44,0.20)] transition-transform hover:-translate-y-0.5"
                href="#setrain"
              >
                Enter setrain
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/55 px-6 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-white"
                href="https://github.com/soundadam"
                target="_blank"
                rel="noreferrer"
              >
                Open GitHub
              </a>
            </div>
          </div>

          <aside className="grid gap-4 lg:pt-12">
            <article className="rounded-[34px] border border-white/60 bg-white/58 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur sm:p-7">
              <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
                Current focus
              </p>
              <div className="mt-5 space-y-4">
                {signals.map((item) => (
                  <p
                    key={item}
                    className="border-b border-[rgba(48,36,30,0.08)] pb-4 font-[family-name:var(--font-display)] text-2xl leading-tight tracking-[-0.04em] text-[var(--color-text)] last:border-b-0 last:pb-0"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </article>

            <article className="rounded-[34px] border border-[rgba(15,118,110,0.18)] bg-[linear-gradient(160deg,rgba(11,54,51,0.96),rgba(15,118,110,0.84))] p-6 text-[#edf7f6] shadow-[0_20px_60px_rgba(15,118,110,0.22)] sm:p-7">
              <p className="text-sm tracking-[0.18em] text-[#9fdad3] uppercase">
                Build note
              </p>
              <p className="mt-4 text-lg leading-8 text-[#def2f0]">
                The next speech enhancement demo will move off Gradio and onto a
                dedicated web frontend with its own deployment surface.
              </p>
            </article>
          </aside>
        </section>

        <section
          id="setrain"
          className="mt-12 rounded-[38px] border border-[rgba(255,107,44,0.20)] bg-[linear-gradient(145deg,rgba(255,250,243,0.86),rgba(255,113,62,0.10))] p-6 shadow-[0_20px_60px_rgba(255,107,44,0.12)] sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
                Featured entry
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-[0.95] font-semibold tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
                setrain
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
                A speech enhancement workspace spanning training, serving,
                profiling, evaluation, and the next frontend rewrite. This is the
                main project I want this site to point toward first.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://github.com/soundadam/setrain"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-6 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-cream)] shadow-[0_18px_45px_rgba(255,107,44,0.22)] transition-transform hover:-translate-y-0.5"
                >
                  Open repository
                </a>
                <a
                  href="https://github.com/soundadam/setrain"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/58 px-6 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-white"
                >
                  Current implementation
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="links" className="mt-8 grid gap-4 md:grid-cols-3">
          {quickLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-[30px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur transition-transform hover:-translate-y-1"
            >
              <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
                {item.title}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
                {item.label}
              </h3>
            </a>
          ))}
        </section>

        <footer className="mt-8 border-t border-[rgba(48,36,30,0.10)] py-6 text-sm text-[var(--color-text-muted)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>soundadam.com</p>
            <p>Minimal by intent. More work will arrive around setrain first.</p>
          </div>
        </footer>
      </section>
    </main>
  );
}
