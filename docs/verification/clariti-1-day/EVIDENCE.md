# 검증 근거 — 클래리티® 원데이 (clariti® 1 day sphere)

검증일: 2026-08-28
대상: 근시·원시용 투명 구면, 1일 교체 (토릭·멀티포컬 변형은 제외)
제조사: CooperVision · 한국 유통: 쿠퍼비전코리아(주)

이 문서는 실제로 가져온 공식 자료의 **원문**만 담는다. 값의 해석·정규화는 하지 않는다.

수집한 공식 자료 5종:

| 코드 | 자료 | URL | HTTP | 비고 |
| --- | --- | --- | --- | --- |
| S1 | MFDS 의료기기 UDI 표준코드 조회 | https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do | 200 | 헤드리스 브라우저 |
| S2 | 클래리티® 원데이 한국 공식 제품 페이지 | https://coopervision.co.kr/contact-lenses/clariti-1-day | 200 | 132,614 bytes |
| S3 | 쿠퍼비전코리아 전체 제품 목록 | https://coopervision.co.kr/contact-lenses | 200 | 허가번호 기재 |
| S4 | 쿠퍼비전코리아 제품 사양서 (한국 공식 사양) | https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf | 200 | 1,111,102 bytes · 3쪽 |
| S5 | CooperVision US practitioner — clariti® 1 day | https://coopervision.com/practitioner/our-products/clariti-1-day-family/clariti-1-day | 200 | 106,522 bytes |
| S6 | CooperVision Product Reference Guide | https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf | 200 | 5,596,469 bytes · 7쪽 |
| S7 | 클래리티 원데이 한국 사용설명서(IFU) PDF | https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/clariti_1day_sphere_patient_instruction.pdf | 200 | 628,850 bytes · 2쪽 |
| S8 | 클래리티® 원데이 한국 제품 안내 자료 | https://coopervision.co.kr/sites/coopervision.co.kr/files/product-reminders/coopervision-kr-clariti1d-product-reminder.pdf | 200 | 851,771 bytes · 1쪽 |

---

## S1. MFDS 의료기기 UDI 표준코드 조회 — 한국 유통·허가 식별

- URL: https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do
- 조회일: 2026-08-28
- 방법: gstack 헤드리스 브라우저로 조회 화면을 연 뒤, 화면이 사용하는 동일 엔드포인트
  `POST /msismext/udi/uif/selectStddCdLstAjax.do`를 **같은 세션 안에서** 호출해 전수 집계.
  (같은 요청을 `curl`로 세션 쿠키까지 붙여 보냈을 때는 항상 `{"dataList":[]}`가 반환됐다. 브라우저 세션에서만 응답한다.)
- 공통 조회 조건: `dateCancelChk=N`(통합정보등록일자 제외 체크됨), `selRcprslryTrgtYn=`(전체), `sDate=` / `eDate=` 비움

### S1-1. 조회 조건별 건수

| # | 조회 조건 | 조회 건수(totCnt) |
| --- | --- | --- |
| Q1 | `bplcNm=쿠퍼비젼코리아` | **0** |
| Q2 | `bplcNm=쿠퍼비전코리아` | 17,003 |
| Q3 | `bplcNm=쿠퍼비전코리아(주)` | 17,003 |
| Q4 | `bplcNm=쿠퍼비전` | 17,003 |
| Q5 | `modelnm=clariti` | **0** |
| Q6 | `modelnm=clariti®` | **0** |
| Q7 | `modelnm=클래리티` | **0** |
| Q8 | `modelnm=클래리티 원데이` | **0** |
| Q9 | `modelnm=clariti 1 day` | **0** |
| Q10 | `modelnm=Clariti` | 3,480 |
| Q11 | `modelnm=Clariti 1day` | 3,480 |
| Q12 | `modelnm=Clariti 1day sphere` | **0** |
| Q13 | `modelnm=Somofilcon` | 93 |
| Q14 | `modelnm=somofilcon` | 3,352 |
| Q15 | `itemPermitNo=수허 15-322호` | **120** |
| Q16 | `itemPermitNo=수허 15-322 호` | **120** |
| Q17 | `itemPermitNo=수허 19-346 호` | **182** |

### ⚠ 이 제품의 검색 함정 (모이스트의 ® 함정과 다른 종류다)

1. **업체명 표기가 다르다.** `docs/PRODUCT_CANDIDATES_20.md`와 이 저장소가 써 온 `쿠퍼비젼코리아(주)`(**젼**)로는
   **0건**이다. MFDS 원장에 등록된 업체명 원문은 `쿠퍼비전코리아(주)`(**전**)다.
2. **모델명 검색이 대소문자를 구분한다.** `clariti`(소문자) 0건 / `Clariti` 3,480건.
   `Somofilcon` 93건 / `somofilcon` 3,352건으로 **결과 집합 자체가 다르다.**
3. **한글 모델명이 없다.** `클래리티`·`클래리티 원데이` 모두 0건. 원장 모델명은 영문뿐이다.
4. **판매명이 모델명이 아니다.** 구면 제품의 등록 모델명은 `Clariti 1day` 또는 `Somofilcon A 1day`이고,
   `sphere`를 붙이면(`Clariti 1day sphere`) 0건이 된다.
5. 허가번호 검색은 `호` 앞의 공백 유무와 무관하게 같은 결과(120건)를 준다. 원장 표시 원문은 `수허 15-322 호`다.

### S1-2. `bplcNm=쿠퍼비전코리아` 17,003건 전수 집계 — (허가번호 | 모델명 | 업체 제품 명칭) distinct

17,003행을 500건 × 35페이지로 모두 가져와 집계한 결과 distinct **19건**:

```
수허 07-856 호 | Proclear 1 Day |   ##95
수허 08-131 호 | Biofinity XR |   ##30
수허 08-131 호 | Biofinity |   ##64
수허 10-1406 호 | Biofinity Toric |   ##4392
수허 12-1466 호 | O2 EDITION |   ##117
수허 13-2842 호 | Comfilcon A multifocal | Medivue premier multifocal  ##912
수허 14-2404 호 | MYDAY |   ##174
수허 14-720 호 | Proclear 1 day multifocal |   ##114
수허 15-322 호 | Clariti 1day | 산소렌즈  ##120
수허 15-963 호 | Clariti 1day toric |   ##3180
수허 15-964 호 | Clariti 1day multifocal |   ##180
수허 16-467 호 | fanfilcon A | Ascend, MyBright  ##128
수허 17-239 호 | Biofinity Energys | 디지털 렌즈  ##65
수허 18-281 호 | Stenfilcon A 1day Toric | MyDay Toric  ##3372
수허 19-346 호 | Somofilcon A 1day | 산소렌즈 clariti 1day  ##93
수허 19-346 호 | WATER FINE | 산소렌즈 clariti 1day  ##89
수허 20-165 호 | somofilcon A 1day Toric | clariti 1day toric  ##3352
수허 20-228 호 | MiSight 1day |   ##64
수허 21-108 호 | Stenfilcon A 1day Multifocal | MyDay Multifocal  ##462
```

형식: `품목허가번호 | 모델명 | 업체 제품 명칭 ## 행 수` · 전 행의 업체명은 `쿠퍼비전코리아(주)`,
소분류 품목 명칭은 `매일착용소프트콘택트렌즈`(또는 `매일착용 소프트 콘택트렌즈`), 등급 `2`.

### S1-3. **구면 제품에 연결된 허가번호가 두 개다** — 이 검증의 핵심 미결 지점

```
수허 15-322 호 | 모델명 Clariti 1day        | 업체 제품 명칭 "산소렌즈"            | 120건
수허 19-346 호 | 모델명 Somofilcon A 1day   | 업체 제품 명칭 "산소렌즈 clariti 1day" |  93건
수허 19-346 호 | 모델명 WATER FINE          | 업체 제품 명칭 "산소렌즈 clariti 1day" |  89건
```

- Q15/Q16(`수허 15-322 호`) 120건: distinct 신원 **1건** — `쿠퍼비전코리아(주) | 매일착용소프트콘택트렌즈 | 2 | 수허 15-322 호 | Clariti 1day | 산소렌즈`.
  포장내수량 분포: `5` 31건 · `30` 31건 · `90` 58건. UDI-DI 표본: `00190090388963`, `00190090388598`
- Q17(`수허 19-346 호`) 182건: distinct 신원 **2건** — 위 표의 `Somofilcon A 1day`(93건)와 `WATER FINE`(89건).
  포장내수량 분포: `5` 62건 · `30` 89건 · `90` 31건. UDI-DI 표본: `00198652718845`, `00198652719132`

즉 원장에는 `clariti 1day`라는 문자열이 **두 개의 서로 다른 품목허가번호에 걸쳐** 나타난다.
`수허 15-322 호`는 모델명이 `Clariti 1day`이고, `수허 19-346 호`는 업체 제품 명칭이 `산소렌즈 clariti 1day`다.
S3(한국 공식 제품 목록)은 이 중 `수허 15-322호`만 클래리티 원데이의 번호로 표기한다.
**어느 쪽이 실제 판매 포장에 인쇄된 번호인지는 이 검증 범위에서 확정하지 못했다.**

참고로 토릭에서도 같은 이중 등록이 보인다: `수허 15-963 호 | Clariti 1day toric`와
`수허 20-165 호 | somofilcon A 1day Toric | clariti 1day toric`. S3은 토릭에 대해서는 **더 나중 번호인 `수허 20-165호`**를 표기한다.
구면에 대해서는 **더 이른 번호인 `수허 15-322호`**를 표기한다.

### S1-4. 결과 행 원문 예 (화면 표시)

```
1 | 매일착용소프트콘택트렌즈 | 2 | 산소렌즈 clariti 1day | 쿠퍼비전코리아(주) | 수허 19-346 호 | Somofilcon A 1day | 00198652718845 | N |  | 5
1 | 매일착용소프트콘택트렌즈 | 2 |  | 쿠퍼비전코리아(주) | 수허 15-964 호 | Clariti 1day multifocal | 00190090391000 | N |  | 30
```

열 순서: 연번 | 소분류 품목 명칭 | 등급 | 업체 제품 명칭 | 업체명 | 품목허가번호 | 모델명 | 고유식별자(UDI-DI)코드 | 요양급여 대상 치료재료 여부 | 치료재료코드 | 포장내수량

---

## S2. 한국 공식 제품 페이지 — 클래리티® 원데이

- URL: https://coopervision.co.kr/contact-lenses/clariti-1-day
- 조회일: 2026-08-28 · HTTP 200
- 방법: `curl -L`(HTML 저장 후 태그 제거)

### 원문 발췌

```
클래리티® 원데이
높은 산소투과율1을 제공하는 편리한 원데이 콘택트렌즈.
교체 주기
매일
교정
근시
원시
```

```
클래리티® 원데이는 매일 새 렌즈로 교체하는 하루 착용 콘택트렌즈로, UV 차단 기능이 적용되어 있으며, 높은 산소 투과율을 (*별첨 1) 갖춘 실리콘 하이드로겔 소재로 만들어졌습니다.
```

```
당신을 위한 기능
산소 투과율이 우수하고 (Dk/t 80) 부드러운 실리콘 하이드로겔 렌즈 소재로 편안한 착용감을 제공합니다‡1,3
높은 함수율과 함께 (함수율 56%) 하루 종일 촉촉한 착용감을 유지할 수 있습니다.*
UV 차단 기술이 적용되어 자외선으로부터 눈을 보호합니다.*
SA18695/APP166340
```

```
＊이 제품은 '의료기기'이며, 사용상의 주의사항과 사용 방법을 잘 읽고 사용하세요．
＊하루 착용하는 콘택트렌즈로 야간 취침시에는 착용을 하지 않습니다．
（심의번호：조합 -2026-13-073, 유효기간：2029-04-22）
＊（별첨 1）클래리티® 원데이의 ［1．함수율과 2．산소 투과율（Dk/t）］은 아래와 같습니다．
- 1．56%, 2．80
```

### 이 페이지에 **없는** 것 (직접 확인)

- BC · DIA · 중심두께 수치 **0건**
- 재질 USAN(`somofilcon A`) 표기 없음 — `실리콘 하이드로겔`이라고만 적혀 있다
- UV 차단 **퍼센트 수치 0건**
- 허가번호 없음
- `조합 -2026-13-073`은 **의료기기 광고 사전심의 번호**다. 허가번호가 아니므로 허가 필드에 넣지 않는다.
  (`SA18695/APP166340`은 자료 관리번호이며 허가번호가 아니다.)

---

## S3. 쿠퍼비전코리아 전체 제품 목록 — 허가번호 표기

- URL: https://coopervision.co.kr/contact-lenses
- 조회일: 2026-08-28 · HTTP 200

### 원문 발췌 (한 문장, 줄바꿈 없음)

```
*위의 제품들은 수허 14-2404호 마이데이 원데이, 수허 18-281호 마이데이 토릭, 수허 21-108호 마이데이 멀티포컬, 수허 15-322호 클래리티 원데이, 수허 20-165호 클래리티 토릭, 수허 08-131 바이오피니티 & 바이오피니티 XR, 수허 10-1406호 바이오피니티 토릭 & 바이오피니티 토릭 XR, 수허 17-239호 바이오피니티 에너지스, 수허 07-568호 프로클리어 원데이, 수허 14-720호 프로클리어 멀티포컬, 수허 20-228호 마이사이트 원데이로 '의료기기'이며, 사용상의 주의사항과 사용 방법을 잘 읽고 사용하세요.
```

```
*(별첨 1)제품별 [1. 함수율과 2. 산소 투과율(Dk/t)]은 아래와 같습니다.
- 마이데이
[근시용 1. 54%, 2. 100] / [난시용 1. 54%, 2. 80] / [멀티포컬 1. 54%, 2. 100]
- 클래리티
[근시용 1. 56%, 2. 80] / [난시용 1. 56%, 2. 50]
- 바이오피니티
[근시용 1. 48%, 2. 170] / [난시용 1. 48%, 2. 110] / [에너지스 1. 48%, 2. 170]
```

```
(심의번호: 조합-2026-13-082, 유효기간: 2029-04-28)
```

표기 주의:

- 클래리티 원데이는 `수허 15-322호` — **`호` 앞에 공백이 없다.** 같은 문장의 바이오피니티는 `수허 08-131`로 **`호`가 아예 없다.**
  MFDS 원장 표시는 `수허 15-322 호`로 **공백이 있다.** 셋 다 원문을 그대로 옮긴다.
- 이 문장에서 프로클리어 원데이는 `수허 07-568호`인데 MFDS 원장(S1-2)에는 `수허 07-856 호`로 되어 있다.
  본 검증 대상은 아니지만 **한국 공식 페이지의 허가번호 표기가 원장과 어긋난 사례가 실제로 존재한다**는 사실은 기록해 둔다.

---

## S4. 쿠퍼비전코리아 제품 사양서 (한국 공식 사양)

- URL: https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf
- 조회일: 2026-08-28 · HTTP 200 · 1,111,102 bytes · 3페이지
- 게시 위치: https://coopervision.co.kr/practitioner/our-products (2026-08-28 HTTP 200) 에서 링크되는 **유일한 PDF**
- 문서 식별 표기: 2쪽 하단 `©2023 CooperVision SA09487 Rev #4 09/2023`
- 방법: `curl -L` 다운로드 → pypdf / PyMuPDF 텍스트 추출.
  표가 다단 컬럼이라 **텍스트 순서만으로는 열 귀속이 흔들리므로 좌표(x, y)를 함께 뽑아 열 귀속을 확인**하고,
  해당 행을 이미지로 렌더링해 **육안으로도 대조**했다.

### S4-1. 2쪽 헤더 열 좌표 (PyMuPDF 좌표계, 원점 좌상단)

```
x  40  제품명 Product
x  88  정점 굴절력 Sphere Power (DS)*
x 148  원주 굴절력 Cylinder Power (DC)
x 213  원주 축 Axis°
x 260  ADD 도수 Add Power (D)
x 327  디자인 Design
x 373  착용기간 Wear Schedule & Replacement Frequency
x 435  내면곡률반경 Base Curve (mm)
x 488  렌즈 직경 Diameter (mm)
x 553  렌즈 재질 Material USAN
x 607  함수율 Water content (%)
x 660  산소 투과율 Oxygen transmissibility Dk/t †
x 721  자외선 차단 등급 UV Blocking ‡ & Class
x 783  가시성 색조 Visibility Tint
```

### S4-2. 2쪽 `clariti® 1 day sphere` 행 좌표 추출 (y ≈ 194–202)

```
  y 194.7  x 542.9  실리콘
  y 194.7  x 561.0  하이드로겔      <- 렌즈 재질 열
  y 201.5  x 550.2  stenﬁlcon
  y 201.5  x 577.5  A               <- 렌즈 재질 열 (USAN)
  y 198.0  x 446.7  8.6             <- 내면곡률반경 Base Curve (mm)
  y 198.0  x 502.4  14.1            <- 렌즈 직경 Diameter (mm)
  y 198.0  x 619.2  56              <- 함수율 Water content (%)
  y 198.0  x 676.9  86              <- 산소 투과율 Dk/t
  y 198.0  x 728.0  Class 2         <- 자외선 차단 등급 UV Blocking & Class
  y 198.0  x 791.0  No              <- 가시성 색조 Visibility Tint
  (같은 행) Design = Asphere, Wear Schedule = 매일착용 소프트렌즈 / Daily wear; 1 day replacement
  (같은 행) Sphere Power = -10.00 to -6.50 (0.50 단위) / -6.00 to -0.50 (0.25 단위) / +0.50 to +6.00 (0.25 단위) / +6.50 to +8.00 (0.50 단위)
```

**열 귀속 대조군 — 같은 사양서 3쪽 `Biofinity` 행 (파일럿에서 이미 검증된 값과 일치):**

```
  x 447 8.6 · x 503 14.0 · x 620 48 · x 676 171 · x 734 No(UV) · x 791 Yes(가시성 색조) · x 550 comﬁlcon A
```

파일럿이 이 사양서에서 읽은 바이오피니티 값(BC 8.6 / DIA 14.0 / 함수율 48% / Dk/t 171 / UV No)과 정확히 일치한다.
따라서 위 clariti 행의 열 귀속도 같은 규칙으로 신뢰할 수 있다.

### S4-3. ⚠ 한국 사양서의 재질 표기 — `stenfilcon A`

`clariti® 1 day` 3개 행(sphere / toric / multifocal)의 렌즈 재질 열에는 모두
**`실리콘 하이드로겔 stenﬁlcon A`**가 인쇄돼 있다. 좌표 추출뿐 아니라 해당 행을 400% 배율로 렌더링해
육안으로도 `stenfilcon A`임을 확인했다. (`ﬁ`는 `fi` 합자 글리프 U+FB01이며 인쇄된 단어는 `stenfilcon A`다.)

같은 사양서 1쪽에서 `stenfilcon A`는 **MyDay®의 재질**로도 쓰인다(MyDay: BC 8.4 / DIA 14.2 / 함수율 54 / Dk/t 100).
S5·S6(글로벌 공식 자료)과 S1(MFDS 원장 모델명 `Somofilcon A 1day`)은 clariti의 재질을 **`somofilcon A`**로 적는다.
**두 값을 하나로 합치지 않는다.**

### S4-4. 2쪽 각주 원문 — Dk/t 시험 조건과 UV 경고

```
* 근시 제품의 Plano 렌즈 사용 가능 여부는 시장 또는 고객에 따라 다를 수 있습니다.
† (@-3.00DS) x 10 -9  [(cm/sec) x (ml O )/(ml x mmHg)] 2
‡ UV 흡수 콘택트렌즈는 눈과 주변 부위를 완전히 덮지 않기 때문에, 자외선 흡수 고글 또는 선글라스와 같은 보호용 UV  흡수 안경류를 대체하지 않습니다. 고객은 전문가의 지시에 따라 UV 흡수 안경류를 계속 사용해야 합니다.
```

`(ml O )… 2`는 인쇄물에서 `(ml O₂)`의 아래첨자 2가 분리 추출된 것이다.

---

## S5. CooperVision US practitioner — clariti® 1 day (글로벌 전문가 사양)

- URL: https://coopervision.com/practitioner/our-products/clariti-1-day-family/clariti-1-day
- 조회일: 2026-08-28 · HTTP 200 · 지역 표기 `United States`

### Product Details 원문

```
Material / H20 content       somofilcon A / 56%
UV protection                Yes
Replacement schedule         Daily
Oxygen transmissibility      86 Dk/t (at -3.00D)
Revenue carton size          180-pack, 90-pack, and 30-pack blisters
Technology                   Aspheric
Base curve                   8.6
Diameter                     14.1
Sphere power                 -0.50D to -10.00D
                             +0.50D to +8.00D
                             (0.50D steps after +/-6.00D)
                             No Plano
Wearing schedule             Daily Disposable
```

각주 원문(발췌):

```
¶ Based on manufacturers published data. clariti 1 day has Dk/t of 86. Compared to Proclear 1 day (Dk/t 28), 1-day Acuvue Moist (Dk/t 25.5), Dailies Aquacomfort Plus (Dk/t 26) and Biotrue ONEday (Dk/t 42).
```

### 이 페이지에 **없는** 것

- 중심두께(Center Thickness) 항목 **없음** (`thickness` 문자열 0건)
- UV 차단 퍼센트 수치 없음 — `UV protection: Yes`뿐

---

## S6. CooperVision Product Reference Guide (글로벌 사양서)

- URL: https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf
- 게시 위치: https://coopervision.com/practitioner/our-products/product-reference-guide (2026-08-28 HTTP 200)
- 조회일: 2026-08-28 · HTTP 200 · 5,596,469 bytes · 7페이지
- 문서 식별 표기: 2쪽 상단 `Page 2 of 7` / `©2026 CooperVision 17345-6 05/2026`
- 방법: PyMuPDF 좌표 추출로 열 귀속 확인 + 해당 행 500% 렌더링 육안 대조

### S6-1. 2쪽 `SPHERE LENSES` 표 헤더 열 좌표

```
x  38  Product
x 100  Sphere Power (D)
x 185  Design
x 236  Wear Schedule
x 296  Material/ H20 Content
x 361  FDA Group
x 399  Base Curve (mm)
x 434  Dia (mm)
x 465  Oxygen Transmissibility DK/t**
x 537  Revenue Carton Size
x 596  Trials Labeled As / Pack Size
x 659  Features/ Design Technology
```

### S6-2. `clariti® 1 day sphere` 행 좌표 추출 (y ≈ 151–198)

```
  y 151.1 x  30.4  clariti® 1 day
  y 158.7 x  42.0  sphere
  y 163.3 x 103.8  +8.00 to -10.00  (0.50 steps after +/- 6.00) No Plano
  y 179.5 x 185.0  Asphere
  y 179.5 x 234.6  Daily wear
  y 173.5 x 293.4  somoﬁlcon A /
  y 185.5 x 311.4  56%
  y 173.5 x 367.9  5B
  y 185.5 x 364.8  SiHy
  y 179.5 x 404.2  8.6           <- Base Curve (mm)
  y 179.5 x 435.8  14.1          <- Dia (mm)
  y 179.5 x 489.9  86            <- Oxygen Transmissibility DK/t**
  y 161.5 x 536.6  30-pack, 90-pack and 180-pack
  y 163.0 x 666.2  WetLoc® Technology
  y 174.0 x 666.2  UV blocking*
  y 185.0 x 666.2  Optimum modulus
  y 196.0 x 666.2  High oxygen transmissibility
```

500% 렌더링 육안 대조 결과: `clariti® 1 day sphere | +8.00 to -10.00 (0.50 steps after +/- 6.00) No Plano | Asphere | Daily wear | somofilcon A / 56% | 5B SiHy | 8.6 | 14.1 | 86`

### S6-3. 2쪽 각주 원문

```
* WARNING: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear such as UV-absorbing goggles or sunglasses because they do not completely cover the eye and surrounding area. Persons should continue to use their protective UV-absorbing eyewear as directed.
NOTE: Long-term exposure to UV radiation is one of the risk factors associated with cataracts. Exposure is based on a number of factors such as environmental conditions (altitude, geography, cloud cover) and personal factors (extent and nature of the outdoor activities). UV-absorbing contact lenses help provide protection against harmful UV radiation. However, clinical studies have not been done to demonstrate that wearing UV-absorbing contact lenses reduces the risk of developing cataracts or other eye disorders. Consult your Eye Care Practitioner for more information.
**(@-3.00DS) x 10-9 [(cm/sec) x (ml O2)/(ml x mm Hg)].
```

이 문서에도 **중심두께 항목은 없다** (`thickness` 문자열 0건).

---

## S7. 한국 사용설명서(IFU) PDF

- URL: https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/clariti_1day_sphere_patient_instruction.pdf
- 게시 위치: S2(클래리티® 원데이 한국 공식 제품 페이지)의 `사용시 주의 사항` 링크
- 조회일: 2026-08-28 · HTTP 200 · 628,850 bytes · 2페이지 · 텍스트 레이어 정상 추출

### 문서 제목 원문

```
쿠퍼비전 콘택트렌즈 사용방법 및 사용 시 주의사항
(매일착용 소프트콘택트렌즈)
```

### 원문 발췌 — 교체주기

```
사용 후 보관 및 관리 방법 - 일회용 렌즈이므로 하루 착용하며 재사용을 금한다.
```

```
•일회용 렌즈이므로 재착용을 금하며 렌즈 제거 후 바로 폐기한다. 매일착용 일회용 렌즈는 세척이나 소독이 필요하지 않다.
```

### 원문 발췌 — UV 경고

```
•자외선 차단 기능의 콘택트렌즈는 자외선으로부터 눈이나 눈 주변부를 완전히 차단할 수 없으므로 자외선 차단용 고글이나 선글라스를 대신할 수 없다.•자외선에 장시간 노출되는 경우의 위험성으로는 백내장을 들 수 있다. … 그러나, 임상에 따르면 자외선 차단 콘택트렌즈가 눈의 다른 이상이나 백내장의 위험을 낮춘다고 보고되지는 않는다.
```

### 이 PDF에 **없는** 것 (전문 검색으로 확인)

- `수허` / `허가` 문자열 **0건** → **이 IFU에는 허가번호가 없다.**
- `클래리티` / `clariti` / `somofilcon` / `stenfilcon` 문자열 **0건** → 제품명·재질명 표기가 없다.
  파일명만 `clariti_1day_sphere_patient_instruction.pdf`이고, **내용은 쿠퍼비전 매일착용 소프트콘택트렌즈 공통 문서**다.
- `함수율` · `Dk` · BC · DIA · 중심두께 수치 **0건**

---

## S8. 한국 제품 안내 자료 (product reminder) PDF

- URL: https://coopervision.co.kr/sites/coopervision.co.kr/files/product-reminders/coopervision-kr-clariti1d-product-reminder.pdf
- 게시 위치: S2의 `제품 안내 자료` 링크
- 조회일: 2026-08-28 · HTTP 200 · 851,771 bytes · 1페이지 · 표기 `©2021 CooperVision`

### 원문 발췌

```
클래리티® 원데이
높은 산소투과율1을 제공하는 편리한 원데이 콘택트렌즈.
교체 주기   매일
교정        근시 원시
```

```
클래리티 원데이 렌즈를 사용하면, 매일 렌즈를 교체하고, UV 차단 기능*이 내장되어 있으며, 눈에 필요한 산소를 충분히 공급하는 건강한 렌즈 소재로 만들어졌기 때문에 눈 건강에 대한 확신을 가질 수 있습니다.
```

```
* 경고: UV 흡수 콘택트렌즈는 눈과 주변 부위를 완전히 덮지 않기 때문에, 자외선 흡수 고글 또는 선글라스와 같은 보호용 UV 흡수 안경류를 대체하지 않습니다. 환자는 지시에 따라 UV 흡수 안경류를 계속 사용해야 합니다.
```

이 문서에도 BC·DIA·함수율·Dk/t·중심두께 수치와 허가번호는 없다.

---

## 수집된 값 대조표 (합치지 않고 그대로 나열)

| 항목 | S2 한국 제품 페이지 | S3 한국 제품 목록 | S4 한국 사양서 2023 | S5 US practitioner | S6 Product Reference Guide 2026 | S1 MFDS UDI |
| --- | --- | --- | --- | --- | --- | --- |
| BC | — | — | `8.6` | `8.6` | `8.6` | — |
| DIA | — | — | `14.1` | `14.1` | `14.1` | — |
| 함수율 | `함수율 56%` / `1．56%` | `[근시용 1. 56%…]` | `56` | `somofilcon A / 56%` | `somofilcon A / 56%` | — |
| 재질 | `실리콘 하이드로겔` (USAN 없음) | — | **`실리콘 하이드로겔 stenﬁlcon A`** | **`somofilcon A`** | **`somofilcon A`** | 모델명 `Somofilcon A 1day` (수허 19-346 호) |
| Dk/t | **`Dk/t 80`** / `2．80` | **`2. 80`** | **`86`** (@-3.00DS) | **`86 Dk/t (at -3.00D)`** | **`86`** (@-3.00DS) | — |
| 중심두께 | 없음 | 없음 | 없음 | 없음 | 없음 | — |
| 교체주기 | `교체 주기 / 매일` | — | `매일착용 소프트렌즈 Daily wear; 1 day replacement` | `Daily` / `Daily Disposable` | `Daily wear` | 소분류 `매일착용소프트콘택트렌즈` |
| UV | `UV 차단 기능이 적용되어 있으며` (수치 없음) | — | `Class 2` | `Yes` | `UV blocking*` | — |
| 허가번호 | 없음 | **`수허 15-322호`** | 없음 | — | — | **`수허 15-322 호`** (모델명 `Clariti 1day`) / **`수허 19-346 호`** (업체 제품 명칭 `산소렌즈 clariti 1day`) |

---

## 확인하지 못한 것

1. **중심두께** — S2·S4·S5·S6·S7·S8 어디에도 중심두께 항목이 없다. `thickness`·`두께` 문자열이 6개 문서 전부에서 0건.
   `unknown`으로 둔다. **없다는 뜻이 아니라 검토한 공식 자료에 표기가 없다는 뜻이다.**
2. **판매 포장에 인쇄된 허가번호** — S1-3에서 구면 제품에 `수허 15-322 호`와 `수허 19-346 호`가 모두 연결된다.
   실물 포장·라벨을 확인하지 못해 어느 번호가 현재 유통 제품의 번호인지 확정하지 못했다.
3. **한국 사양서의 `stenfilcon A` 표기가 오기인지 여부** — 정정판이나 쿠퍼비전코리아의 공식 해명을 찾지 못했다.
   S4는 `Rev #4 09/2023`이 최신 개정으로 게시돼 있다. 추정으로 `somofilcon A`로 고치지 않는다.
4. **한국 표기 Dk/t `80`의 시험 조건** — S2·S3 어디에도 시험 도수·측정법·온도 표기가 없다.
   `86`(@-3.00DS)과 조건이 같은지 다른지 확인할 수 없어 두 값을 합치지 않는다.
5. **UV 차단 퍼센트** — 어떤 공식 자료에도 UVA/UVB 차단율 수치가 없다. 한국 사양서의 `Class 2` 등급 표기가 가장 구체적인 값이다.
6. **한국 유통 도수 범위** — S4(한국 사양서)와 S5(US)의 구면 도수 범위 표기가 다르다.
   S4: `-10.00 to -6.50 (0.50 단위) / -6.00 to -0.50 (0.25 단위) / +0.50 to +6.00 (0.25 단위) / +6.50 to +8.00 (0.50 단위)`
   S5: `-0.50D to -10.00D / +0.50D to +8.00D (0.50D steps after +/-6.00D) No Plano`
   본 검증의 9개 필드에는 도수 범위가 없어 값으로 옮기지 않았으나, 제품 페이지를 만들 때 병기가 필요하다.
