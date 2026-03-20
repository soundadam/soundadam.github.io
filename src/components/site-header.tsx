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
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3 text-inherit">
          <div className="h-2 w-2 rounded-full bg-[var(--color-text)]" />
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-[var(--color-text)] uppercase">
              soundadam
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
