# soundadam.github.io

Personal site repository.

Current version: `0.3.7`

This repo hosts the static personal site for `soundadam.com` and `soundadam.github.io`.
It is kept intentionally simple.
`CHANGELOG.md` is the single file for timestamped version history.

## Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Build

```bash
pnpm build
```

The site is statically exported for GitHub Pages.

## Structure

- `src/app/page.tsx`: homepage
- `src/app/about/page.tsx`: about page
- `src/app/blog/page.tsx`: blog index
- `src/app/se/page.tsx`: speech enhancement page
- `src/app/contact/page.tsx`: contact page
- `src/components/gravity-playground.tsx`: homepage iframe wrapper for the transplanted gravity demo
- `src/components/theme-toggle.tsx`: site-wide palette preference control
- `docs/THEME_SYSTEM.md`: semantic theme-token notes and maintenance hints
- `public/playground/*`: transplanted gravity demo assets
- `src/content/blog-posts.ts`: blog metadata
- `CHANGELOG.md`: versioned update log
- `docs/AI_HANDOFF.md`: debugging and continuation notes

## Deployment

- GitHub Pages remains the stable fallback deployment.
- Ubuntu server deployment notes now live in `docs/UBUNTU_DEPLOY.md`.
- A publish helper is available at `deploy/publish-static.sh`.
- An nginx site config is available at `deploy/nginx/soundadam.com.conf`.
- `/term` is safe to publish before the websocket backend exists; it stays detached until `/api/term/socket` is implemented.
