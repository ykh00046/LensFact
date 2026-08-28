# 검토 체크리스트 — 바이오트루 원데이® (Biotrue® ONEday)

검증일: 2026-08-28 · 검증자: 자동 수집 · 근거 원문: `EVIDENCE.md` · 편입 후보: `products-entry.js`
`site/assets/data/products.js`는 이 단계에서 **수정하지 않았다.**

## 1. 한국 유통사 법인명 — 확정

- **`(주)바슈롬코리아`** (업체구분 `수입업`) — MFDS 의료기기 UDI 원장 표기 원문.
- MFDS 업체명 조회 결과: `바슈롬` / `바슈롬코리아` / `(주)바슈롬코리아` = 각각 **30,826건**,
  `바슈롬코리아(주)` = **0건**, `한국바슈롬` = **0건**.
- `docs/PRODUCT_CANDIDATES_20.md` 표 A의 `바슈롬코리아(법인명 확인 필요)`와
  `미해결 사항 1`(J&J·Bausch·Menicon 법인명 미확정) 중 **Bausch 항목이 해소**된다.
- 한국 브랜드 페이지 하단 상호는 `바슈롬코리아`(`(주)` 없음)다. 번호·신원은 같고 표기만 다르다.

## 2. 허가번호

- **`수허 13-584 호`** — 원문 그대로. 앞 `수허`, 공백, `13-584`, 공백, `호`.
- 출처: MFDS 의료기기 UDI 표준코드 조회 (2026-08-28)
  - 조회조건 A: `bplcNm=바슈롬` + `modelnm=Biotrue` → **2,933건** 전수 집계, distinct 3건 중 구면 **189건**
  - 조회조건 B: `itemPermitNo=수허 13-584 호` → **378행**, distinct UDI-DI **189**, distinct 신원 **2건**(모델명만 다름)
  - 업체 제품 명칭 원문: `바이오트루 원데이 렌즈, 수분 렌즈, 하이퍼겔 렌즈`
  - 소분류 `매일착용소프트콘택트렌즈` · 등급 `2` · 포장내수량 `5` / `30` / `90`
- 한국 브랜드 페이지의 `의료기기판매신고번호 : 제 2009-3220033-00028호`는 **판매업 신고번호**다. 허가 필드에 넣지 않았다.

### ⚠ 검색 함정 (다음 바슈롬 제품 검증 때 반드시 재사용할 것)

1. **모델명 조회는 대소문자를 구분한다.** `BioTrue` · `biotrue` · `BIOTRUE` · `Oneday`는 전부 **0건**이다.
   등록 문자열은 정확히 `Biotrue ONEday`다.
2. **원장 모델명에 ® 기호가 없다.** `Biotrue® ONEday`로 조회하면 **0건**이다.
   아큐브 모이스트는 반대로 ®가 **있어야** 구면이 나왔다(`1-Day ACUVUE® MOIST®`). **제조사마다 반대다.**
3. **`for` / `For` 대소문자까지 다르다.** `Biotrue ONEday for Presbyopia` = 0건, `For Presbyopia` = 124건.
4. **한 UDI-DI에 모델명이 2개 등록돼 있다** — `Biotrue ONEday`와 `nesofilcon A`.
   그래서 허가번호 단독 조회 건수(378)가 실제 품목 수(189)의 **정확히 2배**다.
   건수를 품목 수로 오해하지 말 것. `modelnm=Biotrue`와 `modelnm=nesofilcon`이 같은 2,933건을 반환하는 이유도 이것이다.
5. **UI가 결과를 늦게 그린다.** 허가번호 조회 AJAX에 **7.3초**가 걸린다. 클릭 직후 DOM을 읽으면
   초기 문자열 `총0건이 조회되었습니다.`를 읽는다. 결과가 그려진 뒤의 문자열은 `총 378건이 조회됐습니다.`로
   **문장 자체가 다르다**(`조회되었습니다` vs `조회됐습니다`). 0건 판정 전에 반드시 렌더링 완료를 확인할 것.

계열별 허가번호가 **모두 다르다**:

| 변형 | 등록 모델명 | 허가번호 | 행 수 |
| --- | --- | --- | --- |
| 구면 (본 검증 대상) | `Biotrue ONEday` | `수허 13-584 호` | 189 |
| 난시용 | `Biotrue ONEday For Astigmatism` | `수허 16-386 호` | 2,620 |
| 멀티포컬 | `Biotrue ONEday For Presbyopia` | `수허 16-17 호` | 124 |

## 3. 9개 필드 상태

| 필드 | 상태 | 값 | 근거 계열 |
| --- | --- | --- | --- |
| bc | verified | `8.6 mm` | 미국 공식 사양 3종만 |
| dia | verified | `14.2 mm` | 미국 공식 사양 3종만 |
| water | verified | `78%` | 미국 공식 사양 3종만 (측정 조건: 멸균 식염수 침지 중량 기준) |
| material | verified | `nesofilcon A` | **MFDS 한국 원장** + 미국 공식 사양 |
| dkt | **conflict** | `42` | 같은 숫자를 Dk / Dk/t / transmissibility로 부르는 미국 공식 자료 3종 |
| thickness | verified | `0.10 mm` (-3.00D) | 미국 ECP 페이지 + 파라미터 PDF (PI는 범위·다른 도수로 표기) |
| replacement | verified | `1일` | 미국 PI/FG + 환자용 소책자 + 한국 브랜드 페이지 분류 |
| permit | verified | `수허 13-584 호` | MFDS UDI |
| uv | verified (한국 표기 미확인) | `UVB 투과율 5% 미만 / UVA 투과율 50% 미만` | 미국 PI/FG만 수치를 인쇄 |

- `conflict` 필드: **1건 (dkt)**
- `unknown` 필드: **0건**

## 4. 한 번 더 봐야 할 것

### 4-1. Dk / Dk/t 라벨 충돌 — 이번 검증의 핵심 발견 (필수 판단)

같은 제조사의 공식 문서 3종이 **숫자 42를 서로 다른 물리량으로 부른다.**

| 출처 | 인쇄된 라벨 | 인쇄된 값 |
| --- | --- | --- |
| Package Insert / Fitting Guide (Rev. 2019-11) | `Oxygen Permeability (Dk)` | `42 x 10–11[...] @ 35°C (Polarographic Method)` |
| Contact Lens Parameters PDF (BOD.0003.USA.23) | `OXYGEN PERMEABILITY (Dk/t)` | `42 @ -3.00D` |
| 미국 ECP 제품 페이지 (MTB.0263.USA.22) | `OXYGEN TRANSMISSIBILITY (Dk/t)` | `42 @ -3.00D` |

- Dk와 Dk/t는 두께 `t`로 나눈 관계이므로 **같은 숫자일 수 없다.** 파라미터 PDF의 라벨은 그 한 줄 안에서 이미 모순이다
  (`PERMEABILITY`는 Dk, 괄호는 `Dk/t`).
- **판단하지 않았고 환산하지도 않았다.** 세 원문을 `conflicts`에 병기하고 `state: "conflict"`로 뒀다.
- 비교표에서 이 제품의 `42`를 다른 제품의 Dk/t(예: 데일리스 토탈원 156, 아큐브 모이스트 25.5)와
  **같은 열에 나란히 놓으면 독자를 오도할 위험이 크다.** 화면 표기 방식은 운영자 판단이 필요하다.
- 이 사례는 `Dk인지 Dk/t인지, 시험도수와 두께 조건이 있는지`를 확인하라는 함수율 글의 체크리스트를
  **실제 제품으로 예시할 수 있는 첫 사례**다.

### 4-2. 중심두께 — `verified`로 둘지 판단 필요

- `0.10 mm @ -3.00D`는 ECP 페이지와 파라미터 PDF에서 일치한다.
- 같은 제조사 PI/FG는 두께를 **단일값이 아니라 범위**(`0.05mm to 0.75mm (varies with power)`)로 적고,
  자외선 프로파일 각주에서는 **다른 시험 도수**(`Nominal Center Thickness 0.1 mm (-1.25D)`)를 쓴다.
- 서로 모순되는 값은 아니지만(조건이 다름), 보수적으로 `conflict`로 내릴지 현 `verified` + caution을 유지할지는
  운영자 판단 사항이다. 현재는 세 원문을 모두 `sources`에 남겨 두었다.

### 4-3. 한국 공식 수치 출처가 **전혀 없다**

- 한국 브랜드 페이지(`bauschlomb.co.kr/cleardaily/?idx=99`)에 BC·DIA·함수율·Dk·중심두께·UV·허가번호
  **문자열이 하나도 없다.** `상세정보`는 이미지 1장(대체 텍스트 없음) 전용이다.
- 한국 제품 목록·기업 사이트(`bausch.kr`)에도 없다. `bausch.kr`에는 `바이오트루`·`Biotrue`·`nesofilcon`이 **0건**이다.
- 한국어 IFU/사양서 PDF를 찾지 못했다.
- `www.bausch.co.kr`은 2026-08-28 기준 **TLS 인증서 만료**(`SEC_E_CERT_EXPIRED`)로 접속 불가.
  `PRODUCT_CANDIDATES_20.md`는 `ERR_CERT_AUTHORITY_INVALID`로 기록했으나 오늘 관측된 오류는 만료다. 어느 쪽이든 출처로 쓰지 않는다.
- 화면 표기 시 **`한국 공식 자료에서 확인되지 않아 미국 공식 자료를 사용함`이 반드시 보여야 한다.**
- 예외: **재질명 `nesofilcon A`만은 한국 MFDS 허가 원장에 모델명으로 직접 등재**돼 있다.
  이 제품에서 한국 공식 자료가 뒷받침하는 유일한 물성 표기다.

### 4-4. 미국 자료를 한국 제품 사양으로 쓰는 근거의 한계

- ECP 페이지에는 `All information and materials on this site pertain to the U.S. only, unless otherwise indicated.`가 명시돼 있다.
- 한국 허가 제품과 미국 제품의 사양이 같다는 **공식 진술은 확인하지 못했다.**
  연결 근거는 (a) 한국 원장 모델명 `nesofilcon A` = 미국 재질명, (b) 한국 원장 모델명 `Biotrue ONEday` = 미국 제품명 두 가지뿐이다.
- 한국 브랜드 페이지는 이 제품을 **`근시용`으로만** 표기한다. 미국 사양의 도수 범위(`+6.00D to -12.00D`)에
  플러스 도수가 포함되지만 **한국 공급 여부는 확인하지 못했다.** `type`을 `근시·원시용`으로 둘지 운영자 판단이 필요하다.

### 4-5. UV — 투과율이지 차단율이 아니다

- 값 `UVB 투과율 5% 미만 / UVA 투과율 50% 미만`은 PI/FG 원문
  (`The transmittance characteristics are less than 5% in the UVB range of 280nm to 315nm and less than 50% in the UVA range of 316nm to 380nm.`)이다.
- **`95% 이상 차단`으로 바꿔 적으면 유도**이므로 하지 않았다. 다른 제품(아큐브 계열)은 `Blocks ~97% of UVB`처럼
  **차단율**로 인쇄한다. **비교표에서 두 표기를 같은 축에 놓으면 안 된다.**
- 미국 파라미터 표·ECP 페이지의 `UV PROTECTION` 칸은 **체크 표시 이미지**(`check-mark.svg`, `alt=""`)이고 수치가 없다.
- 한국 자료에는 UV 표기 자체가 없다. `없음`으로 단정하지 않았다.

### 4-6. 하이드로겔 축 — 콘텐츠 연결

- 이 제품은 `nesofilcon A` 하이드로겔이며 함수율 **78%**로 현재 검증된 제품 중 가장 높다.
  반면 산소 관련 값은 `42`(라벨 충돌)로 낮은 축에 있다.
- 원데이 아큐브 모이스트(`etafilcon A`, 58%, Dk/t 25.5)와 함께 놓으면 **하이드로겔 내부 차이**를,
  실리콘 하이드로겔 제품들과 놓으면 **함수율↔산소 전달의 축이 재질 계열에 따라 다르다**는 논지를
  한 표 안에서 보여줄 수 있다. `함수율이 높으면 더 촉촉한 렌즈일까요?` 글의 대조군으로 적합하다.
- 다만 4-1의 라벨 충돌 때문에 **`42`를 다른 제품의 Dk/t와 나란히 비교하는 서술은 쓰면 안 된다.**

## 5. 가져온 출처와 상태

| 출처 | URL | 상태 |
| --- | --- | --- |
| MFDS 의료기기 UDI 표준코드 조회 | emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do | 조회 정상. 화면 결과 + 동일 세션 AJAX 응답 양쪽 확인 |
| 한국 브랜드 제품 페이지 | bauschlomb.co.kr/cleardaily/?idx=99 | HTTP 200 · 423,408 bytes. curl + 브라우저 렌더링 양쪽. **수치 0건** |
| 한국 브랜드 제품 목록 | bauschlomb.co.kr/cleardaily | HTTP 200 · 445,911 bytes. 데일리 투명렌즈 7건에 대상 제품 등재 |
| 한국 기업 사이트 | bausch.kr/ko-kr/our-products/contact-lenses/ | HTTP 200 · 100,946 bytes. **Biotrue 관련 0건** |
| 미국 ECP 제품 페이지 | ecp.bauschcontactlenses.com/products/biotrue-oneday/ | HTTP 200 · 50,070 bytes. 파라미터 표 전문 확보 |
| Contact Lens Parameters PDF | ecp.bauschcontactlenses.com/siteassets/pdf/biotrue-oneday-contact-lens-parameters.pdf | HTTP 200 · 5,589,965 bytes · 1쪽. 텍스트 레이어 정상 |
| Package Insert / Fitting Guide PDF | pi.bausch.com/…/biotrue-one-day-pifg53.pdf | HTTP 200 · 120,189 bytes · 2쪽. **수치의 1차 근거** |
| Patient Information Booklet PDF | pi.bausch.com/…/biotrue-one-day-pib.pdf | HTTP 200 · 1,794,423 bytes · 12쪽. 수치 없음 |
| www.bausch.co.kr | — | **차단.** TLS 인증서 만료(`SEC_E_CERT_EXPIRED`). 출처로 사용하지 않음 |
| 한국어 IFU/사양서 | — | **찾지 못함** |

- URL 함정: `biotrue-oneday-pib.pdf`(하이픈 없음)는 404로 리다이렉트된다. 실제 경로는 **`biotrue-one-day-…`**(one-day)다.
- ECP 페이지가 링크하는 `biotrue-one-day-pib63.pdf`는 `biotrue-one-day-pib.pdf`와 **md5 동일**(`fc6bec24ef9df126adc930133ef37420`)이다.

## 6. 편입 시 손볼 것

- `products-entry.js`는 지시에 따라 `conflicts`가 실제로 있는 필드(`dkt`)에만 키를 넣고 나머지에서는 생략했다.
  기존 `products.js`의 렌더링 관행과 일치한다.
- `slug`·`aliases`를 넣었다. 기존 세 제품에도 있으므로 형태는 맞다.
- `packageSpecs`의 네 번째 칸을 `42 / Dk · Dk-t 라벨 충돌`로 두었다. 포장 카드에 충돌 상태를 그대로 보이게 하려는 의도이며,
  카드 라벨 길이가 다른 제품과 다르므로 화면에서 확인이 필요하다.
- 비교표에 이 제품을 넣으면 교체주기 축은 1일·1개월 그대로이고, 재질 축에 하이드로겔이 하나 더 늘어난다.
  Dk/t 열에는 **`42`가 Dk일 수도 있다는 표시가 값 옆에 반드시 붙어야 한다.**
