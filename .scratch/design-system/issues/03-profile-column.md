# 03: Profile column in the design system

**What to build:** The profile column of the bento grid (personal information, experience, contact, curriculum, location) looks like design-system cards. Each block is an `sp-card` variant with square corners, no border, the hard shadow and the hover lift. The main call to action is the single primary button. Sergio's photo sits in a square frame with the hard shadow. The experience counts are large static numbers with a lowercase label below.

See the spec: `.scratch/design-system/spec.md` (Implementation Decisions: layout, magicui replacements, imagery, iconography).

**Blocked by:** 01 (Design system foundation alongside current styles).

**Status:** ready-for-agent

- [ ] Contact, Curriculum and Location render as `sp-card` variants instead of the magic card, with no gradient spotlight.
- [ ] The personal information call to action is `sp-btn sp-btn--primary` instead of the shiny button, and it's the only primary button in view.
- [ ] Experience shows its numbers as static text in the `display-l` style with a `label`-style caption. It no longer uses the number ticker.
- [ ] Sergio's photo is in an `sp-frame` (square, hard shadow), with no dithering and no new asset.
- [ ] Headlines use Audiowide in sentence case. Labels and metadata use the label style (lowercase).
- [ ] UI icons in these blocks (download, contact icons, arrows) are a single palette colour that matches the approved pair for their background.
- [ ] These blocks no longer reference the old `base-*` scale or rounded borders.
- [ ] `pnpm build` passes, and the column has been reviewed in both themes and under 640px.
