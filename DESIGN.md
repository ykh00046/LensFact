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

- Primary: `"Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif`
- Pretendard Variable is self-hosted from `site/assets/fonts/pretendard/` as a dynamic subset (92 unicode-range woff2 slices, ~2.9 MB on disk; a Korean page pulls only the handful of slices it needs). Served same-origin — no CDN and no external font service at runtime. SIL OFL 1.1, license kept at `assets/fonts/pretendard/LICENSE.txt`.
- Mono: `ui-monospace, "Cascadia Mono", Consolas, monospace`
- Display: clamped 32-48px, 700, 1.32 line height, -0.025em tracking.
- Page H1: clamped 32-44px, 700, 1.28 line height, -0.02em tracking (H2 shares the tracking).
- H2: 24-30px, 700, 1.42 line height.
- H3/Card: 18-21px, 700, 1.45 line height.
- Body: 16-18px, 400, 1.75 line height.
- Article body: 17.5px desktop, 16.5px mobile, 1.9 line height.
- Meta/caption: 13-15px, 500, 1.6 line height.
- Weight ladder: 400 / 500 / 600 / 700 only. Pretendard Variable covers the whole 45-920 axis, but the design stays on these four so the fallback stack (which has no intermediate weights) renders the same hierarchy. Mono values use 500-600.
- Korean wrapping: `word-break: keep-all` on body, `text-wrap: pretty` on headings, leads, and paragraphs; unicode superscripts in values are rendered as `<sup>` at render time.
- Every `@font-face` uses `font-display: swap`, so text paints in the fallback stack first and swaps to Pretendard when its subset arrives. The fallback stack is retained in full and must still look finished on its own.

## 4. Spacing & Layout

- Base unit: 4px.
- Page max width: 1120px.
- Article body width: 720px (45rem measure cap below 1024px); article aside width: 300px; article grid gap 100px.
- Breakpoints: 1024px, 900px (mobile menu switch), and 640px.
- Major sections use 64-96px vertical rhythm on desktop and 40-56px on mobile.
- Radius ladder: `--radius-sm` 8px (small buttons, chips), `--radius` 10px (buttons, form controls), `--radius-md` 14px (cards, callouts, source panel), `--radius-lg` 16px (package card, detail panel, feature cards).

## 5. Components

### Header
- Structure: skip link, brand anchor, six nav links (포장 숫자 해석 · 제품 · 검색 · 공식 사양 비교 · 렌즈 상식 · 소개), mobile menu button, collapsible mobile nav carrying all links including policy pages. Policy links otherwise live in the footer only.
- Destinations: 포장 숫자 해석 goes to `decoder/index.html`, not to the home page. The brand anchor is the only link back home, so the home page carries no nav `aria-current`. Every page whose section has a nav entry marks it (two copies, desktop and mobile; the policy pages carry one, because they appear in the mobile nav only). The home page and the ten `terms/` pages mark none — home because the brand anchor is the link home, the terms pages because the nav has no 용어 entry. The label is 포장 숫자 해석 in both the desktop and the mobile nav on every page.
- States: hover = ink; active page = weight 700 plus coral inset underline; two-tone focus ring (coral outline + ink halo); `aria-expanded` synced by JS; Escape and outside click close the mobile menu.
- Accessibility: 44px minimum touch targets, `aria-controls` on the menu button. Below 900px the desktop nav is hidden and the menu button needs JavaScript, so every page's `<head>` carries a `<noscript><style>` block that hides the dead toggle and lays the mobile nav out in flow — without it a reader with JavaScript off would see no nav links at all.

### Input Decoder
- Location: `decoder/index.html`, the whole reason that page exists. It is the destination of the home page's first router card and of the 해석 links on the compare, knowledge, water-content and product-index pages. It was on the home page until 2026-08-29; the home page is now a router and holds no form.
- Purpose: the reader types the figures printed on their own package and gets each figure's meaning plus a factual placement against the recorded products. There is no preset-product path any more, so this form is the only spec-input surface on the site.
- Coverage gap: `INPUT_FIELDS` has six fields, `fields.js` has nine. 중심두께, 허가번호 and UV have no input control, so the page carries a visible 표기 뜻 전체 보기 block linking all nine `terms/<field>.html` pages and marking the three that cannot be typed in. A `<noscript>` block repeats those links and states that the form needs JavaScript, because the inputs have no `name` attributes and a no-JS submit would only reload the page empty. So that the dead control cannot be pressed at all, the markup ships every control `disabled` and the result panel `hidden`, exactly as `products/index.html` ships its filters; `initInputDecoder()` enables them at startup, and only once it has data to answer with.
- Match links: the form declares `data-product-base` (`../products/` on the decoder page) and `app.js` reads it, so the product links in the match list resolve from whatever depth the form is placed at. The attribute defaults to `./products/` when absent.
- Structure: a `<form>` on the left of `.decoder-layout`, an evidence-panel result on the right. Six fields in one `auto-fit minmax(12.5rem, 1fr)` grid: BC, DIA, 함수율, Dk/t (number inputs, `inputmode="decimal"`), 재질명 (text), 교체주기 (select, default 모름). Every field is optional; at least one must be filled.
- Field anatomy: bold label plus muted `.input-unit` qualifier, a 3rem white control, a `.input-hint` line and a hidden `.input-error` slot, both referenced from the control through `aria-describedby`.
- Privacy: a one-line `.input-note` under the fields states that values are computed in the page only — no storage, no network. The code keeps that promise; nothing is written to `localStorage` and no request is made.
- Result panel: reuses `.detail-panel` (pale blue). One `.input-result-field` per filled entry — code, label, typed value, 뜻, 주의할 점 from `fields.js` — followed by a bold `.input-placement` sentence computed from `products.js`: how many of the products on file print the same figure, or, when none do, the recorded range plus the nearest recorded figure with its product count.
- Match list: `입력한 표기와 같은 값이 적힌 제품` lists products matching ALL filled fields; when none match all, it lists the products matching the most fields and labels each with `N개 항목 중 M개 일치`. Order is the repository order, never a ranking. Each item links to the product page and shows the matching values as state chips (`status-verified` / `status-conflict`); a conflict chip keeps both source values and adds `출처 간 값이 다름` with the per-source lines. `unknown` never counts as a match.
- Language: placement only. `추천`, `적합`, `좋다`, `나쁘다`, `순위` never appear; the single permitted use of 적합 is the disclaimer that this is not a suitability judgement. A fixed `.input-boundary` note closes every result.
- States: value parsing handles the printed forms in `products.js` — `8.5 mm / 9.0 mm` (split on `/`), `170 / 171` (either), `121 × 10⁻⁹` (the exponent is a unit, not a figure), and `코어 33% / 표면 80% 이상` (core only, annotated `코어 기준`). Numeric matching is exact (±0.0).
- Accessibility: every control has a `<label>`; hints and errors are wired with `aria-describedby`; out-of-range and empty-submit errors render inline (never `alert()`) and set `aria-invalid`; the result region is `aria-live="polite"` and focus moves to its `tabindex="-1"` heading after submit. `해석 지우기` resets the form, the errors, and the panel.

### Home Router Card
- Purpose: the home page is a router, not a tool. Three cards send the reader to the three things the site can actually do: 포장 숫자 해석 (`decoder/index.html`), 제품 찾기 (`products/index.html#product-search`), 제품 비교 (`compare/index.html`).
- Structure: `section.hero` (h1 + lead) then a labelled `section` whose h2 is `.visually-hidden`, holding a `.cards-grid` of three `article.card.router-card`. Each card is an h3 title link plus one factual sentence. Nothing else sits above the footer.
- Links: static `<a href>`, never a `<button>`, and the card is never wrapped in a link (see Article Card). `.router-card h3 a` is a block-level `flex` with `min-block-size: 2.75rem`, which is the 44px target at the default root size; being `flex` rather than `inline-flex` makes the tap target span the card's content width instead of stopping at the label.
- Trust line: one `.router-note` paragraph carrying `data-evidence-summary`, so its `[data-summary-value="unknown"]` count is refreshed from `products.js` at runtime and its static fallback is asserted against the computed value in `tests/static-content.test.js`. It keeps the 최종 피팅은 전문가에게 확인하세요 clause.
- Reuse only: `.router-card` and `.router-note` add tap area and spacing. No new colour, border or type treatment enters the system.

### Retired: Decoder Field Row and Product Selector (2026-08-29)
- The home page used to carry a preset decoder: twenty product buttons (with the `.coi-mark` 공시 badge on the operator-employer product), a field-row list and a detail panel. The home rewrite removed it, so neither component appears in any page any more.
- What replaced them: package-label reading is now the Input Decoder on `decoder/index.html`, per-product values live on `products/<slug>.html`, and per-field values live on `terms/<field>.html`. The conflict-of-interest disclosure still runs on the product page as the `.coi-banner` under the h1, and on the products index, the comparison table, the decoder page's match list and the term-page value lists as the `.coi-chip` label.
- Their CSS rules and their JavaScript were removed from `style.css` and `app.js` on 2026-08-29 (`.hero-grid`, `.trust-list`, `.product-selector`, `.product-button`, `.selector-help`, `.field-list`, `.field-row`, `.field-code`, `.field-label`, `.field-value`, `.field-flag`, `.extra-fields`, `.coi-mark`). The `.coi-mark` badge went with them: the disclosure now renders as the `.coi-chip` used by the product, list, comparison, decoder-match and term-value surfaces.

### Evidence Panel
- Structure: detail region (code, value, meaning, caution, source summary, source disclosure), rendered once on product and term pages. The separate visually-hidden `aria-live` status region went with the home decoder on 2026-08-29: the surfaces that remain render once and have no state change to announce, and `app.js` now contains no `aria-live` at all. The only live regions left on the site are the decoder result panel, the comparison status line and the product-list result status, none of them visually hidden.
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
