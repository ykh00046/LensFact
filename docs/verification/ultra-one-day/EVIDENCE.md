# 검증 근거 — 울트라 원데이 (Bausch + Lomb ULTRA ONE DAY · 미국명 INFUSE® One-Day)

검증일: 2026-08-28
대상: 근시·원시용 투명 구면, 1일 교체 (난시용 `울트라 원데이 난시용`·멀티포컬 `울트라 원데이 멀티포컬`은 제외)
제조사: Bausch + Lomb · 한국 유통(허가 원장 등록 법인): **(주)바슈롬코리아**
재질: kalifilcon A (실리콘 하이드로겔)

이 문서는 실제로 가져온 공식 자료의 **원문**만 담는다. 값의 해석·정규화·환산은 하지 않는다.

이 제품은 `docs/PRODUCT_CANDIDATES_20.md`가 기록한 **한국 판매명 ≠ 글로벌 판매명** 사례다.
그 대응 관계를 가정하지 않고 아래 S1에서 한국 허가 원장의 **재질명으로 직접 증명**했다.

---

## S0. 이름 대응 결론 (증명은 S1)

| 축 | 문자열 | 출처 |
| --- | --- | --- |
| 한국 판매명 | `울트라 원데이` | 한국 브랜드 제품 페이지 `<title>`·상품명 (S2) |
| 한국 허가 원장 업체 제품 명칭 | `Ultra Oneday, 울트라 원데이` | MFDS UDI 원장 (S1-5) |
| 한국 허가 원장 모델명 | `kalifilcon A` | MFDS UDI 원장 (S1-5) |
| 한국 브랜드 페이지 인쇄 재질명 | `kalificon A (실리콘 하이드로겔)` — **`l` 하나가 빠진 철자** | 한국 브랜드 페이지 상세 이미지 (S2-2) |
| 미국 판매명 | `Bausch + Lomb INFUSE® One-Day` | 미국 ECP 제품 페이지·PI/FG (S3·S5) |
| 미국 공식 재질명 | `kalifilcon A` | 미국 ECP 제품 페이지·파라미터 PDF·PI/FG (S3·S4·S5) |

연결 고리는 **재질명 `kalifilcon A`** 하나다.
MFDS 원장은 `INFUSE`라는 문자열을 **단 한 번도** 쓰지 않고(S1-2 Q11·Q12 = 0건),
미국 자료는 `ULTRA ONE DAY`라는 문자열을 쓰지 않는다(미국에서 `ULTRA®`는 월간 제품 이름이다, S6).

---

## S1. MFDS 의료기기 UDI 표준코드 조회 — 한국 유통·허가 식별

- URL: https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do
- 조회일: 2026-08-28
- 방법: gstack 헤드리스 브라우저로 위 화면을 연 뒤, 같은 세션에서 화면이 쓰는 엔드포인트
  `POST /msismext/udi/uif/selectStddCdLstAjax.do`에 동일 파라미터를 보내 JSON 응답을 집계했다.
  대표 조회(`itemPermitNo=수허 20-222 호`)는 화면 입력·`#searchBtn` 클릭 → 렌더링 결과로도 대조했다(S1-6).
- 공통 조회 조건: `dateCancelChk=N`, `selRcprslryTrgtYn=`(전체), `sDate=` / `eDate=` 비움

### S1-1. 업체명 — 바이오트루 검증 결과 재확인

| # | 조회 조건 | 건수(totCnt) |
| --- | --- | --- |
| Q1 | `bplcNm=바슈롬` | **30,826** |
| Q2 | `bplcNm=(주)바슈롬코리아` | 30,826 |
| Q3 | `bplcNm=바슈롬코리아(주)` | **0** |

원장 업체명 원문은 **`(주)바슈롬코리아`**, 업체구분 `수입업`이다.

### S1-2. 모델명 조회 — 지시된 검색어 전부와 그 변형

`bplcNm=바슈롬` 고정.

| # | `modelnm` | 건수 |
| --- | --- | --- |
| Q4 | `ULTRA ONE DAY` | **0** |
| Q5 | `Ultra ONE day` | **0** |
| Q6 | `Ultra One Day` | **0** |
| Q7 | `ULTRA ONEDAY` | **0** |
| Q8 | `Ultra Oneday` | **0** |
| Q9 | `Ultra ONEday` | **0** |
| Q10 | `Ultra Oneday for Astigmatism` | **0** |
| Q11 | `INFUSE` | **0** |
| Q12 | `Infuse` | **0** |
| Q13 | `kalifilcon` | **5,340** |
| Q14 | `Kalifilcon` | **0** |
| Q15 | `kalifilcon A` | **5,340** |
| Q16 | `(kalifilcon A)` (괄호 포함) | **5,160** |
| Q17 | `kalificon` (한국 페이지 철자) | **0** |
| Q18 | `ULTRA` | **191** |
| Q19 | `Ultra` | **4,950** |
| Q20 | `ultra` | **0** |
| Q21 | `ULTRA®` (® 포함) | **0** |
| Q22 | `울트라` (한글) | **0** |
| Q23 | `Oneday` | **0** |
| Q24 | `ONEday` | **2,933** (전부 바이오트루 계열) |
| Q25 | `oneday` | **0** |
| Q26 | `samfilcon` | **5,114** |
| Q27 | `samfilcon A` | **5,114** |
| Q28 | `Ultra Oneday Multifocal` | **0** |
| Q29 | `ZZZZZ` (음성 대조) | **0** |

읽어야 할 것:

- **`ULTRA ONE DAY`·`Ultra One Day`·`INFUSE`는 전부 0건이다.** 제품명으로는 이 제품을 원장에서 찾을 수 없다.
  이 제품을 모델명으로 찾는 **유일한 방법은 재질명 `kalifilcon A`로 조회하는 것**이다.
- 모델명 조회는 **대소문자를 구분한다**: `Kalifilcon` 0건, `ultra` 0건, `Ultra`(4,950)와 `ULTRA`(191)가 **서로 다른 집합**이다.
- **괄호도 문자로 취급된다**: `kalifilcon A` 5,340건에서 `(kalifilcon A)` 5,160건을 빼면 괄호 없는 `kalifilcon A` 180건이 남는다. 그 180건이 본 검증 대상이다.
- 원장 모델명에 **® 기호가 없다**(`ULTRA®` 0건). 바이오트루와 같고, 아큐브 모이스트와 반대다.
- 한글 `울트라`로는 모델명 조회가 되지 않는다. 한글은 `업체 제품 명칭` 열에만 있다.
- 조회 폼에는 `업체 제품 명칭`을 직접 검색하는 입력칸이 없다. `Ultra Oneday`는 그 열에만 있으므로 조회로 잡히지 않는다.

### S1-3. `bplcNm=바슈롬` 30,826건 **전수 집계** — distinct 신원 24건

30,826행을 500건 × 62페이지로 모두 가져와(소요 251초) 집계한 결과다.
형식: `소분류 품목 명칭 | 등급 | 품목허가번호 | 모델명 | 업체 제품 명칭 ## 행 수`

```
연속착용 소프트 콘택트렌즈 | 3 | 수허 01-919 호  | Optima FW(polymacon)           | 옵티마 FW, 소프렌 38 ## 156
연속착용 소프트 콘택트렌즈 | 3 | 수허 01-919 호  | SofLens 38(polymacon)          | 옵티마 FW, 소프렌 38 ## 156
매일착용소프트콘택트렌즈   | 2 | 수허 06-1131 호 | SofLens 59                     | 소프렌 59 ## 52
매일착용 소프트 콘택트렌즈 | 2 | 수허 09-975 호  | Daily Disposable               | 소프렌 데일리, 수분쿠션 렌즈, 저자극 렌즈, 트루핏 원데이, Truefit ## 201
매일착용소프트콘택트렌즈   | 2 | 수허 10-1138 호 | NATURELLE                      | 바슈롬 내츄렐, 내츄렐 퓨어 블랙, 내츄렐 시크 브라운 ## 126
매일착용 소프트 콘택트렌즈 | 2 | 수허 11-407 호  | Toric Daily Disposable         | 소프렌 데일리 난시용 ## 372
연속착용소프트콘택트렌즈   | 3 | 수허 11-618 호  | PureVision2                    | 퓨어비전2 HD ## 122
연속착용소프트콘택트렌즈   | 3 | 수허 12-187 호  | PureVision2 for Astigmatism    | 퓨어비전2 HD 난시용 ## 7920
매일착용소프트콘택트렌즈   | 2 | 수허 13-584 호  | nesofilcon A                   | 바이오트루 원데이 렌즈, 수분 렌즈, 하이퍼겔 렌즈 ## 189
매일착용소프트콘택트렌즈   | 2 | 수허 13-584 호  | Biotrue ONEday                 | 바이오트루 원데이 렌즈, 수분 렌즈, 하이퍼겔 렌즈 ## 189
연속착용소프트콘택트렌즈   | 3 | 수허 14-2206 호 | PureVision2 for Presbyopia     | 퓨어비전2 멀티포컬 ## 260
매일착용소프트콘택트렌즈   | 2 | 수허 15-1250 호 | ULTRA                          | 산소 렌즈, 모이스처 렌즈 ## 61
매일착용소프트콘택트렌즈   | 2 | 수허 16-17 호   | (nesofilcon A)                 | 바이오트루 원데이 멀티포컬 ## 124
매일착용소프트콘택트렌즈   | 2 | 수허 16-17 호   | Biotrue ONEday For Presbyopia  | 바이오트루 원데이 멀티포컬 ## 124
매일착용소프트콘택트렌즈   | 2 | 수허 16-386 호  | (nesofilcon A) for Astigmatism | 바이오트루 원데이 난시용, 하이퍼겔 난시렌즈, 난시 수분렌즈 ## 2620
매일착용소프트콘택트렌즈   | 2 | 수허 16-386 호  | Biotrue ONEday For Astigmatism | 바이오트루 원데이 난시용, 하이퍼겔 난시렌즈, 난시 수분렌즈 ## 2620
매일착용소프트콘택트렌즈   | 2 | 수허 17-249 호  | (samfilcon A) for Presbyopia   | 울트라 멀티포컬 ## 130
매일착용소프트콘택트렌즈   | 2 | 수허 17-249 호  | ULTRA For Presbyopia           | 울트라 멀티포컬 ## 130
매일착용소프트콘택트렌즈   | 2 | 수허 18-308 호  | (samfilcon A) for Astigmatism  | 울트라 난시용 ## 4950
매일착용소프트콘택트렌즈   | 2 | 수허 18-308 호  | Ultra for Astigmatism          | 울트라 난시용 ## 4950
매일착용 소프트 콘택트렌즈 | 2 | 수허 20-222 호  | kalifilcon A                   | Ultra Oneday, 울트라 원데이 ## 180
매일착용 소프트 콘택트렌즈 | 2 | 수허 22-32 호   | (kalifilcon A)                 | Ultra Oneday Multifocal, 울트라 원데이 멀티포컬 ## 260
연속착용 소프트 콘택트렌즈 | 3 | 수허 25-122 호  | samfilcon A                    | ULTRA, 울트라 ## 34
매일착용 소프트 콘택트렌즈 | 2 | 수허 26-23 호   | (kalifilcon A) Astigmatism     | Ultra Oneday for Astigmatism, 울트라 원데이 난시용 ## 4900
```

이 전수 집계가 곧 **이름 대응의 증명**이다.

- `울트라 원데이`(구면)에 해당하는 원장 항목은 **`수허 20-222 호` 하나뿐**이고, 그 모델명은 **`kalifilcon A`**다.
- 같은 재질(`kalifilcon A`)의 다른 두 항목은 멀티포컬(`수허 22-32 호`)과 난시용(`수허 26-23 호`)이며 허가번호가 다르다.
- **월간 `울트라`는 재질이 `samfilcon A`로 완전히 다르다**: `수허 25-122 호`(연속착용, 등급 3, 34행)와
  `수허 15-1250 호`(매일착용, 등급 2, 61행) 두 건이 모두 월간 ULTRA 계열이며 kalifilcon과 무관하다.
  `울트라 난시용`(`수허 18-308 호`)·`울트라 멀티포컬`(`수허 17-249 호`)도 samfilcon A다.
- 원장에 `INFUSE`는 없다. 24건 어디에도 등장하지 않는다.

### S1-4. 소분류 표기가 원장 안에서 갈린다

| `prdlNm` 조회값 | 건수 |
| --- | --- |
| `매일착용 소프트 콘택트렌즈` (공백 있음) | **5,913** |
| `매일착용소프트콘택트렌즈` (공백 없음) | **16,265** |
| `연속착용 소프트 콘택트렌즈` (공백 있음) | **346** |

kalifilcon A 계열(2020년 이후 등록)은 **공백이 있는** `매일착용 소프트 콘택트렌즈`,
바이오트루·월간 울트라 난시/멀티포컬(2018년 이전 등록)은 **공백이 없는** `매일착용소프트콘택트렌즈`로 등록돼 있다.
같은 품목 분류가 원장 안에서 두 표기로 존재하므로 소분류로 조회할 때는 양쪽을 다 시도해야 한다.

### S1-5. 허가번호 단독 조회 `itemPermitNo=수허 20-222 호`

화면 표시 원문:

```
총 180건이 조회됐습니다.
```

열 헤더 원문:

```
연번 | 소분류 품목 명칭 | 등급 | 업체 제품 명칭 | 업체명 | 품목허가번호 | 모델명 | 고유식별자(UDI-DI)코드 | 요양급여 대상 치료재료 여부 | 치료재료코드 | 포장내수량
```

화면에 표시된 결과 행 — 원문 그대로:

```
1 | 매일착용 소프트 콘택트렌즈 | 2 | Ultra Oneday, 울트라 원데이 | (주)바슈롬코리아 | 수허 20-222 호 | kalifilcon A | 00785812086748 | N |  | 90
2 | 매일착용 소프트 콘택트렌즈 | 2 | Ultra Oneday, 울트라 원데이 | (주)바슈롬코리아 | 수허 20-222 호 | kalifilcon A | 00785812086755 | N |  | 90
3 | 매일착용 소프트 콘택트렌즈 | 2 | Ultra Oneday, 울트라 원데이 | (주)바슈롬코리아 | 수허 20-222 호 | kalifilcon A | 00785812086694 | N |  | 90
```

전수 집계:

- 총 행 수 **180**, distinct UDI-DI **180** → **행 수 = 품목 수**
- distinct (업체명 | 업체구분 | 소분류 | 등급 | 허가번호 | 모델명 | 업체 제품 명칭) = **1건**
- 포장내수량 분포: `5` 60행 · `30` 60행 · `90` 60행
- 코드체계 `GS1`, 요양급여 대상 치료재료 여부 전부 `N`

**허가번호 원문: `수허 20-222 호`** (앞 `수허`, 공백, `20-222`, 공백, `호`)

> **바이오트루와 다른 점 — 건수를 품목 수로 읽어도 되는 경우다.**
> 바이오트루는 하나의 UDI-DI에 모델명이 `Biotrue ONEday`와 `nesofilcon A` 두 개로 등록돼
> 허가번호 조회 건수(378)가 품목 수(189)의 정확히 2배였다.
> 울트라 원데이는 모델명이 `kalifilcon A` **하나뿐**이라 180행 = 180 UDI-DI다.
> 같은 제조사 안에서도 등록 방식이 다르므로 매번 distinct UDI-DI를 세야 한다.

### S1-6. 허가번호 표기 흔들림 — 조회는 관대하다

| 입력 문자열 | 건수 |
| --- | --- |
| `수허 20-222 호` | 180 |
| `수허20-222 호` (공백 없음) | 180 |
| `수허 20-222` (`호` 없음) | 180 |

허가번호 조회는 부분 일치이므로 표기가 흔들려도 같은 결과가 나온다.
그러나 **원장에 인쇄된 문자열은 `수허 20-222 호`**이며, 화면 표시값은 이 표기를 따른다.

### S1-7. 조회 함정 기록

바이오트루 검증에서 기록된 **UI가 결과를 늦게 그린다**는 함정은 이번에도 재현됐다.
`itemPermitNo=수허 20-222 호`를 화면에서 조회했을 때, 클릭 직후부터 20초 동안 폴링한
`총 …건이 조회…` 문자열은 계속 비어 있었고, 이후 확인 시점에 `총 180건이 조회됐습니다.`가 그려져 있었다.
0건 판정 전에 반드시 렌더링 완료를 확인해야 한다.
**AJAX 엔드포인트를 같은 세션에서 직접 호출하면 이 문제를 우회할 수 있다**(500건 페이지당 4.5초).

---

## S2. 한국 공식 브랜드 페이지 — 울트라 원데이

- URL: https://www.bauschlomb.co.kr/cleardaily/?idx=98
- 조회일: 2026-08-28 · HTTP 200 · 423,125 bytes
- 방법: `curl -L`(브라우저 UA) HTML 저장 후 태그 제거

### S2-1. 페이지 텍스트에서 확인된 항목 (원문 발췌)

```
울트라 원데이 : 바슈롬        <- <title>
울트라 원데이
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

한국 제품 목록 https://www.bauschlomb.co.kr/cleardaily (2026-08-28, HTTP 200, 445,911 bytes)에도
`울트라 원데이 / 하루용 투명렌즈/근시용`이 `NEW`·`BEST` 배지와 함께 등재돼 있고 링크는 `?idx=98`이다.
같은 목록에 `울트라 원데이 멀티포컬 / 하루용 투명렌즈/멀티포컬`이 별도 상품으로 있다.
`울트라 원데이 난시용`은 이 목록에 **없다**(MFDS `수허 26-23 호`로는 등록돼 있다).

### S2-2. 페이지 **HTML 텍스트에는 없고 상세 이미지 안에만 있는** 사양표 — 이번 검증의 방법상 차이

HTML 텍스트 검색 결과는 바이오트루와 같다. `함수율`·`베이스`·`커브`·`직경`·`산소`·`Dk`·`자외선`·`수허`·`허가`·`kalifilcon`·`칼리필콘`·`55%`·`14.2`가 **각 0건**이다.
(`UV` 1건은 본문이 아니라 base64 블록 안의 우연한 문자열이고, `8.6`·`0.08`은 SVG·CSS 좌표다.)

`상세정보` 탭은 **이미지 1장 전용**이다.

- URL: https://cdn.imweb.me/upload/S2023010385e2991530ec3/1618649b99469.jpg
- 2026-08-28 · HTTP 200 · 1,189,999 bytes · 1020 × 2106 px · 대체 텍스트 없음

**이 이미지 안에 한국어 사양표가 인쇄돼 있다.** 이미지를 원본 해상도로 확대해 읽은 원문은 다음과 같다.

```
제품 상세 안내

재질        kalificon A (실리콘 하이드로겔)      함수율   55%
베이스 커브  8.6mm                              직경     14.2mm
도수 범위(근시)   *30개입 : -0.50D ~ -12.00D
                 *90개입 : -1.00D ~ -12.00D (0.25D 단위. 단 -6.00D 이상 0.50D 단위)
```

같은 이미지의 그 위 영역 원문:

```
Go Comfort        바슈롬 울트라 원데이

매일착용 소프트콘택트렌즈 / 질병이 없는 눈의 굴절이상(근시, 원시)의 교정을 위해 사용하는 매일착용 소프트콘택트렌즈로
활동시간 동안 착용하고 야간 취침 시에 착용하지 않는다.  이 제품은 '의료기기'이며, '사용상의 주의사항'과 '사용방법'을 잘 읽고 사용하십시오.
의료기기 광고심의필 : 62026-I10-12-1425 (유효기간 29.04.30) / BLK-MKT-UOD-260504
```

제품 포장 사진에 인쇄된 문자열:

```
BAUSCH + LOMB
ULTRA® one DAY
MoistureSeal® + ComfortFeel TECHNOLOGIES
UV PROTECT™
30 CONTACT LENSES / 90 CONTACT LENSES
```

같은 이미지의 마케팅 문구(물성값과 분리 — 본 검증에서 값으로 사용하지 않음):

```
오랫동안 유지되는 편안함
수분유지로 촉촉하고 편안하게
착용부터 제거까지 편~안하게
```

읽어야 할 것:

- **재질명이 `kalificon A`로 인쇄돼 있다.** `l` 하나가 빠진 철자다.
  MFDS 한국 허가 원장과 미국 공식 자료는 모두 `kalifilcon A`이며,
  MFDS 모델명 조회에서 `kalificon`은 **0건**이다(S1-2 Q17). 값의 충돌이 아니라 **한국 브랜드 페이지의 철자 오기**로 기록한다.
- `의료기기 광고심의필 : 62026-I10-12-1425`는 **광고 사전심의 번호**다. 품목 허가번호가 아니므로 허가 필드에 넣지 않는다.
  `의료기기판매신고번호 : 제 2009-3220033-00028호`도 **판매업 신고번호**이지 품목 허가번호가 아니다.
- 이 이미지에도 **Dk·Dk/t·중심두께·UV 수치는 없다.** 포장 사진의 `UV PROTECT™`는 표시일 뿐 수치가 아니다.
- 한국 자료는 적응증을 `근시, 원시의 교정`으로 적으면서 도수 범위는 `(근시)`만 인쇄한다.
  한국에서 플러스 도수가 공급되는지는 이 자료로 확정되지 않는다.

### S2-3. 한국 공식 자료 부재 확인

- 기업 사이트 https://www.bausch.kr/ko-kr/our-products/contact-lenses/ (2026-08-28, HTTP 200, 100,947 bytes):
  `울트라` 0건 · `ULTRA` 0건 · `kalifilcon` 0건 · `INFUSE` 0건 · `함수율` 0건. **제품 목록도 수치도 없다.**
- https://www.bausch.co.kr — 2026-08-28 `curl` 결과 **TLS 인증서 만료**로 접속 불가
  (`schannel: next InitializeSecurityContext failed: SEC_E_CERT_EXPIRED (0x80090328)`). 출처로 사용하지 않는다.
- 한국어 IFU/사양서 PDF는 이번 조사에서 **찾지 못했다.** 브랜드 페이지·목록·기업 사이트 어디에도 `.pdf` 링크가 없다.

→ BC·DIA·함수율·재질은 **한국 공식 자료(브랜드 페이지 상세 이미지 + MFDS 원장)로 확인되며**,
  Dk/t·중심두께·UV는 **미국(글로벌) 공식 자료가 유일한 근거**다.

---

## S3. Bausch + Lomb 미국 ECP 제품 페이지 (INFUSE® One-Day)

- URL: https://ecp.bauschcontactlenses.com/products/infuse-one-day/
- 조회일: 2026-08-28 · HTTP 200 · 50,221 bytes
- `<title>`: `For Eye Care Professionals: Bausch + Lomb INFUSE® One-Day`
- 문서 식별 표기: `©2026 Bausch + Lomb. MTB.0263.USA.22`
- 페이지 고지: `All information and materials on this site pertain to the U.S. only, unless otherwise indicated.`

### 파라미터 표 원문 (`INFUSE® contact lens parameters`)

```
MATERIAL                          kalifilcon A
WATER CONTENT                     55%
OXYGEN TRANSMISSIBILITY (Dk/t)    134 @ -3.00D
MATERIAL TECHNOLOGY               ProBalance Technology®
OPTIC DESIGN TECHNOLOGY           High-definition optics
BASE CURVE                        8.6 mm
DIAMETER                          14.2 mm
CENTER THICKNESS                  0.08 mm @ -3.00D
POWERS                            +6.00D to -12.00D in 0.25D steps
                                  (0.50D steps above -6.00D)
ADDs                              -
CYLINDER POWERS                   -
AXES                              -
ORIENTATION MARK                  -
VISIBILITY TINT                   Light blue
INDICATIONS                       Daily wear
UV PROTECTION¶                    <img src="/siteassets/img/check-mark.svg" alt="">
90-DAY PERFORMANCE GUARANTEE#     <img src="/siteassets/img/check-mark.svg" alt="">
```

- **`UV PROTECTION` 칸의 값은 체크 표시 이미지이며 `alt` 속성이 비어 있다. 차단율·투과율 수치가 없다.**
- `INDICATIONS: Daily wear`는 **착용방식**이다. 교체주기 행은 이 표에 없다.

### 같은 페이지의 UV 경고 각주 원문

```
¶WARNING: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear such as UV-absorbing goggles or sunglasses because they do not completely cover the eye and surrounding area. The effectiveness of wearing UV-absorbing contact lenses in preventing or reducing the incidence of ocular disorders associated with exposure to UV-light has not been established at this time. You should continue to use UV-absorbing eyewear as directed. NOTE: Long-term exposure to UV radiation is one of the risk factors associated with cataracts. ... However, clinical studies have not been done to demonstrate that wearing UV-blocking contact lenses reduces the risk of developing cataracts or other eye disorders.
```

### 같은 페이지의 마케팅 문구 (물성값과 분리 — 본 검증에서 값으로 사용하지 않음)

```
Next-generation silicone hydrogel material:
Exceptionally high moisture and Dk/t with a low modulus1
55% Moisture1 With 95% maintained for 16 hours1
134 Dk/t† High oxygen transmissibility for excellent breathability
0.5 MPa1 Low modulus to help minimize impact on the ocular surface
†Oxygen transmissibility @ -3.00D.
REFERENCES: 1. Data on file. Bausch + Lomb Incorporated. Rochester, NY.
```

`55%`와 `134`라는 숫자 자체는 파라미터 표에도 있으므로 값으로 쓰되,
`95% maintained for 16 hours`·`Exceptionally high`·`0.5 MPa (Data on file)`는 광고 문구이므로 옮기지 않는다.

---

## S4. INFUSE® One-Day Contact Lens Parameters (PDF)

- URL: https://ecp.bauschcontactlenses.com/siteassets/pdf/infuse-oneday-contact-lens-parameters.pdf
- 조회일: 2026-08-28 · HTTP 200 · 39,250,340 bytes · 1페이지 · md5 `99ca8f6a2b9fe3a403d796152b55b219`
- 방법: `curl -L` 다운로드 후 `pypdf`로 텍스트 추출
- 문서 식별 표기: `©2024 Bausch & Lomb. INF.0007.USA.24`
- 표 제목: `BAUSCH + LOMB INFUSE® ONE-DAY Contact Lens Parameters`
  (추출 문자열은 자간 때문에 `BAUSCH + LOMB INFUSE® ONE-DA YContact Lens Parameters`)
- 부제: `PRESCRIBE THE FAMILY DESIGNED TO HELP MAINTAIN OCULAR SURFACE HOMEOSTASIS TO MINIMIZE CONTACT LENS DRYNESS1`

### 3열 구조

열 헤더 3개: `INFUSE®`(구면) / `INFUSE® FOR ASTIGMATISM` / `INFUSE® MULTIFOCAL`

행별 값의 텍스트 추출 결과:

```
MATERIAL                        kalifilcon A · kalifilcon A · kalifilcon A
WATER CONTENT                   55% · 55% · 55%
OXYGEN TRANSMISSIBILITY (Dk/t)  134 @ -3.00D · 107 @ -3.00D · 134 @ -3.00D
MATERIAL TECHNOLOGY             ProBalance Technology® (3열 동일)
OPTIC DESIGN TECHNOLOGY         Aspheric optics · OpticAlign® Design, Aspheric optics · 3-Zone Progressive™ Design
BASE CURVE                      8.6 mm · 8.6 mm · 8.6 mm
DIAMETER                        14.2 mm · 14.5 mm · 14.2 mm
CENTER THICKNESS                0.08 mm @ -3.00D · 0.10 mm @ -3.00D · 0.08 mm @ -3.00D
POWERS(구면)                    +6.00D to -12.00D in 0.25D steps (0.50D steps above -6.00D)
VISIBILITY TINT                 Light blue (3열 동일)
INDICATIONS                     Daily wear (3열 동일)
UV PROTECTION†                  (체크 표시 그래픽 — 문자열 없음)
```

열 귀속 검증: 이 PDF도 바이오트루 파라미터 PDF와 마찬가지로 텍스트 행렬(`tm`)의 y좌표가 **모두 14.0**으로 기록돼
**좌표 기반 열 귀속이 불가능**했다. 대신 다음 두 가지로 교차 확인했다.

1. S3(구면 전용 ECP 페이지)이 구면 값을 `Dk/t 134 @ -3.00D` · `DIA 14.2 mm` · `CT 0.08 mm @ -3.00D`로 단독 기재한다.
2. S6의 미국 파라미터 일람 페이지가 난시용을 `107 @ -3.00D` · `14.5 mm` · `0.10 mm @ -3.00D`로 **별도 절에 단독 기재**한다.
   PI/FG도 `14.5mm (Astigmatism)`로 난시용을 괄호로 명시한다.

표기 주의: `kalifilcon A`는 PDF에서 `fi` 합자 글리프로 그려져 추출 문자열이 `kaliﬁlcon A`가 된다. 인쇄된 단어는 `kalifilcon A`다.

---

## S5. Package Insert / Fitting Guide (제조사 공식 사양 원문)

- URL: https://pi.bausch.com/globalassets/pdf/packageinserts/vision-care/lenses/bausch-lomb-infuse-package-insert-fitting-guide73.pdf
- 조회일: 2026-08-28 · HTTP 200 · 284,295 bytes · md5 `680e2dfb3a9bc399eb9d0f2cbc31d444`
- 미국 ECP 페이지의 `INFUSE® Package Insert` 링크(`ecp.bauschcontactlenses.com/globalassets/…/bausch-lomb-infuse-package-insert-fitting-guide73.pdf`)와 **md5 동일**
- 방법: `curl -L` 다운로드 후 pypdf 텍스트 추출 — 텍스트 레이어 정상
- 문서 식별 표기: `Rev. 2023-07` · `8191603` · `© 2023 Bausch & Lomb Incorporated or its affiliates` · `Printed in the USA`
- 적용 대상: 구면 / Multifocal / for Astigmatism 3종 공통 문서

### S5-1. DESCRIPTION — 재질·함수율·UV·Dk

```
DESCRIPTION
The Bausch + Lomb INFUSE® lens material, kalifilcon A, is a hydrophilic copolymer of 2-hydroxyethyl methacrylate and N-vinylpyrrolidone and is 55% water by weight when immersed in a saline solution. A benzotriazole UV-absorbing monomer is incorporated into the manufacturing process to block Ultraviolet (UV) radiation. The transmittance characteristics are less than 5% in the UVB range of 280nm to 315nm and less than 50% in the UVA range of 316nm to 380nm. This lens is tinted blue with Reactive Blue Dye 246.
The physical/optical properties of the lens are:
Specific Gravity: 1.029
Refractive Index: 1.4011
Light Transmittance: C.I.E. Y value - approximately 99%
Water Content: 55%
Oxygen Permeability (Dk):  107 x 10–11 [cm3O2(STP) x cm]/(sec x cm2 x mmHg) @ 35°C (Polarographic Method)
The lens is to be prescribed for single-use disposable wear and is to be discarded after each removal.
```

pypdf 추출 문자열에는 자간 때문에 `W ater Content`, `UV A range`, `UV -absorbing`, `Light T ransmittance`처럼
공백이 끼어든다. **인쇄된 문자열은 `Water Content`, `UVA range`, `UV-absorbing`, `Light Transmittance`다.**
`10–11`의 `–11`은 인쇄물에서 위첨자이고, `cm3`·`cm2`도 인쇄물에서는 위첨자다.

### S5-2. 자외선 투과 프로파일 각주

```
Typical transmittance profile of kalifilcon A (55% water) lenses vs a Human Cornea and Human Lens:
3. Kalifilcon A (55% water) Soft Contact Lens, -1.00D Power, Nominal Center Thickness 0.08 mm
```

(문장 첫머리라 `Kalifilcon A`로 대문자로 인쇄돼 있다.)

### S5-3. CONTACT LENS PARAMETERS AVAILABLE

```
CONTACT LENS PARAMETERS AVAILABLE
The Bausch + Lomb INFUSE® (kalifilcon A) One-Day Soft (Hydrophilic) Contact Lens is a hemispherical shell of the following dimensions:
Diameter: 14.2mm
          14.5mm (Astigmatism)
Center Thickness: 0.05mm to 0.75mm (varies with power)
Base Curve: 8.6mm
Powers (Spherical): +6.00D to -6.00D in 0.25D steps
                    -6.50D to -12.00D in 0.50D steps
Powers (Presbyopia): +6.00D to -10.00D in 0.25D steps
Add Powers: Low (+0.75D to +1.50D) and High (+1.75D to +2.50D)
Powers (Astigmatism): +4.00D to -6.00D in 0.25D steps
                      -6.50D to -9.00D in 0.50D steps
Cylinder Powers: -0.75D, -1.25D, -1.75D, -2.25D, and -2.75D
Axis: 0° to 180°
Additional parameters may be introduced over time; check periodically for product availability.
```

### S5-4. INDICATIONS (SVS = 구면)

```
SVS
The Bausch + Lomb INFUSE® (kalifilcon A) One-Day Soft (Hydrophilic) Contact Lens is indicated for the daily wear correction of refractive ametropia (myopia and hyperopia) in aphakic and/or non-aphakic persons with non-diseased eyes, exhibiting astigmatism of 2.00 diopters or less, that does not interfere with visual acuity. The lens may be prescribed in spherical powers ranging from +20.00D to -20.00D.
```

### S5-5. WEARING SCHEDULE

```
WEARING SCHEDULE
The wearing and replacement schedules should be determined by the eye care practitioner. Regular check-ups, as determined by the eye care practitioner, are extremely important.
Daily Wear
There may be a tendency for the daily wear patient to over-wear the lenses initially. ... The lens is to be prescribed for single-use disposable wear and is to be discarded after each removal.
```

### S5-6. UV 경고 원문

```
Warning:
UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear, such as UV-absorbing goggles or sunglasses, because they do not completely cover the eye and surrounding area. The patient should continue to use UV-absorbing eyewear as directed.
```

```
These lenses contain a UV Blocker to help protect against transmission of harmful UV radiation to the cornea and into the eye.
```

---

## S6. 미국 파라미터 일람 페이지 — 열 귀속 교차 확인용

- URL: https://ecp.bauschcontactlenses.com/products/parameters/
- 조회일: 2026-08-28 · HTTP 200 · 78,211 bytes
- 안내 문장: `Find lens parameters for Bausch + Lomb brands in one place, including INFUSE®, Biotrue® ONEday, and ULTRA®.`

절 제목이 세 변형을 분리해 인쇄한다.

```
INFUSE® One-Day Silicone Hydrogel Daily Disposable
MATERIAL kalifilcon A / WATER CONTENT 55% / OXYGEN TRANSMISSIBILITY (Dk/t) 134 @ -3.00D
BASE CURVE 8.6 mm / DIAMETER 14.2 mm / CENTER THICKNESS 0.08 mm @ -3.00D

INFUSE® One-Day Silicone Hydrogel Daily Disposable for Astigmatism
MATERIAL kalifilcon A / WATER CONTENT 55% / OXYGEN TRANSMISSIBILITY (Dk/t) 107 @ -3.00D
BASE CURVE 8.6 mm / DIAMETER 14.5 mm / CENTER THICKNESS 0.10 mm @ -3.00D
```

- 절 제목이 재질을 **`Silicone Hydrogel`**로 명시한다. 한국 페이지의 `(실리콘 하이드로겔)` 표기와 일치한다.
- 구면 `134` / 난시용 `107`이 **별개 절에 단독으로** 인쇄되므로 S4 PDF의 열 귀속이 확정된다.
- 미국에서 `ULTRA®`는 **월간 제품** 이름이다. https://ecp.bauschcontactlenses.com/products/ultra-monthly/
  (2026-08-28, HTTP 200, 48,881 bytes, `<title>` = `For Eye Care Professionals: Bausch + Lomb ULTRA® Monthly`)의 재질은 `samfilcon A`다.
  **한국의 `울트라 원데이`(kalifilcon A)와 미국의 `ULTRA®`(samfilcon A)는 다른 제품이다.**
- `https://ecp.bauschcontactlenses.com/products/infuse-one-day-for-astigmatism/`는 **HTTP 404**다.
  난시용 전용 페이지는 없고 일람 페이지의 절이 유일한 웹 사양이다.

---

## S7. Patient Information Booklet (환자용)

- URL: https://ecp.bauschcontactlenses.com/siteassets/pdf/infuse-patient-information-booklet.pdf
- 조회일: 2026-08-28 · HTTP 200 · 1,975,155 bytes · 13페이지 · md5 `2995f851e8520ebf4fbaa05ac6db0c53`
- 문서 식별 표기: `Rev. 2023-07` · `8191702` · `© 2023 Bausch & Lomb Incorporated or its affiliates` · `Printed in the USA`
- `pi.bausch.com` 아래에는 이 소책자가 없다(경로 추정 시도는 HTML 오류 페이지 831바이트 반환).

### 원문 발췌 — 교체

```
The lens has been prescribed for single-use disposable wear and is to be discarded after each removal.
```

```
Bausch + Lomb INFUSE® (kalifilcon A) One-Day Soft (Hydrophilic) Contact Lenses, Bausch + Lomb INFUSE® Multifocal (kalifilcon A) One-Day Soft (Hydrophilic) Contact Lenses, or Bausch + Lomb INFUSE® for Astigmatism (kalifilcon A) One-Day Soft (Hydrophilic) Contact Lenses have been prescribed for single-use disposable wear, and should be discarded each time lenses are removed from your eyes.
```

### 이 PDF에 **없는** 것 (전문 검색으로 확인)

- `Dk` **0건** · `Water Content` 0건 · `55%` 0건 · `transmittance` 0건
- `8.6` · `14.2` · `0.08` 각 **0건**
- → **환자용 소책자에는 물성 수치가 전혀 없다.** 수치 근거로 쓸 수 없다.

---

## S8. 출처 간 값 대조

### S8-1. 한국 표기와 글로벌 표기가 **일치하는** 항목

| 항목 | 한국 브랜드 페이지 상세 이미지 | 미국 공식 자료 |
| --- | --- | --- |
| 함수율 | `55%` | `55%` (ECP 표·파라미터 PDF·PI/FG `Water Content: 55%`) |
| 베이스 커브 | `8.6mm` | `8.6 mm` / `Base Curve: 8.6mm` |
| 직경 | `14.2mm` | `14.2 mm` / `Diameter: 14.2mm` |
| 재질 계열 | `(실리콘 하이드로겔)` | `Silicone Hydrogel Daily Disposable` |

숫자 충돌이 없다. 단위 표기만 `8.6mm`(한국, 붙임) / `8.6 mm`(미국, 띄움)로 다르다.

### S8-2. 재질명 철자 — 한국 자료 두 건이 서로 다르다

| 출처 | 인쇄된 문자열 |
| --- | --- |
| MFDS 의료기기 UDI 원장 (한국 공식) | `kalifilcon A` |
| 한국 브랜드 페이지 상세 이미지 (한국 공식) | `kalificon A (실리콘 하이드로겔)` |
| 미국 ECP·파라미터 PDF·PI/FG | `kalifilcon A` |

**값(재질 동일성)의 충돌이 아니라 브랜드 페이지의 철자 오기다.**
어떤 출처도 다른 재질을 주장하지 않는다. USAN 재질명은 `kalifilcon A`이며,
MFDS에서 `kalificon`으로 조회하면 0건이다. 화면 표시값은 `kalifilcon A`로 두고, 브랜드 페이지 원문은 그대로 보존한다.

### S8-3. 산소 관련 값 — 라벨과 숫자가 함께 다르다 (**바이오트루와 정반대 양상**)

| 출처 | 인쇄된 라벨 | 인쇄된 값 |
| --- | --- | --- |
| S5 PI/FG (Rev. 2023-07) | `Oxygen Permeability (Dk)` | `107 x 10–11 [cm3O2(STP) x cm]/(sec x cm2 x mmHg) @ 35°C (Polarographic Method)` |
| S4 파라미터 PDF (INF.0007.USA.24) | `OXYGEN TRANSMISSIBILITY (Dk/t)` | `134 @ -3.00D` |
| S3 ECP 웹 페이지 (MTB.0263.USA.22) | `OXYGEN TRANSMISSIBILITY (Dk/t)` | `134 @ -3.00D` |
| S6 파라미터 일람 페이지 | `OXYGEN TRANSMISSIBILITY (Dk/t)` | `134 @ -3.00D` |

- 바이오트루는 **같은 숫자 42**를 Dk / Dk/t / transmissibility로 다르게 불러 **충돌**이었다.
- 울트라 원데이는 **라벨이 다르면 숫자도 다르다**: `Dk = 107`, `Dk/t = 134 @ -3.00D`.
  Dk와 Dk/t는 두께로 나눈 관계이므로 값이 달라야 정상이다. 세 문서 중 **어느 것도 서로 모순되지 않는다.**
- 다만 **숫자 `107`이 두 가지 뜻으로 쓰인다**는 함정이 있다.
  구면 렌즈의 `Dk`도 107이고, **난시용 렌즈의 `Dk/t`도 `107 @ -3.00D`**다(S4·S6).
  같은 문서군 안에서 107을 보면 어느 쪽인지 반드시 확인해야 한다.
- 본 검증은 **환산·유도를 하지 않는다.** Dk/t 필드에는 `134`를 `-3.00D` 조건과 함께 넣고,
  `Dk 107`은 다른 물리량으로서 별도 출처·주의문에 원문 그대로 병기한다.

### S8-4. 중심두께 — 조건이 다른 세 표기

| 출처 | 원문 |
| --- | --- |
| S3 ECP 웹 | `CENTER THICKNESS  0.08 mm @ -3.00D` |
| S4 파라미터 PDF | `0.08 mm @ -3.00D` (구면 열) |
| S5 PI/FG | `Center Thickness: 0.05mm to 0.75mm (varies with power)` |
| S5 PI/FG 각주 | `Kalifilcon A (55% water) Soft Contact Lens, -1.00D Power, Nominal Center Thickness 0.08 mm` |

`0.08 mm @ -3.00D`와 `-1.00D Power, Nominal Center Thickness 0.08 mm`는 **시험 도수가 다른데 값이 같다.**
합치지 않고 각각의 조건을 그대로 적는다. 한국 자료에는 중심두께 항목 자체가 없다.

### S8-5. 도수 범위 표기 차이 (9개 필드에는 포함되지 않음 — 기록만)

| 출처 | 원문 |
| --- | --- |
| S3 ECP 웹 · S4 PDF | `+6.00D to -12.00D in 0.25D steps (0.50D steps above -6.00D)` |
| S5 PI/FG | `+6.00D to -6.00D in 0.25D steps / -6.50D to -12.00D in 0.50D steps` |
| 한국 브랜드 페이지 이미지 | `*30개입 : -0.50D ~ -12.00D` · `*90개입 : -1.00D ~ -12.00D (0.25D 단위. 단 -6.00D 이상 0.50D 단위)` |

**한국 표기에는 플러스 도수가 없다.** 미국 사양에는 `+6.00D`까지 있다.
한국 자료는 같은 이미지에서 적응증을 `근시, 원시의 교정`이라고 적으므로,
한국에서 플러스 도수가 공급되는지는 이 자료만으로 확정되지 않는다. 도수 범위는 9개 필드에 넣지 않는다.

### S8-6. UV — 수치가 있는 문서와 없는 문서

- S5 PI/FG만 수치를 인쇄한다: `less than 5% in the UVB range of 280nm to 315nm and less than 50% in the UVA range of 316nm to 380nm`
- S3 ECP 웹·S4 파라미터 PDF·S6 일람 페이지는 **체크 표시 그래픽**뿐이고 수치가 없다.
- 한국 자료에는 UV 수치가 없다. 포장 사진의 `UV PROTECT™`가 유일한 한국 쪽 UV 표시다.
- **PI/FG의 값은 `투과율(transmittance)`이다. `차단율`이 아니다.** `5% 미만 투과 → 95% 이상 차단`으로 바꿔 적는 것은 유도이므로 하지 않는다.

---

## 확인하지 못한 것

1. **한국 표기 Dk/t·중심두께·UV 수치** — 한국 브랜드 페이지 상세 이미지의 사양표는
   재질·함수율·BC·직경·도수 범위 5개 항목뿐이다. 나머지는 미국 공식 자료 단독 근거다.
2. **한국어 IFU/사양서 PDF** — 브랜드 사이트·목록·기업 사이트 어디에도 링크가 없다. 찾지 못했다.
3. **미국 자료의 지역 적용 범위** — ECP 페이지는 `All information and materials on this site pertain to the U.S. only`라고 명시한다.
   한국 허가 제품과 미국 제품의 사양이 동일하다는 **공식 진술은 확인하지 못했다.**
   연결 근거는 재질명 `kalifilcon A`가 MFDS 원장 모델명과 일치한다는 점,
   그리고 한국 상세 이미지의 함수율·BC·직경 3개 값이 미국 사양과 일치한다는 점이다.
4. **한국의 플러스 도수 공급 여부** — S8-5 참조.
5. **`kalificon A` 철자 오기의 성격** — 한국 브랜드 페이지 이미지 제작상의 오타인지,
   다른 한국 공식 문서에도 같은 철자가 쓰이는지 확인할 한국어 IFU를 찾지 못했다.
6. **한국 브랜드 페이지의 허가번호 표기** — 페이지·이미지 어디에도 `수허` 문자열이 없다.
   허가번호 근거는 MFDS UDI 원장 단독이다.
