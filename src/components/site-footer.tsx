import { FooterTerminalNav } from "@/components/footer-terminal-nav";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-[var(--color-border)] py-6 text-sm text-[var(--color-text-muted)]">
      <div className="flex flex-col gap-4">
        <FooterTerminalNav />
        <div className="site-chrome-shell flex flex-col gap-3 rounded-[22px] px-4 py-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="footer-command font-mono">~/soundadam</p>
            <p className="mt-1 max-w-2xl text-sm text-[var(--color-text-muted)]">
              Static writing, project framing, and links to live systems.
            </p>
          </div>
          <p className="text-xs tracking-[0.12em] uppercase text-[var(--color-text-muted)]">
            soundadam.com / soundadam.github.io
          </p>
        </div>
      </div>
    </footer>
  );
}
