# 감사 결과 — 파일럿 3제품 필드 × 출처 재현 판정 (2026-08-28)

감사일: 2026-08-28
대상 파일: `site/assets/data/products.js` (읽기 전용 — 이 감사는 파일을 수정하지 않았다)
근거 원문: 같은 폴더 `EVIDENCE.md`

## 판정 기준

| 판정 | 의미 |
| --- | --- |
| **REPRODUCED** | `raw`가 가리키는 값이 출처 원문에 그대로 있다. 라벨 대소문자·단위 위치 같은 서식 차이만 있다. |
| **REPRODUCED-WITH-DIFFERENCE** | 값은 있으나 `raw` 문자열이 원문과 다르게 적혀 있다(순서·수식어·공백·표기 축약 등). 양쪽 원문을 모두 기록한다. |
| **NOT FOUND** | 그 출처에서 그 값을 찾지 못했다. 무엇을 검토했는지 명시한다. |
| **BLOCKED** | 출처에 접근할 수 없었다. |

## 총계

- REPRODUCED **18**
- REPRODUCED-WITH-DIFFERENCE **10**
- NOT FOUND **4**
- 그중 BLOCKED 1건 — PubMed 26543349(Europe PMC로 대체 확인해 DIFFERENCE로 판정)
- 판정 제외 1건 — `biofinity.thickness` (별도 에이전트 처리 중)

---

## 1. 판정 표 — 제품 × 필드 × 출처

### 1-1. `acuvue-oasys-1-day` — 아큐브 오아시스 원데이®

| 필드 | products.js 값 | 출처 (`raw`) | 판정 | 오늘 확인된 원문 |
| --- | --- | --- | --- | --- |
| `bc` | `8.5 mm / 9.0 mm` | ACUVUE Tech Spec Guide (`Base Curve 8.5 mm, 9.0 mm`) | **DIFFERENCE** | 1쪽 `Parameters BC (mm) / Dia (mm)` 열에 `8.5/14.3` · `9.0/14.3` 결합 표기. `Base Curve 8.5 mm` 단독 문자열 없음 |
| `dia` | `14.3 mm` | ACUVUE Tech Spec Guide (`Diameter 14.3 mm`) | **DIFFERENCE** | 위와 동일. `14.3`은 BC와 붙은 `8.5/14.3` · `9.0/14.3`으로만 인쇄 |
| `water` | `38%` | ACUVUE Tech Spec Guide (`Water Content 38%`) | **REPRODUCED** | 라벨 `Water Content`(x34, y292.8) → 값 `38%`(x608.6, y292.9) |
| `material` | `senofilcon A` | 한국 공식 제품 페이지 (`senofilcon A · 실리콘 하이드로겔`) | **NOT FOUND** | acuvue.co.kr 제품 페이지: `senofilcon` 0 · `세노필콘` 0 · `실리콘` 0 (curl HTML·브라우저 렌더링 양쪽). 한국 IFU에도 0건. 실제 근거는 Tech Spec Guide `Lens Material: senofilcon A` |
| `dkt` | `121 × 10⁻⁹` | ACUVUE Tech Spec Guide (`Dk/t 121 × 10⁻⁹ at -3.00D`) | **REPRODUCED** | `Dk/t Value1 (edge corrected)` → `121 x 10-9 (-3.00D)`. 4쪽 각주 1이 분극법·boundary/edge corrected·35℃ 조건을 명시 |
| `thickness` | `0.085 mm` | ACUVUE Tech Spec Guide (`Center Thickness 0.085 mm`) | **REPRODUCED** | 라벨 `Center Thickness (mm @ -3.00D)` → 값 `0.085` |
| `replacement` | `1일` | 한국 공식 제품 페이지 (`1일 교체`) | **NOT FOUND** | 제품 페이지에 `1일 교체` 0건(curl·브라우저 동일). 있는 것은 `1일 착용`. 한국 IFU에 `착용한 렌즈는 1회(1일) 착용 후 교체하여야 한다`가 있음 |
| `permit` | `수허 16-499 호` | 한국 IFU (`수허 16-499 호`) | **DIFFERENCE** | IFU 원문 `[수입허가번호] 수허16-499 호` — `수허`와 숫자 사이 공백 없음. MFDS 원장은 `수허 16-499 호`(공백 있음) |
| `uv` (KR) | `UVB 99% 이상 / UVA 90%` | 한국 공식 제품 페이지 | **DIFFERENCE** | `자외선 차단 1등급 - UVA 90%, UVB 99% 이상 차단#` + 각주 `# UVA 316~380nm, UVB 280~315nm 범위에서 측정` |
| `uv` (글로벌) | `UVB >99.9% / UVA 96%` | ACUVUE Tech Spec Guide | **DIFFERENCE** | `Blocks >99.9% of UVB & 96% of UVA` (`Approximate UV Blocking*†` 행) |

소계: REPRODUCED 3 · DIFFERENCE 5 · NOT FOUND 2

**MFDS 대조(신규):** `itemPermitNo=수허 16-499 호` → **497건**, distinct 신원 1건
`(주)한국존슨앤드존슨비전 | 매일착용소프트콘택트렌즈 | 등급 2 | 수허 16-499 호 | ACUVUE OASYS Brand Contact Lenses with HydraLuxe | …(아큐브 오아시스 원데이)`.
업체 제품 명칭이 한국 IFU 1쪽 인쇄 문자열과 완전히 일치한다.
`modelnm=ACUVUE OASYS Brand`(5,824건) 전수 집계에서 오아시스 계열은 `수허 10-43 호`(난시) · `수허 08-938 호`(2주) · `수허 16-499 호`(원데이)로 분리되며, 원데이 구면은 `수허 16-499 호` 하나뿐이다.
→ 허가번호 근거를 IFU(표기 불일치)에서 MFDS 원장(표기 일치)으로 바꿀 수 있다.

### 1-2. `dailies-total1` — 데일리스 토탈원®

| 필드 | products.js 값 | 출처 (`raw`) | 판정 | 오늘 확인된 원문 |
| --- | --- | --- | --- | --- |
| `bc` | `8.5 mm` | Alcon US 전문가 사양 (`Base Curve 8.5 mm`) | **REPRODUCED** | `BASE CURVE (mm)` → `8.5` |
| `dia` | `14.1 mm` | Alcon US 전문가 사양 (`Diameter 14.1 mm`) | **REPRODUCED** | `DIAMETER (mm)` → `14.1` |
| `water` #1 | 코어 33% | Alcon US (`Core water content 33%`) | **REPRODUCED** | `CORE WATER CONTENT` → `33%` |
| `water` #2 | 표면 | Alcon Japan (`표면 함수율 80% 이상 · 표면 약 100% 표기`) | **DIFFERENCE** | 일본어 원문 `含水率 〜100%` · `レンズ最表面の含水率はほぼ100％` · `※レンズコアの含水率は33％、レンズ表面の含水率は80％以上です。なおレンズコア・表面の含水率の測定方法は、レンズ全体の含水率の測定方法とは異なります。` — `raw`는 이 원문의 한국어 요약 |
| `water` #3 | 문헌 | PubMed 26543349 (`표면 함수 특성 측정 연구`) | **DIFFERENCE**(직접 접근 BLOCKED) | pubmed 403/203 차단. Europe PMC REST 확인 결과 실제 제목은 `Evaluation of surface water characteristics of novel daily disposable contact lens materials, using refractive index shifts after wear.` (Clin Ophthalmol 2015, doi 10.2147/opth.s90376). products.js의 `document`는 축약형 |
| `material` | `delefilcon A` | Alcon US (`delefilcon A`) | **REPRODUCED** | `MATERIAL` → `delefilcon A` |
| `dkt` | `156` | Alcon US (`Dk/t 156 at -3.00D`) | **REPRODUCED** | `Dk/t` → `156 @ -3.00D`. 단위는 일본 페이지 각주 ※3 `156×10-9(cm/sec)・(mLO2/mL×mmHg)` |
| `thickness` | `0.09 mm` | Alcon US (`Center Thickness 0.09 mm`) | **REPRODUCED** | `CENTER THICKNESS (@ -3.00D, mm)` → `0.09` |
| `replacement` | `1일` | 한국 공식 제품 페이지 (`1일 교체`) | **NOT FOUND** | total.myalcon.com/kr에 `1일 교체` 0건(curl·브라우저 동일). 있는 것은 `관리가 필요 없는 편안한 1회용 렌즈` · `매일착용소프트콘택트렌즈`. Alcon US 전문가 페이지에는 교체주기 행 자체가 없다(`Replacement`/`WEARING` 0건) |
| `permit` | `수허 13-112 호` | MFDS UDI (`수허 13-112 호`) | **REPRODUCED** | 아래 재실행 표 참조 |
| `uv` | `공식 UV 표기 확인되지 않음` | Alcon US (`검토 범위에서 UV 표기 확인되지 않음`) | **REPRODUCED** | 2026-08-28 재확인: US 전문가 페이지 제품 UV 표기 0건. 일본·한국 페이지에도 0건 |

소계: REPRODUCED 8 · DIFFERENCE 2 · NOT FOUND 1

**MFDS 재실행 결과(2026-08-27 캡처와 대조):**

| 항목 | 2026-08-27 JSON | 2026-08-28 재실행 | 결과 |
| --- | --- | --- | --- |
| `bplcNm=한국알콘` 조회 규모 | 46,382 | 46,382 | 일치 |
| `modelnm=Dailies Total1` + `prdtNmCn=워터렌즈` 매칭 | 105 | 105 | 일치 |
| distinct 신원 | `한국알콘(주) / 매일착용소프트콘택트렌즈 / 수허 13-112 호 / Dailies Total1 / 워터렌즈` | 동일 | 일치 |
| distinct UDI-DI | 105 | 105 | 일치 |
| 포장내수량 | 30:35 · 5:35 · 90:35 | 30:35 · 5:35 · 90:35 | 일치 |
| 허가번호 단독 조회 `수허 13-112 호` | (미기록) | 105건, 동일 신원 | 신규 |

→ 건수·허가번호 모두 그대로 재현된다. 이 필드는 정정이 필요 없다.

### 1-3. `biofinity` — 바이오피니티®

| 필드 | products.js 값 | 출처 (`raw`) | 판정 | 오늘 확인된 원문 |
| --- | --- | --- | --- | --- |
| `bc` | `8.6 mm` | CVK 제품 사양서 2023 (`BC 8.6 mm`) | **REPRODUCED** | 3쪽 구면 행 `내면곡률반경 Base Curve (mm)` → `8.6` (x447.1, y202.3) |
| `dia` | `14.0 mm` | CVK 제품 사양서 2023 (`DIA 14.0 mm`) | **REPRODUCED** | `렌즈 직경 Diameter (mm)` → `14.0` (x502.9, y202.3). 참고: 미국 전문가 페이지는 `14`로 인쇄 |
| `water` | `48%` | CVK 제품 사양서 2023 (`함수율 48%`) | **REPRODUCED** | `함수율 Water content (%)` → `48`. 한국 제품 페이지·목록 각주 `1．48%／2．170`, 미국 페이지 `comfilcon A / 48%`로도 일치 |
| `material` | `comfilcon A` | CVK 제품 사양서 2023 (`comfilcon A · 실리콘 하이드로겔`) | **REPRODUCED** | `렌즈 재질 Material USAN` 칸에 `실리콘 하이드로겔`(y199.0) + `comfilcon A`(y205.8) |
| `dkt` #1 | `170` | 한국 제품 페이지 (`Dk/t 170`) | **DIFFERENCE** | 원문은 `＊（별첨 1）바이오피니티®의［1．함수율과 2．산소 투과율（Dk/t）］은 아래와 같습니다． - 1．48%／2．170` — `Dk/t 170` 문자열 자체는 없고 각주 형식 |
| `dkt` #2 | `171` | CVK 제품 사양서 2023 (`Dk/t 171`) | **REPRODUCED** | `산소 투과율 Dk/t †` → `171`. 각주 † `(@-3.00DS) x 10-9 [(cm/sec) x (ml O2)/(ml x mmHg)]` |
| `dkt` #3 | `171` | CooperVision US 전문가 페이지 (`Dk/t 171`) | **DIFFERENCE** | 원문 `Oxygen transmissibility  171 Dk/t (at -3.00D)` — 어순이 다름 |
| `thickness` | `0.08 mm` | — | **판정 제외** | 별도 에이전트 처리 중. 사실만 기록: 미국 전문가 페이지 오늘 `thickness` 0건 · `0.08` 0건, CVK 사양서에는 두께 열 자체가 없음 |
| `replacement` | `30일` | 한국 제품 페이지 (`30일 교체`) | **NOT FOUND** | coopervision.co.kr/contact-lenses/biofinity에 `30일` 0건(curl·브라우저 동일). 있는 것은 `교체 주기 / 매월`. CVK 사양서 구면 행에는 `30 days replacement` · `연속착용소프트렌즈` · `Extended wear 14 days/13 nights;`, 미국 페이지에는 `Replacement schedule Monthly` |
| `permit` | `수허 08-131` | 한국 전체 제품 목록 (`수허 08-131`) | **REPRODUCED** | 각주 원문 `… 수허 08-131 바이오피니티 & 바이오피니티 XR …` — `호` 없이 그대로 |
| `uv` #1 | `UV 기술 적용 주장` | 한국 제품 페이지 | **DIFFERENCE** | 원문 `UV 차단 기술이 적용되어 , 자외선으로부터 눈을 보호합니다 .` — `raw`는 요약 서술 |
| `uv` #2 | `UV: No` | CVK 제품 사양서 2023 | **REPRODUCED** | `자외선 투과율 UV Blocking ‡ & Class` → `No` (x734.1, y202.3). 바로 아래 XR 행도 `No`로 좌표 대조됨 |

소계: REPRODUCED 7 · DIFFERENCE 3 · NOT FOUND 1 (thickness 판정 제외)

**MFDS 대조(신규):** `itemPermitNo=수허 08-131 호` → **94건**
`쿠퍼비전코리아(주) | 수입업 | 연속착용 소프트 콘택트렌즈 | 등급 3 | 수허 08-131 호 | Biofinity(64) · Biofinity XR(30)`, 포장내수량 6.
한국 제품 목록이 `바이오피니티 & 바이오피니티 XR`을 한 허가번호로 묶은 것과 원장이 일치한다.
`modelnm=Biofinity`(4,551건) 전수 집계에서 토릭 `수허 10-1406 호` · 에너지스 `수허 17-239 호`와 분리 확인.
→ 허가번호 근거를 제품 목록 페이지(`호` 누락)에서 MFDS 원장(`수허 08-131 호`)으로 바꿀 수 있다.
→ MFDS는 이 제품을 연속착용 소프트 콘택트렌즈·등급 3으로 등록하고 있다.

### 1-4. 제품 공통

| 항목 | products.js 값 | 판정 | 근거 |
| --- | --- | --- | --- |
| `biofinity.distributor` 및 바이오피니티 출처 `organization`(총 11곳) | `쿠퍼비젼코리아(주)` | **NOT FOUND**(표기 오류) | MFDS 원장은 `쿠퍼비전코리아(주)`, 한국 공식 페이지 2종 모두 `쿠퍼비전`만 사용(`쿠퍼비젼` 0건). MFDS 업체명 조회에서 `쿠퍼비젼코리아` = 0건 |

---

## 2. 필요한 정정 — 우선순위 순

> 아래는 `site/assets/data/products.js`에 대한 지시다. 이 감사는 파일을 수정하지 않았다.
> `biofinity`의 `thickness` 필드는 다른 에이전트가 처리 중이므로 건드리지 않는다.

### C1. (최우선) `acuvue-oasys-1-day` → `material` — 출처가 값을 담고 있지 않다

문제: 현재 출처(한국 공식 제품 페이지)에 `senofilcon` 문자열이 0건이다. `verified` 상태가 근거 없이 걸려 있다.

`fields[id="material"].sources[0]` 를 다음으로 **교체**한다.

```js
{ sourceType: "제조사 기술·전문가 사양", verifiedAt: "2026-08-28", organization: "Johnson & Johnson Vision", document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)", raw: "senofilcon A", url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf", condition: "1쪽 ACUVUE® OASYS 1-Day 열 · Lens Material 행", linkNote: "인쇄물은 fi 합자로 senoﬁlcon A로 추출됨. 한국 공식 페이지·한국 IFU에는 재질명 표기 없음" }
```

같은 필드의 다른 값도 함께 바꾼다.

- `sourceSummary`: `"ACUVUE 공식 제품·기술 사양 · 2026.08.27 확인"` → `"ACUVUE 글로벌 기술 사양 · 2026.08.28 확인"`
- `flag` 추가: `"글로벌 공식 자료"`
- `caution` 추가: `"한국 공식 제품 페이지와 한국 사용설명서에는 재질명 표기가 없어 글로벌 기술 사양이 유일한 근거입니다."`
- `state`는 `verified` 유지(글로벌 공식 사양에서 원문 확인됨)

### C2. (최우선) `acuvue-oasys-1-day` → `replacement` — 인용한 원문이 페이지에 없다

문제: `raw: "1일 교체"`가 한국 제품 페이지에 0건. 페이지 표기는 `1일 착용`이다.

`fields[id="replacement"].sources[0]` 를 다음으로 **교체**한다.

```js
{ sourceType: "한국 공식 페이지·IFU", verifiedAt: "2026-08-28", organization: "(주)한국존슨앤드존슨비전", document: "아큐브 오아시스 원데이 한국 사용설명서", raw: "착용한 렌즈는 1회(1일) 착용 후 교체하여야 한다.", url: "https://acuvue.co.kr/files/patient-instruction-guides/Oasys1day_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf", condition: "다. 콘택트렌즈 사용 후 보관 및 관리 방법", linkNote: "교체주기와 착용방식은 별도 개념" }
```

한국 제품 페이지는 원문을 바로잡아 **두 번째 출처로 추가**한다.

```js
{ sourceType: "한국 공식 페이지·IFU", verifiedAt: "2026-08-28", organization: "(주)한국존슨앤드존슨비전", document: "아큐브 오아시스 원데이 공식 제품 페이지", raw: "1일 착용", url: "https://acuvue.co.kr/products/acuvue-oasys-1-day", condition: "제품 배지 표기", linkNote: "이 페이지에는 1일 교체 문자열이 없다" }
```

- `sourceSummary`: `"ACUVUE 한국 공식 제품 페이지 · 2026.08.27 확인"` → `"아큐브 오아시스 원데이 한국 사용설명서 · 2026.08.28 확인"`

### C3. (최우선) `biofinity` → `replacement` — 인용한 원문이 페이지에 없다

문제: `raw: "30일 교체"`가 한국 제품 페이지에 0건(`30일` 자체가 0건). 페이지 표기는 `교체 주기 / 매월`이다.

`fields[id="replacement"].sources[0]` 를 다음으로 **교체**한다.

```js
{ sourceType: "제조사 기술·전문가 사양", verifiedAt: "2026-08-28", organization: "쿠퍼비전코리아(주)", document: "쿠퍼비전코리아 제품 사양서 (SA09487 Rev #4 09/2023)", raw: "30 days replacement", url: "https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf", condition: "3쪽 Biofinity® 구면 행 · 착용기간 Wear Schedule & Replacement Frequency 열", linkNote: "같은 칸에 연속착용소프트렌즈 · Extended wear · 14 days/13 nights; 가 함께 인쇄돼 있다" }
```

한국 제품 페이지는 원문을 바로잡아 **두 번째 출처로 추가**한다.

```js
{ sourceType: "한국 공식 페이지·IFU", verifiedAt: "2026-08-28", organization: "쿠퍼비전코리아(주)", document: "바이오피니티 한국 공식 제품 페이지", raw: "교체 주기 / 매월", url: "https://coopervision.co.kr/contact-lenses/biofinity", condition: "제품 헤더 표기", linkNote: "이 페이지에는 30일 문자열이 없다" }
```

- `sourceSummary`: `"바이오피니티 한국 공식 제품 페이지"` → `"쿠퍼비전코리아 2023 제품 사양서 · 2026.08.28 확인"`
- `caution` 끝에 덧붙인다: `"한국 페이지는 매월, 한국 사양서는 30 days replacement로 적습니다."`

### C4. (최우선) `dailies-total1` → `replacement` — 인용한 원문이 페이지에 없다

문제: `raw: "1일 교체"`가 total.myalcon.com/kr 페이지에 0건.

`fields[id="replacement"].sources[0]` 를 다음처럼 고친다.

- `raw`: `"1일 교체"` → `"관리가 필요 없는 편안한 1회용 렌즈를 찾는 분 / 이 제품은 의료기기(매일착용소프트콘택트렌즈)이며…"`
- `condition`: `"매일 새 렌즈로 교체"` → `"페이지에 1일 교체 문자열은 없고 1회용 렌즈·매일착용소프트콘택트렌즈 표기만 있다"`
- `verifiedAt`: `"2026-08-27"` → `"2026-08-28"`

MFDS 원장 근거를 **두 번째 출처로 추가**한다.

```js
{ sourceType: "MFDS 허가·UDI", verifiedAt: "2026-08-28", organization: "식품의약품안전처", document: "의료기기 UDI 표준코드 조회", raw: "매일착용소프트콘택트렌즈", url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do", condition: "itemPermitNo=수허 13-112 호 · 105건 전부 동일 소분류", linkNote: "소분류 품목 명칭은 교체주기가 아니라 착용 구분이다" }
```

### C5. (높음) `acuvue-oasys-1-day` → `permit` — 더 강한 근거(MFDS 원장)로 교체

문제: `raw: "수허 16-499 호"`인데 한국 IFU 원문은 `수허16-499 호`(공백 없음)다.
MFDS 원장 표기가 `수허 16-499 호`로 현재 값과 정확히 일치하므로, 근거를 원장으로 옮기면 표기 불일치가 사라진다.

`fields[id="permit"].sources` 를 다음 **2개**로 교체한다(원장 먼저).

```js
{ sourceType: "MFDS 허가·UDI", verifiedAt: "2026-08-28", organization: "식품의약품안전처", document: "의료기기 UDI 표준코드 조회", raw: "수허 16-499 호", url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do", condition: "itemPermitNo=수허 16-499 호 · 497건 전수 집계 · distinct 신원 1건", linkNote: "모델명 ACUVUE OASYS Brand Contact Lenses with HydraLuxe · 업체 제품 명칭 …(아큐브 오아시스 원데이) · (주)한국존슨앤드존슨비전 · 매일착용소프트콘택트렌즈 · 등급 2" },
{ sourceType: "한국 공식 페이지·IFU", verifiedAt: "2026-08-28", organization: "(주)한국존슨앤드존슨비전", document: "아큐브 오아시스 원데이 한국 사용설명서", raw: "[수입허가번호] 수허16-499 호", url: "https://acuvue.co.kr/files/patient-instruction-guides/Oasys1day_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf", condition: "한국 IFU 1쪽", linkNote: "IFU는 수허와 숫자 사이에 공백이 없다. 번호는 같고 표기만 다르다" }
```

- `sourceSummary`: `"한국 사용설명서 기재 · MFDS 상세 원장 직접 대조 미완료"` → `"MFDS UDI 원장 497건 전수 대조 · 한국 IFU 표기와 병기"`
- `caution`: `"MFDS 상세 원장 직접 대조는 미완료"` 문구 제거 후 → `"MFDS 원장과 한국 IFU의 번호는 같으나 표기(공백)가 다릅니다. 의료기기 광고 사전심의 번호와 구분합니다."`
- `state`: `verified` 유지

### C6. (높음) `biofinity` → `permit` — 더 강한 근거(MFDS 원장)로 교체, 값 표기 결정 필요

문제: 현재 값 `수허 08-131`은 한국 제품 목록 원문(`호` 없음)과 일치하고 재현된다.
그러나 MFDS 원장 원문은 `수허 08-131 호`다. 파일럿 수용 기준 5번이 `수허 08-131`을 그대로 표시하라고 못 박고 있으므로,
값 변경은 브리프 수정을 동반해야 한다. 권고는 원장 표기로 통일하는 것이다.

`fields[id="permit"].sources` 를 다음 **2개**로 교체한다(원장 먼저).

```js
{ sourceType: "MFDS 허가·UDI", verifiedAt: "2026-08-28", organization: "식품의약품안전처", document: "의료기기 UDI 표준코드 조회", raw: "수허 08-131 호", url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do", condition: "itemPermitNo=수허 08-131 호 · 94건 전수 집계", linkNote: "쿠퍼비전코리아(주) · 연속착용 소프트 콘택트렌즈 · 등급 3 · 모델명 Biofinity 64건 / Biofinity XR 30건" },
{ sourceType: "한국 공식 페이지·IFU", verifiedAt: "2026-08-28", organization: "쿠퍼비전코리아(주)", document: "쿠퍼비전코리아 전체 제품 목록", raw: "수허 08-131 바이오피니티 & 바이오피니티 XR", url: "https://coopervision.co.kr/contact-lenses", condition: "제품 목록 각주", linkNote: "이 페이지만 호를 빠뜨렸다. 같은 각주의 다른 제품은 모두 …호다" }
```

- `value`: `"수허 08-131"` → `"수허 08-131 호"` — **브리프 수용 기준 5번을 함께 수정할 때만 적용**
- `sourceSummary`: `"쿠퍼비전코리아 전체 제품 목록 기재 · MFDS 상세 원장 직접 대조 미완료"` → `"MFDS UDI 원장 94건 전수 대조 · 한국 제품 목록 표기와 병기"`
- `caution`: `"MFDS 상세 원장 직접 대조는 미완료입니다."` → `"MFDS 원장은 수허 08-131 호, 한국 제품 목록은 수허 08-131로 호가 없습니다. 번호는 같고 표기만 다릅니다."`

### C7. (높음) `biofinity` — 유통사 표기 오류 `쿠퍼비젼` → `쿠퍼비전`

문제: MFDS 업체명 조회에서 `쿠퍼비젼코리아`는 **0건**이다. 원장·한국 공식 페이지 모두 `쿠퍼비전`이다.

`biofinity` 제품 객체 안의 문자열 `쿠퍼비젼코리아(주)` 를 전부 `쿠퍼비전코리아(주)` 로 바꾼다. 해당 위치:

1. `distributor`
2. `fields[bc].sources[0].organization`
3. `fields[dia].sources[0].organization`
4. `fields[water].sources[0].organization`
5. `fields[material].sources[0].organization`
6. `fields[dkt].sources[0].organization` (한국 제품 페이지)
7. `fields[dkt].sources[1].organization` (제품 사양서 2023)
8. `fields[replacement].sources[0].organization`
9. `fields[permit].sources[0].organization`
10. `fields[uv].sources[0].organization`
11. `fields[uv].sources[1].organization`

`docs/REAL_DATA_PILOT_BRIEF.md` 제품 3의 `쿠퍼비젼코리아(주)`도 같이 고친다.

### C8. (중간) `acuvue-oasys-1-day` → `bc` / `dia` — `raw`를 문서 인쇄 형태로 정정

`fields[bc].sources[0]`:

- `raw`: `"Base Curve 8.5 mm, 9.0 mm"` → `"8.5/14.3  ·  9.0/14.3"`
- `condition`: `"근시·원시용 구면 사양"` → `"1쪽 ACUVUE® OASYS 1-Day 열 · Parameters BC (mm) / Dia (mm) 행"`
- `document`: `"ACUVUE Technical Specification Guide 2025"` → `"ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)"`
- `verifiedAt`: `"2026-08-27"` → `"2026-08-28"`
- `linkNote`: `"한국 공식 제품 페이지와 한국 IFU에서 유통 제품 연결 확인"` → `"한국 페이지는 평평한 안구에 적합한 9.0 베이스커브까지! 만 언급하고 8.5는 언급하지 않는다"`

`fields[dia].sources[0]`: `raw`를 `"8.5/14.3  ·  9.0/14.3"`으로, `condition`·`document`·`verifiedAt`을 위와 동일하게 바꾼다.

### C9. (중간) `acuvue-oasys-1-day` → `uv` — 두 출처의 `raw`를 원문 문자열로 정정

`fields[uv].sources[0]` (한국):

- `raw`: `"UVB 99% 이상 / UVA 90%"` → `"자외선 차단 1등급 - UVA 90%, UVB 99% 이상 차단"`
- `condition`: `"한국 페이지 표기"` → `"각주: UVA 316~380nm, UVB 280~315nm 범위에서 측정"`
- `verifiedAt` → `"2026-08-28"`

`fields[uv].sources[1]` (글로벌):

- `raw`: `"UVB >99.9% / UVA 96%"` → `"Blocks >99.9% of UVB & 96% of UVA"`
- `condition`: `"글로벌 기술 사양"` → `"1쪽 ACUVUE® OASYS 1-Day 열 · Approximate UV Blocking 행"`
- `verifiedAt` → `"2026-08-28"`

`conflicts[]`의 표시 문자열도 같은 원문으로 맞춘다.

### C10. (중간) `biofinity` → `dkt` / `uv` — 한국 페이지 인용 `raw`를 원문으로 정정

`fields[dkt].sources[0]` (한국 제품 페이지):

- `raw`: `"Dk/t 170"` → `"（별첨 1）바이오피니티®의［1．함수율과 2．산소 투과율（Dk/t）］은 아래와 같습니다． - 1．48%／2．170"`
- `verifiedAt` → `"2026-08-28"`

`fields[dkt].sources[2]` (미국 전문가 페이지):

- `raw`: `"Dk/t 171"` → `"Oxygen transmissibility  171 Dk/t (at -3.00D)"`
- `verifiedAt` → `"2026-08-28"`

`fields[uv].sources[0]` (한국 제품 페이지):

- `raw`: `"UV 기술 적용 주장"` → `"UV 차단 기술이 적용되어, 자외선으로부터 눈을 보호합니다."`
- `condition`: `"현재 공개 페이지"` → `"주요 제품 특징 · 차단율·등급 수치는 없음"`
- `verifiedAt` → `"2026-08-28"`

`fields[uv].sources[1]` (CVK 사양서):

- `document`: `"제품 사양서 2023"` → `"쿠퍼비전코리아 제품 사양서 (SA09487 Rev #4 09/2023)"`
- `condition`: `"2023 공식 사양서"` → `"3쪽 Biofinity® 구면 행 · 자외선 투과율 UV Blocking & Class 열"`
- `verifiedAt` → `"2026-08-28"`

`conflicts[]`에 세 번째 항목 추가를 권고한다:
`{ source: "CooperVision 미국 전문가 페이지", value: "Product Details에 UV 항목 없음" }`

### C11. (중간) `dailies-total1` → `water` — 일본 출처 `raw`·문헌 제목 정정, 한국 원문 추가

`fields[water].sources[1]` (Alcon Japan):

- `raw`: `"표면 함수율 80% 이상 · 표면 약 100% 표기"` → `"含水率 〜100% / レンズコアの含水率は33％、レンズ表面の含水率は80％以上です。"`
- `condition`: `"렌즈 표면 · 별도 측정법"` → `"レンズコア・表面の含水率の測定方法は、レンズ全体の含水率の測定方法とは異なります。"`
- `verifiedAt` → `"2026-08-28"`

`fields[water].sources[2]` (PubMed):

- `document`: → `"Evaluation of surface water characteristics of novel daily disposable contact lens materials, using refractive index shifts after wear. (Clin Ophthalmol 2015; doi 10.2147/opth.s90376)"`
- `raw`: `"표면 함수 특성 측정 연구"` → `"nesofilcon A and delefilcon A high surface water lenses"`
- `linkNote` 끝에 덧붙인다: `"2026-08-28 PubMed 직접 접근은 403으로 차단됐고 Europe PMC로 서지사항만 확인했다."`
- `verifiedAt` → `"2026-08-28"`

한국 원문을 **네 번째 출처로 추가**한다(현재 한국 함수율 근거가 하나도 인용돼 있지 않다).

```js
{ sourceType: "한국 공식 페이지·IFU", verifiedAt: "2026-08-28", organization: "한국알콘(주)", document: "데일리스 토탈원 한국 공식 제품 페이지", raw: "80% 이상의 표면 함수율로 수분 쿠션이 눈에 닿아 편안한 착용감을 제공", url: "https://total.myalcon.com/kr/products/dailies-total1", condition: "표면 함수율 · 한국 표기", linkNote: "코어 함수율은 이 페이지에 없다" }
```

`caution`의 `"표면은 공식 자료에 따라 80% 이상 또는 약 100%로 별도 표기됩니다."`는
미국 전문가 페이지가 실제로는 `-100%`(하이픈)로 인쇄한다는 점을 반영해
`"표면은 공식 자료에 따라 80% 이상, 〜100%(일본), -100%(미국 원문 표기)로 서로 다르게 적힙니다."`로 바꿀 것을 권고한다.

### C12. (낮음) 재현된 필드의 `verifiedAt` 갱신과 `condition` 정밀화

값과 원문이 일치해 정정이 필요 없는 레코드들이다. 재검증일을 남기려면 `verifiedAt`을 `"2026-08-28"`로 올린다.

- `acuvue-oasys-1-day`: `water` · `dkt` · `thickness`
- `dailies-total1`: `bc` · `dia` · `material` · `dkt` · `thickness` · `uv` · `water.sources[0]`
- `biofinity`: `bc` · `dia` · `water` · `material` · `dkt.sources[1]` · `uv.sources[1]`

추가로 `dailies-total1` `permit.sources[0].condition`을
`"modelnm=Dailies Total1 · prdtNmCn=워터렌즈 · 105건"` →
`"itemPermitNo=수허 13-112 호 105건 / modelnm=Dailies Total1 495건 중 prdtNmCn=워터렌즈 105건 · 2026-08-28 재실행 일치"`로 보강한다.

### C13. (낮음) 브리프 정합성

`docs/REAL_DATA_PILOT_BRIEF.md`에서 함께 고칠 것:

- 제품 1: 허가번호 근거 문구를 MFDS 원장 대조 완료로 변경 (C5)
- 제품 1: 재질·교체주기 근거를 한국 제품 페이지 → 글로벌 기술 사양·한국 IFU로 변경 (C1, C2)
- 제품 3: `쿠퍼비젼코리아(주)` → `쿠퍼비전코리아(주)` (C7)
- 제품 3: 허가번호 근거를 MFDS 원장 대조 완료로 변경, 표기 결정 명시 (C6)
- 수용 기준 5번: `수허 08-131`을 유지할지 `수허 08-131 호`로 바꿀지 결정 (C6)

---

## 3. 차단된 출처

| 출처 | 증상 | 대체 조치 |
| --- | --- | --- |
| https://pubmed.ncbi.nlm.nih.gov/26543349 | `curl -L` HTTP 203(빈 차단 응답), gstack 헤드리스 브라우저 HTTP **403 Forbidden** | Europe PMC REST(`EXT_ID:26543349`, HTTP 200)로 제목·저널·DOI·초록 확인. 원문 페이지 자체는 오늘 확인 불가 |

그 밖의 11개 출처는 모두 HTTP 200으로 정상 수집됐다.
