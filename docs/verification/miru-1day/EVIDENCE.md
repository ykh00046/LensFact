# 검증 근거 — 메니콘 미루 원데이 (Miru 1day Menicon Flat Pack)

검증일: 2026-08-28
대상: 근시·원시용 투명 구면, 1일 교체 (`Miru 1day UpSide`(midafilcon A)와 `Miru 1month Menicon`(asmofilcon A), 그리고 글로벌 라인업의 toric·multifocal은 제외)
제조사: Menicon Co., Ltd. · 한국 유통: **(주)매니콘코리아** (MFDS 원장 표기 원문)

이 문서는 실제로 가져온 공식 자료의 **원문**만 담는다. 값의 해석·정규화는 하지 않는다.

> 이 제품의 위치: **한국 공식 페이지가 수치를 직접 인쇄하는 드문 사례**다.
> 재질·함수율·BC·직경이 한국 소비자 페이지와 한국 전문가 페이지 양쪽에 한국어로 실려 있다.
> 대신 **Dk/t·중심두께·UV·허가번호는 한국·글로벌 어느 페이지에도 없다.**
> 그리고 그 없음은 "자료를 못 찾았다"가 아니라, **같은 제조사가 같은 표 서식으로 형제 제품에는 그 세 행을 인쇄하면서
> 이 제품 표에서만 행 자체를 뺀 것**이다(S6에서 대조). 이 점이 이번 검증의 핵심이다.

---

## S1. MFDS 의료기기 UDI 표준코드 조회 — 한국 유통·허가 식별

- URL: https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do
- 조회일: 2026-08-28
- 방법: 화면(`schStddCdLstView.do`)을 먼저 GET해 세션 쿠키(`JSESSIONID`, `elevisor_for_j2ee_uid`)를 받은 뒤,
  화면의 `searchList()`가 쓰는 엔드포인트 `POST /msismext/udi/uif/selectStddCdLstAjax.do`를 호출했다.
  요청 본문은 **UTF-8 URL 인코딩**(Python `urllib.parse.urlencode(..., encoding="utf-8")`)으로 보냈다.
  토탈30 검증(S1-0)이 기록한 인코딩 함정을 그대로 따랐고, 대조군으로 `bplcNm=한국알콘` 조회가
  **46,382건**(파일럿·프리시전원·토탈30 기록과 동일)을 반환하는 것을 먼저 확인해 인코딩이 정상임을 증명한 뒤 진행했다.
- 공통 조회 조건: `udiCd=` · `ediCd=` · `prdlNm=` · `sDate=` · `eDate=` 비움, `dateCancelChk=N`, `selRcprslryTrgtYn=`(전체)

> 이 화면의 AJAX는 `pageSize`를 무시하고 **조건에 맞는 전체 행을 한 번에 반환**한다.
> 아래 "조회 건수"는 응답 행 수이자 각 행의 `totCnt` 값이며, 두 값이 모든 조회에서 일치했다.

### S1-1. 업체명 조회 — 한글 표기 순회 (법인명 확정)

| # | `bplcNm` | 조회 건수 |
| --- | --- | --- |
| A1 | `메니콘` | **0** |
| A2 | `메니콘코리아` | **0** |
| A3 | `한국메니콘` | **0** |
| A4 | `(주)메니콘코리아` | **0** |
| A5 | `메니콘코리아(주)` | **0** |
| A6 | `Menicon` / `MENICON` / `menicon` (업체명 칸) | **0** / **0** / **0** |
| A7 | `미루` | **0** |
| A8 | **`매니콘`** | **16,401** |
| A9 | **`매니콘코리아`** | **16,401** |
| A10 | **`(주)매니콘코리아`** | **16,401** |
| A11 | `매니콘코리아(주)` | **0** |
| A12 | `한국매니콘` | **0** |

**한국 유통사 법인명은 `(주)매니콘코리아`다. `메`가 아니라 `매`다.**
`docs/PRODUCT_CANDIDATES_20.md` 표 A 18~20번의 `메니콘코리아(법인명 확인 필요)`와
`미해결 사항 1`의 Menicon 항목이 여기서 해소된다.

> ⚠ 이 한 글자 때문에 "한국 유통 안 함"으로 오판할 뻔했다.
> 브랜드 한글 표기(`메니콘`)와 법인 등록명(`매니콘`)이 다르다.
> **한글 업체명 0건은 인코딩 문제이거나 표기 문제일 수 있으므로, 모델명 조회로 반드시 교차 확인해야 한다.**
> 이번에는 A8을 찾기 전에 `modelnm=Miru`(14,233건)로 먼저 업체명을 역추적했다.

### S1-2. 모델명 조회 — 표기 순회

| # | `modelnm` | 조회 건수 | 비고 |
| --- | --- | --- | --- |
| B1 | `Miru 1day` | **0** | |
| B2 | `MIRU 1DAY` | **0** | |
| B3 | `MIRU` | **0** | |
| B4 | `miru` | **0** | |
| B5 | `미루` | **0** | |
| B6 | **`Miru`** | **14,233** | 파스칼 표기만 잡힌다 |
| B7 | `hioxifilcon` / `Hioxifilcon` / `HIOXIFILCON` | **0** / **0** / **0** | 재질명으로는 조회되지 않음 |
| B8 | **`Flat Pack`** | **154** | 본 검증 대상 전체 |
| B9 | `FlatPack` | **0** | |
| B10 | `1day Flat Pack` (공백 1개) | **0** | |
| B11 | **`1day  Flat Pack`** (공백 **2개**) | **154** | 등록 원문 |
| B12 | `Miru Flat Pack` | **0** | |
| B13 | `MIRU 1day Flat Pack` | **0** | |
| B14 | `1day` | 10,978 | 대부분 쿠퍼비전 제품 |
| B15 | `Menicon` / `MENICON` (모델명 칸) | 1 / 3 | 하드렌즈만 |

### S1-3. ⚠ 검색 함정 — 다음 메니콘 제품 검증에서 재사용할 것

**(1) 등록 모델명에 `Miru`가 없다.** 구면 원데이 플랫팩의 등록 모델명은 **`1day  Flat Pack`**이다.
`Miru 1day` · `Miru Flat Pack` 어느 쪽으로도 **0건**이다.
`docs/PRODUCT_CANDIDATES_20.md` 표 A 18번의 검색 키워드는 `Miru 1day`, `Flat Pack`인데,
**`Miru 1day`는 0건이고 `Flat Pack`만 맞는다.**

**(2) 모델명 안에 공백이 두 칸 들어 있다.** `1day  Flat Pack`이며 `1day Flat Pack`(한 칸)은 **0건**이다.
원장 문자열의 공백 개수까지 일치해야 한다.

**(3) 대소문자를 구분한다.** `MIRU`·`miru` 0건, `Miru`만 14,233건.
아큐브 모이스트는 `®`가 있어야 했고, 바이오트루는 `®`가 없어야 했고, 토탈30은 전부 대문자였고,
프리시전원은 파스칼 표기였다. **메니콘은 파스칼 `Miru` + 공백 2칸이다. 제품마다 전부 다르다.**

**(4) 재질명으로는 조회되지 않는다.** `hioxifilcon` 세 가지 대소문자 표기 모두 0건.
바이오트루가 `nesofilcon A`를 모델명으로 함께 등록해 둔 것과 대조된다.
**이 제품의 재질명은 MFDS 원장이 뒷받침하지 않는다.**

**(5) 업체명은 `매니콘`이다.** S1-1 참조.

### S1-4. `bplcNm=매니콘` 16,401건 전수 집계 — distinct 신원 10건

형식: `업체명 | 업체구분 | 소분류 품목 명칭 | 등급 | 품목허가번호 | 모델명 | 업체 제품 명칭 ## 행 수`

```
(주)매니콘코리아 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 15-405 호 | Miru 1MT        | None         ## 13860
(주)매니콘코리아 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 15-405 호 | PremiO Toric    | None         ## 1848
(주)매니콘코리아 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 15-319 호 | Miru 1M         | None         ## 308
(주)매니콘코리아 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 15-319 호 | PremiO          | None         ## 154
(주)매니콘코리아 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 15-476 호 | 1day  Flat Pack | None         ## 154
(주)매니콘코리아 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 19-300 호 | Miru UpSide     | Miru UpSide  ## 65
(주)매니콘코리아 | 수입업 | 연속착용하드콘택트렌즈   | 3 | 수허 18-340 호 | α Ortho-K       | Menicon Alpha Ortho-K ## 8
(주)매니콘코리아 | 수입업 | 매일착용 하드 콘택트렌즈 | 2 | 수허 02-778 호 | MENICON Z       | None         ## 2
(주)매니콘코리아 | 수입업 | 매일착용 하드 콘택트렌즈 | 2 | 수허 02-778 호 | Menicon Z-α     | None         ## 1
(주)매니콘코리아 | 수입업 | 매일착용 하드 콘택트렌즈 | 2 | 수허 98-760 호 | MENICON EX      | None         ## 1
```

**본 검증 대상(1일 교체 구면 플랫팩)은 `수허 15-476 호` 하나뿐이다.**

이 표에서 함께 드러난 사실 두 가지를 기록한다.

- **하나의 허가번호가 서로 다른 제품 브랜드를 묶는다.** `수허 15-405 호`는 `Miru 1MT`와 `PremiO Toric`을,
  `수허 15-319 호`는 `Miru 1M`과 `PremiO`를 함께 담는다. 허가번호 하나 = 제품 하나가 아니다.
- **메니콘 프리미오(PremiO) 2주 제품은 한국에 등록돼 있다**(`수허 15-319 호`, 154건).
  `docs/PRODUCT_CANDIDATES_20.md` 미해결 사항 3(“프리미오 한국 공식 페이지를 찾지 못했다”)에 대한
  **유통·허가 쪽 답**이다. 다만 한국 공식 제품 페이지는 이번에도 확인하지 못했다(S3-3).
  본 검증 범위 밖이므로 값은 수집하지 않았다.

### S1-5. `itemPermitNo=수허 15-476 호` 단독 조회 (업체명 비움) 전수 집계

- 조회 건수 **154건**, distinct 신원 **1건**:
  `(주)매니콘코리아 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 15-476 호 | 1day  Flat Pack | (업체 제품 명칭 없음)`
- distinct UDI-DI 코드 **154건** (중복 없음)
- 포장내수량 분포: `6` 77건 · `30` 77건
- UDI-DI 예시(원문): `00192538601757`, `00192538601764`, `00192538601771`, `00192538601719`, `00192538601726`, `00192538601733`
- 코드체계 `GS1` · 요양급여 대상 치료재료 여부 `N` · 사용자 멸균 여부 `N` · Kit 여부 `N`
- `itemPermitNo=수허 15-476`(`호` 없이)로 조회해도 같은 154건이 나온다.

업체명 기준 조회에서 걸러낸 154건과 허가번호 단독 조회 154건이 **완전히 같은 집합**이다.

**허가번호 원문: `수허 15-476 호`** (`수허`, 공백, `15-476`, 공백, `호`)

**업체 제품 명칭(`prdtNmCn`)이 비어 있다(`null`).**
데일리스 토탈원(`워터렌즈`)·토탈30(`워터렌즈 한달용, Celligent™`)처럼 한글 판매명이 원장에 직접 들어 있지 않다.
이 제품은 **한국 판매명이 영문 그대로**(`Miru 1day Menicon Flat Pack`)라서, 원장과 한국 페이지를 잇는 문자열은
모델명의 `Flat Pack`뿐이다.

포장내수량 `6`·`30`은 트레이드 자료(S5)의 `6 lens trial pack, 30 lens packs`와 일치한다.
한국 제품 페이지는 `렌즈 팩 30개`만 적는다(S2-1).

---

## S2. 한국 공식 페이지 — 수치의 1차 출처

### S2-1. 메니콘코리아 소비자 제품 페이지

- URL: https://www.menicon.co.kr/consumer/products/disposable-lenses/miru-1day-flat-pack
- 조회일: 2026-08-28 · HTTP 200 · 228,693 bytes · `curl -L`(브라우저 UA) · 리다이렉트 없음
- 문서 제목 원문: `미루 1day 플랫팩 | 제품 &gt; 소비자 &gt; 메니콘코리아`
- 페이지 상단 제품명 원문: `Miru 1day Flat Pack`

`제품 세부 정보` 표 원문 (라벨/값 쌍 그대로):

```
특성
소재            hioxifilcon A(안구에 직접 부착하여 시력보정용으로 사용하는 친수성 단량체 Hydroxyethyl Methacrylate(HEMA) 및 Glycerol monomethacrylate(GMA)로 구성됨)
수분 함량       57%
취급 색조       라이트 블루
디자인          양면 비구면
제조            CENTRAFORMTM 공정

렌즈 매개 변수
기본 커브       8.6mm
직경            14.2mm
Power 범위      +4.00D ~ +0.50D(-0.25D 단계)
                -0.50D ~ -6.00D(-0.25D 단계)
                -6.50D ~ -10.00D(-0.50D 단계)
렌즈 마킹       (이미지)

착용 일정
자료            매일 교체

포장
사용 가능한 패키지   렌즈 팩 30개
```

> 원문 표기 주의 3건.
> (1) `소재` 값의 끝부분 `구성됨)`은 HTML에서 `구`·`성`·`됨`·`)`이 각각 `<span style="font-size: 16px;">`으로 쪼개져 있다.
> 렌더링되는 문자열은 위와 같고, 태그 제거 방식에 따라 `구 성 됨 )`으로 벌어져 보일 수 있다.
> (2) `CENTRAFORMTM`은 `™`가 아니라 문자 `TM`으로 인쇄돼 있다.
> (3) `착용 일정` 블록의 행 라벨이 **`자료`**다. 글로벌 페이지의 같은 행 라벨은 `Material`이며,
> 값(`매일 교체` / `Daily replacement`)만 교체주기다. **라벨이 값과 어긋난 템플릿 오류**로 보인다. 원문 그대로 기록한다.
> (4) `렌즈 마킹` 행의 이미지 경로는 `.../Dispo/**Miru UpSide**/Marking Upside Sph_MF_LOW_HIGH.png`로,
> **형제 제품(UpSide)의 자산을 그대로 쓰고 있다.** 이 행은 값의 근거로 쓰지 않았다.

### S2-2. 메니콘코리아 **전문가용** 제품 페이지 (이번 검증에서 새로 찾은 출처)

- URL: https://www.menicon.co.kr/professional/products/disposable-lenses/miru-1day-flat-pack
- 조회일: 2026-08-28 · HTTP 200 · 250,499 bytes
- 문서 제목 원문: `미루 1day 플랫팩 | 제품 &gt; 프로페셔널 &gt; 메니콘`

`docs/PRODUCT_CANDIDATES_20.md` 표 B에는 소비자 페이지만 적혀 있었다.
**같은 경로의 `professional` 판이 별도로 존재하고, 재질 계열 표기가 소비자 판보다 명확하다.**

표 원문:

```
특성
소재            hioxifilcon A(하이드로겔)
함수율          57%
색상            라이트 블루
디자인          양면 비구면
제조            CENTRAFORMTM 공정

렌즈 매개 변수
기본 커브       8.6mm
직경            14.2mm
Power 범위      +4.00D ~ +0.50D(-0.25D 단계)-0.50D ~ -6.00D(-0.25D 단계)-6.50D ~ -10.00D(-0.50D 단계)
렌즈 마킹       (이미지 — 소비자 판과 같은 UpSide 자산)

착용 일정
자료            매일 교체

패키징
사용 가능한 패키지   렌즈 팩 30개
```

소비자 판과 전문가 판의 **라벨이 다르다**: `수분 함량` ↔ `함수율`, `취급 색조` ↔ `색상`, `포장` ↔ `패키징`.
그리고 소재 값이 다르다: 소비자 판은 **단량체 구성 설명**, 전문가 판은 **재질 계열(`하이드로겔`)**.
**숫자는 두 판이 완전히 같다.** 두 문자열을 합치지 않고 각각 인용했다.

### S2-3. 한국 공식 자료에 **없는** 것 (직접 확인)

소비자 페이지·전문가 페이지 HTML을 태그 제거 후 전문 검색한 결과, 다음 문자열이 **0건**이다.

- `Dk` · `산소` · `투과` — 0건
- `두께` · `중심두께` — 0건
- `자외선` · `UV` — 0건
- `수허` · `허가` · `의료기기` · `심의` — 0건

즉 한국 공식 자료가 책임지는 범위는 **재질·함수율·BC·직경·도수 범위·교체주기·포장**까지다.
**Dk/t·중심두께·UV·허가번호는 한국 자료에 없다.**

### S2-4. 메니콘코리아 일회용 렌즈 목록 — 한국 라인업 근거

- URL: https://www.menicon.co.kr/consumer/products/disposable-lenses
- 조회일: 2026-08-28 · HTTP 200 · 131,012 bytes

원문 발췌:

```
일회용 렌즈
Menicon은 일일용, 2주용, 월간용 일회용 콘택트렌즈 전 제품군을 보유하고 있습니다.
Replacement   1 day / 1 month
Modal         Spherical / Toric
Material      Hydrogel / Silicone hydrogel
Brand         Miru 1day Menicon Flat Pack / Miru 1day UpSide / Miru 1month Menicon
Miru 1day Menicon Flat Pack
Miru 1day UpSide
Miru 1month Menicon
Miru 1month Menicon toric
```

- **한국 판매명 원문은 `Miru 1day Menicon Flat Pack`이다**(목록의 Brand 필터·카드 모두).
  제품 페이지 상단의 표기는 `Miru 1day Flat Pack`(`Menicon` 없음)이라 **한 사이트 안에서 두 표기가 공존한다.**
- 한국 라인업에 **플랫팩 난시용(toric)은 없다.** 난시용은 `Miru 1month Menicon toric` 하나뿐이다.
  글로벌 자료의 toric·multifocal 파라미터를 이 제품 값으로 옮기지 않은 근거다.
- 페이지의 `Replacement` 필터에 `2 weeks`가 없다. 프리미오는 한국 소비자 사이트에 등재돼 있지 않다.

### S2-5. 메니콘코리아 회사 소개 페이지 — 법인명 한글 표기

- URL: https://www.menicon.co.kr/consumer/about · 조회일 2026-08-28 · HTTP 200 · 114,019 bytes

원문:

```
주식회사 매니콘 코리아는, 수 년간 매니콘 제품을 사랑해주신 것에 보답하고자 2014년 4월 한국에 상륙했습니다. 전문가의 처방을 바탕으로, 하드렌즈와 소프트렌즈, 관련 케어 용품을 공급하고 있습니다.
```

- **한국 공식 사이트 본문도 `매니콘`으로 적는다.** MFDS 원장의 `(주)매니콘코리아`와 같은 표기다.
- 반면 같은 사이트의 **페이지 제목은 `메니콘코리아`**다(S2-1). 한 사이트 안에서 `매`와 `메`가 섞인다.
- 연락처 페이지(https://www.menicon.co.kr/consumer/contact · HTTP 200 · 122,931 bytes)에는 법인명·사업자등록번호가 없고
  주소 `서울특별시 구로구 디지털로26길 61, 에이스하이엔드타워 2차 309호`와 메일·전화만 있다.

---

## S3. 한국 IFU — 한국 사이트가 올린 문서는 **영문**이다

### S3-1. 한국 사이트 게시 IFU (RA1DAYPI002, 2020-01)

- 링크 위치: 한국 소비자 페이지 `다운로드 > 미루 1일 플랫 팩 IFU`, 한국 전문가 페이지 `다운로드 > Miru 1day Flat Pack IFU`
- URL(소비자 페이지 링크): https://www.menicon.co.kr/hubfs/00%20Global%20official%20website/Professional%20website/Dispo/Miru%20Flat%20Pack/English_IFU_RA1DAYPI002.pdf
- URL(전문가 페이지 링크): https://www.menicon.co.kr/hubfs/English_IFU_RA1DAYPI002-1.pdf
- 조회일: 2026-08-28 · HTTP 200 · 854,519 bytes · 2쪽 · `application/pdf`
- 두 URL의 파일은 **md5 동일**(`ac325110f2a147d3ad7918d571aa417c`). 글로벌 사이트 `menicon.com/hubfs/English_IFU_RA1DAYPI002-1.pdf`와도 동일하다.
- PDF 메타데이터: `/Creator: Adobe InDesign CS5.5_J (7.5.3)` · `/CreationDate: D:20200116132341+09'00'`
- 문서 인쇄 식별 표기: `Date of Issue 2020-01` · `©2020, Menicon Co., Ltd.` · 문서번호 `RA1DAYPI002`
- **파일명 자체가 `English_IFU_...`다. 한국 사이트가 올린 IFU는 한국어 문서가 아니라 영문 문서다.**
- 이 문서는 **한국 허가·수입 정보를 담지 않는다.** 인쇄된 규제 주체는 다음뿐이다.

```
Manufacturer:  Menicon Co., Ltd.  3-21-19, Aoi, Naka-ku, Nagoya, 460-0006 Japan  www.menicon.com
Authorized Representative: Menicon Holdings B.V.  Waanderweg 6, 7812 HZ, Emmen, The Netherlands
```

  심볼 정의표에도 `EU Importer` 항목이 있다. **EU 시장용 문서**이며 한국 수입허가번호는 어디에도 없다.

원문 발췌 (값의 근거로 쓰는 문장):

```
Instructions for Use: Daily disposable contact lens – midafilcon A (56% water)/hioxifilcon A (57% water)
```

```
• hioxifilcon A (57% water) is a blue tinted soft hydrogel contact lens with 57% water content.
The sterile hioxifilcon A (57% water) is individually packaged in a flat pack and immersed in buffered saline solution.
```

```
• hioxifilcon A (57% water) is intended for single use daily wear only and correction of refractive ametropia (myopia, hyperopia and/or astigmatism) and/or presbyopia (excluding astigmatism) in non-aphakic disease-free eyes.
```

```
WEARING RESTRICTIONS
Remove and discard the contact lenses at the end of each day and replace with fresh lenses each morning. Reuse of the single-use contact lenses increase the risk of eye problems.
```

```
• Do not sleep while still wearing the contact lenses.
```

> **이 IFU는 한 문서가 두 재질을 함께 다룬다.** `midafilcon A (56% water)`는 `Miru 1day UpSide`(실리콘 하이드로겔),
> `hioxifilcon A (57% water)`가 본 검증 대상(플랫팩, 하이드로겔)이다.
> `docs/PRODUCT_CANDIDATES_20.md` 표 B 19번이 “18번과 IFU 파일명이 같으므로 내용이 제품별로 다른지 반드시 확인”이라고 적은 항목의 답:
> **파일이 같고 내용도 같다. 두 제품이 하나의 IFU를 공유한다.** 그래서 문장마다 재질명을 보고 갈라 읽어야 한다.
>
> 또한 이 PDF의 텍스트 레이어는 단어 사이가 **탭 문자(U+0009)**로 저장돼 있어 추출 문자열이
> `hioxifilcon\tA\t(57%\twater)\tis\t...` 형태로 나온다. 위 인용은 탭을 공백 하나로 옮겨 적었다.
> (2024년판 S3-2는 같은 문장이 정상 공백으로 저장돼 있어 교차 확인이 가능하다.)

### S3-2. 글로벌 IFU 라이브러리의 최신판 (RA1DAYPI007, 2024-06)

- 목록: https://www.menicon.com/professional/ifu → 태그 https://www.menicon.com/professional/ifu/tag/miru-1day-flat-pack
  → 상세 https://www.menicon.com/professional/ifu/miru-1day-flat-pack (게시일 `2025.07.17`)
- PDF: https://www.menicon.com/hubfs/00%20Global%20official%20website/Professional%20website/IFU/Daily/RA1DAYPI007-20240830MEN.pdf
- 조회일: 2026-08-28 · HTTP 200 · 1,053,940 bytes · 2쪽
- PDF 메타데이터 `/Title: RA1DAYPI007_20240910MEN.indd` · 문서 인쇄 표기 `Date of Issue 2024-06` · `©2024, Menicon Co., Ltd.` · 문서번호 `RA1DAYPI007`
- 같은 상세 페이지에 EU 22개 언어판(`_de` `_fr` `_it` `_nl` `_es` `_pl` …)이 함께 걸려 있다. **한국어판은 없다.**

본문은 S3-1과 같은 문장을 그대로 인쇄한다(텍스트 레이어는 정상 공백).

```
• hioxifilcon A (57% water) is a blue tinted soft hydrogel contact lens with 57% water content.
```

```
Remove and discard the contact lenses at the end of each day and replace with fresh lenses each morning. Reuse of the single-use contact lenses increase the risk of eye problems.
```

> **한국 사이트가 링크한 IFU는 2020년판(RA1DAYPI002)이고, 제조사 글로벌 라이브러리의 현행판은 2024년판(RA1DAYPI007)이다.**
> 두 판의 본문 값은 같지만 한국 사이트가 4년 전 판을 걸어두고 있다는 사실 자체를 기록한다.

### S3-3. IFU·사양에서 **찾지 못한** 것

| 항목 | 결과 |
| --- | --- |
| 한국어 IFU | **찾지 못함.** 한국 사이트의 IFU 링크는 영문 파일 하나뿐이고, 글로벌 IFU 라이브러리에도 한국어판이 없다 |
| IFU 내 `Dk` · `oxygen` | **0건** (두 판 모두) |
| IFU 내 `UV` | **0건** (두 판 모두) |
| IFU 내 `thickness` | **0건** (두 판 모두) |
| IFU 내 BC·직경 숫자 | **없음.** 심볼 정의표에 `DIA`·`BC` 기호 설명만 있고 값은 없다 |
| IFU 내 한국 허가번호 | **0건** |
| 메니콘코리아 전문가용 사이트의 별도 IFU 목록 | 없음. `menicon.co.kr`의 IFU 링크는 제품 페이지의 PDF 직링크뿐 |

---

## S4. Menicon 글로벌 전문가 페이지 — 지역 간 대조

### S4-1. 글로벌(Global) 전문가 제품 페이지

- URL: https://www.menicon.com/professional/products/disposable-lenses/miru-1day-flat-pack
- 조회일: 2026-08-28 · HTTP 200 · 268,921 bytes
- 페이지 하단 표기: `© 2026 Menicon. All rights reserved.` (알콘처럼 문서 관리번호를 인쇄하지 않는다)
- 접근 시 `Are you an Eye Care Professional?` 확인 팝업이 뜨는 전문가용 페이지다.

`Product details` 표 원문:

```
Characteristics
Material            hioxifilcon A (hydrogel)
Water content       57%
Handling tint       Light blue
Design              Bi-aspheric
Manufacturing       CENTRAFORMTM process

Lens parameters
Base curve          8.6 mm
Diameter            14.2 mm
Power range         +4.00D to +0.50D (-0.25D steps)-0.50D to -6.00D (-0.25D steps)-6.50D to -10.00D (-0.50D steps)
Lens marking        (image)

Wear schedule
Material            Daily replacement

Packaging
Available package   30 lens pack
```

**한국 페이지(S2-1·S2-2)와 숫자가 완전히 같다.** 라벨 오류(`Wear schedule > Material`)도 같다.

이 페이지에서 확인된 성능·마케팅 문구(`2x faster to apply`, `80% of wearers…`, `100% RECYCLED`,
`3x less bacterial contamination`, `87% rated … Excellent or Good` 등)는 전부
`Menicon data on file` 또는 사내 조사에 근거한 주장이라 **물성값으로 옮기지 않았다.**
다만 각주에 실린 두 편의 동료심사 문헌은 서지사항 그대로 기록한다.

```
Nomachi M, et al.: Evaluation of diminished microbial contamination in handling of a novel daily disposable Miru 1day Flat Pack contact lens, Eye Contact Lens. 39(3): 234-238, 2013.
Ghorbani-Mojarrad N et al.: Clinical Investigation of Miru 1day Flat Pack Toric Contact Lenses and Wearer Attitudes to Environmental Impact, Eye Contact Lens. 49(11): 475-482, 2023.
```

### S4-2. 각국 지역 사이트 — 같은 경로 전수 확인

같은 경로 `/professional/products/disposable-lenses/miru-1day-flat-pack`를 각 지역 도메인에서 조회했다(2026-08-28).

| 지역 | HTTP | Material | Water | Base curve | Diameter | Available package |
| --- | --- | --- | --- | --- | --- | --- |
| 글로벌 `menicon.com` | 200 (268,921 B) | `hioxifilcon A (hydrogel)` | `57%` | `8.6 mm` | `14.2 mm` | `30 lens pack` |
| **한국 `menicon.co.kr`** | 200 (250,499 B) | `hioxifilcon A(하이드로겔)` | `57%` | `8.6mm` | `14.2mm` | `렌즈 팩 30개` |
| 영국 `menicon.co.uk` | 200 (281,942 B) | `hioxifilcon A (hydrogel)` | `57%` | `8.6 mm` | `14.2 mm` | `30 lens pack` |
| 스페인 `menicon.es` | 200 (254,088 B) | `hioxifilcon A (hidrogel)` | `57%` | `8,6 mm` | `14,2 mm` | — |
| 싱가포르 `menicon.sg` | 200 (252,757 B) | `hioxifilcon A (hydrogel)` | `57%` | `8.6 mm` | `14.2 mm` | `30 lens pack` |
| 말레이시아 `menicon-my.com` | 200 (242,129 B) | `hioxifilcon A (hydrogel)` | `57%` | `8.6 mm` | `14.2 mm` | `30 lens pack` |
| **미국 `meniconamerica.com`** | 200 (266,881 B) | `hioxifilcon A (hydrogel)` | `57%` | **`8.4 mm, 8.6 mm`** | `14.2 mm` | **`30 and 90 lens pack`** |
| 독일·프랑스·이탈리아·네덜란드·벨기에·호주 | **404** | — | — | — | — | — |

- **재질·함수율·직경은 8개 지역에서 완전히 같다.**
- **BC는 미국만 두 개(`8.4 mm, 8.6 mm`)를 적는다.** 한국을 포함한 나머지 지역은 `8.6 mm` 하나다.
  포장도 미국만 `30 and 90 lens pack`이다. 지역별 공급 파라미터 차이로 보이며,
  **한국 값(`8.6 mm`)에 미국의 `8.4 mm`를 합치지 않았다.** 미국 원문은 출처 레코드로 남겼다.
- 싱가포르는 도수 범위에서 플러스 구간이 빠져 있다(`-0.50D to -10.00D`만). 지역별 공급 범위 차이다.

### S4-3. 이 표에 **없는** 것 — 그리고 그것이 왜 중요한가

글로벌·한국·영국·미국·싱가포르·말레이시아·스페인 **7개 지역 페이지 전부에서**
`Dk` · `oxygen` · `transmissib` · `UV` · `thickness` 문자열이 **0건**이다.

**Dk/t·중심두께·UV 행이 이 제품의 표에는 아예 없다.** 값이 비어 있는 게 아니라 **행 자체가 없다.**
같은 회사가 같은 표 서식으로 형제 제품에는 그 세 행을 인쇄한다 — S6에서 대조한다.

---

## S5. Menicon Trade Sales Aid PDF — 한국 사이트도 게시하는 사양 자료

- URL(글로벌): https://www.menicon.com/hubfs/00%20Global%20official%20website/Professional%20website/Dispo/Miru%20Flat%20Pack/J000750%201day%20Miru%20Flat%20Pack%20CONVENIENCE%20Trade%20Sales%20Aid%20-%20Dec%202024.pdf
- URL(한국): 같은 경로의 `www.menicon.co.kr` 판 — **md5 동일**(`5e734fcb044f573da18ddc427c15d30d`)
- 한국 전문가 페이지의 `다운로드 > Miru 1day Flat Pack 브로셔`가 이 파일을 가리킨다.
- 조회일: 2026-08-28 · HTTP 200 · 12,127,416 bytes · 11쪽
- PDF 메타데이터: `/Creator: Adobe InDesign 20.0 (Macintosh)` · `/CreationDate: D:20241216172144Z`
- 문서 인쇄 표기: 파일명의 `Dec 2024`. 본문에 별도 개정 번호는 없다.

`Product Specifications` 표 원문 (구면·난시용·다초점을 한 표에서 구분해 적는다):

```
Product Specifications
Characteristics
Material        sphere, toric & multifocal    hioxifilcon A
Water content   sphere, toric & multifocal    57%
Handling tint   sphere, toric & multifocal    Light blue
Design          sphere, toric & multifocal    Bi-aspheric
Manufacturing   sphere, toric & multifocal    CENTRAFORM™ process
Wear schedule
Modality        sphere, toric & multifocal    Daily Wear
Packaging
                6 lens trial pack, 30 lens packs
Parameters
Base curve      sphere & toric                8.6mm
                multifocal                    8.4mm
Diameter        sphere                        14.2mm
                toric                         14.5mm
                multifocal                    14.4mm
Power range     sphere                        +4.00D to +0.50D (-0.25D steps)
                                              -0.50D to -6.00D (-0.25D steps)
                                              -6.50D to -10.00D (-0.50D steps)
```

- **구면 값이 한국 페이지와 완전히 일치한다**(`hioxifilcon A` · `57%` · `8.6mm` · `14.2mm`).
- **난시용(14.5mm)·다초점(BC 8.4mm, 14.4mm)은 구면과 다르다.** 이 표가 구면/난시/다초점을 명시적으로 갈라 적기 때문에
  글로벌 자료의 값을 구면에 잘못 옮길 위험이 낮다. 한국 라인업에는 플랫팩 난시용·다초점이 없다(S2-4).
- **포장 `6 lens trial pack, 30 lens packs`가 MFDS 원장의 포장내수량 `6`·`30`(각 77건)과 일치한다.**
  한국 제품 페이지가 `렌즈 팩 30개`만 적는 것과 대비된다. 세 표기를 합치지 않고 병기한다.
- `Modality: Daily Wear`는 **착용방식**이고, 교체주기는 페이지 표의 `Daily replacement`와 IFU의
  `Remove and discard … at the end of each day`가 말한다. 이 문서에는 교체주기 행이 따로 없다.
- **이 문서에도 `Dk` · `oxygen` · `UV` · `centre thickness` 항목이 없다.**
  본문에 `thickness`가 나오는 곳은 난시용 디자인 설명(`minimal average thickness profile`)뿐이고 수치가 없다.
- 이 문서는 영업용 자료라 성능 주장이 많다(`3x less bacterial contamination`, `87% rated … Excellent or Good` 등).
  전부 `Menicon data on file` 근거이며 **물성값으로 옮기지 않았다.**
- 문서 말미에 `For further information contact your sales representative today on 01000 000000.`이라는
  **자리표시자 전화번호**가 그대로 인쇄돼 있다(영국 배포판으로 추정). 참고로만 기록한다.

---

## S6. ⚠ 결정적 대조 — 형제 제품 표에는 Dk/t·중심두께·UV 행이 있다

같은 제조사, 같은 사이트, 같은 표 서식이다. **행 구성만 제품마다 다르다.**

| 페이지 | Material | Water | **Dk/t @ -3.00D** | **Centre thickness** | **UV filter** |
| --- | --- | --- | --- | --- | --- |
| **Miru 1day Flat Pack** (글로벌, 한국 소비자, 한국 전문가, 영국, 미국, 스페인, 싱가포르, 말레이시아) | `hioxifilcon A (hydrogel)` | `57%` | **행 없음** | **행 없음** | **행 없음** |
| Miru 1day UpSide (글로벌) | `midafilcon A (silicone hydrogel)` | `56%` | `91 × 10-9 (cm/sec)･(mLO2/(mL × mmHg))` | `0.07 mm` | `Class 2 (84% UV-A / 96% UV-B)` |
| **Miru 1day UpSide (한국 소비자)** | `Midafilcon A(실리콘 하이드로겔)` | `56%` | `91 × 10-9 (cm/sec)･( mLO2/ (mL × mmHg))` | `0.07mm` | `클래스 2(UV-A 84% / UV-B 96%)` |
| **Miru 1day UpSide (한국 전문가)** | `Midafilcon A(실리콘 하이드로겔)` | `56%` | `91 × 10-9 (cm/sec)･( mLO2/ (mL × mmHg))` | `0.07 mm` | `클래스 2(UV-A 84% / UV-B 96%)` |
| Miru 1month Menicon (글로벌) | `asmofilcon A (silicone hydrogel)` | `40%` | `161 × 10-9 (cm/sec)･(mLO2/(mL × mmHg))` | `0.08 mm` | 행 없음 |
| **Miru 1month Menicon (한국 전문가)** | `Asmofilcon A(실리콘 하이드로겔)` | `40%` | `161 × 10-9 (cm/sec)･( mLO2/ (mL × mmHg))` | `0.8 mm` | 행 없음 |

(조회일 2026-08-28 · 각 200 · `g_miru-1day-upside.html` 256,779 B, `g_miru-1month-menicon.html` 222,330 B,
`kr_consumer_miru-1day-upside.html` 208,109 B)

**따라서 이 제품의 Dk/t·중심두께·UV 부재는 “한국 자료가 부실해서”가 아니다.**
메니콘코리아는 형제 제품에 대해서는 **한국어로 Dk/t·중심두께·UV 등급을 인쇄한다.**
플랫팩 표에서만 그 세 행을 빼 두었다.

> 참고로 한국 1month 페이지에는 두 가지 오류가 함께 보인다.
> 소비자 판은 `Asmofilcon A(하이드로겔)`, 전문가 판은 `Asmofilcon A(실리콘 하이드로겔)`로 재질 계열이 어긋나고,
> 전문가 판 중심두께는 `0.8 mm`(글로벌은 `0.08 mm`)로 자릿수가 어긋난다.
> 본 검증 대상이 아니므로 값을 옮기지 않았지만, **메니콘코리아 페이지의 값을 단독 근거로 쓸 때 주의가 필요하다는 증거**로 기록한다.

---

## S7. Menicon Japan — 같은 재질의 일본 승인 제품 (참고 대조, 값의 출처로 쓰지 않음)

- URL: https://www.menicon.co.jp/products/lense/1day/magic/
- 조회일: 2026-08-28 · HTTP 200 · 145,251 bytes
- 문서 제목 원문: `1day(ワンデー)コンタクトレンズ Magic | コンタクトレンズのメニコン`

이 페이지가 인쇄하는 **규제상 판매명과 승인번호**:

```
販売名：メニコン１ＤＡＹ　フラットパック ／承認番号：22100BZX01098000
```

```
※「Magic」は包装から派生した製品ブランドであり、コンタクトレンズの視覚的機能・効果ではありません。
```

(`メニコン１ＤＡＹ`은 전각 숫자, `ＤＡＹ`와 `フラットパック` 사이는 전각 공백 U+3000이다.)

소재·물성값 표 원문:

```
素材
構成モノマー   ヒドロキシエチルメタクリレート(HEMA)、グリセロールモノメタクリレート(GMA)
USAN          hioxifilconA

物性値
酸素透過係数   19.4×10-11 （cm2/sec）・(mLO2/(mL×mmHg))　ISO18369-4
含水率        57%　ISO18369-4
屈折率        1.409　ISO18369-4
視感透過率     94%以上　ISO18369-3

製作範囲（近視用）
ベースカーブ   8.6mm
直径          14.2mm
中心厚        0.10mm(-3.00D)
球面度数      -0.50D～-6.00D(0.25Dステップ)
             -6.50D～-10.00D(0.50Dステップ)
カラー        ライトブルー
UVカット機能   なし
マーク        なし
```

### S7-1. 이 페이지를 **값의 출처로 쓰지 않은 이유**

같은 제품일 가능성이 매우 높다. 근거는 다음 여섯 가지가 모두 일치한다는 점이다.

- 규제 판매명이 `メニコン1DAY フラットパック`(= Menicon 1DAY Flat Pack)
- USAN `hioxifilconA`
- 구성 모노머 `HEMA` + `GMA` — 한국 소비자 페이지의 소재 설명과 같은 두 물질
- 함수율 `57%`
- BC `8.6mm` · 직경 `14.2mm`
- 취급 색조 `ライトブルー`(라이트 블루)

그럼에도 **다음 세 가지 때문에 값의 1차 출처로 쓰지 않았다.**

1. **다른 나라의 별개 허가다.** 일본 승인번호 `22100BZX01098000`과 한국 허가번호 `수허 15-476 호`는 별개의 등록이다.
   **메니콘이 두 등록의 렌즈가 동일 사양이라고 밝힌 공식 문서를 확인하지 못했다.**
2. **도수 범위가 다르다.** 일본판은 근시용만(`-0.50D~-10.00D`)이고 플러스 도수가 없다.
   한국·글로벌 플랫팩은 `+4.00D ~ +0.50D`를 포함한다. **공급 사양이 같지 않다는 직접 증거다.**
3. **`酸素透過係数`는 Dk(산소 투과성)이지 Dk/t(산소 전달률)가 아니다.**
   같은 사이트의 다른 제품 페이지(`메니콘1DAY`)는 `酸素透過率（Dk/t）` 26.3처럼 **Dk/t를 따로 표기**한다.
   즉 메니콘 일본은 두 물리량을 명확히 구분해 적으며, 플랫팩 계열에는 **Dk만** 적었다.
   **Dk를 중심두께로 나눠 Dk/t를 만들지 않았다.**

따라서 `19.4×10-11`은 `dkt` 필드의 **값이 아니라 출처 레코드에만** 남겼고,
`0.10mm(-3.00D)`와 `UVカット機能 なし`도 각각 `thickness`·`uv`의 참고 레코드로만 남겼다.

### S7-2. 일본 첨부문서 PDF — 인용 불가

- URL: https://www.menicon.co.jp/whats/iryou/img/pdf/magic.pdf
- 조회일: 2026-08-28 · HTTP 200 · 298,136 bytes · 2쪽 · `/Title: MK1DAYPI011-210201TOR_トンボなし`
- **텍스트 레이어가 서브셋 폰트로 저장돼 있어 `pypdf` 추출 결과가 전부 깨진 문자(모지바케)로 나온다.**
  `メニコン1DAY フラットパック`에 해당하는 조각은 보이지만 **어떤 문자열도 원문으로 인용할 수 없다.**
- 따라서 이 PDF는 **출처로 사용하지 않았다.** 일본 값의 근거는 S7의 HTML 페이지뿐이다.

---

## 값 대조표 — 같은 값을 여러 공식 자료가 말하는지

| 항목 | 한국 소비자 (S2-1) | 한국 전문가 (S2-2) | 글로벌 전문가 (S4-1) | 영문 IFU (S3) | Trade Sales Aid (S5) | 미국 지역 (S4-2) | 일본 동계열 (S7) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 재질 | `hioxifilcon A(…HEMA… GMA…로 구성됨)` | `hioxifilcon A(하이드로겔)` | `hioxifilcon A (hydrogel)` | `hioxifilcon A (57% water) is a blue tinted soft hydrogel contact lens` | `hioxifilcon A` | `hioxifilcon A (hydrogel)` | `hioxifilconA` |
| 함수율 | `57%` | `57%` | `57%` | `57% water content` | `57%` | `57%` | `57%　ISO18369-4` |
| BC | `8.6mm` | `8.6mm` | `8.6 mm` | 없음 | `8.6mm` (sphere) | **`8.4 mm, 8.6 mm`** | `8.6mm` |
| DIA | `14.2mm` | `14.2mm` | `14.2 mm` | 없음 | `14.2mm` (sphere) | `14.2 mm` | `14.2mm` |
| **Dk/t** | **없음** | **없음** | **없음(행 자체 없음)** | **없음** | **없음** | **없음** | **없음** (대신 Dk `19.4×10-11`) |
| **중심두께** | **없음** | **없음** | **없음(행 자체 없음)** | **없음** | **없음** | **없음** | `0.10mm(-3.00D)` |
| 교체주기 | `자료 / 매일 교체` | `자료 / 매일 교체` | `Material / Daily replacement` | `Remove and discard … at the end of each day … replace with fresh lenses each morning` | `Modality / Daily Wear`(착용방식) | `Material / Daily replacement` | (1DAY 카테고리) |
| **UV** | **없음** | **없음** | **없음(행 자체 없음)** | **없음** | **없음** | **없음** | `UVカット機能 なし` |
| 포장 | `렌즈 팩 30개` | `렌즈 팩 30개` | `30 lens pack` | 없음 | `6 lens trial pack, 30 lens packs` | `30 and 90 lens pack` | — |
| 허가번호 | **없음** | **없음** | 해당 없음 | 해당 없음 | 해당 없음 | 해당 없음 | `22100BZX01098000`(일본 승인) |

허가번호의 유일한 근거는 MFDS UDI(S1)다.

### 공식 출처끼리 어긋나는 지점

**(1) BC — 미국만 두 개**
`8.4 mm, 8.6 mm`(미국) vs `8.6 mm`(한국·글로벌·영국·스페인·싱가포르·말레이시아·일본·Trade Sales Aid).
**한국 값에 미국 값을 합치지 않았다.** 표시값은 `8.6 mm`, 미국 원문은 출처 레코드로 병기.

**(2) 포장 — 세 갈래**
`렌즈 팩 30개`(한국 페이지) / `6 lens trial pack, 30 lens packs`(Trade Sales Aid, 한국 사이트도 게시) /
`30 and 90 lens pack`(미국). **MFDS 원장은 `6`과 `30`이다.** 포장은 9개 필드에 없으므로 값으로 옮기지 않고 기록만 한다.

**(3) 라벨이 값과 어긋난 곳**
교체주기 행의 라벨이 한국판 `자료`, 영문판 `Material`이다. 값은 `매일 교체`/`Daily replacement`가 맞다.
**라벨 오류를 근거로 값을 의심하지는 않았고, 교체주기의 1차 근거는 IFU 문장으로 두었다.**

**(4) 한 사이트 안의 표기 흔들림**
`매니콘`(회사 소개 본문·MFDS) vs `메니콘`(페이지 제목),
`Miru 1day Menicon Flat Pack`(제품 목록) vs `Miru 1day Flat Pack`(제품 페이지 상단),
`수분 함량`(소비자) vs `함수율`(전문가). 값이 아니라 표기의 문제이며 원문 그대로 기록했다.

---

## 확인하지 못한 것

1. **Dk/t.** 한국·글로벌·영국·미국·스페인·싱가포르·말레이시아 7개 지역 페이지, 영문 IFU 2판,
   Trade Sales Aid 어디에도 없다. 같은 표 서식의 형제 제품에는 있다(S6).
   일본 동계열 제품 페이지가 적는 `19.4×10-11`은 **Dk이지 Dk/t가 아니며**, 환산하지 않았다.
2. **중심두께.** 위와 같다. 일본 동계열 제품은 `0.10mm(-3.00D)`를 적지만 별개 등록·다른 도수 범위다.
3. **UV.** 위와 같다. 일본 동계열 제품은 `UVカット機能 なし`를 적지만,
   **한국 유통 제품에 대해 UV 차단이 없다고 단정할 근거로 쓰지 않았다.**
4. **한국어 IFU.** 존재를 확인하지 못했다. 한국 사이트가 게시한 IFU는 EU 시장용 영문 문서다(S3-1).
5. **MFDS 품목허가 상세 원장(원재료·모양 및 구조).** UDI 표준코드 조회 외의 상세 화면 경로를 이번에도 찾지 못했다.
   토탈30 검증의 미해결 항목 5와 같다. 재질명·BC·DIA의 한국 규제 근거를 얻을 수 있는 경로다.
6. **허가 154건의 내부 구성.** 포장내수량 `6`·`30`이 각 77건인데, 한국 페이지가 공개한 구면 도수 범위
   (+4.00~+0.50 15단계 + -0.50~-6.00 23단계 + -6.50~-10.00 8단계 = 46)와 맞지 않는다.
   허가가 공개 도수 범위보다 넓은 변형을 포함할 수 있으나 **원장만으로는 분해할 수 없다.**
7. **한국판과 글로벌판 렌즈의 동일성 진술.** 메니콘이 “한국 유통 제품의 사양이 글로벌 사양과 같다”고 밝힌
   공식 문장은 확인하지 못했다. 연결 근거는 (a) 한국 공식 페이지가 같은 숫자를 한국어로 직접 인쇄한다는 점,
   (b) MFDS 원장 모델명 `1day  Flat Pack`이 제품명과 일치한다는 점 두 가지다.
   다만 이 제품은 **한국 페이지가 수치를 직접 인쇄하므로 다른 제품들보다 연결이 강하다.**
8. **메니콘 프리미오(PremiO) 2주 제품.** MFDS 등록은 확인했다(`수허 15-319 호`, S1-4).
   한국 공식 제품 페이지는 이번에도 확인하지 못했다(한국 사이트 일회용 렌즈 목록에 없음, S2-4).
