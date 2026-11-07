# 07: Plain page background and wipe entrance

**What to build:** The page has a flat surface background with no particles. When it loads, the bento blocks wipe in from left to right with a 55ms stagger, the design system's entrance motion. A visitor who prefers reduced motion gets no entrance animation and no hover transitions.

See the spec: `.scratch/design-system/spec.md` (Implementation Decisions: magicui replacements, layout).

**Blocked by:** 01 (Design system foundation alongside current styles).

**Status:** ready-for-agent

- [ ] The particles background is no longer rendered on the page.
- [ ] The blur fade wrapper is replaced: each top-level grid block uses `sp-wipe-in` with `--i` set per block.
- [ ] The layout's existing mobile scroll reveal either follows the design system's motion (wipe, `cubic-bezier(.77,0,.18,1)`) or is removed. There is no opacity or translate fade.
- [ ] With `prefers-reduced-motion: reduce` there's no entrance animation and no hover transition.
- [ ] The bento grid structure and its breakpoints don't change, and grid gaps leave at least 5px clear for card shadows.
- [ ] `pnpm build` passes, and the entrance has been reviewed with and without reduced motion.
