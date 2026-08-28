# 검증 근거 — 프로클리어® 원데이 (Proclear® 1 day sphere)

검증일: 2026-08-28
대상: 근시·원시용 투명 구면, 1일 교체 (멀티포컬 변형은 제외)
제조사: CooperVision · 한국 유통: 쿠퍼비전코리아(주)

이 문서는 실제로 가져온 공식 자료의 **원문**만 담는다. 값의 해석·정규화는 하지 않는다.

수집한 공식 자료 (전부 2026-08-28, HTTP 200):

| 코드 | 자료 | URL | 상태 |
| --- | --- | --- | --- |
| S1 | MFDS 의료기기 UDI 표준코드 조회 | https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do | 200 · 헤드리스 브라우저 |
| S2 | 프로클리어® 원데이 한국 공식 제품 페이지 | https://coopervision.co.kr/contact-lenses/proclear-1-day | 200 · 129,118 bytes |
| S3 | 쿠퍼비전코리아 전체 제품 목록 | https://coopervision.co.kr/contact-lenses | 200 · 73,481 bytes |
| S4 | 쿠퍼비전코리아 제품 사양서 (CVK Product Specifications) | https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf | 200 · 1,111,102 bytes · 3쪽 |
| S5 | 프로클리어 원데이 한국 사용설명서(IFU) PDF | https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/Proclear_1day_sphere_patient_instruction.pdf | 200 · 628,850 bytes · 2쪽 |
| S6 | 프로클리어 원데이 한국 제품 안내(product reminder) PDF | https://coopervision.co.kr/sites/coopervision.co.kr/files/product-reminders/coopervision-kr-proclear1d-product-reminder.pdf | 200 · 895,065 bytes · 1쪽 |
| S7 | Proclear® 1 day 미국 전문가용 제품 페이지 | https://coopervision.com/practitioner/our-products/proclear-family/proclear-1-day | 200 · 89,094 bytes |
| S8 | CooperVision Product Reference Guide 05/2026 PDF | https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf | 200 · 5,596,469 bytes · 7쪽 |

- S5·S6은 S2(한국 공식 제품 페이지)의 `사용자 정보 책자` · `제품 알림 정보` 링크에서 얻었다.
- S4는 https://coopervision.co.kr/practitioner/our-products (2026-08-28, HTTP 200)에서 링크되는 **유일한 PDF**다.
- S8은 https://coopervision.com/practitioner/our-products/product-reference-guide 에서 배포되는 파일이다.

---

## S1. MFDS 의료기기 UDI 표준코드 조회 — 한국 유통·허가 식별

- URL: https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do
- 조회일: 2026-08-28
- 방법: gstack 헤드리스 브라우저로 조회 화면을 열고, 화면의 검색 폼(`#bplcNm`·`#modelnm`·`#itemPermitNo`·`#pageSize`)에 값을 넣은 뒤 `#searchBtn`을 클릭하고, 렌더링된 결과 표를 집계했다.
- 공통 조회 조건: `dateCancelChk` 체크(통합정보등록일자 제외), `selRcprslryTrgtYn` 전체, `sDate`/`eDate` 비움

### ⚠ 조회 결과 반영이 늦다 — 이 검증에서 새로 드러난 함정

`#searchBtn` 클릭 후 결과 표가 갱신되기까지 **6~14초**가 걸린다.
클릭 뒤 고정 시간(3초)만 기다리고 표를 읽으면 **직전 질의의 결과를 읽게 된다.**
실제로 이 방식으로 처음 돌린 회차에서 `수허 07-856 호` → 0건, `수허 07-568 호` → 95건이라는
**뒤바뀐 결과**가 나왔고, 폴링 방식 재실행에서 정반대로 확인됐다.

그래서 이후 모든 조회는 다음 절차로 다시 돌렸다.

1. 조회 전 결과 `tbody`를 `<tr id="__SENTINEL__">`로 덮어쓴다
2. `#searchBtn` 클릭
3. `__SENTINEL__` 행이 사라질 때까지 0.2초 간격으로 폴링한다
4. 사라진 뒤에 표를 읽는다

아래 표의 모든 숫자는 이 폴링 방식으로 얻은 값이다.
(부수 기록: 같은 요청을 `curl`로 세션 쿠키까지 붙여 보내거나 브라우저 안에서 `fetch`로
`POST /msismext/udi/uif/selectStddCdLstAjax.do`를 직접 호출하는 방법은 이번에도 응답을 받지 못했다.
화면 폼을 실제로 클릭하는 경로만 동작한다.)

### S1-1. 조회 조건별 건수 (폴링 방식)

| # | 조회 조건 | 결과 |
| --- | --- | --- |
| Q1 | `bplcNm=쿠퍼비전코리아` | **17,003건** |
| Q2 | `bplcNm=쿠퍼비젼코리아` | **0건** |
| Q3 | `bplcNm=쿠퍼비전코리아` + `modelnm=Proclear` | **209건** |
| Q4 | `bplcNm=쿠퍼비전코리아` + `modelnm=Proclear 1 Day` (대문자 D) | **95건** — 전부 구면 |
| Q5 | `bplcNm=쿠퍼비전코리아` + `modelnm=Proclear 1 day` (소문자 d) | **114건** — 전부 멀티포컬 |
| Q6 | `bplcNm=쿠퍼비전코리아` + `modelnm=PROCLEAR` | **0건** |
| Q7 | `bplcNm=쿠퍼비전코리아` + `modelnm=proclear` | **0건** |
| Q8 | `bplcNm=쿠퍼비전코리아` + `modelnm=Omafilcon` | **0건** |
| Q9 | `bplcNm=쿠퍼비전코리아` + `modelnm=omafilcon` | **0건** |
| Q10 | `bplcNm=쿠퍼비전코리아` + `modelnm=프로클리어` | **0건** |
| Q11 | `itemPermitNo=수허 07-856 호` (업체명 비움) | **95건** |
| Q12 | `itemPermitNo=수허 07-568 호` (한국 제품 목록 각주 표기) | **0건** |

### S1-2. 세 가지 검색 함정

**(1) 업체명은 `젼`이 아니라 `전`.**
MFDS 원장의 업체명 원문은 **`쿠퍼비전코리아(주)`**다. `쿠퍼비젼코리아`로는 **0건**(Q2)이다.
마이데이·클래리티 검증에서 확인된 것과 같다.

**(2) 모델명 검색이 대소문자를 구분하고, 구면과 멀티포컬이 대소문자로 갈린다.**
구면의 등록 모델명은 **`Proclear 1 Day`**(Day의 D가 대문자)이고,
멀티포컬은 **`Proclear 1 day multifocal`**(day의 d가 소문자)이다.
따라서 `Proclear 1 day`로 조회하면 **구면은 한 건도 잡히지 않고 멀티포컬 114건만** 나온다(Q5).
전부 대문자 `PROCLEAR`도, 전부 소문자 `proclear`도 0건이다(Q6·Q7).
같은 업체의 마이데이 구면이 전부 대문자 `MYDAY`, 클래리티 구면이 `Clariti 1day`였던 것과 또 다른 표기다.
**업체명 + `Proclear`(부분 문자열)로 조회해 209건을 받은 뒤 허가번호별로 나누는 방법**이 가장 안전하다.

**(3) 재질명으로는 잡히지 않는다.**
`Omafilcon`·`omafilcon` 모두 0건(Q8·Q9)이다.
프로클리어 계열의 등록 모델명에는 재질명이 들어 있지 않다.
(같은 업체의 마이데이 토릭 `Stenfilcon A 1day Toric`, 클래리티 구면 별도 등록 `Somofilcon A 1day`처럼
모델명에 재질명이 들어 있는 제품도 있어 규칙이 제품마다 다르다.)

### S1-3. `bplcNm=쿠퍼비전코리아` 17,003건 전수 집계

`pageSize=500`으로 1~35쪽을 모두 받아 고유식별자(UDI-DI) 기준 중복을 제거하고
(품목허가번호 | 모델명 | 업체 제품 명칭) distinct를 집계했다. 고유 행 **17,003건**, distinct **19건**:

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

건수 합은 17,003으로 총 조회 건수와 일치한다.
**`Proclear` 문자열은 이 원장에 정확히 두 번만 나타난다** — 구면 `수허 07-856 호` 95건, 멀티포컬 `수허 14-720 호` 114건.
클래리티에서 나타났던 **이중 등록(구면 하나에 허가번호 두 개)은 프로클리어에서는 재현되지 않았다.**
(이 집계는 클래리티 검증이 같은 날 수행한 17,003건 집계와 19건 전부 일치한다.)

### S1-4. Q11(`itemPermitNo=수허 07-856 호`) 95건 — 화면 표시 원문

```
총 95건이 조회됐습니다.

연번 | 소분류 품목 명칭 | 등급 | 업체 제품 명칭 | 업체명 | 품목허가번호 | 모델명 | 고유식별자(UDI-DI)코드 | 요양급여 대상 치료재료 여부 | 치료재료코드 | 포장내수량
1 | 매일착용 소프트 콘택트렌즈 | 2 |  | 쿠퍼비전코리아(주) | 수허 07-856 호 | Proclear 1 Day | 00190090430891 | N |  | 90
2 | 매일착용 소프트 콘택트렌즈 | 2 |  | 쿠퍼비전코리아(주) | 수허 07-856 호 | Proclear 1 Day | 00190090429369 | N |  | 5
3 | 매일착용 소프트 콘택트렌즈 | 2 |  | 쿠퍼비전코리아(주) | 수허 07-856 호 | Proclear 1 Day | 00190090429352 | N |  | 5
```

- distinct 신원 **1건**: `매일착용 소프트 콘택트렌즈 | 등급 2 | (업체 제품 명칭 비어 있음) | 쿠퍼비전코리아(주) | 수허 07-856 호 | Proclear 1 Day`
- 포장내수량 분포: `5` 33건 · `30` 33건 · `90` 29건
- Q4(업체명+모델명 `Proclear 1 Day`) 95건과 Q11(허가번호 단독) 95건의 **건수와 distinct 신원이 동일**하다.
- 소분류 품목 명칭이 구면은 `매일착용 소프트 콘택트렌즈`(공백 있음), 멀티포컬은 `매일착용소프트콘택트렌즈`(공백 없음)로
  같은 업체 안에서도 표기가 갈린다. 원문 그대로 기록한다.
- `업체 제품 명칭` 칸은 **비어 있다.** 한국어 판매명 `프로클리어 원데이`는 원장에 없다.

**허가번호 원문(MFDS): `수허 07-856 호`** — `수허`, 공백, `07-856`, 공백, `호`

### S1-5. ⚠ 한국 공식 제품 목록의 허가번호와 어긋난다

S3(쿠퍼비전코리아 전체 제품 목록)의 각주는 프로클리어 원데이를 **`수허 07-568호`**로 적는다.
이 번호로 MFDS를 조회하면 **0건**이다(Q12). 원장의 번호는 `수허 07-856 호`이며 가운데 세 자리 숫자의 자리가 뒤바뀐 형태다.

두 자료 모두 한국 공식 자료이므로 **한쪽을 오기로 단정해 지우지 않는다.** 각각의 원문을 그대로 기록하고
`permit` 필드는 `conflict`로 둔다. 다만 독자가 화면 문자열을 그대로 MFDS 조회창에 넣어 검색을
재현할 수 있는 쪽은 `수허 07-856 호`뿐이라는 사실도 함께 적는다.

---

## S2. 한국 공식 제품 페이지 — 프로클리어® 원데이

- URL: https://coopervision.co.kr/contact-lenses/proclear-1-day
- 조회일: 2026-08-28 · HTTP 200
- 방법: `curl -L`(HTML 저장 후 태그 제거) + gstack 브라우저 렌더링(innerText) 양쪽에서 동일 문자열 확인

### 원문 발췌

```
프로클리어® 원데이
건조감을 느끼는 콘택트렌즈 착용자를 위한 원데이 콘택트렌즈
전문가에게 문의하기
교체 주기
매일
교정
근시
원시
```

```
원데이 콘택트렌즈의 편리함을 좋아하지만, 렌즈 착용 시 안구 건조를 경험하고 있다면, 쿠퍼비전 ® 프로클리어TM 원데이 콘택트렌즈가 도움을 드릴 수 있습니다. 친수성 렌즈로 장시간 편안하게 만들어줍니다.
```

```
건조감을 느끼는 콘택트렌즈 착용자를 위해 만들어진 프로클리어 원데이는 근시 또는 원시 착용자 모두 하루 종일 편안한 착용감을 유지하도록 도와줍니다. (* 하루 착용하는 콘택트렌즈로 야간 취침시에는 착용을 하지 않습니다.)
```

```
당신을 위한 기능
세정이 필요 없이 매일 교체할 수 있어 편리합니다.
SA18695/APP166340
```

```
*위의 제품은 ‘의료기기’이며, 사용상의 주의사항과 사용 방법을 잘 읽고 사용하세요. (심의번호: 조합-2026-13-078, 유효기간: 2029-04-28)
```

### 이 페이지에 **없는** 것 (curl·브라우저 렌더링 양쪽에서 전문 검색)

문자열 출현 횟수: `함수율` 0 · `별첨` 0 · `Dk` 0 · `UV` 0 · `자외선` 0 · `수허` 0 · `omafilcon` 0 · `하이드로겔` 0 · `두께` 0 · `8.7` 0 · `14.2` 0 · `60%` 0.

- **이 제품 페이지에는 물성 수치가 하나도 없다.** 마이데이·클래리티 페이지에 있는 `별첨 1`
  (함수율·Dk/t) 각주가 **프로클리어 페이지에는 존재하지 않는다.**
- 재질·BC·DIA·중심두께·UV·허가번호 표기도 없다. `당신을 위한 기능` 항목이 **한 줄뿐**이다.
- `조합-2026-13-078`은 **의료기기 광고 사전심의 번호**다. 허가번호가 아니므로 허가 필드에 넣지 않는다.
  `SA18695/APP166340`은 자료 관리번호이며 허가번호가 아니다.
- 따라서 이 제품의 한국 공식 수치 근거는 **S4(한국 사양서 PDF) 하나뿐**이다.
  `docs/PRODUCT_CANDIDATES_20.md`가 예상한 "한국 페이지 HTML에서는 스펙 문자열이 잡히지 않았다.
  사양서 PDF 의존도가 높다"가 그대로 확인됐다.

### 이 페이지에서 링크된 공식 PDF 2건

- `사용자 정보 책자` → S5
- `제품 알림 정보` → S6

---

## S3. 쿠퍼비전코리아 전체 제품 목록 — 허가번호 표기

- URL: https://coopervision.co.kr/contact-lenses
- 조회일: 2026-08-28 · HTTP 200 · `curl -L` + 브라우저 렌더링 양쪽 확인

### 원문 발췌 — 제품 소개 문장

```
프로클리어® 원데이
프로클리어 ® 는 렌즈 착용 중 눈물 결핍 또는 눈물 증발로 인해 건조함을 느끼는 착용자를 위한 콘택트렌즈입니다. 미국 FDA 승인된 제품이며, 하루 종일 ** 촉촉한 착용감을 제공합니다.
프로클리어® 원데이
하루착용
근시
프로클리어® 원데이 멀티포컬
하루착용
멀티포컬
```

### 원문 발췌 — 허가번호 각주 (한 문장, 줄바꿈 없음)

```
*위의 제품들은 수허 14-2404호 마이데이 원데이, 수허 18-281호 마이데이 토릭, 수허 21-108호 마이데이 멀티포컬, 수허 15-322호 클래리티 원데이, 수허 20-165호 클래리티 토릭, 수허 08-131 바이오피니티 & 바이오피니티 XR, 수허 10-1406호 바이오피니티 토릭 & 바이오피니티 토릭 XR, 수허 17-239호 바이오피니티 에너지스, 수허 07-568호 프로클리어 원데이, 수허 14-720호 프로클리어 멀티포컬, 수허 20-228호 마이사이트 원데이로 ‘의료기기’이며, 사용상의 주의사항과 사용 방법을 잘 읽고 사용하세요.
**모든 콘택트렌즈는 야간 취침 시 착용하지 마십시오.
(심의번호: 조합-2026-13-082, 유효기간: 2029-04-28)
```

### 원문 발췌 — 함수율·Dk/t 각주

```
*(별첨 1)제품별 [1. 함수율과 2. 산소 투과율(Dk/t)]은 아래와 같습니다.
- 마이데이
[근시용 1. 54%, 2. 100] / [난시용 1. 54%, 2. 80] / [멀티포컬 1. 54%, 2. 100]
- 클래리티
[근시용 1. 56%, 2. 80] / [난시용 1. 56%, 2. 50]
- 바이오피니티
[근시용 1. 48%, 2. 170] / [난시용 1. 48%, 2. 110] / [에너지스 1. 48%, 2. 170]
```

**이 별첨 1 목록에 프로클리어가 없다.** 마이데이·클래리티·바이오피니티만 함수율과 Dk/t가 적혀 있고
프로클리어와 마이사이트는 빠져 있다.
따라서 프로클리어의 함수율·Dk/t는 **한국 소비자 페이지 어디에도 표기되지 않는다.**

### 이 각주의 신뢰도

- 프로클리어 원데이: `수허 07-568호` — **MFDS 원장에서 0건**(S1-5). 원장 번호는 `수허 07-856 호`다.
- 같은 문장에서 마이데이·클래리티는 `…호`로 공백 없이, 바이오피니티는 `호` 자체 없이 적혀 있어 표기 방식이 제품마다 일정하지 않다.
- **이 각주를 단독 허가 근거로 쓰지 않는다.**

---

## S4. 쿠퍼비전코리아 제품 사양서 PDF — 한국 공식 수치 (유일한 한국 수치 출처)

- URL: https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf
- 조회일: 2026-08-28 · HTTP 200 · 1,111,102 bytes · 3쪽 · 가로형(841.89 × 595.276)
- PDF 메타데이터: `/Title Cooper Product Specifications` · `/CreationDate D:20231121092224+09'00'`
- **문서 개정 표기(2쪽 하단 원문): `©2023 CooperVision SA09487 Rev #4 09/2023`**
- 게시 위치: https://coopervision.co.kr/practitioner/our-products 에서 링크되는 유일한 PDF (2026-08-28 HTTP 200 확인)
- 방법: `curl -L` 다운로드 → pypdf 6.16.2로 텍스트 존재 확인 → 표가 다단 컬럼이라 텍스트 순서만으로는 열 귀속이 흔들리므로
  **PyMuPDF 1.28.2 단어 단위 bbox(x0, x1, y0, y1)로 열·행을 귀속**시키고, 표의 가로 구분선 좌표로 행 경계를 확정한 뒤,
  해당 행을 500% 배율로 렌더링해 **육안으로도 대조**했다.

프로클리어 구면은 **1쪽 `1 Day. 매일착용소프트렌즈` 표의 세 번째 행**에 있다.

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

**중심두께(center thickness) 열은 없다.**

### S4-2. 행 경계 — 어느 행이 프로클리어 구면인가 (⚠ 저장소 기존 기록의 앵커 라벨 정정)

1쪽 표의 가로 구분선(폭 300pt 이상 도형) y 좌표:

```
y 155.38–156.13   (헤더 아래)
y 234.91–235.66
y 311.96–312.71
y 396.77–397.52
y 476.86–477.61
```

제품명 열의 행 앵커(x0, y0):

```
 33.6  199.5  MyDay®  /  57.6 199.5 daily  /  37.8 206.7 disposable          -> 155.4~234.9 구간
 33.7  281.3  MyDay®  /  57.6 281.3 toric                                     -> 234.9~312.0 구간
 39.2  358.4  Proclear®  /  44.5 364.9 1  /  49.8 364.9 day                   -> 312.0~396.8 구간  ★ 본 검증 대상
 29.8  440.8  Proclear®  /  58.4 440.8 1  /  63.7 440.8 day  /  37.3 448.0 multifocal  -> 396.8~476.9 구간
 30.3  522.5  MiSight®  /  56.9 522.5 1  /  62.2 522.5 day                    -> 476.9~ 구간
```

즉 **`Proclear® 1 day`(구면)는 y0 358.4 행이고, `Proclear® 1 day multifocal`은 y0 440.8 행**이다.
해당 구간을 500% 배율로 렌더링해 육안 대조한 결과, y0 358.4 행의 제품 이미지는 `Proclear 1 day` 상자,
y0 440.8 행의 이미지는 `Proclear 1 day multifocal` 상자이며, 디자인 열도 각각 `Asphere` / `Multifocal`이다.

> **정정 기록**: `docs/verification/myday/EVIDENCE.md`의 S4-2 행 앵커 목록은 이 두 행의 라벨을
> `39.2 358.4 Proclear® (1 day multifocal)` · `29.8 440.8 Proclear® (1 day)`로 **뒤바꿔 적었다.**
> 두 행의 BC·DIA·재질·함수율·Dk/t·UV·가시성 색조 값이 모두 같아서 마이데이 검증의 값에는 영향이 없으나,
> 앵커 라벨은 위 좌표가 맞다.

### S4-3. 프로클리어 구면 행(제품명 y0 358.4 · 값 대표 y0 350.7) — 열별 단어 bbox (원문 그대로)

```
열 1  제품명              x  39.2– 65.0  y358.4  Proclear®
                          x  44.5– 59.7  y364.9  1 day
열 2  Sphere Power        (셀 1행)               -12.00 to -6.50
                                                 (0.50 단위)
                          x  87.5–128.2  y338.7  -6.00 to -0.25
                          x  94.5–122.1  y345.7  (0.25 단위)
                          x  87.7–128.8  y355.8  +0.25 to +5.00
                          x  94.5–122.1  y362.8  (0.25 단위)
                          x  87.7–128.9  y372.9  +5.50 to +8.00
                          x  94.5–122.1  y379.8  (0.50 단위)
열 3  Cylinder Power      (구면 행에 값 없음)
열 4  Axis°               (구면 행에 값 없음)
열 5  Add Power           (구면 행에 값 없음)
열 6  Design              x 326.4–348.1  y350.7  Asphere
열 7  Wear Schedule       x 380.7–408.1  y343.9  소프트렌즈   (윗줄: 매일착용)
                          x 379.8–409.1  y350.6  Daily wear;
                          x 387.2–401.6  y357.8  1 day
                          x 377.9–410.9  y365.0  replacement
열 8  Base Curve (mm)     x 447.2–456.0  y350.7  8.7
열 9  Diameter (mm)       x 502.9–515.3  y350.7  14.2
열 10 Material USAN       x 547.2–585.0  y347.1  PC-하이드로겔
                          x 550.7–581.6  y354.3  omaﬁlcon A
열 11 Water content (%)   x 619.6–627.0  y350.7  60
열 12 Dk/t †              x 677.4–684.6  y350.7  28
열 13 UV Blocking & Class x 734.1–741.4  y350.7  No
열 14 Visibility Tint     x 790.5–799.4  y350.7  Yes
```

500% 렌더링 육안 대조 결과(오른쪽 절반):
`8.7 | 14.2 | PC-하이드로겔 omafilcon A | 60 | 28 | No | Yes`
왼쪽 절반: `Proclear® 1 day | -12.00 to -6.50 (0.50 단위) / -6.00 to -0.25 (0.25 단위) / +0.25 to +5.00 (0.25 단위) / +5.50 to +8.00 (0.50 단위) | Asphere | 매일착용 소프트렌즈 Daily wear; 1 day replacement`

**대조군 1 — 같은 표의 프로클리어 멀티포컬 행(값 대표 y0 433.8):**
BC `8.7` · DIA `14.2` · 재질 `PC-하이드로겔 omaﬁlcon A` · 함수율 `60` · Dk/t `28` · UV `No` · 색조 `Yes` · Design `Multifocal`.
→ 구면과 멀티포컬의 물성값이 **완전히 같다.** 값 자체는 행을 혼동해도 달라지지 않지만, 행 귀속은 위 좌표로 확정했다.

**대조군 2 — 같은 표의 마이데이 구면 행(값 대표 y0 192.1):**
BC `8.4` · DIA `14.2` · 재질 `실리콘 하이드로겔 stenﬁlcon A` · 함수율 `54` · Dk/t `100` · UV `Class 2` · 색조 `Yes`.
→ 같은 열에서 UV 값이 `Class 2`와 `No`로 실제로 갈리므로 **UV 열의 귀속이 검증된다.**

**대조군 3 — 3쪽 바이오피니티 행:** BC `8.6` · DIA `14.0` · `comﬁlcon A` · 함수율 `48` · Dk/t `171` · UV `No` · 색조 `Yes`.
→ 파일럿이 이 사양서에서 읽은 값과 일치한다.

### S4-4. 1쪽 각주 원문

```
*  근시 제품의 Plano 렌즈 사용 가능 여부는 시장 또는 고객에 따라 다를 수 있습니다.
†  (@-3.00DS) x 10-9 [(cm/sec) x (ml O )/(ml x mmHg)]
‡  UV 흡수 콘택트렌즈는 눈과 주변 부위를 완전히 덮지 않기 때문에, 자외선 흡수 고글 또는 선글라스와 같은 보호용 UV 흡수 안경류를 대체하지 않습니다. 고객은 전문가의 지시에 따라 UV 흡수 안경류를 계속 사용해야 합니다.
```

표기 주의:

- `10-9`의 `-9`는 인쇄물에서 위첨자다. `(ml O )` 뒤의 `2`도 인쇄물에서는 아래첨자이며 별도 문자열로 떨어져 추출된다.
  인쇄된 단위는 `(@-3.00DS) × 10⁻⁹ [(cm/sec) × (ml O₂)/(ml × mmHg)]`이다.
- `omafilcon`은 `fi` 합자 글리프(U+FB01)로 인쇄돼 추출 문자열이 `omaﬁlcon A`가 된다. 인쇄된 단어는 `omafilcon A`다.
- **Dk/t 각주에 측정법(분극법 등)·경계 보정 여부·온도가 없다.** 시험 도수(`@-3.00DS`)와 단위만 있다.
- `‡` 각주(UV 경고)는 표 전체에 붙는 공통 각주이며, 프로클리어 행의 UV 값이 `No`라는 사실을 바꾸지 않는다.

### S4-5. 이 사양서에 **없는** 것

- **중심두께 열 자체가 없다.** 1·2·3쪽 전문에서 `thickness` 0건 · `두께` 0건.
- 허가번호 없음. 제조·수입업체 법인명 없음(`www.coopervision.co.kr`만 표기).
- 프로클리어가 실린 곳은 1쪽 표뿐이며, 2쪽의 `Proclear®` 1건은 상표 고지 문장
  (`clariti®, CooperVision®, MyDay®, MyDay Energys®, live®, MiSight® and Proclear® 는 The Cooper Companies, Inc. 및 그 자회사의 등록상표입니다.`)이다.

---

## S5. 한국 사용설명서(IFU) PDF

- URL: https://coopervision.co.kr/sites/coopervision.co.kr/files/media-document/Proclear_1day_sphere_patient_instruction.pdf
- 게시 위치: S2의 `사용자 정보 책자` 링크
- 조회일: 2026-08-28 · HTTP 200 · 628,850 bytes · 2쪽 · 텍스트 레이어 정상 추출

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

### 원문 발췌 — 자외선 관련 경고 (일반 경고문이며 이 제품이 UV를 차단한다는 표기가 아니다)

```
•자외선 차단 기능의 콘택트렌즈는 자외선으로부터 눈이나 눈 주변부를 완전히 차단할 수 없으므로 자외선 차단용 고글이나 선글라스를 대신할 수 없다.
```

### 이 PDF에 **없는** 것 (전문 검색으로 확인)

문자열 출현 횟수: `수허` 0 · `제허` 0 · `허가` 0 · `Proclear` 0 · `프로클리어` 0 · `omafilcon` 0 · `함수율` 0 · `Dk` 0 · `두께` 0.

→ **이 IFU에는 허가번호도, 제품명도, 어떤 수치도 없다.** 쿠퍼비전 매일착용 소프트렌즈 **공통 문서**이며
파일명(`Proclear_1day_sphere_patient_instruction.pdf`)과 게시 위치만이 제품과의 연결고리다.
마이데이·클래리티의 IFU와 파일 크기(628,850 bytes)와 본문이 같다.
따라서 이 문서를 "제품별 IFU"로 표기하지 않는다.

---

## S6. 한국 제품 안내(product reminder) PDF

- URL: https://coopervision.co.kr/sites/coopervision.co.kr/files/product-reminders/coopervision-kr-proclear1d-product-reminder.pdf
- 조회일: 2026-08-28 · HTTP 200 · 895,065 bytes · 1쪽
- 문서 표기: `©2021 CooperVision`

### 원문 발췌

```
프로클리어® 원데이
교체 주기
매일
교정
근시
원시
```

```
쿠퍼비전® 프로클리어™ 원데이 콘택트렌즈가 도움을 드릴 수 있습니다. 이것은 당신과 같은 콘택트렌즈 착용자를 위해 특별히 만들어진 PC 기술™이 적용되었습니다. 수분을 렌즈에 결합시켜 하루 종일 편안하게 만들어줍니다.
```

```
당신을 위한 기능
•	 PC 기술™는 각각의 프로클리어 콘택트렌즈 전체에 수분을 결합시켜 주변에 방패막을 만들고 렌즈를 깨끗하게 유지시킵니다. 콘택트렌즈가 수분을 유지해주어 하루 종일 촉촉하고 편안합니다.
• 프로클리어 렌즈 소재는 눈 자극을 줄이는데 도움이 됩니다.
• 매일 교체하므로 세정이 필요 없어 편리합니다.
```

```
* 비구면 광학으로 인함.
```

이 문서에도 BC·DIA·함수율·Dk/t·중심두께·재질 USAN·허가번호 수치는 없다
(`수허` 0 · `함수율` 0 · `Dk` 0 · `omafilcon` 0 · `두께` 0).
**자외선 관련 문구도 0건**이다. 마케팅 문구는 물성값과 분리해 사용하지 않는다.

---

## S7. Proclear® 1 day 미국 전문가용 제품 페이지 (글로벌 공식 사양)

- URL: https://coopervision.com/practitioner/our-products/proclear-family/proclear-1-day
- 조회일: 2026-08-28 · HTTP 200 · 지역 표기 `United States`
- 방법: `curl -L` + gstack 브라우저 렌더링 양쪽에서 동일 문자열 확인

### `Product Details` 표 원문 (라벨 → 값)

```
Material / H 2 0 content        omafilcon A / 60%
Replacement schedule            Daily
Oxygen transmissibility         28 Dk/t (at -3.00D)
Revenue carton size             90-pack
Base curve                      8.7
Diameter                        14.2
Sphere power                    +8.00D to -12.00D
                                (0.50D steps after -6.00D and +5.00D)
Wearing schedule                Daily Disposable
Technology                      Asphere
```

### 기술 설명 원문 (마케팅 문구 — 물성값으로 쓰지 않는다)

```
Patented PC Technology™ makes it work
CooperVision’s exclusive PC Technology creates a unique lens material in which the phosphorylcholine (PC) molecules attract and bind water to the surface, creating a shield that keeps the lenses clean and functioning properly.
```

```
Features
Aspheric optical design
The healthiest lens modality option
96% hydration for 12 hours or more
May address discomfort from dry eyes
```

### 이 페이지에 **없는** 것

- **`UV` 행이 없다.** 마이데이 페이지의 `UV Blocker* Yes`, 클래리티 페이지의 `UV protection Yes`에 해당하는 행이
  이 제품의 `Product Details`에는 **아예 존재하지 않는다.**
  본문 전체의 `UV` 1건은 하단 `Also of Interest: The Importance of UV Protection` 링크 문구다.
- `thickness` · `Thickness` 문자열 **0건** — 중심두께 항목이 없다.
- Dk/t 측정법·온도 조건 없음. `(at -3.00D)`만 있다.

---

## S8. CooperVision Product Reference Guide 05/2026 (글로벌 공식 사양서)

- URL: https://coopervision.com/sites/coopervision.com/files/media-document/coopervision-product-reference-guide-052026.pdf
- 조회일: 2026-08-28 · HTTP 200 · 5,596,469 bytes · 7쪽 · 가로형(792 × 612)
- 문서 개정 표기: 2쪽 하단 `©2026 CooperVision 17345-6 05/2026` · `Page 2 of 7`
- 방법: PyMuPDF 단어 bbox로 열·행 귀속 확인 + 해당 행 500% 렌더링 육안 대조

프로클리어 구면은 **2쪽 `SPHERE LENSES` 표의 `1-Day Disposables` 구획**에 있다.

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
 30.4  151.1  clariti® 1 day sphere
 29.5  224.1  MyDay® daily disposable
 23.6  304.2  MyDay Energys®
 25.9  379.1  Proclear® 1 day        <- 본 검증 대상 (값 대표 y0 ≈ 405.6)
 25.5  450.2  MiSight® 1 day‡
```

### S8-3. 프로클리어 구면 행 — 열별 단어 bbox

```
Product                  x  25.9– 82.5  y379.1  Proclear® 1 day
Sphere Power (D)         x 104.2–164.1  y389.4  +8.00 to -12.00
                         (같은 셀 다음 줄)      (0.50 steps after
                         x 102.1–166.2  y411.0  +5.00 and -6.00)
                         x 118.4–149.8  y421.8  No Plano
Design                   x 185.0–215.1  y405.6  Asphere
Wear Schedule            x 234.6–273.2  y405.6  Daily wear
Material/H20 Content     x 295.6–338.4  y400.6  omaﬁlcon A
                         x 340.6–344.5  y400.1  /
                         x 311.4–328.7  y410.6  60%
FDA Group                x 370.4–375.7  y405.6  2
Base Curve (mm)          x 404.2–416.8  y405.6  8.7
Dia (mm)                 x 435.8–453.7  y405.6  14.2
Oxygen Transmissibility  x 489.9–500.5  y405.6  28
Revenue Carton Size      x 537.6–569.9  y405.6  90-pack
Trials Labeled As        x 590.4–637.9  y405.6  1 day sphere /
                         x 608.6–625.8  y393.6  60%
                         x 607.8–626.6  y417.6  10pk
Features/Design          y395.6  • Aberration Neutralizing System™
                         y415.6  • PC Technology™
```

500% 렌더링 육안 대조 결과:
`Proclear® 1 day | +8.00 to -12.00 (0.50 steps after +5.00 and -6.00) No Plano | Asphere | Daily wear | omafilcon A / 60% | 2 | 8.7 | 14.2 | 28 | 90-pack | 60% 1 day sphere / 10pk`

**FDA Group 열이 `2`다.** 같은 표의 마이데이·클래리티 행은 `5B` + `SiHy`(실리콘 하이드로겔)인데
프로클리어는 `SiHy` 표기 없이 `2`뿐이다. 즉 이 제품은 **실리콘 하이드로겔이 아닌 하이드로겔 계열**이다.

**Features 열에 `UV blocking*` 항목이 없다.** 같은 표의 마이데이 행에는 `• UV blocking*`이,
클래리티 행에도 `• UV blocking*`이 있다. 프로클리어 행에는 `• Aberration Neutralizing System™`과
`• PC Technology™` 두 항목뿐이다.

### S8-4. 2쪽 각주 원문

```
* WARNING: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear such as UV-absorbing goggles or sunglasses because they do not completely cover the eye and surrounding area. Persons should continue to use their protective UV-absorbing eyewear as directed.
NOTE: Long-term exposure to UV radiation is one of the risk factors associated with cataracts. Exposure is based on a number of factors such as environmental conditions (altitude, geography, cloud cover) and personal factors (extent and nature of the outdoor activities). UV-absorbing contact lenses help provide protection against harmful UV radiation. However, clinical studies have not been done to demonstrate that wearing UV-absorbing contact lenses reduces the risk of developing cataracts or other eye disorders. Consult your Eye Care Practitioner for more information.
**(@-3.00DS) x 10-9 [(cm/sec) x (ml O2)/(ml x mm Hg)].
```

이 각주의 `*`는 `UV blocking*` 항목이 있는 제품에 붙는 경고문이다. 프로클리어 행에는 그 항목이 없다.

### S8-5. 이 사양서에 **없는** 것

- 7쪽 전체에 `thickness` 문자열 **0건**. 중심두께 열이 없다.
- Dk/t 각주에 측정법·온도 없음. 한국 사양서(S4-4)와 **같은 각주 형식**이다.
- 참고: 3·5·6·7쪽에도 `Proclear®`가 나오지만 그 행들의 재질은 `omaﬁlcon B`이며
  (`Proclear® sphere`, `Proclear® toric`, `Proclear® XR` 등 월간 교체 계열) **본 검증 대상인 1일 교체 구면이 아니다.**
  6쪽의 `Proclear® 1 day / omaﬁlcon A`만 같은 제품이다.
  **`omafilcon A`(1일)와 `omafilcon B`(월간)를 섞지 않는다.**

---

## 한국 자료와 글로벌 자료의 대조

| 항목 | 한국 사양서 S4 | 한국 페이지 S2·S3 | 미국 전문가 S7 | 미국 사양서 S8 | 판정 |
| --- | --- | --- | --- | --- | --- |
| BC | `8.7` | 없음 | `8.7` | `8.7` | 일치 |
| DIA | `14.2` | 없음 | `14.2` | `14.2` | 일치 |
| 함수율 | `60` | **없음(별첨 1에 프로클리어 없음)** | `60%` | `60%` | 일치 |
| 재질 | `PC-하이드로겔 omafilcon A` | 없음 | `omafilcon A` | `omafilcon A` · FDA Group `2` | 일치 |
| Dk/t | `28` (@-3.00DS) | 없음 | `28 Dk/t (at -3.00D)` | `28` (@-3.00DS) | 일치 |
| 교체 | `Daily wear; 1 day replacement` | `매일` · IFU `하루 착용` | `Daily` / `Daily Disposable` | `Daily wear` | 일치 |
| UV | `No` | 언급 없음 | **행 자체 없음** | **`UV blocking*` 항목 없음** | 일치(어디에도 UV 차단 표기 없음) |
| 중심두께 | 열 없음 | 없음 | 없음 | 없음 | **어디에도 없음** |
| 허가번호 | 없음 | `수허 07-568호` | 없음 | 없음 | **MFDS `수허 07-856 호`와 충돌** |

물성값에서는 한국·글로벌 자료 사이에 **충돌이 하나도 없다.**
클래리티에서 나온 Dk/t 충돌(80 vs 86)·재질 충돌(somofilcon vs stenfilcon),
바이오피니티의 Dk/t(170 vs 171)·UV 충돌이 프로클리어에서는 재현되지 않았다.
유일한 충돌은 **허가번호**다.

---

## 확인하지 못한 것

1. **중심두께(center thickness)** — 한국 사양서(S4) 3쪽, 한국 제품 페이지(S2), 한국 IFU(S5), 한국 리마인더(S6),
   미국 전문가 페이지(S7), 미국 Product Reference Guide 05/2026(S8) **전부에 항목 자체가 없다.**
   `unknown`으로 둔다. `없음`이나 임의의 수치로 채우지 않는다.
   Dk/t로부터 두께를 유도하거나 Dk로부터 Dk/t를 계산하지 않는다.
2. **Dk/t의 측정법·경계 보정·온도** — 쿠퍼비전 자료는 한국·미국 모두 시험 도수(`@-3.00DS`)와 단위만 적고
   측정법·온도를 적지 않는다. 아큐브 사양서(분극법 · boundary/edge 보정 · 35℃ 명시)와 **조건 표기 수준이 다르므로
   숫자만 나란히 놓고 비교하지 않는다.**
3. **함수율의 측정 위치(벌크/코어/표면)** — 쿠퍼비전 자료는 `함수율 Water content (%)` 한 줄만 제시하고
   측정 위치를 표기하지 않는다. 데일리스 토탈원처럼 코어·표면을 나눠 적는 제품의 숫자와 같은 축에 놓지 않는다.
   미국 페이지의 `96% hydration for 12 hours or more`는 함수율과 다른 개념의 마케팅 문구이며 함수율 필드에 넣지 않는다.
4. **허가번호를 한 개로 좁히기** — MFDS 원장은 `수허 07-856 호`, 한국 공식 제품 목록 각주는 `수허 07-568호`다.
   후자로는 원장 조회가 0건이다. 실물 포장에 인쇄된 번호를 확인하지 못했으므로 어느 쪽도 삭제하지 않고 병기한다.
5. **UV 차단 없음의 확정** — 한국 사양서의 `No`가 이 제품의 유일한 명시적 UV 표기다.
   미국 자료 두 종은 UV 항목 자체를 두지 않아 `No`와 모순되지 않지만, 그 자체가 `없음`을 확인해 주지도 않는다.
   `Class 2`·`Yes` 같은 긍정 표기는 어느 공식 자료에도 없다.
6. **한국 유통 파라미터의 완전성** — 한국 사양서에 BC가 `8.7` 하나뿐이므로 한국에서 다른 BC가 유통되는지는
   확인할 자료가 없다. 미국 자료도 `8.7` 하나만 적는다.
