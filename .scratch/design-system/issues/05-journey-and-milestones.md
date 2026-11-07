# 05: Journey and milestones in the design system

**What to build:** A visitor reads Sergio's journey and each project's milestones as design-system cards, with project highlights as a static list they can read at their own pace instead of a marquee. Company brand colours only appear inside each company's own logo or icon, never as text or background, including where those colours come from the journey and project content.

See the spec: `.scratch/design-system/spec.md` (Implementation Decisions: layout, magicui replacements, third-party brand colours).

**Blocked by:** 01 (Design system foundation alongside current styles).

**Status:** done

- [x] Journey, Milestones and Milestone render with design-system cards, type styles and labels.
- [x] Project highlights render as a static list. The highlights marquee is no longer used.
- [x] Every text-colour, background or hover use of a third-party brand colour is replaced with palette colours. Brand colours remain only inside logos and icons.
- [x] All text in these blocks sits on an approved pair in both themes.
- [x] These blocks no longer reference the old `base-*` scale.
- [x] `astro check` passes (0 errors; `pnpm build` still hits the local Windows EPERM, see ticket 01), and the blocks have been reviewed in both themes and under 640px.

## Comments

**Implementation notes (ticket 05):**

- **Journey:** now an ordered list inside a default `sp-card` (surface). The current role is Audiowide `h3` with the company in bold. Past roles are body text with a line-through. The old scale-down and grey text are gone, because there's no grey in the palette. Periods use the label style. Company links get `--link` on hover and a 2px `--link` focus outline. To keep the 1440×900 bento on one screen, the card uses `p-4` and a 4px gap between rows. Without that it was 341px tall and pushed the page 20px.
- **Milestones:** the first milestone is an `sp-card--primary` with an Audiowide `h2` title and a static highlights list with square ultramarine bullets. The others are default `sp-card`s with the full title in bold body text, in sentence case. The old split-and-uppercase treatment is gone, and Audiowide `h3` was too wide for the 150px tiles.
- The React highlights marquee is deleted and replaced by a small Astro list component. That removes one more React island.
- **Brand colours:** neither component applies any. The journey content's `color` field and the milestones' `color` prop are unused. The prop is passed in from the project card, so dropping it belongs to ticket 06.
- The decorative milestone images (trophy, rocket…) stay at 10% opacity with empty `alt`, as the spec keeps existing assets. They are emoji-style art the design system would not use. Replace them when real assets exist.
- **Not part of this ticket:** on mobile the project slider uses the layout's `animation-timeline: view()` reveal, which ticket 07 owns.
