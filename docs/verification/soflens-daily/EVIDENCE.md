# 검증 근거 — 소프렌 데일리 근시용 (Bausch + Lomb SofLens® daily disposable)

검증일: 2026-08-28
대상: 근시용 투명 구면, 1일 교체 (난시용 `소프렌 데일리 난시용` / `Toric Daily Disposable`은 제외)
제조사: Bausch + Lomb · 한국 유통(허가 원장 등록 법인): **(주)바슈롬코리아**
재질: hilafilcon B (한국 공식 페이지 표기는 `Hilafilcon B`)

이 문서는 실제로 가져온 공식 자료의 **원문**만 담는다. 값의 해석·정규화·환산은 하지 않는다.

---

## S1. MFDS 의료기기 UDI 표준코드 조회 — 한국 유통·허가 식별

- URL: https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do
- 조회일: 2026-08-28
- 방법: 조회 화면과 동일한 엔드포인트 `POST /msismext/udi/uif/selectStddCdLstAjax.do`(같은 세션 쿠키)에
  화면 폼(`baseForm`)이 직렬화하는 파라미터를 그대로 보내고 JSON 응답(`dataList`)을 전수 집계했다.
- 공통 조회 조건: `dateCancelChk=N`(통합정보등록일자 제외), `selRcprslryTrgtYn=`(전체), `sDate=` / `eDate=` 비움

### S1-0. 조회 함정 — 한글 파라미터는 반드시 UTF-8로 인코딩해야 한다

`curl --data-urlencode "bplcNm=바슈롬"`을 Git Bash에서 그대로 쓰면 **응답이 `{"dataList": []}`(0건)** 이 된다.
셸이 인자를 UTF-8이 아닌 코드페이지로 넘기기 때문이며, **오류가 아니라 정상 200 응답의 0건**으로 돌아오므로
`한국 유통 없음`으로 오판하기 쉽다.
Python `urllib.parse.urlencode(..., encoding='utf-8')`로 본문을 만들어 `--data-binary @file`로 보내면 정상 조회된다.
또한 `dateCancelChk`의 값은 `on`이 아니라 **`N`**이다(`<input name="dateCancelChk" value="N" ... checked>`). `on`으로 보내도 0건이 된다.

### S1-1. 업체명 확정 — 조회 조건별 건수

| # | 조회 조건 | 조회 건수(totCnt) |
| --- | --- | --- |
| Q1 | `bplcNm=바슈롬` | **30,826** |
| Q2 | `bplcNm=(주)바슈롬코리아` | 30,826 |
| Q3 | `bplcNm=바슈롬코리아(주)` | **0** |

원장에 인쇄된 업체명 원문은 **`(주)바슈롬코리아`**(업체구분 `수입업`)다.
바이오트루 원데이 검증(2026-08-28)의 결과와 동일하다.

### S1-2. 모델명 조회 — `SofLens`로는 이 제품이 나오지 않는다 (핵심 함정)

| # | 조회 조건 (`bplcNm=바슈롬` 고정) | 건수 |
| --- | --- | --- |
| Q4 | `modelnm=SofLens` | **208** |
| Q5 | `modelnm=Soflens` | **0** |
| Q6 | `modelnm=soflens` | **0** |
| Q7 | `modelnm=SOFLENS` | **0** |
| Q8 | `modelnm=SofLens daily disposable` | **0** |
| Q9 | `modelnm=SofLens Daily Disposable` | **0** |
| Q10 | `modelnm=SofLens daily` / `SofLens Daily` | 각 **0** |
| Q11 | `modelnm=SofLens® daily disposable`(® 포함) | **0** |
| Q12 | `modelnm=hilafilcon` / `Hilafilcon` / `hilafilcon B` / `HILAFILCON` | 각 **0** |
| Q13 | `modelnm=소프렌`(한글) | **0** |
| Q14 | `modelnm=Daily` | **573** |
| Q15 | `modelnm=daily` / `DAILY` | 각 **0** |
| Q16 | `modelnm=Disposable` | 573 |
| Q17 | `modelnm=ZZZZZ`(음성 대조) | **0** |

- **모델명 조회는 대소문자를 구분한다.** `Soflens`·`soflens`·`SOFLENS`·`daily`는 전부 0건이다.
- **`SofLens`(208건)에는 이 제품이 없다.** 208건은 전부 다른 제품이다(S1-3).
- **재질명 `hilafilcon`은 원장 모델명에 없다.**
  바이오트루 원데이는 같은 UDI-DI에 `nesofilcon A`가 모델명으로 함께 등록돼 있었지만, 이 제품은 그렇지 않다.
  **같은 제조사 안에서도 등록 방식이 다르다.**

### S1-3. Q4(`modelnm=SofLens`, 208건) 전수 집계 — 전부 다른 제품이다

208행을 모두 가져와 집계한 결과 distinct **2건**(distinct UDI-DI 208):

```
(주)바슈롬코리아 | 수입업 | 연속착용 소프트 콘택트렌즈 | 3 | 수허 01-919 호 | SofLens 38(polymacon) | 옵티마 FW, 소프렌 38 ## 156
(주)바슈롬코리아 | 수입업 | 매일착용소프트콘택트렌즈   | 2 | 수허 06-1131 호 | SofLens 59            | 소프렌 59               ## 52
```

형식: `업체명 | 업체구분 | 소분류 품목 명칭 | 등급 | 품목허가번호 | 모델명 | 업체 제품 명칭 ## 행 수`
포장내수량은 208행 모두 `6`.

**`SofLens 38` · `SofLens 59`는 본 검증 대상이 아니다.** 소프렌 38은 등급 3 `연속착용 소프트 콘택트렌즈`,
소프렌 59는 정기교체 제품이다. 이름이 비슷하다는 이유로 이 번호를 데일리에 붙이면 안 된다.

### S1-4. Q14(`modelnm=Daily`, 573건) 전수 집계 — 여기에 대상 제품이 있다

```
(주)바슈롬코리아 | 수입업 | 매일착용 소프트 콘택트렌즈 | 2 | 수허 11-407 호 | Toric Daily Disposable | 소프렌 데일리 난시용 ## 372
(주)바슈롬코리아 | 수입업 | 매일착용 소프트 콘택트렌즈 | 2 | 수허 09-975 호 | Daily Disposable       | 소프렌 데일리, 수분쿠션 렌즈, 저자극 렌즈, 트루핏 원데이, Truefit ## 201
```

- 원장에 등록된 **모델명은 `Daily Disposable`**이다. 브랜드명 `SofLens`가 모델명에 들어 있지 않다.
  한국어 `업체 제품 명칭`의 **`소프렌 데일리`**가 브랜드를 알려주는 유일한 항목이다.
- 구면과 난시용은 **허가번호가 다르다**: 구면 `수허 09-975 호`, 난시용 `수허 11-407 호`.
- 소분류 품목 명칭이 **`매일착용 소프트 콘택트렌즈`(공백 있음)**이다.
  바이오트루 원데이·소프렌 59의 **`매일착용소프트콘택트렌즈`(공백 없음)**와 문자열이 다르다.
  같은 제조사 원장 안에서 두 표기가 공존한다(`bplcNm=바슈롬` 기준 공백 있음 5,913건 / 공백 없음 16,265건).

### S1-5. 허가번호 단독 조회 `itemPermitNo=수허 09-975 호`

- 총 **201건**, distinct UDI-DI **201** (바이오트루와 달리 한 UDI-DI에 모델명이 하나뿐이다)
- distinct (업체명 | 업체구분 | 소분류 | 등급 | 허가번호 | 모델명 | 업체 제품 명칭) = **1건**
- 포장내수량 분포: `30` 87건 · `90` 57건 · `10` 57건
- 코드체계는 201건 모두 `GS1`, 요양급여 대상 여부 201건 모두 `N`

응답 원문(첫 행):

```
prdlNm=매일착용 소프트 콘택트렌즈 | grade=2 | prdtNmCn=소프렌 데일리, 수분쿠션 렌즈, 저자극 렌즈, 트루핏 원데이, Truefit
| bplcNm=(주)바슈롬코리아 | itemPermitNo=수허 09-975 호 | modelnm=Daily Disposable
| udidicd=00785811517144 | rcprslryTrgtYn=N | rcper=null | mummPunitQy=30
```

**허가번호 원문: `수허 09-975 호`** (앞 `수허`, 공백, `09-975`, 공백, `호`)
`itemPermitNo=수허09-975 호`(공백 없음)로도 같은 201건이 나온다. 허가번호 조회는 공백을 무시한다.
(모델명 조회는 대소문자를 구분하지만 허가번호 조회는 공백에 관대하다 — 필드마다 규칙이 다르다.)

**주의 — 이 허가번호는 소프렌 데일리 전용이 아니다.**
`업체 제품 명칭` 원문에 `트루핏 원데이, Truefit`이 함께 들어 있다. 하나의 품목허가에 두 개 이상의 판매 브랜드가 묶여 있다.
`수허 09-975 호`를 조회하면 소프렌 데일리 외의 제품 UDI-DI도 함께 나온다는 뜻이며,
원장만으로 소프렌 데일리 단독 품목을 분리할 수는 없다.

### S1-6. `(주)바슈롬코리아` 원장 전수 대조

`bplcNm=바슈롬` 30,826행을 500건 × 62페이지로 모두 가져와 집계했다(소요 246초).

- 업체명은 30,826행 전부 `(주)바슈롬코리아` 단일값
- distinct UDI-DI **22,779** (30,826행 > 22,779개 → 일부 UDI-DI에 모델명이 2개 등록돼 있다)
- distinct (소분류 | 등급 | 허가번호 | 모델명 | 업체 제품 명칭) = **24건**

`업체 제품 명칭`에 `소프렌`이 들어간 레코드는 아래가 전부다.

```
연속착용 소프트 콘택트렌즈 | 3 | 수허 01-919 호  | SofLens 38(polymacon)  | 옵티마 FW, 소프렌 38                                              ## 156
연속착용 소프트 콘택트렌즈 | 3 | 수허 01-919 호  | Optima FW(polymacon)   | 옵티마 FW, 소프렌 38                                              ## 156
매일착용소프트콘택트렌즈   | 2 | 수허 06-1131 호 | SofLens 59             | 소프렌 59                                                          ## 52
매일착용 소프트 콘택트렌즈 | 2 | 수허 09-975 호  | Daily Disposable       | 소프렌 데일리, 수분쿠션 렌즈, 저자극 렌즈, 트루핏 원데이, Truefit ## 201
매일착용 소프트 콘택트렌즈 | 2 | 수허 11-407 호  | Toric Daily Disposable | 소프렌 데일리 난시용                                               ## 372
```

`수허 01-919 호`는 같은 UDI-DI에 모델명이 `SofLens 38(polymacon)`과 `Optima FW(polymacon)` 두 개로 등록돼 있어 156행씩 두 번 나온다.
반면 `수허 09-975 호`의 distinct 모델명은 **`Daily Disposable` 하나뿐**이다(201행 = UDI-DI 201개).

**`소프렌 데일리` 구면에 연결되는 허가번호는 `수허 09-975 호` 하나뿐이다.**

---

## S2. 한국 공식 브랜드 페이지 — 소프렌 데일리 근시용 (핵심 한국 근거)

- URL: https://www.bauschlomb.co.kr/cleardaily/?idx=102
- 조회일: 2026-08-28 · HTTP 200 · 420,289 bytes
- 방법: `curl -L`(브라우저 UA)로 HTML 저장 후 태그 제거 + 상세 이미지 직접 내려받아 판독
- `<title>` 원문: `소프렌 데일리 근시용 : 바슈롬`

### S2-1. 페이지 텍스트에서 확인된 항목 (원문 발췌)

```
소프렌 데일리 근시용
하루용 투명렌즈/근시용
상세정보
```

```
본 제품은 의료기기이며 , 사용상의 주의사항과 사용방법을 잘 읽고 사용하십시오. 바슈롬 렌즈 세척액은 의약외품입니다. 사용상의 주의사항과 사용방법을 잘 읽고 사용하십시오.
바슈롬은 의료기사 등에 관한 법률에 따라 온라인 판매가 이루어지지 않습니다.
사업자 등록 번호 : 214-81-39122 ㅣ 대표자명 : 김형준  l  회사주소 : 서울특별시 강남구 봉은사로86길 6, 6층(삼성동, 빌딩 레베쌍트)
의료기기판매신고번호 : 제 2009-3220033-00028호
상호명: 바슈롬코리아
```

한국 제품 목록 https://www.bauschlomb.co.kr/cleardaily (2026-08-28, HTTP 200, 445,911 bytes)의
`데일리 투명렌즈` 목록 7건에도 등재돼 있다. 목록의 제품 idx와 이름 원문:

```
125 울트라 원데이 멀티포컬 / 98 울트라 원데이 / 102 소프렌 데일리 근시용 / 103 소프렌 데일리 난시용
99 바이오트루 원데이 근시용 / 100 바이오트루 원데이 난시용 / 101 바이오트루 원데이 멀티포컬
```

`의료기기판매신고번호 : 제 2009-3220033-00028호`는 **판매업 신고번호**다. 품목 허가번호가 아니므로 허가 필드에 넣지 않는다.

### S2-2. 페이지 **HTML 텍스트**에 없는 것

| 검색어 | 건수 |
| --- | --- |
| `함수율` / `수분` / `베이스` / `커브` / `직경` / `산소` | 각 0 |
| `Dk` / `자외선` / `UV`(본문) | 각 0 |
| `수허` / `허가`(허가번호 표기) | 각 0 |
| `hilafilcon` / `힐라필콘` / `SofLens` | 각 0 |
| `8.6` / `14.2` / `59%` | 각 0 |

(`UV` 문자열 3건은 페이지가 삽입한 base64 설정 블롭 내부의 우연한 일치이며 본문 텍스트가 아니다.)

### S2-3. `상세정보` 이미지 — **한국 공식 사양표가 이미지 안에 있다**

`상세정보` 탭의 내용은 `<template id="prodDetailPC">` 안의 **이미지 1장 전용**이다(대체 텍스트 없음).

- 이미지 URL: `https://cdn.imweb.me/upload/S2023010385e2991530ec3/effb4f4341da8.jpg`
- 2026-08-28 내려받음 · HTTP 200 · 708,362 bytes · 1020 × 2180 px · md5 `81bfe603ca85c38db27475fdb42e3ec1`
- 같은 사이트의 난시용 페이지(`?idx=103`)는 다른 이미지(`707a68d1953c7.jpg`)를 쓴다. 이 이미지는 근시용 전용이다.

**이 이미지는 텍스트 레이어가 없다. 아래 값은 이미지를 확대해 육안으로 판독한 것이며, OCR·추정이 아니라
인쇄된 글자를 그대로 옮긴 것이다. 검증자가 다시 확인하려면 위 URL을 열어 하단 표를 보면 된다.**

이미지 하단 `제품 상세 안내` 표 원문:

```
제품 상세 안내
재질        Hilafilcon B                        함수율     59%
베이스 커브  8.6mm                               직경       14.2mm
도수범위    -0.25D ~ -6.50D (0.25D 단위)         착용 주기   1일 교체용
            -7.00D ~ -9.00D (0.50D 단위)
포장 단위    30개입(1팩) / 90개입(1팩)
```

같은 이미지의 제품 사진 아래 고지 원문:

```
매일착용소프트콘택트렌즈 / 무수정체안 및 질병이 없는 수정체안의 굴절이상(근시)의 교정을 위해 사용하는 일회용 단일초점렌즈
이 제품은 '의료기기'이며, '사용상의 주의사항'과 '사용방법'을 잘 읽고 사용하십시오.
의료기기 광고심의필 : 62026-I10-12-1415 (유효기간 29.04.30) / BLK-MKT-SDD-260423
```

같은 이미지의 제품 포장 사진에 인쇄된 문자열:

```
Bausch & Lomb  SofLens®  daily disposable  (hilafilcon B)  with Aspheric Optics
30 Soft Contact Lenses / 90 Soft Contact Lenses
```

- **`의료기기 광고심의필 : 62026-I10-12-1415`는 광고 사전심의 번호이지 품목 허가번호가 아니다.** 허가 필드에 넣지 않는다.
- 이 표에는 **Dk·Dk/t·중심두께·UV 항목이 없다.**
- 포장 사진의 재질 표기는 `hilafilcon B`(소문자 h), 표의 재질 표기는 `Hilafilcon B`(대문자 H)로 **같은 이미지 안에서 다르다.**

---

## S3. Bausch + Lomb 미국 ECP 사이트 — 이 제품의 페이지가 없다

- 제품 페이지 시도: https://ecp.bauschcontactlenses.com/products/soflens-daily-disposable/ → **HTTP 404** (2026-08-28)
- 파라미터 일람: https://ecp.bauschcontactlenses.com/products/parameters/ (2026-08-28 · HTTP 200 · 78,196 bytes)
  - 페이지 제목 원문: `BAUSCH + LOMB CONTACT LENS PARAMETERS`
  - 안내 원문: `Find lens parameters for Bausch + Lomb brands in one place, including INFUSE®, Biotrue® ONEday, and ULTRA®.`
  - 수록 제품은 **INFUSE® / Biotrue® ONEday / ULTRA® 계열뿐이며 `SofLens`·`hilafilcon` 문자열은 0건**이다.

→ 바이오트루 원데이 검증에서 숫자 근거로 썼던 **ECP 웹 파라미터 표와 Contact Lens Parameters PDF가 이 제품에는 존재하지 않는다.**
글로벌 숫자 근거는 아래 Package Insert / Fitting Guide 단독이다.

---

## S4. Package Insert / Fitting Guide (글로벌 숫자 근거)

- URL: https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/soflens-daily-disposable-pifg.pdf
- 조회일: 2026-08-28 · HTTP 200 · 103,839 bytes · 3페이지 · md5 `0d09f6145f4a929cce3b199b055a2639`
- 방법: `curl -L` 다운로드 후 `pypdf`로 텍스트 추출 — 텍스트 레이어 정상
- 문서 식별 표기: `PACKAGE INSERT / FITTING GUIDE` · `SL7 494` · `8046303`
- 유효 시점 원문: `It is effective as of February 2015 and supersedes all prior fitting guides for the product described.`

> URL 함정: `soflens-daily-disposable-pi.pdf`·`soflens-dd-pifg.pdf`는 `404.html`로 리다이렉트되지만
> **HTTP 상태는 200으로 돌아온다.** 상태코드가 아니라 `content_type`(`text/html` vs `application/pdf`)과
> 바이트 수(831 bytes)로 판별해야 한다.
> 같은 디렉터리의 `soflens-59-pifg.pdf`는 **소프렌 59**의 문서다. 파일명이 비슷하니 혼동하면 안 된다.

### S4-1. DESCRIPTION — 재질·함수율·산소

```
The Bausch + Lomb SofLens daily disposable (hilafilcon B) Visibility Tinted Contact Lens is a soft hydrophilic contact lens which is available as a spherical lens. The lens is made from the hilafilcon B material, a hydrophilic copolymer of 2-hydroxyethyl methacrylate and N-vinyl pyrrolidone, and is 59% water by weight when immersed in a sterile saline solution. This lens is tinted blue with Reactive Blue Dye 246.
The physical / optical properties of the lens are:
Specific Gravity: 1.119
Refractive Index: 1.4036
Light Transmittance: C.I.E. Y value - approximately 95%
Water Content: 59%
Oxygen Permeability:  22 x 10–11[cm3O2(STP) x cm]/(sec x cm2 x mmHg) @35˚ C (Polarographic Method)
The Bausch + Lomb SofLens daily disposable (hilafilcon B) Visibility Tinted Contact Lens is to be prescribed for single-use disposable wear.
```

pypdf 추출 문자열에는 자간 때문에 `W ater Content`, `Light T ransmittance`, `T inted`처럼 공백이 끼어든다.
**인쇄된 문자열은 `Water Content`, `Light Transmittance`, `Tinted`다.**
`10–11`의 `–11`은 인쇄물에서 위첨자이고, `cm3`·`cm2`도 인쇄물에서는 위첨자다.

**산소 항목의 라벨 원문은 `Oxygen Permeability:`이며 `(Dk)`도 `(Dk/t)`도 괄호로 붙어 있지 않다.**
문서 전체에서 `Dk` 문자열은 **0건**이다. 즉 이 제품에는 **Dk/t 표기 자체가 없다.**

### S4-2. LENS PARAMETERS AVAILABLE

```
The Bausch + Lomb SofLens daily disposable (hilafilcon B) Visibility Tinted Contact Lens is a hemispherical shell of the following dimensions:
Diameter: 14.2mm
Center Thickness: 0.05mm to 0.75mm (varies with power)
Base Curve: 8.6mm
Powers (Spherical): +20.00D to -20.00D
```

바이오트루 원데이 PI/FG처럼 난시용 값을 괄호로 병기하는 줄이 **없다.** 이 문서는 구면 전용이다.

### S4-3. INDICATIONS

```
The Bausch + Lomb SofLens daily disposable (hilafilcon B) Visibility Tinted Contact Lens is indicated for the daily wear correction of refractive ametropia (myopia and hyperopia) in aphakic and not-aphakic persons with non-diseased eyes, exhibiting astigmatism of 2.00 diopters or less, that does not interfere with visual acuity. The lens may be prescribed in spherical powers ranging from +20.00D to -20.00D.
The lens is to be prescribed for single-use disposable wear, and is to be discarded after each removal.
```

### S4-4. WEARING SCHEDULE

```
WEARING SCHEDULE
The wearing and replacement schedules should be determined by the eye care professional. Regular checkups, as determined by the eye care professional, are extremely important.
Daily Wear
There may be a tendency for the daily wear patient to over wear the lenses initially. ... The lens is to be prescribed for single-use disposable wear, and is to be discarded after each removal.
```

### S4-5. 이 문서에 **없는** 것 (전문 검색으로 확인)

- `UV` **0건** · `ultraviolet` **0건** · `Ultraviolet` **0건** · `UV-absorbing` **0건**
- `transmittance`는 `Light Transmittance: C.I.E. Y value` 1건뿐이고 **자외선 투과율 문장이 없다.**
- `absorb`는 형광염료 흡착 주의 문장(`The lenses absorb this dye and become discolored.`) 2건뿐이다.
- `Dk` **0건**
- → **바이오트루 원데이 PI/FG의 DESCRIPTION에 있던 `A benzotriazole UV-absorbing monomer …` 문단과
  `The transmittance characteristics are less than 5% …` 문장이 이 문서에는 통째로 없다.**
  이 제품의 DESCRIPTION은 착색 안료(`Reactive Blue Dye 246`)만 언급하고 자외선 흡수제를 언급하지 않는다.

---

## S5. Patient Information Booklet (환자용)

- URL: https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/soflens-daily-disposable-pib.pdf
- 조회일: 2026-08-28 · HTTP 200 · 636,248 bytes · 12페이지 · md5 `332a7a29dbc42cbc0efa3d6c157c7157`
- 문서 식별 표기: `PATIENT INFORMATION BOOKLET` · `SL7 495` · `8046405`
- 마지막 쪽 원문: `© Bausch & Lomb Incorporated. ®/TM are trademarks of Bausch & Lomb Incorporated or its affiliates. All rights reserved worldwide. Printed in U.S.A. Effective as of February 2015`

### 원문 발췌 — 대상 제품 식별과 교체

```
The instructions in this booklet apply to the Bausch + Lomb SofLens® daily disposable (hilafilcon B) Visibility Tinted Contact Lenses.
```

```
Your Bausch + Lomb SofLens® daily disposable (hilafilcon B) Visibility Tinted Contact Lenses have been prescribed for single-use disposable wear, and should be discarded each time lenses are removed from your eyes.
```

```
The Bausch + Lomb SofLens® daily disposable (hilafilcon B) Visibility Tinted Contact Lens is indicated for the daily wear correction of refractive ametropia (myopia and hyperopia) in aphakic and not-aphakic persons with non-diseased eyes, exhibiting astigmatism of 2.00 diopters or less, that does not interfere with visual acuity. The lens may be prescribed in spherical powers ranging from +20.00D to -20.00D.
The lens has been prescribed for single-use disposable wear, and is to be discarded after each removal.
```

### 이 PDF에 **없는** 것 (전문 검색으로 확인)

- `Water` 0건 · `59` 0건 · `Dk` 0건 · `thickness` 0건 · `UV` 0건 · `ultraviolet` 0건
- `Base Curve`·`Diameter`는 **기호 설명표(Symbol Reference Guide)**의 라벨로만 각 1건 등장하고 수치가 없다.
- → **환자용 소책자에는 물성 수치가 전혀 없다.** 수치 근거로 쓸 수 없다.

**표기 차이:** PI/FG의 DESCRIPTION 본문은 `SofLens daily disposable`(® 없음)로,
PIB 본문과 PI/FG의 IMPORTANT 문단은 `SofLens® daily disposable`(® 있음)로 적는다. 같은 제품이다.

---

## S6. 접근하지 못했거나 자료가 없는 한국 경로

| 대상 | 결과 |
| --- | --- |
| https://www.bausch.co.kr | **TLS 인증서 만료**로 접속 불가 (`curl: (35) schannel: … SEC_E_CERT_EXPIRED (0x80090328)`). 출처로 사용하지 않는다 |
| https://www.bausch.kr/ko-kr/our-products/contact-lenses/ | HTTP 200 · 100,947 bytes. `소프렌` 0건 · `SofLens` 0건 · `hilafilcon` 0건 · `함수율` 0건. 제품 목록도 수치도 없다 |
| https://blecp.bausch.co.kr/product/20 (안경원 주문 사이트 `소프렌데일리 근시` 제품 정보) | HTTP 200이지만 `https://blecp.bausch.co.kr/web/login?redirect=%2Fproduct%2F20%3F`로 **로그인 리다이렉트**. 안경원 계정이 없어 내용 확인 불가. 푸터 법인 표기는 `㈜바슈롬코리아` |
| 한국어 IFU / 사양서 PDF | `?idx=102` 페이지와 `cleardaily` 목록 HTML의 `.pdf` 링크 **0건**. 이번 조사에서 찾지 못했다 |

---

## S7. 출처 간 값 대조

### S7-1. 한국 공식 이미지 표와 미국 PI/FG가 **일치**하는 값

| 항목 | 한국 브랜드 페이지 상세 이미지 | 미국 PI/FG (SL7 494) |
| --- | --- | --- |
| 재질 | `Hilafilcon B` | `hilafilcon B` |
| 함수율 | `59%` | `Water Content: 59%` |
| 베이스 커브 | `8.6mm` | `Base Curve: 8.6mm` |
| 직경 | `14.2mm` | `Diameter: 14.2mm` |
| 교체 | `1일 교체용` | `The lens is to be prescribed for single-use disposable wear, and is to be discarded after each removal.` |

재질명은 첫 글자 대소문자만 다르다. 값의 충돌이 아니라 **표기 차이**다.
바이오트루 원데이와 달리 이 제품은 **BC·DIA·함수율·교체주기 네 값을 한국 공식 자료가 직접 인쇄한다.**

### S7-2. 도수 범위 — 한국과 글로벌이 **다르다** (병기)

| 출처 | 원문 |
| --- | --- |
| 한국 브랜드 페이지 상세 이미지 | `-0.25D ~ -6.50D (0.25D 단위)` / `-7.00D ~ -9.00D (0.50D 단위)` |
| 미국 PI/FG `Powers (Spherical)` | `+20.00D to -20.00D` |
| 미국 PI/FG `INDICATIONS` | `The lens may be prescribed in spherical powers ranging from +20.00D to -20.00D.` |

- 한국 공급 범위는 **마이너스 도수만, -9.00D까지**다. 플러스(원시) 도수가 없다.
- 한국 페이지의 적응증 고지도 `굴절이상(근시)의 교정`으로 **근시만** 적는다.
  반면 미국 PI/FG·PIB는 `myopia and hyperopia`로 적는다.
- 도수 범위는 9개 필드에 포함되지 않지만, **이 제품의 `type`을 `근시·원시용`으로 쓰면 안 된다는 근거**다.
  한국 유통 제품 유형은 **`근시용 투명 구면`**이다.

### S7-3. 산소 — Dk만 있고 **Dk/t가 어디에도 없다**

| 출처 | 인쇄된 라벨 | 인쇄된 값 |
| --- | --- | --- |
| 미국 PI/FG (SL7 494) | `Oxygen Permeability:` | `22 x 10–11[cm3O2(STP) x cm]/(sec x cm2 x mmHg) @35˚ C (Polarographic Method)` |
| 한국 브랜드 페이지 상세 이미지 | 항목 없음 | — |
| 미국 ECP 파라미터 페이지 | 이 제품 미수록 | — |

- PI/FG의 라벨에는 `(Dk)`조차 붙어 있지 않다. 문서 전체에 `Dk` 문자열이 0건이다.
  단위(`x 10–11 [cm3O2(STP) x cm]/(sec x cm2 x mmHg)`)는 **투과계수(Dk)의 단위**이지 투과율(Dk/t)의 단위가 아니다.
- **Dk를 두께로 나눠 Dk/t를 만드는 유도는 하지 않는다.** 게다가 이 제품은 단일 시험도수 중심두께 값도 공개돼 있지 않다(S7-4).
- 바이오트루 원데이에서는 같은 숫자 `42`를 세 문서가 Dk / Dk/t / transmissibility로 다르게 불러 **충돌**이었지만,
  이 제품은 문서가 하나뿐이라 **충돌이 아니라 부재**다.

### S7-4. 중심두께 — 단일 시험도수 값이 없다

| 출처 | 원문 |
| --- | --- |
| 미국 PI/FG | `Center Thickness: 0.05mm to 0.75mm (varies with power)` |
| 한국 브랜드 페이지 상세 이미지 | 항목 없음 |
| 미국 ECP 파라미터 페이지 | 이 제품 미수록 |

바이오트루 원데이는 ECP 웹·파라미터 PDF가 `0.10 mm @ -3.00D`라는 단일 시험도수 값을 별도로 인쇄했지만,
이 제품에는 그 문서가 없다. **인쇄된 값은 도수 전 구간을 덮는 범위 하나뿐이다.**

### S7-5. UV — 표기 자체가 없다

- 미국 PI/FG: `UV`·`ultraviolet`·`UV-absorbing` **0건**. DESCRIPTION에 자외선 흡수 단량체 문단이 없다.
- 미국 PIB: `UV`·`ultraviolet` **0건**. UV 경고 문단도 없다.
  (바이오트루 원데이 PIB에는 `WARNING: UV absorbing contact lenses are NOT substitutes …` 경고가 있었다.)
- 한국 브랜드 페이지: `자외선` 0건 · 상세 이미지 표에도 UV 행 없음.
- → **검토한 공식 자료 어디에도 UV 표기가 없다. `UV 차단 없음`으로 단정하지 않고 `확인되지 않음`으로 둔다.**

---

## 확인하지 못한 것

1. **Dk/t** — 어떤 공식 자료에서도 인쇄된 Dk/t를 찾지 못했다. Dk `22 x 10–11 … @35˚ C (분극법)`만 존재한다.
   두께로 나눠 유도하지 않았고, 나눌 두께(단일 시험도수 중심두께)도 공개돼 있지 않다.
2. **단일 시험도수 중심두께** — `-3.00D` 같은 기준 도수의 값이 없다. 도수 전 구간 범위만 있다.
3. **UV 표기** — 세 문서 모두 UV 언급이 0건이다. 값이 없다는 뜻이 아니라 **표기를 찾지 못했다는 뜻**이다.
4. **한국어 IFU / 사양서 PDF** — 찾지 못했다. 한국 수치의 근거는 브랜드 페이지 상세 **이미지** 하나뿐이며,
   이 이미지는 대체 텍스트가 없어 기계 판독이 불가능하다. 판독은 육안 확대로 했다.
5. **안경원 주문 사이트(`blecp.bausch.co.kr`)의 제품 정보** — 로그인 필요. 한국 공식 Dk/t·두께·UV 표기가
   이 안에 있을 가능성을 **배제하지 못했다.**
6. **허가번호와 제품의 1:1 대응** — `수허 09-975 호`의 `업체 제품 명칭`에 `트루핏 원데이, Truefit`이 함께 묶여 있다.
   원장만으로 소프렌 데일리 단독 UDI-DI를 분리할 수 없다.
7. **미국 자료의 지역 적용 범위** — 한국 허가 제품과 미국 문서의 사양이 같다는 공식 진술은 확인하지 못했다.
   연결 근거는 (a) 한국 상세 이미지의 포장 사진에 인쇄된 `SofLens® daily disposable (hilafilcon B)`,
   (b) 한국 표와 미국 PI/FG의 BC·DIA·함수율 값 일치 두 가지다.
   한국 원장 모델명 `Daily Disposable`에는 브랜드명도 재질명도 들어 있지 않아 원장만으로는 연결되지 않는다.
