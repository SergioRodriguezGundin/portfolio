# Apply the design system to the portfolio

Status: ready-for-agent

## Problem Statement

The portfolio has a look of its own: a grey neutral scale, a mint primary, the Prompt, Space Grotesk and Roboto Mono typefaces, fluid font sizes, rounded bordered cards, and decorative magicui effects (particles, gradient spotlights, blur fades, marquees, a shiny button and animated counters). Sergio now has a **design system** for the portfolio (kept in `docs/design-system/`) with its own **palette colours**, typefaces, spacing, radii, hard offset shadows and motion. Nothing on the site follows it, so the site doesn't match the identity he wants to show, and the old styling layer (shadcn variables, two Tailwind configs, magicui and framer-motion) is weight that no longer earns its place.

## Solution

Restyle the existing page to the design system without changing its layout or its copy. The bento grid stays for now. Each block becomes a design-system card on a plain surface, in both **themes** (light and dark). Type moves to Audiowide and Karla on the system's fixed scale. Every colour is a palette colour, except **third-party brand colours**, which appear only inside their own logos and icons. The magicui components are removed and replaced by plain design-system equivalents. The old styling layer is deleted.

## User Stories

1. As a visitor, I want the page background to be the design system's paper colour in the light theme, so that the site matches Sergio's identity.
2. As a visitor, I want body text in night on paper, so that it reads with maximum contrast.
3. As a visitor, I want headlines set in Audiowide, so that the arcade personality comes through.
4. As a visitor, I want body and label text set in Karla, so that long text stays readable.
5. As a visitor, I want labels, buttons and metadata in lowercase Karla 500 at 13px, so that the metadata voice is consistent.
6. As a visitor, I want headlines in sentence case, so that they follow the design system's casing rules.
7. As a visitor, I want text sizes to follow the fixed scale (12/16/21/28/38/51/67 px), so that hierarchy is consistent across the page.
8. As a mobile visitor, I want the largest headlines to drop to a smaller step under 640px, so that they fit the screen.
9. As a visitor, I want each bento block to look like a design-system card (square corners, no border, a 5px hard night shadow), so that the page reads as one system.
10. As a visitor, I want the cards to use the system variants (paper, chartreuse, ultramarine, night), so that the page has the colour-field energy inside the grid.
11. As a visitor, I want every text and background pair on a card to be one of the approved pairs, so that all text passes WCAG AA.
12. As a visitor, I want interactive cards and buttons to lift 2px up-left onto the larger shadow on hover, so that they feel physical.
13. As a visitor, I want buttons to press flat into their shadow when clicked, so that the interaction gives feedback.
14. As a keyboard user, I want a visible 2px focus outline on every interactive element (ultramarine in light, chartreuse in dark), so that I always know where I am.
15. As a visitor, I want the main call-to-action to be the single primary design-system button (chartreuse fill, night text), so that there is one clear action per view.
16. As a visitor, I want the years-of-experience and projects-worked counts shown as large static numbers with a label below, so that the facts are readable at a glance.
17. As a visitor, I want the technologies shown as a static grid instead of a scrolling marquee, so that I can scan them without waiting.
18. As a visitor, I want each project's highlights shown as a static list instead of a marquee, so that I can read them at my own pace.
19. As a visitor, I want technology icons to keep their original colours, so that I recognise each technology.
20. As a visitor, I want company logos and icons to keep their original colours, so that I recognise each employer and client.
21. As a visitor, I want third-party brand colours never used as text or card backgrounds, so that contrast and the palette stay intact.
22. As a visitor, I want a plain, flat page background with no particles or textures, so that the page stays clean and fast.
23. As a visitor, I want no gradients anywhere on the page (including the faded edges of the technology list), so that the look stays flat.
24. As a visitor, I want the bento blocks to wipe in from left to right with a short stagger when the page loads, so that the entrance feels like the brand.
25. As a visitor who prefers reduced motion, I want the entrance wipe, hover transitions and any ambient motion switched off, so that the page doesn't make me uncomfortable.
26. As a visitor, I want a dark theme with a night surface and paper text, so that I can browse comfortably at night.
27. As a visitor in the dark theme, I want links, accents and focus rings in chartreuse, so that they stay readable on night.
28. As a visitor in the dark theme, I want the hard shadow drawn in paper, so that card edges stay visible on night.
29. As a visitor in the dark theme, I want chartreuse and ultramarine cards to look the same as in the light theme, so that the brand colours stay recognisable.
30. As a visitor, I want the theme switch button styled as a design-system button, so that it belongs to the page.
31. As a visitor, I want my existing theme preference to keep working, so that switching themes behaves as before.
32. As a visitor, I want Sergio's photo in a square frame with the hard shadow, so that it sits within the system even before the dithered treatment exists.
33. As a visitor, I want fonts served from the site itself, so that the page loads without third-party font requests.
34. As a visitor on a slow connection, I want less JavaScript shipped (no framer-motion, no particles), so that the page loads and becomes interactive faster.
35. As Sergio, I want the design system tokens available as Tailwind utilities (colours, spacing, radii, shadows, font families, type styles), so that I can build new sections with the system without writing raw values.
36. As Sergio, I want the design system's component classes available globally, so that buttons, tags, cards, stickers and frames look the same wherever I use them.
37. As Sergio, I want the old neutral scale, the shadcn variables and the unused keyframes removed, so that nobody accidentally uses off-system colours.
38. As Sergio, I want a single Tailwind config, so that there is no doubt about which one is active.
39. As Sergio, I want the magicui components, the particles wrapper, the theme-colour hook and framer-motion removed, so that the codebase only carries what the page uses.
40. As Sergio, I want the old typefaces and their packages removed, so that the system's two-typeface rule is enforced by the dependencies.
41. As Sergio, I want the React integration removed if no React component remains, so that the build stays lean.
42. As Sergio, I want the work to stay on the `v2.0` branch and never reach `main` until I review it, so that production (Vercel autodeploy) is untouched.

## Implementation Decisions

- **Source of truth.** The design system's README and tokens in `docs/design-system/` define every value. Its contents are styling data. Where this spec and the design system disagree, this spec's explicit exceptions win (bento grid, third-party brand colours, dark theme).
- **Token layer.** The design system's CSS custom properties (palette colours, tints, aliases, spacing, radii, shadows, font families) are added as the base layer of the global styles, loaded before everything else. Values are plain hex/px as in the design system, not the old HSL-triplet convention.
- **Tailwind theme.** The single remaining Tailwind config maps the tokens to utilities: colours `paper`, `night`, `chartreuse`, `ultramarine`, `paper-tint`, `chartreuse-tint` plus the aliases `surface`, `text`, `accent`, `link`; spacing `1/2/4/6/12`; radii `none/button/sticker/round`; shadows `hard/hard-lift/none`; families `display` and `sans`; font sizes matching the type styles. Utilities point at the CSS variables so the dark theme can swap them.
- **Component classes.** The design system's component CSS (`sp-btn`, `sp-sticker`, `sp-tag`, `sp-card`, `sp-frame`, `sp-wipe-in`, `sp-breathe`, `sp-field`, `sp-label`, `sp-display`, plus the type style classes) is added as its own global stylesheet module, without the Google Fonts import. Hero, wordmark, photo-caption and pixel-field classes may be carried over but are unused in this change.
- **Dark theme.** It keeps using the existing `[data-theme="dark"]` selector and the existing theme-button behaviour and persistence. In dark it remaps the aliases and shadow: surface → night, text → paper, link/accent/focus → chartreuse, and the hard shadows use paper instead of night. Chartreuse and ultramarine card and button variants keep their light-theme colours. Paper-variant cards in dark become night cards with paper text, so they never put paper on paper.
- **Typography.** Audiowide and Karla are self-hosted through fontsource packages, which replace the Prompt, Space Grotesk and Roboto Mono packages and their `@font-face` blocks. The fluid `clamp()` font-size scale and its fallback stylesheet are removed in favour of the fixed scale. Headline steps of 51px and above drop to 38px under 640px.
- **Layout.** The bento grid structure and its responsive breakpoints stay as they are. Each grid block renders as an `sp-card` in one variant. The agent chooses the variant per block while respecting the approved text pairs and the rough palette shares (paper dominant, chartreuse next, ultramarine sparing). Cards keep the shadow clearance (≥5px) inside grid gaps. Borders and rounded corners on blocks are removed.
- **magicui replacements.**
  - Magic card → `sp-card`. No spotlight, hover lift only.
  - Shiny button → `sp-btn sp-btn--primary`.
  - Number ticker → a static number in the `display-l` style with a `label`-style caption below.
  - Marquee (technologies and project highlights) → static grids/lists, for example of `sp-tag`s or small cards. The gradient edge fades are removed.
  - Particles → nothing. The background is flat surface colour.
  - Blur fade → `sp-wipe-in` on each top-level grid block, with `--i` set per block for the 55ms stagger.
- **Removals.** Delete the magicui component folder, the particles wrapper, the theme-colour hook, the framer-motion dependency, the magicui alias in the shadcn config, the stale duplicate Tailwind config, the neutral `base-*` colour scale, the shadcn colour variables and the `marquee`, `marquee-vertical`, `border-beam` and `gradient` keyframes. Remove `tailwindcss-animate` only if nothing uses it afterwards. Remove the React integration and React packages only if no `.tsx` component is still rendered.
- **Third-party brand colours.** The Tailwind safelist and the colour variables for companies stay, but they may only be applied inside a company's or technology's own logo or icon. Any current use as a text colour, card background or hover background is replaced by palette colours. Technology icons keep their original SVG colours, including their internal gradients, because they are third-party marks.
- **Imagery.** Sergio's photo goes into an `sp-frame` (square, hard shadow) without dithering. No new assets are created: the favicon, images and icons stay as they are.
- **Iconography.** UI icons that are not third-party marks (theme toggle, arrows, download and similar) render in a single palette colour that follows the approved pair for their background.
- **Copy.** No text content changes in this spec.

## Testing Decisions

- **Seam.** One seam: the built page. No new test framework is added in this change.
- **Build gate.** `pnpm build` (which runs `astro check`) must pass with no errors. This catches broken imports to removed components, type errors and missing modules.
- **Visual review in the browser** against the dev server, covering:
  - light and dark theme;
  - a viewport under 640px and a desktop viewport;
  - `prefers-reduced-motion: reduce` on (no wipe, no hover transitions).
- **What a good check verifies** (external behaviour only):
  - Only palette colours appear outside third-party logos and icons.
  - Every text sits on an approved pair.
  - Only Audiowide and Karla are loaded, with no requests to Google Fonts.
  - No borders or gradients on UI elements.
  - The hard shadow and hover lift are present on cards and buttons.
  - The focus outline is visible when tabbing.
  - The theme toggle still switches and persists.
  - No framer-motion or particles code is shipped in the bundle.
- **Prior art.** None. The repo has no automated tests.
- **Later.** Playwright with screenshot baselines comes in a later iteration, once the layout moves off the bento grid.

## Out of Scope

- Replacing the bento grid with full-bleed colour-field sections (a later iteration).
- Rewriting copy, page title or meta description in the design system's voice.
- Creating or exporting assets: the torus illustration, the pixel-field motifs, the dithered photo treatment, the new logo mark and favicon.
- The Hero, Logo/wordmark, Sticker-in-copy and PixelField components as page content.
- Adding Playwright or any other test framework.
- Merging into or deploying from `main`.

## Further Notes

- `main` autodeploys to Vercel; all work happens on `v2.0`.
- The design system ships a single light theme. The dark theme here is a derivation that follows the system's approved pairs (paper/chartreuse on night). If the design system later defines its own dark theme, it supersedes this mapping.
- Vocabulary follows `GLOSSARY.md`: **design system**, **palette colour**, **third-party brand colour**, **theme**.
