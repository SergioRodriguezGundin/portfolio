# 08: Remove the old styling layer and do a full review

**What to build:** Only the design system remains in the codebase (contract step). The magicui components, framer-motion, the particles wrapper and theme-colour hook, the old colour scale and shadcn variables, the unused keyframes, the duplicate Tailwind config, the old typefaces and the fluid font scale are all gone. Then the whole page gets one full review against the spec.

See the spec: `.scratch/design-system/spec.md` (Implementation Decisions: removals; Testing Decisions).

**Blocked by:** 02 (Derived dark theme), 03 (Profile column), 04 (Technologies as a static grid), 05 (Journey and milestones), 06 (Project sliders), 07 (Plain page background and wipe entrance).

**Status:** done

- [x] The magicui component folder, the particles wrapper, the theme-colour hook and the framer-motion dependency are removed. The whole shadcn config is removed, not just its magicui alias; see comments.
- [x] The `base-*` colour scale, the shadcn colour variables and the `marquee`, `marquee-vertical`, `border-beam` and `gradient` keyframes are removed from styles and the Tailwind config.
- [x] Only one Tailwind config remains.
- [x] The Prompt, Space Grotesk and Roboto Mono packages, their `@font-face` blocks and the fluid `clamp()` font-size scale are removed.
- [x] `tailwindcss-animate` is removed if nothing uses it. React and its integration are removed if no `.tsx` component is still rendered.
- [x] The third-party brand colour variables and safelist remain, used only by logos and icons.
- [x] `pnpm build` passes with no errors.
- [x] The full page has been reviewed in light and dark theme, on desktop and under 640px. Reduced motion was not emulated; see comments. Only palette colours appear outside third-party marks, every text sits on an approved pair, only Audiowide and Karla load, there are no UI borders or gradients, the hard shadow and hover lift work, the focus outline is visible, and the theme toggle persists.

## Comments

**Implementation notes (ticket 08):**

- **Removed files:** the magicui components, the particles wrapper, the theme-colour hook, the `cn` helper and its `clsx`/`tailwind-merge`/`class-variance-authority` packages, the duplicate Tailwind config, the legacy font stylesheets, the unused `Download` icon and the whole shadcn `components.json`. shadcn generates React components, so it can't work now that React is gone. Its `utils` alias would also have pointed at a deleted file.
- **React:** removed completely: `@astrojs/react`, `react`, `react-dom`, their types and `lucide-react`, plus the Astro integration and the `jsx` options in tsconfig. The `@lib` and `@hooks` path aliases are gone too, because their folders no longer exist.
- **Styles:** `globals.css` now only imports tokens, reset and the design system, plus the third-party brand colour variables. The shadcn `* { border-color }` rule is gone. The Tailwind config keeps only the design-system theme, the brand colours and the safelist. `tailwindcss-animate` is removed, because nothing used it.
- **Fonts:** removed Prompt, Roboto Mono and Space Grotesk, and the `clamp()` font-size scale. The root size is now the browser's 16px.
- **Stray legacy references fixed:**
  - Text selection was pointing at undefined variables; it's now chartreuse on night.
  - The unused `.divider` is removed.
  - `theme-color` was `hsl(var(--primary))`, which never works in a meta tag. It's now paper or night, by colour scheme.
  - The web manifest and `browserconfig.xml` colours are now paper and night.
- **`pnpm build` now passes end to end on Windows (exit 0).** The earlier Vercel-adapter EPERM came from symlinking `tailwind-merge` into the function bundle, and that package is gone.

**Full review, in the browser with an automated audit plus screenshots:**

- **1440×900, light and dark:**
  - Text and backgrounds: every rendered text and background colour is a palette colour. Every text sits on an approved pair. The only gradient is the project photo scrim.
  - Borders: none are visible. The only borders are the transparent marker underlines.
  - Fonts: only Audiowide and Karla load, with no Google Fonts requests.
  - Scripts and overflow: no framer-motion or particles scripts are shipped, and there's no overflow.
  - Fixed during the review: tech tiles now force night text, because their screen-reader text was paper on paper in dark.
- **375×812:** no horizontal overflow and no clipped blocks.
- **1280×800:** the one-screen bento overflows by 84px, clipping the bottom of the profile column. The pre-redesign site (commit 3d26b3f) overflows by 116px at the same size, so this isn't a regression, but it's still clipped. Replacing the bento in a later iteration fixes it.
- **Theme toggle:** switches and persists (verified in tickets 02–08). The hard shadow and hover lift are present, and the focus outlines use `--link`.
- **Not verified:** `prefers-reduced-motion` couldn't be emulated in the pane. The rules exist (see ticket 07). The page was never seen animating live, because the hidden pane holds animations at frame 0.
