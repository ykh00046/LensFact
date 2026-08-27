# Manus Prompt — Concept Stage Only

You are acting as a product designer and visual concept prototyper, not as a production engineer.

Read the product brief below and create **three clearly different visual/product concepts** for a Korean consumer web service named **LensFact (렌즈팩트)**.

## Important workflow

This is **concept stage only**.

1. First present three concepts.
2. For each concept, provide:
   - concept name and one-sentence idea
   - intended emotional impression
   - homepage structure
   - primary interaction
   - color and typography direction
   - key components
   - mobile behavior
   - one representative desktop mockup and one mobile mockup
   - strengths, risks and implementation complexity
3. Stop after presenting the three concepts.
4. Do not choose a winner.
5. Do not build a full site or production system until the user explicitly selects one concept.

## Product

LensFact explains the numbers printed on contact-lens packaging in plain Korean and shows where each factual value came from.

Primary Korean tagline:

> 렌즈 포장지의 숫자를 출처와 함께 해석합니다.

The MVP focuses on representative clear spherical contact lenses and these fields:

- BC
- DIA
- material
- water content
- Dk/t
- replacement schedule
- official UV marking when available

The service separates:

- MFDS license/status facts
- manufacturer official specifications
- editorial explanation
- unknown or conflicting information

## Users

Korean consumers who already wear contact lenses or want to understand a product before visiting an optical shop.

## Three concept directions

The concepts must be genuinely different. You may refine these directions, but preserve their strategic distinction:

### A. Package Decoder

The homepage centers on a contact-lens box/package label. Users tap or enter BC, DIA, water content, material and Dk/t, and annotated callouts explain each value.

### B. Evidence Lab

The experience feels like a transparent consumer evidence desk. Source chips, verification dates and side-by-side factual comparisons are visually central without looking like a hospital or enterprise dashboard.

### C. Material Atlas

The experience starts from understandable material science. It visually explains hydrogel vs silicone hydrogel, water content and oxygen metrics, then connects those concepts to official product specifications.

## Safety and legal boundaries

The design must not imply diagnosis, prescription or medical suitability.

Do not use:

- “best lens” or personal recommendation scores
- symptom diagnosis
- treatment or safety guarantees
- fake doctor or expert imagery
- medical endorsement badges
- online purchase, checkout, delivery or purchase-agency UI
- product reservation, coupons or affiliate purchase links

Use language such as:

- “공식 사양 비교”
- “선택한 조건과 일치하는 제품”
- “확인되지 않음”
- “최종 적합성·도수·피팅은 안경사 또는 안과 전문인에게 확인하세요.”

## Technical constraints for later implementation

Do not implement these in the concept stage, but keep the eventual handoff compatible with them:

- static prototype data only
- no database
- no authentication
- no CMS
- no analytics
- no AdSense
- no paid APIs
- no external backend
- minimal dependencies
- mobile-first responsive layout
- Korean-first typography

## Visual constraints

- Trustworthy but not hospital-like
- Scientific but easy to understand
- Avoid generic blue-gradient AI dashboard aesthetics
- Avoid copying any existing lens brand or website
- Use only clearly licensed placeholder assets or original abstract graphics
- Make the package numbers and evidence trail visually memorable

## Handoff requirement after a concept is selected

Only after explicit selection, create a static prototype and provide:

- full source code
- `DESIGN.md` describing colors, typography, spacing, components and responsive rules
- `HANDOFF.md` describing how another engineering agent can run and continue the project

Do not request or use access to Google, GitHub, Cloudflare, AdSense or any production account. Do not deploy anything.

---

The authoritative product brief is available separately as `MVP_BRIEF.md`. If any ambiguity exists, prefer conservative informational UX over recommendation or commerce.
