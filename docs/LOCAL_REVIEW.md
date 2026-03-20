# Local Review

- updated at: `2026-03-20T14:47:30+08:00`
- base commit: `c9dfe39`
- target version: `0.3.6`

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
/term
/about
/blog
/blog/static-vs-live
/blog/research-threads
/blog/worktree-notes
/se
/contact
```

## Review Focus

- whether the top navigation now exposes `Term` alongside the stable site routes
- whether `/term` feels clearly separated from the footer pseudo-shell instead of blending into it
- whether the xterm surface loads cleanly without a backend and reports detachment clearly
- whether the endpoint field defaults to same-origin `/api/term/socket`
- whether the term page still reads well on mobile and desktop
- whether the footer terminal still stays fixed-height with internal scroll
- whether the footer terminal colors feel closer to a real terminal window and less like stacked colored cards
- whether `ls`, `cd term`, `open term`, `cat term`, and `cat routes` behave reliably in the footer shell
- whether `cd /` and `cat /` still return permission-style feedback
- whether the `ubuntu` theme continues to feel warmer and more terminal-like than the other palettes
- whether `night` still updates article surfaces, buttons, and embedded layers consistently
- whether the homepage stays sparse instead of becoming a feature-heavy landing page

## Validation

```bash
pnpm lint
pnpm build
```

## Notes

- Bootstrap remains a portability baseline.
- `/term` is the only page intended to host a real `xterm.js` surface.
- The footer terminal remains a bounded pseudo-shell for navigation only.
- If review finds a regression, use Git commits in `CHANGELOG.md` to move backward deliberately.
