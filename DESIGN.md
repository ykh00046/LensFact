# LensFact Design System

## 0. Research Log

- Embedded refs: accepted `LensFact Home V4.dc.html` and `LensFact Content System V1.dc.html`; rebuilt as semantic static pages without copying generated markup.
- Lazyweb: skipped; external research is unnecessary because accepted local references are the visual contract and network use is restricted.
- Imagen drafts: skipped; user supplied accepted design artifacts.

## 1. Atmosphere & Identity

LensFact feels like a calm evidence desk for consumer lens-package labels: warm greige paper, Korean-first, quiet, and source-forward. The signature is a package-label surface paired with an evidence panel that changes state without drama.

## 2. Color

Palette: **Blush Neutral 5a**. Charcoal ink on warm greige paper, with rose reserved for the
brand accent. Evidence meanings stay distinct from the accent: amber = sources disagree,
neutral = not verified.

| Role | Token | Value | Usage |
| --- | --- | --- | --- |
| Ink | `--color-ink` | `#2A2527` | Headings, primary buttons, nav active |
| Accent (rose) | `--color-accent` | `#B0546A` | Brand accent only: selection states (pressed filter and view buttons, active spec chips, the checked product in the comparison picker), prose-link underline, focus ring, nav-active and text-button rules, list bullets, the `.editorial-note` left rule |
| White | `--color-white` | `#FFFFFF` | Cards, table shell, panels and form controls — the raised layer |
| Page | `--color-page` | `#FBF9F8` | Page canvas (body, hero fade, header film, mobile drawer) |
| Soft Ivory | `--color-ivory` | `#F5EFEE` | Warm surface bands: hero top, alt sections, sticky compare column, filter bar |
| Panel | `--color-panel` | `#F0E9EC` | Evidence and detail panels |
| Border | `--color-border` | `#E8E0E2` | Dividers and outlines |
| Field Border | `--color-field-border` | `#95888C` | Form-control outlines (decoder inputs, product-list filters) — the boundary is the only thing identifying a field, so it clears 3:1 |
| Rule | `--color-rule` | `#B8A8AE` | Structural rules that must read against a warm band: the compare header underline and its corner cell edge |
| Muted | `--color-muted` | `#6E6469` | Meta, microlabels, unknown state |
| Warn (amber) | `--color-warn` | `#8A4B12` | Cautions and conflict text |
| Conflict Surface | `--color-conflict-surface` | `#FAF3E8` | 공식 자료 간 충돌 chip and list fill |
| Conflict Border | `--color-conflict-border` | `#D9A05B` | 공식 자료 간 충돌 chip and list border |
| Body | `--color-body` | `#443E41` | Long-form reading text |
| Soft Accent | `--color-accent-soft` | `#F7EBEE` | Selected backgrounds |
| Secondary | `--color-secondary` | `#5C5458` | Leads, card copy, compare row names |
| Ink Hover | `--color-ink-hover` | `#171314` | Primary button hover |
| Ad Border | `--color-ad-border` | `#D9CFD2` | Reserved ad-slot dashed border |
| Ad Surface | `--color-ad-surface` | `#FAF7F6` | Reserved ad-slot fill |

Surface rule: the page canvas is `--color-page`, and anything that should read as raised —
cards, panels, table cells, chips, form controls, buttons — stays `--color-white`. Warm bands
(`--color-ivory`) sit between the two.

Contrast (WCAG 2.2 AA): every text token clears 4.5:1 on every surface it is used on — ink
15.1:1 on white and 14.4:1 on page, body 10.4/10.0, secondary 7.3/7.0, muted 5.7/5.4, warn
6.8:1 on white and 6.2:1 on the conflict surface, accent 4.9:1 on white. The rose focus ring is 4.9:1 against white, above the 3:1
non-text minimum.

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
- States: hover = ink; active page = weight 700 plus rose accent inset underline; two-tone focus ring (rose accent outline + ink halo); `aria-expanded` synced by JS; Escape and outside click close the mobile menu.
- Accessibility: 44px minimum touch targets, `aria-controls` on the menu button. Below 900px the desktop nav is hidden and the menu button needs JavaScript, so every page's `<head>` carries a `<noscript><style>` block that hides the dead toggle and lays the mobile nav out in flow — without it a reader with JavaScript off would see no nav links at all.

### Input Decoder
- Location: `decoder/index.html`, the whole reason that page exists. It is the destination of the home page's first router card and of the 해석 links on the compare, knowledge, water-content and product-index pages. It was on the home page until 2026-08-29; the home page is now a router and holds no form.
- Purpose: the reader types the figures printed on their own package and gets each figure's meaning plus a factual placement against the recorded products. There is no preset-product path any more, so this form is the only spec-input surface on the site.
- Coverage gap: `INPUT_FIELDS` has six fields, `fields.js` has nine. 중심두께, 허가번호 and UV have no input control, so the page carries a visible 표기 뜻 전체 보기 block linking all nine `terms/<field>.html` pages and marking the three that cannot be typed in. A `<noscript>` block repeats those links and states that the form needs JavaScript, because the inputs have no `name` attributes and a no-JS submit would only reload the page empty. So that the dead control cannot be pressed at all, the markup ships every control `disabled` and the result panel `hidden`, exactly as `products/index.html` ships its filters; `initInputDecoder()` enables them at startup, and only once it has data to answer with.
- Match links: the form declares `data-product-base` (`../products/` on the decoder page) and `app.js` reads it, so the product links in the match list resolve from whatever depth the form is placed at. The attribute defaults to `./products/` when absent.
- Structure: a `<form>` on the left of `.decoder-layout`, an evidence-panel result on the right. Six fields in one `auto-fit minmax(12.5rem, 1fr)` grid: BC, DIA, 함수율, Dk/t (number inputs, `inputmode="decimal"`), 재질명 (text), 교체주기 (select, default 모름). Every field is optional; at least one must be filled.
- Field anatomy: bold label plus muted `.input-unit` qualifier, a 3rem white control, a `.input-hint` line and a hidden `.input-error` slot, both referenced from the control through `aria-describedby`.
- Privacy: a one-line `.input-note` under the fields states that values are computed in the page only — no storage, no network. The code keeps that promise; nothing is written to `localStorage` and no request is made.
- Result panel: reuses `.detail-panel` (`--color-panel`, warm mauve). One `.input-result-field` per filled entry — code, label, typed value, 뜻, 주의할 점 from `fields.js` — followed by a bold `.input-placement` sentence computed from `products.js`: how many of the products on file print the same figure, or, when none do, the recorded range plus the nearest recorded figure with its product count.
- Match list: `입력한 표기와 같은 값이 적힌 제품` lists products matching ALL filled fields; when none match all, it lists the products matching the most fields and labels each with `N개 항목 중 M개 일치`. Order is the repository order, never a ranking. Each item links to the product page and shows the matching values as state chips (`status-verified` / `status-conflict`); a conflict chip keeps both source values and adds `출처 간 값이 다름` with the per-source lines. `unknown` never counts as a match.
- Language: placement only. `추천`, `적합`, `좋다`, `나쁘다`, `순위` never appear; the single permitted use of 적합 is the disclaimer that this is not a suitability judgement. A fixed `.input-boundary` note closes every result.
- States: value parsing handles the printed forms in `products.js` — `8.5 mm / 9.0 mm` (split on `/`), `170 / 171` (either), `121 × 10⁻⁹` (the exponent is a unit, not a figure), and `코어 33% / 표면 80% 이상` (core only, annotated `코어 기준`). Numeric matching is exact (±0.0).
- Accessibility: every control has a `<label>`; hints and errors are wired with `aria-describedby`; out-of-range and empty-submit errors render inline (never `alert()`) and set `aria-invalid`; the result region is `aria-live="polite"` and focus moves to its `tabindex="-1"` heading after submit. `해석 지우기` resets the form, the errors, and the panel.

### Home Editorial Evidence Desk
- Four fixed decisions: color remains **Blush Neutral 5a** with no homepage gradient or new hue; Pretendard remains the Korean/body face while a system serif is limited to English and numeric editorial marks; layout is an asymmetric evidence-desk composition on desktop and one column at 900px and below; the page-specific signature is the visible `검증 원장` evidence ledger over the quiet left field of the approved evidence-desk image.
- Purpose: the home page is a three-path router, not a tool or a SaaS landing page. It sends readers to 포장 숫자 해석 (`decoder/index.html`), 제품 찾기 (`products/index.html#product-search`), and 제품 비교 (`compare/index.html`) only.
- Hero: the decorative 1672 × 941 WebP fills a 16:9 desktop media layer. Its quiet left field contains no generated lettering, underlines, or document marks, so `CONTACT LENS · EVIDENCE DESK`, one Korean evidence-first h1, the existing `[data-product-count]` statement, and `.home-evidence-ledger[data-evidence-summary]` remain legible without covering the evidence objects on the right. The image uses empty alternative text and explicit intrinsic dimensions; the ledger exposes all six computed values with truthful no-JS fallbacks.
- Route index: `.home-route-index` is an ordered list with exactly three divided rows labelled 01–03. Each row contains one static anchor, factual title and description, and has a minimum block size above 44px. No card wrapper, button, icon library, nested interaction, shadow, pill, or route-level decorative illustration is permitted.
- Trust and boundary: `.home-trust-line[data-evidence-summary]` retains the runtime-refreshed unknown count and its correct static fallback, plus `최종 피팅은 전문가에게 확인하세요`. The footer keeps the fuller professional-fitting boundary.
- Responsive contract: desktop uses the asymmetric hero and route-intro/index grids. At 900px both become single-column; at 480px and below the decorative media leaves the flow so the three routes remain visible within 390 × 844, while the live copy and evidence ledger remain. Route rows never drop below the touch target. Focus and reduced-motion rules remain global.

### Retired: Decoder Field Row and Product Selector (2026-08-29)
- The home page used to carry a preset decoder with twenty product buttons, a field-row list and a detail panel. The home rewrite removed it, so neither component appears in any page any more.
- What replaced them: package-label reading is now the Input Decoder on `decoder/index.html`, per-product values live on `products/<slug>.html`, and per-field values live on `terms/<field>.html`.
- Their CSS rules and JavaScript were removed from `style.css` and `app.js` on 2026-08-29 (`.hero-grid`, `.trust-list`, `.product-selector`, `.product-button`, `.selector-help`, `.field-list`, `.field-row`, `.field-code`, `.field-label`, `.field-value`, `.field-flag`, `.extra-fields`).

### Evidence Panel
- Structure: detail region (code, value, meaning, caution, source summary, source disclosure), rendered once on product and term pages. The separate visually-hidden `aria-live` status region went with the home decoder on 2026-08-29: the surfaces that remain render once and have no state change to announce, and `app.js` now contains no `aria-live` at all. The only live regions left on the site are the decoder result panel, the comparison status line and the product-list result status, none of them visually hidden.
- States: value color follows state (ink verified, muted unknown, amber warn conflict); conflict lists end with the "값을 합치지 않습니다" note.
- Source records render eight rows: 출처 유형, 기관·제조사, 문서명, 원문 표기, 주소, 확인일 (per source), 측정·확인 조건, 제품 연결.
- Accessibility: disclosure button controls a source block and exposes conflicts side by side.

### Article Card
- Structure: category, title, lead, metadata, link.
- Variants: featured and compact.
- Accessibility: entire card is not nested in a link; primary title link remains clear.
- States: completed articles expose a title link and verification metadata; unfinished articles show `준비 중` without a destination and use the dashed ivory `.card-pending` treatment with a muted title.
- Knowledge articles reuse the article shell, conclusion, table of contents, source disclosure, limits, related-content cards, and professional-fitting boundary; factual comparison strips show source structure and never rank products.
- The knowledge hub registers eleven topics: five live long-form articles (replacement schedule, water content, BC·DIA·PWR, Dk versus Dk/t, and silicone hydrogel versus hydrogel), four linked term explainers, and two pending cards. The replacement-schedule article (added 2026-09-02 and featured) separates replacement interval, daily wearing time, daily versus extended wear, and unopened EXP; its product examples stay pinned to official records already present in `products.js`. The Dk/Dk/t article uses the existing comparison strip only to preserve each official value with its test conditions; it never converts values or ranks products across differing units, methods, temperatures, corrections, powers, or thicknesses. The silicone-hydrogel article (added 2026-09-02) reuses the same strip to keep each document's material-family label, water content and oxygen figure next to its own test conditions; it explains the two families' oxygen pathways without turning a family name into a ranking, a comfort or safety verdict, or an overnight-wear permission, and it points into the water-content and Dk/Dk/t articles for the two axes it deliberately does not restate.

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
- Evidence states: `conflict` is amber (`--color-warn` on `--color-conflict-surface` with `--color-conflict-border`) and never borrows the rose accent; `unknown` is neutral (border, muted text on white) so a missing value never reads as an alarm.

### Product Pair Page
- Location: `compare/<id-a>-vs-<id-b>.html`, one static page per recorded pair, generated by `tools/build-pair-pages.js`. The pair order in the file name follows `COMPARE_COLUMNS`, so a pair has exactly one URL and the `?p=` query stays a tool state rather than a second address for the same content.
- Purpose: a product-versus-product search usually wants a winner. This page never gives one. It answers the narrower question the data can actually answer — which of the two products' official figures can be placed in the same table, and which cannot — so the 같은 표에 놓을 수 없는 항목 section, not the table, is the page.
- Structure: hero (`.eyebrow[data-pair-eyebrow]` + h1 + lead) → `.comparison-limits` question block closing with `.editor-note[data-pair-count]` → `[data-pair-live]` (filled by `initComparePairPage()`, with a generated `<noscript>` copy beside it) → 이 페이지가 판단하지 않는 것 (`.source-section.article-body`) → `.cta-grid`. Inside the live region: bucket summary, two `.package-card`s, the incomparable list, the three-column table, the two 확인 메모, the source list, and links to the other pair pages the two products appear in.
- Reuse only: `.comparison-limits`, `.package-card`, `.cards-grid`, `.source-section`, `.source-links`, `.cell-note`, `.table-scroll`, `.compare-table`, `.table-footnote`, `.editor-note`, `.cta-grid`. The single new CSS rule is `.pair-table.compare-table { min-inline-size: 0 }`, the same exception `.spec-summary` and `.term-table` already take, because two product columns fit the 45rem document column. No new colour, radius, spacing step or state treatment enters the system; conflict stays amber and unknown stays neutral.
- Table: the comparison table's own `compareHeadRow` / `compareRow` / `compareCell` with two columns and the full nine-field row set plus 확인 메모, so term links, product links, `headers` wiring and the 640px card transposition come along unchanged. A row that cannot be read side by side has this pair's reason appended to its `rowNote`, which the existing `aria-describedby="compare-note-<rowId>"` footnote slot already renders.
- Language: derived, not authored. Every figure, state, conflict, condition, count and reason comes from `products.js` through the pair functions in `app.js`; the only hand-written strings are the h1 tail and one lead sentence per pair in `tools/build-pair-pages.js`, and neither may state a figure. 추천 · 순위 · 점수 · 적합 never appear outside the disclaimer, and a blocked-item sentence always says why rather than which product wins.
- Anti-duplication: because each reason quotes that pair's own values, flags, conflicts and condition strings, no sentence can be reused by another pair page. `tests/static-content.test.js` asserts it directly — with both product names masked out, no two pair pages share a generated sentence.
- No-JS: the `<noscript>` copy is the same `pairBodyMarkup()` output with an `ns-` id prefix, generated rather than typed, and the test regenerates it to catch drift from the data.

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

Borders and fills define surfaces; the package card is ivory with a hairline and no shadow. The only shadows are the sticky compare-column edge and the focus halo. No decorative gradients or external imagery. The rose accent left rule is reserved for `.editorial-note` (editorial interpretation); factual callouts use a plain ivory fill.

## 8. Accessibility Constraints & Accepted Debt

- Target: WCAG 2.2 AA.
- Focus: every interactive element has a visible outline.
- Touch: buttons, menu controls, chips, and footer links are at least 44px tall.
- Footer: the medical boundary is the primary element (mauve `--color-panel` note at ink) and appears in the footer only; the brand is quiet right-aligned meta.
- Resolved debt: the accent boundary on selected states is now 4.18:1 against soft accent (was 2.29:1 with coral).
- Accepted debt: the amber conflict border is 2.09:1 against the conflict surface; the chip also carries amber text at 6.15:1 and the explicit label `공식 출처 간 충돌`, so no meaning rests on that boundary alone.
- Resolved debt: the decoder and product-list form controls are outlined in `--color-field-border` at 3.40:1 on the field fill and 3.24:1 on the page, so the boundary that identifies them as an input meets SC 1.4.11 (they were 1.24-1.30:1 before).
- Reading: article body remains single-column on mobile with no fixed canvas.
- Accepted debt: MFDS 상세 원장 직접 대조가 미완료인 두 허가번호와 공식 출처 간 충돌은 제품 데이터와 화면에 명시적으로 남긴다.
