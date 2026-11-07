# 02: Derived dark theme

**What to build:** A visitor who switches to the dark theme gets a night surface with paper text, chartreuse links, accents and focus rings, and hard shadows drawn in paper so card edges stay visible. Chartreuse and ultramarine cards and buttons keep their light-theme colours, and paper-variant cards become night cards with paper text. The theme toggle is a design-system button and keeps its current switching and persistence behaviour.

See the spec: `.scratch/design-system/spec.md` (Implementation Decisions: dark theme).

**Blocked by:** 01 (Design system foundation alongside current styles).

**Status:** ready-for-agent

- [ ] Under `[data-theme="dark"]` the aliases remap: surface → night, text → paper, link, accent and focus → chartreuse.
- [ ] `shadow-hard` and `shadow-hard-lift` use paper in the dark theme.
- [ ] Paper-variant cards and quiet buttons render as night with paper text in the dark theme. Chartreuse and ultramarine variants don't change.
- [ ] No text in the dark theme sits on a pair outside the approved list. In particular there's no ultramarine text on night.
- [ ] The theme toggle renders as an `sp-btn` with an `aria-label`. Its icon is a single palette colour, and it still switches and persists the theme as before.
- [ ] `pnpm build` passes, and both themes have been reviewed in the browser.
