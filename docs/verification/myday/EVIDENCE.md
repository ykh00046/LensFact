# 검증 근거 — 마이데이® (MyDay® daily disposable)

검증일: 2026-08-28
대상: 근시·원시용 투명 구면, 1일 교체 (토릭·멀티포컬 변형은 제외)
제조사: CooperVision · 한국 유통: 쿠퍼비전코리아(주)

이 문서는 실제로 가져온 공식 자료의 **원문**만 담는다. 값의 해석·정규화는 하지 않는다.

가져온 자료(전부 2026-08-28, HTTP 200):

| # | 자료 | URL | 상태 |
| --- | --- | --- | --- |
| S1 | MFDS 의료기기 UDI 표준코드 조회 | https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do | 200 |
| S2 | 마이데이® 한국 공식 제품 페이지 | https://coopervision.co.kr/contact-lenses/myday-family/myday | 200 · 135,348 bytes |
| S3 | 쿠퍼비전코리아 전체 제품 목록 | https://coopervision.co.kr/contact-lenses | 200 · 73,481 bytes |
| S4 | 쿠퍼비전코리아 제품 사양서 (CVK Product Specifications) | https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf | 200 · 1,111,102 bytes · 3쪽 |
| S5 | 마이데이 한국 사용방법·주의사항 PDF | https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/MyDay_daily_disposable_patient_instruction%20%281%29.pdf | 200 · 628,850 bytes · 2쪽 |
| S6 | 마이데이 한국 제품 안내(product reminder) PDF | https://coopervision.co.kr/sites/coopervision.co.kr/files/product-reminders/coopervision-kr-myday-product-reminder.pdf | 200 · 738,330 bytes · 1쪽 |
| S7 | MyDay® 미국 전문가용 제품 페이지 | https://coopervision.com/practitioner/our-products/myday-family/myday | 200 · 117,797 bytes |
| S8 | CooperVision Product Reference Guide 05/2026 PDF | https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf | 200 · 5,596,469 bytes · 7쪽 |

S8은 S7이 링크한 https://coopervision.com/practitioner/our-products/product-reference-guide (2026-08-28, HTTP 200)에서 얻은 파일이다.

---

## S1. MFDS 의료기기 UDI 표준코드 조회 — 한국 유통·허가 식별

- URL: https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do
- 조회일: 2026-08-28
- 방법: gstack 헤드리스 브라우저(`browse goto` → `#bplcNm`·`#modelnm`·`#itemPermitNo`·`#pageSize` 값 설정 → `#searchBtn` 클릭 → 렌더링된 결과 표 집계)
- 공통 조회 조건: `dateCancelChk=N`(통합정보등록일자 제외 체크됨), `selRcprslryTrgtYn=`(전체), `sDate=` / `eDate=` 비움

### S1-1. 조회 조건별 건수

| # | 조회 조건 | 결과 |
| --- | --- | --- |
| Q1 | `bplcNm=쿠퍼비전코리아` | **17,003건** |
| Q2 | `bplcNm=쿠퍼비젼코리아` | **0건** |
| Q3 | `bplcNm=쿠퍼비전코리아` + `modelnm=MyDay` | 0건 |
| Q4 | `bplcNm=쿠퍼비전코리아` + `modelnm=Myday` | 0건 |
| Q5 | `bplcNm=쿠퍼비전코리아` + `modelnm=MyDay®` | 0건 |
| Q6 | `bplcNm=쿠퍼비전코리아` + `modelnm=마이데이` | 0건 |
| Q7 | `bplcNm=쿠퍼비전코리아` + `modelnm=MYDAY` | **174건** |
| Q7b | `bplcNm=쿠퍼비전코리아(주)` + `modelnm=MYDAY` | 174건 (Q7과 동일) |
| Q8 | `itemPermitNo=수허 14-2404 호` (업체명 비움) | **174건** |
| Q9 | `itemPermitNo=수허 18-281 호` | 3,372건 |
| Q10 | `itemPermitNo=수허 21-108 호` | 462건 |
| Q11 | `bplcNm=쿠퍼비전코리아` + `modelnm=Stenfilcon` | 3,834건 |
| Q12 | `modelnm=MYDAY` (업체명 비움) | `조회결과가 존재하지 않습니다.` |
| Q13 | `modelnm=Stenfilcon A 1day Toric` (업체명 비움) | 결과 없음 |

### S1-2. 두 가지 검색 함정

**(1) 업체명 표기 — `젼`이 아니라 `전`.**
MFDS 원장의 업체명은 **`쿠퍼비전코리아(주)`**다. `쿠퍼비젼코리아`로 조회하면 **0건**이다(Q2).
한국 공식 IFU(S5)·제품 안내 PDF(S6)의 본문 표기도 `쿠퍼비전`이다.

**(2) 모델명 대소문자 — 구면은 전부 대문자 `MYDAY`.**
`MyDay` · `Myday` · `MyDay®` · `마이데이` 어느 것으로도 **0건**이다(Q3~Q6).
등록 모델명이 **`MYDAY`**이고 이 화면의 모델명 검색이 대소문자를 구분하기 때문이다.
아큐브 모이스트에서는 `®` 기호가 함정이었고, 마이데이에서는 **대소문자**가 함정이다.

부수 관찰: 이 화면은 **업체명 없이 모델명만으로는 결과를 돌려주지 않는다**(Q12, Q13).
모델명 조건은 업체명과 함께 써야 한다. 허가번호 단독 조회(Q8)는 정상 동작한다.

### S1-3. Q8(`itemPermitNo=수허 14-2404 호`, 174건) 전수 집계

174행을 `pageSize=500` 한 페이지로 모두 받아 집계했다.
(소분류 품목 명칭 · 업체 제품 명칭 · 업체명 · 품목허가번호 · 모델명) distinct = **1건**:

```
매일착용소프트콘택트렌즈 |  | 쿠퍼비전코리아(주) | 수허 14-2404 호 | MYDAY  ## 174
```

- `업체 제품 명칭` 칸은 **비어 있다**.
- 포장내수량 분포: `5` 58건 · `30` 58건 · `90` 58건
- Q7(업체명+모델명)과 Q8(허가번호 단독)의 건수가 **174로 같고**, 두 집합의 distinct 신원이 동일하다.

### S1-4. 화면에 표시된 결과 행 (Q8) — 원문 그대로

```
총 174건이 조회됐습니다.

연번 | 소분류 품목 명칭 | 등급 | 업체 제품 명칭 | 업체명 | 품목허가번호 | 모델명 | 고유식별자(UDI-DI)코드 | 요양급여 대상 치료재료 여부 | 치료재료코드 | 포장내수량
1 | 매일착용소프트콘택트렌즈 | 2 |  | 쿠퍼비전코리아(주) | 수허 14-2404 호 | MYDAY | 00190090434363 | N |  | 90
2 | 매일착용소프트콘택트렌즈 | 2 |  | 쿠퍼비전코리아(주) | 수허 14-2404 호 | MYDAY | 00190090434356 | N |  | 90
3 | 매일착용소프트콘택트렌즈 | 2 |  | 쿠퍼비전코리아(주) | 수허 14-2404 호 | MYDAY | 00190090434349 | N |  | 90
```

### S1-5. 계열별 허가번호가 서로 다르다

| 변형 | 허가번호(MFDS 원문) | 모델명(MFDS 원문) | 업체 제품 명칭 | 건수 |
| --- | --- | --- | --- | --- |
| 구면 (본 검증 대상) | `수허 14-2404 호` | `MYDAY` | (비어 있음) | 174 |
| 토릭 | `수허 18-281 호` | `Stenfilcon A 1day Toric` | `MyDay Toric` | 3,372 |
| 멀티포컬 | `수허 21-108 호` | `Stenfilcon A 1day Multifocal` | `MyDay Multifocal` | 462 |

구면 등록 모델명 `MYDAY`에는 재질명이 들어 있지 않다. 토릭·멀티포컬 모델명에만 `Stenfilcon A`가 있다.
따라서 **구면 제품의 재질은 MFDS 원장으로는 확인되지 않고** 제조사 사양서로만 확인된다.

**허가번호 원문(MFDS): `수허 14-2404 호`** — `수허`, 공백, `14-2404`, 공백, `호`

---

## S2. 한국 공식 제품 페이지 — 마이데이®

- URL: https://coopervision.co.kr/contact-lenses/myday-family/myday
- 조회일: 2026-08-28 · HTTP 200
- 방법: `curl -L`(HTML 저장 후 태그 제거) + gstack 브라우저 렌더링(`browse goto` → innerText) 양쪽에서 동일 문자열 확인

### 페이지 텍스트에서 확인된 항목 (원문 발췌)

```
마이데이®
바쁜 라이프스타일의 렌즈 착용자를 위한 원데이 콘택트렌즈
전문가에게 문의하기
교체 주기
매일
교정
근시
원시
```

```
마이데이 ® 원데이는 바쁜 일상과 활동적인 라이프스타일을 고려한 하루 착용 콘택트렌즈입니다. 높은 함수율과 산소 투과율을 (* 별첨 1) 갖춘 실리콘 하이드로겔 소재를 적용하여 장시간 이어지는 일상 속에서도 촉촉하고 편안한 착용감을 염두에 두고 설계되었습니다.
```

```
당신을 위한 기능
구면수차제어로 낮에도 야간에도 선명하고 또렷한 시야를 제공합니다 . §
렌즈 수분을 유지하여 촉촉한 렌즈 착용이 가능하며 , 이러한 습윤성은 편안한 착용을 제공합니다 .
UV 차단 기술이 적용되어 , 자외선으로부터 눈을 보호합니다 .
세정이 필요 없고 편리하게 렌즈를 매일 새로 교체할 수 있어 , 언제든 사용할 수 있습니다 .
```

```
＊이 제품은 '의료기기'이며, 사용상의 주의사항과 사용 방법을 잘 읽고 사용하세요．
＊하루 착용하는 콘택트렌즈로 야간 취침시에는 착용을 하지 않습니다．
（심의번호：조합 -2026-13-071, 유효기간：2029-04-22）
＊（별첨 1）마이데이® 원데이의 ［1．함수율과 2．산소 투과율（Dk/t）］은 아래와 같습니다．
- 1．54%, 2．100
```

### 이 페이지에 **없는** 것 (직접 확인)

- BC · DIA · 중심두께 수치 **0건**. HTML 안의 `8.4` / `14.2` 문자열은 전부 로고·아이콘 SVG의 path 좌표였다.
- 허가번호 문자열 **0건**(`수허` 검색 0건). 허가번호는 제품 목록 페이지(S3)에만 있다.
- 재질명 `stenfilcon A` 문자열 **0건**. 본문은 `실리콘 하이드로겔`까지만 말한다.
- UV **차단율 퍼센트·차단 등급 수치 없음**. `UV 차단 기술이 적용되어` 라는 서술만 있다.
- `조합 -2026-13-071`은 **의료기기 광고 사전심의 번호**다. 허가번호가 아니므로 허가 필드에 넣지 않는다.

### 이 페이지에서 링크된 공식 PDF 2건

- `제품 안내 자료` → S5 (사용방법·주의사항)
- 제품 리마인더 → S6

---

## S3. 쿠퍼비전코리아 전체 제품 목록 — 한국 허가번호 표기

- URL: https://coopervision.co.kr/contact-lenses
- 조회일: 2026-08-28 · HTTP 200 · `curl -L` + 브라우저 렌더링 양쪽 확인

### 원문 발췌 — 허가번호 각주

```
*위의 제품들은 수허 14-2404호 마이데이 원데이, 수허 18-281호 마이데이 토릭, 수허 21-108호 마이데이 멀티포컬, 수허 15-322호 클래리티 원데이, 수허 20-165호 클래리티 토릭, 수허 08-131 바이오피니티 & 바이오피니티 XR, 수허 10-1406호 바이오피니티 토릭 & 바이오피니티 토릭 XR, 수허 17-239호 바이오피니티 에너지스, 수허 07-568호 프로클리어 원데이, 수허 14-720호 프로클리어 멀티포컬, 수허 20-228호 마이사이트 원데이로 '의료기기'이며, 사용상의 주의사항과 사용 방법을 잘 읽고 사용하세요.
**모든 콘택트렌즈는 야간 취침 시 착용하지 마십시오.
(심의번호: 조합-2026-13-082, 유효기간: 2029-04-28)
```

### 원문 발췌 — 함수율·Dk/t 각주

```
*(별첨 1)제품별 [1. 함수율과 2. 산소 투과율(Dk/t)]은 아래와 같습니다.
- 마이데이
[근시용 1. 54%, 2. 100] / [난시용 1. 54%, 2. 80] / [멀티포컬 1. 54%, 2. 100]
```

### 표기 차이 기록 (값의 충돌 아님)

- 이 페이지: `수허 14-2404호` — 숫자와 `호` **사이에 공백 없음**
- MFDS 원장(S1): `수허 14-2404 호` — 숫자와 `호` **사이에 공백 있음**

두 곳 모두 한국 공식 자료이며 번호 자체는 같다. 표기(공백)만 다르므로 각 출처의 원문을 그대로 기록한다.
같은 각주 안에서 바이오피니티만 `수허 08-131`로 `호` 없이 적혀 있어, 이 페이지의 표기 방식은 제품마다도 일정하지 않다.

---

## S4. 쿠퍼비전코리아 제품 사양서 PDF — 한국 공식 수치

- URL: https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf
- 조회일: 2026-08-28 · HTTP 200 · 1,111,102 bytes · 3쪽 · 가로형(841.89 × 595.276)
- PDF 메타데이터: `/Title Cooper Product Specifications` · `/CreationDate D:20231121092224+09'00'`
- **문서 개정 표기(2쪽 하단 원문): `©2023 CooperVision SA09487 Rev #4 09/2023`**
- 방법: `curl -L` 다운로드 → pypdf 6.16.2 텍스트 추출로 존재 확인 → 표가 다단 컬럼이라 텍스트 순서만으로는 열 귀속이 흔들리므로 **PyMuPDF 단어 단위 bbox(x0, x1, y0, y1)로 열·행 귀속을 확인**했다.

마이데이 구면은 **1쪽 `1 Day. 매일착용소프트렌즈` 표의 첫 행**에 있다.

### S4-1. 1쪽 열 헤더 x 좌표

| 열 | 헤더 원문 | x 범위 |
| --- | --- | --- |
| 1 | 제품명 Product | 39.9–61.9 |
| 2 | 정점 굴절력 Sphere Power (DS)* | 88.0–127.4 |
| 3 | 원주 굴절력 Cylinder Power (DC) | 149.2–179.1 |
| 4 | 원주 축 Axis° | 213.6–231.1 |
| 5 | ADD 도수 Add Power (D) | 260.3–300.5 |
| 6 | 디자인 Design | 328.0–346.5 |
| 7 | 착용기간 Wear Schedule & Replacement Frequency | 373.1–415.7 |
| 8 | 내면곡률반경 Base Curve (mm) | 435.5–467.7 |
| 9 | 렌즈 직경 Diameter (mm) | 488.6–520.6 |
| 10 | 렌즈 재질 Material USAN | 545.6–586.8 |
| 11 | 함수율 Water content (%) | 607.4–631.5 |
| 12 | 산소 투과율 Oxygen transmissibility Dk/t † | 660.1–695.1 |
| 13 | 자외선 차단 등급 UV Blocking ‡ & Class | 717.6–757.9 |
| 14 | 가시성 색조 Visibility Tint | 780.8–809.0 |

### S4-2. 행 앵커 — 어느 행이 마이데이 구면인가

1쪽 제품명 열의 행 앵커(x0, y0):

```
 33.6  199.5  MyDay®   /  57.6 199.5 daily  /  37.8 206.7 disposable   <- 본 검증 대상
 33.7  281.3  MyDay®   /  57.6 281.3 toric
 39.2  358.4  Proclear®   (1 day multifocal)
 29.8  440.8  Proclear®   (1 day)
 30.3  522.5  MiSight®    (1 day)
```

마이데이 구면 행의 값은 y0 ≈ 178–221 구간에, 대표 y0 = **192.1**에 놓인다.
마이데이 토릭 행은 y0 ≈ 256–277(대표 269.9)이므로 두 행은 **약 78pt 떨어져 있어 섞이지 않는다.**

### S4-3. 마이데이 구면 행 — 열별 단어 bbox (원문 그대로)

```
열 1  제품명              x  33.6– 78.8  y199.5  MyDay® daily
                          x  37.8– 73.3  y206.7  disposable
열 2  Sphere Power        x  85.6–128.5  y163.0  -12.00 to -6.50
                          x  93.9–121.6  y170.0  (0.50 단위)
                          x  87.0–127.1  y180.1  -6.00 to -0.25
                          x  94.0–121.6  y187.1  (0.25 단위)
                          x  86.5–127.6  y197.1  +0.25 to +5.00
                          x  94.0–121.6  y204.1  (0.25 단위)
                          x  86.5–127.6  y214.2  +5.50 to +8.00
                          x  93.9–121.6  y221.2  (0.50 단위)
열 3  Cylinder Power      (구면 행에 값 없음)
열 4  Axis°               (구면 행에 값 없음)
열 5  Add Power           (구면 행에 값 없음)
열 6  Design              x 326.4–348.1  y192.1  Asphere
열 7  Wear Schedule       x 383.4–405.4  y178.0  매일착용
                          x 380.7–408.1  y185.2  소프트렌즈
                          x 379.8–409.1  y192.0  Daily wear;
                          x 387.2–401.7  y199.2  1 day
                          x 377.9–410.9  y206.4  replacement
열 8  Base Curve (mm)     x 447.1–456.1  y192.1  8.4
열 9  Diameter (mm)       x 502.9–515.3  y192.1  14.2
열 10 Material USAN       x 543.4–588.9  y188.8  실리콘 하이드로겔
                          x 550.6–581.6  y195.6  stenﬁlcon A
열 11 Water content (%)   x 619.6–627.0  y192.1  54
열 12 Dk/t †              x 675.5–686.5  y192.1  100
열 13 UV Blocking & Class x 728.5–747.0  y192.1  Class 2
열 14 Visibility Tint     x 790.5–799.4  y192.1  Yes
```

대조군(같은 표 마이데이 토릭 행, y0 = 269.9): BC `8.6` · DIA `14.5` · 함수율 `54` · Dk/t `80` · `Class 2` · `Yes`.
**Dk/t 100은 구면 행의 값이고 80은 토릭 행의 값**임이 좌표로 분리 확인된다.

### S4-4. 1쪽 각주 원문

```
*  근시 제품의 Plano 렌즈 사용 가능 여부는 시장 또는 고객에 따라 다를 수 있습니다.
†  (@-3.00DS) x 10-9 [(cm/sec) x (ml O )/(ml x mmHg)]
‡  UV 흡수 콘택트렌즈는 눈과 주변 부위를 완전히 덮지 않기 때문에, 자외선 흡수 고글 또는 선글라스와 같은 보호용 UV 흡수 안경류를 대체하지 않습니다. 고객은 전문가의 지시에 따라 UV 흡수 안경류를 계속 사용해야 합니다.
```

표기 주의:

- `10-9`의 `-9`는 인쇄물에서 위첨자다. `(ml O )` 뒤의 `2`도 인쇄물에서는 아래첨자이며 별도 문자열로 떨어져 추출된다. 인쇄된 단위는 `(@-3.00DS) × 10⁻⁹ [(cm/sec) × (ml O₂)/(ml × mmHg)]`이다.
- `stenfilcon`은 `fi` 합자 글리프(U+FB01)로 인쇄돼 추출 문자열이 `stenﬁlcon A`가 된다. 인쇄된 단어는 `stenfilcon A`다.
- **Dk/t 각주에 측정법(분극법 등)·경계 보정 여부·온도가 적혀 있지 않다.** 시험 도수(`@-3.00DS`)와 단위만 있다.

### S4-5. 이 사양서에 **없는** 것

- **중심두께(center thickness) 열 자체가 없다.** 3쪽 어디에도 두께 항목이 없다.
- 허가번호 없음. 제조·수입업체 법인명 없음(`www.coopervision.co.kr`만 표기).

---

## S5. 한국 사용방법·주의사항 PDF

- URL: https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/MyDay_daily_disposable_patient_instruction%20%281%29.pdf
- 조회일: 2026-08-28 · HTTP 200 · 628,850 bytes · 2쪽 · 텍스트 레이어 정상 추출
- 제품 연결 근거: S2(마이데이® 한국 공식 제품 페이지)의 `제품 안내 자료` 링크로 게시된 파일이며, 파일명이 `MyDay_daily_disposable_patient_instruction`이다.

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

문자열 출현 횟수: `수허` 0 · `제허` 0 · `허가` 0 · `MyDay` 0 · `마이데이` 0 · `stenfilcon` 0 · `함수율` 0 · `Dk` 0.

→ **이 IFU에는 허가번호도, 제품명도, 어떤 수치도 없다.** 쿠퍼비전 매일착용 소프트렌즈 **공통 문서**이며
마이데이 제품 페이지에 게시돼 있다는 점만이 제품과의 연결고리다.
따라서 마이데이 허가번호의 근거는 S1(MFDS)과 S3(한국 제품 목록)뿐이다.

---

## S6. 한국 제품 안내(product reminder) PDF

- URL: https://coopervision.co.kr/sites/coopervision.co.kr/files/product-reminders/coopervision-kr-myday-product-reminder.pdf
- 조회일: 2026-08-28 · HTTP 200 · 738,330 bytes · 1쪽
- 문서 표기: `©2021 CooperVision`

### 원문 발췌

```
마이데이® 원데이
바쁜 현대인 라이프스타일을 위한 원데이 콘택트렌즈.
교체 주기   교정
매일       근시  원시
```

```
쿠퍼비전의 마이데이® 원데이 콘택트렌즈는 부드러운 실리콘 하이드로겔 렌즈입니다.
```

```
§ 경고: UV 흡수 콘택트렌즈는 눈과 주변 부위를 완전히 덮지 않기 때문에, 자외선 흡수 고글 또는 선글라스와 같은 보호용 UV 흡수 안경류를 대체하지 않습니다. 고객은 지시에 따라 UV 흡수 안경류를 계속 사용해야 합니다.
```

이 문서에도 BC·DIA·함수율·Dk/t·중심두께·허가번호 수치는 없다. 마케팅 문구는 물성값과 분리해 사용하지 않는다.

---

## S7. MyDay® 미국 전문가용 제품 페이지 (글로벌 공식 사양)

- URL: https://coopervision.com/practitioner/our-products/myday-family/myday
- 조회일: 2026-08-28 · HTTP 200 · 지역 표기 `United States`

### `Product Details` 표 원문 (라벨 → 값)

```
Material / H 2 0 content        stenfilcon A / 54%
Replacement schedule            Daily
Oxygen transmissibility         100 Dk/t (at -3.00D)
Revenue carton size             90-pack & 180-pack
Technology                      Aspheric
Base curve                      8.4
Diameter                        14.2
Sphere power                    +8.00D to -12.00D
                                (0.50D steps after +5.00D and -6.00D)
                                No Plano
Wearing schedule                Daily Disposable
UV Blocker*                     Yes
```

### 각주 원문

```
* Warning: UV-absorbing contact lenses are not substitutes for protective UV-absorbing eyewear, such as UV-absorbing goggles or sunglasses, because they do not completely cover the eye and surrounding area. Patients should continue to use UV-absorbing eyewear as directed.
```

### 이 페이지에 **없는** 것

- `thickness` 문자열 **0건** — 중심두께 항목이 없다.
- Dk/t 측정법·온도 조건 없음. `(at -3.00D)`만 있다.
- 같은 사이트의 바이오피니티 전문가 페이지(https://coopervision.com/practitioner/our-products/biofinity-family/biofinity-biofinity-xr, 2026-08-28 HTTP 200)에도 현재 `thickness` 문자열이 **0건**이다.
  파일럿이 2026-08-27에 그 페이지에서 기록한 바이오피니티 `Center Thickness 0.08 mm`는 오늘 공개 HTML에서 재확인되지 않는다. 마이데이와 무관한 별건이지만 기록해 둔다.

---

## S8. CooperVision Product Reference Guide 05/2026 (글로벌 공식 사양서)

- URL: https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf
- 진입 경로: S7이 링크한 https://coopervision.com/practitioner/our-products/product-reference-guide (2026-08-28, HTTP 200)
- 조회일: 2026-08-28 · HTTP 200 · 5,596,469 bytes · 7쪽 · 가로형(792 × 612)
- 문서 개정 표기: `©2026 CooperVision 17345-6 05/2026`
- 방법: PyMuPDF 단어 bbox로 열·행 귀속 확인

마이데이 구면은 **2쪽 `SPHERE LENSES` 표의 `1-Day Disposables` 구획**에 있다.

### S8-1. 2쪽 열 헤더 x 좌표

```
Product 38.3–70.0 | Sphere Power (D) 99.6–168.6 | Design 186.6–213.5 |
Wear Schedule 236.1–271.6 | Material/H20 Content 295.8–344.3 | FDA Group 360.8–385.4 |
Base Curve (mm) 398.3–422.3 | Dia (mm) 434.0–455.5 | Oxygen Transmissibility DK/t** 464.8–525.6 |
Revenue Carton Size 537.1–570.5 | Trials Labeled As / Pack Size 595.8–638.7 |
Features/Design Technology 678.3–752.5
```

### S8-2. 행 앵커

```
 29.5  224.1  MyDay® daily disposable   <- 본 검증 대상 (값 대표 y0 ≈ 256.0)
 23.6  304.2  MyDay Energys®
 25.9  379.1  Proclear® 1 day
```

### S8-3. 마이데이 구면 행 — 열별 단어 bbox

```
Product                  x  29.5– 78.8  y224.1  MyDay® daily
                         x  35.0– 73.3  y233.7  disposable
Sphere Power (D)         x 104.0–164.3  y239.8  +8.00 to -12.00
                         x 102.1–166.2  y261.4  +5.00 and -6.00)
                         x 118.4–149.8  y272.2  No Plano
Design                   x 185.0–215.1  y256.0  Asphere
Wear Schedule            x 234.6–273.2  y256.0  Daily wear
Material/H20 Content     x 295.6–338.4  y249.5  stenﬁlcon A
                         x 340.5–344.4  y249.0  /
                         x 311.4–328.7  y262.5  54%
FDA Group                x 367.9–378.2  y250.0  5B
                         x 364.8–381.3  y262.0  SiHy
Base Curve (mm)          x 404.2–416.8  y256.0  8.4
Dia (mm)                 x 435.8–453.7  y256.0  14.2
Oxygen Transmissibility  x 487.2–503.2  y256.0  100
Revenue Carton Size      x 537.6–569.9  y243.5  90-pack
                         x 547.1–560.5  y256.5  and
                         x 535.5–572.1  y268.5  180-pack
Features/Design          y229.5  • Aquaform® Technology
                         y240.5  • Aberration Neutralizing System™
                         y260.5  • UV blocking*
                         y271.5  • Optimum modulus
                         y282.5  • High oxygen transmissibility
```

### S8-4. 2쪽 각주 원문

```
**(@-3.00DS) x 10-9 [(cm/sec) x (ml O2)/(ml x mm Hg)].
* WARNING: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear such as UV-absorbing goggles or sunglasses because they do not completely cover the eye and surrounding area. Persons should continue to use their protective UV-absorbing …
… UV-absorbing contact lenses help provide protection against harmful UV radiation. However, clinical studies have not been done to demonstrate that wearing UV-absorbing contact lenses reduces the risk of developing cataracts or other eye disorders. Consult your Eye Care …
```

### S8-5. 이 사양서에 **없는** 것

- 7쪽 전체에 `thickness` 문자열 **0건**. 중심두께 열이 없다.
- Dk/t 각주에 측정법·온도 없음. 한국 사양서(S4-4)와 **같은 각주 형식**이다.

---

## 한국 자료와 글로벌 자료의 대조 — 충돌 없음

| 항목 | 한국 사양서 S4 | 한국 페이지 S2·S3 | 미국 전문가 S7 | 미국 사양서 S8 | 판정 |
| --- | --- | --- | --- | --- | --- |
| BC | `8.4` | 없음 | `8.4` | `8.4` | 일치 |
| DIA | `14.2` | 없음 | `14.2` | `14.2` | 일치 |
| 함수율 | `54` | `54%` | `54%` | `54%` | 일치 |
| 재질 | `stenfilcon A` | `실리콘 하이드로겔`(재질명 없음) | `stenfilcon A` | `stenfilcon A` | 일치 |
| Dk/t | `100` (@-3.00DS) | `100` (조건 미표기) | `100 Dk/t (at -3.00D)` | `100` (@-3.00DS) | 일치 |
| 교체 | `Daily wear; 1 day replacement` | `매일` · IFU `하루 착용` | `Daily` | `Daily wear` | 일치 |
| UV | `Class 2` | `UV 차단 기술이 적용되어` | `Yes` | `UV blocking*` | 일치(표현 층위만 다름) |
| 중심두께 | 열 없음 | 없음 | 없음 | 없음 | **어디에도 없음** |

파일럿의 바이오피니티에서 발생한 Dk/t(170 vs 171)·UV(주장 vs `No`) 충돌이 **마이데이에서는 재현되지 않았다.**
(참고: 오늘 확인한 S3 제품 목록 페이지는 바이오피니티 Dk/t를 여전히 `170`, S4 사양서는 `171`로 적고 있어 그 충돌 자체는 그대로다.)

---

## 확인하지 못한 것

1. **중심두께(center thickness)** — 한국 사양서(S4), 한국 제품 페이지(S2), 한국 IFU(S5), 한국 리마인더(S6),
   미국 전문가 페이지(S7), 미국 Product Reference Guide 05/2026(S8) **전부에 항목 자체가 없다.**
   `unknown`으로 둔다. `없음`이나 임의의 수치로 채우지 않는다.
   Dk/t로부터 두께를 유도하거나 Dk로부터 Dk/t를 계산하지 않는다.
2. **Dk/t의 측정법·경계 보정·온도** — 쿠퍼비전 자료는 한국·미국 모두 시험 도수(`@-3.00DS`)와 단위만 적고
   측정법·온도를 적지 않는다. 아큐브 사양서(분극법 · boundary/edge 보정 · 35℃ 명시)와 **조건 표기 수준이 다르므로
   숫자만 나란히 놓고 비교하지 않는다.**
3. **함수율의 측정 위치(벌크/코어/표면)** — 쿠퍼비전 자료는 `함수율 Water content (%)` 한 줄만 제시하고
   측정 위치를 표기하지 않는다. 데일리스 토탈원처럼 코어·표면을 나눠 적는 제품의 숫자와 같은 축에 놓지 않는다.
4. **UV 차단율 퍼센트** — 한국 사양서는 등급(`Class 2`)만, 미국 자료는 `Yes` / `UV blocking*`만 적는다.
   퍼센트 수치는 어느 공식 자료에도 없다. UV 필드는 등급 표기로만 기록한다.
   `Class 2`가 어떤 기준(ISO/FDA UV 차단 등급)을 가리키는지 이 사양서는 정의하지 않는다. 정의를 추정해 붙이지 않는다.
5. **한국 유통 파라미터의 완전성** — 한국 사양서에 BC가 `8.4` 하나뿐이므로 한국에서 다른 BC가 유통되는지는
   확인할 자료가 없다. 미국 자료도 `8.4` 하나만 적는다.
