# 04: Technologies as a static grid

**What to build:** A visitor sees the technologies as a static, scannable grid instead of two scrolling marquees, with no gradient edge fades. Each technology icon keeps its original colours, because it's a third-party brand mark. The surrounding block and the tech tiles follow the design system (square, no border, hard shadow).

See the spec: `.scratch/design-system/spec.md` (Implementation Decisions: magicui replacements, third-party brand colours).

**Blocked by:** 01 (Design system foundation alongside current styles).

**Status:** done

- [x] Techs no longer uses the marquee. All technologies show in a static grid that fits the block's column width, including the 350px mobile column.
- [x] The gradient edge fades are gone.
- [x] Tech icons keep their original SVG colours, including internal gradients. Tile backgrounds and any tech names use palette colours and approved pairs only.
- [x] Tiles use the design system's square, borderless, hard-shadow look, for example as `sp-tag` or small `sp-card`s.
- [x] `astro check` passes (0 errors; `pnpm build` still hits the local Windows EPERM, see ticket 01), and the block has been reviewed in both themes.

## Comments

**Implementation notes (ticket 04):**

- The block is an `sp-card--blue` holding a 4×2 list of tiles. It fills the grid cell (390×311 on desktop, 350px wide on mobile), so the unused `containerWidth` prop and its dynamic Tailwind width class are gone.
- Tiles are `sp-tag`s forced to paper in both themes, because tech icons keep their own brand colours (Next.js and Three.js are black) and need a light ground. Each tile has a `title` and screen-reader text with the tech name.
- The tile restyle lives in the shared tech card component, which only Techs uses. The project sliders render tech icons through a different component (ticket 06).
