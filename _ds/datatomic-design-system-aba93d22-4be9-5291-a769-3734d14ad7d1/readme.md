# Datatomic — Design System

> Système de design pour **Datatomic**, plateforme SaaS française de gestion de bases de données contacts, campagnes marketing et automatisation (emailing, segmentation, connecteurs).

This project is the compiled design system. Consumers link the single root `styles.css`; components are bundled to `_ds_bundle.js` and exposed under `window.DatatomicDesignSystem_bfa30f`.

## Context

- **Marque** : Datatomic
- **Produit** : Plateforme SaaS — gestion de contacts, campagnes, segmentation, automatisation, connecteurs
- **Secteur** : MarTech / CRM / Data
- **Audience** : PME, équipes marketing, professions réglementées (notaires, agents immobiliers)
- **Langue UI** : Français
- **Ton** : Professionnel, clair, efficace — jamais corporate ni froid

### Sources
Built from the brand & design guidelines supplied at `uploads/datatomic-brand-guidelines.md`. No codebase or Figma file was provided, so the product surfaces (UI kit) are faithful reconstructions of the dashboard described in those guidelines (sidebar + content layout, KPI cards, data tables, campaigns, segments). If a real codebase or Figma exists, re-attach it so the UI kit can be reconciled against source.

---

## CONTENT FUNDAMENTALS — voice & tone

The voice is **direct, concise, French, neutral-professional** — never over-enthusiastic, never cold, never corporate.

- **Sentence case everywhere.** No ALL CAPS except table column headers. (Tiny inline badges "BETA"/"NEW"/"Tuto" are the only other caps.)
- **Short action verbs on buttons**, often prefixed with `+` for creation: `+ Nouveau segment`, `+ Connecteur`, `+ Nouveau modèle`.
- **Trim every word.** Prefer the left column:
  - ✅ `Nouveau segment` ❌ `Créer un nouveau segment de contacts`
  - ✅ `Rien à afficher` ❌ `Aucun résultat trouvé pour votre recherche`
  - ✅ `Campagnes actives : 2` ❌ `Vous avez actuellement 2 campagnes actives`
  - ✅ `Terminée` ❌ `Cette campagne est terminée`
- **Empty states invite action**, they don't apologise: "Rien à afficher" → implicitly "ajoutez-en un". Pair with a single create button.
- **Errors explain + tell how to fix**, never apologise: "Vérifiez le format du fichier CSV, puis réessayez."
- **No emoji** in product copy. (The brand guide mentions 🚀/✓ as legacy status glyphs; we render these as Lucide outline icons instead — see Iconography.)
- **Numbers** use French formatting: thin-space thousands ("16 791"), comma decimals ("48,3 %").

---

## VISUAL FOUNDATIONS

**Overall feel:** clean, professional, airy SaaS. Light blue-lavender canvas, white cards, one geometric sans, restrained colour, subtle blue-tinted shadows. Nothing loud.

### Colour
- **Primary** `#2D4BF0` (Datatomic blue) — CTAs, filled buttons, active links/nav. Dark `#001d6c` (deep navy) for hover and H1 emphasis. Soft `#EEF0FF` for active-nav fills.
- **Canvas** `#f4f5ff` (blue-lavender, very light) — the global background. **Never** pure white as the page background; white is reserved for cards and the sidebar.
- **Lines** `#E4E7FF` — borders, input outlines, table rules.
- **Text** `#001d6c` primary ink (deep navy), `#7B8BB2` secondary.
- **Accents** coral-pink `#FF4576` (dynamic avatars, highlights), mint `#3be2c0` (success/active), info blue `#3765fd`, red `#EF4444` (errors). Each has a pale tint for pill/icon-tile backgrounds. Status-badge fills are fixed and independent of the accents: BETA `#2D4BF0`, NEW `#22C55E`, Tuto `#F97316`.
- Avatars use a small varied palette (coral, blue, mint, violet, pink, teal) hashed deterministically from the name.

### Type
- **One family only**: Plus Jakarta Sans (geometric sans). Never serif, never a second family. *(Substitution — see Caveats.)*
- H1 30/700, H2 23/600, H3 18/600; body 14/400, large 15; secondary 13; column labels 12/500 uppercase + 0.06em tracking.
- Key figures 32–36/700 with **tabular figures** so KPI and table numbers align.

### Spacing & layout
- **8px base unit** — every gap is a multiple. Card gaps 16–24, card padding 24, input padding 10×16.
- Fixed **270px white sidebar** (right border `#E4E7FF`) + content area on `#f4f5ff`, padding 32–40, capped at **1200px**.

### Shape, shadow, border
- **Radii**: buttons/inputs 8, cards 12–16 (we use 14), pills/avatars/badges 999. **Never > 16 on cards.**
- **Shadows are subtle and blue-tinted only**: `0 2px 8px rgba(45,75,240,0.06)` on cards, slightly deeper on hover/popovers. **Never** thick or coloured shadows. Buttons carry **no shadow**.
- **Borders**: 1px `#E4E7FF` default; secondary buttons use 1.5px.

### Motion & states
- **Animation only as user feedback** — short fades/colour transitions (120–180ms, standard ease). No decorative or looping animation.
- **Hover**: filled buttons darken (→ `#001d6c`); ghost/secondary get a soft-blue `#EEF0FF` wash; cards lift to a slightly deeper shadow.
- **Press / active**: colour change, not scale tricks.
- **Focus**: 2px primary ring (+ soft 3px halo on inputs).

### Imagery & backgrounds
- No gradients on primary backgrounds, no photographic hero imagery in-app. The "texture" is flat colour + white cards + pastel icon tiles. Keep it clean and functional.

---

## ICONOGRAPHY

- **Style: outline only, never filled.** No decorative icons without a function.
- **Size**: 18–20px in nav, 20–24px in cards/KPIs.
- **Colour follows context**: primary `#2D4BF0` when active, `#7B8BB2` when neutral.
- **Set**: [Lucide](https://lucide.dev) (outline, consistent stroke) — loaded from CDN (`unpkg.com/lucide`). This is a **substitution**: the brand specified an outline icon style but shipped no icon files; Lucide matches the spec exactly (database, zap, share-2, layout-grid, calendar, bot, pencil, headphones, globe/life-buoy, send, rocket, search, mail-open, …). Swap for the brand's own outline set if one exists.
- **No emoji** as UI icons. Legacy status glyphs (🚀 Active / ✓ Terminée) are rendered as Lucide `rocket` / `check`.

---

## INDEX — what's in this system

### Foundations (root)
- `styles.css` — entry point (imports only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `assets/` — `datatomic-logo.svg`, `datatomic-logo-reverse.svg`, `datatomic-mark.svg`.
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand).

### Components — `window.DatatomicDesignSystem_bfa30f`
- **forms/** — `Button`, `IconButton`, `Input`, `Select`, `Checkbox`, `Switch`
- **data/** — `Card`, `KpiCard`, `Badge`, `Tag`, `Avatar`
- **navigation/** — `Tabs`, `NavItem`
- **feedback/** — `EmptyState`, `Toast`, `Dialog`

Each component dir has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and one `@dsCard` showcase HTML.

### UI kit
- `ui_kits/app/` — interactive recreation of the Datatomic application (sidebar, dashboard, contacts table, segments). See its `README.md`.

### Other
- `SKILL.md` — Agent-Skill manifest for downloading/using this system in Claude Code.
- `readme.md` — this file.
