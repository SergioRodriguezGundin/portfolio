# 06: Project sliders in the design system

**What to build:** A visitor browsing the project sliders sees each project as a design-system card in a palette variant, with tags for the stack and design-system slider markers. Each project's own brand colour appears only in its logo, no longer as a card background or text colour.

See the spec: `.scratch/design-system/spec.md` (Implementation Decisions: layout, third-party brand colours).

**Blocked by:** 01 (Design system foundation alongside current styles).

**Status:** ready-for-agent

- [ ] Project cards are `sp-card` variants with square corners, no border, the hard shadow and the hover lift.
- [ ] The project header uses Audiowide for the title and the label style for metadata.
- [ ] Stack entries render as `sp-tag`s or tech tiles consistent with ticket 04's look. Tech icons keep their original colours.
- [ ] Slider markers use palette colours with a visible focus outline.
- [ ] The project primary colour from content is used only inside the project's logo, never as a text or card background.
- [ ] These components no longer reference the old `base-*` scale.
- [ ] `pnpm build` passes, and the sliders have been reviewed in both themes and under 640px.
