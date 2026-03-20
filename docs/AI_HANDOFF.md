# AI Handoff

## Purpose

This document is a compact handoff for another AI agent or engineer who needs to continue work on `soundadam.github.io` without re-deriving project context from scratch.

## Repo Role

`soundadam.github.io` is the personal homepage repository.

It is intentionally separate from `setrain`.

Current policy:

- work on the homepage, docs, deployment notes, and local review flow here
- do not treat `setrain` as the primary editable repo
- only touch `setrain` for micro-adjustments to the legacy Gradio path if explicitly required

## Current Product Shape

- domain target: `soundadam.com`
- fallback / GitHub Pages address: `soundadam.github.io`
- current app type: static Next.js homepage
- deployment mode: GitHub Pages static export
- current public routes:
  - `/`
  - `/about`
  - `/blog`
  - `/blog/static-vs-live`
  - `/blog/research-threads`
  - `/blog/worktree-notes`
  - `/se`
  - `/contact`

This repo is the calm public front door.

The future speech-enhancement demo is expected to live separately under:

- `https://se.soundadam.com`
- same-origin API pattern: `/api/*`

That demo work currently lives in `setrain` worktrees, not here.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Bootstrap 5.3 baseline
- static export enabled in `next.config.ts`

## Important Files

- `src/app/page.tsx`
  - homepage content and structure
- `src/app/about/page.tsx`
  - curated public bio derived from safe resume facts
- `src/app/blog/page.tsx`
  - static writing layer
- `src/app/blog/*/page.tsx`
  - published static notes
- `src/app/se/page.tsx`
  - static speech-enhancement project framing
- `src/app/contact/page.tsx`
  - contact surface
- `src/app/layout.tsx`
  - global app layout
  - Google font setup
  - Bootstrap CSS import
- `src/app/globals.css`
  - custom design tokens and global page styling
- `src/components/theme-toggle.tsx`
  - client-side site-wide theme preference control
- `src/components/gravity-playground.tsx`
  - homepage wrapper for the transplanted gravity demo
- `src/content/blog-posts.ts`
  - static post metadata used by the blog index
- `public/playground/gravity.html`
  - self-contained embedded demo entry point
- `public/playground/gravity.css`
  - transplanted demo styling and lower-left field controls
- `public/playground/gravity.js`
  - transplanted physics and rendering logic with mouse-nearby pull / push fields
- `public/CNAME`
  - custom domain record for GitHub Pages
- `.github/workflows/deploy-pages.yml`
  - Pages deployment workflow
- `CHANGELOG.md`
  - single file for retroactive and forward timestamped changelog

## Local Review

Use:

```bash
pnpm install
pnpm dev
```

Default URL:

```text
http://localhost:3000
```

Validation:

```bash
pnpm lint
pnpm build
```

## Design Direction

Current visual intent:

- sparse rather than content-heavy
- simple and calm rather than decorative
- homepage as a quiet entry point, not a self-promotional landing page
- personal details concentrated on `/about`
- `se` kept visible, but not at the cost of clarity
- the playground should feel like an optional side detail, not the primary narrative
- when possible, prefer stronger transplanted interactions over weaker hand-made imitations
- theme preference should affect the overall site palette, not a single widget

Do not collapse the page into generic Bootstrap blocks just because Bootstrap is present. Bootstrap is the portability baseline, not the design language.

## Known Constraints

- the homepage should remain relatively spare for now
- links and sections can expand later, but the current intent is a quiet front door
- Bootstrap must remain available because the user wants easier migration to their own server
- future demo integration should be linked clearly but not embedded as a half-working live app here
- rollback must be Git-based, not manual file surgery
- resume-derived content must be manually curated before publication
- raw transcript pages, identifiers, phone number, and private school records must stay out of the public site

## Rollback Procedure

Use Git, not ad hoc edits.

Preferred patterns:

```bash
git log --oneline --decorate -10
git switch -c debug/<short-name> <commit>
```

If you need to inspect an old version without moving `main`, branch from the target commit.

If you need to undo a pushed commit while preserving history, prefer:

```bash
git revert <commit>
```

Avoid forceful history rewriting unless explicitly required.

## Debug Checklist

If the homepage looks wrong:

1. verify `bootstrap/dist/css/bootstrap.min.css` is still imported in `src/app/layout.tsx`
2. verify custom tokens in `src/app/globals.css` still override the baseline effectively
3. run `pnpm build` and check for app-router or CSS issues
4. verify `public/CNAME` still matches the intended domain
5. verify GitHub Pages workflow still uploads the `out/` directory
6. if behavior changed recently, compare against the last known-good commit from `CHANGELOG.md`
7. on mobile, verify the header nav is still visible and wrapping instead of disappearing
8. verify `/playground/gravity.html` loads and the iframe embed on `/` still works
9. verify theme selection persists and updates the page palette before and after navigation

If deployment looks wrong:

1. verify `next.config.ts` still has `output: "export"`
2. verify GitHub Pages is configured to deploy from GitHub Actions
3. verify DNS for `soundadam.com`
4. verify the latest workflow run succeeded

## Related External Context

There is parallel work in `setrain` for:

- `frontend-redesign-shell`
- `frontend-redesign-live-demo`
- `frontend-redesign-gallery`
- `frontend-redesign-deploy`

That work is relevant context, but should not automatically pull this repo back into `setrain`-style development.
