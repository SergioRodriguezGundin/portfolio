# 01: Design system foundation alongside current styles

**What to build:** The design system's tokens and component classes become available across the site without breaking anything that exists. A visitor already sees the new surface and typography: paper background, night text, Karla body copy and Audiowide available for headlines. The old neutral scale and shadcn variables stay in place for now (expand step), so every component still renders.

See the spec: `.scratch/design-system/spec.md` (Implementation Decisions: source of truth, token layer, Tailwind theme, component classes, typography).

**Blocked by:** None (can start immediately).

**Status:** ready-for-agent

- [ ] The design system's CSS custom properties (palette colours, tints, aliases, spacing, radii, shadows, font families) load before all other styles, as plain hex/px values.
- [ ] Tailwind offers utilities for the palette colours and aliases, spacing 1/2/4/6/12, radii none/button/sticker/round, shadows hard/hard-lift/none, families display/sans and the type-style font sizes, all pointing at the CSS variables.
- [ ] The design system's component classes (`sp-btn`, `sp-sticker`, `sp-tag`, `sp-card`, `sp-frame`, `sp-wipe-in`, `sp-breathe`, `sp-field`, `sp-label`, `sp-display`, type style classes) are available globally, without the Google Fonts import, and respect `prefers-reduced-motion`.
- [ ] Audiowide and Karla are self-hosted through fontsource. No request goes to Google Fonts.
- [ ] In the light theme the page body uses the paper surface, night text and Karla at the body style.
- [ ] Old colour variables and the old Tailwind colours still exist, so no component breaks.
- [ ] `pnpm build` passes, and the page renders in the browser with the new background and body font.
