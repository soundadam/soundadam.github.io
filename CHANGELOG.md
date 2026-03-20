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

## 0.3.1 - 2026-03-20T13:36:17+08:00 - in progress

- Status:
  - the Ubuntu palette is now being carried through site chrome instead of only content surfaces
  - header, footer, theme switcher, and gravity controls are moving toward a quieter terminal-window language
- Implemented in this version so far:
  - added shared chrome tokens for shell backgrounds, highlights, and window-control dots
  - refined the header and footer into subtle panel-like containers
  - rebuilt the theme toggle as a small terminal-style segmented control
  - gave the gravity wrapper and field-control pill a more cohesive terminal-like texture

## 0.3.0 - 2026-03-20T13:29:35+08:00 - `ccb687a`

- Status:
  - `mist` is being retired in favor of a darker Ubuntu-terminal-inspired theme
  - the site is moving from raw palette swapping to semantic theme tokens
  - dark-mode adaptation is being extended into article surfaces, buttons, and the embedded gravity iframe
- Implemented in this version so far:
  - replaced the light blue `mist` direction with a warm aubergine `ubuntu` theme
  - added semantic surface and button tokens so pages stop hard-coding `white`, gradient fills, and light-only panel assumptions
  - updated the blog article routes and call-to-action buttons to consume shared theme classes
  - made the embedded gravity page read the same theme preference from `localStorage`
  - retained Git-based rollback and timestamped documentation for AI handoff

## 0.2.9 - 2026-03-20T13:20:00+08:00 - `127c491`

- Status:
  - theme boot now avoids the dev-only hydration warning that appeared after adding pre-hydration palette selection
  - local review remains centered on the new palette system, pointer fields, and responsive gravity band
- Implemented in this version so far:
  - added `suppressHydrationWarning` and a matching default `color-scheme` on the root html element
  - kept the pre-hydration theme boot path so stored theme preference still applies early on static hosting

## 0.2.8 - 2026-03-20T13:15:00+08:00 - `2b3b7f6`

- Status:
  - the homepage now has a site-wide palette preference instead of widget-local color changes
  - the gravity layer now supports mouse-nearby pull and push fields through a subtle lower-left control
  - desktop and mobile sizing have been reconciled so the bottom layer reads shallow on phones and broader on large screens
- Implemented in this version so far:
  - added `sand`, `mist`, and `night` themes with `localStorage` persistence and a pre-hydration boot script
  - added a shared header theme toggle so the entire page palette changes consistently across routes
  - merged responsive homepage spacing, CTA stacking, and earlier two-column entry cards
  - updated the gravity iframe shell to blend better with page edges on larger screens
  - added local attract / repel controls to the transplanted physics demo without promoting it into a primary feature
  - removed stale pre-transplant emoji pool CSS so future debugging reflects the real active implementation

## 0.2.7 - 2026-03-20T12:28:00+08:00 - in progress

- Status:
  - the transplanted gravity effect has been demoted into a bottom-page ambient layer
  - explanatory text around the demo has been removed
  - `CHANGELOG.md` remains the single timestamped recovery log
- Implemented in this version so far:
  - removed descriptive wrapper copy from the homepage section
  - removed the demo-side info panel and reduced the empty-state prompt to a minimal icon
  - reduced the embedded height so the gravity layer reads as visual atmosphere instead of a feature block

## 0.2.6 - 2026-03-20T12:18:00+08:00 - `46da074`

- Status:
  - the homepage playground has been replaced by a direct transplant of the stronger local gravity demo
  - the effect now relies on real physics instead of the previous hand-authored motion layer
  - `CHANGELOG.md` remains the single timestamped recovery log
- Implemented in this version so far:
  - removed the custom pool component from the homepage path
  - added a self-contained static gravity demo under `public/playground`
  - added a homepage wrapper that embeds the transplanted demo directly

## 0.2.5 - 2026-03-20T12:02:00+08:00 - `56228dd`

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
