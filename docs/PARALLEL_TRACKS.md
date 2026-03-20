# Parallel Tracks

This note records the current multi-worktree split for `soundadam.github.io`.

`CHANGELOG.md` remains the single timestamped history file. This document is only for active task routing.

## Active Worktrees

| Worktree | Branch | Ownership | Current focus |
| --- | --- | --- | --- |
| `.worktrees/terminal-polish` | `terminal-polish` | footer shell visual polish | align footer terminal more closely with the local Ubuntu Terminal profile |
| `.worktrees/term-beta` | `term-beta` | isolated real-terminal beta | `/term` route with `xterm.js`, same-origin websocket target, and sandbox-first backend assumptions |

## Main Branch Policy

- `main` stays usable and reviewable.
- Parallel experiments should land in worktrees first when the surface is risky or visually unstable.
- Reconcile branches deliberately after local review.
- Use Git history for rollback, not manual file resets.

## Deferred Ideas

- server-side websocket bridge for `xterm.js -> PTY -> containerized Codex`
- stronger footer-shell polish without turning the footer into a real terminal
- theme-token cleanup if additional terminal-like routes are added later
