# 검증 근거 — 원데이 아큐브 모이스트® (1-DAY ACUVUE MOIST)

검증일: 2026-08-28
대상: 근시·원시용 투명 구면, 1일 교체 (난시용·멀티포컬 변형은 제외)
제조사: Johnson & Johnson Vision · 한국 유통: (주)한국존슨앤드존슨비전

이 문서는 실제로 가져온 공식 자료의 **원문**만 담는다. 값의 해석·정규화는 하지 않는다.

---

## S1. MFDS 의료기기 UDI 표준코드 조회 — 한국 유통·허가 식별

- URL: https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do
- 조회일: 2026-08-28
- 방법: gstack 헤드리스 브라우저(`browse goto` → 상세검색 폼 입력 → `#searchBtn` 클릭).
  화면에 표시된 목록과, 화면이 사용하는 동일 엔드포인트
  `POST /msismext/udi/uif/selectStddCdLstAjax.do`(같은 세션) 응답을 함께 확인했다.
- 공통 조회 조건: `dateCancelChk=N`(통합정보등록일자 제외 체크됨), `selRcprslryTrgtYn=`(전체),
  `sDate=` / `eDate=` 비움

### S1-1. 조회 조건별 건수

| # | 조회 조건 | 조회 건수(totCnt) |
| --- | --- | --- |
| Q1 | `bplcNm=한국존슨앤드존슨비전` | 51,144 |
| Q2 | `modelnm=ACUVUE MOIST` | 5,133 |
| Q3 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=ACUVUE MOIST` | 5,133 |
| Q4 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=1-DAY ACUVUE MOIST` | 5,133 |
| Q5 | `modelnm=MOIST` | 5,668 |
| Q6 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=1-Day ACUVUE® MOIST®` | **499** |
| Q7 | `itemPermitNo=수허 06-1 호` | **499** |

주의: Q2~Q4(`ACUVUE MOIST`)에는 **구면 제품이 포함되지 않는다.**
구면 제품의 등록 모델명은 `1-Day ACUVUE® MOIST® …`로 **® 기호를 포함**하며,
`ACUVUE MOIST`(® 없음) 문자열과 일치하지 않는다.
Q5(`MOIST`)까지 넓혀서야 구면 제품이 드러났다.

### S1-2. Q5(`modelnm=MOIST`, 5,668건) 전수 집계 — 허가번호 × 모델명 distinct

5,668행을 500건 × 12페이지로 모두 가져와 집계한 결과 distinct 6건:

```
퀄텍컨설팅코퍼레이션 유한회사 | 매일착용 소프트 콘택트렌즈 | 수허 20-131 호 | MELT MOIST | ... ## 33
디케이메디비젼(주) | 매일착용소프트콘택트렌즈 | 제허 10-1333 호 | DABAE MOISTURE | ... ## 2
(주)한국존슨앤드존슨비전 | 매일착용소프트콘택트렌즈 | 수허 11-384 호 | 1-DAY ACUVUE MOIST Brand Contact Lenses(etafilcon A) for ASTIGMATISM |  ## 4767
(주)한국존슨앤드존슨비전 | 매일착용 소프트 콘택트렌즈 | 수허 06-1 호 | 1-Day ACUVUE® MOIST® Brand Contact Lenses (Etafilcon A) Visibility Tinted with UV Blocker | 1-Day ACUVUE MOIST Brand Contact Lenses (Etafilcon A) Visibility Tinted with UV Blocker(원데이 아큐브 모이스트®) ## 499
(주)네오팜 | 점착성투명창상피복재 | 제인 22-4037 호 | 제로이드 루트힐 모이스처라이저 엠디 (ZEROID ROOTHEAL MOISTURIZER MD) |  ## 1
(주)한국존슨앤드존슨비전 | 매일착용소프트콘택트렌즈 | 수허 15-1673 호 | 1-DAY ACUVUE MOIST Brand MULTIFOCAL Contact Lenses (etafilcon A) | 1-Day ACUVUE MOIST Brand MULTIFOCAL Contact Lenses (etafilcon A) ## 366
```

형식: `업체명 | 소분류 품목 명칭 | 품목허가번호 | 모델명 | 업체 제품 명칭 ## 행 수`

즉 아큐브 모이스트 계열은 **구면 / 난시용 / 멀티포컬이 서로 다른 허가번호**를 갖는다.
본 검증 대상(구면)은 `수허 06-1 호` 하나뿐이다.

### S1-3. 화면에 표시된 결과 행 (Q6, 총 499건) — 원문 그대로

```
총 499건이 조회됐습니다.

1 | 매일착용 소프트 콘택트렌즈 | 2 | 1-Day ACUVUE MOIST Brand Contact Lenses (Etafilcon A) Visibility Tinted with UV Blocker(원데이 아큐브 모이스트®) | (주)한국존슨앤드존슨비전 | 수허 06-1 호 | 1-Day ACUVUE® MOIST® Brand Contact Lenses (Etafilcon A) Visibility Tinted with UV Blocker | 00733905982712 | N |  | 40
2 | 매일착용 소프트 콘택트렌즈 | 2 | 1-Day ACUVUE MOIST Brand Contact Lenses (Etafilcon A) Visibility Tinted with UV Blocker(원데이 아큐브 모이스트®) | (주)한국존슨앤드존슨비전 | 수허 06-1 호 | 1-Day ACUVUE® MOIST® Brand Contact Lenses (Etafilcon A) Visibility Tinted with UV Blocker | 00733905982835 | N |  | 40
3 | 매일착용 소프트 콘택트렌즈 | 2 | 1-Day ACUVUE MOIST Brand Contact Lenses (Etafilcon A) Visibility Tinted with UV Blocker(원데이 아큐브 모이스트®) | (주)한국존슨앤드존슨비전 | 수허 06-1 호 | 1-Day ACUVUE® MOIST® Brand Contact Lenses (Etafilcon A) Visibility Tinted with UV Blocker | 00733905982798 | N |  | 40
```

열 순서: 연번 | 소분류 품목 명칭 | 등급 | 업체 제품 명칭 | 업체명 | 품목허가번호 | 모델명 | 고유식별자(UDI-DI)코드 | 요양급여 대상 치료재료 여부 | 치료재료코드 | 포장내수량

### S1-4. Q7(`itemPermitNo=수허 06-1 호`, 499건) 전수 집계

- distinct (업체명 | 업체구분 | 소분류 품목 명칭 | 등급 | 허가번호 | 모델명 | 업체 제품 명칭) = **1건**
- 즉 499건 전부가 동일 신원으로 `수허 06-1 호`에 연결된다.
- 포장내수량 분포: `30` 116건 · `40` 35건 · `90` 348건

**허가번호 원문: `수허 06-1 호`** (앞에 `수허`, 하이픈, 끝에 공백 + `호`)

---

## S2. 한국 공식 제품 페이지 — 원데이 아큐브 모이스트®

- URL: https://acuvue.co.kr/products/acuvue-moist-1-day
- 조회일: 2026-08-28 · HTTP 200
- 방법: `curl -L`(HTML 저장 후 태그 제거) + gstack 브라우저 렌더링(`browse goto` → `browse text`) 양쪽 확인

### 페이지 텍스트에서 확인된 항목 (원문 발췌)

```
원데이 아큐브 모이스트®
저자극 재질로 매일 편안하고 촉촉하게
라크리온™ 기술으로 렌즈에 풍부하게 함유된 PVP 습윤인자를 통해 촉촉함이 오래 유지되며 편안한 착용감을 제공합니다. (근시용)
1일 착용
근시/원시
```

```
이 제품은 의료기기(시력보정용 매일착용 소프트콘택트렌즈)이며, 사용상의 주의사항과 사용방법을 잘 읽고 사용하십시오. 52025-I10-31-3481 (유효기간: 28.08.26)
제품명
- 1-Day ACUVUE MOIST Brand Contact Lenses (Etafilcon A) (원데이 아큐브 모이스트)
- ACUVUE OASYS Brand Contact Lenses with Hydraluxe (아큐브 오아시스® 원데이)
1. JJV Data on File 2021. Material Properties: 1-DAY ACUVUE MOIST, 1-DAY ACUVUE TruEye, and ACUVUE OASYS 1-Day with HydraLuxe Technology Brand Contact Lenses.
2. JJV Data on File 2021. Technical attributes for 1-DAY ACUVUE MOIST with LACREON Technology.
3. UVA 316~380nm, UVB 280~315nm 범위에서 측정
4. 자외선은 눈의 노화와 각종 안질환의 원인이 될 수 있습니다. (출처: WHO)
경고: 자외선 차단 콘택트렌즈는 눈과 주변을 완전히 덮지 못하므로 고글이나 선글라스와 같은 자외선 차단 안경을 대신할 수 없습니다. 지침에 따라 자외선 차단 안경은 계속해서 사용해야 합니다. 참고: 자외선 장기간 노출은 백내장과 관련된 위험 요인 중 하나입니다. 환경 조건(고도, 지리, 구름) 및 개인적 요인(야외 활동 범위와 정도) 등 노출 정도는 여러 요인에 따라 달라집니다. 자외선 차단 콘택트렌즈는 유해한 자외선으로부터 눈을 보호하는 데 도움이 됩니다. 그러나 자외선 차단 콘택트렌즈 착용이 백내장이나 기타 안질환 발병 위험을 감소시킨다는 임상 연구는 아직 수행되지 않았습니다. 자세한 내용은 안 전문가와 상담하세요.
```

```
(주)한국존슨앤드존슨비전
서울시 용산구 한강대로 92 l 대표자: 김예리
```

### 이 페이지에 **없는** 것 (직접 확인)

- BC · DIA · 함수율 · Dk/t · 중심두께 · 도수 범위 **수치 문자열 0건**
  (HTML 내 `8.5` / `14.2` 문자열은 전부 로고 SVG의 path 좌표였다.)
- UV 차단 **퍼센트 수치 0건**. 텍스트에는 위 경고문과 측정 파장 범위(각주 3)만 있다.
- 허가번호 문자열 없음.
- 제품 기술·특징 설명은 **이미지 전용**이다: `content-lg.webp`(alt `원데이 아큐브 모이스트의 기술`),
  `features-lg.webp`(alt `원데이 아큐브 모이스트의 특징`) — 대체 텍스트에 수치가 없어 **본 검증에서 수치를 추출하지 못했다.**
- `52025-I10-31-3481`은 **의료기기 광고 사전심의 번호**다. 허가번호가 아니므로 허가 필드에 넣지 않는다.

---

## S3. 한국 사용설명서(IFU) PDF

- URL: https://acuvue.co.kr/files/patient-instruction-guides/Moist_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf
- 조회일: 2026-08-28 · HTTP 200 · 112,074 bytes · 3페이지
- 방법: `curl -L` 다운로드 후 `python -m pypdf`(pypdf 6.16.2)로 텍스트 추출 — **텍스트 레이어 정상 추출**(3,888자)

### 제품 연결 근거

한국 IFU 목록 페이지 https://acuvue.co.kr/patient-instruction-guides (2026-08-28, HTTP 200)에서
이 PDF는 **`원데이 아큐브 모이스트®`** 항목의 `아큐브® 제품 사용 안내 (97 KB)` 링크로 게시돼 있다.
(같은 목록에 `원데이 아큐브 모이스트® 난시용`, `원데이 아큐브 모이스트® 멀티포컬`이 별도 파일로 있다.)

### 원문 발췌 — 교체주기

```
다. 사용 후 보관 및 관리 방법
1. 일일 착용 콘택트렌즈는 제거 후 재사용하지 않고 새로운 콘택트렌즈 또는 안경을 사용하므로, 별도
의 세척 또는 소독이 필요하지 않다.
2. 착용한 렌즈는 1회(1일) 착용 후 교체하여야 한다.
3. 재사용 금지
```

### 이 PDF에 **없는** 것 (전문 검색으로 확인)

- `수허` / `허가` 문자열 **0건** → **이 IFU에는 허가번호가 없다.**
- `모이스트` / `MOIST` / `etafilcon` 문자열 0건 → 제품명 표기도 없다. 문서는 `사용방법` 절만 담고 있다.
- BC · DIA · 함수율 · Dk/t · UV 수치 없음.

> 파일럿의 아큐브 오아시스 원데이는 한국 IFU 원문에 `수허 16-499 호`가 있었으나,
> 모이스트 IFU에는 허가번호가 **없다.** 따라서 모이스트 허가번호는 MFDS UDI(S1)가 유일한 근거다.

---

## S4. ACUVUE Technical Specification Guide (글로벌 기술 사양)

- URL: https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf
- 조회일: 2026-08-28 · HTTP 200 · 2,097,103 bytes · 4페이지
- 방법: `curl -L` 다운로드 → pypdf 텍스트 추출. 표가 다단 컬럼이라 **텍스트 순서만으로는 열 귀속이 흔들리므로,
  pypdf `visitor_text`로 각 문자열의 좌표(x, y)를 함께 뽑아 열·행 귀속을 확인**했다.
- 문서 식별 표기: 4쪽 하단 `© Johnson & Johnson and its affiliates 2025  |  PP2020ACLP4800 v13`,
  각 쪽 하단 `AS112401`

### S4-1. 2쪽 좌표 추출 — `1-DAY ACUVUE® MOIST` 열(x ≈ 168–203)

행 라벨은 왼쪽 x ≈ 34에 있고, 값은 같은 y 좌표에 놓인다.
아래는 x 160–215 구간(= MOIST 구면 열)만 필터링한 결과다.
(x ≈ 294 열은 `MOIST for ASTIGMATISM`, x ≈ 417 열은 `MOIST MULTIFOCAL`, x ≈ 550 열은 `1-DAY ACUVUE DEFINE`,
x ≈ 683 열은 `ACUVUE 2`이므로 본 제품과 혼동하지 않는다.)

```
   168.4    499.4  1-DAY
   168.4    499.4  ACUVUE®
   187.0    490.4  MOIST
   171.5    454.5  Daily Disposable Lens        <- Recommended Replacement (label y 458.1/449.1)
   188.6    432.5  Daily Wear                   <- Wearing Schedule (label y 431.2)
   178.9    411.6  30 and 90 Packs              <- Pack Size (label y 410.7)
   171.8    381.8  LACREON® Technology          <- Technology (label y 382.3)
   188.9    351.9  etafilcon A                  <- Lens Material (label y 351.1)
   174.3    330.2  25.5 x 10-9 (-3.00D)         <- Dk/t Value1 (edge corrected) (label y 333.8/325.8)
   200.3    311.4  58%                          <- Water Content (label y 309.5)
   170.6    272.5  Blocks ~97% of UVB           <- Approximate UV Blocking*† (label y 272.3/263.3)
   182.9    263.5  & 82% of UVA
   202.7    226.4  No                           <- Orientation Mark (label y 225.6)
   197.9    206.5  0.084                        <- Center Thickness (mm @ -3.00D) (label y 210.6/202.6)
   190.2    183.2  8.5/14.2                     <- Parameters BC (mm) / Dia (mm) (label y 186.8/177.8)
   181.9    175.4  -0.50D to -12.00D            <- Power Range (D) (label y 169.8)
   181.5    167.6  +0.50D to +6.00D
   177.4    160.8  (in 0.50D steps above -6.00D)
   190.2    146.3  9.0/14.2                     <- 두 번째 BC/Dia
   181.9    138.4  -0.50D to -12.00D
   181.5    130.6  +0.50D to +6.00D
   177.4    123.9  (in 0.50D steps above -6.00D)
```

표기 주의:
- `etafilcon A`는 PDF에서 `fi` 합자 글리프(U+FB01)로 그려져 추출 문자열이 `etaﬁlcon A`가 된다. 인쇄된 단어는 `etafilcon A`다.
- `25.5 x 10-9`의 `-9`는 인쇄물에서 위첨자다. 추출 문자열은 `25.5 x 10-9 (-3.00D)`.

### S4-2. 4쪽 각주 원문 — Dk/t 시험 조건과 UV 경고

```
1. Oxygen transmissibility measured via polarographic method at centre -3.00D lens using boundary corrected, edge corrected Dk value. Units (cm/sec) (ml O2/ml x mm Hg) at 35° C.
* Helps protect against transmission of harmful UV radiation to the cornea and into the eye.
† WARNING: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear such as UV-absorbing goggles or sunglasses because they do not completely cover the eye and surrounding
area. You should continue to use UV-absorbing eyewear as directed. NOTE: Long-term exposure to UV radiation is one of the risk factors associated with cataracts. Exposure is based on a number of factors such
as environmental conditions (altitude, geography, cloud cover) and personal factors (extent and nature of outdoor activities). UV-blocking contact lenses help provide protection against harmful UV radiation.
However, clinical studies have not been done to demonstrate that wearing UV-blocking contact lenses reduces the risk of developing cataracts or other eye disorders. Consult your eye care practitioner for more
information.
```

---

## 확인하지 못한 것

1. **한국 표기 수치 일체** — 한국 제품 페이지·한국 IFU 어디에도 BC·DIA·함수율·Dk/t·중심두께 수치가 없다.
   따라서 이 제품의 모든 물성값은 **글로벌 기술 사양이 유일한 근거**다.
2. **한국 페이지의 UV 퍼센트** — 페이지의 기술·특징 영역이 이미지 전용(`content-lg.webp`, `features-lg.webp`)이라
   텍스트 추출이 불가능했다. 파일럿의 아큐브 오아시스 원데이에서 한국 표기와 글로벌 표기가 달랐으므로
   **이 제품에서도 지역 차이가 있는지는 배제하지 못했다.**
3. **한국 유통 사양의 BC 9.0 취급 여부** — 글로벌 사양에는 8.5와 9.0이 있으나, 한국 공식 자료에 파라미터 표가 없어
   한국에서 두 BC가 모두 유통되는지는 확인하지 못했다.
