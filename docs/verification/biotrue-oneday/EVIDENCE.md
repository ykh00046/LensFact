# 검증 근거 — 바이오트루 원데이® (Biotrue® ONEday)

검증일: 2026-08-28
대상: 근시·원시용 투명 구면, 1일 교체 (난시용 `Biotrue ONEday For Astigmatism`·멀티포컬 `Biotrue ONEday For Presbyopia`는 제외)
제조사: Bausch + Lomb · 한국 유통(허가 원장 등록 법인): **(주)바슈롬코리아**
재질: nesofilcon A (HyperGel®)

이 문서는 실제로 가져온 공식 자료의 **원문**만 담는다. 값의 해석·정규화·환산은 하지 않는다.

---

## S1. MFDS 의료기기 UDI 표준코드 조회 — 한국 유통·허가 식별

- URL: https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do
- 조회일: 2026-08-28
- 방법: gstack 헤드리스 브라우저(`browse goto` → `#bplcNm`·`#modelnm`·`#itemPermitNo`·`#pageSize` 값 설정 → `#searchBtn` 클릭 → 렌더링 결과 집계).
  화면 결과와, 화면이 사용하는 동일 엔드포인트 `POST /msismext/udi/uif/selectStddCdLstAjax.do`(같은 세션) 응답을 함께 확인했다.
- 공통 조회 조건: `dateCancelChk=N`, `selRcprslryTrgtYn=`(전체), `sDate=` / `eDate=` 비움

### S1-1. 업체명 확정 — 조회 조건별 건수

| # | 조회 조건 | 조회 건수(totCnt) |
| --- | --- | --- |
| Q1 | `bplcNm=바슈롬` | **30,826** |
| Q2 | `bplcNm=바슈롬코리아` | 30,826 |
| Q3 | `bplcNm=(주)바슈롬코리아` | 30,826 |
| Q4 | `bplcNm=바슈롬코리아(주)` | **0** |
| Q5 | `bplcNm=한국바슈롬` | **0** |
| Q6 | `bplcNm=바슈 롬`(공백 삽입) | **0** |

원장에 인쇄된 업체명 원문은 **`(주)바슈롬코리아`**(업체구분 `수입업`)다.
`바슈롬코리아(주)`, `한국바슈롬`은 0건이므로 표기를 바꿔 쓰면 안 된다.
`docs/PRODUCT_CANDIDATES_20.md` 표 A의 `바슈롬코리아(법인명 확인 필요)`는 이 조회로 `(주)바슈롬코리아`로 확정된다.

### S1-2. 모델명 조회 — 대소문자·® 함정

| # | 조회 조건 (`bplcNm=바슈롬` 고정) | 건수 |
| --- | --- | --- |
| Q7 | `modelnm=Biotrue` | **2,933** |
| Q8 | `modelnm=BioTrue` | **0** |
| Q9 | `modelnm=biotrue` | **0** |
| Q10 | `modelnm=BIOTRUE` | **0** |
| Q11 | `modelnm=Biotrue® ONEday`(® 포함) | **0** |
| Q12 | `modelnm=Biotrue ONEday` | 2,933 |
| Q13 | `modelnm=ONEday` | 2,933 |
| Q14 | `modelnm=Oneday` | **0** |
| Q15 | `modelnm=nesofilcon` | 2,933 |
| Q16 | `modelnm=nesofilcon A` | 2,933 |
| Q17 | `modelnm=바이오트루`(한글) | **0** |
| Q18 | `modelnm=Biotrue ONEday For Astigmatism` | 2,620 |
| Q19 | `modelnm=Biotrue ONEday for Presbyopia`(소문자 for) | **0** |
| Q20 | `modelnm=ZZZZZ`(음성 대조) | 0 |

- **모델명 조회는 대소문자를 구분한다.** `BioTrue`·`biotrue`·`BIOTRUE`·`Oneday`는 전부 0건이다.
- **원장 모델명에는 ® 기호가 없다.** `Biotrue® ONEday`로 조회하면 0건이다.
  (아큐브 모이스트는 반대로 ®가 **있어야** 구면이 나왔다. 제조사마다 다르므로 매번 양쪽을 시도해야 한다.)
- `for Presbyopia`(소문자 f)는 0건, `For Presbyopia`(대문자 F)여야 잡힌다.
- 한글 `바이오트루`로는 모델명 조회가 되지 않는다(한글은 `업체 제품 명칭` 열에만 있다).

### S1-3. Q7(`modelnm=Biotrue`, 2,933건) 전수 집계

2,933행을 500건 × 7페이지로 모두 가져와 집계한 결과 distinct **3건**(distinct UDI-DI 2,933):

```
(주)바슈롬코리아 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 16-386 호 | Biotrue ONEday For Astigmatism | 바이오트루 원데이 난시용, 하이퍼겔 난시렌즈, 난시 수분렌즈 ## 2620
(주)바슈롬코리아 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 16-17 호  | Biotrue ONEday For Presbyopia  | 바이오트루 원데이 멀티포컬 ## 124
(주)바슈롬코리아 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 13-584 호 | Biotrue ONEday             | 바이오트루 원데이 렌즈, 수분 렌즈, 하이퍼겔 렌즈 ## 189
```

형식: `업체명 | 업체구분 | 소분류 품목 명칭 | 등급 | 품목허가번호 | 모델명 | 업체 제품 명칭 ## 행 수`

**바이오트루 계열은 구면 / 난시용 / 멀티포컬이 서로 다른 허가번호를 갖는다.**
본 검증 대상(구면)은 **`수허 13-584 호`** 하나뿐이다.

### S1-4. Q15(`modelnm=nesofilcon`, 2,933건) 전수 집계 — 같은 UDI-DI에 모델명이 2개다

```
(주)바슈롬코리아 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 16-386 호 | (nesofilcon A) for Astigmatism | 바이오트루 원데이 난시용, 하이퍼겔 난시렌즈, 난시 수분렌즈 ## 2620
(주)바슈롬코리아 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 16-17 호  | (nesofilcon A)                 | 바이오트루 원데이 멀티포컬 ## 124
(주)바슈롬코리아 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 13-584 호 | nesofilcon A                   | 바이오트루 원데이 렌즈, 수분 렌즈, 하이퍼겔 렌즈 ## 189
```

포장내수량 분포(2,933건): `30` 2,725건 · `5` 145건 · `90` 63건

`modelnm=Biotrue`와 `modelnm=nesofilcon`이 **같은 2,933건**을 반환하는 이유는 S1-5에서 밝혀진다.
같은 UDI-DI 하나에 모델명이 **`Biotrue ONEday`와 `nesofilcon A` 두 개**로 등록돼 있고,
조회 조건에 걸린 쪽 모델명이 표시된다.

### S1-5. 허가번호 단독 조회 `itemPermitNo=수허 13-584 호`

화면 표시 원문:

```
총 378건이 조회됐습니다.
```

열 순서: `연번 | 소분류 품목 명칭 | 등급 | 업체 제품 명칭 | 업체명 | 품목허가번호 | 모델명 | 고유식별자(UDI-DI)코드 | 요양급여 대상 치료재료 여부 | 치료재료코드 | 포장내수량`

화면에 표시된 결과 행 — 원문 그대로:

```
1   | 매일착용소프트콘택트렌즈 | 2 | 바이오트루 원데이 렌즈, 수분 렌즈, 하이퍼겔 렌즈 | (주)바슈롬코리아 | 수허 13-584 호 | nesofilcon A   | 00785811511241 | N |  | 90
2   | 매일착용소프트콘택트렌즈 | 2 | 바이오트루 원데이 렌즈, 수분 렌즈, 하이퍼겔 렌즈 | (주)바슈롬코리아 | 수허 13-584 호 | nesofilcon A   | 00785811511258 | N |  | 90
3   | 매일착용소프트콘택트렌즈 | 2 | 바이오트루 원데이 렌즈, 수분 렌즈, 하이퍼겔 렌즈 | (주)바슈롬코리아 | 수허 13-584 호 | nesofilcon A   | 00785811511265 | N |  | 90
190 | 매일착용소프트콘택트렌즈 | 2 | 바이오트루 원데이 렌즈, 수분 렌즈, 하이퍼겔 렌즈 | (주)바슈롬코리아 | 수허 13-584 호 | Biotrue ONEday | 00785811511272 | N |  | 90
191 | 매일착용소프트콘택트렌즈 | 2 | 바이오트루 원데이 렌즈, 수분 렌즈, 하이퍼겔 렌즈 | (주)바슈롬코리아 | 수허 13-584 호 | Biotrue ONEday | 00785811511241 | N |  | 90
192 | 매일착용소프트콘택트렌즈 | 2 | 바이오트루 원데이 렌즈, 수분 렌즈, 하이퍼겔 렌즈 | (주)바슈롬코리아 | 수허 13-584 호 | Biotrue ONEday | 00785811511258 | N |  | 90
```

전수 집계:

- 총 행 수 **378**, distinct UDI-DI **189** → 행 수 = UDI-DI 189 × 모델명 2개
- distinct (업체명 | 업체구분 | 소분류 | 등급 | 허가번호 | 모델명 | 업체 제품 명칭) = **2건**
  (모델명 `nesofilcon A` 189행 · 모델명 `Biotrue ONEday` 189행 — 나머지 항목은 완전히 동일)
- 포장내수량 분포: `5` 126행 · `30` 126행 · `90` 126행 (= 각 63 UDI-DI × 모델명 2)

**허가번호 원문: `수허 13-584 호`** (앞 `수허`, 공백, `13-584`, 공백, `호`)

### S1-6. 조회 함정 기록 — UI가 결과를 늦게 그린다

`itemPermitNo=수허 13-584 호` 조회는 AJAX 응답에 **7.3초**가 걸린다.
클릭 직후 곧바로 DOM을 읽으면 `총0건이 조회되었습니다.`라는 **초기 상태 문자열**을 읽게 된다.
실제 결과가 그려진 뒤의 문자열은 `총 378건이 조회됐습니다.`이며 두 문장은 표기 자체가 다르다
(`조회되었습니다` vs `조회됐습니다`, 숫자 앞 공백 유무). 0건 판정 전에 반드시 렌더링 완료를 확인해야 한다.

---

## S2. 한국 공식 브랜드 페이지 — 바이오트루 원데이 근시용

- URL: https://www.bauschlomb.co.kr/cleardaily/?idx=99
- 조회일: 2026-08-28 · HTTP 200 · 423,408 bytes
- 방법: `curl -L`(HTML 저장 후 태그 제거) + gstack 브라우저 렌더링(`browse goto` → `document.body.innerText`) 양쪽 확인

### 페이지에서 확인된 항목 (원문 발췌)

```
바이오트루 원데이 근시용 : 바슈롬        <- <title>
바이오트루 원데이 근시용
하루용 투명렌즈/근시용
상세정보
```

```
본 제품은 의료기기이며 , 사용상의 주의사항과 사용방법을 잘 읽고 사용하십시오. 바슈롬 렌즈 세척액은 의약외품입니다.
바슈롬은 의료기사 등에 관한 법률에 따라 온라인 판매가 이루어지지 않습니다.
사업자 등록 번호 : 214-81-39122 ㅣ 대표자명 : 김형준  l  회사주소 : 서울특별시 강남구 봉은사로86길 6, 6층(삼성동, 빌딩 레베쌍트)
의료기기판매신고번호 : 제 2009-3220033-00028호
상호명: 바슈롬코리아
```

한국 제품 목록 https://www.bauschlomb.co.kr/cleardaily (2026-08-28, HTTP 200, `데일리 투명렌즈` 7건)에도
`바이오트루 원데이 근시용 / 하루용 투명렌즈/근시용`이 등재돼 있다.

### 이 페이지에 **없는** 것 (curl HTML·브라우저 렌더링 양쪽에서 직접 확인)

| 검색어 | 건수 |
| --- | --- |
| `함수율` | 0 |
| `수분`(스펙 표기로서) | 0 |
| `베이스` / `커브` / `직경` / `산소` | 각 0 |
| `Dk` | 0 |
| `자외선` / `UV` | 0 |
| `수허` / `허가`(허가번호 표기) | 0 |
| `nesofilcon` / `네소필콘` | 0 |
| `8.6` / `14.2` / `78%` | 각 0 |

- **BC·DIA·함수율·Dk/t·중심두께·도수 범위·UV 수치 문자열이 0건이다.**
- 제품 설명(`상세정보` 탭)은 **이미지 1장 전용**이다:
  `https://cdn-optimized.imweb.me/upload/S2023010385e2991530ec3/6ee1a403da6f5.jpg?w=1280` (대체 텍스트 없음).
  본 검증에서는 이 이미지에서 수치를 추출하지 못했다.
- `의료기기판매신고번호 : 제 2009-3220033-00028호`는 **판매업 신고번호**다. 품목 허가번호가 아니므로 허가 필드에 넣지 않는다.
- 페이지 하단 상호는 `바슈롬코리아`(`(주)` 없음)로, MFDS 원장 표기 `(주)바슈롬코리아`와 표기가 다르다. 값의 충돌이 아니라 표기 차이다.

### 한국 공식 수치 출처 부재 확인

- 기업 사이트 https://www.bausch.kr/ko-kr/our-products/contact-lenses/ (2026-08-28, HTTP 200, 100,946 bytes):
  `바이오트루` 0건 · `Biotrue` 0건 · `nesofilcon` 0건 · `함수율` 0건. **제품 목록도 수치도 없다.**
- https://www.bausch.co.kr — 2026-08-28 `curl` 결과 **TLS 인증서 만료**로 접속 불가
  (`curl: (35) schannel: ... SEC_E_CERT_EXPIRED (0x80090328)`). 출처로 사용하지 않는다.
- 한국어 IFU/사양서 PDF는 이번 조사에서 **찾지 못했다.**

→ 이 제품의 **모든 물성 수치는 미국(글로벌) 공식 자료가 유일한 근거**다.

---

## S3. Bausch + Lomb 미국 ECP 제품 페이지 — 파라미터 표

- URL: https://ecp.bauschcontactlenses.com/products/biotrue-oneday/
- 조회일: 2026-08-28 · HTTP 200 · 50,070 bytes
- 방법: `curl -L`(브라우저 UA) 저장 후 태그 제거
- 문서 식별 표기: `©2026 Bausch + Lomb. MTB.0263.USA.22`
- 페이지 고지: `All information and materials on this site pertain to the U.S. only, unless otherwise indicated.`

### 파라미터 표 원문 (`Biotrue® ONEday contact lens parameters`)

```
MATERIAL                          nesofilcon A
WATER CONTENT                     78%
OXYGEN TRANSMISSIBILITY (Dk/t)    42 @ -3.00D
MATERIAL TECHNOLOGY               Patented Dehydration Barrier
OPTIC DESIGN TECHNOLOGY           High-definition optics
BASE CURVE                        8.6 mm
DIAMETER                          14.2 mm
CENTER THICKNESS                  0.10 mm @ -3.00D
POWERS                            +6.00D to -12.00D in 0.25D steps
                                  (0.50D steps over -6.50D)
ADDs                              -
CYLINDER POWERS                   -
AXES                              -
ORIENTATION MARK                  -
VISIBILITY TINT                   Light blue
INDICATIONS                       Daily wear
UV PROTECTION**                   <img src="/siteassets/img/check-mark.svg" alt="">
90-DAY PERFORMANCE GUARANTEE††    <img src="/siteassets/img/check-mark.svg" alt="">
```

- **`UV PROTECTION` 칸의 값은 체크 표시 이미지이며 `alt` 속성이 비어 있다. 차단율·투과율 수치가 없다.**
- `INDICATIONS: Daily wear`는 **착용방식**이다. 교체주기 행은 이 표에 없다.

### 같은 페이지의 UV 경고 각주 원문

```
**WARNING: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear such as UV-absorbing goggles or sunglasses because they do not completely cover the eye and surrounding area. The effectiveness of wearing UV-absorbing contact lenses in preventing or reducing the incidence of ocular disorders associated with exposure to UV-light has not been established at this time. You should continue to use UV-absorbing eyewear as directed. NOTE: Long-term exposure to UV radiation is one of the risk factors associated with cataracts. ... However, clinical studies have not been done to demonstrate that wearing UV-blocking contact lenses reduces the risk of developing cataracts or other eye disorders.
```

### 같은 페이지의 마케팅 문구 (물성값과 분리 — 본 검증에서 값으로 사용하지 않음)

```
Biotrue® ONEday contact lenses have the same water content as the cornea (78%) and maintain nearly all their moisture for up to 16 hours.
PVP (polyvinylpyrrolidone) allows for a lens with 78% water (same as the cornea)
```

`78%`라는 숫자 자체는 파라미터 표·PI 양쪽에 있으므로 값으로 쓰되, `각막과 같다`·`16시간 유지`는 광고 문구이므로 옮기지 않는다.

---

## S4. Biotrue® ONEday Contact Lens Parameters (PDF)

- URL: https://ecp.bauschcontactlenses.com/siteassets/pdf/biotrue-oneday-contact-lens-parameters.pdf
- 조회일: 2026-08-28 · HTTP 200 · 5,589,965 bytes · 1페이지
- 방법: `curl -L` 다운로드 후 `python -m pypdf`로 텍스트 추출
- 문서 식별 표기: `©2023 Bausch & Lomb Incorporated or its affiliates. BOD.0003.USA.23`
- 표 제목: `BIOTRUE® ONEDAY Contact Lens Parameters` / `PRESCRIBE THE FAMILY OF AFFORDABLE DAILY DISPOSABLE LENSES`

### 3열 구조

열 헤더 3개: `BIOTRUE® ONEDAY`(구면) / `BIOTRUE® ONEDAY FOR ASTIGMATISM` / `BIOTRUE® ONEDAY FOR PRESBYOPIA`

행별 3개 값의 텍스트 추출 순서:

```
MATERIAL                        nesofilcon A · nesofilcon A · nesofilcon A
WATER CONTENT                   78% · 78% · 78%
OXYGEN PERMEABILITY (Dk/t)      42 @ -3.00D · 42 @ -3.00D · 42 @ -3.00D
MATERIAL TECHNOLOGY             Patented Dehydration Barrier (3열 동일)
OPTIC DESIGN TECHNOLOGY         Aspheric optics · Evolved Peri-Ballast Design · 3-Zone Progressive™ Design
BASE CURVE                      8.6 mm · 8.4 mm · 8.6 mm
DIAMETER                        14.2 mm · 14.5 mm · 14.2 mm
CENTER THICKNESS                0.10 mm @ -3.00D (3열 동일)
POWERS(구면)                    +6.00D to -12.00D in 0.25D steps (0.50D steps above -6.00D)
VISIBILITY TINT                 Light blue (3열 동일)
INDICATIONS                     Daily wear (3열 동일)
UV PROTECTION†                  (체크 표시 그래픽 — 문자열 없음)
```

열 귀속 검증: 이 PDF는 텍스트 행렬(`tm`)이 모두 같은 좌표(y=14.0)로 기록돼 있어
**좌표 기반 열 귀속이 불가능**했다. 대신 다음 두 가지로 교차 확인했다.

1. 추출 순서상 구면 열이 첫 번째이며, `8.4 mm`·`14.5 mm`는 두 번째(난시용) 열에만 나타난다.
2. S3(ECP 웹 구면 전용 페이지)과 S5(PI/FG 본문)가 구면 값을 `BC 8.6mm` · `DIA 14.2mm`로 각각 독립 기재한다.
   PI/FG는 `8.4mm (Astigmatism)` · `14.5mm (Astigmatism)`이라고 **명시적으로 난시용을 괄호로 구분**한다.

표기 주의: `nesofilcon A`는 PDF에서 `fi` 합자 글리프로 그려져 추출 문자열이 `nesoﬁlcon A`가 된다. 인쇄된 단어는 `nesofilcon A`다.

---

## S5. Package Insert / Fitting Guide (제조사 공식 사양 원문)

- URL: https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/biotrue-one-day-pifg53.pdf
- 조회일: 2026-08-28 · HTTP 200 · 120,189 bytes · 2페이지
- 방법: `curl -L` 다운로드 후 pypdf 텍스트 추출 — 텍스트 레이어 정상
- 문서 식별 표기: `PACKAGE INSERT / FITTING GUIDE` · `Rev. 2019-11` · `8101906`
- 적용 대상: 구면 / Presbyopia / Astigmatism 3종 공통 문서

### S5-1. DESCRIPTION — 재질·함수율·UV·Dk

```
The Bausch + Lomb Biotrue® ONEday lens material, HyperGel® (nesofilcon A), is a hydrophilic copolymer of 2-hydroxyethyl methacrylate and N-vinylpyrrolidone, and is 78% water by weight when immersed in a sterile saline solution.
A benzotriazole UV-absorbing monomer is incorporated into the manufacturing process to block Ultraviolet (UV) radiation. The transmittance characteristics are less than 5% in the UVB range of 280nm to 315nm and less than 50% in the UVA range of 316nm to 380nm. This lens is tinted blue with Reactive Blue Dye 246.
The physical/optical properties of the lens are:
Specific Gravity: 1.039
Refractive Index: 1.374
Light Transmittance: C.I.E. Y value - approximately 99%
Water Content: 78%
Oxygen Permeability (Dk):  42 x 10–11[cm3O2(STP) x cm]/(sec x cm2 x mmHg) @ 35°C (Polarographic Method)
The lens is to be prescribed for single-use disposable wear and is to be discarded after each removal.
```

pypdf 추출 문자열에는 자간 때문에 `W ater Content`, `UV A range`, `1.37 4`, `Light T ransmittance`처럼
공백이 끼어든다. **인쇄된 문자열은 `Water Content`, `UVA range`, `1.374`, `Light Transmittance`다.**
`10–11`의 `–11`은 인쇄물에서 위첨자이고, `cm3`·`cm2`도 인쇄물에서는 위첨자다.

### S5-2. LENS PARAMETERS AVAILABLE

```
The Bausch + Lomb Biotrue® ONEday (nesofilcon A) Soft (Hydrophilic) Contact Lens is a hemispherical shell of the following dimensions:
Diameter: 14.2mm
          14.5mm (Astigmatism)
Center Thickness: 0.05mm to 0.75mm (varies with power)
Base Curve: 8.6mm
            8.4mm (Astigmatism)
Powers (Spherical): +6.00D to -6.00D in 0.25D steps
                    -6.50D to -12.00D in 0.50D steps
```

### S5-3. 자외선 투과 프로파일 각주

```
The typical transmittance profile of nesofilcon A lenses vs a Human Cornea and Human Lens:
Nesofilcon A Lens—Nominal Center Thickness 0.1 mm (-1.25D).
```

### S5-4. WEARING SCHEDULE

```
WEARING SCHEDULE
The wearing and replacement schedules should be determined by the eye care practitioner. Regular checkups, as determined by the eye care practitioner, are extremely important.
Daily Wear
There may be a tendency for the daily wear patient to overwear the lenses initially. ... The lens is to be prescribed for single-use disposable wear and is to be discarded after each removal.
```

### S5-5. UV 경고 원문

```
Warning
UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear, such as UV-absorbing goggles or sunglasses, because they do not completely cover the eye and surrounding area. You should continue to use UV-absorbing eyewear as directed.
```

---

## S6. Patient Information Booklet (환자용)

- URL: https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/biotrue-one-day-pib.pdf
  (ECP 페이지의 `Biotrue® ONEday Patient Information Booklet` 링크 `…/biotrue-one-day-pib63.pdf`와 **바이트 동일**, md5 `fc6bec24ef9df126adc930133ef37420`)
- 조회일: 2026-08-28 · HTTP 200 · 1,794,423 bytes · 12페이지
- 문서 식별 표기: `8101804` · `Printed in the U.S.A. Effective as of July 2017 (2017-07-31)`

### 원문 발췌 — 적응증과 교체

```
The Bausch + Lomb Biotrue® ONEday (nesofilcon A) Soft (Hydrophilic) Contact Lens is indicated for the daily wear correction of refractive ametropia (myopia, hyperopia and astigmatism) in aphakic and/or non-aphakic persons with non-diseased eyes, exhibiting astigmatism of 2.00 diopters or less, that does not interfere with visual acuity. The lens may be prescribed in spherical powers ranging from +20.00D to -20.00D.
The lens has been prescribed for single-use disposable wear, and is to be discarded after each removal.
```

### 이 PDF에 **없는** 것 (전문 검색으로 확인)

- `Dk` 문자열 **0건** · `water content`(사양으로서) 0건 · `78` 0건 · `thickness` 0건
- BC·DIA 수치 0건. `Base Curve`·`Diameter`는 **기호 설명표(Symbol Reference Guide)**의 라벨로만 등장한다.
- → **환자용 소책자에는 물성 수치가 전혀 없다.** 수치 근거로 쓸 수 없다.

### UV 경고 원문 (S5-5와 별개 문서)

```
WARNING: UV absorbing contact lenses are NOT substitutes for protective UV absorbing eyewear such as UV absorbing goggles or sunglasses because they do not completely cover the eye and surrounding area. You should continue to use UV absorbing eyewear as directed.
```

---

## S7. 출처 간 값 대조 — 충돌 지점

### S7-1. `42`의 물리량 라벨이 문서마다 다르다 (**충돌**)

| 출처 | 인쇄된 라벨 | 인쇄된 값 |
| --- | --- | --- |
| S5 PI/FG (Rev. 2019-11) | `Oxygen Permeability (Dk)` | `42 x 10–11[cm3O2(STP) x cm]/(sec x cm2 x mmHg) @ 35°C (Polarographic Method)` |
| S4 Parameters PDF (BOD.0003.USA.23) | `OXYGEN PERMEABILITY (Dk/t)` | `42 @ -3.00D` |
| S3 ECP 웹 페이지 (MTB.0263.USA.22) | `OXYGEN TRANSMISSIBILITY (Dk/t)` | `42 @ -3.00D` |

세 문서 모두 **숫자는 42로 같지만 물리량 이름이 Dk / Dk/t / transmissibility로 갈린다.**
Dk(산소투과계수)와 Dk/t(산소투과율)는 두께 `t`로 나눈 값이므로 같은 숫자일 수 없다.
어느 쪽이 맞는지 **판단하지 않고** 세 원문을 그대로 병기하며, **환산·유도하지 않는다.**

### S7-2. 중심두께 — 조건이 다른 세 표기

| 출처 | 원문 |
| --- | --- |
| S3 ECP 웹 | `CENTER THICKNESS  0.10 mm @ -3.00D` |
| S4 Parameters PDF | `0.10 mm @ -3.00D` |
| S5 PI/FG | `Center Thickness: 0.05mm to 0.75mm (varies with power)` |
| S5 PI/FG 각주 | `Nominal Center Thickness 0.1 mm (-1.25D)` |

`0.10 mm @ -3.00D`와 `0.1 mm (-1.25D)`는 **시험 도수가 다른 값**이다. 하나로 합치지 않는다.

### S7-3. 도수 범위 표기 차이

| 출처 | 원문 |
| --- | --- |
| S3 ECP 웹 | `+6.00D to -12.00D in 0.25D steps (0.50D steps over -6.50D)` |
| S4 Parameters PDF | `+6.00D to -12.00D in 0.25D steps (0.50D steps above -6.00D)` |
| S5 PI/FG | `+6.00D to -6.00D in 0.25D steps / -6.50D to -12.00D in 0.50D steps` |

`over -6.50D`와 `above -6.00D`는 경계 표기가 다르다. 9개 필드에는 포함되지 않지만 기록만 남긴다.

### S7-4. UV — 수치가 있는 문서와 없는 문서

- S5 PI/FG만 수치를 인쇄한다: `less than 5% in the UVB range of 280nm to 315nm and less than 50% in the UVA range of 316nm to 380nm`
- S3 ECP 웹·S4 Parameters PDF는 **체크 표시 그래픽**뿐이고 수치가 없다.
- 한국 자료에는 UV 표기 자체가 없다.
- **PI/FG의 값은 `투과율(transmittance)`이다. `차단율`이 아니다.** `5% 미만 투과 → 95% 이상 차단`으로 바꿔 적는 것은 유도이므로 하지 않는다.

---

## 확인하지 못한 것

1. **한국 표기 수치 일체** — 한국 브랜드 페이지·한국 목록·기업 사이트 어디에도 BC·DIA·함수율·Dk·중심두께·UV 수치가 없다.
   한국어 IFU/사양서 PDF도 찾지 못했다. 따라서 모든 물성값의 근거는 **미국 공식 자료 단독**이다.
2. **한국 브랜드 페이지 상세 이미지의 내용** — `상세정보`가 이미지 1장(대체 텍스트 없음)이라 수치 추출이 불가능했다.
   한국 표기 수치가 이 이미지 안에 있을 가능성을 **배제하지 못했다.**
3. **한국 유통 파라미터 범위** — 한국에서 플러스 도수(원시용)와 어떤 BC·도수 구간이 실제 공급되는지 확인할 한국 파라미터 표가 없다.
   한국 브랜드 페이지는 이 제품을 `근시용`으로만 표기한다. 미국 사양의 도수 범위(`+6.00D to -12.00D`)를 한국 공급 범위로 단정하지 않는다.
4. **미국 자료의 지역 적용 범위** — ECP 페이지는 `All information and materials on this site pertain to the U.S. only`라고 명시한다.
   한국 허가 제품과 미국 제품의 사양이 동일하다는 **공식 진술은 확인하지 못했다.** 연결 근거는 재질명 `nesofilcon A`가
   MFDS 원장 모델명과 일치한다는 점뿐이다.
5. **`42`의 정체** — S7-1의 라벨 충돌을 해소할 상위 문서(예: 한국 허가 원장의 사양란)를 확인하지 못했다.
