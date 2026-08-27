# LensFact MVP Brief

## Product statement

**LensFact translates the numbers printed on a contact-lens package into plain Korean, with source provenance and clear limits.**

한국어 표현:

> 렌즈 포장지의 숫자를 출처와 함께 해석합니다.

## Target user

콘택트렌즈를 이미 사용하거나 안경원 방문 전에 제품 사양을 이해하려는 한국 소비자.

## Problem

- BC, DIA, 함수율, 재질, Dk/t, 교체주기의 의미가 서로 다른 사이트에 흩어져 있다.
- 제조사·판매처 설명은 자사 제품 중심이고 비교 기준이 통일되지 않는다.
- 함수율이나 산소전달률 같은 단일 수치가 착용감·적합성으로 과도하게 일반화된다.
- 한국 판매명, 글로벌 제품명, 식약처 허가명·모델이 1:1로 대응하지 않는다.

## MVP scope

### Included

1. **Package/spec decoder**
   - BC
   - DIA
   - material
   - water content
   - Dk/t
   - replacement schedule
   - UV marking when officially published

2. **Official-spec comparison**
   - representative 20 clear spherical lenses
   - facts only
   - source URL and `verifiedAt`
   - unknown values shown as `확인되지 않음`

3. **Evidence layer**
   - MFDS license/status
   - manufacturer official specification
   - editorial explanation kept separate

4. **Ten myth checks**
   - “Higher water content always means more moisture.”
   - “Silicone hydrogel is always more comfortable.”
   - “The same BC means the same fit.”
   - “Dk and Dk/t are the same.”
   - “One-day lenses can safely be reused.”

### Excluded

- diagnosis, prescription, symptom assessment
- personal suitability scoring
- “best lens” ranking
- treatment or safety guarantees
- online purchase, payment, delivery, purchase agency
- product reservation, coupons, affiliate purchase links
- user accounts, database, authentication, CMS
- analytics, AdSense, paid APIs, external backend
- color-lens virtual try-on in phase 1

## Information architecture

- Home / decoder
- Compare official specs
- How to read a package
- Lens myths
- Evidence and methodology
- About / editorial policy / medical boundary

## Required trust signals

- Every factual value shows source type and verification date.
- Distinguish `Dk` from `Dk/t` and preserve test-power or measurement qualifiers.
- Distinguish bulk/core/surface water content where applicable.
- Display conflicts instead of silently overwriting them.
- Use “선택한 조건과 일치” rather than “추천”.
- Prominent boundary: final fit, power and clinical suitability require an optician or eye-care professional.

## Visual direction

- Trustworthy but not hospital-like
- Scientific but understandable to consumers
- Korean-first typography
- Mobile-first
- No blue-gradient AI dashboard cliché
- No fake doctor imagery, medical badges or unsupported authority cues
- Visual emphasis on a package label, annotated numbers, evidence chips and comparison cards

## Success criteria for concept stage

Each concept must make the following obvious within five seconds:

1. This site explains lens-package numbers.
2. It uses sources rather than reviews or sponsorship.
3. It does not prescribe or sell lenses.
4. The primary action is entering or selecting specifications.
