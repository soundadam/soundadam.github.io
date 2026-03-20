# Theme System

- updated at: `2026-03-20T13:29:35+08:00`
- base commit: `127c491`
- target version: `0.3.0`

## Purpose

This note records how theme control is expected to work in `soundadam.github.io`.

It exists to make future AI or human maintenance easier.

`CHANGELOG.md` remains the single timestamped history file.
This document explains structure, not release history.

## Current Themes

- `sand`
  - restrained light editorial base
- `ubuntu`
  - warm dark theme inspired by Terminal's Ubuntu profile direction
- `night`
  - cooler dark theme with a more neutral engineering tone

The local macOS Terminal preferences were useful mostly as a structural reference.
Its `Ubuntu` profile separates background, text, selection, cursor, and ANSI colors.
This site does not need the full ANSI layer, but it should preserve that idea of separate roles instead of one flat palette blob.

## Design Rule

Do not theme the site by editing page-local classes one by one.

Prefer this order:

1. add or adjust semantic tokens in `src/app/globals.css`
2. update shared classes such as `.site-button-*` or `.article-*`
3. only touch page components if the shared semantic layer is insufficient

## Semantic Layers In Use

- page layer
  - `--background`
  - `--foreground`
  - `--color-text`
  - `--color-text-muted`
- interactive layer
  - `--color-accent`
  - `--color-accent-strong`
  - `--color-button-primary`
  - `--color-button-primary-hover`
  - `--color-button-primary-text`
  - `--color-button-secondary`
  - `--color-button-secondary-hover`
- surface layer
  - `--color-panel`
  - `--color-panel-strong`
  - `--color-surface-soft`
  - `--color-surface-border`
  - `--color-surface-gradient-from`
  - `--color-surface-gradient-to`
- structural layer
  - `--color-border`
  - `--color-border-strong`
  - `--color-selection`
  - `--color-shadow-rgb`

## Shared Classes

- `.site-button`
  - common CTA shape, spacing, and transitions
- `.site-button-primary`
  - accent CTA
- `.site-button-secondary`
  - neutral CTA
- `.article-panel`
  - long-form article container
- `.article-card`
  - nested surface card inside article routes

## Embedded Gravity Layer

The homepage playground is a same-origin iframe under `public/playground`.

Theme sync works by:

- reading `soundadam-theme` from `localStorage`
- applying `data-theme` inside `gravity.html`
- using theme-local variables in `gravity.css`

If the iframe looks out of sync with the main page, check:

1. `src/components/theme-toggle.tsx`
2. `src/app/layout.tsx`
3. `public/playground/gravity.html`
4. `public/playground/gravity.css`

## Maintenance Notes

- If you add a new theme, add tokens for all semantic layers, not only the base background and text.
- Dark themes should be reviewed against:
  - homepage CTA buttons
  - blog article panels
  - nested article cards
  - gravity iframe shell
  - field-control pill inside the iframe
- If a page still needs `bg-white`, `text-white`, or raw rgba gradients after a theme change, that is usually a smell that a semantic token is missing.
