# Content Architecture

## Purpose

This note defines what each public domain is for, what content stays static, what stays live, and what resume-derived data must never be published.

## Domain Roles

| Domain | Role | Allowed content | Must not depend on |
| --- | --- | --- | --- |
| `soundadam.com` | Primary personal site | `about`, `blog`, `se` entry page, `contact`, selected static writing and profile content | live inference, private services, unpublished personal data |
| `soundadam.github.io` | Stable GitHub Pages mirror / fallback | static export of homepage content, lightweight notes, static blog pages, contact links, public assets that should stay fast and reliable | custom server features, authenticated content, live API calls |
| `se.soundadam.com` | Speech enhancement demo surface | demo UI shell, static samples, sample manifests, health status, live enhancement API under `/api/*` | GitHub Pages-only deployment assumptions |

## Static vs Live Split

### Static

- Homepage structure and navigation.
- `about me` content curated from public-safe resume facts.
- Personal blog pages if they are statically generated.
- `contact` page with `liutc1013@gmail.com` and GitHub profile links.
- `se` overview page on the homepage domain that introduces the project and links to `se.soundadam.com`.
- Demo sample assets that can be safely cached and served without backend logic.

### Live

- Speech enhancement inference.
- File upload handling for user audio.
- Queueing, job status, rate limiting, and server-side logging.
- Health checks and operational APIs exposed from `se.soundadam.com/api/*`.

## Publishing Rules

### Safe to publish after manual curation

- Name, school, major, and broad research direction.
- Short bio and selected public-facing project summaries.
- Selected awards or honors that you intentionally want public.
- Public contact channel: `liutc1013@gmail.com`.
- Public GitHub profile and links to public repositories.

### Must not be published

- The raw resume PDF.
- Transcript scans or score sheets.
- Course-by-course grades or detailed transcript data.
- Phone number.
- Student email address.
- ID numbers, home address, birth date, or any government / school identifier.
- Private attachments, recommendation materials, or application-specific documents.

## Resume Handling Rule

If resume content is used on the site, it must be rewritten into curated public copy. Do not upload the original PDF, and do not auto-publish extracted fields without a manual privacy check.
