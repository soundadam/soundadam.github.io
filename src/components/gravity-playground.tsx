export function GravityPlayground() {
  return (
    <section className="mt-16 border-t border-[var(--color-border)] pt-10">
      <div className="relative overflow-hidden rounded-[28px] border border-[rgba(48,36,30,0.12)] bg-[#f5f0e8] shadow-[0_18px_40px_rgba(24,20,16,0.06)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-[linear-gradient(180deg,#f7f4ee,rgba(247,244,238,0.68),transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-[linear-gradient(180deg,transparent,rgba(247,244,238,0.88))]" />
        <iframe
          title="gravity playground"
          src="/playground/gravity.html"
          className="block h-[320px] w-full border-0 md:h-[420px]"
        />
      </div>
    </section>
  );
}
