# 검증 근거 — 토탈30® (TOTAL30®)

검증일: 2026-08-28
대상: 근시·원시용 투명 구면, 월간(30일) 교체 (`TOTAL30™ for Astigmatism` 난시용과 `TOTAL30™ Multifocal` 다초점은 제외)
제조사: Alcon · 한국 유통: 한국알콘(주)

이 문서는 실제로 가져온 공식 자료의 **원문**만 담는다. 값의 해석·정규화는 하지 않는다.

> 이 제품의 위치: 프리시전원과 같은 구조다. **한국 공식 자료에 수치가 하나도 없다.**
> 한국 자료는 **유통·교체주기·착용방식·적응증**까지만 근거가 되고,
> BC·DIA·함수율·Dk/t·중심두께·재질명(USAN)·UV는 **전부 글로벌 공식 자료가 유일한 근거**다.
>
> 다만 프리시전원과 다른 점이 하나 있다. 한국 제품 페이지의 의료기기 표시 문구가
> `30일까지 착용가능한 일일착용 소프트콘택트렌즈`라는 **한국어 원문 교체·착용 표기를 직접 인쇄**한다.
> 교체주기만큼은 한국 공식 자료가 1차 근거가 된다.

---

## S1. MFDS 의료기기 UDI 표준코드 조회 — 한국 유통·허가 식별

- URL: https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do
- 조회일: 2026-08-28
- 방법: 화면(`schStddCdLstView.do`)을 먼저 GET해 세션 쿠키(`JSESSIONID`, `elevisor_for_j2ee_uid`)를 받은 뒤,
  화면의 `searchList()`가 실제로 쓰는 엔드포인트 `POST /msismext/udi/uif/selectStddCdLstAjax.do`를 `curl`로 호출했다.
  `form[name=baseForm]`의 `serializeArray()` 결과와 동일한 파라미터를 보냈다.
- 공통 조회 조건: `udiCd=` · `ediCd=` · `prdlNm=` · `sDate=` · `eDate=` 비움,
  `dateCancelChk=N`, `selRcprslryTrgtYn=`(전체)

### S1-0. 이번 검증에서 새로 확인한 요청 인코딩 함정 (다음 검증에 재사용)

**요청 본문은 UTF-8로 URL 인코딩해야 한다.** 한글 파라미터(`bplcNm=한국알콘`)를 EUC-KR/CP949로 인코딩해 보내면
HTTP 200에 `{"dataList":[]}`(0건)가 돌아온다. **오류가 아니라 빈 결과로 돌아오기 때문에 조용히 실패한다.**
영문 파라미터(`modelnm=Precision1`)만 쓸 때는 인코딩과 무관하게 결과가 나오므로, 한글 조건을 쓰는 순간에만 드러난다.
응답 JSON도 UTF-8로 디코딩해야 한다.

> 이 함정 때문에 "업체명 조회 0건 = 유통 안 함"으로 오판할 위험이 있다.
> 한글 조건이 0건이면 **인코딩부터 의심하고**, 영문 조건으로 대조 확인해야 한다.

### S1-1. 조회 조건별 건수 — 시도한 모든 표기

| # | `bplcNm` | `modelnm` | `itemPermitNo` | 조회 건수(`totCnt`) |
| --- | --- | --- | --- | --- |
| Q1 | `한국알콘` | (비움) | (비움) | **46,382** |
| Q2 | `한국알콘` | `TOTAL30` | | **11,506** |
| Q3 | `한국알콘` | `Total30` | | **0** |
| Q4 | `한국알콘` | `TOTAL 30` | | **0** |
| Q5 | `한국알콘` | `Total 30` | | **0** |
| Q6 | `한국알콘` | `total30` | | **0** |
| Q7 | `한국알콘` | `TOTAL30™` | | **11,370** |
| Q8 | `한국알콘` | `TOTAL` | | **16,222** |
| Q9 | `한국알콘` | `Total` | | **495** |
| Q10 | `한국알콘` | `total` | | **0** |
| Q11 | `한국알콘` | `Lehfilcon` | | **0** |
| Q12 | `한국알콘` | `lehfilcon` | | **0** |
| Q13 | `한국알콘` | `LEHFILCON` | | **0** |
| Q14 | `한국알콘` | `토탈30` | | **0** |
| Q15 | `한국알콘` | `토탈` | | **0** |
| Q16 | `한국알콘` | `TOTAL30 for Astigmatism` | | **0** |
| Q17 | `한국알콘` | `TOTAL30 Multifocal` | | **0** |
| Q18 | `한국알콘` | `TOTAL30™ Multifocal` | | **390** |
| Q19 | `한국알콘` | `Celligent` | | **0** |
| Q20 | `한국알콘` | `워터렌즈` | | **0** |
| Q21 | (비움) | (비움) | `수허 22-19 호` | **136** |

`bplcNm=한국알콘` 전체 46,382건은 파일럿 데일리스 토탈원·프리시전원 검증 때와 같은 수치다.

### S1-2. 검색 함정 — 다음 알콘 제품 검증에서 재사용할 것

**(1) 구면 등록 모델명은 `TOTAL30`(전부 대문자, `™` 없음)이다.**
`Total30` · `TOTAL 30` · `Total 30` · `total30` · `토탈30` 모두 **0건**이다.
`docs/PRODUCT_CANDIDATES_20.md` 표 A 6번의 검색 키워드는 `TOTAL30`, `Total 30`인데,
`TOTAL30`은 맞고 `Total 30`은 **0건**이다.

> 표기 규칙이 제품마다 다르다는 사실이 네 번째로 확인됐다.
> 아큐브 모이스트는 `®` 기호, 마이데이는 전부 대문자 `MYDAY`, 프리시전원은 파스칼 표기 `Precision1`,
> **토탈30은 전부 대문자 `TOTAL30`**이 정답이다. 프리시전원에서 `PRECISION1`(전부 대문자)이 0건이었던 것과 정반대다.
> **`Precision1`이 정답이었다고 해서 `Total30`이 정답이 되지 않는다.** 제품마다 표기를 순회해야 한다.

**(2) `modelnm=TOTAL30` 11,506건을 구면 건수로 읽으면 안 된다.**
`TOTAL30`은 난시용 모델명 `TOTAL30™ for Astigmatism`의 부분 문자열이기도 하다.
11,506 = 난시용 10,980 + 다초점 390 + **구면 136**이다. 구면은 전체의 1.2%뿐이다.

**(3) `TOTAL30™`(™ 포함) 11,370건에는 구면이 한 건도 없다.**
구면 등록 모델명에는 `™`가 없기 때문이다(11,370 = 10,980 + 390).
`™`를 붙여 검색하면 **찾는 제품만 정확히 빠진다.**

**(4) 재질명으로는 조회되지 않는다.** `Lehfilcon` · `lehfilcon` · `LEHFILCON` 모두 0건.
구면 원장의 모델명·업체 제품 명칭 어디에도 재질명이 없다.

**(5) 한글 `토탈30` · `토탈` · `워터렌즈`는 모델명 검색으로 0건이다.**
한글 판매명은 `prdtNmCn`(업체 제품 명칭) 쪽에만 있고 이 화면의 검색 폼에는 `prdtNmCn` 입력란이 없다.

**(6) DAILIES TOTAL1 계열과의 혼동 위험.** `modelnm=Total`(파스칼) 495건은 전부 데일리스 토탈원 계열이고,
`modelnm=TOTAL`(대문자) 16,222건에는 토탈30 계열과 `DAILIES TOTAL1 for Astigmatism`이 함께 잡힌다.
이름과 계열(워터 그라디언트)이 같아 오인 위험이 실재한다. S1-4 표 참조.

### S1-3. Q8(`modelnm=TOTAL`, 16,222건) 전수 집계 — 대문자 TOTAL 계열 전부

16,222행을 500건 × 33페이지로 모두 가져와 집계한 결과 distinct **4건**:

```
한국알콘(주) | 수입업 | 매일착용소프트콘택트렌즈   | 2 | 수허 22-101 호 | TOTAL30™ for Astigmatism       | 워터렌즈 한달용 난시, Celligent™ toric ## 10980
한국알콘(주) | 수입업 | 매일착용소프트콘택트렌즈   | 2 | 수허 20-63 호  | DAILIES TOTAL1 for Astigmatism | 워터렌즈난시용 ## 4716
한국알콘(주) | 수입업 | 매일착용 소프트 콘택트렌즈 | 2 | 수허 24-4 호   | TOTAL30™ Multifocal            | 워터렌즈 한달용 멀티포컬, Celligent™ Multifocal ## 390
한국알콘(주) | 수입업 | 매일착용소프트콘택트렌즈   | 2 | 수허 22-19 호  | TOTAL30                        | 워터렌즈 한달용, Celligent™ ## 136
```

형식: `업체명 | 업체구분 | 소분류 품목 명칭 | 등급 | 품목허가번호 | 모델명 | 업체 제품 명칭 ## 행 수`

**본 검증 대상(구면)은 `수허 22-19 호` 하나뿐이다.**

구면 행의 업체 제품 명칭 `워터렌즈 한달용, Celligent™`에 **한글 판매명 `워터렌즈 한달용`이 직접 들어 있다.**
한국알콘 사이트의 제품명(`워터렌즈 한달용`)과 등록 원장이 같은 문자열로 연결된다.
프리시전원 구면(업체 제품 명칭이 `Smart surface`뿐이라 한글 연결이 간접적이었다)보다 근거가 강하다.

> 소분류 품목 명칭 표기가 흔들린다: 구면·난시용은 `매일착용소프트콘택트렌즈`(공백 없음),
> 다초점은 `매일착용 소프트 콘택트렌즈`(공백 있음). 원문 그대로 기록한다.

### S1-4. Q9(`modelnm=Total`, 495건) 전수 집계 — 혼동 위험 제품(데일리스 토탈원 계열)

```
한국알콘(주) | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 17-553 호 | Dailies Total1 Multifocal | 워터렌즈 멀티포컬 ## 390
한국알콘(주) | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 13-112 호 | Dailies Total1            | 워터렌즈 ## 105
```

데일리스 토탈원 구면 `수허 13-112 호` 105건은 파일럿(2026-08-27·2026-08-28) 기록과 정확히 일치한다.
**토탈30과 데일리스 토탈원은 허가번호·모델명·업체 제품 명칭이 모두 다르다.**
한글 판매명도 `워터렌즈`(1일)와 `워터렌즈 한달용`(월간)으로 구분된다.

### S1-5. Q21(`itemPermitNo=수허 22-19 호`, 업체명 비움) 전수 집계

- 조회 건수 **136건**, distinct 신원 **1건**:
  `한국알콘(주) | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 22-19 호 | TOTAL30 | 워터렌즈 한달용, Celligent™`
- distinct UDI-DI 코드 **136건** (중복 없음)
- 포장내수량 분포: `1` 68건 · `6` 68건
- UDI-DI 예시(원문): `00730822290012`, `00730822289993`, `00730822290005`, `00730822289962`, `00730822289979`, `00730822289986`
- 코드체계: `GS1` · 요양급여 대상 치료재료 여부: `N` · 사용자 멸균 여부 `N` · Kit 여부 `N`

업체명 기준 조회(Q2에서 걸러낸 구면 136건)와 허가번호 단독 조회(Q21, 136건)가 **완전히 같은 집합**이며,
136건 전부가 단일 신원으로 `수허 22-19 호`에 연결된다.

포장내수량 `1`·`6`은 미국 전문가 사양의 `6‑ct. box and 1‑ct. trial pack`과 일치한다.
(국제 전문가 페이지 이미지는 `6-pack, 3-pack, and 1-lens trial box`로 적어 `3`이 더 있으나,
한국 원장에는 `3`이 없다. 지역별 포장 구성 차이로 보이며 값을 합치지 않았다.)

**허가번호 원문: `수허 22-19 호`** (`수허`, 공백, `22-19`, 공백, `호`)

---

## S2. 한국 공식 소비자 페이지 — 토탈30

### S2-1. 알콘 코리아 토탈30 제품 페이지 (유통·교체주기·적응증 근거)

- URL: https://www.myalcon.com/kr/contact-lenses/monthly/total30/
- 조회일: 2026-08-28 · HTTP 200 · `curl -L`(브라우저 UA) · 리다이렉트 없음
- 문서 제목 원문: `TOTAL30™ 한달용 콘택트렌즈 | 알콘 코리아`

원문 발췌:

```
워터렌즈 한달용
한달동안 깨끗, 편안, 선명
워터렌즈 한달용은 한달동안 촉촉한 편안함을 제공합니다.
TOTAL30™ 을 좋아할 이유
콘택트렌즈를 선택할 때 중요한 것은, ‘지금 착용 중인 렌즈가 편안한가’ 입니다. 워터렌즈 한달용은 한 달 동안 깨끗하고 편안하며  선명한 시야를 제공합니다. 워터렌즈 한달용과 함께 한 달 내내 촉촉한 편안함을 경험해보세요.
```

FAQ 원문:

```
한달용 콘택트렌즈는 얼마나 오래 착용할 수 있나요?
한달용 콘택트렌즈는 최대 한 달동안 재사용할 수 있는 콘택트렌즈입니다. 사용 기간이 지나면 새 렌즈로 반드시 교체해야 합니다.
렌즈 착용 방법은 다음과 같습니다.
블리스터 팩에서 렌즈를 꺼내 눈에 착용한 후 하루 동안 사용합니다.
저녁에는 렌즈를 제거한 뒤 렌즈 전용 용액으로 세척하고, 렌즈 케이스에 보관해 주세요.
```

의료기기 표시 문구 원문 (이 페이지에서 가장 중요한 문장):

```
이 제품은 ‘의료기기(매일착용소프트콘택트렌즈, 워터렌즈 한달용 : 난시/안과적 질환이 없는 눈의 근시 혹은 원시 시력 교정에 사용하는 30일까지 착용가능한 일일착용 소프트콘택트렌즈)’이며, 사용상의 주의사항과 사용방법을 잘 읽고 사용하십시오. 의료기기 광고심의필 62026-I10-11-1260 (유효기간 : 29.04.09까지) | KR-T30-2600008
```

> 원문에는 `사용하십시오` 앞에 줄바꿈 문자(U+2028)가 들어 있다. 위 인용은 그 자리를 공백 하나로 옮겨 적었다.

- **`30일까지 착용가능한 일일착용 소프트콘택트렌즈`** — 한국 공식 자료가 인쇄한 교체·착용 표기다.
  `일일착용`(=daily wear, 착용방식)과 `30일까지`(=사용기간)를 **한 문장 안에서 구분해 적는다.**
- 적응증 원문 `난시/안과적 질환이 없는 눈의 근시 혹은 원시 시력 교정`은 본 검증 대상(구면)의 정의와 일치한다.
- `의료기기 광고심의필 62026-I10-11-1260`과 `KR-T30-2600008`은 **광고 사전심의 번호**다. 허가번호 필드에 넣지 않는다.

### S2-2. 알콘 코리아 한달용 카테고리 페이지 (등재 범위 근거)

- URL: https://www.myalcon.com/kr/contact-lenses/monthly/
- 조회일: 2026-08-28 · HTTP 200

원문 발췌:

```
한달용 콘택트렌즈
한달용 렌즈는 한달동안 편안하게
착용할 수 있는 정기교체형 콘택트렌즈입니다.
한 달 후에는 기존 렌즈를 버리고 새 렌즈로 교체하면 됩니다.
근시, 난시를 위한 제품이 준비되어 있습니다.
워터렌즈 한달용
한달동안 깨끗, 편안, 선명
워터렌즈 한달용은 한달동안 촉촉한 편안함을 제공합니다.
```

```
한달용 콘택트렌즈는 최대 한 달(30일)동안 재사용할 수 있는 콘택트렌즈입니다. 사용 기간이 지나면 새 렌즈로 반드시 교체해야 합니다.
```

```
원데이 콘택트렌즈는 하루만 착용하고 버리는 일회용 렌즈로, 세척이 필요 없으며 매일 새 렌즈로 교체해 사용합니다. 한달용 콘택트렌즈는 재사용 가능한 렌즈로, 최대 한 달(30일)까지 사용한 뒤 새 렌즈로 교체해야 합니다.
```

- 한국알콘 소비자 사이트의 **한달용 카테고리에 `워터렌즈 한달용`이 등재**돼 있다.
  같은 카테고리에 `워터렌즈 한달용 멀티포컬 (다초점)`이 별도 항목으로 있다.
- 이 페이지의 의료기기 표시 문구는 제품 페이지와 다르게 적는다(구면·난시용을 함께 표기):
  ```
  이 제품은 ‘의료기기(매일착용소프트콘택트렌즈, 워터렌즈 한달용 : 난시 약 1.50 디옵터(D)/ 안과적 질환이 없는 눈의 근시 혹은 원시 시력 교정, 워터렌즈 한달용 난시 : 난시가 있는 눈의 굴절력 이상(근시 및 원시)의 시력보정)’이며, 사용상의 주의사항과 사용방법을 잘 읽고 사용하십시오.
  의료기기 광고심의필 62026-I10-09-0969 (유효기간 : 29.04.09까지) | KR-T30-2600006
  ```
  구면의 적응증에 `난시 약 1.50 디옵터(D)`가 붙는 표기가 여기에만 있다.
  미국 Package Insert의 `up to approximately 1.50 diopters (D) of astigmatism`과 같은 내용이다.

### S2-3. `total.myalcon.com/kr` — 토탈30 제품 내용 없음 (확인 기록)

- URL: https://total.myalcon.com/kr/ · 조회일 2026-08-28 · HTTP 200
- 이 브랜드 사이트는 **데일리스 토탈원 전용**이다. 본문의 `함수율`·`산소` 표기는 전부 데일리스 토탈원 설명이다.
- HTML에 `total30` 문자열이 6회 나오지만 **전부 CSS 클래스명(`coh-color-total30-blue`)**이고 제품 내용이 아니다.
- `https://total.myalcon.com/kr/products/total30`, `.../total30/`, `.../total30-monthly` 모두 **HTTP 404**.
- 즉 **토탈30의 한국 공식 페이지는 `www.myalcon.com/kr/contact-lenses/monthly/total30/` 하나뿐이다.**

### S2-4. 한국 공식 자료에 **없는** 것 (직접 확인)

`www.myalcon.com/kr/contact-lenses/monthly/total30/`와 `www.myalcon.com/kr/contact-lenses/monthly/`
두 페이지의 HTML을 태그 제거 후 전문 검색한 결과:

- `함수율` · `수분함유` · `베이스커브` · `기본커브` · `직경` · `Dk` · `산소` · `두께` **0건**
- `8.4` · `14.2` · `55%` · `0.08` · `154` **0건**
- `lehfilcon` · `Lehfilcon` · `실리콘` · `하이드로겔` **0건**
- `자외선` · `UV` **0건**
- `수허` · `허가번호` **0건**

즉 **한국 공식 소비자 자료에서 가져올 수 있는 값은 교체주기·착용방식·적응증·한글 제품명뿐이다.**
프리시전원과 달리 **자외선 등급도 재질 계열도 한국 자료에 없다.**

---

## S3. 한국 IFU — 찾지 못함 (확인한 경로 전부 기록)

| 경로 | 결과 |
| --- | --- |
| `https://www.myalcon.com/kr/professional/contact-lenses/monthly/total30/` | **HTTP 404** |
| `https://www.myalcon.com/kr/professional/` | HTTP 200이지만 `contact-lens` 링크 **0건** |
| `https://total30.myalcon.com/kr/` | **DNS 해석 실패**(연결 불가) |
| `https://total.myalcon.com/kr/products/total30` · `/total30/` · `/total30-monthly` | **HTTP 404** |
| `https://www.alcon.co.kr/` | `https://www.alcon.com/ko-KR/`(기업 사이트)로 리다이렉트, 렌즈 사양 없음 |
| 한국 제품 페이지 내 PDF 링크 | **0건** (`.pdf` 문자열 자체가 0회) |
| `https://ifu.alcon.com/` (알콘 공식 eIFU 포털) | HTTP 200이나 화면에 `Request a document`만 노출. 백엔드 `https://api-public.qarad.eifu.online/api/v1/manufacturers` 응답이 `"authenticationMechanisms":["USERNAME_PASSWORD"]` — **로그인 없이는 문서를 열 수 없다.** (Referer 헤더 없이 호출하면 `Invalid referer` 400) |

**결론: 2026-08-28 시점에 온라인으로 공개된 한국어 IFU를 찾지 못했다.**
따라서 허가번호의 유일한 근거는 MFDS UDI(S1)다. 프리시전원과 같은 상황이다.

---

## S4. Alcon 미국 전문가용 공식 사양 (수치의 1차 출처)

- URL: https://www.myalcon.com/professional/contact-lenses/monthly/total30/
- 조회일: 2026-08-28 · HTTP 200 · `curl -L`(브라우저 UA)
- 방법: HTML 안 `<table class="specC">`의 `<div class="label">`/`<div class="body">` 쌍을 그대로 추출(라벨·값 귀속 확인)
- 문서 식별 표기: 페이지 하단 `©2024 Alcon Inc. US-T30-2400157`

### S4-1. TOTAL30® contact lenses parameters 표 — 라벨/값 원문 그대로

```
Material                            lehfilcon A
Center Thickness (@ -3.00D, mm)     0.08
Core Modulus (MPa)                  0.6
Diameter (mm)                       14.2
Handling Tint                       VISITINT®
Packaging                           6‑ct. box and 1‑ct. trial pack
Dk/t                                154 @ ‑3.00D
Surface Water Content               100%
Light Properties                    Class 1 UV blocking* and Blue‑Violet Light Filtration**
Base Curve (mm)                     8.4
Core Water Content                  55%
Wearing Schedule                    Daily wear only
Power Range                         +8.00D to +6.50D (0.50D steps); +6.00D to +0.25D (0.25D steps); ‑0.25D to ‑8.00D (0.25D steps); ‑8.50D to ‑12.00D (0.50D steps)
```

표 각주 원문:

```
*UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear, such as UV-absorbing goggles or sunglasses because they do not completely cover the eye and surrounding area. The patient should continue to use UV-absorbing eyewear as directed.
**There is no demonstrated clinical benefit to a 34% reduction in blue-violet HEV light at wavelengths below 450nm.
***Based on in vitro measurements of unworn lenses.
```

### S4-2. 같은 페이지 본문의 함수율·Dk/t 표기 (표와 다른 문장)

```
TOTAL30® contact lenses feature a gradual transition in water content, from 55% at the core to nearly 100% water at the outermost surface
*Based on in vitro measurements of unworn lenses.
**Dk/t @-3.00D = 154
***Based on in vitro studies on unworn lenses.
```

```
The first and only monthly replacement Water Gradient contact lenses
Offer monthly replacement lens patients the Water Gradient performance of TOTAL30®. Contact lenses so comfortable they feel like nothing, even at day 30.
```

### S4-3. 이 표에 **없는** 것

- **Dk/t 시험 방법·온도가 없다.** 표기는 시험도수(`@ ‑3.00D`)뿐이고, 분극법/쿨로메트릭 여부,
  boundary·edge 보정 여부, 측정 온도가 어디에도 적혀 있지 않다. 프리시전원과 같다.
- **교체주기(`Replacement Frequency`) 행이 없다.** `Wearing Schedule: Daily wear only`는 착용방식이지 교체주기가 아니다.
  교체주기는 본문 문장(`monthly replacement`)과 국제 페이지·PI가 말한다.
- UV 차단율 퍼센트가 없다. 표기는 `Class 1 UV blocking`이라는 등급뿐이다.

### S4-4. 이 페이지의 성능·마케팅 문구 (물성값으로 옮기지 않았다)

`Contact Lenses that Feel Like Nothing, Even at Day 30`, `superior softness`, `superior lubricity`,
`superior in vitro lens surface moisture stability`, `CELLIGENT® Technology ... biomimics the corneal surface`,
`Helps reduce the adherence of bacteria and lipids` 등은 전부 `Alcon data on file`(2020·2021) 또는
in vitro 시험에 근거한 주장이다. **공개 문서가 아니므로 원문을 확인할 수 없고, 물성값으로 옮기지 않았다.**

---

## S5. Alcon 글로벌(International) 전문가 페이지 — 지역 간 대조

- URL: https://www.myalcon.com/international/professional/contact-lenses/monthly/total30/
- 조회일: 2026-08-28 · HTTP 200
- 문서 식별 표기: `©2025 Alcon Inc. UKIE-T30-2500001`

텍스트로 확인된 원문:

```
Replacement Frequency: monthly contact lenses for daily wear
Indications: myopia, hyperopia
Packaging sizes of all products are subject to availability and may vary by country
```

**파라미터 표는 텍스트가 아니라 이미지다**
(`https://www.myalcon.com/international/sites/g/files/rbvwei2661/files/total30-parameters2.png`,
`alt="TOTAL30® Table Parameters"`, 2329×990 PNG).
이미지를 내려받아 판독한 결과:

```
MATERIAL                         lehfilcon A
CENTER THICKNESS (@-3.00D, mm)   0.08
SURFACE MODULUS (MPa)            0.046
DIAMETER (mm)                    14.2
HANDLING TINT                    VISITINT®
CORE MODULUS (MPa)               0.6
Dk/t                             154 @ -3.00D
SURFACE WATER CONTENT            ~100%
PACKAGING                        6-pack, 3-pack, and 1-lens trial box
BASE CURVE (mm)                  8.4
CORE WATER CONTENT               55%
LIGHT PROPERTIES                 Class I UV absorption* and HEVL filtration**
POWER RANGE                      +8.00D to +6.50D (0.50D steps); +6.00D to +0.25D (0.25D steps); -.025D to -8.00D (0.25D steps); -8.50D to -12.00D (0.50D steps)
WEARING SCHEDULE                 Daily wear only
```

이미지 하단 각주 원문:

```
TOTAL30 are a monthly lens for daily wear.
*UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear, such as UV-absorbing goggles or sunglasses, because they do not completely cover the eye and surrounding area. The patient should continue to use UV-absorbing eyewear as directed.
**There is no demonstrated clinical benefit to a 34% reduction in visible light at wavelengths below 450 nm.
```

미국 표(S4-1)와 대조한 결과:

| 항목 | 미국(S4) | 국제(S5, 이미지) | 일치 |
| --- | --- | --- | --- |
| Material | `lehfilcon A` | `lehfilcon A` | 예 |
| Center Thickness | `0.08` | `0.08` | 예 |
| Diameter | `14.2` | `14.2` | 예 |
| Base Curve | `8.4` | `8.4` | 예 |
| Core Water Content | `55%` | `55%` | 예 |
| Dk/t | `154 @ ‑3.00D` | `154 @ -3.00D` | 예 |
| Core Modulus | `0.6` | `0.6` | 예 |
| **Surface Water Content** | **`100%`** | **`~100%`** | **표기 다름** |
| Light Properties | `Class 1 UV blocking* and Blue‑Violet Light Filtration**` | `Class I UV absorption* and HEVL filtration**` | 표기 다름(같은 등급) |
| Packaging | `6‑ct. box and 1‑ct. trial pack` | `6-pack, 3-pack, and 1-lens trial box` | 구성 다름(지역별) |
| Surface Modulus | 표에 없음 | `0.046` | 국제 페이지에만 |

> 이 값들 중 이미지 판독분(S5)은 **1차 출처로 쓰지 않고** 지역 간 대조 근거로만 사용한다.
> 다만 각주 `TOTAL30 are a monthly lens for daily wear.`는 교체주기와 착용방식을 한 문장에서 구분한
> 유일한 글로벌 표기라서 교체주기 필드의 근거로 인용한다.

또한 이 페이지의 `TOTAL30® Product Available in` 목록에는
`Asia Pacific: Malaysia`만 있고 **대한민국은 없다.**
프리시전원과 같이 자체 로컬 사이트를 가진 나라를 빼는 구조로 보이며,
한국 유통 근거는 이 목록이 아니라 **한국알콘 사이트(S2)와 MFDS 원장(S1)**이다.
목록의 부재를 미유통으로 해석하지 않았다.

---

## S6. Alcon 미국 Package Insert (PI) — 시험 조건이 적힌 문서

- 링크 경로: S4 페이지의 인서트 링크 → https://alcon.widen.net/s/jj2ns5khhv/w900436303-0322-i-lefcona-us
- 실제 PDF: https://alcon.widen.net/content/i5swbxmkgn/original/W900436303-0322-I-LEFCONA-US.pdf
- 조회일: 2026-08-28 · HTTP 200 · 866,452 bytes · 2페이지 · `application/pdf`
- 방법: `curl -L` 다운로드 후 `pypdf` 텍스트 추출(텍스트 레이어 정상, 65,439자)
- 문서 식별 표기(본문 인쇄): `Part #: W900460742-0323` · `Date: March 2023` · `© 2023 Alcon Inc.`
  · `Package Insert for Alcon TOTAL30™, TOTAL30™ for Astigmatism and TOTAL30™ Multifocal (lehﬁlcon A) Soft Contact Lenses`
  · `This package insert is effective as of March 2023`

> 이 PDF는 파일명(`W900436303-0322`)과 본문 인쇄 부품번호(`W900460742-0323`)가 다르다. 둘 다 기록한다.
> 또한 PDF 텍스트 레이어에서 `fi`가 **합자(U+FB01, `ﬁ`)로 저장돼 있어** 추출 문자열이 `lehﬁlcon A`로 나온다.
> 아래 인용은 추출된 그대로 적는다. 화면 표시값은 합자를 푼 `lehfilcon A`를 쓴다.

### S6-1. PRODUCT DESCRIPTION 원문

```
TOTAL30™, TOTAL30™ for Astigmatism  and TOTAL30™ Multifocal  soft
contact lenses are made of a lens material that is approximately 55% water and
45% lehﬁlcon A, a silicone containing hydrogel. Lenses contain the color additive
Reactive Blue 247 and have a light blue-green tint that makes them easier
to see when handling. Benzotriazole UV and UV-Vis absorbing monomers are
used to block UV radiation and reduce transmittance of high energy visible light
(HEVL) wavelengths in the range from 380 nm to 450 nm. The transmittance
characteristics are less than 1% in the UVB range of 280 nm to 315 nm and
less than 10% in the UVA range of 315 nm to 380 nm for the entire power
range. The thinnest lenses block 34% of radiation across the high energy visible
light (HEVL) wavelengths in the range from 380 nm to 450 nm (see UV and HEVL
disclaimer Notes in ACTIONS section).
```

### S6-2. LENS PROPERTIES 원문

```
LENS PROPERTIES
• Refractive Index (hydrated): 1.40
• Light Transmittance: ≥ 90% (@ 640 nm, -3.00 D)
• HEVL Transmittance ≤ 80%T at 420 nm (refer to Figure 1 for
transmittance proﬁle)
• Oxygen Permeability (Dk): 123 x 10-11 (cm2/sec) (ml O2 /ml x mm
Hg), measured at 35 °C (normalized Dk,
Polarographic method)
• Water Content: 55% by weight in normal saline
• Surface Water Content: ≥ 90%
Lens Parameter Ranges
• Diameter:     13.0 to 15.0 mm
• Base Curve: 8.0 to 9.2 mm
• Spherical Powers: -20.00 to +20.00 D
```

> `Lens Parameter Ranges`는 **재질 수준의 허용 범위**이고, 실제 판매 렌즈의 값은 아래에 있다. 두 가지를 섞지 않는다.

### S6-3. Available Lens Parameters — 구면 / 난시용 / 다초점 분리 원문

```
Available Lens Parameters1
TOTAL30™ (lehﬁlcon A) spherical contact lenses:
• Chord Diameter: 14.2 mm
• Center Thickness: 0.08 mm @ -3.00 D (varies with power)
• Base Curve: 8.4 mm
• Powers: Minus: -0.25 D to -8.00 D (0.25 D steps)
-8.50 D to -12.00 D (0.50 D steps)
   Plus: +0.25 D to +6.00 D (0.25 D steps)
+6.50 D to +8.00 D (0.50 D steps)

TOTAL30™ for Astigmatism (lehﬁlcon A) toric contact lenses:
• Chord Diameter: 14.5 mm
• Center Thickness: 0.10 mm @ -3.00 D (varies with power)
• Base Curve: 8.6 mm

TOTAL30™ Multifocal (lehﬁlcon A) contact lenses:
• Chord Diameter: 14.2 mm
• Center Thickness: 0.08 mm @ -3.00 D (varies with power)
• Base Curve: 8.4 mm
```

**구면과 난시용은 직경·중심두께·BC가 모두 다르다.** 다초점은 구면과 같다. 본 검증 대상은 구면 값만 쓴다.

각주 원문: `¹ Check for actual product availability which may change over time`

### S6-4. ACTIONS — UV·HEVL 차단율 원문

```
The lenses contain a
UV blocker to help protect against transmission of harmful UV radiation to
the cornea and into the eye. The thinnest lehﬁlcon A lenses (-3.00 diopters)
block 93% UVA radiation and 99% UVB radiation. The degree of UV radiation
blockage will increase for thicker lenses. The lenses reduce high energy visible
light (HEVL) reaching the back of the eye by about 34% in the range of 380 nm
to 450 nm. See Figure 1 for the transmittance proﬁle of the thinnest marketed
TOTAL30™ (lehﬁlcon A) lens. Radiation transmittance will be further reduced
with increasing lens thickness.
```

경고문 원문:

```
WARNING: UV-absorbing contact lenses are NOT substitutes for protective
UV-absorbing goggles or sunglasses because they do not completely
cover the eye and surrounding area. The patient should continue to use
UV-absorbing eyewear as directed.
```

### S6-5. 교체주기와 착용방식 — 원문

```
The lenses are to be prescribed for daily wear, with removal for cleaning
and disinfection (chemical, not heat) prior to reinsertion, or disposal, as
recommended by the eye care professional. Lenses should be discarded and
replaced with a new pair each month, or more often, if recommended by the
eye care professional.
```

```
Lens Replacement
Lenses should be discarded and replaced with a new pair each month, or more
often, if recommended by the eye care professional. Longer replacement periods
have not been studied and are not recommended by Alcon.
```

```
[Studies have not been] conducted to show that TOTAL30™, TOTAL30™ for
Astigmatism or TOTAL30™ Multifocal (lehﬁlcon A)  contact lenses are
safe to wear during sleep, therefore patients should be advised to remove
their lenses while sleeping. Normal daily wear of lenses assumes a minimum
of 6 hours of non-lens wear per 24-hour period. Optimum individual wearing
schedules will vary.
```

> **`daily wear`는 착용방식(잠자지 않고 낮 동안 착용)이고 `each month`가 교체주기다.**
> 한국 페이지의 `일일착용`·`30일까지 착용가능`과 정확히 같은 구분이다.
> 제조사가 수면 중 착용의 안전성을 보인 연구가 없다고 직접 밝히므로,
> 어떤 문구도 수면착용 허용으로 해석하지 않는다.

### S6-6. INDICATIONS — 적응증 원문

```
TOTAL30™ (lehﬁlcon A)  spherical soft contact lenses are indicated for the
optical correction of refractive ametropia (myopia and hyperopia) in phakic
or aphakic persons with non-diseased eyes with up to approximately 1.50
diopters (D) of astigmatism that does not interfere with visual acuity.
```

`근시·원시용 구면`이라는 본 검증 대상 정의와 일치하고,
한국 카테고리 페이지의 `난시 약 1.50 디옵터(D)/ 안과적 질환이 없는 눈의 근시 혹은 원시 시력 교정`과도 일치한다.

---

## S7. Alcon 미국 Professional Fitting and Information Guide

- 링크 경로: S4 페이지 → https://alcon.widen.net/s/8jfm2xnblf/w900436305-0322-fg-lefcona-us
- 실제 PDF: https://alcon.widen.net/content/pjzohc8stm/original/W900436305-0322-FG-LEFCONA-US.pdf
- 조회일: 2026-08-28 · HTTP 200 · 1,337,109 bytes · 44페이지 · 본문 인쇄 부품번호 `W900460744-0323`

이 문서는 **표면 함수율을 문장으로 설명하는 유일한 공식 자료**여서 값의 출처로 인용한다.

```
The core lens material containing 55% water transitions through a
water gradient to a hydrogel surface layer that exceeds 90% water. This
structure enables a silicone hydrogel lens with a water gradient that has:
 •  Over 90% water at the surface of the lens to mimic the water
content of the cornea.
 • High level of oxygen transmissibility through the lens.
 • Excellent overall comfort.
```

```
Lens Properties
• Refractive Index hydrated:   1.40
• Oxygen Permeability (Dk):  123 x 10-11 (cm2/sec) (ml O2 /ml
x mm Hg) measured at 35 °C
(Polarographic method)
• Water Content:  55% by weight in normal saline
• Surface Water Content: ≥ 90%
```

```
C.  Lens Wear and Replacement Schedules (see PACKAGE INSERT)
  TOTAL30™, TOTAL30™ for Astigmatism, and TOTAL30™
Multifocal (lehfilcon A) contact lenses are intended for daily wear,
and should be replaced monthly, or more often as directed by the eye
care professional.
```

- 구면 파라미터(`Chord Diameter 14.2 mm` · `Center Thickness 0.08 mm @ -3.00 D` · `Base Curve 8.4 mm`)는
  PI(S6-3)와 **완전히 동일**하다.
- **Dk/t 값은 이 문서에도 없다.** `154`는 0회 등장한다. Dk(`123 x 10-11`)만 있다.
- Dk 조건 표기가 PI와 미세하게 다르다: PI는 `(normalized Dk, Polarographic method)`,
  이 문서는 `(Polarographic method)`. 두 표기를 합치지 않고 각각 기록한다.
- 이 PDF의 텍스트 레이어에는 `lehfilcon A`가 합자 없이 저장돼 있어 PI와 추출 결과가 다르다.

Patient Information Booklet(https://alcon.widen.net/content/o7ydotsuif/original/W900436304-0322-PiB-LEFCONA-US.pdf,
607,692 bytes · 32페이지)도 확인했으나 **9개 필드의 새로운 값은 없다**(`8.4`·`14.2`·`0.08`·`154` 모두 0회).
값의 1차 출처로 쓰지 않는다.

---

## 값 대조표 — 같은 값을 여러 공식 자료가 말하는지

| 항목 | 한국 공식 (S2) | 미국 전문가 페이지 (S4) | 국제 전문가 페이지 (S5, 이미지) | 미국 PI (S6) | 미국 FG (S7) |
| --- | --- | --- | --- | --- | --- |
| 재질명 | **없음** | `lehfilcon A` | `lehfilcon A` | `lehﬁlcon A`, `a silicone containing hydrogel` | `lehfilcon A` |
| BC | 없음 | `8.4` | `8.4` | `Base Curve: 8.4 mm` | `Base Curve: 8.4 mm` |
| DIA | 없음 | `14.2` | `14.2` | `Chord Diameter: 14.2 mm` | `Chord Diameter:  14.2 mm` |
| 함수율(코어/전체) | 없음 | `Core Water Content 55%` | `CORE WATER CONTENT 55%` | `Water Content: 55% by weight in normal saline` | `Water Content:  55% by weight in normal saline` |
| **함수율(표면)** | 없음 | **`Surface Water Content 100%`** | **`SURFACE WATER CONTENT ~100%`** | **`Surface Water Content: ≥ 90%`** | **`Surface Water Content: ≥ 90%`** |
| Dk/t | 없음 | `154 @ ‑3.00D` | `154 @ -3.00D` | **없음** (대신 `Dk 123 x 10-11`) | **없음** (대신 `Dk 123 x 10-11`) |
| 중심두께 | 없음 | `0.08` (`@ -3.00D, mm`) | `0.08` | `0.08 mm @ -3.00 D` | `0.08 mm @ -3.00 D` |
| 교체주기 | `30일까지 착용가능`, `한달용`, `최대 한 달(30일)` | 본문 `monthly replacement` (표에 행 없음) | `Replacement Frequency: monthly contact lenses for daily wear` | `replaced with a new pair each month` | `should be replaced monthly` |
| 착용방식 | `일일착용`, `매일착용소프트콘택트렌즈` | `Wearing Schedule: Daily wear only` | `WEARING SCHEDULE Daily wear only` | `prescribed for daily wear` · 수면착용 연구 없음 | `intended for daily wear` |
| UV | **없음** | `Class 1 UV blocking* and Blue‑Violet Light Filtration**` | `Class I UV absorption* and HEVL filtration**` | `block 93% UVA radiation and 99% UVB radiation` (-3.00D) | `tUVB < 1.0 %`, `tUVA < 10.0 %` |
| 허가번호 | 없음 | 해당 없음 | 해당 없음 | 해당 없음 | 해당 없음 |

허가번호의 유일한 근거는 MFDS UDI(S1)다.

**공식 출처끼리 숫자가 어긋나는 항목은 표면 함수율 하나다.** 아래에 따로 적는다.

### (1) 표면 함수율 — 두 갈래로 인쇄된다

| 문서 | 인쇄된 라벨 | 값 |
| --- | --- | --- |
| 미국 전문가 페이지 표 | `Surface Water Content` | `100%` |
| 미국 전문가 페이지 본문 | (문장) | `nearly 100% water at the outermost surface` |
| 국제 전문가 페이지 이미지 | `SURFACE WATER CONTENT` | `~100%` |
| 미국 Package Insert | `Surface Water Content` | `≥ 90%` |
| 미국 Fitting Guide | `Surface Water Content` | `≥ 90%` |
| 미국 Fitting Guide 본문 | (문장) | `a hydrogel surface layer that exceeds 90% water`, `Over 90% water at the surface of the lens` |

**같은 라벨(`Surface Water Content`) 아래 규제 문서는 `≥ 90%`, 마케팅·전문가 페이지는 `100%`/`~100%`를 적는다.**
`100%`는 `≥ 90%`를 위배하지 않으므로 논리적 모순은 아니지만, **인쇄된 숫자가 다르다.**
데일리스 토탈원이 같은 표면 함수율을 `80% 이상`(일본·한국) / `〜100%`(일본) / `-100%`(미국)로 적는 것과 같은 구조다.
본 검증은 파일럿의 데일리스 토탈원 처리를 따라 **하나로 합치지 않고 전부 병기**했고,
표시값에는 규제 문서의 보수적 표기(`90% 이상`)를 쓴다.
(이 판단은 `REVIEW.md` 3절에 판단 근거와 함께 다시 적었다.)

### (2) 코어 함수율 55%의 라벨도 문서마다 다르다

- 전문가 사양표: `Core Water Content 55%`(**코어**)
- PI·FG: `Water Content: 55% by weight in normal saline`(**렌즈 재질 전체**)
- PI PRODUCT DESCRIPTION: `a lens material that is approximately 55% water and 45% lehﬁlcon A`

숫자는 같지만 **무엇을 잰 값인지에 대한 설명이 다르다.** 프리시전원의 51%와 정확히 같은 상황이다.
표면 함수율과는 어떤 경우에도 합치지 않는다.

### (3) UV 표기의 성격이 다르다

- 전문가 페이지: `Class 1 UV blocking`(미국) / `Class I UV absorption`(국제) — **등급**만
- PI: `The thinnest lehﬁlcon A lenses (-3.00 diopters) block 93% UVA radiation and 99% UVB radiation.` — **-3.00D 측정값**
- PI PRODUCT DESCRIPTION: `less than 1% in the UVB range of 280 nm to 315 nm and less than 10% in the UVA range of 315 nm to 380 nm for the entire power range` — **전 도수 범위 투과율**
- FG: `tUVB < 1.0 %` / `tUVA < 10.0 %` — 같은 투과율을 기호로
- **한국 자료에는 UV 표기가 아예 없다.** 프리시전원은 한국 페이지가 `자외선 차단 1등급`이라도 적었지만 이 제품은 0건이다.

등급·측정값·투과율은 성격이 다른 값이므로 하나로 합치지 않는다.

### (4) Dk와 Dk/t를 섞지 않았다

| 문서 | 항목 | 값 | 조건 |
| --- | --- | --- | --- |
| 전문가 사양 | `Dk/t` | `154 @ ‑3.00D` | **시험도수만.** 측정법·보정·온도 표기 없음 |
| 미국 PI | `Oxygen Permeability (Dk)` | `123 x 10-11 (cm2/sec) (ml O2 /ml x mm Hg)` | `measured at 35 °C (normalized Dk, Polarographic method)` |
| 미국 FG | `Oxygen Permeability (Dk)` | `123 x 10-11 (cm2/sec) (ml O2 /ml x mm Hg)` | `measured at 35 °C (Polarographic method)` |

PI·FG가 밝힌 35℃·분극법은 **Dk의 조건이지 Dk/t의 조건이 아니다.**
두 값을 섞지 않았고, Dk와 중심두께로 Dk/t를 역산하지도 않았다.

---

## 확인하지 못한 것

1. **한국 표기 수치 일체.** 한국 공식 페이지 2종 어디에도 BC·DIA·함수율·Dk/t·중심두께·재질명·UV가 없다.
   이 제품의 모든 물성값은 **글로벌 공식 자료가 유일한 근거**다.
2. **한국어 IFU.** 온라인 공개본을 찾지 못했다(S3). 알콘 공식 eIFU 포털은 로그인 인증이 필요하다.
   실물 포장 IFU 확보 경로는 별도 과제로 남는다.
3. **Dk/t의 시험 방법·온도.** 알콘은 Dk/t에 시험도수(`@ -3.00D`)만 붙이고 측정법·보정·온도를 밝히지 않는다.
4. **한국 유통 파라미터 범위.** 글로벌 사양의 도수 범위가 한국에서 그대로 유통되는지 한국 자료에 표가 없어 확인하지 못했다.
   포장은 MFDS 원장의 포장내수량 `1`·`6`이 미국 전문가 사양(`6‑ct. box and 1‑ct. trial pack`)과 일치하고,
   국제 페이지의 `3-pack`은 한국 원장에 없다.
5. **MFDS 품목허가 상세 원장(원재료·모양 및 구조).** UDI 표준코드 조회 외의 품목허가 상세 화면 경로를 찾지 못했다
   (`emedi.mfds.go.kr`의 후보 경로 3종 모두 404). 재질명·BC·DIA의 한국 공식 근거를 얻을 수 있는 경로이므로
   **다음 검증에서 우선 시도할 항목**으로 남긴다.
6. **알콘의 `Data on File` 문헌.** 전문가 페이지 각주가 인용하는 `Alcon data on file, 2020/2021`은
   공개 문서가 아니므로 원문을 확인할 수 없었다. 이들에 근거한 성능 문구는 물성값으로 옮기지 않았다.
