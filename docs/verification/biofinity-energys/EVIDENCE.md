# 검증 근거 — 바이오피니티 에너지스™ (Biofinity Energys®)

검증일: 2026-08-28
대상: 근시·원시용 투명 구면, 월간 교체 (바이오피니티 구면·XR·토릭은 별개 제품이므로 제외)
제조사: CooperVision · 한국 유통: 쿠퍼비전코리아(주)

이 문서는 실제로 가져온 공식 자료의 **원문**만 담는다. 값의 해석·정규화는 하지 않는다.

가져온 자료(전부 2026-08-28, HTTP 200):

| # | 자료 | URL | 상태 |
| --- | --- | --- | --- |
| S1 | MFDS 의료기기 UDI 표준코드 조회 | https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do | 200 · 헤드리스 브라우저 |
| S2 | 바이오피니티 에너지스™ 한국 공식 제품 페이지 | https://coopervision.co.kr/contact-lenses/biofinity-energys | 200 · 129,341 bytes |
| S3 | 쿠퍼비전코리아 전체 제품 목록 | https://coopervision.co.kr/contact-lenses | 200 · 73,481 bytes |
| S4 | 쿠퍼비전코리아 제품 사양서 (CVK Product Specifications) | https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf | 200 · 1,111,102 bytes · 3쪽 |
| S5 | 바이오피니티 에너지스 한국 사용방법·주의사항 PDF | https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/Biofinity_Energys_patient_instruction.pdf | 200 · 639,237 bytes · 2쪽 |
| S6 | 바이오피니티 에너지스 한국 제품 안내(product reminder) PDF | https://coopervision.co.kr/sites/coopervision.co.kr/files/product-reminders/coopervision-kr-biofinityenergys-product-reminder.pdf | 200 · 682,196 bytes · 1쪽 |
| S7 | Biofinity Energys® 미국 전문가용 제품 페이지 | https://coopervision.com/practitioner/our-products/biofinity-family/biofinity-energys | 200 · 108,723 bytes |
| S8 | CooperVision Product Reference Guide 05/2026 PDF | https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf | 200 · 5,596,469 bytes · 7쪽 |

S5·S6은 S2가 링크한 파일이다. S2의 링크 라벨 원문은 `사용시 주의 사항`(→S5), `지금 다운로드`(→S6)다.

---

## S1. MFDS 의료기기 UDI 표준코드 조회 — 한국 유통·허가 식별

- URL: https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do
- 조회일: 2026-08-28
- 방법: gstack 헤드리스 브라우저(`browse goto` → `#bplcNm`·`#modelnm`·`#itemPermitNo`·`#prdlNm`·`#pageSize` 값 설정 → `#searchBtn` 클릭 → 렌더링된 결과 표 집계). 조회마다 화면을 새로 열었다.
- 공통 조회 조건: `dateCancelChk` 체크됨(=통합정보등록일자 제외), `selRcprslryTrgtYn=`(전체), `sDate=` / `eDate=` 비움

### S1-1. 조회 조건별 건수

| # | 조회 조건 | 결과 |
| --- | --- | --- |
| Q1 | `bplcNm=쿠퍼비전코리아` | **17,003건** |
| Q2 | `bplcNm=쿠퍼비전코리아` + `modelnm=Biofinity Energys` | **65건** |
| Q3 | `bplcNm=쿠퍼비전코리아` + `modelnm=Energys` | **65건** (Q2와 동일 집합) |
| Q4 | `bplcNm=쿠퍼비전코리아` + `modelnm=BIOFINITY ENERGYS` | **0건** |
| Q5 | `bplcNm=쿠퍼비전코리아` + `modelnm=biofinity energys` | **0건** |
| Q6 | `bplcNm=쿠퍼비전코리아` + `modelnm=에너지스` | **0건** |
| Q7 | `bplcNm=쿠퍼비전코리아` + `modelnm=바이오피니티 에너지스` | **0건** |
| Q8 | `bplcNm=쿠퍼비전코리아` + `modelnm=Biofinity Energys®` | **0건** |
| Q9 | `modelnm=Energys` (업체명 비움) | **0건** |
| Q10 | `bplcNm=쿠퍼비젼코리아` + `modelnm=Energys` | **0건** |
| Q11 | `bplcNm=쿠퍼비전코리아` + `modelnm=Biofinity` | **4,551건** |
| Q12 | `bplcNm=쿠퍼비전코리아` + `modelnm=Biofinity XR` | **30건** (`수허 08-131 호`) |
| Q13 | `bplcNm=쿠퍼비전코리아` + `modelnm=Biofinity Toric` | **4,392건** (`수허 10-1406 호`) |
| Q14 | `bplcNm=쿠퍼비전코리아` + `modelnm=Comfilcon` | **0건** |
| Q15 | `bplcNm=쿠퍼비전코리아` + `prdlNm=디지털 렌즈` | **0건** (`prdlNm`은 소분류 품목 명칭 칸이며 업체 제품 명칭이 아니다) |
| Q16 | `bplcNm=쿠퍼비전코리아` + `prdlNm=연속착용소프트콘택트렌즈` | 5,369건 |

### S1-2. 검색 함정 — 마이데이·클래리티와 또 다른 대소문자 규칙

- 업체명은 **`쿠퍼비전코리아(주)`**(`전`)다. `쿠퍼비젼코리아`는 0건(Q10). 마이데이·클래리티 검증과 동일하다.
- 모델명은 **`Biofinity Energys`** — 첫 글자만 대문자인 파스칼 표기다.
  마이데이 구면은 전부 대문자 `MYDAY`였고, 클래리티는 `Clariti 1day`였다.
  **쿠퍼비전 제품이라고 해서 대문자 규칙이 하나로 통일돼 있지 않다.** 제품마다 다시 확인해야 한다.
- `®`를 붙이면 0건(Q8). 한글 모델명은 없다(Q6·Q7).
- 업체명 없이 모델명만으로는 결과가 없다(Q9). 마이데이 검증에서 관찰된 것과 같다.

### S1-3. ⚠ 오늘 `itemPermitNo`(품목허가번호) 검색이 동작하지 않았다

`#itemPermitNo` 단독 조회는 **이미 확인된 번호로도 전부 0건**을 반환했다.

| 입력값 | 결과 |
| --- | --- |
| `수허 17-239 호` | 0건 |
| `수허 17-239호` | 0건 |
| `수허17-239호` | 0건 |
| `17-239` | 0건 |
| `수허 08-131 호` (2026-08-28 감사에서 94건이던 번호) | **0건** |
| `수허 14-2404 호` (마이데이 검증에서 174건이던 번호) | **0건** |
| `수허 13-112 호` (데일리스 토탈원, 105건이던 번호) | **0건** |

즉 **에너지스만의 문제가 아니라 이 화면의 허가번호 검색 자체가 오늘 결과를 돌려주지 않는다.**
따라서 이 검증에서 허가번호는 **업체명+모델명 조회 결과 행에 인쇄된 `품목허가번호` 칸**과
한국 공식 제품 목록 각주(S3)로 확인했고, 허가번호 단독 재현은 하지 못했다.

### S1-4. Q2(`bplcNm=쿠퍼비전코리아` + `modelnm=Biofinity Energys`, 65건) 전수 집계

65행을 `pageSize=500` 한 페이지로 모두 받아 집계했다.
(소분류 품목 명칭 · 등급 · 업체 제품 명칭 · 업체명 · 품목허가번호 · 모델명) distinct = **1건**:

```
연속착용소프트콘택트렌즈 | 3 | 디지털 렌즈 | 쿠퍼비전코리아(주) | 수허 17-239 호 | Biofinity Energys  ## 65
```

- 포장내수량: `6` 65건 (단일 값)
- 화면 문구 원문: `총 65건이 조회됐습니다.`

### S1-5. 화면에 표시된 표 머리글과 결과 행 (Q2) — 원문 그대로

```
연번 | 소분류 품목 명칭 | 등급 | 업체 제품 명칭 | 업체명 | 품목허가번호 | 모델명 | 고유식별자(UDI-DI)코드 | 요양급여 대상 치료재료 여부 | 치료재료코드 | 포장내수량
1 | 연속착용소프트콘택트렌즈 | 3 | 디지털 렌즈 | 쿠퍼비전코리아(주) | 수허 17-239 호 | Biofinity Energys | 00195071351394 | N |  | 6
2 | 연속착용소프트콘택트렌즈 | 3 | 디지털 렌즈 | 쿠퍼비전코리아(주) | 수허 17-239 호 | Biofinity Energys | 00195071351424 | N |  | 6
3 | 연속착용소프트콘택트렌즈 | 3 | 디지털 렌즈 | 쿠퍼비전코리아(주) | 수허 17-239 호 | Biofinity Energys | 00195071351417 | N |  | 6
```

### S1-6. **에너지스는 바이오피니티와 허가번호를 공유하지 않는다** — 이 검증의 1순위 확인 사항

| 변형 | 허가번호(MFDS 원문) | 모델명(MFDS 원문) | 업체 제품 명칭 | 건수 |
| --- | --- | --- | --- | --- |
| **에너지스 (본 검증 대상)** | **`수허 17-239 호`** | **`Biofinity Energys`** | **`디지털 렌즈`** | **65** |
| 바이오피니티 구면 | `수허 08-131 호` | `Biofinity` | (비어 있음) | 64 |
| 바이오피니티 XR | `수허 08-131 호` | `Biofinity XR` | (비어 있음) | 30 |
| 바이오피니티 토릭 | `수허 10-1406 호` | `Biofinity Toric` | (비어 있음) | 4,392 |

`modelnm=Biofinity` 조회 4,551건 = 4,392(토릭) + 65(에너지스) + 64(구면) + 30(XR)로 정확히 나뉜다.
바이오피니티 구면·XR만이 `수허 08-131 호`를 공유하고, **에너지스는 자기 번호 `수허 17-239 호`를 가진다.**
(바이오피니티 구면·XR·토릭 건수는 2026-08-28 감사 기록과 동일하며, 이번에는 `modelnm` 조회로 재확인했다.)

**허가번호 원문(MFDS): `수허 17-239 호`** — `수허`, 공백, `17-239`, 공백, `호`

MFDS는 이 제품을 **`연속착용소프트콘택트렌즈` · 등급 `3`**으로 등록하고 있다.
이는 허가 품목 분류이며 **수면 중 착용 허용을 뜻하지 않는다.** S2·S5의 경고문을 함께 읽어야 한다.

---

## S2. 한국 공식 제품 페이지 — 바이오피니티 에너지스™

- URL: https://coopervision.co.kr/contact-lenses/biofinity-energys
- 조회일: 2026-08-28 · HTTP 200 · 129,341 bytes
- 방법: `curl -L`(HTML 저장 후 태그 제거) + gstack 브라우저 렌더링(innerText) 양쪽에서 동일 문자열 확인

### 페이지 텍스트 원문 발췌

```
바이오피니티 에너지스™
디지털 라이프스타일에 적합한 콘택트렌즈
전문가에게 문의하기
교체 주기
매월
교정
근시
원시
```

```
바이오피니티 에너지스TM는 장시간 착용이 잦은 일상을 고려해 설계된 디지털 렌즈로, 디지털 환경에 장시간 노출된 사람에게 추천하는 연속 착용 콘택트렌즈입니다.
높은 함수율과 산소 투과율을 (* 별첨 1) 갖춘 실리콘 하이드로겔 소재를 적용해 일상적인 착용 환경에서도 편안한 착용감을 염두에 두고 개발되었습니다.
또한 디지털 렌즈 바이오피니티 에너지스TM에 적용된 기술은 하루 종일 이어지는 일상 속에서도 편안한 시력 교정에 집중할 수 있도록 했습니다.
```

```
주요 제품 특징
높은 산소 투과율로 (Dk/t 170) 눈에 필요한 산소를 충분히 제공하여 , 선명한 시야를 유지합니다 .
렌즈 수분을 유지하여 촉촉한 렌즈 착용이 가능하며 , 이러한 습윤성은 편안한 착용을 제공합니다 .
UV 차단 기술이 적용되어 ,
자외선으로부터 눈을 보호합니다 .
넓은 도수 범위를 제공하여 나에게 맞는
시력 교정이 가능합니다 .
```

```
＊이 제품은 '의료기기'이며, 사용상의 주의사항과 사용 방법을 잘 읽고 사용하세요．
＊눈에 착용하는 콘택트렌즈로 야간 취침시에는 착용을 하지 않습니다．
（심의번호：조합 -2026-13-076, 유효기간：2029-04-22）
＊（별첨 1）바이오피니티 에너지스™의 ［1．함수율과 2．산소 투과율（Dk/t）］은 아래와 같습니다．
- 1．48%, 2．110
```

### ⚠ 이 페이지 **한 장 안에서 Dk/t가 서로 다르다**

- 본문 `주요 제품 특징`: **`(Dk/t 170)`**
- 페이지 하단 `별첨 1` 각주: **`- 1．48%, 2．110`** — 즉 Dk/t **110**

두 문자열 모두 `curl -L` 원본 HTML과 브라우저 렌더링 innerText에서 각각 확인했다.
어느 한쪽이 오탈자로 보이더라도 이 검증에서는 **양쪽을 그대로 기록한다.**
(참고 사실: S3의 같은 형식 각주에서 `110`은 바이오피니티 **난시용** 값이다. 이는 관찰이며 원인 판정이 아니다.)

### 이 페이지에 **없는** 것 (직접 확인)

- BC·DIA·중심두께 수치 **0건**. HTML 안의 `8.6`(13회)·`14.0`(1회) 문자열은 전부 아이콘 SVG의 path 좌표였다(문맥 확인 완료).
- 허가번호 문자열 **0건**(`수허` 0건). 허가번호는 제품 목록 페이지(S3)에만 있다.
- 재질명 `comfilcon` 문자열 **0건**. 본문은 `실리콘 하이드로겔`까지만 말한다.
- `두께`·`중심` 문자열 **0건**.
- `Digital Zone Optics` / `디지털 존 옵틱` 문자열 **0건** — 이 페이지는 `디지털 렌즈`라고만 부른다.
- UV **차단율 퍼센트·차단 등급 수치 없음.** `UV 차단 기술이 적용되어` 라는 서술만 있다.
- `조합 -2026-13-076`은 **의료기기 광고 사전심의 번호**다. 허가번호가 아니므로 허가 필드에 넣지 않는다.

---

## S3. 쿠퍼비전코리아 전체 제품 목록 — 한국 허가번호 표기

- URL: https://coopervision.co.kr/contact-lenses
- 조회일: 2026-08-28 · HTTP 200 · 73,481 bytes

### 원문 발췌 — 제품 카드 태그

```
바이오피니티 에너지스™
한달착용
```

### 원문 발췌 — 허가번호 각주

```
*위의 제품들은 수허 14-2404호 마이데이 원데이, 수허 18-281호 마이데이 토릭, 수허 21-108호 마이데이 멀티포컬, 수허 15-322호 클래리티 원데이, 수허 20-165호 클래리티 토릭, 수허 08-131 바이오피니티 & 바이오피니티 XR, 수허 10-1406호 바이오피니티 토릭 & 바이오피니티 토릭 XR, 수허 17-239호 바이오피니티 에너지스, 수허 07-568호 프로클리어 원데이, 수허 14-720호 프로클리어 멀티포컬, 수허 20-228호 마이사이트 원데이로 '의료기기'이며, 사용상의 주의사항과 사용 방법을 잘 읽고 사용하세요.
**모든 콘택트렌즈는 야간 취침 시 착용하지 마십시오.
(심의번호: 조합-2026-13-082, 유효기간: 2029-04-28)
```

이 각주는 **에너지스를 바이오피니티·XR과 분리해 자기 번호로 적는다.** MFDS 원장(S1-6)과 일치한다.

### 원문 발췌 — 함수율·Dk/t 각주

```
*(별첨 1)제품별 [1. 함수율과 2. 산소 투과율(Dk/t)]은 아래와 같습니다.
- 바이오피니티
[근시용 1. 48%, 2. 170] / [난시용 1. 48%, 2. 110] / [에너지스 1. 48%, 2. 170]
```

### 표기 차이 기록

- 이 페이지: `수허 17-239호` — 숫자와 `호` **사이에 공백 없음**
- MFDS 원장(S1): `수허 17-239 호` — 숫자와 `호` **사이에 공백 있음**

번호 자체는 같고 표기(공백)만 다르다. 각 출처의 원문을 그대로 기록한다.

- 이 페이지의 에너지스 Dk/t는 `170`이고, 같은 회사의 에너지스 제품 페이지(S2) 각주는 `110`이다.
  **두 한국 공식 페이지가 서로 다른 숫자를 적고 있다.**

---

## S4. 쿠퍼비전코리아 제품 사양서 PDF — 한국 공식 수치

- URL: https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf
- 조회일: 2026-08-28 · HTTP 200 · 1,111,102 bytes · 3쪽 · 가로형(841.89 × 595.276)
- PDF 메타데이터: `/Title Cooper Product Specifications` · `/CreationDate D:20231121092224+09'00'`
- **문서 개정 표기(원문): `©2023 CooperVision SA09487 Rev #4 09/2023`**
- 방법: PyMuPDF 1.28.2 단어 단위 bbox(x0, x1, y0)로 열·행 귀속을 확인했다.

에너지스는 **3쪽 `Frequently Replaced Product. 연속착용소프트렌즈` 표**에 있다.

### S4-1. 3쪽 열 헤더 x 좌표

| 열 | 헤더 원문 | x 범위 |
| --- | --- | --- |
| 1 | 제품명 Product | 39.9–61.9 |
| 2 | 정점 굴절력 Sphere Power (DS)* | 88.0–128.0 |
| 3 | 원주 굴절력 Cylinder Power (DC) | 149.2–180.8 |
| 4 | 원주 축 Axis° | 213.6–231.1 |
| 5 | ADD 도수 Add Power (D) | 260.3–300.4 |
| 6 | 디자인 Design | 328.0–346.5 |
| 7 | 착용기간 Wear Schedule & Replacement Frequency | 373.1–415.7 |
| 8 | 내면곡률반경 Base Curve (mm) | 435.5–467.7 |
| 9 | 렌즈 직경 Diameter (mm) | 488.6–529.8 |
| 10 | 렌즈 재질 Material USAN | 554.7–577.6 |
| 11 | 함수율 Water content (%) | 607.4–639.3 |
| 12 | 산소 투과율 Oxygen transmissibility Dk/t † | 660.1–701.9 |
| 13 | **자외선 투과율** UV Blocking ‡ & Class | 721.0–754.5 |
| 14 | 가시성 색조 Visibility Tint | 780.8–809.0 |

표기 주의: 1·2쪽의 같은 열 헤더는 `자외선 차단 등급`인데 **3쪽만 `자외선 투과율`**이다. 원문 그대로 기록한다.

### S4-2. 행 앵커 — 어느 행이 에너지스인가

3쪽 제품명 열의 행 앵커(x0, y0)와 각 행의 값 대표 y0:

```
 38.4  216.4  Bioﬁnity®             <- 값 y0 ≈ 202.3
 33.8  315.6  Bioﬁnity® XR          <- 값 y0 ≈ 300.4
 26.2  413.2  Bioﬁnity Energys®     <- 본 검증 대상 · 값 y0 ≈ 399.8
 30.7  513.7  Bioﬁnity® toric       <- 값 y0 ≈ 499.4
```

제품명 y0와 값 y0의 차이는 네 행 모두 13~15pt로 일정하고, 행 간격은 약 98~100pt다.
값 대역이 **서로 100pt 가까이 떨어져 있어 섞이지 않는다.**

### S4-3. 에너지스 행 — 열별 단어 bbox (원문 그대로)

```
열 1  제품명              x  26.2– 87.0  y413.2  Bioﬁnity Energys®
열 2  Sphere Power        x  85.2–130.3  y370.6  -12.00 to -6.50
                          x  93.9–121.6  y377.6  (0.50 단위)
                          x  87.9–127.6  y387.7  -6.00 to plano
                          x  94.0–121.6  y394.7  (0.25 단위)
                          x  86.5–127.6  y404.8  +0.25 to +6.00
                          x  94.0–121.6  y411.8  (0.25 단위)
                          x  87.5–128.0  y421.8  +6.50 to +8.00
                          x  93.9–121.6  y428.8  (0.50 단위)
열 3  Cylinder Power      (에너지스 행에 값 없음)
열 4  Axis°               (에너지스 행에 값 없음)
열 5  Add Power           (에너지스 행에 값 없음)
열 6  Design              x 326.4–348.1  y399.8  Asphere
열 7  Wear Schedule       x 368.9–419.9  y389.3  연속착용 소프트렌즈
                          x 367.4–421.4  y396.1  30 days  replacement
                          x 375.7–413.1  y403.3  Extended wear
                          x 370.4–418.4  y410.5  14 days/13 nights;
열 8  Base Curve (mm)     x 447.1–456.1  y399.8  8.6
열 9  Diameter (mm)       x 502.9–515.3  y399.8  14.0
열 10 Material USAN       x 543.3–588.9  y396.5  실리콘 하이드로겔
                          x 549.9–582.3  y403.3  comﬁlcon  A
열 11 Water content (%)   x 619.6–627.0  y399.8  48
열 12 Dk/t †              x 675.8–686.4  y399.8  171
열 13 UV Blocking & Class x 734.0–741.3  y399.8  No
열 14 Visibility Tint     x 790.5–799.4  y399.8  Yes
```

대조군(같은 표): 바이오피니티 구면(y202.3)·XR(y300.4)은 `48 / 171 / No`, 토릭(y499.4)은 `48 / 116 / No` · BC `8.7` · DIA `14.5`.
**에너지스의 `171`·`No`는 좌표로 행이 분리 확인된 값이다.**

### S4-4. 3쪽 각주 원문

```
†  (@-3.00DS) x 10-9 [(cm/sec) x (ml O )/(ml x mmHg)]
‡  UV 흡수 콘택트렌즈는 눈과 주변 부위를 완전히 덮지 않기 때문에, 자외선 흡수 고글 또는 선글라스와 같은 보호용 UV 흡수 안경류를 대체하지 않습니다. 고객은 전문가의 지시에 따라 UV 흡수 안경류를 계속 사용해야 합니다.
*  근시 제품의 Plano 렌즈 사용 가능 여부는 시장 또는 고객에 따라 다를 수 있습니다.
```

표기 주의:

- `10-9`의 `-9`는 인쇄물에서 위첨자다. `(ml O )` 뒤의 `2`도 인쇄물에서는 아래첨자이며 별도 문자열로 떨어져 추출된다.
  인쇄된 단위는 `(@-3.00DS) × 10⁻⁹ [(cm/sec) × (ml O₂)/(ml × mmHg)]`이다.
- `comfilcon`은 `fi` 합자 글리프(U+FB01)로 인쇄돼 추출 문자열이 `comﬁlcon  A`(공백 2칸)가 된다. 인쇄된 단어는 `comfilcon A`다.
- **Dk/t 각주에 측정법(분극법 등)·경계 보정 여부·온도가 적혀 있지 않다.** 시험 도수(`@-3.00DS`)와 단위만 있다.

### S4-5. 이 사양서에 **없는** 것

- **중심두께(center thickness) 열 자체가 없다.** 3쪽 전체에 `thickness` 0건 · `두께` 0건 · `중심` 0건.
- 허가번호 없음. 제조·수입업체 법인명 없음.
- `Digital Zone Optics` · `DigitalBoost` 문자열 없음. 디자인 열은 `Asphere`로만 적는다.

---

## S5. 한국 사용방법·주의사항 PDF

- URL: https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/Biofinity_Energys_patient_instruction.pdf
- 조회일: 2026-08-28 · HTTP 200 · 639,237 bytes · 2쪽 · 텍스트 레이어 정상 추출 · `/CreationDate D:20230214185026+09'00'`
- 제품 연결 근거: S2의 `사용시 주의 사항` 링크로 게시된 파일이며, 파일명이 `Biofinity_Energys_patient_instruction`이다.

### 문서 제목 원문

```
쿠퍼비전 콘택트렌즈 사용방법 및 사용 시 주의사항
(연속착용 소프트콘택트렌즈)
```

### 원문 발췌 — 착용 기간

```
착용 기간
• 렌즈 착용과 교체 기간은 안경사나 안과의사에 의해 결정된다. • 매일착용 시에는 한달, 연속착용 시에는 2주까지 연속착용이 가능하다.  그러나 모든 착용자가 최대기간을 착용할 수 있는 것은 아니며 매일착용을 권장한다.  만약,  매일착용을 성공적으로 하는 경우 안경사나 안과의사는 점진적으로 연속착용을 권유할 수 있다.  착용자가 렌즈를 늦은밤 혹은 더 장시간 착용한 경우 렌즈착용 기간을 준수하여 폐기한다.
```

### 원문 발췌 — 경고

```
• 매일착용렌즈는 밤새 착용할 수 없고 착용자는 렌즈를 착용한 채 잠자서는 안된다. 임상에 따르면  연속착용 시 심각한 이상사례가 더 증가되었고, 흡연자가 비흡연자에 비해 더 증가된 것으로 나타났다.
```

### 이 PDF에 **없는** 것 (전문 검색으로 확인)

문자열 출현 횟수: `수허` 0 · `제허` 0 · `허가` 0 · `Biofinity` 0 · `바이오피니티` 0 · `에너지스` 0 ·
`comfilcon` 0 · `함수율` 0 · `Dk` 0 · `8.6` 0 · `14.0` 0 · `48` 0.

→ **이 IFU에는 허가번호도, 제품명도, 어떤 수치도 없다.** 쿠퍼비전 **연속착용 소프트콘택트렌즈 공통 문서**이며
에너지스 제품 페이지에 게시돼 있다는 점만이 제품과의 연결고리다.
마이데이·클래리티에서 나온 `매일착용` 공통 IFU와 같은 구조이고, 이번에는 **연속착용판**이다.
따라서 에너지스 허가번호의 근거는 S1(MFDS)과 S3(한국 제품 목록)뿐이다.

**UV 문구가 이 IFU에는 없다.** 마이데이 IFU(매일착용판)에 있던 자외선 차단 경고 항목이
이 연속착용판에는 나타나지 않는다(`자외선` 0건).

---

## S6. 한국 제품 안내(product reminder) PDF

- URL: https://coopervision.co.kr/sites/coopervision.co.kr/files/product-reminders/coopervision-kr-biofinityenergys-product-reminder.pdf
- 조회일: 2026-08-28 · HTTP 200 · 682,196 bytes · 1쪽 · 문서 표기 `©2021 CooperVision`

### 원문 발췌

```
바이오피니티 에너지스™
디지털 라이프스타일위한 기술이 적용된 콘택트렌즈.
교체 주기   교정
매월        근시  원시
```

```
바쁜 일과로 인해 디지털 기기 활동과 실생활 활동 간에 일상적으로 초점을 전환해야 한다면, 쿠퍼비전® 바이오피니티 에너지스™ 콘택트렌즈로 바꿔 보세요. … 또한 디지털 옵틱스 존™ 렌즈 디자인을 적용한 콘택트렌즈로서, 오늘날의 디지털 라이프스타일을 유지하기 위해 쿠퍼비전® 기술로 탄생되었습니다. 바이오피니티 에너지스™ 렌즈 또한 아쿠아폼™ 기술을 사용하였습니다.
```

```
Biofinity Energys®, CooperVision®, 디지털 옵틱 존™ (Digital Zone Optics™) 및 아쿠아폼® (Aquaform® Technology)는 Cooper Companies, Inc. 및 그 자회사의 등록 상표입니다.
```

이 문서에도 BC·DIA·함수율·Dk/t·중심두께·허가번호 수치는 없다(`수허`·`함수율`·`Dk`·`8.6`·`14.0`·`48`·`UV`·`자외선` 모두 0건).
마케팅 문구는 물성값과 분리해 사용하지 않는다.

디자인 명칭 표기 차이: 이 문서는 `디지털 옵틱스 존™` / `디지털 옵틱 존™ (Digital Zone Optics™)`,
S2 제품 페이지는 `디지털 렌즈`, S7·S8 글로벌 자료는 `DigitalBoost™ / DigitalBoost®`로 적는다. 하나로 합치지 않는다.

---

## S7. Biofinity Energys® 미국 전문가용 제품 페이지 (글로벌 공식 사양)

- URL: https://coopervision.com/practitioner/our-products/biofinity-family/biofinity-energys
- 조회일: 2026-08-28 · HTTP 200 · 108,723 bytes · 지역 표기 `United States`

### `Product Details` 표 원문 (라벨 → 값)

```
Material / H 2 0 content        comfilcon A / 48%
Replacement schedule            Monthly
Oxygen transmissibility         171 Dk/t (at -3.00D)
Extended wear                   Yes
Technology                      DigitalBoost™ technology
Base curve                      8.6
Diameter                        14
Sphere power                    +8.00D to -12.00D
                                (0.50D steps after +/-6.00D)
                                No Plano
Design                          Aspheric lens design
Center thickness                0.08 @ -3.00D
```

`Center thickness` 행은 원본 HTML에서도 확인했다:
`<div class="label">Center thickness</div> … <div class="item">0.08 @ -3.00D</div>`

### 이 페이지에 **없는** 것

- **`UV` 문자열 0건.** UV Blocker 행 자체가 없다. (마이데이 전문가 페이지에는 `UV Blocker* Yes` 행이 있다.)
- Dk/t 측정법·온도 조건 없음. `(at -3.00D)`만 있다.
- 허가·유통 정보 없음.

### ⚠ 형제 제품과의 대비 (기록용)

같은 사이트의 바이오피니티 구면·XR 전문가 페이지
(https://coopervision.com/practitioner/our-products/biofinity-family/biofinity-biofinity-xr)에는
2026-08-28 현재 `thickness` 문자열이 **0건**이다(마이데이 검증에서 확인). 그런데 **에너지스 페이지에는 남아 있다.**
즉 중심두께는 쿠퍼비전 웹사이트에서 제품별로 게재 여부가 갈린다.

---

## S8. CooperVision Product Reference Guide 05/2026 (글로벌 공식 사양서)

- URL: https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf
- 조회일: 2026-08-28 · HTTP 200 · 5,596,469 bytes · 7쪽 · 가로형(792 × 612)
- 문서 개정 표기: `©2026 CooperVision 17345-6 05/2026`
- 방법: PyMuPDF 단어 bbox로 열·행 귀속 확인

에너지스는 **3쪽 `SPHERE LENSES` 표의 `Monthly Replacement Lenses` 구획**에 있다.

### S8-1. 3쪽 열 헤더 x 좌표

```
Product 38.3–70.0 | Sphere Power (D) 100.5–169.5 | Design 185.6–212.4 |
Wear Schedule 237.6–273.1 | Material/H20 Content 295.6–336.4 | FDA Group 352.7–377.3 |
Base Curve (mm) 387.2–410.8 | Dia (mm) 422.2–443.8 | Oxygen Transmissibility DK/t** 456.6–517.4 |
Revenue Carton Size 532.0–559.5 | Trials Labeled As / Pack Size 577.4–620.2 |
Features/Design Technology 664.5–738.7
```

### S8-2. 구획·행 앵커

```
 y130.5  2-Week Replacement Lenses   (Avaira Vitality® 1행)
 y203.0  Monthly Replacement Lenses
 36.1  223.1  Bioﬁnity®
 30.3  280.2  Bioﬁnity® XR
 20.6  337.7  Bioﬁnity Energys®   <- 본 검증 대상 (값 대표 y0 ≈ 357.5)
 23.8  393.6  Proclear® sphere
```

에너지스는 **`Monthly Replacement Lenses` 구획 소속**이다. `2-Week` 구획에는 Avaira Vitality®만 있다.

### S8-3. 에너지스 행 — 열별 단어 bbox

```
Product                  x  20.6– 87.0  y337.7  Bioﬁnity Energys®
Sphere Power (D)         x 103.8–127.1  y341.0  +8.00 …
                         x 118.1–151.9  y361.0  +/-6.00)
                         x 118.7–129.1  y371.0  No (… plano)
Design                   x 184.0–214.0  y357.5  Asphere
Wear Schedule            x 230.5–280.2  y343.0  Daily Wear or
                         x 227.3–283.5  y353.0  Extended Wear
                         x 226.6–284.1  y363.0  up to 6 nights /
                         x 243.1–267.6  y373.0  7 days
Material/H20 Content     x 295.6–344.4  y352.5  comﬁlcon A /
                         x 311.6–328.9  y362.5  48%
FDA Group                x 359.6–370.4  y352.5  5C
                         x 356.7–373.3  y362.5  SiHy
Base Curve (mm)          x 392.7–405.3  y357.5  8.6
Dia (mm)                 x 424.0–442.0  y357.5  14.0
Oxygen Transmissibility  x 479.0–495.0  y357.5  171
Revenue Carton Size      x 532.3–559.3  y357.5  6-pack
Trials Labeled As        x 580.1–617.5  y357.5  Bioﬁnity Energys® /
                         x 588.3–609.3  y368.3  single
Features/Design          y339.1  • Aquaform® Technology
                         y350.1  • DigitalBoost® Technology
                         y361.1  • Optimum modulus
                         y372.1  • High oxygen transmissibility
```

### S8-4. 3쪽 각주 원문

```
**(@-3.00DS) x 10-9 [(cm/sec) x (ml O2)/(ml x mm Hg)].
* WARNING: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear as directed.
NOTE: Long-term exposure to UV radiation …
UV-absorbing contact lenses help provide …
```

`*` UV 각주는 이 쪽에 있지만, **에너지스 행의 Features 목록에는 `UV blocking*` 항목이 없다.**
같은 쪽의 Avaira Vitality® 행에는 `• UV blocking*`이 있다. 즉 이 각주는 그쪽 행에 붙는 것이고
에너지스는 UV 표기 대상이 아니다.

### S8-5. 이 사양서에 **없는** 것

- 7쪽 전체에 `thickness` 문자열 **0건**. 중심두께 열이 없다.
- Dk/t 각주에 측정법·온도 없음. 한국 사양서(S4-4)와 **같은 각주 형식**이다.

### ⚠ S8과 S4의 연속착용 기간 표기가 다르다

| 자료 | 착용기간 원문 |
| --- | --- |
| 한국 사양서 S4 (2023 Rev #4) | `연속착용 소프트렌즈` / `30 days  replacement` / `Extended wear` / `14 days/13 nights;` |
| 글로벌 사양서 S8 (05/2026) | `Daily Wear or Extended Wear up to 6 nights / 7 days` |

교체주기(30일 / Monthly)는 같지만 **연속착용 최대 기간 표기가 한국 2023 자료와 글로벌 2026 자료에서 다르다.**
한국 IFU(S5)는 또 다른 표현(`연속착용 시에는 2주까지`)을 쓴다.
이 값은 교체주기가 아니라 **착용방식**이며, 어느 표기도 임의의 수면착용 허용으로 해석하지 않는다.

---

## 한국 자료와 글로벌 자료의 대조

| 항목 | 한국 사양서 S4 | 한국 제품 페이지 S2 | 한국 제품 목록 S3 | 미국 전문가 S7 | 글로벌 사양서 S8 | 판정 |
| --- | --- | --- | --- | --- | --- | --- |
| BC | `8.6` | 없음 | 없음 | `8.6` | `8.6` | 일치 |
| DIA | `14.0` | 없음 | 없음 | `14` | `14.0` | 일치(표기만 다름) |
| 함수율 | `48` | `1．48%` | `[에너지스 1. 48%…]` | `48%` | `48%` | 일치 |
| 재질 | `comfilcon A` | `실리콘 하이드로겔`(재질명 없음) | 없음 | `comfilcon A` | `comfilcon A` | 일치 |
| **Dk/t** | **`171` (@-3.00DS)** | **본문 `170` · 각주 `110`** | **`170`** | **`171` (at -3.00D)** | **`171`** | **충돌 (3값)** |
| 중심두께 | 열 없음 | 없음 | 없음 | **`0.08 @ -3.00D`** | 열 없음 | 단일 출처 |
| 교체 | `30 days  replacement` | `교체 주기 / 매월` | 태그 `한달착용` | `Monthly` | `Monthly Replacement Lenses` | 일치 |
| 허가 | 없음 | 없음 | `수허 17-239호` | 없음 | 없음 | MFDS와 일치 |
| **UV** | **`No`** | **`UV 차단 기술이 적용되어`** | 없음 | **행 자체 없음** | **Features에 UV 항목 없음** | **충돌** |

바이오피니티에서 나온 두 충돌(Dk/t·UV)이 **에너지스에서도 재현된다.**
다만 Dk/t는 바이오피니티(170 vs 171)보다 심해서, **에너지스는 170·110·171 세 값이 공식 자료에 흩어져 있다.**

---

## 확인하지 못한 것

1. **Dk/t 세 값 중 무엇이 맞는지** — 허가 원장에는 Dk/t가 없고, 쿠퍼비전 한국·글로벌 자료가 서로 다른 숫자를 적는다.
   제조사 정정 고지나 허가 원장 상세를 확인하기 전에는 하나로 합치지 않는다. `conflict`로 둔다.
2. **UV 차단 여부** — 한국 소비자 페이지는 `UV 차단 기술이 적용되어`라고 서술하지만,
   한국 2023 공식 사양서는 같은 칸에 `No`라고 인쇄했고, 미국 전문가 페이지와 글로벌 사양서에는 UV 항목이 아예 없다.
   `없음`으로도 `있음`으로도 단정하지 않고 `conflict`로 둔다.
3. **중심두께의 한국 근거** — `0.08 @ -3.00D`는 **미국 전문가 페이지 한 곳에서만** 확인된다.
   한국 사양서·한국 페이지·한국 IFU·한국 리마인더·글로벌 사양서에는 두께 항목 자체가 없다.
   Dk/t로부터 두께를 유도하거나 Dk로부터 Dk/t를 계산하지 않는다.
4. **Dk/t의 측정법·경계 보정·온도** — 쿠퍼비전 자료는 한국·미국 모두 시험 도수(`@-3.00DS`)와 단위만 적는다.
   아큐브 사양서(분극법 · boundary/edge 보정 · 35℃ 명시)와 조건 표기 수준이 다르므로 숫자만 나란히 놓고 비교하지 않는다.
5. **함수율의 측정 위치(벌크/코어/표면)** — 쿠퍼비전 자료는 `함수율 Water content (%)` 한 줄만 제시한다.
6. **허가번호 단독 재현** — 오늘 MFDS 화면의 `itemPermitNo` 검색이 기존 확인 번호로도 0건을 반환했다(S1-3).
   `수허 17-239 호`는 업체명+모델명 조회 65건의 `품목허가번호` 칸과 한국 제품 목록 각주로만 확인됐다.
7. **연속착용 최대 기간** — 한국 사양서 `14 days/13 nights`, 글로벌 사양서 `up to 6 nights / 7 days`,
   한국 IFU `연속착용 시에는 2주까지`로 세 자료가 다르다. 착용방식 항목이며 본 9개 필드에는 넣지 않는다.
