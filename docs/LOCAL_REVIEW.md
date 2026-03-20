# Local Review

- updated at: `2026-03-20T13:43:23+08:00`
- base commit: `07c8dfb`
- target version: `0.3.2`

## Purpose

This runbook is for opening the homepage locally for review.

## Start

```bash
pnpm install
pnpm dev
```

Open:

```text
http://localhost:3000
```

Review these routes explicitly:

```text
/
/about
/blog
/blog/static-vs-live
/blog/research-threads
/blog/worktree-notes
/se
/contact
```

## Review Focus

- typography scale and spacing rhythm
- whether the homepage feels restrained instead of decorative
- whether the transplanted gravity playground feels like a side detail rather than the main content
- whether the iframe playground loads cleanly on desktop and mobile
- whether changing theme updates the whole page palette, not just the toggle itself
- whether the `ubuntu` theme feels warmer and more terminal-like than the previous `mist` direction
- whether `night` now changes article panels, buttons, and embedded surfaces consistently
- whether the header/footer chrome feels intentional rather than decorative
- whether the theme switcher reads as part of the site chrome instead of a generic pill
- whether the footer terminal feels usable rather than gimmicky
- whether `ls`, `pwd`, `cd about`, `cd blog`, `open se`, and `clear` behave reliably
- whether the gravity layer feels appropriately shallow on phones and broader on desktop
- mobile navigation visibility
- whether personal content is mostly confined to `/about`
- mobile layout behavior
- whether the page feels sparse in a deliberate way, not unfinished

## Validation

```bash
pnpm lint
pnpm build
```

## Notes

- Bootstrap is present as a portability baseline.
- The current look is still driven by custom CSS tokens and page-specific composition.
- If review finds a regression, use Git commits in `CHANGELOG.md` to move backward deliberately.
- If you want a temporary alternate local port:

```bash
pnpm dev -- --port 3001
```
