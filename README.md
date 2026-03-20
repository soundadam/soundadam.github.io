# soundadam.github.io

Personal homepage for Adam's audio, systems, and machine learning work.

Current tracked version: `0.1.5`

The current version is intentionally focused:

- one-page landing site
- shared visual direction with the upcoming `setrain` web demo
- direct entry into the current `setrain` implementation
- static export ready for GitHub Pages

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

`next.config.ts` enables `output: "export"`, so the build produces a static site for GitHub Pages.

## Deployment

Push to `main` and let the GitHub Actions workflow publish the exported site to GitHub Pages.

## Operational Docs

- `CHANGELOG.md`
- `docs/AI_HANDOFF.md`
- `docs/LOCAL_REVIEW.md`
- `VERSION`

## Structure

- `src/app/page.tsx`: homepage content
- `src/app/globals.css`: brand tokens and page-level styling
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment workflow

## Next Steps

- replace placeholder profile links with final public destinations
- add projects, writing, and contact sections
- extract the shared theme into a reusable package if the `setrain` demo frontend and homepage start evolving in parallel
