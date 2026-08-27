# Claude Design Prompt — LensFact Concept Board

You are an expert product and visual designer. Create a **high-fidelity interactive concept board** for a Korean consumer web service named **LensFact (렌즈팩트)**.

This is a **visual concept exploration only**, not production implementation.

## Deliverable

Create one polished interactive artifact that contains **three genuinely different design concepts**. Each concept must include:

- a representative desktop homepage at 1440px
- a representative mobile homepage at 390px
- realistic Korean interface copy
- the primary interaction in a visible state
- a compact design rationale
- palette, typography and component direction
- strengths, risks and implementation complexity

Provide a clear in-artifact switcher for Concept A/B/C and Desktop/Mobile. Do not make the three concepts mere color variations.

Stop after presenting the concept board. Do not choose a winner and do not build a production site.

## Product definition

**LensFact explains the numbers printed on contact-lens packaging in plain Korean and shows the source and verification date for each factual value.**

Primary tagline:

> 렌즈 포장지의 숫자를 출처와 함께 해석합니다.

The first MVP covers representative clear spherical contact lenses and these fields:

- BC
- DIA
- material
- water content
- Dk/t
- replacement schedule
- official UV marking when available

The service must visually distinguish:

1. 식약처 허가·상태 정보
2. 제조사 공식 사양
3. 렌즈팩트 편집 해설
4. 확인되지 않았거나 출처가 충돌하는 값

## Target user

Korean consumers who already wear contact lenses or want to understand a product before visiting an optical shop.

They are not looking for a medical diagnosis. They want to understand confusing package numbers and compare official specifications without marketing exaggeration.

## Required concept directions

### Concept A — Package Decoder

Primary surface: **Explore / Inspect**.

Build the composition around a contact-lens package label. The user taps or enters BC, DIA, water content, material and Dk/t. Annotated callouts explain each number. The label itself should be the visual anchor, not a generic hero section.

Desired impression: immediate, tactile, understandable, memorable.

### Concept B — Evidence Desk

Primary surface: **Compare**.

Design a transparent consumer evidence surface where two products can be compared using aligned official facts. Source chips, verification dates, unknown values and conflicting sources should be visually central without resembling a hospital screen or enterprise dashboard.

Desired impression: neutral, rigorous, calm, trustworthy.

### Concept C — Material Atlas

Primary surface: **Decide / Learn**.

Start from understandable material science. Explain hydrogel vs silicone hydrogel, water content and oxygen metrics through restrained visual teaching, then connect those concepts to official product specifications.

Desired impression: editorial, intelligent, approachable, worth exploring.

## Required Korean UI examples

Use these phrases where appropriate:

- `공식 사양 비교`
- `포장지 숫자 해석하기`
- `식약처 허가정보`
- `제조사 공식 사양`
- `2026.08.27 확인`
- `확인되지 않음`
- `출처 간 값이 다릅니다`
- `선택한 조건과 일치하는 제품`
- `최종 적합성·도수·피팅은 안경사 또는 안과 전문인에게 확인하세요.`

Use realistic sample values only as clearly labeled prototype data. Do not invent efficacy, safety, popularity or medical claims.

## Safety and legal boundaries

The artifact must not imply diagnosis, prescription or medical suitability.

Do not include:

- “best lens” rankings
- personal suitability scores
- symptom diagnosis or disease questionnaires
- treatment or safety guarantees
- fake doctors, white coats or expert endorsement badges
- online checkout, delivery, purchase agency or overseas-purchase UI
- product reservation, coupons or affiliate purchase links
- “건조한 눈에 최고”, “착용감 1위”, “당신에게 맞는 렌즈”

This is an independent information and evidence service, not a store.

## Visual direction

- Korean-first typography with deliberate numeric treatment
- mobile-first behavior
- trustworthy but not hospital-like
- scientific but understandable to non-specialists
- one restrained accent color per concept
- package numbers, units, sources and verification dates should form the visual identity
- use original abstract geometry or clearly safe placeholders only
- do not copy the visual identity of any lens manufacturer, retailer or medical institution

## Anti-slop constraints

Avoid:

- generic blue/violet AI gradients
- glassmorphism
- centered hero plus three equal feature cards
- fake metrics and decorative charts
- icon grids
- oversized rounded rectangles with no hierarchy
- Inter as an automatic default
- stock photography
- excessive medical blue
- dashboards full of invented numbers

Before designing each concept, commit to its specified primary surface. Composition must follow the surface rather than reuse a landing-page template.

After completing the board, run a short self-audit for these ten AI-design tells and refine before presenting:

1. tech gradient
2. generic indigo/violet accent
3. equal-weight feature tiles
4. decorative accent rails
5. unearned blur
6. monument stats
7. icon toppers
8. everything centered
9. default typography
10. wrong surface composition

Do not present a concept while compositional problems 3, 8 or 10 remain.

## Technical limits for this concept artifact

- one self-contained artifact if possible
- no database
- no authentication
- no CMS
- no analytics
- no AdSense
- no paid APIs
- no external backend
- no production deployment
- no Google, GitHub, Cloudflare or AdSense account access
- all interaction uses static prototype data
- respect `prefers-reduced-motion`
- mobile controls should have at least 44px hit targets

## What happens later

After the user explicitly selects one concept, a separate task will request a static prototype and the following handoff files:

- full source code
- `DESIGN.md`
- `HANDOFF.md`

Do not create those production handoff files now. The only goal of this task is to make the three directions concrete enough for the user to choose.
