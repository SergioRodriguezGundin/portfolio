# 03: Profile column in the design system

**What to build:** The profile column of the bento grid (personal information, experience, contact, curriculum, location) looks like design-system cards. Each block is an `sp-card` variant with square corners, no border, the hard shadow and the hover lift. The main call to action is the single primary button. Sergio's photo sits in a square frame with the hard shadow. The experience counts are large static numbers with a lowercase label below.

See the spec: `.scratch/design-system/spec.md` (Implementation Decisions: layout, magicui replacements, imagery, iconography).

**Blocked by:** 01 (Design system foundation alongside current styles).

**Status:** done

- [x] Contact, Curriculum and Location render as `sp-card` variants instead of the magic card, with no gradient spotlight.
- [x] The personal information call to action is `sp-btn sp-btn--primary` instead of the shiny button, and it's the only primary button in view.
- [x] Experience shows its numbers as static text (in the `h1` style rather than `display-l`, see comments) with a `label`-style caption. It no longer uses the number ticker.
- [x] Sergio's photo is in an `sp-frame` (square, hard shadow), with no dithering and no new asset.
- [x] Headlines use Audiowide in sentence case. Labels and metadata use the label style (lowercase).
- [x] UI icons in these blocks (download, contact icons, arrows) are a single palette colour that matches the approved pair for their background.
- [x] These blocks no longer reference the old `base-*` scale or rounded borders.
- [x] `astro check` passes (0 errors; `pnpm build` still hits the local Windows EPERM, see ticket 01), and the column has been reviewed in both themes and under 640px.

## Comments

**Implementation notes (ticket 03):**

- **Counters use `h1` (38px), not `display-l`.** At `display-l` with full card padding, the column overflowed the 1440×900 one-screen bento by 44px, clipping the location card. The other fixes were the experience card at `p-4`, a 12px gap between contact tiles and the location card at 80px tall. With all of them, the overflow is 0 and the shadow stays inside the viewport. Revisit when the bento is replaced.
- **Variants:** intro, curriculum and location are default cards (surface); experience is `--primary`; the three contact tiles are `--blue` with paper icons. There's no `--ink` card, which in dark would be night on night.
- **Intro:** the photo is a 112px `sp-frame` on paper-tint, top right next to the theme toggle. The gradient masks are gone.
- **Say hi:** "Say hi!" is now an `<a class="sp-btn sp-btn--primary">` with the same `mailto:` link the shiny button opened.
- **Curriculum:** the whole card is the download `<button>`, so there's no longer a button nested inside a card. The QR always sits on a paper square with night modules and an ultramarine centre, so it stays scannable in dark.
- **Location:** text sits on the card's surface and the map image is in the right half, so no text is on the image and there's no gradient mask. The dark theme still inverts the map. The pulsing dot is now a `--link` dot with `sp-breathe`, which is off under reduced motion.
- **Icons and focus:** LinkedIn, GitHub and Discord icons use `currentColor`. Contact tiles and the curriculum button get the same 2px `--link` focus outline as `sp-btn`.
- **Copy:** unchanged. Casing now comes from the type styles: `sp-label` lowercases labels, and "Software engineer" is now in sentence case in the markup.
