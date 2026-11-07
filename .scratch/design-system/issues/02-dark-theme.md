# 02: Derived dark theme

**What to build:** A visitor who switches to the dark theme gets a night surface with paper text, chartreuse links, accents and focus rings, and hard shadows drawn in paper so card edges stay visible. Chartreuse and ultramarine cards and buttons keep their light-theme colours, and paper-variant cards become night cards with paper text. The theme toggle is a design-system button and keeps its current switching and persistence behaviour.

See the spec: `.scratch/design-system/spec.md` (Implementation Decisions: dark theme).

**Blocked by:** 01 (Design system foundation alongside current styles).

**Status:** done

- [x] Under `[data-theme="dark"]` the aliases remap: surface → night, text → paper, link, accent and focus → chartreuse.
- [x] `shadow-hard` and `shadow-hard-lift` use paper in the dark theme.
- [x] Paper-variant cards and quiet buttons render as night with paper text in the dark theme. Chartreuse and ultramarine variants don't change.
- [x] No text in the dark theme sits on a pair outside the approved list. In particular there's no ultramarine text on night.
- [x] The theme toggle renders as an `sp-btn` with an `aria-label`. Its icon is a single palette colour, and it still switches and persists the theme as before.
- [x] `astro check` passes (0 errors), and both themes have been reviewed in the browser. `pnpm build` still stops at the Windows symlink EPERM in the Vercel adapter (see ticket 01).

## Comments

**Implementation notes (ticket 02):**

- The dark block in the tokens stylesheet remaps `--surface`, `--text`, `--accent`, `--link` and both hard shadows. The temporary bridge from ticket 01 is gone.
- The paper-coloured defaults in the component classes (body, `sp-btn--quiet`, `sp-tag`, `sp-card`, `sp-wordmark--paper`, `sp-field--paper` and its accent) and the button focus ring now read the aliases instead of fixed paper/night/ultramarine. `sp-tag--primary` sets night text explicitly so it never inherits paper. Coloured variants keep their fixed pairs.
- `sp-card--ink` in dark is night on night. Only the paper shadow marks its edge. Prefer the other variants for blocks on the dark surface.
- I verified in the browser with transitions disabled. The pane was hidden, which pauses transitions and the framer-motion entrance, so measurements and screenshots without that are misleading.
- On Windows the dev server's file watcher missed edits made through the shell. Restart it if the page doesn't update.
