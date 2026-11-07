# 04: Technologies as a static grid

**What to build:** A visitor sees the technologies as a static, scannable grid instead of two scrolling marquees, with no gradient edge fades. Each technology icon keeps its original colours, because it's a third-party brand mark. The surrounding block and the tech tiles follow the design system (square, no border, hard shadow).

See the spec: `.scratch/design-system/spec.md` (Implementation Decisions: magicui replacements, third-party brand colours).

**Blocked by:** 01 (Design system foundation alongside current styles).

**Status:** ready-for-agent

- [ ] Techs no longer uses the marquee. All technologies show in a static grid that fits the block's column width, including the 350px mobile column.
- [ ] The gradient edge fades are gone.
- [ ] Tech icons keep their original SVG colours, including internal gradients. Tile backgrounds and any tech names use palette colours and approved pairs only.
- [ ] Tiles use the design system's square, borderless, hard-shadow look, for example as `sp-tag` or small `sp-card`s.
- [ ] `pnpm build` passes, and the block has been reviewed in both themes.
