const focusAreas = [
  "Speech enhancement systems that are actually shippable",
  "ML experiment workflows with explicit artifacts and reproducibility",
  "Technical interfaces that make model behavior legible",
];

const selectedWork = [
  {
    title: "setrain",
    subtitle: "Speech enhancement workspace",
    copy:
      "A unified workspace for training, serving, profiling, evaluation, and the next web demo frontend.",
    href: "https://github.com/soundadam/setrain",
    label: "Open repository",
  },
  {
    title: "Demo Frontend",
    subtitle: "Now being redesigned",
    copy:
      "Replacing the current Gradio demo with a responsive web frontend that can live cleanly beside the inference service.",
    href: "https://github.com/soundadam/setrain",
    label: "See current implementation",
  },
  {
    title: "System Notes",
    subtitle: "Build logs and design choices",
    copy:
      "Short-form writing on audio tooling, deployment tradeoffs, worktree-based collaboration, and interface decisions.",
    href: "https://github.com/soundadam",
    label: "Browse GitHub",
  },
];

const principles = [
  {
    title: "Signal first",
    copy:
      "I care about systems where the data path, model boundary, and user-facing result are easy to reason about.",
  },
  {
    title: "Interfaces matter",
    copy:
      "Model quality is only half the job. The way people test, compare, and trust results is part of the product.",
  },
  {
    title: "Practical rigor",
    copy:
      "I prefer reproducible workflows, small service contracts, and infrastructure that survives iteration.",
  },
];

const currentBuild = [
  "Homepage on GitHub Pages under soundadam.com",
  "setrain demo frontend rebuilt as a dedicated web app",
  "Inference service kept behind a small HTTP contract",
];

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
    title: "Domain",
    href: "https://soundadam.com",
    label: "soundadam.com",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-6 sm:px-8 lg:px-10">
        <header className="sticky top-4 z-20 mb-8 flex items-center justify-between rounded-full border border-white/60 bg-white/58 px-4 py-3 shadow-[0_12px_36px_rgba(24,20,16,0.08)] backdrop-blur md:px-6">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_18px_rgba(255,107,44,0.6)]" />
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.22em] text-[var(--color-accent-strong)] uppercase">
              soundadam
            </p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[var(--color-text-muted)] md:flex">
            <a href="#work" className="transition-colors hover:text-[var(--color-text)]">
              Work
            </a>
            <a href="#approach" className="transition-colors hover:text-[var(--color-text)]">
              Approach
            </a>
            <a href="#setrain" className="transition-colors hover:text-[var(--color-text)]">
              setrain
            </a>
            <a href="#links" className="transition-colors hover:text-[var(--color-text)]">
              Links
            </a>
          </nav>
        </header>

        <section className="grid min-h-[78vh] items-center gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[40px] border border-white/60 bg-[linear-gradient(145deg,rgba(255,250,243,0.92),rgba(244,237,227,0.98))] px-6 py-8 shadow-[0_24px_80px_rgba(24,20,16,0.10)] backdrop-blur sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-accent),var(--color-support))]" />
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[rgba(255,107,44,0.24)] bg-[rgba(255,107,44,0.08)] px-4 py-2 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
              Audio x Systems x Product
            </div>
            <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[0.92] font-semibold tracking-[-0.055em] text-[var(--color-text)] sm:text-6xl lg:text-7xl">
              Building clear technical systems around machine listening.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
              I work on speech enhancement, ML tooling, and frontend systems that
              help people inspect model behavior instead of treating it as a black
              box. This site is the public layer for that work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-6 font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.02em] text-[var(--color-cream)] shadow-[0_18px_45px_rgba(255,107,44,0.22)] transition-transform hover:-translate-y-0.5"
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
            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[var(--color-border)] bg-white/65 px-4 py-4 text-sm leading-6 text-[var(--color-text-muted)] shadow-[0_12px_30px_rgba(24,20,16,0.05)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <article className="rounded-[32px] border border-[rgba(15,118,110,0.20)] bg-[linear-gradient(160deg,rgba(11,54,51,0.96),rgba(15,118,110,0.84))] p-6 text-[#edf7f6] shadow-[0_20px_60px_rgba(15,118,110,0.24)]">
              <p className="text-sm tracking-[0.18em] text-[#9fdad3] uppercase">
                Current build
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight font-semibold tracking-[-0.04em]">
                The next demo will not be a Gradio skin.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#d4ece9]">
                The plan is a proper web frontend with responsive layout, sample
                gallery, live enhancement flow, and a cleaner boundary to the
                inference backend.
              </p>
            </article>

            <article className="rounded-[32px] border border-white/50 bg-white/58 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur">
              <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
                Deployment split
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
                {currentBuild.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="work" className="mt-6">
          <div className="mb-5">
            <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
              Selected Work
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
              Projects around audio, tooling, and interfaces.
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {selectedWork.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col rounded-[32px] border border-white/50 bg-white/54 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur"
              >
                <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
                  {card.subtitle}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-[var(--color-text-muted)]">
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
          </div>
        </section>

        <section id="approach" className="mt-6 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[36px] border border-[rgba(255,107,44,0.18)] bg-[linear-gradient(145deg,rgba(255,113,62,0.10),rgba(255,250,243,0.84))] p-6 shadow-[0_20px_60px_rgba(255,107,44,0.12)] sm:p-8">
            <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
              Approach
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight font-semibold tracking-[-0.04em] text-[var(--color-text)]">
              Research infrastructure should feel deliberate, not improvised.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-text-muted)]">
              I prefer systems with narrow contracts, explicit runtime artifacts,
              and interfaces that help users compare, inspect, and trust outputs.
              That applies equally to model training, serving, and frontend work.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-[32px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur"
              >
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="setrain"
          className="mt-6 rounded-[38px] border border-[rgba(255,107,44,0.22)] bg-[linear-gradient(145deg,rgba(255,113,62,0.11),rgba(255,250,243,0.86))] p-6 shadow-[0_20px_60px_rgba(255,107,44,0.12)] sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
                Featured Entry
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight font-semibold tracking-[-0.04em] text-[var(--color-text)]">
                setrain is the main bridge between research and product here.
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-[var(--color-text-muted)]">
                The homepage and the future demo frontend share one design
                language, but they should not share the same deployment target.
                The homepage is a static front door. The demo is an application
                backed by your own inference service and should be deployed like
                one.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://github.com/soundadam/setrain"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-6 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-cream)] shadow-[0_18px_45px_rgba(255,107,44,0.22)] transition-transform hover:-translate-y-0.5"
                >
                  Open setrain
                </a>
                <a
                  href="#links"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/58 px-6 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-white"
                >
                  Site links
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="links" className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[36px] border border-white/50 bg-white/58 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur sm:p-8">
            <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
              Status
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
              This site is now the stable public root.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-text-muted)]">
              The next iterations are deeper project pages, writing, and a linked
              live demo once the dedicated frontend is ready.
            </p>
          </article>

          <div className="grid gap-4 md:grid-cols-3">
            {quickLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[32px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur transition-transform hover:-translate-y-1"
              >
                <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
                  {item.title}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
                  {item.label}
                </h3>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-8 border-t border-[rgba(48,36,30,0.10)] py-6 text-sm text-[var(--color-text-muted)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>soundadam.com</p>
            <p>Audio systems, ML tooling, and deliberate interfaces.</p>
          </div>
        </footer>
      </section>
    </main>
  );
}
