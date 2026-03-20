# Local Review

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
- whether the terminal playground feels like a side detail rather than the main content
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
