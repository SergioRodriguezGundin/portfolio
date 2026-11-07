# 08: Remove the old styling layer and do a full review

**What to build:** Only the design system remains in the codebase (contract step). The magicui components, framer-motion, the particles wrapper and theme-colour hook, the old colour scale and shadcn variables, the unused keyframes, the duplicate Tailwind config, the old typefaces and the fluid font scale are all gone. Then the whole page gets one full review against the spec.

See the spec: `.scratch/design-system/spec.md` (Implementation Decisions: removals; Testing Decisions).

**Blocked by:** 02 (Derived dark theme), 03 (Profile column), 04 (Technologies as a static grid), 05 (Journey and milestones), 06 (Project sliders), 07 (Plain page background and wipe entrance).

**Status:** ready-for-agent

- [ ] The magicui component folder, the particles wrapper, the theme-colour hook and the framer-motion dependency are removed, along with the magicui alias in the shadcn config.
- [ ] The `base-*` colour scale, the shadcn colour variables and the `marquee`, `marquee-vertical`, `border-beam` and `gradient` keyframes are removed from styles and the Tailwind config.
- [ ] Only one Tailwind config remains.
- [ ] The Prompt, Space Grotesk and Roboto Mono packages, their `@font-face` blocks and the fluid `clamp()` font-size scale are removed.
- [ ] `tailwindcss-animate` is removed if nothing uses it. React and its integration are removed if no `.tsx` component is still rendered.
- [ ] The third-party brand colour variables and safelist remain, used only by logos and icons.
- [ ] `pnpm build` passes with no errors.
- [ ] The full page has been reviewed in light and dark theme, on desktop and under 640px, and with reduced motion. Only palette colours appear outside third-party marks, every text sits on an approved pair, only Audiowide and Karla load, there are no UI borders or gradients, the hard shadow and hover lift work, the focus outline is visible, and the theme toggle persists.
