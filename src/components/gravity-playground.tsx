export function GravityPlayground() {
  return (
    <section className="mt-10 max-w-5xl border-t border-[var(--color-border)] pt-8">
      <div className="max-w-2xl">
        <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
          Playground
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
          A gravity demo, transplanted directly.
        </h2>
        <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
          This is a direct port of the stronger local demo. It stays separate
          from the page narrative and runs as a self-contained interactive
          surface.
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-[24px] border border-[rgba(48,36,30,0.14)] bg-[#f5f0e8] shadow-[0_18px_40px_rgba(24,20,16,0.08)]">
        <iframe
          title="gravity playground"
          src="/playground/gravity.html"
          className="block h-[780px] w-full border-0 md:h-[720px]"
        />
      </div>
    </section>
  );
}
