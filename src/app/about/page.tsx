import { PageShell } from "@/components/page-shell";

const awards = [
  "2024 年大学生物理学术竞赛国赛特等奖",
  "2024 年国家奖学金",
  "第一届产学结合高校通用人工智能大赛一等奖",
];

const principles = [
  "Treat signal quality, evaluation, and interface design as one system rather than separate concerns.",
  "Prefer public writing that explains constraints, not only outcomes.",
  "Keep demos honest: stable static framing first, live claims second.",
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="rounded-[40px] border border-white/60 bg-[linear-gradient(145deg,rgba(255,250,243,0.94),rgba(244,237,227,0.98))] px-6 py-10 shadow-[0_24px_80px_rgba(24,20,16,0.10)] backdrop-blur sm:px-8 lg:px-10">
        <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
          About Me
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-semibold tracking-[-0.05em] text-[var(--color-text)]">
          Liu Tianchi
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-text-muted)]">
          I am an undergraduate student in acoustics at Nanjing University. My
          current interests sit around embodied intelligence, multimodal
          perception, speech interaction, and signal processing. The most active
          line of work right now is speech enhancement and separation, especially
          in deep-learning-based single-channel and multi-channel settings.
        </p>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[34px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur">
          <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
            Education
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
            Nanjing University, School of Physics, Acoustics
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
            2023.09 - present
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-panel)] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">GPA</p>
              <p className="mt-2 text-2xl font-semibold text-[var(--color-text)]">4.54 / 5.0</p>
            </div>
            <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-panel)] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Rank</p>
              <p className="mt-2 text-2xl font-semibold text-[var(--color-text)]">3 / 44</p>
            </div>
          </div>
        </article>

        <article className="rounded-[34px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur">
          <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
            Research Focus
          </p>
          <div className="mt-4 grid gap-3">
            <div className="rounded-[24px] border border-[var(--color-border)] bg-white/68 px-4 py-4 text-sm leading-7 text-[var(--color-text-muted)]">
              Speech enhancement and separation under noisy, complex acoustic conditions.
            </div>
            <div className="rounded-[24px] border border-[var(--color-border)] bg-white/68 px-4 py-4 text-sm leading-7 text-[var(--color-text-muted)]">
              Deep-learning-based architectures for single-channel and multi-channel audio tasks.
            </div>
            <div className="rounded-[24px] border border-[var(--color-border)] bg-white/68 px-4 py-4 text-sm leading-7 text-[var(--color-text-muted)]">
              Systems thinking around data preparation, training pipelines, evaluation, and demo surfaces.
            </div>
          </div>
        </article>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <article className="rounded-[34px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur">
          <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
            Selected Project
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
            Single-channel speech enhancement
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
            Built around PyTorch and DSP tooling, with emphasis on preprocessing,
            synthetic noise mixing, model training, and reducing distortion under
            non-stationary noise. Common evaluation targets include PESQ,
            DNSMOS, and SI-SNR.
          </p>
        </article>

        <article className="rounded-[34px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur">
          <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
            Awards
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
            {awards.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[34px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur">
          <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
            Working Principles
          </p>
          <div className="mt-4 grid gap-3">
            {principles.map((principle) => (
              <div
                key={principle}
                className="rounded-[24px] border border-[var(--color-border)] bg-white/68 px-4 py-4 text-sm leading-7 text-[var(--color-text-muted)]"
              >
                {principle}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[34px] border border-white/50 bg-white/56 p-6 shadow-[0_18px_48px_rgba(24,20,16,0.08)] backdrop-blur">
          <p className="text-sm tracking-[0.18em] text-[var(--color-accent-strong)] uppercase">
            Public Scope
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
            This page is intentionally curated from public-safe resume facts. It
            should communicate direction and capability without exposing
            transcript scans, application materials, or private identifiers.
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
            For current work and future notes, the blog and SE pages are the
            more durable public surfaces.
          </p>
        </article>
      </section>
    </PageShell>
  );
}
