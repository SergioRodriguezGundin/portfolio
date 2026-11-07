# 06: Project sliders in the design system

**What to build:** A visitor browsing the project sliders sees each project as a design-system card in a palette variant, with tags for the stack and design-system slider markers. Each project's own brand colour appears only in its logo, no longer as a card background or text colour.

See the spec: `.scratch/design-system/spec.md` (Implementation Decisions: layout, third-party brand colours).

**Blocked by:** 01 (Design system foundation alongside current styles).

**Status:** done

- [x] The slider is one square, borderless frame with the hard shadow (see comments on why the slides themselves are not `sp-card`s).
- [x] The project header uses the label style for metadata. The title is the company logo plus screen-reader text, not Audiowide text, because the logo already names the project.
- [x] Stack entries render as `sp-tag`s or tech tiles consistent with ticket 04's look. Tech icons keep their original colours.
- [x] Slider markers use palette colours with a visible focus outline.
- [x] The project primary colour from content is used only inside the project's logo, never as a text or card background.
- [x] These components no longer reference the old `base-*` scale.
- [x] `astro check` passes (0 errors; `pnpm build` still hits the local Windows EPERM, see ticket 01), and the sliders have been reviewed in both themes and under 640px.

## Comments

**Implementation notes (ticket 06):**

- **Slider frame:** the slider is a single frame with the surface background and `shadow-hard`. The slides inside are full-bleed panes of that frame, not separate cards, because the scroll container clips its children and their shadows would be cut. A hover lift on a whole slide would also fight the scroll snapping. Milestone cards inside each slide carry the card look (ticket 05).
- **Header panel:** the project header is a solid surface panel with `p-4`, so the description never sits on the project photo. The photo keeps its scrim, which now fades to `--surface`, the one gradient the design system allows. Trade-off: the photo shows much less than before. Revisit with the colour-field layout.
- **Header type:** the logo now sits in an `h2` with the project title as screen-reader text. "Visit website" is a `sp-label` link with a `--link` hover and focus outline, and the external arrow uses `currentColor`. "Techs worked" uses the label style, and the stack shows as small paper `sp-tag`s, consistent with ticket 04, each named for screen readers.
- **Brand colours:** none were applied before or now. Company logos were monochrome in the old grey scale and now use `currentColor`. `project-primary` from content only reached the milestones, which ignored it, so the prop is removed from the project card, Milestones and Milestone. The content field stays in the schema.
- **Markers:** the bar is surface with `shadow-hard`, square, with no border. The active marker underline is `--link` (it was the mint primary). The blur and saturate hover glow and the scale are gone. Hover is now a 2px lift with the design-system easing, which is off under reduced motion. Markers and back-to-top get the `--link` focus outline, and back-to-top has an `aria-label`. The divider is `bg-text`.
- **Mouse-wheel hint:** recoloured to `--text`, and its animation uses the design-system easing with a clip wipe instead of an opacity fade. It's off under reduced motion.
- **Nx icon:** it was solid white and disappeared on the paper tiles, so it now uses its dark variant (night).
- I also removed the slider wrapper's `rounded-xl` in the page.
