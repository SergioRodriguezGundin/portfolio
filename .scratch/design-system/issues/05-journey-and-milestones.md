# 05: Journey and milestones in the design system

**What to build:** A visitor reads Sergio's journey and each project's milestones as design-system cards, with project highlights as a static list they can read at their own pace instead of a marquee. Company brand colours only appear inside each company's own logo or icon, never as text or background, including where those colours come from the journey and project content.

See the spec: `.scratch/design-system/spec.md` (Implementation Decisions: layout, magicui replacements, third-party brand colours).

**Blocked by:** 01 (Design system foundation alongside current styles).

**Status:** ready-for-agent

- [ ] Journey, Milestones and Milestone render with design-system cards, type styles and labels.
- [ ] Project highlights render as a static list. The highlights marquee is no longer used.
- [ ] Every text-colour, background or hover use of a third-party brand colour is replaced with palette colours. Brand colours remain only inside logos and icons.
- [ ] All text in these blocks sits on an approved pair in both themes.
- [ ] These blocks no longer reference the old `base-*` scale.
- [ ] `pnpm build` passes, and the blocks have been reviewed in both themes and under 640px.
