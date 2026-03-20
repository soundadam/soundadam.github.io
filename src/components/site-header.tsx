import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/se", label: "SE" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="mb-12 rounded-[32px] border border-white/60 bg-white/54 px-4 py-4 shadow-[0_10px_30px_rgba(24,20,16,0.08)] backdrop-blur md:rounded-full md:px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <Link href="/" className="flex items-center gap-3 text-inherit">
        <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_18px_rgba(255,107,44,0.6)]" />
        <div>
          <p className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.22em] text-[var(--color-accent-strong)] uppercase">
            soundadam
          </p>
        </div>
      </Link>

      <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--color-text-muted)] sm:text-sm md:justify-end md:gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition-colors hover:text-[var(--color-text)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      </div>
    </header>
  );
}
