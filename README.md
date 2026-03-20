# soundadam.github.io

Personal homepage for Adam's audio, systems, and machine learning work.

Current tracked version: `0.2.0`

The current version is intentionally focused:

- multi-page static personal site
- shared visual direction with the upcoming speech-enhancement web demo
- stable GitHub Pages mirror for public-safe content
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
- `src/app/about/page.tsx`: public about page
- `src/app/blog/page.tsx`: static writing layer
- `src/app/blog/*`: published static posts
- `src/app/se/page.tsx`: speech enhancement project page
- `src/app/contact/page.tsx`: direct contact surface
- `src/app/globals.css`: brand tokens and page-level styling
- `src/components/`: shared page chrome
- `src/content/blog-posts.ts`: static post metadata
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment workflow

## Next Steps

- add a lightweight projects layer when there is enough public material to justify it
- expand blog posts rather than turning the site into a link dump
- keep `se.soundadam.com` as the live surface and preserve this repo as the static front door
