# 검증 근거 — 에어옵틱스 플러스 하이드라글라이드 (AIR OPTIX® plus HydraGlyde®)

검증일: 2026-08-28
대상: 근시·원시용 투명 구면, 월간(1달) 교체
(난시용 `AIR OPTIX plus HydraGlyde for Astigmatism`, 다초점 `Multifocal`,
그리고 같은 lotrafilcon B 계열의 `AIR OPTIX AQUA` · `AIR OPTIX NIGHT & DAY AQUA` · `AIR OPTIX COLORS`는 **모두 제외**)
제조사: Alcon · 한국 유통: 한국알콘(주)
재질: `lotrafilcon B` — 제조사 문서 표기로 `a fluoro-silicone containing hydrogel which is surface treated`

이 문서는 실제로 가져온 공식 자료의 **원문**만 담는다. 값의 해석·정규화는 하지 않는다.

가져온 출처와 상태:

| # | 출처 | URL | 상태 |
| --- | --- | --- | --- |
| S1 | MFDS 의료기기 UDI 표준코드 조회 | https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do | 200 · 조회 정상 |
| S2 | 한국알콘 소비자 사이트(사이트맵 전수·한달용 카테고리) | https://www.myalcon.com/kr/contact-lenses/monthly/ | 200 · **제품 미등재** |
| S3 | 한국어 IFU | — | **찾지 못함** |
| S4 | Alcon 미국 전문가용 공식 사양 | https://www.myalcon.com/professional/contact-lenses/monthly/air-optix-plus-hydraglyde/ | 200 · 404,166 bytes |
| S5 | Alcon 국제(International) 전문가 페이지 | https://www.myalcon.com/international/professional/contact-lenses/monthly/air-optix-plus-hydraglyde/ | 200 · 191,073 bytes |
| S6 | Alcon 미국 Package Insert (W900331823) | https://alcon.widen.net/content/ign6plnntd/original/W900331823-WPI-LOTFB-US.pdf | 200 · 579,729 bytes · 2쪽 |
| S7 | Alcon 미국 Professional Fitting and Information Guide (W900246931) | https://alcon.widen.net/content/by1ots1ivu/original/W900246931-PFIG-LOTFB-US.pdf | 200 · 1,019,472 bytes · 40쪽 |

> 이 제품의 특수성 세 가지.
>
> 1. **한국 공식 제품 페이지가 없다.** 한국알콘 소비자 사이트의 한달용 카테고리에는 워터렌즈(TOTAL30) 계열만 있다(S2).
>    유통 근거는 **MFDS 원장 단독**이며, 데일리스 아쿠아컴포트 플러스와 같은 구조다.
> 2. **한국 판매명은 `에어옵틱스`가 아니라 `에어렌즈 하이드라`다**(S1-3, MFDS 원장 원문).
>    워터렌즈(데일리스 토탈원)·아쿠아렌즈(데일리스 아쿠아컴포트 플러스)와 같은 한국알콘의 `○○렌즈` 작명 규칙이다.
> 3. **착용방식에서 미국 자료와 국제 자료가 서로 다른 문장을 인쇄한다.** 미국 전문가 사양표는
>    `Daily wear and up to 6 nights extended wear/monthly replacement`, 국제 전문가 사양표는 `Monthly replacement`뿐이다(S4-1 vs S5-2).
>    MFDS는 이 제품을 **`연속착용소프트콘택트렌즈` 3등급**으로 등록하고 있다(S1-3).
>    본 검증은 이 세 가지를 **교체주기와 분리해** 기록하며, 어느 것도 "자면서 껴도 된다"는 뜻으로 옮기지 않는다.

---

## S1. MFDS 의료기기 UDI 표준코드 조회 — 한국 유통·허가 식별

- URL: https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do
- 조회일: 2026-08-28
- 방법: `schStddCdLstView.do`를 먼저 GET해 세션 쿠키(`JSESSIONID`, `elevisor_for_j2ee_uid`)를 받은 뒤,
  화면의 `searchList()`가 실제로 쓰는 것과 같은 엔드포인트 `POST /msismext/udi/uif/selectStddCdLstAjax.do`를 같은 세션으로 호출했다.
  응답은 `{"dataList":[...]}`이고 총 건수는 `dataList[0].totCnt`에 들어 있다.
- **한글 조건은 파이썬 `urllib.parse.urlencode(..., encoding="utf-8")`로 인코딩했다.**
  Git Bash `curl`의 셸 인자로 한글을 넘기면 0건이 나온다(acuvue-vita EVIDENCE S1의 경고를 그대로 따랐다).
- 공통 조회 조건: `udiCd=` · `ediCd=` · `prdlNm=` · `sDate=` · `eDate=` 비움,
  `dateCancelChk=N`, `selRcprslryTrgtYn=`(전체)

### S1-1. 조회 조건별 건수 — 시도한 모든 표기

| # | `bplcNm` | `modelnm` | `itemPermitNo` | 조회 건수(`totCnt`) |
| --- | --- | --- | --- | --- |
| Q1 | `한국알콘` | (비움) | (비움) | **46,382** |
| Q2 | `한국알콘` | `AIR OPTIX plus HydraGlyde` | | **5,392** |
| Q3 | `한국알콘` | `AIR OPTIX` | | **5,591** |
| Q4 | `한국알콘` | `Air Optix` | | **9,464** |
| Q5 | `한국알콘` | `AirOptix` | | **0** |
| Q6 | `한국알콘` | `AIROPTIX` | | **0** |
| Q7 | `한국알콘` | `air optix` | | **0** |
| Q8 | `한국알콘` | `HydraGlyde` | | **5,392** |
| Q9 | `한국알콘` | `Hydraglyde` | | **0** |
| Q10 | `한국알콘` | `HYDRAGLYDE` | | **0** |
| Q11 | `한국알콘` | `hydraglyde` | | **0** |
| Q12 | `한국알콘` | `lotrafilcon` | | **0** |
| Q13 | `한국알콘` | `Lotrafilcon` | | **0** |
| Q14 | `한국알콘` | `LOTRAFILCON` | | **0** |
| Q15 | `한국알콘` | `OPTIX` | | **5,591** |
| Q16 | `한국알콘` | `Optix` | | **10,374** |
| Q17 | `한국알콘` | `에어옵틱스` | | **0** |
| Q18 | `한국알콘` | `에어렌즈` | | **0** |
| Q19 | `한국알콘` | `하이드라` | | **0** |
| Q20 | `한국알콘` | `AIR OPTIX AQUA` | | **65** |
| Q21 | `한국알콘` | `AIR OPTIX COLORS` | | **0** |
| Q22 | `한국알콘` | `AIR OPTIX Colors` | | **0** |
| Q23 | `한국알콘` | `AIR OPTIX plus HydraGlyde for Astigmatism` | | **4,831** |
| Q24 | `한국알콘` | `AIR OPTIX plus HydraGlyde Multifocal` | | **390** |
| Q25 | `한국알콘` | `plus HydraGlyde` | | **5,392** |
| Q26 | `한국알콘` | `SMART SHIELD` | | **0** |
| Q27 | `한국알콘` | `AIR` | | **5,591** |
| Q28 | `한국알콘` | `Air` | | **9,464** |
| Q29 | `한국알콘(주)` | `AIR OPTIX plus HydraGlyde` | | **5,392** |
| Q30 | (비움) | `AIR OPTIX plus HydraGlyde` | | **5,392** |
| Q31 | (비움) | (비움) | `수허 17-148 호` | **171** |

### S1-2. 검색 함정 — 다음 알콘 제품 검증에서 재사용할 것

**(1) 모델명 검색은 대소문자를 구분한다. 이 계열의 등록 모델명 앞머리는 전부 대문자 `AIR OPTIX`다.**
`AirOptix` · `AIROPTIX` · `air optix`는 모두 **0건**이다.
프리시전원은 파스칼 `Precision1`, 데일리스 아쿠아컴포트 플러스는 대문자 `DAILIES`가 정답이었다. 제품군마다 규칙이 다르다.

**(2) 대문자 `AIR OPTIX`(5,591건)와 파스칼 `Air Optix`(9,464건)는 서로 겹치지 않는 다른 집합이다.**
파스칼 `Air Optix` 9,464건은 **전부** 구형 난시용 `Air Optix for Astigmatism`(`수허 06-908 호`) 하나이며,
본 검증 대상인 구면은 여기에 **들어 있지 않다.** `Air Optix`로 검색해 나온 9,464건을 구면으로 오인하면 전부 난시용이다.

**(3) `HydraGlyde`는 대소문자가 정확히 이 형태여야 한다.** `Hydraglyde` · `HYDRAGLYDE` · `hydraglyde` 모두 0건이다.
(같은 알콘의 국제 전문가 페이지 각주는 본문에서 `Hydraglyde®`로도 적지만, 원장 등록 표기는 `HydraGlyde`다.)

**(4) 재질명(`lotrafilcon` / `Lotrafilcon` / `LOTRAFILCON`)으로는 조회되지 않는다.**
프리시전원의 `Verofilcon`, 아쿠아컴포트의 `nelfilcon`과 같다. 등록 모델명·업체 제품 명칭 어디에도 재질명이 없다.

**(5) 한글 `에어옵틱스`·`에어렌즈`·`하이드라`는 모델명 검색으로 0건이다.**
한글 판매명은 `prdtNmCn`(업체 제품 명칭) 쪽에만 있고 이 화면의 검색 폼에는 `prdtNmCn` 입력란이 없다.

**(6) 업체명 표기는 `한국알콘` · `한국알콘(주)` 둘 다 같은 결과를 낸다**(Q2 = Q29 = 5,392건).
업체명을 아예 비워도 이 모델명은 한국알콘 등록분만 나온다(Q30).

### S1-3. Q2(`modelnm=AIR OPTIX plus HydraGlyde`, 5,392건) 전수 집계 — 구면 / 난시 / 다초점 분리

5,392행을 500건 × 11페이지로 모두 가져와 집계한 결과 distinct **3건**:

```
한국알콘(주) | 수입업 | 연속착용소프트콘택트렌즈 | 3 | 수허 20-111 호 | AIR OPTIX plus HydraGlyde for Astigmatism | 에어렌즈 하이드라 난시용 SMART SHIELD   ## 4831
한국알콘(주) | 수입업 | 연속착용소프트콘택트렌즈 | 3 | 수허 20-72 호  | AIR OPTIX plus HydraGlyde Multifocal      | 에어렌즈 하이드라 멀티포컬 SMART SHIELD ## 390
한국알콘(주) | 수입업 | 연속착용소프트콘택트렌즈 | 3 | 수허 17-148 호 | AIR OPTIX plus HydraGlyde                 | 에어렌즈 하이드라 SMART SHIELD          ## 171
```

형식: `업체명 | 업체구분 | 소분류 품목 명칭 | 등급 | 품목허가번호 | 모델명 | 업체 제품 명칭 ## 행 수`

**구면·난시용·다초점의 허가번호가 모두 다르다.** 본 검증 대상(구면)은 `수허 17-148 호` 하나뿐이다.

**한글 판매명이 원장 원문으로 확인된다: 구면 `에어렌즈 하이드라 SMART SHIELD`.**
한국에서의 판매명은 `에어옵틱스 플러스 하이드라글라이드`가 아니라 **`에어렌즈 하이드라`** 계열이다(REVIEW 참조).

**소분류 품목 명칭이 `연속착용소프트콘택트렌즈`이고 등급이 3이다.**
같은 파일럿의 알콘 원데이 제품(프리시전원·아쿠아렌즈)이 `매일착용(소프트)콘택트렌즈` 2등급인 것과 다르다.
이 사실은 착용방식 항목에서 별도로 다룬다(S4-1 · S5-2 · S6-4와 함께 읽을 것).

### S1-4. Q3(`modelnm=AIR OPTIX`, 5,591건) 전수 집계 — 같은 접두어를 쓰는 다른 제품

```
한국알콘(주) | 수입업 | 연속착용소프트콘택트렌즈 | 3 | 수허 20-111 호 | AIR OPTIX plus HydraGlyde for Astigmatism | 에어렌즈 하이드라 난시용 SMART SHIELD   ## 4831
한국알콘(주) | 수입업 | 연속착용소프트콘택트렌즈 | 3 | 수허 20-72 호  | AIR OPTIX plus HydraGlyde Multifocal      | 에어렌즈 하이드라 멀티포컬 SMART SHIELD ## 390
한국알콘(주) | 수입업 | 연속착용소프트콘택트렌즈 | 3 | 수허 17-148 호 | AIR OPTIX plus HydraGlyde                 | 에어렌즈 하이드라 SMART SHIELD          ## 171
한국알콘(주) | 수입업 | 연속착용소프트콘택트렌즈 | 3 | 수허 10-857 호 | AIR OPTIX Night & Day AQUA                | 에어렌즈 나이트앤데이 SMART SHIELD      ## 130
한국알콘(주) | 수입업 | 연속착용소프트콘택트렌즈 | 3 | 수허 11-81 호  | AIR OPTIX AQUA Multifocal                 | 에어렌즈 멀티포컬 SMART SHIELD          ## 65
한국알콘(주) | 수입업 | 치료용콘택트렌즈       | 3 | 수허 11-365 호 | AIR OPTIX Night & Day AQUA                | 에어렌즈 나이트앤데이 안과용            ## 4
```

- **`AIR OPTIX NIGHT & DAY AQUA`는 별개 허가다**(`수허 10-857 호`). 같은 모델명이 **치료용콘택트렌즈**로도
  따로 등록돼 있다(`수허 11-365 호`, 4건). 두 번호 모두 본 검증 대상이 아니다.
- **`AIR OPTIX COLORS`는 한국 원장에 없다**(Q21·Q22 모두 0건).
- **구면 `AIR OPTIX AQUA`(하이드라글라이드가 아닌 구형 제품)도 한국 원장에 없다.**
  `AIR OPTIX AQUA`(Q20) 65건은 전부 `AIR OPTIX AQUA Multifocal`이다.
  미국 Package Insert(S6)는 `AIR OPTIX AQUA` 구면을 함께 다루지만 **그 구면은 한국에 등록돼 있지 않다.**
  두 제품의 파라미터가 거의 같으므로(모두 BC 8.6 / DIA 14.2 / CT 0.08) 문서를 읽을 때 반드시 분리해야 한다.

### S1-5. Q4(`modelnm=Air Optix`, 9,464건) 전수 집계 — 파스칼 표기는 전부 구형 난시용

```
한국알콘(주) | 수입업 | 연속착용 소프트 콘택트렌즈 | 3 | 수허 06-908 호 | Air Optix for Astigmatism | 에어렌즈 난시용 SMART SHIELD ## 9464
```

distinct **1건**이다. 소분류 품목 명칭 표기가 `연속착용 소프트 콘택트렌즈`(공백 있음)로,
S1-3·S1-4의 `연속착용소프트콘택트렌즈`(공백 없음)와 다르다. 같은 품목을 가리키는 표기 흔들림이며 원문 그대로 기록한다.

### S1-6. Q31(`itemPermitNo=수허 17-148 호`, 업체명 비움) 전수 집계

- 조회 건수 **171건**, distinct 신원 **1건**:
  `한국알콘(주) | 수입업 | 연속착용소프트콘택트렌즈 | 3 | 수허 17-148 호 | AIR OPTIX plus HydraGlyde | 에어렌즈 하이드라 SMART SHIELD`
- distinct UDI-DI 코드 **171건** (중복 없음)
- 포장내수량 분포: `6` 103건 · `1` 68건
- UDI-DI 예시(원문): `00846566917792`, `00846566917808`, `00846566917815`, `00846566917822`, `00846566917839`
- 코드체계: `GS1` · 요양급여 대상 치료재료 여부: `N` · 사용자 멸균 `N` · 키트 `N` · 요양급여코드(`rcper`) 없음

즉 업체명+모델명 기준 조회의 구면 부분집합(171건)과 허가번호 단독 조회(171건)가 **완전히 같은 집합**이며,
171건 전부가 단일 신원으로 `수허 17-148 호`에 연결된다.

**허가번호 원문: `수허 17-148 호`** (`수허`, 공백, `17-148`, 공백, `호`)

### S1-7. 확인하지 못한 것 — 허가의 현재 유효성

UDI 표준코드 조회 응답 필드는
`bplcNm · companyType · prdlNm · grade · itemPermitNo · modelnm · prdtNmCn · cdSystmSvlNm · udidicd · mummPunitQy · rcprslryTrgtYn · rcper · userStrlzYn · kitYn`뿐이고
**허가 취하·취소 여부를 나타내는 상태 필드가 없다.**
따라서 이 검증이 말할 수 있는 것은 **"2026-08-28 시점 MFDS UDI 표준코드 원장에 한국알콘(주) 명의로
`수허 17-148 호` 구면 등록 171건이 조회된다"**까지다.
(데일리스 아쿠아컴포트 플러스 검증 S1-6과 같은 한계다.)

---

## S2. 한국 공식 자료 — **제품 페이지가 없다** (사이트맵 전수 확인)

### S2-1. 알콘 코리아 사이트맵 전수 조회

- URL: https://www.myalcon.com/kr/sitemap.xml · 조회일 2026-08-28 · HTTP 200 · 11,579 bytes
- `<loc>` 항목 **66건**을 모두 나열해 확인했다. 콘택트렌즈 제품 상세 페이지는 다음 **8건뿐**이다.

```
https://www.myalcon.com/kr/contact-lenses/daily/precision1/
https://www.myalcon.com/kr/contact-lenses/daily/precision1-for-astigmatism/
https://www.myalcon.com/kr/contact-lenses/daily/dailies-total1/
https://www.myalcon.com/kr/contact-lenses/daily/dailies-total1-multifocal/
https://www.myalcon.com/kr/contact-lenses/daily/dailies-total1-for-astigmatism/
https://www.myalcon.com/kr/contact-lenses/monthly/total30/
https://www.myalcon.com/kr/contact-lenses/contact-lens-solutions/opti-free-puremoist/
https://www.myalcon.com/kr/contact-lenses/contact-lens-solutions/aosept-plus/
```

**`air-optix` · `airoptix` · `hydraglyde` 문자열이 사이트맵 66건 어디에도 없다.**
한달용 제품 상세 페이지는 `total30` 하나뿐이다.

### S2-2. 한국알콘 한달용 카테고리 페이지 — 등재된 제품 원문

- URL: https://www.myalcon.com/kr/contact-lenses/monthly/ · 조회일 2026-08-28 · HTTP 200 · 189,928 bytes

원문 발췌:

```
한달용 콘택트렌즈   한달용 렌즈는 한달동안 편안하게 착용할 수 있는 정기교체형 콘택트렌즈입니다.
한 달 후에는 기존 렌즈를 버리고 새 렌즈로 교체하면 됩니다. 근시, 난시를 위한 제품이 준비되어 있습니다.
워터렌즈 한달용 한달동안 깨끗, 편안, 선명 워터렌즈 한달용은 한달동안 촉촉한 편안함을 제공합니다. 더 알아보기
모든 렌즈 워터렌즈 한달용     워터쿠션 같은 편안함이 한달이나? 더 알아보기
워터렌즈 한달용 멀티포컬 (다초점)     워터쿠션 같은 편안함이 한달이나? 더 알아보기
난시용 렌즈 워터렌즈 한달용 멀티포컬 (다초점)     워터쿠션 같은 편안함이 한달이나? 더 알아보기
```

```
한달용 콘택트렌즈는 최대 한 달(30일)동안 재사용할 수 있는 콘택트렌즈입니다. 사용 기간이 지나면 새 렌즈로 반드시 교체해야 합니다.
```

- 한달용 카테고리에 실린 알콘 제품은 **워터렌즈 한달용(TOTAL30) 계열 세 가지뿐**이다.
  에어렌즈·에어옵틱스·AIR OPTIX 계열은 **0건**이다.
- 이 페이지의 `한 달(30일)` 문장은 **한달용 렌즈 일반에 대한 설명**이며 본 제품을 가리키지 않는다.
  따라서 이 제품의 교체주기 근거로 쓰지 않았다.

### S2-3. 한국 공식 자료에 **없는** 것 (직접 확인)

`www.myalcon.com/kr/contact-lenses/` · `www.myalcon.com/kr/contact-lenses/monthly/` · `total.myalcon.com/kr/`
세 페이지의 HTML을 태그 제거 후 전문 검색한 결과:

- `AIR` · `Air` · `에어` · `OPTIX` · `옵틱` · `HydraGlyde` · `하이드라` · `lotrafilcon` **전부 0건**

시도했으나 존재하지 않은 URL(전부 HTTP 404):

| URL | 결과 |
| --- | --- |
| `https://www.myalcon.com/kr/contact-lenses/monthly/air-optix-plus-hydraglyde/` | **404** |
| `https://www.myalcon.com/kr/contact-lenses/monthly/air-optix/` | **404** |
| `https://www.myalcon.com/kr/contact-lenses/monthly/airoptix/` | **404** |
| `https://www.myalcon.com/kr/contact-lenses/air-lens/` 계열 | **404** |
| `https://airoptix.myalcon.com/kr/` (프리시전원식 브랜드 서브도메인) | **404** |
| `https://www.myalcon.com/kr/professional/contact-lenses/` | **404** (한국 전문가 사이트에 콘택트렌즈 섹션 자체가 없다) |

참고: 업무 지시가 명시한 `total.myalcon.com/kr`은 HTTP 200이지만 **워터렌즈(TOTAL30) 전용 사이트**이며
AIR OPTIX 관련 문자열이 0건이다.

**결론: 2026-08-28 시점에 이 제품의 한국 공식 소비자 페이지는 존재하지 않는다.**
한국 유통 근거는 **MFDS 원장 단독**이다(S1).

---

## S3. 한국어 IFU — 찾지 못함

| 경로 | 결과 |
| --- | --- |
| `https://www.myalcon.com/kr/professional/contact-lenses/` | **HTTP 404** |
| `https://ifu.alcon.com/` (알콘 공식 eIFU 포털) | HTTP 200이나 백엔드 `https://api-public.qarad.eifu.online/api/v1/manufacturers` 호출이 `{"title":"Validation failed","status":400,"code":"error.validation.referer"}` — **직접 접근 불가.** 프리시전원 검증(2026-08-28)에서는 같은 포털이 `USERNAME_PASSWORD` 인증을 요구했다 |
| 한국알콘 사이트 내 PDF 링크 | 사이트맵 66건에 이 제품 관련 문서 **0건** |

**2026-08-28 시점에 온라인으로 공개된 한국어 IFU를 찾지 못했다.**
따라서 허가번호의 유일한 근거는 MFDS UDI(S1)이고, 물성값의 유일한 근거는 글로벌 공식 자료(S4~S7)다.

---

## S4. Alcon 미국 전문가용 공식 사양

- URL: https://www.myalcon.com/professional/contact-lenses/monthly/air-optix-plus-hydraglyde/
- 조회일: 2026-08-28 · HTTP 200 · 404,166 bytes
- 방법: gstack 헤드리스 브라우저로 렌더링한 뒤 `table` 요소의 셀별 `innerText`를 그대로 추출(라벨·값 귀속 확인).
  같은 페이지를 `curl`로도 받아 HTML 원본의 라벨 표기를 대조했다.
- 문서 식별 표기: 페이지 하단 `©2022 Alcon Inc. US-AHG-2100026`
- 표 제목(화면): `AIR OPTIX® PLUS HYDRAGLYDE®`

### S4-1. 사양표 — 셀 단위 원문 그대로

```
MATERIAL
lotrafilcon B

CENTER THICKNESS (3.00D, mm)
0.08

WATER CONTENT
33%

DIAMETER (mm)
14.2

HANDLING TINT
Light blue VISITINT®

SURFACE
SmartShield® Technology

DK/T
138 @ ‑3.00D

WEAR/REPLACEMENT SCHEDULE
Daily wear and up to 6 nights extended wear/monthly replacement

POWER RANGE (diopter)
+6.00D to ‑8.00D (in 0.25D steps), +6.50D to +8.00D & ‑8.50D to ‑12.00D (in 0.50D steps)

BASE CURVE (mm)
8.6

Base curve optimization is influenced by:
Lens diameter
Modulus
Other material characteristics

RECOMMENDED LENS CARE:
OPTI‑FREE® Puremoist® Multi‑Purpose Disinfecting Solution or CLEAR CARE® PLUS Cleaning & Disinfection Solution
```

### S4-2. 표기상 반드시 함께 적어야 할 세 가지

**(1) 라벨은 화면에서 대문자로 보이지만 HTML 원본은 제목 형식(Title Case)이다.**
CSS `text-transform`의 결과다. HTML 원본 표기는 다음과 같다.

```html
<div class="label">Material</div><div class="body">lotrafilcon B</div>
<div class="label">Center Thickness <span class="unit">(3.00D, mm)</span></div><div class="body">0.08</div>
<div class="label">Water Content</div><div class="body">33%</div>
<div class="label">Dk/t</div><div class="body">138 @ ‑3.00D</div>
<div class="label">Wear/Replacement Schedule</div><div class="body">Daily wear and up to 6 nights extended wear/monthly replacement</div>
<div class="label">Base Curve <span class="unit">(mm)</span></div><div class="body">8.6</div>
```

**(2) 중심두께 라벨에 마이너스 부호가 빠져 있다.** 이 페이지는 `Center Thickness (3.00D, mm)`로 인쇄한다.
국제 페이지(S5-2)와 Package Insert(S6-2)는 같은 조건을 `-3.00D` / `@ -3.00 D`로 적는다.
**부호 없는 `3.00D`는 이 페이지의 인쇄 오류로 보이지만, 원문은 원문대로 기록한다.**

**(3) `Dk/t 138 @ ‑3.00D`의 하이픈은 일반 하이픈(U+002D)이 아니라 non-breaking hyphen(U+2011)이다.**
`Power Range`의 마이너스 부호들도 같다. 문자열 검색 시 재현되지 않을 수 있다.

### S4-3. 이 표에 **없는** 것

- **UV 차단 항목이 없다.** 페이지 전문에서 `UV` · `ultraviolet` **0건**이다(S8 참조).
- **Dk/t 시험 방법·온도가 없다.** 표기는 시험도수(`@ ‑3.00D`)뿐이고, 측정법·boundary/edge 보정 여부·측정 온도가 어디에도 없다.
  프리시전원(`Dk/t 100 @ −3.00D`)과 완전히 같은 방식의 표기다.
- **모듈러스(Modulus) 수치가 없다.** `Base curve optimization is influenced by:` 목록에 단어로만 등장한다.

---

## S5. Alcon 국제(International) 전문가 페이지 — 지역 간 대조

- URL: https://www.myalcon.com/international/professional/contact-lenses/monthly/air-optix-plus-hydraglyde/
- 조회일: 2026-08-28 · HTTP 200 · 191,073 bytes
- 문서 식별 표기: `©2025 Alcon Inc. UKIE-AHG-2500001`
- 페이지 제목(`<title>`): `Air Optix Plus Hydraglyde Parameters and Indications | Alcon Global`

### S5-1. 텍스트로 확인된 원문

```
AIR OPTIX ® plus HydraGlyde ®
Replacement Frequency: monthly      Indications: myopia, hyperopia
```

```
AIR OPTIX ® plus HydraGlyde ® Product Available in
Americas Argentina Brazil Canada Chile Mexico Peru United States LATAM
Europe / Middle East / Africa Austria Belgium Czech Republic Denmark Finland France Germany Greece Italy Netherlands Norway Poland Portugal Russia Slovakia Spain Sweden Switzerland Turkey United Kingdom
Asia Pacific Australia India Malaysia
```

**이 목록에 대한민국은 없다.** 프리시전원과 같은 구조이며(자체 로컬 사이트를 가진 나라를 빼는 것으로 보인다),
한국 유통 근거는 이 목록이 아니라 **MFDS 원장(S1)**이다.

### S5-2. 파라미터 표는 텍스트가 아니라 이미지다 — 판독 결과

- 이미지: `https://www.myalcon.com/international/sites/g/files/rbvwei2661/files/AIR-OPTIX-plus-HydraGlyde-Table-Parameters-R.png`
- `alt="AIR OPTIX® plus HydraGlyde® Table Parameters"` · 2301×929 PNG · 163,856 bytes · HTTP 200
- 이미지를 내려받아 판독한 결과:

```
MATERIAL                          lotrafilcon B
CENTER THICKNESS (-3.00D,mm)      0.08
CORE WATER CONTENT                33%
DIAMETER (mm)                     14.2
HANDLING TINT                     Light blue VISITINT®
SURFACE                           SmartShield® Technology
Dk/t                              138 @ -3.00D
WEAR/REPLACEMENT SCHEDULE         Monthly replacement
POWER RANGE (Diopter)             +6.00D to -8.00D (in 0.25D steps), +6.50D to +8.00D -8.50D to -12.00D (in 0.50D steps)
RECOMMENDED LENS CARE:            OPTI-FREE® PureMoist® Multi-Purpose Disinfecting Solution or AOSEPT® PLUS with HydraGlyde® Cleaning & Disinfection Solution
BASE CURVE (mm)                   8.6
                                  Base curve optimization is influenced by:
                                  • Lens diameter
                                  • Modulus
                                  • Other material characteristics
```

표 아래 각주 원문:

```
No refit required for your AIR OPTIX® AQUA patients when upgrading them to AIR OPTIX® plus Hydraglyde®.
```

> 이 값들은 **이미지 판독**이므로 본 검증에서는 S4(텍스트 원문)를 1차 출처로 쓰고,
> S5는 지역 간 대조 근거로 사용한다.

### S5-3. 미국 표와 국제 표가 **다른 세 곳**

| 항목 | 미국 전문가 페이지 (S4-1) | 국제 전문가 페이지 (S5-2) | 성격 |
| --- | --- | --- | --- |
| 착용/교체 | `Daily wear and up to 6 nights extended wear/monthly replacement` | `Monthly replacement` | **문장이 다르다.** 국제 표에는 연속착용 문구가 없다 |
| 함수율 라벨 | `Water Content 33%` | `CORE WATER CONTENT 33%` | 숫자는 같고 **라벨이 다르다** |
| 중심두께 조건 | `Center Thickness (3.00D, mm)` (마이너스 없음) | `CENTER THICKNESS (-3.00D,mm)` | 같은 조건의 **표기 차이** |
| 관리 용액 | `CLEAR CARE® PLUS` | `AOSEPT® PLUS with HydraGlyde®` | 지역별 제품명 |

**BC 8.6 · DIA 14.2 · 재질 `lotrafilcon B` · Dk/t `138 @ -3.00D` · 중심두께 `0.08` · 함수율 `33%`는 두 표가 완전히 같다.**

---

## S6. Alcon 미국 Package Insert (PI) — 시험 조건이 적힌 유일한 문서

- 링크 경로: S4 페이지의 제품 문서 링크 → https://alcon.widen.net/s/h9pxc7fv8v/w900331823-wpi-lotfb-us
- 실제 PDF: https://alcon.widen.net/content/ign6plnntd/original/W900331823-WPI-LOTFB-US.pdf
- 조회일: 2026-08-28 · HTTP 200 · 579,729 bytes · 2페이지 · `application/pdf`
- 방법: `curl -L` 다운로드 후 `pypdf` 텍스트 추출(텍스트 레이어 정상, 73,743자)
- 문서 식별 표기: `W900331823` · `W900331823-1220` · `Date of preparation: December 2020` · `© 2020 Alcon Inc.`
- 문서 제목 원문:

```
AIR OPTIX™ AQUA, AIR OPTIX™ plus HydraGlyde™, AIR OPTIX™ for Astigmatism, AIR OPTIX™
plus HydraGlyde™ for Astigmatism, AIR OPTIX™ AQUA Multifocal, AIR OPTIX™ plus
HydraGlyde™ Multifocal (lotrafilcon B) Soft Contact Lenses
IMPORTANT: This package insert is effective as of December 2020 and applicable to the lotrafilcon B contact lenses described below.
```

> **하나의 문서가 6개 제품을 함께 다룬다.** 구면만 뽑아 쓰려면 아래 S6-2의 제품별 소제목을 반드시 따라가야 한다.
> 특히 `AIR OPTIX™ AQUA` 구면은 파라미터가 거의 같지만 **한국에 등록돼 있지 않은 별개 제품**이다(S1-4).

### S6-1. PRODUCT DESCRIPTION / Lens Properties 원문

```
AIR OPTIX™ AQUA, AIR OPTIX™ plus HydraGlyde™, AIR OPTIX™ for
Astigmatism, AIR OPTIX™ plus HydraGlyde™ for Astigmatism, AIR OPTIX™
AQUA Multifocal, and AIR OPTIX™ plus HydraGlyde™ Multifocal (lotrafilcon B)
soft contact lenses are made of a lens material that is approximately 33% water and
67% lotrafilcon B, a fluoro-silicone containing hydrogel which is surface treated.
Lenses contain the color additive copper phthalocyanine, a light blue handling tint, to
make them easier to see when handling.
• Lens Properties:
 o Refractive Index (hydrated): 1.42
 o Light Transmittance: ≥ 96% (@ 610 nm, -1.00 D)
 o Oxygen Permeability (Dk): 110 x 10-11 (cm2/sec) (ml O2 /ml x mm Hg),
measured at 35 °C (intrinsic Dk-Coulometric method)
 o Water Content: 33% by weight in normal saline
• Lens Parameters
 o Diameter Range: 13.0 to 15.0 mm
 o Power Range: -20.00 to +20.00 D
 o Base Curve Range: 8.0 to 9.2 mm
```

> `Diameter Range` · `Base Curve Range` · `Power Range`는 **재질 수준의 허용 범위**이고,
> 실제 판매되는 렌즈의 값은 아래 `Lens Parameters Available`에 있다. 두 가지를 섞지 않는다.

### S6-2. Lens Parameters Available — 제품별 분리 원문

```
• Lens Parameters Available1
 AIR OPTIX™ AQUA contact lenses (spherical):
 o Chord Diameter: 14.2 mm
 o Center Thickness: 0.08 mm @ -3.00 D (varies with power)
 o Base Curve: 8.6 mm
 o Powers:
  Minus: -0.25 to -8.00 D (0.25 D steps); -8.50 D to -10.00 D (0.50 D steps)
  Plus: +0.25 to +6.00 D (0.25 D steps)

 AIR OPTIX™ plus HydraGlyde™ contact lenses (spherical):
 o Chord Diameter: 14.2 mm
 o Center Thickness: 0.08 mm @ -3.00 D (varies with power)
 o Base Curve: 8.6 mm
 o Powers:
  Minus: -0.25 to -8.00 D in 0.25 D steps; -8.50 to -12.00 D in 0.50 D steps
  Plus: +0.25 to +6.00 D (0.25 D steps); +6.50 to +8.00 D (0.50 D steps)

 AIR OPTIX™ for Astigmatism and AIR OPTIX™ plus HydraGlyde™ for
Astigmatism contact lenses (toric):
 o Chord Diameter: 14.5 mm
 o Center Thickness: 0.102 mm @ -3.00 D (varies with power)
 o Base Curve: 8.7 mm

 AIR OPTIX™ AQUA Multifocal and AIR OPTIX™ plus HydraGlyde™ Multifocal
contact lenses:
 o Chord Diameter: 14.2 mm
 o Center Thickness:  0.08 mm @ -3.00 D (varies with power)
 o Base Curve: 8.6 mm
```

각주 원문: `1 Check for actual product availability, which may change over time.`

**난시용은 직경·중심두께·BC가 모두 다르다.** 본 검증 대상은 구면(spherical) 값만 쓴다.
다초점은 구면과 값이 같지만 **별개 허가**(`수허 20-72 호`)이므로 분리해 둔다.

### S6-3. INDICATIONS — 적응증 원문 (구면)

```
AIR OPTIX AQUA™ and AIR OPTIX™ plus HydraGlyde™ (lotrafilcon B) spherical
soft contact lenses are indicated for the optical correction of refractive ametropia
(myopia and hyperopia) in phakic or aphakic persons with non-diseased eyes with
up to approximately 1.50 diopters (D) of astigmatism that does not interfere with
visual acuity.
```

`근시·원시용 구면`이라는 본 검증 대상 정의와 일치한다.

### S6-4. 착용방식 — 원문 (교체주기와 **분리해** 기록)

적응증 절 바로 뒤 문장:

```
The lenses may be prescribed for daily wear or extended wear for up to 6 nights of
continuous wear with removal for disposal, or cleaning and disinfection (chemical,
not heat) prior to reinsertion, as recommended by the eye care professional.
```

`LENS WEAR AND REPLACEMENT SCHEDULES` 절:

```
The wearing and replacement schedule should be determined by an eye care
professional based on the patient's individual needs and physiological conditions.
The eye care professional may recommend daily wear only or extended wear periods
up to 6 nights. Not everyone can reach the maximum wear time of 6 continuous
nights.
```

```
Extended Wear (greater than 24 hours, including while asleep):
• The eye care professional should establish an extended wear period up to 6
continuous nights that is appropriate for each patient. Once the lens is removed,
the patient's eyes should have a rest period with no lens wear of overnight or
longer, as recommended by the eye care professional.
• It is suggested that new contact lens wearers first be evaluated on a daily
wear schedule. If the patient is judged to be an acceptable extended wear
candidate, the eye care professional may determine an extended wear
schedule based upon the response of the patient.
```

같은 문서 `WARNINGS` 절의 대응 경고 원문:

```
• The risk of microbial keratitis (a serious eye infection) has been shown to be
greater among users of extended wear lenses than among users of daily wear
lenses.2 The risk increases with the number of consecutive days that the lenses
are worn between removals, even with the first overnight use.
```

```
• Smoking increases the risk of corneal ulcers for contact lens users, especially
when lenses are worn overnight or while sleeping.2,3
```

> **이 문서의 연속착용 표기는 처방권자의 판단을 전제로 한 적응증이며, 착용자에 대한 수면 중 착용 허가가 아니다.**
> 문서 자신이 `The eye care professional should establish…`, `If the patient is judged to be an acceptable extended wear candidate…`로
> 조건을 걸고, 같은 문서의 경고 절이 **연속착용 사용자의 미생물 각막염 위험이 매일착용 사용자보다 높다**고 명시한다.
> 본 검증은 이 문장들을 교체주기 값에 합치지 않고 `caution`에 그대로 옮겼다.

### S6-5. Lens Replacement — 교체주기 원문

```
Lens Replacement
The replacement schedule is determined by the eye care professional based on the
patient's individual needs and physiological conditions. Lenses should be discarded
and replaced with a new pair each month, or more often, if recommended by the eye
care professional.
```

### S6-6. 이 문서에 **없는** 것

- **UV 차단에 관한 서술이 전혀 없다.** 문서 전문(73,743자)에서 `UV` · `ultraviolet` **0건**이다.
  프리시전원 PI가 `ACTIONS` 절에 UV 차단율을 명시한 것과 대조된다.
- **Dk/t 값이 없다.** 이 문서가 적는 것은 재질의 고유 `Dk 110 x 10-11 … measured at 35 °C (intrinsic Dk-Coulometric method)`이며,
  전문가 사양표의 `Dk/t 138`과는 **다른 물리량**이다. 본 검증은 둘을 섞지 않았고 두께로 역산하지도 않았다.

---

## S7. Alcon 미국 Professional Fitting and Information Guide (참고)

- 링크 경로: S4 페이지의 제품 문서 링크 → https://alcon.widen.net/s/vtrl6jqhns/w900246931-pfig-lotfb-us
- 실제 PDF: https://alcon.widen.net/content/by1ots1ivu/original/W900246931-PFIG-LOTFB-US.pdf
- 조회일: 2026-08-28 · HTTP 200 · 1,019,472 bytes · 40페이지
- 문서 식별 표기: `W900246931-0520` · `Date of preparation: March 2020` · `© 2020 Alcon Inc.`
- 표지 원문:

```
Professional Fitting and Information Guide
AIR OPTIX® AQUA, AIR OPTIX® plus HydraGlyde®,
AIR OPTIX® for Astigmatism,
AIR OPTIX® plus HydraGlyde® for Astigmatism,
AIR OPTIX® AQUA Multifocal,
AIR OPTIX® plus HydraGlyde® Multifocal (lotrafilcon B)
Soft Contact Lenses
For Daily Wear and Extended Wear up to 6 Nights
```

물성 관련 원문은 S6과 같은 값을 반복한다. **S6에 없는 새로운 물성값은 없다.**
다만 구면 중심두께의 문장 구조가 다르다.

```
 AIR OPTIX® plus HydraGlyde® contact lenses
  • Chord Diameter:  14.2 mm
  • Center Thickness:  Varies with power (0.08 mm @ -3.00 D)
  • Base Curve:  8.6 mm
```

(Package Insert는 `Center Thickness: 0.08 mm @ -3.00 D (varies with power)`, 이 문서는 어순이 반대다. 값과 조건은 같다.)

이 문서에도 `UV` · `ultraviolet` **0건**이다.
본 검증은 이 문서를 값의 1차 출처로 쓰지 않고 대조용으로만 사용했다.

---

## S8. UV — 네 종류 공식 자료 전부에서 **확인되지 않음**

| 자료 | `UV` / `ultraviolet` 출현 | 자외선 차단 항목 |
| --- | --- | --- |
| 미국 전문가 사양표 (S4) | **0건** | 표에 UV 행 자체가 없다 |
| 국제 전문가 페이지 (S5) | **0건** | 파라미터 이미지에도 UV 행이 없다 |
| 미국 Package Insert (S6) | **0건** | UV 흡수제·차단율 서술이 없다 |
| Professional Fitting Guide (S7) | **0건** | 없음 |
| 한국 공식 자료 | 해당 없음 | **제품 페이지 자체가 없다**(S2) |
| MFDS UDI 원장 (S1) | 해당 없음 | 응답 필드에 UV 항목이 없다 |

**"UV 차단이 없다"고 단정하지 않는다.** 이 검증이 말할 수 있는 것은
**검토한 네 종류 공식 자료 어디에도 UV 관련 표기가 없다**는 사실뿐이다.
따라서 `uv` 필드는 `unknown`이다.
(참고로 같은 제조사의 프리시전원은 사양표에 `UV BLOCKER` 행이, PI에 `ACTIONS` 절 차단율이 있었다.
같은 회사가 UV 차단 제품에는 그것을 명시한다는 점은 기록해 둔다. 그러나 이는 정황이지 근거가 아니다.)

---

## 값 대조표 — 같은 값을 여러 공식 자료가 말하는지

| 항목 | 한국 공식 (S2·S3) | MFDS 원장 (S1) | 미국 전문가 페이지 (S4) | 국제 전문가 페이지 (S5, 이미지) | 미국 PI (S6) |
| --- | --- | --- | --- | --- | --- |
| 재질명 | **자료 없음** | 없음 (재질명 미등록) | `lotrafilcon B` | `lotrafilcon B` | `lotrafilcon B`, `a fluoro-silicone containing hydrogel which is surface treated` |
| BC | 없음 | 없음 | `8.6` | `8.6` | `Base Curve: 8.6 mm` |
| DIA | 없음 | 없음 | `14.2` | `14.2` | `Chord Diameter: 14.2 mm` |
| 함수율 | 없음 | 없음 | `Water Content 33%` | `CORE WATER CONTENT 33%` | `Water Content: 33% by weight in normal saline` |
| Dk/t | 없음 | 없음 | `138 @ ‑3.00D` | `138 @ -3.00D` | 없음 (대신 intrinsic `Dk 110 x 10-11`, 35 °C 쿨로메트릭) |
| 중심두께 | 없음 | 없음 | `0.08` (`Center Thickness (3.00D, mm)`) | `0.08` (`(-3.00D,mm)`) | `0.08 mm @ -3.00 D (varies with power)` |
| 교체주기 | 없음 | 없음 | `…/monthly replacement` | `Monthly replacement`, `Replacement Frequency: monthly` | `replaced with a new pair each month` |
| 착용방식 | 없음 | `연속착용소프트콘택트렌즈` (등급 3) | `Daily wear and up to 6 nights extended wear` | **표기 없음** | `daily wear or extended wear for up to 6 nights of continuous wear` |
| UV | 없음 | 없음 | **없음** | **없음** | **없음** |
| 허가번호 | 없음 | `수허 17-148 호` | 해당 없음 | 해당 없음 | 해당 없음 |

**물성값(BC·DIA·함수율·재질·Dk/t·중심두께)에서 공식 출처끼리 값이 어긋나는 항목은 없다.**
어긋나는 것은 **착용방식 문장 한 곳**이다(미국 표에는 있고 국제 표에는 없다). 이는 `replacement` 필드의 `conflicts[]`에 기록했다.

표기 차이로 함께 적어야 할 것:

1. **함수율 라벨이 다르다.** 미국 표는 `Water Content`, 국제 표는 `CORE WATER CONTENT`다.
   숫자는 33%로 같지만 국제 표는 **코어**로 한정해 부른다. 프리시전원·데일리스 토탈원과 달리
   이 제품에는 **표면 함수율 표기가 어느 자료에도 없다.** 33%를 표면값과 합치거나 대비해 해석하지 않는다.
2. **중심두께 조건의 마이너스 부호.** 미국 페이지만 `(3.00D, mm)`로 부호를 빠뜨린다.
3. **Dk/t에는 시험도수만 있고 측정법·온도가 없다.** PI가 밝힌 `35 °C · intrinsic Dk-Coulometric method`는
   **Dk(투과성)**의 조건이지 **Dk/t(전달률)**의 조건이 아니다. 두 값을 섞지 않았고, Dk와 두께로 Dk/t를 역산하지도 않았다.

---

## 확인하지 못한 것

1. **한국 표기 수치 일체.** 한국 공식 소비자 페이지가 존재하지 않으므로(S2)
   BC·DIA·함수율·Dk/t·중심두께·재질명은 **글로벌 공식 자료가 유일한 근거**다.
   프리시전원은 한국 브랜드 사이트에서 재질 계열(`실리콘 하이드로겔`)과 UV 등급이라도 확인됐지만,
   이 제품은 **한국 자료에서 가져올 수 있는 것이 MFDS 원장의 소분류·등급·판매명뿐**이다.
2. **한국어 IFU.** 온라인 공개본을 찾지 못했다(S3). 알콘 공식 eIFU 포털은 referer 검증·로그인 인증으로 막혀 있다.
   실물 포장 IFU 확보 경로는 별도 과제로 남는다.
3. **허가의 현재 유효성.** MFDS UDI 응답에 취하·취소 상태 필드가 없다(S1-7).
4. **한국에서의 착용방식 안내 문구.** MFDS 소분류가 `연속착용소프트콘택트렌즈`라는 사실은 확인했으나,
   한국알콘이 한국 이용자에게 실제로 어떤 착용 안내를 하는지는 **한국 공식 자료가 없어 확인할 수 없다.**
   미국 PI의 `up to 6 nights` 문장을 한국 안내로 옮기지 않았다.
5. **Dk/t 138의 산출 근거.** 측정법·보정·온도가 어느 자료에도 없다.
   **재질의 `Dk 110`과 중심두께 `0.08 mm`로 Dk/t를 역산하지 않았다.**
   본 검증이 기록하는 `138`은 오직 전문가 사양표가 인쇄한 문자열이다.
6. **모듈러스.** 두 전문가 사양표 모두 `Modulus`를 단어로만 언급하고 수치를 인쇄하지 않는다.
   프리시전원 사양표에 `CORE MODULUS (MPa) 0.6`이 있었던 것과 다르다.
