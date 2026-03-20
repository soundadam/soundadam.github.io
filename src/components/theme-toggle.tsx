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
      className="theme-toggle-shell"
      role="group"
    >
      <span className="theme-toggle-label font-mono">theme</span>
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
            className={`theme-toggle-button font-mono ${
              active
                ? "theme-toggle-button-active"
                : "theme-toggle-button-idle"
            }`}
          >
            {THEME_META[themeName].label}
          </button>
        );
      })}
    </div>
  );
}
