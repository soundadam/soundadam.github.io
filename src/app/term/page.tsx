import { PageShell } from "@/components/page-shell";
import { TermBetaPanel } from "@/components/term-beta-panel";

export default function TermPage() {
  return (
    <PageShell>
      <section className="max-w-4xl py-6 sm:py-8">
        <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
          term / beta
        </p>
        <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[2.2rem] leading-[1.04] font-semibold tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
          A separate xterm.js route for the real terminal path.
        </h1>
        <p className="mt-5 max-w-[42rem] text-[0.98rem] leading-8 text-[var(--color-text-muted)] sm:text-base">
          This page is intentionally isolated from the footer pseudo-shell. It
          is the beta surface for the future <code>xterm.js -&gt; WebSocket -&gt; PTY -&gt; containerized Codex</code>
          route that should run on your Ubuntu server, not against the host shell on macOS.
        </p>
      </section>

      <TermBetaPanel />
    </PageShell>
  );
}
