# 검증 근거 — 데일리스 아쿠아컴포트 플러스 (DAILIES® AquaComfort Plus®)

검증일: 2026-08-28
대상: 근시·원시용 투명 구면, 1일 교체 (난시용 `DAILIES AquaComfort Plus Toric`, 다초점 `Multifocal`은 제외)
제조사: Alcon · 한국 유통: 한국알콘(주)
재질: `nelfilcon A` — **실리콘 하이드로겔이 아니라 일반 하이드로겔**이다.

이 문서는 실제로 가져온 공식 자료의 **원문**만 담는다. 값의 해석·정규화는 하지 않는다.

> 이 제품의 특수성 두 가지.
>
> 1. **한국 공식 제품 페이지가 존재하지 않는다.** 프리시전원은 한국 브랜드 사이트라도 있었지만,
>    이 제품은 한국알콘 소비자 사이트의 사이트맵 66건 어디에도 없다(S2). 유통 근거는 **MFDS 원장 단독**이다.
> 2. **알콘 국제 사이트의 파라미터 이미지 안에 흰색으로 지워진 UV 문구가 남아 있다**(S5-2).
>    화면에서는 보이지 않는 잔재이며, 이 검증은 그것을 UV 값으로 쓰지 않았다. 사유는 S5-2에 전부 적었다.

---

## S1. MFDS 의료기기 UDI 표준코드 조회 — 한국 유통·허가 식별

- URL: https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do
- 조회일: 2026-08-28
- 방법: 화면(`schStddCdLstView.do`)을 GET해 세션 쿠키(`JSESSIONID`, `elevisor_for_j2ee_uid`)를 받은 뒤,
  화면의 `searchList()`가 쓰는 것과 같은 엔드포인트 `POST /msismext/udi/uif/selectStddCdLstAjax.do`를 `curl`로 호출했다.
  응답은 `{"dataList":[...]}`이고 **총 건수는 `dataList[0].totCnt`에 들어 있다**(응답 최상위에 `totCnt`가 없다).
- **인코딩 함정(이번 검증에서 새로 확인)**: 조회 화면 HTML은 EUC-KR로 서빙되지만
  **폼 파라미터는 UTF-8로 퍼센트 인코딩해야 한다.** `bplcNm`을 EUC-KR(`%C7%D1%B1%B9%BE%CB%C4%DC`)로 보내면
  **0건**, UTF-8(`%ED%95%9C%EA%B5%AD%EC%95%8C%EC%BD%98`)로 보내면 46,382건이다. 다음 검증에서 재사용할 것.
- 공통 조회 조건: `udiCd=` · `ediCd=` · `prdlNm=` · `sDate=` · `eDate=` 비움,
  `dateCancelChk=N`, `selRcprslryTrgtYn=`(전체)

### S1-1. 조회 조건별 건수 — 시도한 모든 표기

| # | `bplcNm` | `modelnm` | `itemPermitNo` | 조회 건수(`totCnt`) |
| --- | --- | --- | --- | --- |
| Q1 | `한국알콘` | (비움) | (비움) | **46,382** |
| Q2 | `한국알콘` | `DAILIES AquaComfort Plus` | | **1,044** |
| Q3 | `한국알콘` | `Dailies AquaComfort Plus` | | **0** |
| Q4 | `한국알콘` | `AquaComfort` | | **1,044** |
| Q5 | `한국알콘` | `Aquacomfort` | | **0** |
| Q6 | `한국알콘` | `aquacomfort` | | **0** |
| Q7 | `한국알콘` | `AQUACOMFORT` | | **0** |
| Q8 | `한국알콘` | `nelfilcon` | | **0** |
| Q9 | `한국알콘` | `Nelfilcon` | | **0** |
| Q10 | `한국알콘` | `Aqua` | | **1,044** |
| Q11 | `한국알콘` | `AQUA` | | **199** |
| Q12 | `한국알콘` | `DAILIES` | | **5,928** |
| Q13 | `한국알콘` | `Dailies` | | **495** |
| Q14 | `한국알콘` | `dailies` | | **0** |
| Q15 | `한국알콘` | `데일리스` | | **0** |
| Q16 | `한국알콘` | `아쿠아` | | **0** |
| Q17 | `한국알콘` | `Comfort` | | **1,044** |
| Q18 | `한국알콘` | `Plus` | | **1,044** |
| Q19 | (비움) | (비움) | `수허 09-217 호` | **58** |

### S1-2. 검색 함정 — 다음 알콘 제품 검증에서 재사용할 것

**(1) 모델명 검색은 대소문자를 구분한다. 이 제품의 등록 모델명 앞머리는 전부 대문자 `DAILIES`다.**
`Dailies AquaComfort Plus`(파스칼 표기) → **0건**. 프리시전원은 파스칼 표기 `Precision1`이 정답이었는데,
**같은 회사 같은 화면에서 이 제품은 반대**다. `docs/PRODUCT_CANDIDATES_20.md`가 "한국 공식 제품 페이지 없음"이라고
적은 것은 사실이지만, 그 때문에 한국 유통까지 없다고 볼 수는 없다는 것이 이번 조회의 결론이다.

**(2) 대문자 `DAILIES`(5,928건)와 파스칼 `Dailies`(495건)는 서로 다른 제품군을 잡는다.**
데일리스 토탈원 계열은 `Dailies`로만, 아쿠아컴포트 플러스와 프레시룩 계열은 `DAILIES`로만 잡힌다.
한 브랜드 안에서도 등록 표기가 갈린다.

**(3) 재질명(`nelfilcon`/`Nelfilcon`)으로는 조회되지 않는다.** 프리시전원의 `Verofilcon`과 같다.

**(4) 한글 `데일리스`·`아쿠아`는 모델명 검색으로 0건이다.** 한글 판매명은 `prdtNmCn`(업체 제품 명칭) 쪽에만 있고
이 화면의 검색 폼에는 `prdtNmCn` 입력란이 없다.

### S1-3. Q2(`modelnm=DAILIES AquaComfort Plus`, 1,044건) 전수 집계 — 구면 / 난시 분리

1,044행을 500건 × 3페이지로 모두 가져와 집계한 결과 distinct **2건**:

```
한국알콘(주) | 수입업 | 매일착용소프트콘택트렌즈  | 2 | 수허 15-658 호 | DAILIES AquaComfort Plus Toric                | 아쿠아렌즈 난시용 ## 986
한국알콘(주) | 수입업 | 매일착용 소프트 콘택트렌즈 | 2 | 수허 09-217 호 | DAILIES AquaComfort Plus One-Day Contact Lens | 아쿠아 렌즈        ## 58
```

형식: `업체명 | 업체구분 | 소분류 품목 명칭 | 등급 | 품목허가번호 | 모델명 | 업체 제품 명칭 ## 행 수`

**구면과 난시용의 허가번호가 다르다.** 본 검증 대상(구면)은 `수허 09-217 호` 하나뿐이다.

> 소분류 품목 명칭 표기가 둘 사이에 다르다: 구면은 `매일착용 소프트 콘택트렌즈`(공백 있음),
> 난시용은 `매일착용소프트콘택트렌즈`(공백 없음). **프리시전원은 정확히 반대였다**(구면이 공백 없음).
> 같은 품목을 가리키는 표기 흔들림이며 원문 그대로 기록한다.

**한글 판매명이 원장 원문으로 확인된다: 구면 `아쿠아 렌즈`, 난시용 `아쿠아렌즈 난시용`.**
한국에서의 판매명은 `데일리스 아쿠아컴포트 플러스`가 아니라 **`아쿠아렌즈`** 계열이다(REVIEW 참조).

### S1-4. Q12(`modelnm=DAILIES`, 5,928건) 전수 집계 — 같은 접두어를 쓰는 다른 제품

```
한국알콘(주) | 수입업 | 매일착용소프트콘택트렌즈  | 2 | 수허 20-63 호  | DAILIES TOTAL1 for Astigmatism                        | 워터렌즈난시용   ## 4716
한국알콘(주) | 수입업 | 매일착용소프트콘택트렌즈  | 2 | 수허 15-658 호 | DAILIES AquaComfort Plus Toric                        | 아쿠아렌즈 난시용 ## 986
한국알콘(주) | 수입업 | 매일착용 소프트 콘택트렌즈 | 2 | 수허 09-809 호 | DAILIES FreshLook Illuminate One-Day Color Contact Lens | (없음)          ## 168
한국알콘(주) | 수입업 | 매일착용 소프트 콘택트렌즈 | 2 | 수허 09-217 호 | DAILIES AquaComfort Plus One-Day Contact Lens          | 아쿠아 렌즈      ## 58
```

`DAILIES AquaComfort Plus Multifocal`은 **한국 원장에 없다.** 미국 사양·PI에는 다초점 제품이 있으나
한국에는 구면과 난시용만 등록돼 있다. 다초점 파라미터(BC 8.7 / DIA 14.0 / CT 0.10)를 구면 값으로 오인하지 않도록 분리해 둔다.

참고로 파스칼 표기 `Dailies`(495건)는 전혀 다른 집합이다:
`수허 17-553 호 | Dailies Total1 Multifocal | 워터렌즈 멀티포컬 ## 390`,
`수허 13-112 호 | Dailies Total1 | 워터렌즈 ## 105`.
**`수허 13-112 호`(데일리스 토탈원) 105건은 2026-08-27·08-28 기록과 완전히 일치한다** — 조회 방법이 재현됨을 뜻한다.

### S1-5. Q19(`itemPermitNo=수허 09-217 호`, 업체명 비움) 전수 집계

- 조회 건수 **58건**, distinct 신원 **1건**:
  `한국알콘(주) | 수입업 | 매일착용 소프트 콘택트렌즈 | 2 | 수허 09-217 호 | DAILIES AquaComfort Plus One-Day Contact Lens | 아쿠아 렌즈`
- distinct UDI-DI 코드 **58건** (중복 없음)
- 포장내수량 분포: `5` 29건 · `30` 29건 (**`90`은 없다** — 미국 사양의 `90‑ct.`는 한국 원장에 나타나지 않는다)
- UDI-DI 예시(원문): `00630175475572`, `00630175475589`, `00630175475596`, `00630175475602`, `00630175475534`
- 코드체계: `GS1` · 요양급여 대상 치료재료 여부: `N` · 사용자 멸균 `N` · 키트 `N`

즉 업체명+모델명 기준 조회의 구면 부분집합(58건)과 허가번호 단독 조회(58건)가 **완전히 같은 집합**이며,
58건 전부가 단일 신원으로 `수허 09-217 호`에 연결된다.

**허가번호 원문: `수허 09-217 호`** (`수허`, 공백, `09-217`, 공백, `호`)

### S1-6. 확인하지 못한 것 — 허가의 현재 유효성

UDI 표준코드 조회 응답 필드는
`bplcNm · companyType · prdlNm · grade · itemPermitNo · modelnm · prdtNmCn · cdSystmSvlNm · udidicd · mummPunitQy · rcprslryTrgtYn · rcper · userStrlzYn · kitYn`뿐이고
**허가 취하·취소 여부를 나타내는 상태 필드가 없다.** `dateCancelChk`는 통합정보 등록일자 필터를 끄는 옵션이지
허가 취소 여부와 무관하다. `emedi.mfds.go.kr` 안에서 품목허가 상세 원장을 여는 공개 조회 경로
(`/portal/main/main.do`, `/msismext/emd/mdi/…`, `/msismext/emd/emi/…`)는 모두 404였고,
메인 화면에서 도달 가능한 조회는 `prdlPermissionView.do`(허가 신청)와 이 UDI 조회뿐이었다.

따라서 이 검증이 말할 수 있는 것은 **"2026-08-28 시점 MFDS UDI 표준코드 원장에 한국알콘(주) 명의로
`수허 09-217 호` 구면 등록 58건이 조회된다"**까지다. 현재 한국에서 실제로 판매 중인지는 별개 문제이며,
한국알콘 소비자 사이트가 이 제품을 싣지 않는다는 사실(S2)과 함께 읽어야 한다.

---

## S2. 한국 공식 자료 — **제품 페이지가 없다** (사이트맵 전수 확인)

### S2-1. 알콘 코리아 사이트맵 전수 조회

- URL: https://www.myalcon.com/kr/sitemap.xml
- 조회일: 2026-08-28 · HTTP 200 · `<loc>` **66건**

콘택트렌즈 제품 페이지는 다음 8건이 전부다:

```
https://www.myalcon.com/kr/contact-lenses/daily/dailies-total1/
https://www.myalcon.com/kr/contact-lenses/daily/dailies-total1-for-astigmatism/
https://www.myalcon.com/kr/contact-lenses/daily/dailies-total1-multifocal/
https://www.myalcon.com/kr/contact-lenses/daily/precision1/
https://www.myalcon.com/kr/contact-lenses/daily/precision1-for-astigmatism/
https://www.myalcon.com/kr/contact-lenses/monthly/total30/
https://www.myalcon.com/kr/contact-lenses/contact-lens-solutions/opti-free-express/  (관리용액)
https://www.myalcon.com/kr/contact-lenses/contact-lens-solutions/opti-free-puremoist/ (관리용액)
```

**`aquacomfort`·`aqua`·`dailies-aquacomfort-plus`를 포함하는 URL은 66건 중 0건이다.**

### S2-2. 직접 확인한 URL과 응답

| 경로 | 결과 |
| --- | --- |
| `https://www.myalcon.com/kr/contact-lenses/daily/dailies-aquacomfort-plus/` | **HTTP 404** |
| `https://www.myalcon.com/kr/contact-lenses/daily/dailies-aquacomfort-plus` | **HTTP 404** |
| `https://www.myalcon.com/kr/contact-lenses/daily/aqua/` | **HTTP 404** |
| `https://aqua.myalcon.com/kr/` · `https://aqua.myalcon.com/` | **DNS 해석 실패**(연결 0바이트) |
| `https://dailies.myalcon.com/kr/` | **DNS 해석 실패**(연결 0바이트) |
| `https://total.myalcon.com/kr/` | HTTP 200 — 데일리스 토탈원(워터렌즈) 전용 사이트. 아쿠아컴포트 언급 없음 |
| `https://www.alcon.co.kr/` | `https://www.alcon.com/ko-KR/`(기업 사이트)로 리다이렉트, 렌즈 사양 없음 |

### S2-3. 한국 원데이 카테고리 페이지 본문 — 이 제품이 없다는 직접 근거

- URL: https://www.myalcon.com/kr/contact-lenses/daily/
- 조회일: 2026-08-28 · HTTP 200

`원데이 콘택트렌즈 모든 렌즈` 아래 실린 제품 원문 전부:

```
워터렌즈  내 눈에 닿는건 워터쿠션 같은 편안함! 식약처 승인 건조감 감소 효과  더 알아보기
워터렌즈 멀티포컬 (다초점)  가까운 거리부터 먼 거리까지 하루종일 선명하고 촉촉하게!  더 알아보기
워터렌즈 난시  난시교정은 기본, 워터쿠션 같은 편안함까지!  더 알아보기
프리시전 원  긴 하루 촉촉!  더 알아보기
프리시전 원 난시  긴 하루 촉촉함의 차이가 선명함의 차이!  더 알아보기
```

HTML 태그 제거 후 전문 검색 결과 이 페이지와 `https://www.myalcon.com/kr/contact-lenses/`에서
`아쿠아` · `아쿠아컴포트` · `AquaComfort` · `aquacomfort` · `nelfilcon` · `데일리스` **모두 0건**
(렌더링 텍스트·원본 HTML 양쪽 모두 0건).

### S2-4. 한국어 IFU — 찾지 못함

프리시전원 검증(S3, `docs/verification/precision1/EVIDENCE.md`)과 동일하게
알콘 공식 eIFU 포털 `https://ifu.alcon.com/`은 백엔드가
`"authenticationMechanisms":["USERNAME_PASSWORD"]`를 요구해 로그인 없이 문서를 열 수 없다.
한국 제품 페이지 자체가 없으므로 페이지에 걸린 PDF 링크 경로도 없다.

**결론: 2026-08-28 시점에 이 제품을 싣는 한국 공식 페이지·한국어 IFU를 하나도 찾지 못했다.**
따라서 **BC·DIA·함수율·Dk/t·중심두께·재질명·UV는 전부 글로벌 공식 자료가 유일한 근거**이고,
**허가번호의 유일한 근거는 MFDS UDI(S1)**이며, **한국 유통 근거도 MFDS UDI 단독**이다.

---

## S3. Alcon 글로벌 전문가용 공식 사양 (미국) — 숫자의 1차 출처

- URL: https://www.myalcon.com/professional/contact-lenses/daily/dailies-aquacomfort-plus/
- 조회일: 2026-08-28 · HTTP 200 · 367,553 bytes
- 방법: `curl -L`(브라우저 UA)로 받은 HTML 안의 `<table>` 요소를 셀 단위로 파싱해
  **라벨과 값의 귀속을 셀 경계로 확인**했다(텍스트 평탄화만으로 판단하지 않음).
- 문서 식별 표기: 페이지 하단 `©2022 Alcon Inc. US-DAP-2100005`

### S3-1. Product Information 표 — 라벨/값 원문 그대로

표 제목 셀: `Dailies® AquaComfort Plus®`

```
Material                        nelfilcon A
Center Thickness (‑3.00D, mm)   0.10
Water Content                   69%
Core Modulus (MPa)              0.76
Diameter (mm)                   14.0
Handling Tint                   Light Blue VISITINT®
Packaging                       5 pack (trials), 30‑ct., 90‑ct.
Dk/t                            26 @ ‑3.00D
Power Range (diopter)           +0.50 to +6.00 (in 0.25D steps), +6.50 to +8.00 (in 0.50D steps), ‑0.50 to ‑6.00 (in 0.25D steps), ‑6.50 to ‑15.00 (in 0.50D steps)
Base Curve (mm)                 8.7
                                Base curve optimization is influenced by:
                                Lens diameter
                                Modulus
                                Other material characteristics
Moisturizing Agents             Unique Moisture System:
                                Hydroxypropyl methylcellulose
                                Polyethylene glycol (PEG)
                                Polyvinyl alcohol (PVA)
```

> 표기 세부: `‑3.00D`와 `30‑ct.`의 하이픈은 일반 하이픈(U+002D)이 아니라
> **비분리 하이픈 U+2011**이다. `raw`에는 인쇄된 문자를 그대로 보존했다.

### S3-2. 이 표에 **없는** 것

- **UV 관련 행이 아예 없다.** 프리시전원 사양표에는 `UV BLOCKER*` 행이 있었으나 이 표에는 없다.
- **교체주기(`Recommended Replacement`) 행이 없다.** 데일리스 토탈원·프리시전원과 같다.
- **Dk/t의 시험 방법·온도가 없다.** 표기는 시험도수(`@ ‑3.00D`)뿐이다.

### S3-3. `Moisturizing Agents`를 함수율과 합치지 않은 이유

같은 표가 `Water Content 69%`와 별개로 `Moisturizing Agents / Unique Moisture System:`
(`Hydroxypropyl methylcellulose`, `Polyethylene glycol (PEG)`, `Polyvinyl alcohol (PVA)`)를 싣는다.
이것은 **함수율의 측정 위치나 조건이 아니라 렌즈에 배합된 습윤제 성분 목록**이다.
데일리스 토탈원의 `코어 33% / 표면 80% 이상`처럼 함수율 숫자가 둘로 나뉜 사례와 성격이 다르므로,
`69%` 하나만 함수율 값으로 쓰고 습윤제 문구는 함수율에 섞지 않았다.

---

## S4. Alcon 미국 Package Insert (PI) — 시험 조건이 적힌 유일한 문서

- 링크 경로: S3 페이지의 `DAILIES® AquaComfort PLUS® Contact Lenses Package Insert`
  → https://alcon.widen.net/s/sdb7jb8jjj/w900252461-i-nelfilcon-a
- 실제 PDF: 위 공유 페이지가 서명된 프리뷰 URL(`previews.us-east-1.widencdn.net/...`, 만료 서명 포함)로 원본을 제공한다.
  프리시전원에서 통했던 `alcon.widen.net/content/<id>/original/<파일명>.pdf` 형태는 이 자산에서 **HTTP 404**다.
  **인용 URL은 공유 페이지 주소를 쓴다**(전문가 페이지가 실제로 거는 링크와 같음).
- 조회일: 2026-08-28 · HTTP 200 · 53,870 bytes · 2페이지 · `application/pdf`
- 방법: `curl -L` 다운로드 후 `pypdf` 텍스트 추출(텍스트 레이어 정상, 27,038자)
- 문서 식별 표기: `W900252461` · `This package insert is effective as of June 2020`

> **이 PI는 6개 제품을 함께 다룬다**: `FOCUS® DAILIES®`, `FOCUS® DAILIES® Toric`,
> `FOCUS® DAILIES® Progressives`, `DAILIES® AquaComfort Plus®`,
> `DAILIES® AquaComfort Plus® Toric`, `DAILIES® AquaComfort Plus® Multifocal`.
> **`Lens Properties`는 6개 공통(재질 수준)이고, BC·DIA·중심두께는 제품별로 다르다.** 아래에서 분리해 인용한다.

### S4-1. PRODUCT DESCRIPTION / Lens Material — 6개 공통 원문

```
The lenses are made of a material that is approximately 69% water and 31% nelfilcon
A polymer (polyvinyl alcohol partially acetalized with N-formylmethyl acrylamide).
• For VISITINT ® lenses the color additive copper phthalocyanine is added to the
lens material to create a light blue edge-to-edge color to make them easier to
see when handling.
```

제품명 줄 원문: `Soft (hydrophilic) One-Day Contact Lenses` — **하이드로겔(친수성) 렌즈**이며
문서 어디에도 `silicone`이 없다(프리시전원 PI가 `a silicone containing hydrogel`이라고 적은 것과 대조).

### S4-2. Lens Properties — 6개 공통 원문

```
Lens Properties
 Refractive Index (hydrated): 1.38
 Light Transmittance: Clear lenses ≥ 97%
 VISITINT ® lenses ≥ 92% (@610 nm)
 Oxygen Permeability (Dk): 26 x 10 -11 (cm2/sec) (ml O2/ml x mm Hg) at
 35 °C (Fatt, edge effect corrected)
 Water Content: 69% by weight in normal saline
 Approved Power Range -20.00 D to +20.00 D
```

> `Approved Power Range -20.00 D to +20.00 D`는 **재질 수준의 허가 범위**이고,
> 실제 판매 도수는 아래 `Lens Parameters Available`에 있다. 두 가지를 섞지 않는다.

### S4-3. Lens Parameters Available — 구면(본 검증 대상) 원문

```
• DAILIES® AquaComfort Plus® (nelfilcon A) Soft (hydrophilic) One-Day Contact
Lenses:
 • Base curve 8.7 mm
 • Diameter  14.0 mm
 • Powers Available -0.50 D to -6.00 D (0.25 D steps),
 -6.50 D to -15.00 D (0.50 D steps)
 +0.50 D to +6.00 D (0.25 D steps)
 +6.50 D to +8.00 D (0.50 D steps)
 • Center Thickness 0.10 mm at -3.00 D (varies with power)
 • Tint: Light blue handling tint
```

같은 문서의 다른 제품 값 — **구면 값과 혼동하지 않도록 함께 기록한다**:

| 제품 | Base curve | Diameter | Center Thickness |
| --- | --- | --- | --- |
| FOCUS® DAILIES® | `8.6 mm` | `13.8 mm` | `0.10 mm at -3.00 D` |
| FOCUS® DAILIES® Toric | `8.6 mm` | `14.2 mm` | `0.10 mm at -3.00 D (varies with power)` |
| FOCUS® DAILIES® Progressives | `8.6 mm` | `13.8 mm` | `0.11 mm at -3.00 D (varies with power)` |
| **DAILIES® AquaComfort Plus®(구면)** | **`8.7 mm`** | **`14.0 mm`** | **`0.10 mm at -3.00 D (varies with power)`** |
| DAILIES® AquaComfort Plus® Toric | `8.8 mm` | `14.4 mm` | `0.10 mm at -3.00 D (varies with power)` |
| DAILIES® AquaComfort Plus® Multifocal | `8.7 mm` | `14.0 mm` | `0.10 mm at -3.00 D (varies with power)` |

### S4-4. INDICATIONS — 구면 적응증 원문

```
FOCUS® DAILIES® and DAILIES® AquaComfort Plus® (nelfilcon A) One-Day Contact
Lenses are indicated for daily wear for the optical correction of refractive ametropia
(myopia and hyperopia) in not-aphakic persons with non-diseased eyes and up to
approximately 1.50 diopters (D) of astigmatism that does not interfere with visual
acuity.
```

`근시·원시용 구면`이라는 본 검증 대상 정의와 일치한다.

### S4-5. 교체주기와 착용방식 — 원문

```
DAILIES® (nelfilcon A) One-Day Contact Lenses are to be prescribed for single use,
daily disposable wear The lenses are not intended to be cleaned or disinfected and
should be discarded after a single use.
```

```
• Daily wear lenses are not indicated for overnight wear, and patients should be
instructed not to wear lenses while sleeping.
```

```
Studies have not [been conducted to show that these lenses are]
safe to wear during sleep. Therefore, patients should be advised to remove their
lenses while sleeping. Normal daily wear of lenses assumes a minimum of 6 hours
of non-lens wear per 24-hour period. Optimum individual wearing schedules will [vary]
```

(마지막 인용은 `WEARING SCHEDULE` 절 · 줄바꿈으로 끊긴 부분을 `[ ]`로 표시했다.)

### S4-6. UV — 문서 전체에 **0건**

`PI_nelfilcon_A.txt`(27,038자) 전문에서 `UV` **0건**, `ultraviolet` **0건**.
프리시전원 PI에 있던 `ACTIONS` 절의 UV 차단율 문단·UV 경고문이 이 문서에는 **존재하지 않는다.**

---

## S5. 대조에 쓴 다른 공식 자료

### S5-1. Alcon 미국 Professional Fitting and Information Guide

- 링크 경로: S3 페이지의 `DAILIES® AquaComfort PLUS® Contact Lenses Professional Fitting Guide`
  → https://alcon.widen.net/s/t6qcj5drpc/w900252465-fg-nelfa-dailies-us
- 조회일: 2026-08-28 · HTTP 200 · 3,109,201 bytes · 48페이지 · `W900252465` · 92,759자 추출

구면 파라미터 원문(7쪽):

```
DAILIES® AquaComfort Plus®  (nelfilcon A) One-Day Contact Lenses
• Base Curve: 8.7 mm
• Diameter: 14.0 mm
```

`LENS PROPERTIES` 원문:

```
• Oxygen Permeability (Dk): 26 x 10-11 (cm2/sec)(mL O2/mL x mm Hg)
measured at 35°C (Fatt, edge effect
corrected)
• Water Content: 69% by weight in normal saline
```

피팅 안내 원문:

```
DAILIES® (nelfilcon A) One-Day Contact Lenses are available in a single
base curve/diameter combination of 8.6/13.8 mm for FOCUS® DAILIES®
contact lenses and 8.7/14.0 mm for DAILIES® AquaComfort Plus® contact
lenses.
```

**S4에 없는 새로운 물성값은 없다.** UV **0건**, ultraviolet **0건**.
따라서 이 문서를 값의 1차 출처로 쓰지 않고 대조 근거로만 쓴다.

### S5-2. Alcon 국제(International) 전문가 페이지 — **흰색으로 지워진 UV 문구 발견**

- URL: https://www.myalcon.com/international/professional/contact-lenses/daily/dailies-aquacomfort-plus/
- 조회일: 2026-08-28 · HTTP 200
- 문서 식별 표기: `©2025 Alcon Inc. UKIE-DAP-2500001`

프리시전원과 마찬가지로 **파라미터 표가 텍스트가 아니라 이미지**다
(`DAILIES-AquaComfort-PLUS-Parameters-Table-Parameters-V2.png`,
`alt="DAILIES® AquaComfort® PLUS Table Parameters"`, 2236×901 PNG, 투명 배경).

이미지를 내려받아 판독한 결과:

| 라벨(국제 이미지) | 값 | S3-1(미국 HTML 표)과 비교 |
| --- | --- | --- |
| `MATERIAL` | `nelfilcon A` | 동일 |
| `CENTER THICKNESS (-3.00D,mm)` | `0.10` | 동일 |
| **`CORE WATER CONTENT`** | `69%` | **라벨이 다름** (미국은 `Water Content`) |
| `DIAMETER (mm)` | `14.0` | 동일 |
| `HANDLING TINT` | `VISITINT®` | 미국은 `Light Blue VISITINT®` |
| **`CORE MODULUS (MPa)`** | **`0.7`** | **미국은 `0.76`** |
| `Dk/t` | `26 @ -3.00D` | 동일 |
| `PACKAGING` | `5 pack (trials), 30-pack, 90-pack` | 미국은 `30‑ct., 90‑ct.` |
| `POWER RANGE` | `+0.50 to +6.00 … -6.50 to -15.00 (in 0.50D steps)` | 동일 |
| `BASE CURVE (mm)` | `8.7` | 동일 |
| `MOISTURIZING AGENTS` | `Unique Moisture System:` HPMC / PEG / PVA | 동일 |
| **UV** | **행 없음(아래 참조)** | 미국도 행 없음 |

**본 검증의 9개 필드 값은 두 지역이 모두 일치한다.** 어긋난 것은
함수율의 **라벨**(`Water Content` vs `CORE WATER CONTENT`)과 **탄성률**(`0.76` vs `0.7`)인데,
탄성률은 이 검증의 필드가 아니므로 값으로 싣지 않고 여기에만 기록한다.

#### 흰색으로 지워진 UV 문구 (값으로 쓰지 않음)

이미지 오른쪽 `PACKAGING` 셀 아래 영역에, 배경(투명)과 사실상 구분되지 않는
**순백색(RGB 255,255,255) 글자**로 다음 두 줄이 남아 있다:

```
UV BLOCKER*
Class 1 UV blocker (≥90% of UVA, ≥99% of UVB)
```

판단 근거와 결론:

- 같은 이미지의 **실제 본문 글자는 알콘 파랑(RGB 0,53,149)**이고, 이 두 줄만 흰색이다.
  이미지 배경은 투명이므로 흰 배경의 페이지 위에서는 **보이지 않는다.**
- 인용된 문자열이 **프리시전원(verofilcon A) 사양표의 UV 행과 한 글자도 다르지 않다**
  (`docs/verification/precision1/EVIDENCE.md` S4-1 참조). 템플릿 재사용 시 지워지지 않은 잔재로 보인다.
- 미국 전문가 페이지 HTML 표에는 UV 행이 **아예 없고**(S3-2),
  미국 PI(2쪽)·Fitting Guide(48쪽)·Patient Instruction Booklet(24쪽) 전문에서 `UV` **0건**이다.
- `nelfilcon A`는 PI가 `Soft (hydrophilic)`로 기술하는 하이드로겔이며 UV 흡수 단량체 언급이 없다
  (프리시전원 PI는 `lenses contain a benzotriazole UV-absorbing monomer`라고 명시했다).

**따라서 이 문구를 이 제품의 UV 값으로 쓰지 않는다.** 화면에 보이지도 않고,
같은 회사의 다른 제품 문구와 동일하며, 다른 어떤 공식 자료도 이 제품에 UV 차단을 말하지 않는다.
동시에 **`UV 없음`이라고 단정하지도 않는다.** 공식 자료가 UV를 말하지 않는다는 사실만 적는다.

### S5-3. Patient Instruction Booklet (참고)

- https://alcon.widen.net/s/cmhtnzbmzv/w900252462-pb-nelfilcon-a-us
- 조회일: 2026-08-28 · 474,481 bytes · 24페이지 · 38,046자
- 물성값 표기 없음(`69%`·`8.7`·`14.0`·`0.10`·`Dk` 모두 0건). UV **0건**.

### S5-4. 국제 페이지의 유통 국가 목록

`DAILIES® AquaComfort® PLUS Product Available in` 목록 원문:

```
Americas: Canada, Chile, Mexico, Peru, United States, LATAM
Europe / Middle East / Africa: Czech Republic, Finland, Germany, Italy, Poland, Portugal, Russia, Slovakia, Spain, Turkey, United Kingdom
Asia Pacific: Australia, India, Malaysia
```

**대한민국은 없다.** 다만 프리시전원 검증에서 확인했듯 이 목록은 자체 로컬 사이트를 가진 나라를 빼는 구조로 보이며
(프리시전원도 한국이 빠져 있었으나 한국 브랜드 사이트와 원장이 모두 존재했다),
**한국 유통 근거는 이 목록이 아니라 MFDS 원장(S1)이다.**
다만 이 제품은 프리시전원과 달리 **한국 로컬 페이지도 없다**는 점에서 목록의 누락을 상쇄할 근거가 하나 적다.

---

## 값 대조표 — 같은 값을 여러 공식 자료가 말하는지

| 항목 | 한국 공식 (S2) | 미국 전문가 페이지 (S3) | 국제 전문가 페이지 (S5-2, 이미지) | 미국 PI (S4) | 미국 FG (S5-1) |
| --- | --- | --- | --- | --- | --- |
| 재질명 | **페이지 없음** | `nelfilcon A` | `nelfilcon A` | `nelfilcon A`, `Soft (hydrophilic)` | `(nelfilcon A)` |
| BC | 없음 | `8.7` | `8.7` | `Base curve 8.7 mm` | `Base Curve: 8.7 mm` |
| DIA | 없음 | `14.0` | `14.0` | `Diameter  14.0 mm` | `Diameter: 14.0 mm` |
| 함수율 | 없음 | `Water Content 69%` | `CORE WATER CONTENT 69%` | `Water Content: 69% by weight in normal saline` | `Water Content: 69% by weight in normal saline` |
| Dk/t | 없음 | `26 @ ‑3.00D` | `26 @ -3.00D` | 없음 (대신 intrinsic `Dk 26 x 10-11`) | 없음 (대신 intrinsic `Dk`) |
| 중심두께 | 없음 | `0.10` (`‑3.00D, mm`) | `0.10` | `0.10 mm at -3.00 D (varies with power)` | 없음 |
| 교체주기 | 카테고리 등재조차 없음 | 표에 행 없음 | 표에 행 없음 | `single use, daily disposable wear` | — |
| UV | 없음 | **행 없음** | **행 없음**(흰색 잔재만, S5-2) | **0건** | **0건** |
| 허가번호 | 없음 | 해당 없음 | 해당 없음 | 해당 없음 | 해당 없음 |

**공식 출처끼리 값이 어긋나는 항목은 없다. `conflict` 상태 필드는 0건이다.**
다만 아래 세 가지는 반드시 함께 적는다.

1. **함수율 `69%`의 라벨이 지역마다 다르다.** 미국 전문가 표는 `Water Content`,
   국제 전문가 표 이미지는 `CORE WATER CONTENT`라고 부른다. 숫자는 같지만
   **무엇을 잰 값인지에 대한 설명이 다르다.** 데일리스 토탈원처럼 코어/표면 함수율이 따로 제시된 제품이 아니므로
   `69%` 하나만 값으로 쓰되, 라벨이 갈린다는 사실을 감추지 않는다.
   같은 표의 `Moisturizing Agents`(HPMC/PEG/PVA)는 습윤제 성분이지 함수율이 아니므로 합치지 않는다(S3-3).

2. **`26`이라는 숫자가 두 곳에 나오지만 서로 다른 물리량이다.**
   전문가 사양표의 `Dk/t 26 @ ‑3.00D`는 **산소 전달률(Dk/t)**이고,
   PI·FG의 `Oxygen Permeability (Dk): 26 x 10-11 … measured at 35 °C (Fatt, edge effect corrected)`는
   **재질 고유 산소 투과성(Dk)**이다. **숫자가 같은 것은 단위 자릿수에서 비롯된 일치이며 같은 값이 아니다.**
   `35 °C · Fatt · edge effect corrected`는 **Dk의 시험 조건이지 Dk/t의 조건이 아니다.**
   두 값을 섞지 않았고, Dk와 중심두께로 Dk/t를 역산하지도 않았다.
   **Dk/t의 시험 방법·온도는 어떤 공식 자료에도 없다.**

3. **포장 단위가 한국과 글로벌에서 다르다.** 글로벌 사양은 `5 pack (trials), 30‑ct., 90‑ct.`이지만
   MFDS 원장의 포장내수량은 `5`(29건)와 `30`(29건)뿐이고 **`90`이 없다**(S1-5).
   포장 단위는 이 검증의 필드가 아니므로 값으로 싣지 않았다.

---

## 확인하지 못한 것

1. **한국 표기 수치 일체와 한국 공식 제품 페이지 자체.** 알콘 코리아 사이트맵 66건에 이 제품이 없다(S2-1).
   프리시전원은 한국 브랜드 사이트에서 최소한 교체주기·자외선 등급·재질 계열을 얻을 수 있었지만,
   **이 제품은 한국 공식 자료에서 얻을 수 있는 값이 하나도 없다.** 파일럿 6제품 중 가장 극단적인 사례다.
2. **한국어 IFU.** 온라인 공개본을 찾지 못했다(S2-4). 알콘 공식 eIFU 포털은 로그인 인증이 필요하다.
   실물 포장 IFU 확보 경로는 별도 과제로 남는다.
3. **허가 `수허 09-217 호`의 현재 유효성(취하·취소 여부).** MFDS UDI 조회 응답에 상태 필드가 없고,
   공개된 품목허가 상세 원장 조회 경로를 찾지 못했다(S1-6).
4. **한국에서의 현재 판매 여부.** 원장에는 58건이 등록돼 있으나 한국알콘 소비자 사이트는 이 제품을 싣지 않는다.
   두 사실이 어긋나는 것은 아니지만(등록과 마케팅은 별개), 이 검증은 어느 쪽으로도 단정하지 않는다.
5. **Dk/t의 시험 방법·온도.** 알콘은 Dk/t에 시험도수(`@ ‑3.00D`)만 붙인다(위 대조표 2번).
6. **알콘의 `Alcon data on file, 2005`** 및 전문가 페이지가 인용하는 임상 문헌들.
   공개 원문을 확인하지 않았으며, 이들에 근거한 성능 문구(`Superior Tear Film Stability` 등)는
   광고성 문구이므로 물성값으로 옮기지 않았다.
