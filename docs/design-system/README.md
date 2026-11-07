# Sergio Portfolio

A y2k arcade design system for Sergio's portfolio: chrome dreams and neon. A bold colour-field look: whole sections flooded in Chartreuse or Ultramarine, two complementary hues, with Paper and Night as the neutrals. Square panels, softly rounded buttons, no borders, hard offset shadows, and one tilted sticker when a word needs to pop.

## Content fundamentals

- **Voice:** electric, weird, nostalgic, online. It sounds like someone who learned to code on a CRT and still keeps the save files: quick, a bit strange, warm about old games and old web, fluent in the stack.
- **Not:** grown-up, boring or offline. No corporate filler ("innovative solutions", "passionate about"), no apologetic hedging, no long throat-clearing intros.
- **Say it like this:** "Built after midnight." · "Save point: Supabase." · "This battle pass has more states than my router." · "Continue? Y/N" · "Last seen online: just now."
- **Not like this:** "Experienced engineer delivering robust solutions." · "Welcome to my portfolio." · "Feel free to reach out."
- **Words to lean on:** real tech nouns (Supabase RPCs, NgRx Signals, PL/pgSQL), arcade verbs (press start, load level, respawn, save), web-1.0 nods (guestbook, under construction, hit counter) used sparingly.
- **Case:** headlines and the wordmark in sentence case ("Selected work", not "SELECTED WORK"). Labels, buttons and metadata all lowercase via the `label` style ("view projects").
- **Length:** a headline is one idea, ideally under six words. Body paragraphs stay under four lines on desktop.
- **Emphasis:** one Sticker per block of text, never two in a sentence.

## Visual foundations

### Colour

Four colours and their tints, nothing else. Palette logic: complementary, two opposite hues on the colour wheel. Target shares of a layout:

| Token | Hex | Share | Role |
| --- | --- | --- | --- |
| `paper` | #EEF1E9 | ~44% | Main background |
| `night` | #010300 | ~22% | Text, dark blocks, the hard shadow |
| `chartreuse` | #98ED31 | ~22% | Buttons, key shapes, big colour blocks |
| `ultramarine` | #0910EC | ~11% | Supporting blocks, cards, illustrations |

**Approved text pairs** (either way round, pass WCAG AA at any size):

- Night on Paper, 18.1:1
- Chartreuse on Night, 14.3:1
- Ultramarine on Paper, 8.0:1
- Ultramarine on Chartreuse, 6.3:1

**Colour fields.** Pages are built from full-bleed sections, not cards floating on a neutral page. Lead with a Chartreuse field (night text, ultramarine accents), follow with Paper, and use an Ultramarine field (paper text, chartreuse accents) once per page for the loudest moment; a Night field closes the page (paper text, chartreuse accents). Over a page Paper still carries about half the area. Use `sp-field--primary|blue|ink|paper`; inside a field, `.sp-accent` picks its approved accent colour.

Every other pairing (for example Ultramarine with Night, or Chartreuse with Paper) is decorative only: never put text on it. Tints (`paper-tint`, `chartreuse-tint`) are for quiet backgrounds and carry night text only. Focus is a 2px ultramarine outline.

### Typography

Two typefaces, both on Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
```

- **Headlines — Audiowide** (`--font-display`), 400, letter-spacing -0.031em, line-height 1.02. Sentence case.
- **Body — Karla** (`--font-sans`), 400 and 700, 16px base, line-height 1.48, letter-spacing -0.002em.
- **Labels — Karla 500**, all lowercase, letter-spacing 0.007em, 13px (about 0.84× body). Buttons, tags, metadata.
- **Scale** (ratio 1.333): 12 / 16 / 21 / 28 / 38 / 51 / 67 px, as the type styles `body`, `h3`/`body-l`, `h2`, `h1`, `display-l`, `display-xl`; labels sit at 13px between the two smallest steps.

### Shape and surface

- `radius-none` (0px) on cards, panels, tags and image frames. Buttons and inputs are softly rounded (`radius-button`, 8px). Stickers use `radius-sticker`.
- **No borders.** Edges come from the hard offset shadow: `shadow-hard`, 5px down and right, solid night, no blur. On hover an item moves 2px up-left onto `shadow-hard-lift` (7px); pressed and disabled sit flat.
- Clean, flat colour: no texture, no gradients (except a photo scrim, below).
- Spacing: `space-1` 4, `space-2` 8, `space-4` 16, `space-6` 24, `space-12` 48. Mobile gutter `space-4`. Leave 5px clear beyond shadowed items.

### Graphic motif

Random square pixel blocks in palette colours, denser toward the bottom, on an 8px pitch: chartreuse, ultramarine and night on paper, or ultramarine and night on chartreuse (`pixel-field-paper.svg`, `pixel-field-primary.svg`). Use it for backgrounds, poster fills, card backs and section dividers. Keep text off the busy area.

### Photography

- 1-bit Atkinson dither in Ultramarine #0910EC and Paper #EEF1E9, in square frames (`sp-frame`, with the hard shadow). `photo-dither-sample.png` (Illustrations) shows the treatment on a generated still life; see the Imagery component.
- Text on a photo uses Paper or Night type over a gradient scrim of the opposite neutral, just strong enough for 4.5:1 against the pixels behind it.

### 3D

A torus (ring doughnut), shaded only with palette colours from dark to light (night → ultramarine → chartreuse → paper), rendered pixelated and dithered to match the photos: `torus.png` in the Illustrations group, a 4-tone Atkinson dither on a transparent ground.

### Motion

- **Style:** wipe. **Easing:** `cubic-bezier(.77,0,.18,1)`. **Duration:** 900ms, 55ms stagger between items.
- **Entrance:** a wipe in from left to right (`sp-wipe-in`; set `--i` on each item for the stagger).
- **Ambient:** slow, gentle breathing on logos and motifs, a little scale and slight rotation (`sp-breathe`).
- **Hover:** a 2px lift with the same easing, onto the larger hard shadow.
- Respect `prefers-reduced-motion`: all of the above switch off.

## Logo

Wordmark-led: the name "Sergio Portfolio" alone, in Audiowide with the headline settings. Three versions: on Paper (night), reversed on Night (chartreuse), and on Chartreuse (ultramarine). The mark, four quarter-circles in a 2×2 grid, each turned a different way, flat, in one or two palette colours, is used separately as an icon, never locked up beside the name; it is the app icon and favicon. SVG sources are below under *Logo files*.

## Iconography

No icon set yet. Where an icon is needed, draw it from simple geometric shapes with square corners, in a single palette colour that follows the approved text pairs for its background. No emoji in UI.

## Components

`Logo`, `Button`, `Sticker`, `Tag`, `Card`, `Hero`, `Imagery` and `PixelField` are CSS-only components, with `sp-field` for colour-field sections. Copy *CSS variables* and *Component CSS* below into the project (variables first) and use the `sp-*` classes as each component's guidelines describe.

## Rules

- At most two typefaces: Audiowide and Karla.
- Palette colours and their tints only.
- Every text and background pair comes from the approved list above.

---

## Component guidelines

### Logo

Wordmark-led: the name "Sergio Portfolio" alone, set in Audiowide; the mark (four quarter-circles in a 2×2 grid, each turned a different way) is used separately, as an icon.

- Wordmark: `<span class="sp-wordmark sp-wordmark--paper|ink|primary">Sergio Portfolio</span>`. Headline settings: Audiowide 400, letter-spacing -0.031em, line-height 1.02.
- Three versions only: on Paper (night wordmark), reversed on Night (chartreuse wordmark), on Chartreuse (ultramarine wordmark).
- The mark never sits in a lockup beside the name. Use it alone: app icon, favicon, avatar, a sign-off. Files are in the Logos asset group; `sp-mark` sizes it, `sp-breathe` gives it the ambient loop.
- Clear space around the wordmark is at least `space-4`. Never recolour outside the palette, add gradients, or stretch or re-turn the quarter-circles.
### Button

Softly rounded actions (`radius-button`) with no border and a hard offset shadow, labelled in Karla 500, all lowercase.

- `sp-btn sp-btn--primary`: chartreuse fill, night text (14.3:1). One per view.
- `sp-btn--secondary`: ultramarine fill, paper text (8.0:1).
- `sp-btn--ink`: night fill, chartreuse text (14.3:1).
- `sp-btn--quiet`: paper fill, night text (18.1:1); the shadow gives it its edge.
- Rest on `shadow-hard`; hover moves up-left 2px to `shadow-hard-lift` with `cubic-bezier(.77,0,.18,1)` over 900ms; pressed drops into the shadow (`shadow-none`); disabled is flat `paper-tint`.
- Focus shows a 2px ultramarine outline. Icon-only buttons need an `aria-label`.
### Sticker

The emphasis style: one word or short phrase on a rounded sticker, tilted −3°.

- `sp-sticker` (chartreuse with ultramarine text, 6.3:1), `--blue` (ultramarine with chartreuse text), `--ink` (night with chartreuse text, 14.3:1).
- Uses `radius-sticker`, no shadow. At most once per block of text.
- Inherits size and family from its parent, so it works inside headlines and body copy alike.
### Tag

Metadata chips in the label style (Karla 500, lowercase): tech stacks, years, roles.

- Default: paper with night text; `--primary` chartreuse fill; `--blue` ultramarine fill with paper text.
- Square, no border, a small 3px hard night shadow; padding `space-1` × `space-2`.
### Card

The project tile: a square panel, no border, a hard offset shadow (`shadow-hard`, 5px solid night), no radius.

- Content: a label line (`sp-label`), an `h3` in Audiowide, one or two lines of body, optional tags.
- Variants: default paper; `--primary` (chartreuse, night text); `--blue` (ultramarine, paper text); `--ink` (night, paper body, chartreuse title).
- Padding `space-6`; grid gap `space-6`, leaving 5px clear for the shadow. Hover moves up-left 2px to `shadow-hard-lift`. Enter with `sp-wipe-in` (left to right), setting `--i` per card for a 55ms stagger.
- Images inside a card use the 1-bit dither in ultramarine and paper, in a square `sp-frame`.
### Hero

The poster hero: a full-bleed colour field with one big Audiowide line, a sticker, a short lead, one button, an illustration and the pixel field as the floor.

- Markup: `section.sp-field.sp-field--primary.sp-hero` > `.sp-hero__copy` (label, `h1`, `p`, one `sp-btn`), `.sp-hero__art` (the torus or a dithered photo), `.sp-hero__floor` (the pixel field image).
- Default field is chartreuse with night text (14.3:1); the sticker inside is `--blue` (6.3:1) and the button `--ink`. On `sp-field--blue` use paper text, a chartreuse sticker and a `--primary` button.
- Headline at `display-xl` (67px), dropping to 38px under 640px, where the art moves below the copy.
- Copy wipes in with a 55ms stagger (`--i` 0–3); the art breathes. The floor sits below the copy, never behind text.
- The consumer provides the copy and the image sources (Illustrations and Motifs asset groups).
### Imagery

Photos and the 3D torus, both pixelated and dithered so they sit with the flat palette.

- **Photo:** `figure.sp-photo.sp-frame` with an `img` dithered to 1-bit Atkinson in ultramarine and paper. The sample is a generated still life; swap in real photos run through the same dither.
- **Caption on a photo:** `.sp-photo__caption` puts night text over a paper scrim from the bottom, strong enough for 4.5:1 against the pixels.
- **Torus:** `torus.png`, shaded night → ultramarine → chartreuse → paper with a 4-tone Atkinson dither on a transparent ground. Render with `image-rendering: pixelated`; `sp-breathe` gives it the ambient loop.
- Frames are square (`radius-none`) with the hard shadow. Never colour-tint or blur the dither.
### PixelField

The graphic motif: random square pixel blocks in palette colours, denser toward the bottom.

- `pixel-field-paper.svg` (chartreuse, ultramarine and night on paper) and `pixel-field-primary.svg` (ultramarine and night on chartreuse), in the Motifs group.
- Square pitch `space-2` (8px). `sp-pixels` fills the width with `image-rendering: pixelated`; `sp-breathe` may run on it slowly.
- Use as backgrounds, poster fills, card backs and section dividers. Keep text off the dense lower area; put copy above it or on a clean block beside it.

#### Example: Hero markup

```html
<section class="sp-field sp-field--primary sp-hero">
  <div class="sp-hero__copy">
    <span class="sp-label sp-wipe-in" style="--i:0">player 1 · backend + fullstack</span>
    <h1 class="sp-wipe-in" style="--i:1">Built after <span class="sp-sticker sp-sticker--blue">midnight</span></h1>
    <p class="sp-wipe-in" style="--i:2">Game servers, battle passes and 3D toys, shipped from a desk that never logs off.</p>
    <a class="sp-btn sp-btn--ink sp-wipe-in" style="--i:3" href="#">load level 1</a>
  </div>
  <div class="sp-hero__art"><img class="sp-breathe" src="assets/torus.png" alt=""></div>
  <div class="sp-hero__floor"><img src="assets/pixel-field-primary.svg" alt=""></div>
</section>
```

## Assets

The binary assets live in the design system artifact (they are not inside this file). Ask for them to be exported, or regenerate them from the descriptions below. The four logo files are reproduced in full under *Logo files*.

### Logos

The mark: four quarter-circles in a 2×2 grid, each turned a different way, so the curves spin like a pinwheel. Flat, geometric, in one or two palette colours per version. It is used apart from the name, as an icon.

- `mark-on-paper.svg`: ultramarine and night quarters, transparent ground. For paper.
- `mark-on-ink.svg`: chartreuse quarters on a night square. Reversed version.
- `mark-on-primary.svg`: ultramarine and night quarters on a chartreuse square.
- `app-icon.svg`: chartreuse quarters on an ultramarine square. App icon and favicon.

The wordmark is live text in Audiowide, not an image: see the Logo component.
### Motifs

- `pixel-field-paper.svg`: 480×240, random 8px squares in chartreuse, ultramarine and night on paper, density rising toward the bottom.
- `pixel-field-primary.svg`: the same field in ultramarine and night on chartreuse.

Scale in whole multiples so the squares stay crisp.
### Illustrations

- `torus.png`: the brand 3D object, a torus shaded night → ultramarine → chartreuse → paper, 4-tone Atkinson dither, 640×480 (160×120 pixels at 4×), transparent ground so it sits on any colour field. Show it with `image-rendering: pixelated`.
- `photo-dither-sample.png`: the photo treatment, 1-bit Atkinson in ultramarine and paper, on a generated still life (480×320, 2× pixels). A placeholder until real photos are run through the same dither.

### Logo files

**`mark-on-paper.svg`** — Ultramarine and night quarters, transparent ground. For paper.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="256" height="256"><defs><clipPath id="q0"><rect x="0" y="0" width="32" height="32"/></clipPath><clipPath id="q1"><rect x="32" y="0" width="32" height="32"/></clipPath><clipPath id="q2"><rect x="32" y="32" width="32" height="32"/></clipPath><clipPath id="q3"><rect x="0" y="32" width="32" height="32"/></clipPath></defs><circle cx="0" cy="32" r="32" fill="#0910EC" clip-path="url(#q0)"/><circle cx="32" cy="0" r="32" fill="#010300" clip-path="url(#q1)"/><circle cx="64" cy="32" r="32" fill="#0910EC" clip-path="url(#q2)"/><circle cx="32" cy="64" r="32" fill="#010300" clip-path="url(#q3)"/></svg>
```

**`mark-on-ink.svg`** — Chartreuse quarters on a night square. Reversed version.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="256" height="256"><rect width="64" height="64" fill="#010300"/><defs><clipPath id="q0"><rect x="8" y="8" width="24" height="24"/></clipPath><clipPath id="q1"><rect x="32" y="8" width="24" height="24"/></clipPath><clipPath id="q2"><rect x="32" y="32" width="24" height="24"/></clipPath><clipPath id="q3"><rect x="8" y="32" width="24" height="24"/></clipPath></defs><circle cx="8" cy="32" r="24" fill="#98ED31" clip-path="url(#q0)"/><circle cx="32" cy="8" r="24" fill="#98ED31" clip-path="url(#q1)"/><circle cx="56" cy="32" r="24" fill="#98ED31" clip-path="url(#q2)"/><circle cx="32" cy="56" r="24" fill="#98ED31" clip-path="url(#q3)"/></svg>
```

**`mark-on-primary.svg`** — Ultramarine and night quarters on a chartreuse square.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="256" height="256"><rect width="64" height="64" fill="#98ED31"/><defs><clipPath id="q0"><rect x="8" y="8" width="24" height="24"/></clipPath><clipPath id="q1"><rect x="32" y="8" width="24" height="24"/></clipPath><clipPath id="q2"><rect x="32" y="32" width="24" height="24"/></clipPath><clipPath id="q3"><rect x="8" y="32" width="24" height="24"/></clipPath></defs><circle cx="8" cy="32" r="24" fill="#0910EC" clip-path="url(#q0)"/><circle cx="32" cy="8" r="24" fill="#010300" clip-path="url(#q1)"/><circle cx="56" cy="32" r="24" fill="#0910EC" clip-path="url(#q2)"/><circle cx="32" cy="56" r="24" fill="#010300" clip-path="url(#q3)"/></svg>
```

**`app-icon.svg`** — Chartreuse quarters on an ultramarine square. App icon and favicon.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="256" height="256"><rect width="64" height="64" fill="#0910EC"/><defs><clipPath id="q0"><rect x="10" y="10" width="22" height="22"/></clipPath><clipPath id="q1"><rect x="32" y="10" width="22" height="22"/></clipPath><clipPath id="q2"><rect x="32" y="32" width="22" height="22"/></clipPath><clipPath id="q3"><rect x="10" y="32" width="22" height="22"/></clipPath></defs><circle cx="10" cy="32" r="22" fill="#98ED31" clip-path="url(#q0)"/><circle cx="32" cy="10" r="22" fill="#98ED31" clip-path="url(#q1)"/><circle cx="54" cy="32" r="22" fill="#98ED31" clip-path="url(#q2)"/><circle cx="32" cy="54" r="22" fill="#98ED31" clip-path="url(#q3)"/></svg>
```

## CSS variables

The tokens from `tokens.json` as CSS custom properties and type classes. Load these before the component CSS.

```css
:root {
  --paper: #eef1e9;
  --night: #010300;
  --chartreuse: #98ed31;
  --ultramarine: #0910ec;
  --paper-tint: #e1e5da;
  --chartreuse-tint: #dcf5bd;
  --surface: var(--paper);
  --text: var(--night);
  --accent: var(--chartreuse);
  --link: var(--ultramarine);
  --space-1: 4px;
  --space-2: 8px;
  --space-4: 16px;
  --space-6: 24px;
  --space-12: 48px;
  --radius-none: 0px;
  --radius-button: 8px;
  --radius-sticker: 12px;
  --radius-round: 50%;
  --shadow-hard: 5px 5px 0 0 #010300;
  --shadow-hard-lift: 7px 7px 0 0 #010300;
  --shadow-none: none;
  --font-display: Audiowide, system-ui, sans-serif;
  --font-sans: Karla, system-ui, sans-serif;
}

.display-xl { font-family: var(--font-display); font-size: 67px; line-height: 1.02; font-weight: 400; letter-spacing: -0.031em; }
.display-l { font-family: var(--font-display); font-size: 51px; line-height: 1.02; font-weight: 400; letter-spacing: -0.031em; }
.h1 { font-family: var(--font-display); font-size: 38px; line-height: 1.02; font-weight: 400; letter-spacing: -0.031em; }
.h2 { font-family: var(--font-display); font-size: 28px; line-height: 1.02; font-weight: 400; letter-spacing: -0.031em; }
.h3 { font-family: var(--font-display); font-size: 21px; line-height: 1.02; font-weight: 400; letter-spacing: -0.031em; }
.body-l { font-family: var(--font-sans); font-size: 21px; line-height: 1.48; font-weight: 400; letter-spacing: -0.002em; }
.body { font-family: var(--font-sans); font-size: 16px; line-height: 1.48; font-weight: 400; letter-spacing: -0.002em; }
.body-bold { font-family: var(--font-sans); font-size: 16px; line-height: 1.48; font-weight: 700; letter-spacing: -0.002em; }
.label { font-family: var(--font-sans); font-size: 13px; line-height: 1.3; font-weight: 500; letter-spacing: 0.007em; text-transform: lowercase; }
```

## Component CSS

All `sp-*` component styles, including fonts, motion, colour fields, hero and photo treatment.

```css
@import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Karla:ital,wght@0,200..800;1,200..800&display=swap');

/* Sergio Portfolio — component styles. Values come from tokens.css; motion is fixed by the brand. */
:root {
  --sp-ease: cubic-bezier(.77,0,.18,1);
  --sp-dur: 900ms;
  --sp-stagger: 55ms;
}

body { margin: 0; background: var(--paper); color: var(--night); font-family: var(--font-sans); font-size: 16px; line-height: 1.48; letter-spacing: -0.002em; }

.sp-label { font-family: var(--font-sans); font-weight: 500; font-size: 13px; letter-spacing: 0.007em; text-transform: lowercase; line-height: 1.3; }
.sp-display { font-family: var(--font-display); font-weight: 400; letter-spacing: -0.031em; line-height: 1.02; }

/* Shared: no borders, hard offset shadow, 2px lift up-left on hover */
.sp-btn, .sp-card, .sp-tag, .sp-frame {
  border: 0; box-shadow: var(--shadow-hard);
  transition: transform var(--sp-dur) var(--sp-ease), box-shadow var(--sp-dur) var(--sp-ease);
}
.sp-btn:hover, .sp-card:hover { transform: translate(-2px, -2px); box-shadow: var(--shadow-hard-lift); }

/* Button — softly rounded */
.sp-btn {
  font-family: var(--font-sans); font-weight: 500; font-size: 13px; letter-spacing: 0.007em; text-transform: lowercase; line-height: 1.3;
  display: inline-flex; align-items: center; gap: var(--space-2);
  padding: var(--space-4) var(--space-6); border-radius: var(--radius-button);
  cursor: pointer; text-decoration: none;
}
.sp-btn:active { transform: translate(5px, 5px); box-shadow: var(--shadow-none); }
.sp-btn:focus-visible { outline: 2px solid var(--ultramarine); outline-offset: 4px; }
.sp-btn--primary { background: var(--chartreuse); color: var(--night); }
.sp-btn--secondary { background: var(--ultramarine); color: var(--paper); }
.sp-btn--ink { background: var(--night); color: var(--chartreuse); }
.sp-btn--quiet { background: var(--paper); color: var(--night); }
.sp-btn[disabled] { cursor: not-allowed; background: var(--paper-tint); color: var(--night); transform: none; box-shadow: var(--shadow-none); }

/* Sticker — rounded, tilted emphasis */
.sp-sticker {
  display: inline-block; padding: 0 var(--space-2); border-radius: var(--radius-sticker);
  transform: rotate(-3deg); background: var(--chartreuse); color: var(--ultramarine);
}
.sp-sticker--blue { background: var(--ultramarine); color: var(--chartreuse); }
.sp-sticker--ink { background: var(--night); color: var(--chartreuse); }

/* Tag */
.sp-tag {
  font-family: var(--font-sans); font-weight: 500; font-size: 13px; letter-spacing: 0.007em; text-transform: lowercase; line-height: 1.3;
  display: inline-block; padding: var(--space-1) var(--space-2); border-radius: var(--radius-none);
  color: var(--night); background: var(--paper); box-shadow: 3px 3px 0 0 var(--night);
}
.sp-tag--primary { background: var(--chartreuse); }
.sp-tag--blue { background: var(--ultramarine); color: var(--paper); }

/* Card — 0 radius, no border, hard shadow */
.sp-card { border-radius: var(--radius-none); background: var(--paper); color: var(--night); padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-4); }
.sp-card h3 { margin: 0; font-family: var(--font-display); font-weight: 400; font-size: 21px; line-height: 1.02; letter-spacing: -0.031em; }
.sp-card p { margin: 0; }
.sp-card--primary { background: var(--chartreuse); color: var(--night); }
.sp-card--blue { background: var(--ultramarine); color: var(--paper); }
.sp-card--ink { background: var(--night); color: var(--paper); }
.sp-card--ink h3 { color: var(--chartreuse); }

/* Image frame — square corners, hard shadow */
.sp-frame { display: block; border-radius: var(--radius-none); overflow: hidden; }

/* Wipe — entrance wipes in left to right; ambient loop breathes slowly */
@keyframes sp-wipe-in {
  from { clip-path: inset(0 100% 0 0); }
  to { clip-path: inset(0 0 0 0); }
}
.sp-wipe-in { animation: sp-wipe-in var(--sp-dur) var(--sp-ease) both; }
/* Stagger: set --i on each item (0, 1, 2…) */
.sp-wipe-in[style*="--i"] { animation-delay: calc(var(--i) * var(--sp-stagger)); }
@keyframes sp-breathe {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.04) rotate(-2deg); }
}
.sp-breathe { animation: sp-breathe 6s var(--sp-ease) infinite; transform-origin: 50% 50%; }
@media (prefers-reduced-motion: reduce) {
  .sp-wipe-in, .sp-breathe { animation: none; }
  .sp-btn, .sp-card, .sp-tag, .sp-frame { transition: none; }
}

/* Logo — wordmark-led; the mark lives apart as an icon */
.sp-wordmark { display: inline-block; padding: var(--space-4) var(--space-6); font-family: var(--font-display); font-weight: 400; font-size: 28px; line-height: 1.02; letter-spacing: -0.031em; }
.sp-wordmark--paper { background: var(--paper); color: var(--night); }
.sp-wordmark--ink { background: var(--night); color: var(--chartreuse); }
.sp-wordmark--primary { background: var(--chartreuse); color: var(--ultramarine); }
.sp-mark { width: 64px; height: 64px; display: block; }

/* Colour field — full-bleed sections in a brand colour; text pairs fixed per field */
.sp-field { padding: var(--space-12); }
.sp-field--primary { background: var(--chartreuse); color: var(--night); }
.sp-field--primary .sp-accent { color: var(--ultramarine); }
.sp-field--blue { background: var(--ultramarine); color: var(--paper); }
.sp-field--blue .sp-accent { color: var(--chartreuse); }
.sp-field--ink { background: var(--night); color: var(--paper); }
.sp-field--ink .sp-accent { color: var(--chartreuse); }
.sp-field--paper { background: var(--paper); color: var(--night); }
.sp-field--paper .sp-accent { color: var(--ultramarine); }

/* Hero — poster layout on a colour field */
.sp-hero { position: relative; overflow: hidden; display: grid; grid-template-columns: minmax(0, 3fr) minmax(0, 2fr); gap: var(--space-6); align-items: center; padding: var(--space-12) var(--space-12) 0; }
.sp-hero__copy { display: flex; flex-direction: column; gap: var(--space-6); align-items: flex-start; padding-bottom: var(--space-12); position: relative; z-index: 1; }
.sp-hero h1 { margin: 0; font-family: var(--font-display); font-weight: 400; font-size: 67px; line-height: 1.02; letter-spacing: -0.031em; }
.sp-hero p { margin: 0; font-size: 21px; max-width: 32ch; }
.sp-hero__art { align-self: end; }
.sp-hero__art img { display: block; width: 100%; image-rendering: pixelated; }
.sp-hero__floor { grid-column: 1 / -1; margin: 0 calc(-1 * var(--space-12)); }
.sp-hero__floor img { display: block; width: 100%; height: 96px; object-fit: cover; object-position: bottom; image-rendering: pixelated; }
@media (max-width: 640px) {
  .sp-hero { grid-template-columns: 1fr; padding: var(--space-6) var(--space-4) 0; }
  .sp-hero h1 { font-size: 38px; }
  .sp-hero__floor { margin: 0 calc(-1 * var(--space-4)); }
}

/* Photo — dithered image in a square frame, optional caption over a scrim */
.sp-photo { position: relative; }
.sp-photo img { display: block; width: 100%; image-rendering: pixelated; }
.sp-photo__caption { position: absolute; left: 0; right: 0; bottom: 0; padding: var(--space-12) var(--space-4) var(--space-4); color: var(--night); background: linear-gradient(to top, var(--paper) 45%, rgba(238, 241, 233, 0)); }

/* Pixel field motif */
.sp-pixels { display: block; width: 100%; image-rendering: pixelated; }
```
