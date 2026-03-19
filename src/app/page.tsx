export default function Home() {
  const focusAreas = [
    "Speech enhancement systems",
    "ML tooling and experiment workflows",
    "Interfaces that explain technical work clearly",
  ];

  const projectCards = [
    {
      title: "setrain",
      subtitle: "Speech enhancement workspace",
      copy:
        "Training, inference, profiling, and the next web demo frontend in one research-to-product pipeline.",
      href: "https://github.com/soundadam/setrain",
      label: "Open setrain",
    },
    {
      title: "Lab Notes",
      subtitle: "Build logs and experiments",
      copy:
        "A place for short notes on model behavior, frontend rebuild decisions, and systems tradeoffs.",
      href: "https://github.com/soundadam",
      label: "Browse GitHub",
    },
  ];

  return (
    <main className="flex-1">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-14 pt-8 sm:px-8 lg:px-10">
        <header className="mb-10 flex items-center justify-between rounded-full border border-white/50 bg-white/45 px-4 py-3 shadow-[0_10px_30px_rgba(24,20,16,0.08)] backdrop-blur md:px-6">
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.22em] text-[var(--color-accent-strong)] uppercase">
              soundadam
            </p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[var(--color-text-muted)] md:flex">
            <a
              href="#work"
              className="transition-colors hover:text-[var(--color-text)]"
            >
              Work
            </a>
            <a
              href="#setrain"
              className="transition-colors hover:text-[var(--color-text)]"
            >
              setrain
            </a>
            <a
              href="https://github.com/soundadam"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--color-text)]"
            >
              GitHub
            </a>{" "}
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="relative overflow-hidden rounded-[36px] border border-white/50 bg-[linear-gradient(145deg,rgba(255,250,243,0.88),rgba(244,237,227,0.96))] px-6 py-8 shadow-[0_24px_80px_rgba(24,20,16,0.10)] backdrop-blur lg:px-9 lg:py-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-accent),var(--color-support))]" />
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[rgba(255,107,44,0.24)] bg-[rgba(255,107,44,0.08)] px-4 py-2 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
              Audio x Systems x ML
            </div>
            <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] font-semibold tracking-[-0.05em] text-[var(--color-text)] sm:text-6xl lg:text-7xl">
              Building signal-first software with a product eye.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
              I work on audio machine learning, practical tooling, and interfaces
              that make technical systems easier to trust. This site will become
              the front door for that work, with setrain as the first featured
              implementation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-6 font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.02em] text-[var(--color-cream)] shadow-[0_18px_45px_rgba(255,107,44,0.22)] transition-transform hover:-translate-y-0.5"
                href="#setrain"
              >
                Enter setrain
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/50 px-6 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-white/80"
                href="https://github.com/soundadam"
                target="_blank"
                rel="noreferrer"
              >
                Open GitHub
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[var(--color-border)] bg-white/60 px-4 py-4 text-sm leading-6 text-[var(--color-text-muted)] shadow-[0_12px_30px_rgba(24,20,16,0.05)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <aside className="grid gap-4">
            <div className="rounded-[32px] border border-[rgba(15,118,110,0.18)] bg-[linear-gradient(145deg,rgba(12,56,53,0.94),rgba(15,118,110,0.82))] p-6 text-[#edf7f6] shadow-[0_20px_60px_rgba(15,118,110,0.24)]">
              <p className="text-sm tracking-[0.18em] text-[#9fdad3] uppercase">
                Now building
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight font-semibold tracking-[-0.04em]">
                A responsive frontend to replace the current Gradio demo.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#d4ece9]">
                The next step is a real web experience: adaptive layouts,
                live enhancement flow, curated sample gallery, and a cleaner
                bridge into the inference service.
              </p>
            </div>
            <div className="rounded-[32px] border border-white/50 bg-white/55 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur">
              <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
                Working mode
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
                <li>Structured repos over ad hoc experiments.</li>
                <li>Small interfaces between frontend and inference.</li>
                <li>Parallel work through Git worktrees and bounded scopes.</li>
              </ul>
            </div>
          </aside>
        </div>

        <section id="work" className="mt-8 grid gap-4 lg:grid-cols-2">
          {projectCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[32px] border border-white/50 bg-white/52 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur"
            >
              <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
                {card.subtitle}
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
                {card.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-text-muted)]">
                {card.copy}
              </p>
              <a
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-border)] px-5 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-white"
              >
                {card.label}
              </a>
            </article>
          ))}
        </section>

        <section
          id="setrain"
          className="mt-4 rounded-[36px] border border-[rgba(255,107,44,0.22)] bg-[linear-gradient(145deg,rgba(255,113,62,0.11),rgba(255,250,243,0.82))] p-6 shadow-[0_20px_60px_rgba(255,107,44,0.12)] sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
                Featured Entry
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight font-semibold tracking-[-0.04em] text-[var(--color-text)]">
                setrain is the anchor project for this site.
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-[var(--color-text-muted)]">
                The homepage and the speech enhancement demo will share one visual
                language: warm surfaces, sharp display type, and a more editorial
                technical tone. This card is the bridge into the current
                implementation while the dedicated demo frontend is being rebuilt.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://github.com/soundadam/setrain"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-6 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-cream)] shadow-[0_18px_45px_rgba(255,107,44,0.22)] transition-transform hover:-translate-y-0.5"
                >
                  Current implementation
                </a>
                <a
                  href="https://github.com/soundadam?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/55 px-6 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-white"
                >
                  More projects
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
