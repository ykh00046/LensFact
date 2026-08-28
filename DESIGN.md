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
| Secondary | `--color-secondary` | `#3C4655` | Leads, card copy, compare row names |
| Ink Hover | `--color-ink-hover` | `#0B2050` | Primary button hover |
| Ad Border | `--color-ad-border` | `#D7DCE3` | Reserved ad-slot dashed border |
| Ad Surface | `--color-ad-surface` | `#FBFCFD` | Reserved ad-slot fill |

## 3. Typography

- Primary: `Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif`
- Mono: `ui-monospace, "Cascadia Mono", Consolas, monospace`
- Display: clamped 32-48px, 700, 1.32 line height, -0.025em tracking.
- Page H1: clamped 32-44px, 700, 1.28 line height, -0.02em tracking (H2 shares the tracking).
- H2: 24-30px, 700, 1.42 line height.
- H3/Card: 18-21px, 700, 1.45 line height.
- Body: 16-18px, 400, 1.75 line height.
- Article body: 17.5px desktop, 16.5px mobile, 1.9 line height.
- Meta/caption: 13-15px, 500, 1.6 line height.
- Weight ladder: 400 / 500 / 600 / 700 only (fallback fonts have no intermediate weights). Mono values use 500-600.
- Korean wrapping: `word-break: keep-all` on body, `text-wrap: pretty` on headings, leads, and paragraphs; unicode superscripts in values are rendered as `<sup>` at render time.
- Pretendard is declared but not self-hosted yet; the fallback stack must look finished on its own.

## 4. Spacing & Layout

- Base unit: 4px.
- Page max width: 1120px.
- Article body width: 720px (45rem measure cap below 1024px); article aside width: 300px; article grid gap 100px.
- Breakpoints: 1024px, 900px (mobile menu switch), and 640px.
- Major sections use 64-96px vertical rhythm on desktop and 40-56px on mobile.
- Radius ladder: `--radius-sm` 8px (small buttons, chips), `--radius` 10px (buttons, field rows), `--radius-md` 14px (cards, callouts, source panel), `--radius-lg` 16px (package card, detail panel, feature cards).

## 5. Components

### Header
- Structure: skip link, brand anchor, four nav links (렌즈 숫자 해석 · 공식 사양 비교 · 렌즈 상식 · 소개), mobile menu button, collapsible mobile nav carrying all links including policy pages. Policy links otherwise live in the footer only.
- States: hover = ink; active page = weight 700 plus coral inset underline; two-tone focus ring (coral outline + ink halo); `aria-expanded` synced by JS; Escape and outside click close the mobile menu.
- Accessibility: 44px minimum touch targets, `aria-controls` on the menu button.

### Input Decoder
- Purpose: the reader types the figures printed on their own package instead of picking one of the preset products. It sits between the hero and the preset Product Selector, on the ivory `.section.alt` surface so the two decoders read as separate steps.
- Structure: a `<form>` on the left of `.decoder-layout`, an evidence-panel result on the right. Six fields in one `auto-fit minmax(12.5rem, 1fr)` grid: BC, DIA, 함수율, Dk/t (number inputs, `inputmode="decimal"`), 재질명 (text), 교체주기 (select, default 모름). Every field is optional; at least one must be filled.
- Field anatomy: bold label plus muted `.input-unit` qualifier, a 3rem white control, a `.input-hint` line and a hidden `.input-error` slot, both referenced from the control through `aria-describedby`.
- Privacy: a one-line `.input-note` under the fields states that values are computed in the page only — no storage, no network. The code keeps that promise; nothing is written to `localStorage` and no request is made.
- Result panel: reuses `.detail-panel` (pale blue). One `.input-result-field` per filled entry — code, label, typed value, 뜻, 주의할 점 from `fields.js` — followed by a bold `.input-placement` sentence computed from `products.js`: how many of the products on file print the same figure, or, when none do, the recorded range plus the nearest recorded figure with its product count.
- Match list: `입력한 표기와 같은 값이 적힌 제품` lists products matching ALL filled fields; when none match all, it lists the products matching the most fields and labels each with `N개 항목 중 M개 일치`. Order is the repository order, never a ranking. Each item links to the product page and shows the matching values as state chips (`status-verified` / `status-conflict`); a conflict chip keeps both source values and adds `출처 간 값이 다름` with the per-source lines. `unknown` never counts as a match.
- Language: placement only. `추천`, `적합`, `좋다`, `나쁘다`, `순위` never appear; the single permitted use of 적합 is the disclaimer that this is not a suitability judgement. A fixed `.input-boundary` note closes every result.
- States: value parsing handles the printed forms in `products.js` — `8.5 mm / 9.0 mm` (split on `/`), `170 / 171` (either), `121 × 10⁻⁹` (the exponent is a unit, not a figure), and `코어 33% / 표면 80% 이상` (core only, annotated `코어 기준`). Numeric matching is exact (±0.0).
- Accessibility: every control has a `<label>`; hints and errors are wired with `aria-describedby`; out-of-range and empty-submit errors render inline (never `alert()`) and set `aria-invalid`; the result region is `aria-live="polite"` and focus moves to its `tabindex="-1"` heading after submit. `해석 지우기` resets the form, the errors, and the panel.

### Decoder Field Row
- Structure: button row with code, label, value, optional flag. The four package-label tiles in the hero are also buttons (`aria-pressed`) that select the matching field and scroll to the decoder.
- Variants: main visible fields and disclosed full fields.
- States: selected row uses soft coral fill and coral left rule; focus ring uses coral.
- Accessibility: rows are buttons with `aria-pressed`; the detail region is always visible and updates on selection.

### Product Selector
- Structure: three repository-owned product buttons above the field rows.
- States: selected product uses soft coral fill, coral border, and `aria-pressed=true`.
- Behavior: click, Enter/Space, and arrow keys update the package card, field values, and source detail as one state change.
- Accessibility: all three buttons stay in the Tab order (no roving tabindex); arrow keys move selection; focus remains visible.

### Evidence Panel
- Structure: detail region (code, value, meaning, caution, source summary, source disclosure) plus a separate visually-hidden `aria-live` status region that announces only code · value · state · meaning.
- States: value color follows state (ink verified, muted unknown, warn conflict); conflict lists end with the "값을 합치지 않습니다" note.
- Source records render eight rows: 출처 유형, 기관·제조사, 문서명, 원문 표기, 주소, 확인일 (per source), 측정·확인 조건, 제품 연결.
- Accessibility: disclosure button controls a source block and exposes conflicts side by side.

### Article Card
- Structure: category, title, lead, metadata, link.
- Variants: featured and compact.
- Accessibility: entire card is not nested in a link; primary title link remains clear.
- States: completed articles expose a title link and verification metadata; unfinished articles show `준비 중` without a destination and use the dashed ivory `.card-pending` treatment with a muted title.

### Comparison Table
- Structure: one semantic table with row and product column headers; values reference both through `headers`.
- Structure details: caption sits above the scroll region; the Dk/t unit note is a footnote referenced by `aria-describedby`; head, rows, and the permit-evidence list render from `products.js`.
- Product picker: a `fieldset`/`legend` ("비교할 제품 선택") of real checkboxes sits above the caption, one per product in the declared column order. Default is the first three products; at most four may be selected (unchecked boxes go `disabled` with a visible "최대 4개" hint) and at least one must stay selected (visible "최소 1개" hint). The picker is JS-only and stays hidden without JS.
- Selection state: the selected ids live in the URL query `?p=<id>,<id>` via `history.replaceState`, so a comparison is shareable and future "A vs B" pages can deep-link. Unknown ids are ignored; an empty or absent `p` falls back to the default three.
- Live region: an `aria-live="polite"` status line announces "N개 제품 비교 중". Only the table, caption, and evidence list re-render on change, so focus stays on the checkbox that was used.
- Counts: no page copy hard-codes the product count. The caption renders "선택한 N개 제품 공식 사양" and the picker hint renders "현재 N개 제품 중 최대 4개" from the data at render time.
- No-JS: `<noscript>` keeps the full all-product table and the full permit-evidence list for SEO and no-JS readers.
- Column width: with at most four product columns the table fits the 1120px wrap without horizontal scroll (item column 9rem, product columns min 13rem); `.table-scroll` stays as the safety net for the noscript full table and narrow desktops.
- Responsive state: above 640px the table stays intact inside a keyboard-focusable horizontal scroll region with a sticky, edge-shadowed first column; at 640px and below it transposes to per-row cards (`data-label` per cell) with no horizontal scroll.
- Evidence states: `conflict` uses coral/warn; `unknown` is neutral (border, muted text on white) so a missing value never reads as an alarm.

### Ad Reserve
- Structure: neutral placeholder rendered only through JS.
- States: inactive placeholder when `ADS_ENABLED` is `false`.
- Appearance: `광고` corner label plus `data-ad-label · data-ad-size` text on `--color-ad-surface` with a dashed `--color-ad-border`.
- Accessibility: marked as complementary with descriptive text; never fixed or overlayed.

## 6. Motion & Interaction

- State transitions use 180ms ease for color, border, opacity, and transform.
- No layout-property animation.
- `prefers-reduced-motion: reduce` disables transitions and smooth scrolling.

## 7. Depth & Surface

Borders and fills define surfaces; the package card is ivory with a hairline and no shadow. The only shadows are the sticky compare-column edge and the focus halo. No decorative gradients or external imagery. The coral left rule is reserved for `.editorial-note` (editorial interpretation); factual callouts use a plain ivory fill.

## 8. Accessibility Constraints & Accepted Debt

- Target: WCAG 2.2 AA.
- Focus: every interactive element has a visible outline.
- Touch: buttons, menu controls, chips, and footer links are at least 44px tall.
- Footer: the medical boundary is the primary element (pale-blue note at ink) and appears in the footer only; the brand is quiet right-aligned meta.
- Accepted debt: coral as the sole boundary on selected states is 2.29:1 against soft coral; state is also carried by fill and `aria-pressed`, so this is tolerated.
- Reading: article body remains single-column on mobile with no fixed canvas.
- Accepted debt: MFDS 상세 원장 직접 대조가 미완료인 두 허가번호와 공식 출처 간 충돌은 제품 데이터와 화면에 명시적으로 남긴다.
