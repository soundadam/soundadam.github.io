import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/se", label: "SE" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="mb-14 border-b border-[var(--color-border)] pb-4">
      <div className="site-chrome-shell flex flex-col gap-4 rounded-[24px] px-4 py-3 md:flex-row md:items-center md:justify-between md:px-5">
        <Link href="/" className="flex items-center gap-3 text-inherit">
          <div className="site-window-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-[var(--color-text)] uppercase">
              soundadam
            </p>
            <p className="font-mono text-[0.7rem] tracking-[0.12em] text-[var(--color-text-muted)] uppercase">
              home / notes / se
            </p>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-3 md:justify-end">
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--color-text-muted)] sm:text-sm md:gap-6">
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
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
