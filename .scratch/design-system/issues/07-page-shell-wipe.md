# 07: Plain page background and wipe entrance

**What to build:** The page has a flat surface background with no particles. When it loads, the bento blocks wipe in from left to right with a 55ms stagger, the design system's entrance motion. A visitor who prefers reduced motion gets no entrance animation and no hover transitions.

See the spec: `.scratch/design-system/spec.md` (Implementation Decisions: magicui replacements, layout).

**Blocked by:** 01 (Design system foundation alongside current styles).

**Status:** done

- [x] The particles background is no longer rendered on the page.
- [x] The blur fade wrapper is replaced: each top-level grid block uses `sp-wipe-in` with `--i` set per block.
- [x] The layout's existing mobile scroll reveal either follows the design system's motion (wipe, `cubic-bezier(.77,0,.18,1)`) or is removed. There is no opacity or translate fade.
- [x] With `prefers-reduced-motion: reduce` there's no entrance animation and no hover transition.
- [x] The bento grid structure and its breakpoints don't change, and grid gaps leave at least 5px clear for card shadows.
- [x] `astro check` passes (0 errors; `pnpm build` still hits the local Windows EPERM, see ticket 01), and the entrance has been reviewed in the browser. Reduced motion was only checked by confirming the CSS rules exist; it was not emulated.

## Comments

**Implementation notes (ticket 07):**

- The page no longer renders the particles background or the blur-fade wrapper. The page now has no React islands at all, which unblocks removing React in ticket 08. The particles and blur-fade source files are still in the repo; ticket 08 deletes them.
- The five grid blocks carry `sp-wipe-in` with `--i` 0–4. Verified in the browser: 900ms, `cubic-bezier(.77,0,.18,1)`, delays 0/55/110/165/220ms.
- **Change to the design-system component CSS:** `sp-wipe-in` now uses `animation-fill-mode: backwards` instead of `both`. With `both`, the final `clip-path: inset(0)` stays on the element and permanently clips the 5px hard shadows of everything inside, and on the element itself. The end state is visually the same, with no clip. Worth reporting upstream to the design system.
- The mobile `animation-timeline: view()` reveal (an opacity and translate fade on the project slider) is removed. On mobile the slider wipes in like the other blocks.
- Reduced motion turns off the wipe, the breathe loop and the card, button, tag and frame transitions through the design system's own media query. Markers and the mouse-wheel hint do the same from ticket 06. I confirmed these rules are present, but couldn't emulate `prefers-reduced-motion` in the pane.
- While the pane is hidden, the browser holds animations at frame 0, so the page looks empty until it's visible. Normal browsers resume animations in visible tabs. To check the end state, I ran the animations to completion: no lingering clip, shadows intact, no overflow at 1440×900.
