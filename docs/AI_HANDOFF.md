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
- deployment mode: GitHub Pages static export for the public site
- current public routes:
  - `/`
  - `/term`
  - `/about`
  - `/blog`
  - `/blog/static-vs-live`
  - `/blog/research-threads`
  - `/blog/worktree-notes`
  - `/se`
  - `/contact`

This repo is the calm public front door.

`/term` is the only route intended to host a real `xterm.js` surface.

The footer terminal is intentionally a bounded pseudo-shell for navigation only.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Bootstrap 5.3 baseline
- `@xterm/xterm`
- `@xterm/addon-fit`
- static export enabled in `next.config.ts`

## Last Terminal Beta Pass

- updated at: `2026-03-20T14:47:30+08:00`
- base commit before this pass: `c9dfe39`
- target version: `0.3.6`
- active objective:
  - add a dedicated `/term` page for the real terminal beta path
  - keep the footer shell fake, constrained, and navigational
  - prepare for Ubuntu-hosted `xterm.js -> WebSocket -> PTY -> containerized Codex`
  - avoid connecting the site to the host login shell directly

## Important Files

- `src/app/page.tsx`
  - homepage content and entry cards
- `src/app/term/page.tsx`
  - isolated beta route for the real terminal path
- `src/app/about/page.tsx`
  - curated public bio derived from safe resume facts
- `src/app/blog/page.tsx`
  - static writing layer
- `src/app/se/page.tsx`
  - static speech-enhancement project framing
- `src/app/contact/page.tsx`
  - contact surface
- `src/app/layout.tsx`
  - global app layout
  - Bootstrap import
  - xterm global stylesheet import
- `src/app/globals.css`
  - custom design tokens
  - footer shell styling
  - term beta styling
- `src/components/site-header.tsx`
  - top navigation now includes `Term`
- `src/components/footer-terminal-nav.tsx`
  - footer pseudo-terminal for route navigation
  - now understands `term` in `ls`, `cd`, `open`, and `cat`
- `src/components/term-beta-panel.tsx`
  - client-only `xterm.js` surface and websocket attachment logic
- `src/components/gravity-playground.tsx`
  - homepage wrapper for the transplanted gravity demo
- `docs/TERM_BETA.md`
  - server-facing notes for the isolated terminal beta route
- `docs/LOCAL_REVIEW.md`
  - route-by-route local review checklist
- `docs/PARALLEL_TRACKS.md`
  - active worktree split
- `CHANGELOG.md`
  - single file for timestamped changelog and rollback references

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

## Safety Boundary

Do not connect `/term` to the host shell on macOS or Ubuntu.

Preferred backend shape:

- `xterm.js -> WebSocket -> PTY -> containerized Codex`
- low-privilege container user
- explicit workspace mount only
- no host home directory, SSH keys, or Docker socket
- retain session logging server-side

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
2. verify `@xterm/xterm/css/xterm.css` is still imported in `src/app/layout.tsx`
3. verify custom tokens in `src/app/globals.css` still override the baseline effectively
4. run `pnpm build` and check for app-router or CSS issues
5. verify theme selection persists and updates both footer shell and `/term` surface legibly
6. verify `/term` loads even when no websocket backend is present
7. verify the footer shell stays bounded in height and does not turn into a real terminal
8. verify `cd /`, `open /`, and `cat /` respond with permission-style errors instead of changing route
9. compare against the latest known-good commit in `CHANGELOG.md` before rolling back
