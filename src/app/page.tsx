const notes = [
  "Speech enhancement systems",
  "Model tooling and runtime boundaries",
  "Interfaces with editorial discipline",
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="mx-auto flex w-full max-w-6xl flex-col px-5 pb-16 pt-6 sm:px-8 lg:px-10">
        <header className="mb-12 flex items-center justify-between rounded-full border border-white/60 bg-white/54 px-4 py-3 shadow-[0_10px_30px_rgba(24,20,16,0.08)] backdrop-blur md:px-6">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_18px_rgba(255,107,44,0.6)]" />
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.22em] text-[var(--color-accent-strong)] uppercase">
              soundadam
            </p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[var(--color-text-muted)] md:flex">
            <a href="#setrain" className="transition-colors hover:text-[var(--color-text)]">
              setrain
            </a>
            <a href="#links" className="transition-colors hover:text-[var(--color-text)]">
              Links
            </a>
          </nav>
        </header>

        <section className="grid min-h-[74vh] items-center gap-6 lg:grid-cols-[1.16fr_0.84fr]">
          <div className="relative overflow-hidden rounded-[40px] border border-white/60 bg-[linear-gradient(145deg,rgba(255,250,243,0.94),rgba(244,237,227,0.98))] px-6 py-10 shadow-[0_24px_80px_rgba(24,20,16,0.10)] backdrop-blur sm:px-8 lg:px-10 lg:py-12">
            <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-accent),var(--color-support))]" />
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[rgba(255,107,44,0.24)] bg-[rgba(255,107,44,0.08)] px-4 py-2 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
              Audio x Systems x Craft
            </div>
            <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[0.9] font-semibold tracking-[-0.06em] text-[var(--color-text)] sm:text-6xl lg:text-[5.4rem]">
              Building machine listening tools with a product sensibility.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
              This is a quiet front door for my work in speech enhancement,
              model-serving systems, and interfaces that make technical behavior
              easier to inspect. The featured path here is `setrain`.
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
                GitHub
              </a>
            </div>
            <div className="mt-12 grid gap-3 md:grid-cols-3">
              {notes.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[var(--color-border)] bg-white/66 px-4 py-4 text-sm leading-6 text-[var(--color-text-muted)] shadow-[0_12px_30px_rgba(24,20,16,0.05)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="grid gap-4">
            <article className="rounded-[32px] border border-[rgba(15,118,110,0.20)] bg-[linear-gradient(160deg,rgba(11,54,51,0.96),rgba(15,118,110,0.84))] p-6 text-[#edf7f6] shadow-[0_20px_60px_rgba(15,118,110,0.24)]">
              <p className="text-sm tracking-[0.18em] text-[#9fdad3] uppercase">
                Current focus
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight font-semibold tracking-[-0.04em]">
                Rebuilding the speech enhancement demo as a real web product.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#d4ece9]">
                Responsive frontend, cleaner service boundary, curated samples,
                and a deployment shape that belongs on your own server.
              </p>
            </article>

            <article className="rounded-[32px] border border-white/50 bg-white/58 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur">
              <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
                Quiet note
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
                `soundadam.com` can stay intentionally spare. It does not need to
                explain everything yet. It only needs to feel precise and point
                clearly toward the work that matters now.
              </p>
            </article>
          </aside>
        </section>

        <section
          id="setrain"
          className="mt-6 rounded-[38px] border border-[rgba(255,107,44,0.22)] bg-[linear-gradient(145deg,rgba(255,113,62,0.11),rgba(255,250,243,0.88))] p-6 shadow-[0_20px_60px_rgba(255,107,44,0.12)] sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
                Featured Entry
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight font-semibold tracking-[-0.04em] text-[var(--color-text)]">
                `setrain` is where the work gets concrete.
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-[var(--color-text-muted)]">
                Training, serving, profiling, evaluation, and the upcoming demo
                frontend all meet there. The homepage stays static and calm. The
                speech enhancement app goes on your own server under
                `se.soundadam.com`.
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
                  href="https://github.com/soundadam/setrain/issues"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/58 px-6 font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-white"
                >
                  Track progress
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="links" className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[36px] border border-white/50 bg-white/58 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur sm:p-8">
            <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
              Links
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
              Small surface, clear exits.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-text-muted)]">
              This homepage can stay sparse for now. The next substantial layer is
              the dedicated speech enhancement frontend.
            </p>
          </article>

          <div className="grid gap-4 md:grid-cols-3">
            <a
              href="https://github.com/soundadam"
              target="_blank"
              rel="noreferrer"
              className="rounded-[32px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur transition-transform hover:-translate-y-1"
            >
              <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
                GitHub
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
                @soundadam
              </h3>
            </a>
            <a
              href="https://github.com/soundadam/setrain"
              target="_blank"
              rel="noreferrer"
              className="rounded-[32px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur transition-transform hover:-translate-y-1"
            >
              <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
                Repository
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
                setrain
              </h3>
            </a>
            <div className="rounded-[32px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur">
              <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
                Domain
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
                soundadam.com
              </h3>
            </div>
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
