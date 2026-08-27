# LensFact Design System

## 0. Research Log

- Embedded refs: accepted `LensFact Home V4.dc.html` and `LensFact Content System V1.dc.html`; rebuilt as semantic static pages without copying generated markup.
- Lazyweb: skipped; external research is unnecessary because accepted local references are the visual contract and network use is restricted.
- Imagen drafts: skipped; user supplied accepted design artifacts.

## 1. Atmosphere & Identity

LensFact feels like a calm evidence desk for consumer lens-package labels: white, Korean-first, quiet, and source-forward. The signature is a package-label surface paired with an evidence panel that changes state without drama.

## 2. Color

| Role | Token | Value | Usage |
| --- | --- | --- | --- |
| Ink | `--color-ink` | `#051230` | Main text, primary buttons |
| Coral | `--color-coral` | `#F48067` | Selected row, underline, focus accent |
| White | `--color-white` | `#FFFFFF` | Main background |
| Soft Ivory | `--color-ivory` | `#FFF8F2` | Warm panels |
| Pale Blue | `--color-blue` | `#EAF5FF` | Evidence panels |
| Border | `--color-border` | `#E5E7EB` | Dividers and outlines |
| Muted | `--color-muted` | `#5B6472` | Secondary text |
| Warn | `--color-warn` | `#8A4B12` | Cautions and conflict labels |
| Body | `--color-body` | `#16233C` | Long-form reading text |
| Soft Coral | `--color-coral-soft` | `#FFEFE6` | Selected backgrounds |

## 3. Typography

- Primary: `Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif`
- Mono: `ui-monospace, "Cascadia Mono", Consolas, monospace`
- Display: clamped 36-58px, 700, 1.12 line height.
- Page H1: clamped 30-44px, 700, 1.28 line height.
- H2: 24-30px, 700, 1.42 line height.
- H3/Card: 18-21px, 700, 1.45 line height.
- Body: 16-18px, 400, 1.75 line height.
- Article body: 17.5px desktop, 16.5px mobile, 1.9 line height.
- Meta/caption: 13-15px, 500, 1.6 line height.

## 4. Spacing & Layout

- Base unit: 4px.
- Page max width: 1120px.
- Article body width: 720px; article aside width: 300px.
- Breakpoints: 1024px and 640px.
- Major sections use 64-96px vertical rhythm on desktop and 40-56px on mobile.
- Components use 8px radii unless a larger package-label panel needs 12px.

## 5. Components

### Header
- Structure: skip link, brand anchor, nav links, mobile menu button, collapsible mobile nav.
- States: hover underline, visible focus ring, `aria-expanded` synced by JS.
- Accessibility: 44px minimum touch targets, `aria-controls` on the menu button.

### Decoder Field Row
- Structure: button row with code, label, value, optional flag.
- Variants: main visible fields and disclosed full fields.
- States: selected row uses soft coral fill and coral left rule; focus ring uses coral.
- Accessibility: rows are buttons with `aria-expanded`; selected row updates the detail region.

### Product Selector
- Structure: three repository-owned product buttons above the field rows.
- States: selected product uses soft coral fill, coral border, and `aria-pressed=true`.
- Behavior: click, Enter/Space, and arrow keys update the package card, field values, and source detail as one state change.
- Accessibility: one roving tab stop is retained inside the selector; focus remains visible.

### Evidence Panel
- Structure: live detail region, meaning, caution, source summary, source disclosure.
- States: empty guidance and selected detail.
- Accessibility: disclosure button controls a source block and exposes conflicts side by side.

### Article Card
- Structure: category, title, lead, metadata, link.
- Variants: featured and compact.
- Accessibility: entire card is not nested in a link; primary title link remains clear.
- States: completed articles expose a title link and verification metadata; unfinished articles show `준비 중` without a destination.

### Comparison Table
- Structure: one semantic table with row and product column headers; values reference both through `headers`.
- Responsive state: the table stays intact inside a keyboard-focusable horizontal scroll region; the first column remains sticky.
- Evidence states: conflict and unknown labels use the existing warn/coral tokens without implying a ranking.

### Ad Reserve
- Structure: neutral placeholder rendered only through JS.
- States: inactive placeholder when `ADS_ENABLED` is `false`.
- Accessibility: marked as complementary with descriptive text; never fixed or overlayed.

## 6. Motion & Interaction

- State transitions use 180ms ease for color, border, opacity, and transform.
- No layout-property animation.
- `prefers-reduced-motion: reduce` disables transitions and smooth scrolling.

## 7. Depth & Surface

Mixed but restrained: borders define most surfaces; subtle shadows are limited to package-label and major callout surfaces. No decorative gradient blobs or external imagery.

## 8. Accessibility Constraints & Accepted Debt

- Target: WCAG 2.2 AA.
- Focus: every interactive element has a visible outline.
- Touch: primary buttons and menu controls are at least 44px tall.
- Reading: article body remains single-column on mobile with no fixed canvas.
- Accepted debt: MFDS 상세 원장 직접 대조가 미완료인 두 허가번호와 공식 출처 간 충돌은 제품 데이터와 화면에 명시적으로 남긴다.
