# 검증 근거 — 프리시전원® (PRECISION1®)

검증일: 2026-08-28
대상: 근시·원시용 투명 구면, 1일 교체 (난시용 `프리시전 원 난시`는 제외)
제조사: Alcon · 한국 유통: 한국알콘(주)

이 문서는 실제로 가져온 공식 자료의 **원문**만 담는다. 값의 해석·정규화는 하지 않는다.

> 이 제품의 특수성: **한국 공식 자료에 수치가 하나도 없다.**
> `docs/PRODUCT_CANDIDATES_20.md`가 예고한 "한국 자료 없음 → 글로벌 자료 명시" 규칙을 실제로 적용한 첫 사례다.
> 한국 자료는 **유통·교체주기·자외선 등급·재질 계열**까지만 근거가 되고,
> BC·DIA·함수율·Dk/t·중심두께·재질명(USAN)은 **전부 글로벌 공식 자료가 유일한 근거**다.

---

## S1. MFDS 의료기기 UDI 표준코드 조회 — 한국 유통·허가 식별

- URL: https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do
- 조회일: 2026-08-28
- 방법: 화면(`schStddCdLstView.do`)에서 세션 쿠키(`JSESSIONID`, `elevisor_for_j2ee_uid`)를 받은 뒤,
  **화면이 실제로 쓰는 것과 같은 엔드포인트** `POST /msismext/udi/uif/selectStddCdLstAjax.do`를 `curl`로 호출했다.
  화면의 `searchList()`는 `form[name=baseForm]`을 `serializeArray()`해서 이 엔드포인트로 POST하므로 폼 입력과 동일한 요청이다.
  > 참고: 이전 검증 기록의 "curl은 빈 응답"은 **세션 쿠키 없이 호출한 경우**다.
  > `schStddCdLstView.do`를 먼저 GET해 쿠키를 확보하면 `curl`로도 동일 결과가 나온다(본 검증에서 재현).
- 공통 조회 조건: `udiCd=` · `ediCd=` · `prdlNm=` · `sDate=` · `eDate=` 비움,
  `dateCancelChk=N`, `selRcprslryTrgtYn=`(전체)

### S1-1. 조회 조건별 건수 — 시도한 모든 표기

| # | `bplcNm` | `modelnm` | `itemPermitNo` | 조회 건수(`totCnt`) |
| --- | --- | --- | --- | --- |
| Q1 | `한국알콘` | (비움) | (비움) | **46,382** |
| Q2 | `한국알콘` | `PRECISION1` | | **0** |
| Q3 | `한국알콘` | `Precision1` | | **186** |
| Q4 | `한국알콘` | `PRECISION 1` | | **0** |
| Q5 | `한국알콘` | `Precision1™` | | **0** |
| Q6 | `한국알콘` | `Precision1 for Astigmatism` | | **0** |
| Q7 | `한국알콘` | `Verofilcon` | | **0** |
| Q8 | `한국알콘` | `verofilcon` | | **0** |
| Q9 | `한국알콘` | `프리시전` | | **0** |
| Q10 | `한국알콘` | `precision` | | **0** |
| Q11 | `한국알콘` | `PRECISION` | | **4,460** |
| Q12 | `한국알콘` | `Precision` | | **4,786** |
| Q13 | `한국알콘` | `Smart surface` | | **0** |
| Q14 | `한국알콘` | `Smart` | | **0** |
| Q15 | (비움) | (비움) | `수허 19-380 호` | **186** |

### S1-2. 검색 함정 — 다음 알콘 제품 검증에서 재사용할 것

**(1) 모델명 검색은 대소문자를 구분한다. 구면 등록 모델명은 `Precision1`이다.**
`PRECISION1`(전부 대문자) → **0건**. `docs/PRODUCT_CANDIDATES_20.md` 표 A 5번의 검색 키워드
(`PRECISION1`, `Precision 1`)는 **둘 다 0건**을 낸다. 실제로 맞는 키워드는 `Precision1`(공백 없음, 파스칼 표기)다.
> 마이데이는 전부 대문자 `MYDAY`가 정답이었고, 아큐브 모이스트는 `®` 기호가 함정이었다.
> 알콘 프리시전원은 **파스칼 표기**가 정답이다. 세 제품 모두 표기 규칙이 다르다.

**(2) 재질명(`Verofilcon`/`verofilcon`)으로는 조회되지 않는다.** 구면 원장 모델명·업체 제품 명칭 어디에도 재질명이 없다.

**(3) `PRECISION`(대문자)은 프리시전원이 아니라 PRECISION7만 잡는다.**
대문자 `PRECISION`으로 잡히는 4,460건은 전부 일주일용 `PRECISION7™` 계열이다.
이름이 비슷한 다른 제품을 프리시전원으로 오인할 위험이 실재한다.

**(4) 한글 `프리시전`은 모델명 검색으로 0건이다.** 한글 표기는 `prdtNmCn`(업체 제품 명칭) 쪽에만 있고
이 화면의 검색 폼에는 `prdtNmCn` 입력란이 없다.

### S1-3. Q12(`modelnm=Precision`, 4,786건) 전수 집계 — 구면 / 난시 분리

4,786행을 500건 × 10페이지로 모두 가져와 집계한 결과 distinct **2건**:

```
한국알콘(주) | 수입업 | 매일착용 소프트 콘택트렌즈 | 2 | 수허 21-47 호 | Precision 1 toric | Smart surface toric, WSL easy-fit, 프리시전 원 난시 WSL easy-fit ## 4600
한국알콘(주) | 수입업 | 매일착용소프트콘택트렌즈   | 2 | 수허 19-380 호 | Precision1        | Smart surface ## 186
```

형식: `업체명 | 업체구분 | 소분류 품목 명칭 | 등급 | 품목허가번호 | 모델명 | 업체 제품 명칭 ## 행 수`

**구면과 난시용의 허가번호가 다르다.** 본 검증 대상(구면)은 `수허 19-380 호` 하나뿐이다.
난시용 행의 업체 제품 명칭에 `프리시전 원 난시`라는 한글 판매명이 들어 있어,
`Precision 1` 계열 = 한국 판매명 `프리시전 원`임이 알콘 자신의 등록 원문으로 확인된다.

> 소분류 품목 명칭 표기도 다르다: 구면은 `매일착용소프트콘택트렌즈`(공백 없음),
> 난시용은 `매일착용 소프트 콘택트렌즈`(공백 있음). 같은 품목을 가리키는 표기 흔들림이며 원문 그대로 기록한다.

### S1-4. Q11(`modelnm=PRECISION`, 4,460건) 전수 집계 — 혼동 위험 제품

```
한국알콘(주) | 연속착용 소프트 콘택트렌즈 | 3 | 수허 25-83 호 | PRECISION7™ for Astigmatism | 프리시전 7 일주일용 난시, ACTIV-FLO toric ## 4392
한국알콘(주) | 연속착용 소프트 콘택트렌즈 | 3 | 수허 25-76 호 | PRECISION7™                 | 프리시전 7 일주일용, ACTIV-FLO ## 68
```

PRECISION7은 **연속착용 소프트 콘택트렌즈 · 3등급 · 일주일용**으로, 프리시전원(매일착용 · 2등급 · 1일)과
품목·등급·교체주기가 모두 다르다. 허가번호도 별개다.

### S1-5. Q15(`itemPermitNo=수허 19-380 호`, 업체명 비움) 전수 집계

- 조회 건수 **186건**, distinct 신원 **1건**:
  `한국알콘(주) | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 19-380 호 | Precision1 | Smart surface`
- distinct UDI-DI 코드 **186건** (중복 없음)
- 포장내수량 분포: `5` 62건 · `30` 62건 · `90` 62건
- UDI-DI 예시(원문): `00730822254533`, `00730822254502`, `00730822254519`, `00730822254526`, `00730822254465`
- 코드체계: `GS1` · 요양급여 대상 치료재료 여부: `N`

즉 업체명 기준 조회(Q3, 186건)와 허가번호 단독 조회(Q15, 186건)가 **완전히 같은 집합**이며,
186건 전부가 단일 신원으로 `수허 19-380 호`에 연결된다.

**허가번호 원문: `수허 19-380 호`** (`수허`, 공백, `19-380`, 공백, `호`)

---

## S2. 한국 공식 소비자 페이지 — 프리시전원

### S2-1. 알콘 코리아 원데이 카테고리 페이지 (유통·교체주기 근거)

- URL: https://www.myalcon.com/kr/contact-lenses/daily/
- 조회일: 2026-08-28 · HTTP 200 · `curl -L`(브라우저 UA)

원문 발췌:

```
원데이 렌즈
원데이 콘택트렌즈  원데이 콘택트렌즈는 별도의 관리가 필요 없다는 것이 가장 큰 장점입니다. 아침에 새 렌즈를 착용하고, 하루가 끝나면 그대로 버리면 됩니다. 매일 새로운 렌즈로 더 위생적이고 편안한 하루를 시작해보세요.
오래 지속되는 성능  프리시전원은 오래 지속되는 성능을 제공하도록 설계되었습니다. 시력교정을 통해 자유로운 일상을 경험하세요.  더 알아보기
프리시전 원  긴 하루 촉촉!  더 알아보기
프리시전 원 난시  긴 하루 촉촉함의 차이가 선명함의 차이!  더 알아보기
```

- 한국알콘 소비자 사이트의 **원데이(1일) 카테고리에 `프리시전 원`이 등재**돼 있다. 난시용은 별도 항목이다.
- 같은 페이지 표기가 `프리시전원`(붙임)과 `프리시전 원`(띄움) 두 가지로 섞여 있다. 둘 다 원문 그대로 기록한다.

### S2-2. 프리시전원 한국 브랜드 사이트 — 제품 소개

- URL: https://precision.myalcon.com/kr/about-precision1/
- 조회일: 2026-08-28 · HTTP 200
- **리다이렉트 확인**: `https://www.myalcon.com/kr/contact-lenses/daily/precision1/`(후보 문서에 적힌 한국 공식 제품 페이지 URL)은
  200을 반환하지만 최종 URL이 `https://precision.myalcon.com/kr/about-precision1/`이다. 두 URL은 같은 문서다.

원문 발췌:

```
긴 하루를 촉촉하게 채우는 방법!
프리시전 원 원데이 콘택트렌즈 수분표면 기술인 SMARTSURFACE™
Technology(스마트 서페이스 테크놀로지)로 긴 하루도 촉촉하고 편안하게!
```

```
자외선 차단 1등급이라는 사실⁷,⁸
```

```
이 제품은 의료기기(매일착용소프트콘택트렌즈)이며, 사용시 주의사항과 사용방법을 잘 읽고 사용하십시오.
References:
...
ANSI Z80.20-2016 Ophthalmic contact lens UV transmittance.
ISO 18369-2:2017 Ophthalmic optics — Contact lenses — Part 2: Tolerances / Table 4 Tolerance Limits.
조합-2022-11-085 KR-PR1-2200010
```

- `자외선 차단 1등급`은 한국 공식 자료에서 확인된 **유일한 규격 표기**다.
  각주 7·8이 `ANSI Z80.20-2016`(콘택트렌즈 UV 투과율)과 `ISO 18369-2:2017`을 가리킨다.
  **차단율 퍼센트 수치는 한국 페이지에 없다.**
- `조합-2022-11-085 KR-PR1-2200010`은 **광고 사전심의 번호**다. 허가번호 필드에 넣지 않는다.

### S2-3. 프리시전원 한국 브랜드 사이트 루트

- URL: https://precision.myalcon.com/kr/
- 조회일: 2026-08-28 · HTTP 200

원문 발췌 (재질 계열 표기):

```
실리콘 하이드로겔 재질에 수분표면 기술
(SMARTSURFACE™)까지 결합되어 긴 하루도 촉촉한
프리시전 원을 만나봐!
```

```
이 제품은 의료기기(매일착용소프트콘택트렌즈)이며, 사용시 주의사항과 사용방법을 잘 읽고 사용하십시오.
조합-2022-11-084 KR-PR1-2200001
```

- 한국 자료는 재질을 **`실리콘 하이드로겔`(재질 계열)**까지만 밝힌다. `verofilcon A`라는 재질명(USAN)은 없다.
- 이 페이지의 성능 문구(`16시간 이상 촉촉`, `긴 하루 촉촉` 등)는 **광고성 문구이므로 물성값으로 옮기지 않았다.**

### S2-4. 한국 공식 자료에 **없는** 것 (직접 확인)

`www.myalcon.com/kr/contact-lenses/daily/` · `precision.myalcon.com/kr/` ·
`precision.myalcon.com/kr/about-precision1/` · `precision.myalcon.com/kr/contact-lens-support/`
네 페이지의 HTML을 태그 제거 후 전문 검색한 결과:

- `함수율` · `수분함유` · `베이스커브` · `직경` · `Dk` · `중심두께` **수치 문자열 0건**
- `8.3` · `14.2` · `0.09` · `51%` **0건**
- `verofilcon` **0건**
- `수허` · `허가번호` **0건**

즉 **한국 공식 소비자 자료에서 가져올 수 있는 값은 교체주기·자외선 등급·재질 계열뿐이다.**

---

## S3. 한국 IFU — 찾지 못함 (확인한 경로 전부 기록)

| 경로 | 결과 |
| --- | --- |
| `https://www.myalcon.com/kr/professional/contact-lenses/daily/precision1/` | **HTTP 404** |
| `https://www.myalcon.com/kr/professional/contact-lenses/` | **HTTP 404** |
| `https://www.myalcon.com/kr/professional/` | HTTP 200이지만 콘택트렌즈 제품 링크 **0건** |
| `https://www.alcon.co.kr/` | `https://www.alcon.com/ko-KR/`(기업 사이트)로 리다이렉트, 렌즈 사양 없음 |
| `https://ifu.alcon.com/` (알콘 공식 eIFU 포털) | HTTP 200이나 화면 표시는 `서비스를 일시적으로 사용할 수 없습니다`. 백엔드 `https://api-public.qarad.eifu.online/api/v1/manufacturers` 응답이 `"authenticationMechanisms":["USERNAME_PASSWORD"]` — **로그인 없이는 문서를 열 수 없다.** |
| `precision.myalcon.com/kr/` 내 PDF 링크 | **0건** |

**결론: 2026-08-28 시점에 온라인으로 공개된 한국어 IFU를 찾지 못했다.**
따라서 허가번호의 유일한 근거는 MFDS UDI(S1)다.
(파일럿의 아큐브 오아시스 원데이는 한국 IFU 원문에 `수허 16-499 호`가 있었으나, 이 제품은 그 경로가 없다.)

---

## S4. Alcon 글로벌 전문가용 공식 사양 (미국)

- URL: https://www.myalcon.com/professional/contact-lenses/daily/precision1/
- 조회일: 2026-08-28 · HTTP 200
- 방법: gstack 헤드리스 브라우저 렌더링 후 `table` 요소의 `innerText`를 그대로 추출(라벨·값 귀속 확인)
- 문서 식별 표기: 페이지 하단 `©2022 Alcon Inc. US-PR1-2200002`

### S4-1. Technical Specifications 표 — 라벨/값 원문 그대로

```
MATERIAL                                   verofilcon A
CENTER THICKNESS (-3.00D, mm)              0.09
CORE WATER CONTENT                         51%
DIAMETER (mm)                              14.2
HANDLING TINT                              VISITINT®
CORE MODULUS (MPa)                         0.6
DK/T                                       100 @ −3.00D
SMARTSURFACE® TECHNOLOGY
SURFACE WATER CONTENT                      >80%
PACKAGING                                  5 pack (trials), 30‑ct., 90‑ct.
UV BLOCKER*                                Class 1 UV blocker (≥90% of UVA, ≥99% of UVB)
POWER RANGE                                −0.50 to −6.00 (0.25D steps), −6.50 to −12.00 (0.50D steps). +0.50 to +6.00 (0.25D steps), +6.50 to +8.00 (0.50D steps)
BASE CURVE (mm)                            8.3
```

각주 원문:

```
*UV‑blocking contact lenses are NOT substitutes for protective UV‑blocking eyewear such as UV‑blocking goggles or sunglasses because they do not completely cover the eye and surrounding area.
```

기준 곡률 설명 원문:

```
The 8.3 mm base curve for PRECISION1® was chosen through carefully conducted clinical testing using a range of base curves on a range of corneal curvatures.
In a clinical study, 100% of eyes wearing the 8.3 mm base curve achieved an acceptable fit.
138 eyes (n=69)
Corneal curvatures ranged from 36.75D to 48.25D, which covers the normal range of a soft contact lens wearer
```

### S4-2. 이 표에 **없는** 것

- **Dk/t 시험 방법·온도가 없다.** 표기는 시험도수(`@ −3.00D`)뿐이고, 분극법/쿨로메트릭 여부,
  boundary·edge 보정 여부, 측정 온도가 어디에도 적혀 있지 않다.
  (아큐브 기술 사양이 각주로 `polarographic method ... at 35° C`를 밝히는 것과 대조된다.)
- 교체주기(`Recommended Replacement`) 행이 없다. 이 표는 물성만 담는다.

---

## S5. Alcon 글로벌(International) 전문가 페이지 — 지역 간 대조

- URL: https://www.myalcon.com/international/professional/contact-lenses/daily/precision1/
- 조회일: 2026-08-28 · HTTP 200
- 문서 식별 표기: `©2025 Alcon Inc. UKIE-PR1-2500008`

텍스트로 확인된 원문:

```
PRECISION1®
Replacement Frequency: daily      Indications: myopia, hyperopia
```

**파라미터 표는 텍스트가 아니라 이미지다**
(`https://www.myalcon.com/international/sites/g/files/rbvwei2661/files/PRECISION1-Table-Parameters-desktop-2.png`,
`alt="PRECISION1® Table Parameters"`, 2236×929 PNG).
이미지를 내려받아 판독한 결과 **S4-1의 미국 전문가 페이지 표와 라벨·값이 모두 동일**했다
(`verofilcon A` / `0.09` / `51%` / `14.2` / `VISITINT®` / `0.6` / `Dk/t 100 @ -3.00D` / `>80%` /
`Class 1 UV blocker (≥90% of UVA, ≥99% of UVB)` / `8.3`).

> 이 값들은 **이미지 판독**이므로 본 검증에서는 S4(텍스트 원문)를 1차 출처로 쓰고,
> S5는 "지역별 사양이 갈리지 않았다"는 **대조 근거**로만 사용한다.

또한 이 페이지의 `PRECISION1® Product Available in` 목록에는
`Asia Pacific: Australia, Malaysia`만 있고 **대한민국은 없다.**
국제 사이트가 자체 로컬 사이트를 가진 나라를 빼는 구조로 보이며,
한국 유통 근거는 이 목록이 아니라 **한국알콘 사이트(S2)와 MFDS 원장(S1)**이다.

---

## S6. Alcon 미국 Package Insert (PI) — 시험 조건이 적힌 유일한 문서

- 링크 경로: S4 페이지의 `Product Inserts` → https://alcon.widen.net/s/gtmm8qkbwx/w900331896-i-verofa-prec1-us
- 실제 PDF: https://alcon.widen.net/content/6h4uwcilld/original/W900331896-I-VEROFA-PREC1-US.pdf
- 조회일: 2026-08-28 · HTTP 200 · 645,309 bytes · 2페이지 · `application/pdf`
- 방법: `curl -L` 다운로드 후 `pypdf` 텍스트 추출(텍스트 레이어 정상, 45,527자)
- 문서 식별 표기: `W900331896` · `This package insert is effective as of March 2021`

### S6-1. PRODUCT DESCRIPTION / Lens Properties 원문

```
PRECISION1™ and PRECISION1™ for Astigmatism (verofilcon A) soft contact
lenses are made from a lens material that is 51% water and 49% verofilcon A, a
silicone containing hydrogel. The color additive Reactive Blue 247 is added to the lens
material to create a light blue edge-to-edge color to make it easier to see when
handling. In addition, lenses contain a benzotriazole UV-absorbing monomer to block
UV radiation. The transmittance characteristics are less than 1% in the UVB range of
280 nm to 315 nm and less than 10% in the UVA range of 316 to 380 nm for the
entire power range.
Lens Properties
Refractive Index (hydrated): 1.4
Light Transmittance: ≥ 90% (@ 640 nm, -3.00 D)
Oxygen Permeability (Dk): 90  x 10 -11 (cm2/sec) (ml O2 /ml x mm Hg),
  measured at 35 ˚C (intrinsic Dk-Coulometric
  method)
Water Content: 51% by weight in normal saline
• Diameter Range: 13.0 to 15.0 mm
• Spherical Power Range: -20.00 to +20.00 D
• Base Curve Range: 8.0 to 9.2 mm
```

> `Diameter Range` · `Base Curve Range` · `Spherical Power Range`는 **재질 수준의 허용 범위**이고,
> 실제 판매되는 렌즈의 값은 아래 `LENS PARAMETERS AVAILABLE`에 있다. 두 가지를 섞지 않는다.

### S6-2. LENS PARAMETERS AVAILABLE — 구면 / 난시용 분리 원문

```
PRECISION1™ (verofilcon A) contact lenses (spherical)
• Chord Diameter: 14.2 mm
• Center Thickness: 0.09 mm @ -3.00 D (varies with power)
• Base Curve: 8.3 mm
• Powers: Minus: -0.50 to -6.00 D (0.25 D steps);
  -6.50 to -12.00 D (0.50 D steps)
  Plus: +0.50 to +6.00 D (0.25 D steps);
  +6.50 to +8.00 D (0.50 D steps)

PRECISION1™ for Astigmatism (verofilcon A) contact lenses (toric)
    • Chord Diameter: 14.5 mm
     • Center Thickness: 0.10 mm @ -3.00 D (varies with power)
     • Base Curve: 8.5 mm
```

**구면과 난시용은 직경·중심두께·BC가 모두 다르다.** 본 검증 대상은 구면 값만 쓴다.

### S6-3. 투과율 곡선 각주 — 중심두께 재확인

```
Verofilcon A contact lens measured through central 6 mm portion for
the thinnest marketed lens (-3.00 D, 0.090 mm center thickness).
```

### S6-4. ACTIONS — UV 차단율 원문

```
The lenses contain a UV blocker to help protect against transmission of harmful UV
radiation to the cornea and into the eye. The thinnest verofilcon A lenses (-3.00
diopters) block 93% UVA radiation and 99% UVB radiation. The degree of UV radiation
blockage will increase for thicker lenses.
```

경고문 원문:

```
WARNING: UV Absorbing contact lenses are not substitutes for protective UV
absorbing eye wear such as UV absorbing goggles or sunglasses because they
do not completely cover the eye and surrounding area. You should continue to
use UV absorbing eyewear as directed.
```

### S6-5. 교체주기와 착용방식 — 원문

```
Verofilcon A contact lenses are intended to be worn once (daily disposable wear) and
then discarded at the end of each wearing period. The patient should be instructed to
start the next wearing period with a fresh new lens.
```

```
Studies have not been conducted to show that verofilcon A contact lenses are safe to wear during
sleep, therefore patients should be advised to remove their lenses while sleeping.
Normal daily wear of lenses assumes a minimum of 6 hours of non-lens wear per
24-hour period. Optimum individual wearing schedules will vary.
```

### S6-6. INDICATIONS — 적응증 원문

```
PRECISION1™ (verofilcon A) spherical soft contact lenses are indicated for the
optical correction of refractive ametropia (myopia and hyperopia) in phakic or aphakic
persons with non-diseased eyes with up to approximately 1.50 diopters (D) of
astigmatism that does not interfere with visual acuity.
```

`근시·원시용 구면`이라는 본 검증 대상 정의와 일치한다.

---

## S7. Alcon 미국 Professional Fitting and Information Guide (참고)

- 링크 경로: S4 페이지의 `Guidelines` → https://alcon.widen.net/s/7t5jxdddph/w900331897-pb-verofa-us
- 실제 PDF: https://alcon.widen.net/content/khmmjzhool/original/W900331897-PB-VEROFA-US.pdf
- 조회일: 2026-08-28 · HTTP 200 · 639,561 bytes · 20페이지 · `W900331897`

내용은 착용·관리 안내 중심이며 **S6에 없는 새로운 물성값은 없다.**
재질 관련 원문 한 줄만 확인됐다: `51% water. Lenses contain the color additive Reactive Blue 247, and have a light ...`
따라서 본 검증에서 이 문서를 값의 1차 출처로 쓰지 않는다.

---

## 값 대조표 — 같은 값을 여러 공식 자료가 말하는지

| 항목 | 한국 공식 (S2) | 미국 전문가 페이지 (S4) | 국제 전문가 페이지 (S5, 이미지) | 미국 PI (S6) |
| --- | --- | --- | --- | --- |
| 재질명 | 없음 (`실리콘 하이드로겔`만) | `verofilcon A` | `verofilcon A` | `verofilcon A`, `a silicone containing hydrogel` |
| BC | 없음 | `8.3` | `8.3` | `Base Curve: 8.3 mm` |
| DIA | 없음 | `14.2` | `14.2` | `Chord Diameter: 14.2 mm` |
| 함수율(코어/전체) | 없음 | `CORE WATER CONTENT 51%` | `CORE WATER CONTENT 51%` | `Water Content: 51% by weight in normal saline` |
| 함수율(표면) | 없음 | `SURFACE WATER CONTENT >80%` | `>80%` | 없음 |
| Dk/t | 없음 | `100 @ −3.00D` | `100 @ -3.00D` | 없음 (대신 intrinsic `Dk 90 x 10-11`) |
| 중심두께 | 없음 | `0.09` (`-3.00D, mm`) | `0.09` | `0.09 mm @ -3.00 D`, `0.090 mm` |
| 교체주기 | `원데이` 카테고리 등재 | 표에 없음 | `Replacement Frequency: daily` | `worn once (daily disposable wear)` |
| UV | `자외선 차단 1등급` | `Class 1 UV blocker (≥90% of UVA, ≥99% of UVB)` | 동일 | `block 93% UVA radiation and 99% UVB radiation` (-3.00D) |
| 허가번호 | 없음 | 해당 없음 | 해당 없음 | 해당 없음 (MFDS S1이 유일) |

**공식 출처끼리 값이 어긋나는 항목은 없다.** 따라서 `conflict` 상태 필드는 0건이다.
다만 아래 두 가지는 "같은 숫자를 서로 다르게 부르는" 표기 차이이므로 반드시 함께 적는다.

1. **51%의 라벨이 다르다.** 전문가 사양표는 `CORE WATER CONTENT 51%`(코어)라고 부르고,
   미국 PI는 `Water Content: 51% by weight in normal saline`(렌즈 재질 전체)이라고 부른다.
   숫자는 같지만 **무엇을 잰 값인지에 대한 설명이 다르다.** 표면 함수율 `>80%`와는 어떤 경우에도 합치지 않는다.
2. **UV 표기의 성격이 다르다.** 사양표의 `≥90% / ≥99%`는 **Class 1 등급 기준선**이고,
   PI의 `93% UVA / 99% UVB`는 **-3.00D 렌즈의 측정값**이다. 등급 기준과 측정값을 하나로 합치지 않는다.
   한국 페이지는 등급(`1등급`)만 말하고 퍼센트는 말하지 않는다.

---

## 확인하지 못한 것

1. **한국 표기 수치 일체.** 한국 공식 소비자 페이지 4종 어디에도 BC·DIA·함수율·Dk/t·중심두께·재질명이 없다.
   이 제품의 모든 물성값은 **글로벌 공식 자료가 유일한 근거**다.
2. **한국어 IFU.** 온라인 공개본을 찾지 못했다(S3). 알콘 공식 eIFU 포털은 로그인 인증이 필요하다.
   실물 포장 IFU 확보 경로는 별도 과제로 남는다.
3. **Dk/t의 시험 방법·온도.** 알콘은 Dk/t에 시험도수(`@ −3.00D`)만 붙이고 측정법·보정·온도를 밝히지 않는다.
   PI가 밝힌 `35 ˚C · intrinsic Dk-Coulometric method`는 **Dk(투과성)** 조건이지 **Dk/t(전달률)** 조건이 아니다.
   두 값을 섞지 않았고, Dk와 중심두께로 Dk/t를 역산하지도 않았다.
4. **한국 유통 파라미터 범위.** 글로벌 사양의 도수 범위·포장 단위가 한국에서 그대로 유통되는지는
   한국 공식 자료에 표가 없어 확인하지 못했다. (MFDS 원장의 포장내수량은 `5` · `30` · `90`으로,
   글로벌 사양의 `5 pack (trials), 30‑ct., 90‑ct.`와 일치한다.)
5. **알콘의 `Data on File` 문헌.** 전문가 페이지 각주가 인용하는 `Alcon data on file, 2019/2020/2021`은
   공개 문서가 아니므로 원문을 확인할 수 없었다. 이들에 근거한 성능 문구는 물성값으로 옮기지 않았다.
