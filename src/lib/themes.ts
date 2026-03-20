export const DEFAULT_THEME = "sand" as const;

export const THEME_META = {
  sand: {
    label: "Sand",
    scheme: "light",
  },
  ubuntu: {
    label: "Ubuntu",
    scheme: "dark",
  },
  night: {
    label: "Night",
    scheme: "dark",
  },
} as const;

export type ThemeName = keyof typeof THEME_META;

export const THEME_NAMES = Object.keys(THEME_META) as ThemeName[];

export function isThemeName(value: string | null | undefined): value is ThemeName {
  return Boolean(value && value in THEME_META);
}

export function resolveTheme(value: string | null | undefined): ThemeName {
  return isThemeName(value) ? value : DEFAULT_THEME;
}

export function getThemeScheme(theme: ThemeName) {
  return THEME_META[theme].scheme;
}
