# Changelog

All notable changes to `soundadam.github.io` are recorded here.

The format is intentionally practical rather than formal:

- each entry keeps an explicit version
- each entry keeps an absolute timestamp
- each entry keeps the git commit for source recovery
- entries are written for future debugging and AI handoff

Rollback rule:

- use Git history for rollback
- do not hand-edit files to simulate rollback
- prefer checkout / revert / branch-from-commit workflows so state remains traceable

## 0.2.5 - 2026-03-20T12:02:00+08:00 - in progress

- Status:
  - the homepage pool now emphasizes gravity more clearly
  - landing motion includes heavier impact and rebound instead of only gentle settling
  - `CHANGELOG.md` remains the single timestamped recovery log
- Implemented in this version so far:
  - added weight-sensitive settle duration for particles
  - added deeper impact and rebound stages to the landing animation
  - reduced lateral drift so the pool reads as heavier and less airy

## 0.2.4 - 2026-03-20T11:52:00+08:00 - `4dbd8e6`

- Status:
  - the homepage playground now prioritizes a denser, more settled pool behavior
  - particles no longer read as evenly floating decorations
  - `CHANGELOG.md` remains the single timestamped recovery log
- Implemented in this version so far:
  - rewrote particle generation so new elements settle into the lower half of the frame
  - added softer arrival, bobbing, and drain animations for a more pooled feeling
  - adjusted the pool surface styling to suggest depth and accumulation

## 0.2.3 - 2026-03-20T11:38:00+08:00 - `498d2e8`

- Status:
  - the homepage playground is now structured around a default particle pool instead of a click-targeted terminal
  - terminal mode is now optional and entered deliberately
  - `CHANGELOG.md` remains the single timestamped recovery log
- Implemented in this version so far:
  - replaced the simple emoji burst box with a calmer particle pool
  - added a drain transition when switching from pool mode into terminal mode
  - added a curated Ubuntu-style source viewer with command history and file switching
  - added source snippet content for static repo browsing

## 0.2.2 - 2026-03-20T11:24:00+08:00 - `016fd49`

- Status:
  - `CHANGELOG.md` remains the single file for timestamped public change tracking
  - homepage keeps the restrained structure from `0.2.1`
  - a small playful interaction has been added without turning the homepage back into a decorative landing page
- Implemented in this version so far:
  - added a terminal-style emoji playground to the homepage
  - kept the animation fully client-side and static-host friendly
  - continued version and timestamp tracking in `CHANGELOG.md`

## 0.2.1 - 2026-03-20T11:10:00+08:00 - `7715214`

- Status:
  - homepage has been simplified to reduce decorative card-heavy presentation
  - personal details are being moved off the homepage and kept mainly on `/about`
  - public profile copy is intentionally plain because the site represents an undergraduate-stage resume
- Implemented in this version so far:
  - rewrote the homepage as a restrained entry page instead of a showcase layout
  - simplified the `about` page into a clearer public summary
  - simplified `blog`, `se`, and `contact` into more document-like pages
  - reduced global visual effects and chrome intensity
  - rewrote `README.md` into a shorter, clearer project readme

## 0.2.0 - 2026-03-20T10:53:59+08:00 - `ca19203`

- Status:
  - repository is now the primary working surface
  - app expansion now includes `about`, `blog`, `se`, and `contact`
  - `setrain` should stay unchanged except for micro-tweaks to the legacy `app/se-demo` / Gradio path
  - Bootstrap has been adopted as a baseline dependency for portability to your own server
  - Git should be the only rollback mechanism
- Intent:
  - keep the homepage repo independently operable
  - keep `soundadam.com` and `soundadam.github.io` static-first and stable
  - keep live speech enhancement on `se.soundadam.com`
  - make future debugging easier for another AI or human collaborator
- Planned records in this version:
  - keep static public content easy to debug and easy to mirror
- Implemented in this version so far:
  - expanded the public IA to `about`, `blog`, `se`, and `contact`
  - published initial static blog notes under `/blog/static-vs-live`, `/blog/research-threads`, and `/blog/worktree-notes`
  - rewrote the homepage around those four entry points
  - kept navigation visible on mobile instead of hiding the route structure
  - strengthened the `SE` page so it explains the static/live boundary directly
  - added content architecture documentation for `soundadam.com`, `soundadam.github.io`, and `se.soundadam.com`
  - documented privacy rules for resume-derived content
  - kept all rollback guidance explicitly Git-based
  - added published static blog posts instead of leaving the writing section as a placeholder
  - fixed mobile navigation visibility in the shared header

## 0.1.4 - 2026-03-19T22:53:45+08:00 - `63fc7d4`

- Added Bootstrap baseline to the homepage repository.
- Imported `bootstrap/dist/css/bootstrap.min.css` at the app layout layer.
- Kept the custom visual language on top of the Bootstrap baseline.
- This change is primarily about portability and easier migration to your own server stack.

## 0.1.3 - 2026-03-19T21:59:49+08:00 - `3b03bf5`

- Elevated the homepage art direction.
- Tightened the layout rhythm and landing page hierarchy.
- Preserved the sparse, editorial technical tone while making the page feel more intentional.

## 0.1.2 - 2026-03-19T21:58:05+08:00 - `3b1375a`

- Refined the homepage layout after the first landing page pass.
- Reduced visual noise and moved toward a calmer, more restrained structure.
- Added the custom domain file for `soundadam.com`.

## 0.1.1 - 2026-03-19T21:52:00+08:00 - `c687e5e`

- Expanded the initial landing page into a fuller homepage.
- Added stronger project framing around `setrain`.
- Added GitHub Pages deployment workflow and static export support.

## 0.1.0 - 2026-03-19T21:44:04+08:00 - `1be2fbb`

- Initialized the repository.
- Scaffolded the Next.js app.
- Established the first homepage shell and deployment baseline.
