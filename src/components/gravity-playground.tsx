export function GravityPlayground() {
  return (
    <section className="mt-14 border-t border-[var(--color-border)] pt-8 sm:mt-16 sm:pt-10">
      <div className="relative mx-[-0.75rem] overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-[var(--color-panel)] shadow-[0_18px_40px_rgba(var(--color-shadow-rgb),0.22)] sm:mx-0 sm:rounded-[28px]">
        <div className="pointer-events-none absolute left-4 top-4 z-20 hidden sm:block">
          <div className="gravity-shell-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-[linear-gradient(180deg,var(--background),color-mix(in_srgb,var(--background)_74%,transparent),transparent)] sm:h-24" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 bg-[linear-gradient(180deg,transparent,color-mix(in_srgb,var(--background)_90%,transparent))] sm:h-20" />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--background)_84%,transparent),transparent)] lg:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-[linear-gradient(270deg,color-mix(in_srgb,var(--background)_84%,transparent),transparent)] lg:block" />
        <iframe
          title="gravity playground"
          src="/playground/gravity.html"
          className="block h-[250px] w-full border-0 min-[420px]:h-[290px] sm:h-[360px] lg:h-[430px] xl:h-[480px]"
        />
      </div>
    </section>
  );
}
