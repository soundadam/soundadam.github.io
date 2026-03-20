import type { Metadata } from "next";
import { Manrope, Space_Grotesk, Ubuntu_Mono } from "next/font/google";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import { DEFAULT_THEME, THEME_META } from "@/lib/themes";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = Ubuntu_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "soundadam",
  description: "Personal site for Adam's audio, systems, and machine learning work.",
};

const themeBootScript = `
(() => {
  try {
    const themes = ${JSON.stringify(THEME_META)};
    const fallback = "${DEFAULT_THEME}";
    const stored = localStorage.getItem("soundadam-theme");
    const theme = stored && Object.hasOwn(themes, stored) ? stored : fallback;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = themes[theme].scheme;
  } catch {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
      data-theme={DEFAULT_THEME}
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-boot" strategy="beforeInteractive">
          {themeBootScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
