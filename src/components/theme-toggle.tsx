"use client";

import { useEffect, useState } from "react";

import {
  DEFAULT_THEME,
  getThemeScheme,
  resolveTheme,
  THEME_META,
  THEME_NAMES,
  type ThemeName,
} from "@/lib/themes";

function applyTheme(theme: ThemeName) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = getThemeScheme(theme);
  window.localStorage.setItem("soundadam-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeName>(() => {
    if (typeof document === "undefined") {
      return DEFAULT_THEME;
    }

    return resolveTheme(document.documentElement.dataset.theme);
  });

  useEffect(() => {
    function handleStorage(event: StorageEvent) {
      if (!event.key || event.key === "soundadam-theme") {
        const next = resolveTheme(window.localStorage.getItem("soundadam-theme"));
        document.documentElement.dataset.theme = next;
        document.documentElement.style.colorScheme = getThemeScheme(next);
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
      {THEME_NAMES.map((themeName) => {
        const active = themeName === theme;

        return (
          <button
            key={themeName}
            type="button"
            onClick={() => {
              applyTheme(themeName);
              setTheme(themeName);
            }}
            className={`min-h-8 rounded-full px-3 text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors ${
              active
                ? "bg-[var(--color-text)] text-[var(--color-panel-strong)]"
                : "text-[var(--color-text-muted)] hover:bg-[var(--color-panel-strong)] hover:text-[var(--color-text)]"
            }`}
          >
            {THEME_META[themeName].label}
          </button>
        );
      })}
    </div>
  );
}
