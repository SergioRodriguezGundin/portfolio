# 01: Design system foundation alongside current styles

**What to build:** The design system's tokens and component classes become available across the site without breaking anything that exists. A visitor already sees the new surface and typography: paper background, night text, Karla body copy and Audiowide available for headlines. The old neutral scale and shadcn variables stay in place for now (expand step), so every component still renders.

See the spec: `.scratch/design-system/spec.md` (Implementation Decisions: source of truth, token layer, Tailwind theme, component classes, typography).

**Blocked by:** None (can start immediately).

**Status:** done

- [x] The design system's CSS custom properties (palette colours, tints, aliases, spacing, radii, shadows, font families) load before all other styles, as plain hex/px values.
- [x] Tailwind offers utilities for the palette colours and aliases, spacing 1/2/4/6/12, radii none/button/sticker/round, shadows hard/hard-lift/none, families display/sans and the type-style font sizes, all pointing at the CSS variables.
- [x] The design system's component classes (`sp-btn`, `sp-sticker`, `sp-tag`, `sp-card`, `sp-frame`, `sp-wipe-in`, `sp-breathe`, `sp-field`, `sp-label`, `sp-display`, type style classes) are available globally, without the Google Fonts import, and respect `prefers-reduced-motion`.
- [x] Audiowide and Karla are self-hosted through fontsource. No request goes to Google Fonts.
- [x] In the light theme the page body uses the paper surface, night text and Karla at the body style.
- [x] Old colour variables and the old Tailwind colours still exist, so no component breaks.
- [ ] `pnpm build` passes (blocked by pnpm build-script approval, see comments); the page renders in the browser with the new background and body font.

## Comments

**Implementation notes (ticket 01):**

- Type-style font sizes are fixed px values in the Tailwind theme (`text-display-xl` … `text-label`). The design system defines no size variables, and the names `--font-size-*` are still taken by the legacy fluid scale until ticket 08. Lowercase labels need the `sp-label` / `label` class, because Tailwind font sizes can't set `text-transform`.
- `--font-sans` lists `'Karla Variable'` first, because that's the family name fontsource's variable Karla registers.
- A temporary `[data-theme='dark']` block in the tokens stylesheet keeps the old dark surface until ticket 02 remaps the aliases.
- Karla 16px / 1.48 on the body makes the bento 7px taller than the viewport at 1440×900. With `overflow: hidden` on the body, that bottom strip is clipped. Tickets 03–07 rework these blocks; recheck it there.
- `pnpm build` currently stops before building: pnpm 11 refuses to run because the `esbuild` and `sharp` build scripts haven't been approved (`pnpm approve-builds`). `astro check` reports 0 errors. `astro build` compiles, then fails in the Vercel adapter with a Windows symlink EPERM; that part is environmental and unrelated to this change.
