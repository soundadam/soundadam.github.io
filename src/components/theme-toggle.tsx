"use client";

import { useEffect, useState } from "react";

type ThemeName = "sand" | "mist" | "night";

const themes: Array<{ id: ThemeName; label: string }> = [
  { id: "sand", label: "Sand" },
  { id: "mist", label: "Mist" },
  { id: "night", label: "Night" },
];

function applyTheme(theme: ThemeName) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme === "night" ? "dark" : "light";
  window.localStorage.setItem("soundadam-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeName>(() => {
    if (typeof document === "undefined") {
      return "sand";
    }

    return (document.documentElement.dataset.theme as ThemeName | undefined) ?? "sand";
  });

  useEffect(() => {
    function handleStorage(event: StorageEvent) {
      if (!event.key || event.key === "soundadam-theme") {
        const next =
          (window.localStorage.getItem("soundadam-theme") as ThemeName | null) ?? "sand";
        document.documentElement.dataset.theme = next;
        document.documentElement.style.colorScheme = next === "night" ? "dark" : "light";
        setTheme(next);
      }
    }

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div
      aria-label="Theme preference"
      className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-panel)] p-1"
      role="group"
    >
      {themes.map((item) => {
        const active = item.id === theme;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              applyTheme(item.id);
              setTheme(item.id);
            }}
            className={`min-h-8 rounded-full px-3 text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors ${
              active
                ? "bg-[var(--color-text)] text-[var(--color-panel-strong)]"
                : "text-[var(--color-text-muted)] hover:bg-[var(--color-panel-strong)] hover:text-[var(--color-text)]"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
