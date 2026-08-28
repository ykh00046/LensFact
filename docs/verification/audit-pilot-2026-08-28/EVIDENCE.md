# 검증 근거 — 파일럿 3제품 재검증 (2026-08-28 감사)

감사일: 2026-08-28
대상: `site/assets/data/products.js`의 파일럿 3제품

- `acuvue-oasys-1-day` — 아큐브 오아시스 원데이®
- `dailies-total1` — 데일리스 토탈원®
- `biofinity` — 바이오피니티®

제외: `biofinity.thickness`(`0.08 mm`) — 별도 에이전트가 정정 중이므로 이 감사에서 판정하지 않는다.
(다만 오늘 재확인한 사실만 §S9에 기록한다.)

이 문서는 **오늘 실제로 가져온 공식 자료의 원문**만 담는다. 값의 해석·정규화는 하지 않는다.
판정 요약과 정정 지시는 같은 폴더의 `FINDINGS.md`에 있다.

---

## 0. 가져온 자료 목록 (전부 2026-08-28)

| # | 자료 | URL | 상태 |
| --- | --- | --- | --- |
| S1 | ACUVUE Technical Specification Guide (05-27-25) | https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf | 200 · 2,097,103 bytes · 4쪽 |
| S2 | 아큐브 오아시스 원데이® 한국 공식 제품 페이지 | https://acuvue.co.kr/products/acuvue-oasys-1-day | 200 · 63,231 bytes |
| S3 | 아큐브 오아시스 원데이® 한국 사용설명서(IFU) PDF | https://acuvue.co.kr/files/patient-instruction-guides/Oasys1day_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf | 200 · 486,661 bytes · 4쪽 |
| S3b | 아큐브 한국 IFU 목록 페이지 (제품↔PDF 연결 확인용) | https://acuvue.co.kr/patient-instruction-guides | 200 · 69,126 bytes |
| S4 | MFDS 의료기기 UDI 표준코드 조회 | https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do | 200 |
| S5 | DAILIES TOTAL1 미국 전문가용 공식 사양 | https://www.myalcon.com/professional/contact-lenses/daily/dailies-total1 | 200 · 404,399 bytes |
| S6 | DAILIES TOTAL1 일본 공식 페이지 | https://www.myalcon.com/jp/contact-lenses/daily/dailies-total1 | 200 · 194,597 bytes |
| S7 | 데일리스 토탈원 한국 공식 제품 페이지 | https://total.myalcon.com/kr/products/dailies-total1 | 200 · 157,093 bytes |
| S8 | 쿠퍼비전코리아 제품 사양서 PDF (CVK Product Specifications) | https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf | 200 · 1,111,102 bytes · 3쪽 |
| S9 | Biofinity & Biofinity XR 미국 전문가용 페이지 | https://coopervision.com/practitioner/our-products/biofinity-family/biofinity-biofinity-xr | 200 · 105,256 bytes |
| S10 | 바이오피니티 한국 공식 제품 페이지 | https://coopervision.co.kr/contact-lenses/biofinity | 200 · 132,958 bytes |
| S11 | 쿠퍼비전코리아 전체 제품 목록 | https://coopervision.co.kr/contact-lenses | 200 · 73,481 bytes |
| S12 | PubMed 26543349 | https://pubmed.ncbi.nlm.nih.gov/26543349 | **차단(403)** — Europe PMC REST로 대체 확인 |

방법:

- HTML: `curl -L`(User-Agent 지정) 저장 후 태그 제거 + gstack 헤드리스 브라우저(`browse goto` → `browse text`) 양쪽 확인
- PDF: `curl -L` 다운로드 → pypdf 6.16.2로 존재 확인 → 다단 컬럼 표는 **PyMuPDF 1.28.2 단어 단위 bbox(x0, y0, x1, y1)로 열·행 귀속 확인**
- MFDS: gstack 브라우저 세션에서 화면이 쓰는 동일 엔드포인트 `POST /msismext/udi/uif/selectStddCdLstAjax.do`를
  같은 세션·쿠키로 호출하고 `pageSize=500`으로 전 페이지를 받아 전수 집계
- 내려받은 파일 보관 위치:
  `C:\Users\interojo\AppData\Local\Temp\claude\C--X-LensFact\2cb2edeb-e8dd-49ea-b627-553f79af878b\scratchpad\evidence\audit\`

---

## S1. ACUVUE Technical Specification Guide — 아큐브 오아시스 원데이 열

- 문서 식별 표기(4쪽): `© Johnson & Johnson and its affiliates 2025  |  PP2020ACLP4800 v13`, 각 쪽 하단 `AS112401`
- 1쪽 크기 792 × 612(가로형). 헤더 y ≈ 102–135에 제품 열 6개가 있다.

### S1-1. 1쪽 열 헤더 x 좌표 — 어느 열이 본 검증 대상인가

```
166.4  ACUVUE® / 207.3 OASYS / 178.4 MAX / 200.3 1-Day
269.2  ACUVUE® / 310.1 OASYS / 281.2 MAX / 303.0 1-Day / 276.7 MULTIFOCAL
372.0  ACUVUE® / 413.0 OASYS / 377.3 MAX / 399.2 1-Day / 425.1 for / 378.5 ASTIGMATISM
480.4  ACUVUE® / 521.4 OASYS / 464.1 MAX / 486.0 1-Day / 512.0 MULTIFOCAL / 493.5 ASTIGMATISM
582.7  ACUVUE® / 623.6 OASYS / 605.7 1-Day                     <- 본 검증 대상 (x 약 575-660)
686.3  ACUVUE® / 727.2 OASYS / 702.5 1-Day / 728.4 for / 691.7 ASTIGMATISM
```

### S1-2. 대상 열(x 575–672) 좌표 추출 — 원문 그대로

행 라벨은 왼쪽 x ≈ 34에 있고 값은 같은 y에 놓인다.

```
   580.9    148.5  Daily Disposable Lens     <- Recommended Replacement (label y 144.2/153.2)
   596.9    170.9  Daily Wear                <- Wearing Schedule (label y 171.2)
   602.7    191.8  90 Pack                   <- Pack Size (label y 191.6)
   580.9    222.0  HydraLuxe® Technology     <- Technology (label y 220.1)
   594.1    251.4  senofilcon A              <- Lens Material (label y 251.3)
   586.6    272.9  121 x 10-9 (-3.00D)       <- Dk/t Value1 (edge corrected) (label y 268.5/277.7)
   608.6    292.9  38%                       <- Water Content (label y 292.8)
   575.3    330.2  Blocks >99.9% of UVB      <- Approximate UV Blocking*† (label y 330.0/339.0)
   591.2    339.0  & 96% of UVA
   611.1    377.9  No                        <- Orientation Mark (label y 376.7)
   605.3    397.8  0.085                     <- Center Thickness (mm @ -3.00D) (label y 391.8/401.0)
   597.4    417.8  8.5/14.3                  <- Parameters BC (mm) / Dia (mm) (label y 415.5/424.5)
   588.7    429.0  -0.50D to -12.00D         <- Power Range (D) (label y 433.8)
   588.3    437.0  +0.50D to +8.00D
   583.1    446.0  (in 0.50D steps above ±6.00D)
   597.4    454.4  9.0/14.3                  <- 두 번째 BC/Dia
   588.7    465.7  -0.50D to -12.00D
   588.3    473.6  +0.50D to +8.00D
   583.1    482.6  (in 0.50D steps above ±6.00D)
```

`get_text(clip)`으로 파라미터 구역만 다시 뽑은 원문:

```
8.5/14.3
-0.50D to -12.00D
+0.50D to +8.00D
(in 0.50D steps above ±6.00D)
 
9.0/14.3
-0.50D to -12.00D
+0.50D to +8.00D
(in 0.50D steps above ±6.00D)
```

표기 주의:

- `senofilcon`은 `fi` 합자 글리프(U+FB01)로 인쇄돼 추출 문자열은 `senoﬁlcon A`가 된다. 인쇄된 단어는 `senofilcon A`다.
- `121 x 10-9`의 `-9`는 인쇄물에서 위첨자다.
- **BC·DIA는 `8.5/14.3` · `9.0/14.3` 형태의 결합 표기다.** `Base Curve 8.5 mm` 같은 단독 문자열은 이 문서에 없다.
- 1쪽 하단 각주 `† 9.0 Base Curve only available in the 30-lens pack.`은 **이 열에 붙어 있지 않다.**
  1쪽 `†` 글리프를 전수 검색한 결과 위치는 (24.3, 588.9) · (95.2, 340.4) · (55.1, 345.3) · (227.4, 193.7)뿐이고,
  마지막 것은 `ACUVUE OASYS MAX 1-Day` 열의 Pack Size 자리다. 대상 열의 `9.0/14.3`에는 † 표시가 없다.

### S1-3. 4쪽 각주 원문 — Dk/t 시험 조건과 UV 경고

```
1. Oxygen transmissibility measured via polarographic method at centre -3.00D lens using boundary corrected, edge corrected Dk value. Units (cm/sec) (ml O2/ml x mm Hg) at 35° C.
* Helps protect against transmission of harmful UV radiation to the cornea and into the eye.
† WARNING: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear such as UV-absorbing goggles or sunglasses because they do not completely cover the eye and surrounding area. You should continue to use UV-absorbing eyewear as directed. …
```

---

## S2. 아큐브 오아시스 원데이® 한국 공식 제품 페이지

- `curl -L` 텍스트와 gstack 브라우저 렌더링(`browse text`, 7,082 bytes) **양쪽에서 동일 결과**

### 페이지 텍스트에서 확인된 항목 (원문 발췌)

```
아큐브 오아시스 원데이®
더욱 뛰어난 편안함으로 하루 종일 촉촉하고 선명하게
1일 착용
근시/원시
```

```
눈물을 지키는 하이드라럭스™ 기술
안구 모양에 따라 선택 가능한 2가지 렌즈 디자인
평평한 안구에 적합한 9.0 베이스커브까지!
자외선 차단 1등급 - UVA 90%, UVB 99% 이상 차단#
1박스 30/90렌즈
```

```
이 제품은 의료기기(시력보정용 매일착용 소프트콘택트렌즈)이며, 사용상의 주의사항과 사용방법을 잘 읽고 사용하십시오. 의료기기심의필 42024-I10-24-2098 (유효기간: 27.06.21)
# UVA 316~380nm, UVB 280~315nm 범위에서 측정
경고: 자외선 차단 콘택트렌즈는 눈과 주변을 완전히 덮지 못하므로 고글이나 선글라스와 같은 자외선 차단 안경을 대신할 수 없습니다. …
```

```
(주)한국존슨앤드존슨비전
서울시 용산구 한강대로 92 l 대표자: 김예리
```

### 이 페이지에 **없는** 것 (curl HTML·브라우저 렌더링 양쪽 문자열 카운트)

| 문자열 | HTML | 브라우저 텍스트 |
| --- | --- | --- |
| `senofilcon` | 0 | 0 |
| `세노필콘` | 0 | 0 |
| `실리콘` | 0 | 0 |
| `함수` | 0 | 0 |
| `1일 교체` | 0 | **0** |
| `1일 착용` | — | **2** |
| `14.3` | 0 | 0 |
| `0.085` | 0 | 0 |
| `121` | 4 (전부 SVG path 좌표) | 0 |
| `수허` | 0 | 0 |

→ **재질명·함수율·DIA·중심두께·Dk/t·허가번호 문자열이 이 페이지에 없다.**
`1일 교체`라는 문자열도 없다(있는 것은 `1일 착용`).
`42024-I10-24-2098`은 **의료기기 광고 사전심의 번호**이며 허가번호가 아니다.
`평평한 안구에 적합한 9.0 베이스커브까지!`는 한국 페이지에서 확인되는 **유일한 파라미터 언급**이며, `8.5`는 언급되지 않는다.

---

## S3. 아큐브 오아시스 원데이® 한국 사용설명서(IFU) PDF

- 486,661 bytes · 4쪽 · 텍스트 레이어 정상 추출(8,921자) · PDF 생성일 `D:20260713141227+09'00'`
- 문서 표기: `© Johnson & Johnson Vision Care Companies 2026`, `TSP_E (00)`, `작성연월: 2026 년 07 월`

### 제품 연결 근거

IFU 목록 페이지 https://acuvue.co.kr/patient-instruction-guides (2026-08-28, HTTP 200)에서
링크와 제품명 대응을 전부 뽑은 결과:

```
Oasys1day_사용방법.pdf            <== 아큐브 오아시스 원데이®
Oasys1dayAstigmatism_사용방법.pdf <== 아큐브 오아시스 원데이® 난시용
Moist_사용방법.pdf                <== 원데이 아큐브 모이스트®
OasysMAX_사용방법.pdf             <== 아큐브® 오아시스 MAX 원데이
```

PDF 1쪽 하단에도 제품명이 인쇄돼 있다:

```
ACUVUE OASYS Brand Contact Lenses with HydraLuxe (아큐브 오아시스 원데이)
```

### 원문 발췌 — 허가번호 (모이스트 IFU와 달리 **존재한다**)

```
의료기기 일회용 재사용금지
[수입허가번호] 수허16-499 호
[사용목적] 안구에 직접 부착하여 시력보정(근시 또는 원시) 용으로 사용하는 친수성 일일 착용렌즈로서 자외선 차단 기능이 있는
매일착용소프트콘택트렌즈이다. 활동시간 동안 착용하고 야간 취침시에 착용을 하지 않는다.
```

> **표기 차이 기록:** IFU 원문은 `수허16-499 호`로 **`수허`와 숫자 사이에 공백이 없다.**
> `products.js`가 이 출처의 `raw`로 적어 둔 `수허 16-499 호`(공백 있음)는 **MFDS 원장 표기**와 같고 IFU 표기와는 다르다.

### 원문 발췌 — 교체주기

```
다. 콘택트렌즈 사용 후 보관 및 관리 방법
1. 일일 착용 콘택트렌즈는 제거 후 재사용하지 않고 새로운 콘택트렌즈 또는 안경을 사용하므로, 별도의 세척 또는 소독이 필요하지 않다.
2. 착용한 렌즈는 1 회(1 일) 착용 후 교체하여야 한다.
3. 재사용 금지
```

(`1 회(1 일)`의 공백은 PDF 텍스트 추출 산물이며 인쇄물은 `1회(1일)`이다.)

### 원문 발췌 — UV

```
2. 본 콘택트렌즈는 자외선차단물질을 포함하고 있어 각막과 눈에 해로운 자외선복사를 막는데 도움이 된다. …
6. 자외선흡수 콘택트렌즈가 눈 전체 또는 눈 주위를 완전히 보호할 수 없으므로 콘택트렌즈가 자외선흡수 고글 또는 선글라스 등 자외선차단 안경을 대신할 수는 없다.
```

### 이 PDF에 **없는** 것 (전문 문자열 카운트)

`senofilcon` 0 · `세노필콘` 0 · `함수` 0 · `Dk` 0 · BC·DIA·중심두께 수치 0 · UV 차단 퍼센트 0

---

## S4. MFDS 의료기기 UDI 표준코드 조회

- 공통 조회 조건: `dateCancelChk=N`(통합정보등록일자 제외 체크됨), `selRcprslryTrgtYn=`(전체), `sDate=` / `eDate=` 비움, `pageSize=500`
- 응답 필드: `totCnt`, `bplcNm`, `companyType`, `prdlNm`, `grade`, `itemPermitNo`, `modelnm`, `prdtNmCn`, `udidicd`, `mummPunitQy` …

### S4-1. 아큐브 오아시스 원데이 — 조회 조건별 건수

| # | 조회 조건 | 조회 건수(totCnt) |
| --- | --- | --- |
| A1 | `bplcNm=한국존슨앤드존슨비전` | 51,144 |
| A2 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=OASYS` | 38,345 |
| A3 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=ACUVUE OASYS 1-Day` | **0** |
| A4 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=ACUVUE® OASYS 1-Day` | **0** |
| A5 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=HydraLuxe` | 10,895 |
| A6 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=ACUVUE OASYS Brand` | 5,824 |
| A7 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=ACUVUE OASYS Brand Contact Lenses with HydraLuxe` | **497** |
| A8 | `modelnm=ACUVUE OASYS Brand Contact Lenses with HydraLuxe` (업체명 비움) | **497** |
| A9 | `bplcNm=(주)한국존슨앤드존슨비전` + 위 모델명 | 497 |
| A10 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=acuvue oasys brand contact lenses with hydraluxe` (소문자) | **0** |
| A11 | `itemPermitNo=수허 16-499 호` | **497** |
| A12 | `itemPermitNo=수허16-499 호` (공백 없음) | **497** |

검색 함정 정리:

- **모델명 대소문자 구분**(A10 = 0). 모이스트·마이데이와 동일한 함정.
- **제품 통칭(`ACUVUE OASYS 1-Day`)으로는 0건**(A3). 등록 모델명은 `ACUVUE OASYS Brand Contact Lenses with HydraLuxe`다.
- 이 제품의 등록 모델명에는 **`®`가 없다**(모이스트 구면과 반대). `®`를 넣은 A4는 0건이다.
- 허가번호 조회는 `수허 16-499 호` / `수허16-499 호` **양쪽 다 동작**한다(공백이 정규화됨).
- 마이데이에서 관찰됐던 "업체명 없이 모델명만으로는 결과 없음"은 이 모델명에서는 **재현되지 않았다**(A8 = 497).

### S4-2. A11(`itemPermitNo=수허 16-499 호`, 497건) 전수 집계

497행 전수 수집 후 (업체명 | 업체구분 | 소분류 품목 명칭 | 등급 | 품목허가번호 | 모델명 | 업체 제품 명칭) distinct = **1건**:

```
(주)한국존슨앤드존슨비전 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 16-499 호 | ACUVUE OASYS Brand Contact Lenses with HydraLuxe | ACUVUE OASYS Brand Contact Lenses with HydraLuxe (아큐브 오아시스 원데이) ## 497
```

- 포장내수량 분포: `90` 248건 · `30` 124건 · `5` 124건 · `1` 1건
- **업체 제품 명칭이 한국 IFU 1쪽 인쇄 문자열과 완전히 일치**한다.

### S4-3. A6(`modelnm=ACUVUE OASYS Brand`, 5,824건) 전수 집계 — 계열 분리

```
매일착용 소프트 콘택트렌즈 | 수허 10-43 호  | ACUVUE OASYS Brand Contact Lens for ASTIGMATISM        |                          ## 4950
매일착용소프트콘택트렌즈   | 수허 16-499 호 | ACUVUE OASYS Brand Contact Lenses with HydraLuxe        | …(아큐브 오아시스 원데이)  ## 497
매일착용소프트콘택트렌즈   | 수허 08-938 호 | ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS  | ACUVUE OASYS Brand …      ## 377
```

즉 오아시스 계열 안에서도 허가번호가 나뉘며, **원데이(HydraLuxe) 구면은 `수허 16-499 호` 하나뿐**이다.

**허가번호 원문(MFDS): `수허 16-499 호`**

### S4-4. 바이오피니티 — 조회 조건별 건수

| # | 조회 조건 | 조회 건수 |
| --- | --- | --- |
| B1 | `bplcNm=쿠퍼비전코리아` | 17,003 |
| B2 | `bplcNm=쿠퍼비젼코리아` (젼) | **0** |
| B3 | `bplcNm=쿠퍼비전코리아` + `modelnm=BIOFINITY` (대문자) | **0** |
| B4 | `bplcNm=쿠퍼비전코리아` + `modelnm=Biofinity` | **4,551** |
| B5 | `bplcNm=쿠퍼비전코리아` + `modelnm=바이오피니티` | 0 |
| B6 | `bplcNm=쿠퍼비전코리아` + `modelnm=Comfilcon` | 912 |
| B7 | `bplcNm=쿠퍼비전코리아` + `modelnm=COMFILCON` | 0 |
| B8 | `itemPermitNo=수허 08-131 호` | **94** |
| B9 | `itemPermitNo=수허 08-131` (`호` 없음) | 94 |

- **업체명은 `쿠퍼비전코리아`(전)** — `쿠퍼비젼`은 0건(B2). 마이데이 검증과 같은 함정이 그대로 재현된다.
- 마이데이 구면은 전부 대문자 `MYDAY`였지만 **바이오피니티는 파스칼 케이스 `Biofinity`**다(B3 = 0, B4 = 4,551).
  대소문자 구분은 여전하지만 "구면은 전부 대문자"라는 일반화는 성립하지 않는다.

### S4-5. B8(`itemPermitNo=수허 08-131 호`, 94건) 전수 집계

```
쿠퍼비전코리아(주) | 수입업 | 연속착용 소프트 콘택트렌즈 | 3 | 수허 08-131 호 | Biofinity     |  ## 64
쿠퍼비전코리아(주) | 수입업 | 연속착용 소프트 콘택트렌즈 | 3 | 수허 08-131 호 | Biofinity XR  |  ## 30
```

- 포장내수량: `6` — 94건 전부
- `업체 제품 명칭` 칸은 **비어 있다.**
- **소분류 품목 명칭이 `연속착용 소프트 콘택트렌즈`이고 등급은 `3`이다**(파일럿 다른 두 제품은 `매일착용…`·등급 2).
- 한국 제품 목록(S11) 각주가 `수허 08-131 바이오피니티 & 바이오피니티 XR`로 두 제품을 묶은 것과 원장이 일치한다.

### S4-6. B4(`modelnm=Biofinity`, 4,551건) 전수 집계 — 계열 분리

```
연속착용소프트콘택트렌즈   | 수허 10-1406 호 | Biofinity Toric   |            ## 4392
연속착용소프트콘택트렌즈   | 수허 17-239 호  | Biofinity Energys | 디지털 렌즈 ## 65
연속착용 소프트 콘택트렌즈 | 수허 08-131 호  | Biofinity         |            ## 64
연속착용 소프트 콘택트렌즈 | 수허 08-131 호  | Biofinity XR      |            ## 30
```

**허가번호 원문(MFDS): `수허 08-131 호`** — 한국 제품 목록 표기(`수허 08-131`, `호` 없음)와 **`호` 유무가 다르다.**

### S4-7. 데일리스 토탈원 — 2026-08-27 조회 재실행

| # | 조회 조건 | 2026-08-28 건수 | 2026-08-27 기록 |
| --- | --- | --- | --- |
| D1 | `bplcNm=한국알콘` | **46,382** | 46,382 |
| D2 | `bplcNm=한국알콘` + `modelnm=Dailies Total1` | 495 | (미기록) |
| D3 | `bplcNm=한국알콘` + `modelnm=DAILIES TOTAL1` (대문자) | 4,716 | — |
| D4 | `bplcNm=한국알콘` + `modelnm=Delefilcon` | 0 | — |
| D5 | `itemPermitNo=수허 13-112 호` | **105** | — |
| D6 | `modelnm=Dailies Total1` (업체명 비움) | 495 | — |

D2(495건) 안에서 `prdtNmCn=워터렌즈`로 거른 결과 **105건**, distinct 신원 1건:

```
한국알콘(주) | 매일착용소프트콘택트렌즈 | 수허 13-112 호 | Dailies Total1 | 워터렌즈 ## 105
```

- 포장내수량: `5` 35건 · `30` 35건 · `90` 35건
- distinct UDI-DI 코드 수: 105
- D5(허가번호 단독) 105건의 distinct 신원도 위와 동일한 1건

D2 전체(495건) 분해:

```
매일착용소프트콘택트렌즈 | 수허 17-553 호 | Dailies Total1 Multifocal | 워터렌즈 멀티포컬 ## 390
매일착용소프트콘택트렌즈 | 수허 13-112 호 | Dailies Total1            | 워터렌즈           ## 105
```

→ **2026-08-27 캡처(`docs/MFDS_DAILIES_TOTAL1_IDENTITY_2026-08-27.json`)의 조회 규모(46,382)·매칭 건수(105)·허가번호·포장수량 분포(5/30/90 각 35)가 오늘 그대로 재현된다.**

**허가번호 원문(MFDS): `수허 13-112 호`**

---

## S5. DAILIES TOTAL1 미국 전문가용 공식 사양 페이지

### `Product Details` 표 원문 (라벨 → 값)

```
MATERIAL                          delefilcon A
CENTER THICKNESS (@ -3.00D, mm)   0.09
CORE WATER CONTENT                33%
DIAMETER (mm)                     14.1
HANDLING TINT                     VISITINT®
CORE MODULUS (MPa)                0.7
Dk/t                              156 @ -3.00D
SURFACE WATER CONTENT             -100%
PACKAGING                         5-ct. (trials), 30-ct., 90-ct.
POWER RANGE (D)                   +0.50 to +6.00 (in 0.25D steps), -0.50 to -6.00 (in 0.25D steps), -6.50 to -12.00 (in 0.50D steps)
BASE CURVE (mm)                   8.5
MANUFACTURING                     LightStream® Technology enables the creation of the Water Gradient.
```

표기 주의:

- `SURFACE WATER CONTENT`의 값은 HTML 원문에서 **문자 그대로 `-100%`**다
  (`<div class="value">-100%</div>`, 하이픈-마이너스 U+002D). `~100%`·`≈100%`가 아니다.

### 이 페이지에 **없는** 것 (문자열 카운트)

- `REPLACEMENT` 0 · `Replacement` 0 · `WEARING` 0 · `WEAR SCHEDULE` 0 · `MODALITY` 0
  → **교체주기 행 자체가 없다.** (`Daily disposable`은 참고문헌 제목 안에만 1회 등장)
- 제품 관련 `UV` 표기 0건 (검색된 `UV` 문자열은 전부 New Relic 스크립트 잡음)
  → **UV 표기 부재가 2026-08-28에도 재확인된다.**
- `수허` 0 · `13-112` 0 · `80%` 0

---

## S6. DAILIES TOTAL1 일본 공식 페이지

### 원문 발췌 — 코어/표면 함수율

```
扱いやすさ叶える［レンズコア］  含水率 33%
レンズコアは含水率33％の素材だから、適度な硬さでレンズ形状を保ち、扱いやすさを実現しました。

うるおってやわらかい［レンズ表面］  含水率 〜100%
目やまぶたに触れるレンズ最表面の含水率はほぼ100％※6なのでうるおいたっぷり。
```

```
※レンズコアの含水率は33％、レンズ表面の含水率は80％以上です。
なおレンズコア・表面の含水率の測定方法は、レンズ全体の含水率の測定方法とは異なります。
参照元：Thekveli S, Qiu Y, Kapoor Y, Kumi A, Liang W, Pruitt J. Structure-property relationship of delefilcon A lenses, Cont Lens Anterior Eye. 2012;35（suppl 1）:e14.
```

### 원문 발췌 — Dk/t 단위

```
※3 従来の自社1日使い捨てコンタクトレンズとの比較。-3.00Dの場合の酸素透過率（Dk/t）:156×10-9(cm/sec)・(mLO2/mL×mmHg)
```

### 이 페이지에 **없는** 것

- UV·紫外 관련 제품 표기 0건
- BC(`8.5`) 0건 · DIA(`14.1`) 0건 · 중심두께(`0.09`) 0건

---

## S7. 데일리스 토탈원 한국 공식 제품 페이지

- `curl -L` 텍스트와 gstack 브라우저 렌더링(`browse text`, 2,726 bytes) **양쪽에서 동일 결과**

### 원문 발췌

```
몰랐던 촉촉함에 눈뜨다
DAILIES TOTAL1® 워터렌즈
워터그라디언트 재질이 렌즈 표면에 수분 쿠션을 형성합니다.¹,²
```

```
워터렌즈 장점
워터그라디언트 기술로 우수한 렌즈 착용감
실리콘하이드로겔 재질로 높은 산소투과도¹,²
80% 이상의 표면 함수율로 수분 쿠션이 눈에 닿아 편안한 착용감을 제공¹,²
```

```
이런 분께 추천
관리가 필요 없는 편안한 1회용 렌즈를 찾는 분
```

```
조합-2022-11-081 KR-DT1-2200010
이 제품은 의료기기(매일착용소프트콘택트렌즈)이며, 사용시 주의사항과 사용방법을 잘 읽고 사용하십시오.
```

### 이 페이지에 **없는** 것

| 문자열 | HTML | 브라우저 텍스트 |
| --- | --- | --- |
| `1일 교체` | 0 | **0** |
| `delefilcon` (본문) | 1 (참고문헌 안) | 0 |
| `8.5` / `14.1` / `156` / `33%` | 0 | 0 |
| `수허` / `13-112` | 0 | 0 |

→ **`1일 교체` 문자열이 이 페이지에 없다.** 있는 것은 `1회용 렌즈` · `매일착용소프트콘택트렌즈`다.
→ 반면 **`80% 이상의 표면 함수율`은 한국 공식 페이지에 그대로 있다** — 현재 `products.js`가 인용하지 않는 한국 원문이다.

---

## S8. 쿠퍼비전코리아 제품 사양서 PDF — 바이오피니티 구면 행

- 3쪽 · 가로형(841.89 × 595.276) · PDF 메타 `/Title Cooper Product Specifications` · `/CreationDate D:20231121092224+09'00'`
- 문서 개정 표기(2쪽): `©2023 CooperVision SA09487 Rev #4 09/2023`
- 바이오피니티는 **3쪽 `Frequently Replaced Product. 연속착용소프트렌즈` 표**에 있다.

### S8-1. 3쪽 열 헤더 x 좌표

| 열 | 헤더 원문 | x 범위 |
| --- | --- | --- |
| 1 | 제품명 Product | 39.9–61.9 |
| 2 | 정점 굴절력 Sphere Power (DS)* | 88.0–127.4 |
| 3 | 원주 굴절력 Cylinder Power (DC) | 149.2–180.8 |
| 4 | 원주 축 Axis° | 213.6–231.1 |
| 5 | ADD 도수 Add Power (D) | 260.3–300.4 |
| 6 | 디자인 Design | 328.0–346.5 |
| 7 | 착용기간 Wear Schedule & Replacement Frequency | 373.1–415.7 |
| 8 | 내면곡률반경 Base Curve (mm) | 435.5–467.7 |
| 9 | 렌즈 직경 Diameter (mm) | 488.6–529.8 |
| 10 | 렌즈 재질 Material USAN | 554.7–588.9 |
| 11 | 함수율 Water content (%) | 607.4–639.3 |
| 12 | 산소 투과율 Oxygen transmissibility Dk/t † | 660.1–701.9 |
| 13 | **자외선 투과율 UV Blocking ‡ & Class** | 721.0–754.5 |
| 14 | 가시성 색조 Visibility Tint | 780.8–809.0 |

### S8-2. 행 앵커 — 어느 행이 바이오피니티 구면인가

3쪽 제품명 열 앵커(x0, y0):

```
 38.4  216.4  Biofinity®            <- 본 검증 대상 (구면)
 33.8  315.6  Biofinity® XR
 26.2  413.2  Biofinity Energys®
 30.7  513.7  Biofinity® toric
```

구면 행의 값은 y0 ≈ 173–239 구간, 대표 y0 = **202.3**에 놓인다.
다음 행(XR) 대표 y0 = 300.4이므로 약 98pt 떨어져 있어 섞이지 않는다.

### S8-3. 바이오피니티 구면 행 — 열별 단어 bbox (원문 그대로)

```
열 1  제품명            x  38.4– 66.1  y216.4  Biofinity®
열 2  Sphere Power      x  85.6–128.5  y173.2  -12.00 to -6.50 (0.50 단위)
                        …             y190.3  -6.00  to -0.25 (0.25 단위)
                        …             y207.3  +0.25  to +6.00 (0.25 단위)
                        …             y224.4  +6.50  to +8.00 (0.50 단위)
열 3  Cylinder Power    (구면 행에 값 없음)
열 4  Axis°             (구면 행에 값 없음)
열 5  Add Power         (구면 행에 값 없음)
열 6  Design            x 326.4–348.1  y202.3  Asphere
열 7  Wear Schedule     x 368.9–419.9  y191.8  연속착용소프트렌즈
                        x 367.4–421.4  y198.6  30 days replacement
                        x 375.7–413.1  y205.8  Extended wear
                        x 370.4–418.4  y213.0  14 days/13 nights;
열 8  Base Curve (mm)   x 447.1–456.1  y202.3  8.6
열 9  Diameter (mm)     x 502.9–515.3  y202.3  14.0
열 10 Material USAN     x 543.3–588.9  y199.0  실리콘 하이드로겔
                        x 549.9–582.3  y205.8  comfilcon A
열 11 Water content (%) x 619.6–627.0  y202.3  48
열 12 Dk/t †            x 675.7–686.3  y202.3  171
열 13 UV Blocking&Class x 734.1–741.4  y202.3  No
열 14 Visibility Tint   x 790.5–799.4  y202.3  Yes
```

대조군(바로 아래 Biofinity XR 행, 대표 y0 = 300.4): BC `8.6` · DIA `14.0` · 함수율 `48` · Dk/t `171` · UV `No` · Tint `Yes`.
따라서 **`171`과 `No`가 구면 행의 값임은 좌표로 확정된다.**

### S8-4. 3쪽 각주 원문

```
†  (@-3.00DS) x 10-9 [(cm/sec) x (ml O )/(ml x mmHg)]
‡  UV 흡수 콘택트렌즈는 눈과 주변 부위를 완전히 덮지 않기 때문에, 자외선 흡수 고글 또는 선글라스와 같은 보호용 UV 흡수 안경류를 대체하지 않습니다. 고객은 전문가의 지시에 따라 UV 흡수 안경류를 계속 사용해야 합니다.
*  근시 제품의 Plano 렌즈 사용 가능 여부는 시장 또는 고객에 따라 다를 수 있습니다.
```

표기 주의: `10-9`의 `-9`는 위첨자, `(ml O )` 뒤의 `2`는 아래첨자로 별도 추출된다.
`comfilcon`은 `fi` 합자로 인쇄돼 `comﬁlcon A`로 추출된다.
**Dk/t 각주에 측정법·경계 보정·온도 표기가 없다.** 시험 도수와 단위만 있다.

### S8-5. 이 사양서에 **없는** 것

- **중심두께(center thickness) 열 자체가 없다.** 3쪽 전체에 두께 항목이 없다.
- 허가번호·법인명 없음(`www.coopervision.co.kr`만 표기).

---

## S9. Biofinity & Biofinity XR 미국 전문가용 페이지

### `Product Details` 표 원문 (라벨 → 값)

```
Material / H2O content     comfilcon A / 48%
Replacement schedule       Monthly
Oxygen transmissibility    171 Dk/t (at -3.00D)
Extended wear              Yes
Revenue carton size        6-pack blisters
Technology                 Asphere
Base curve                 8.6
Diameter                   14
Sphere power               +15.00D to -20.00D
                           (0.50D steps after +/-6.00D)
Wearing schedule           Daily or 6 nights / 7 days Extended
```

### 이 페이지에 **없는** 것 (문자열 카운트)

- `thickness` 0 · `Thickness` 0 · `0.08` 0 → **중심두께 항목이 없다.**
  (파일럿이 2026-08-27에 이 페이지를 근거로 기록한 `Center Thickness 0.08 mm`는 오늘 공개 HTML에서 재확인되지 않는다.
  이 필드는 별도 에이전트가 정정 중이므로 본 감사에서는 판정하지 않고 사실만 기록한다.)
- `Product Details` 표에 **UV 행이 없다.** 페이지 본문 전체에서 UV 차단 표기 0건.
- 여기서 DIA는 `14.0`이 아니라 **`14`**로 인쇄된다.

---

## S10. 바이오피니티 한국 공식 제품 페이지

- `curl -L` 텍스트와 gstack 브라우저 렌더링(`browse text`, 4,690 bytes) **양쪽에서 동일 결과**

### 원문 발췌

```
바이오피니티® & 바이오피니티® XR
장시간 착용해도 편안하고 선명한 시력을 제공하는 콘택트렌즈
교체 주기
매월
교정
근시
```

```
바이오피니티®는 장시간 착용이 잦은 일상에 맞춰 설계된 연속 착용 콘택트렌즈로, 높은 함수율과 산소 투과율을 (*별첨 1) 갖춘 실리콘 하이드로겔 소재를 적용해 일상적인 착용 환경에서도 편안한 착용감을 염두에 두고 개발되었습니다.
```

```
주요 제품 특징
구면수차제어로 낮에도 야간에도 선명하고 또렷한 시야를 제공합니다 .
렌즈 수분을 유지하여 촉촉한 렌즈 착용이 가능하며 , 이러한 습윤성은 편안한 착용을 제공합니다 .
UV 차단 기술이 적용되어 , 자외선으로부터 눈을 보호합니다 .
```

```
＊이 제품은 '의료기기'이며, 사용상의 주의사항과 사용 방법을 잘 읽고 사용하세요．
＊눈에 착용하는 콘택트렌즈로 야간 취침시에는 착용을 하지 않습니다．
（심의번호：조합 -2026-13-075, 유효기간：2029-04-22）
＊（별첨 1）바이오피니티®의［1．함수율과 2．산소 투과율（Dk/t）］은 아래와 같습니다．
- 1．48%／2．170
```

### 이 페이지에 **없는** 것 (문자열 카운트, curl/브라우저 동일)

`30일` 0 · `8.6` 0 · `14.0` 0 · `comfilcon` 0 · `171` 0 · `수허` 0 · `쿠퍼비젼` 0

→ **`30일 교체` 문자열이 이 페이지에 없다.** 있는 것은 `교체 주기 / 매월`이다.
→ 재질은 `실리콘 하이드로겔`까지만 말하고 `comfilcon A`는 없다.
→ Dk/t `170`은 별첨 1 각주로 **조건 표기 없이** 제시된다. 함수율 `48%`도 같은 각주에 있다.
→ 페이지 표기는 전부 **`쿠퍼비전`**(전)이며 `쿠퍼비젼`(젼)은 0건이다.
→ 페이지 제목이 `바이오피니티® & 바이오피니티® XR`이므로 이 페이지는 구면과 XR을 함께 다룬다.

---

## S11. 쿠퍼비전코리아 전체 제품 목록 — 허가번호 각주

### 원문 발췌

```
*위의 제품들은 수허 14-2404호 마이데이 원데이, 수허 18-281호 마이데이 토릭, 수허 21-108호 마이데이 멀티포컬, 수허 15-322호 클래리티 원데이, 수허 20-165호 클래리티 토릭, 수허 08-131 바이오피니티 & 바이오피니티 XR, 수허 10-1406호 바이오피니티 토릭 & 바이오피니티 토릭 XR, 수허 17-239호 바이오피니티 에너지스, 수허 07-568호 프로클리어 원데이, 수허 14-720호 프로클리어 멀티포컬, 수허 20-228호 마이사이트 원데이로 '의료기기'이며, 사용상의 주의사항과 사용 방법을 잘 읽고 사용하세요.
**모든 콘택트렌즈는 야간 취침 시 착용하지 마십시오.
(심의번호: 조합-2026-13-082, 유효기간: 2029-04-28)
```

```
*(별첨 1)제품별 [1. 함수율과 2. 산소 투과율(Dk/t)]은 아래와 같습니다.
- 바이오피니티 [근시용 1. 48%, 2. 170] / [난시용 1. 48%, 2. 110] / [에너지스 1. 48%, 2. 170]
```

- `수허 08-131 바이오피니티 & 바이오피니티 XR` — **`호` 없음.** 같은 각주 안의 다른 제품은 전부 `…호`다.
- MFDS 원장(S4-5)은 `수허 08-131 호`다. 번호 자체는 같고 **표기(`호` 유무)만 다르다.**
- 이 페이지 역시 `쿠퍼비전`(전) 표기만 쓴다. `쿠퍼비젼` 0건.

---

## S12. PubMed 26543349 — 직접 접근 차단

- `curl -L`: HTTP **203**, 5,565 bytes (본문 없는 차단 응답)
- gstack 헤드리스 브라우저 `browse goto`: HTTP **403 Forbidden**

→ **이 출처는 오늘 원문 확인이 차단됐다.** 대체로 Europe PMC REST(`EXT_ID:26543349`, HTTP 200)로 서지사항만 확인했다:

```
TITLE:   Evaluation of surface water characteristics of novel daily disposable contact lens materials, using refractive index shifts after wear.
JOURNAL: Clinical ophthalmology (Auckland, N.Z.) 2015
DOI:     10.2147/opth.s90376
ABSTRACT(발췌): … compare surface water characteristics before and after initial wear of recently
introduced nesofilcon A and delefilcon A high surface water lenses with those of etafilcon A lenses.
```

`products.js`가 이 출처에 적어 둔 `document` 값 `Surface water characteristics of daily disposable lens materials`는
실제 논문 제목의 **축약형**이다.
