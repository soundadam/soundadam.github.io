# Ubuntu Deploy

- updated at: `2026-03-20T14:58:50+08:00`
- base commit before this pass: `c1b1b1a`
- target version: `0.3.7`

## Purpose

This note prepares `soundadam.github.io` for migration from local macOS development to an Ubuntu server.

The current deployment target is:

- static site files served by nginx
- same-origin websocket reservation at `/api/term/socket`
- future backend bridge for `xterm.js -> WebSocket -> PTY -> containerized Codex`

## Current Scope

Ready now:

- build static site with `pnpm build`
- serve `out/` from nginx
- expose `/term` as a static page
- reserve `/api/term/socket` for the later terminal backend

Not implemented yet:

- websocket backend
- PTY host process
- containerized Codex worker

## Server Paths

Recommended layout:

- site root: `/srv/www/soundadam/current`
- nginx config: `/etc/nginx/sites-available/soundadam.com.conf`
- nginx symlink: `/etc/nginx/sites-enabled/soundadam.com.conf`
- future term backend upstream: `127.0.0.1:8787`

## First Deploy

On the local machine:

```bash
cd /Users/adam/projects/soundadam.github.io
./deploy/publish-static.sh user@server:/srv/www/soundadam/current/
```

On the Ubuntu server:

```bash
sudo cp deploy/nginx/soundadam.com.conf /etc/nginx/sites-available/soundadam.com.conf
sudo ln -sf /etc/nginx/sites-available/soundadam.com.conf /etc/nginx/sites-enabled/soundadam.com.conf
sudo nginx -t
sudo systemctl reload nginx
```

## Term Route Note

`/term` is safe to publish before the backend exists.

Without a websocket target behind `/api/term/socket`, the page stays detached and does not connect to the host shell.

## Maintenance Note

Keep GitHub Pages as the stable fallback.

Use the Ubuntu server when you want:

- custom nginx control
- future same-origin websocket transport
- containerized Codex backend behind `/api/term/socket`
