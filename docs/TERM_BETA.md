# Term Beta

- updated at: `2026-03-20T14:38:00+08:00`
- base commit before this pass: `c9dfe39`
- target version: `0.3.6`
- route: `/term`

## Purpose

This note covers the isolated beta terminal route.

It exists so the public site can keep a bounded pseudo-shell in the footer while testing a real `xterm.js` surface separately.

## Intended Runtime

Frontend:

- `xterm.js`
- same-origin WebSocket target, defaulting to `/api/term/socket`

Backend on Ubuntu server:

- WebSocket bridge
- PTY process
- containerized Codex session
- workspace mounted into the container, not the host shell directly

## Safety Boundary

Do not connect the beta page to the host login shell on macOS or Ubuntu.

Preferred boundary:

- `xterm.js -> WebSocket -> PTY -> containerized Codex`
- container runs as a low-privilege user
- only an explicit workspace directory is mounted
- home directory, SSH keys, Docker socket, and broad host paths are not mounted
- session logs should be retained server-side

## Static Hosting Behavior

On GitHub Pages or any static-only host, `/term` should still render.

Expected behavior without backend:

- xterm surface loads
- endpoint field remains editable
- connection status stays detached or errors cleanly
- no fake host-shell simulation is introduced inside this page

## Review Checklist

- top nav includes `Term`
- homepage includes a `Term` entry card or CTA
- footer pseudo-shell understands `term` in `ls`, `cd`, `open`, and `cat`
- `/term` loads on desktop and mobile without layout breakage
- xterm theme follows the site theme without leaving unreadable colors behind
- missing backend fails clearly instead of hanging silently
- endpoint defaults to same-origin `/api/term/socket`

## Maintenance Note

Keep this route isolated.

If a real shell ever appears in the footer, the site will lose the current safety and information-architecture boundary.
