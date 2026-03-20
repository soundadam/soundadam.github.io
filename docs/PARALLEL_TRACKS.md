# Parallel Tracks

This note records the current multi-worktree split for `soundadam.github.io`.

`CHANGELOG.md` remains the single timestamped history file. This document is only for active task routing.

## Active Worktrees

| Worktree | Branch | Ownership | Current focus |
| --- | --- | --- | --- |
| `.worktrees/fields` | `playground-fields` | playground physics interactions | mouse-nearby attract / repel field on top of the transplanted gravity demo |
| `.worktrees/theme` | `site-theme` | global theme system | whole-site palette switching, not just widget-level color changes |
| `.worktrees/responsive` | `site-responsive` | responsive adaptation | homepage spacing, gravity layer sizing, mobile / desktop layout behavior |

## Main Branch Policy

- `main` stays usable and reviewable.
- Parallel experiments should land in worktrees first.
- Reconcile branches deliberately after local review.
- Use Git history for rollback, not manual file resets.

## Deferred Ideas

- engine switching in the lower-left floating control, if that control becomes part of the site chrome
- more advanced fields such as vortex, point gravity, and magnetic-style steering
- stronger visual integration between the gravity layer and the site background
