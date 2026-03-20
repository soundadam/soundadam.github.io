# soundadam.github.io

Personal site repository.

Current version: `0.2.5`

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
- `src/components/emoji-terminal.tsx`: particle pool and terminal viewer
- `src/content/source-snippets.ts`: curated source snippets for the terminal mode
- `src/content/blog-posts.ts`: blog metadata
- `CHANGELOG.md`: versioned update log
- `docs/AI_HANDOFF.md`: debugging and continuation notes

## Deployment

Push to `main` and let GitHub Actions deploy the static export.
