# 검증 근거 — 아큐브® 오아시스 맥스 원데이 (ACUVUE® OASYS MAX 1-Day)

검증일: 2026-08-28
대상: 근시·원시용 투명 구면, 1일 교체 (MULTIFOCAL·난시용·멀티포컬 난시용, 그리고 별개 제품인 아큐브 오아시스 원데이는 제외)
제조사: Johnson & Johnson Vision · 한국 유통: (주)한국존슨앤드존슨비전

이 문서는 실제로 가져온 공식 자료의 **원문**만 담는다. 값의 해석·정규화는 하지 않는다.

가져온 출처와 상태:

| # | 출처 | URL | 상태 |
| --- | --- | --- | --- |
| S1 | MFDS 의료기기 UDI 표준코드 조회 | https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do | 200 · 조회 정상 |
| S2 | 아큐브® 오아시스 MAX 원데이 한국 공식 제품 페이지 | https://acuvue.co.kr/products/acuvue-oasys-max-1-day | 200 · 63,355 bytes |
| S3 | 아큐브® 오아시스 MAX 원데이 한국 사용설명서 PDF | https://acuvue.co.kr/files/patient-instruction-guides/OasysMAX_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf | 200 · 123,424 bytes · 3쪽 |
| S3b | 한국 IFU 목록 페이지 | https://acuvue.co.kr/patient-instruction-guides | 200 · 69,126 bytes |
| S4 | ACUVUE Technical Specification Guide PDF | https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf | 200 · 2,097,103 bytes · 4쪽 |

---

## S1. MFDS 의료기기 UDI 표준코드 조회 — 한국 유통·허가 식별

- URL: https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do
- 조회일: 2026-08-28
- 방법: gstack 헤드리스 브라우저(`browse goto`)로 조회 화면을 연 뒤, 화면이 사용하는 동일 엔드포인트
  `POST /msismext/udi/uif/selectStddCdLstAjax.do`를 **같은 세션 안에서** 호출해 전수 집계했다.
  화면 폼(`#itemPermitNo` → `searchList("reset")`) 렌더링 결과와도 대조했다.
  > 참고: 이번 검증에서는 `curl`로 `schStddCdLstView.do`를 먼저 GET해 쿠키를 받은 뒤
  > 같은 파라미터로 AJAX를 POST했을 때 **응답이 `{"dataList":[]}`로 비어 나왔다**(UA·Referer·`pageIdx`/`pageSize` 표기를 모두 맞춰도 동일).
  > 브라우저 세션 안에서 같은 요청을 보내면 정상 응답한다. 따라서 이번에는 브라우저 세션만 사용했다.
- 요청 파라미터명은 화면 폼 그대로다: `pageIdx`(`pageIndex` 아님) · `pageSize` · `udiCd` · `ediCd` ·
  `bplcNm` · `prdlNm` · `itemPermitNo` · `modelnm` · `selRcprslryTrgtYn` · `sDate` · `eDate` · `dateCancelChk`
- 공통 조회 조건: `dateCancelChk=N`(통합정보등록일자 제외 체크됨), `selRcprslryTrgtYn=`(전체), `sDate=` / `eDate=` 비움

### S1-1. 조회 조건별 건수 — 시도한 모든 표기

| # | `bplcNm` | `modelnm` | `itemPermitNo` | 조회 건수(`totCnt`) |
| --- | --- | --- | --- | --- |
| Q1 | `한국존슨앤드존슨비전` | (비움) | (비움) | 51,144 |
| Q2 | `한국존슨앤드존슨비전` | `MAX` | | 21,580 |
| Q3 | `한국존슨앤드존슨비전` | `OASYS MAX` | | 21,580 |
| Q4 | `한국존슨앤드존슨비전` | `ACUVUE® OASYS MAX 1-Day Contact Lenses` (® 있음) | | **15,358** |
| Q5 | `한국존슨앤드존슨비전` | `ACUVUE OASYS MAX 1-Day Contact Lenses` (® 없음) | | **0** |
| Q6 | `한국존슨앤드존슨비전` | `OASYS MAX 1-Day` | | 21,580 |
| Q7 | `한국존슨앤드존슨비전` | `TearStable` | | **0** |
| Q8 | `한국존슨앤드존슨비전` | `TEARSTABLE` | | **0** |
| Q9 | `한국존슨앤드존슨비전` | `HydraLuxe` | | 10,895 |
| Q10 | `한국존슨앤드존슨비전` | `senofilcon` | | **0** |
| Q11 | `한국존슨앤드존슨비전` | `OptiBlue` | | **0** |
| Q12 | (비움) | (비움) | `수허 22-253 호` | **508** |
| Q13 | `한국존슨앤드존슨비전` | `맥스` | | **0** |
| Q14 | `한국존슨앤드존슨비전` | `Oasys MAX` (대소문자 혼용) | | **0** |
| Q15 | `한국존슨앤드존슨비전` | `MAX 1-Day` | | 21,580 |
| Q16 | `한국존슨앤드존슨비전` | `ACUVUE® OASYS MAX` | | 21,580 |
| Q17 | `한국존슨앤드존슨비전` | `세노필콘` | | **0** |
| Q18 | (비움) | (비움) | `수허 23-190 호` (멀티포컬) | 732 |
| Q19 | (비움) | (비움) | `수허 24-225 호` (난시용) | 14,850 |
| Q20 | (비움) | (비움) | `수허 26-21 호` (멀티포컬 난시용) | 5,490 |

주의 1 — **® 함정.** 이 제품의 등록 모델명은 `ACUVUE® OASYS MAX 1-Day Contact Lenses`로 **® 기호를 포함**한다.
® 없는 `ACUVUE OASYS MAX 1-Day Contact Lenses`는 **0건**이다(Q5). 아큐브 오아시스 2주 제품과 정반대다.

주의 2 — **모델명 검색은 대소문자를 구분한다.** Q14(`Oasys MAX`)는 0건이다. `MAX`는 전부 대문자여야 한다.

주의 3 — **구면 모델명 전체를 넣어도 난시용이 함께 잡힌다.**
Q4(15,358건)는 구면 508건 + 난시용 14,850건이다. 난시용 모델명이
`ACUVUE® OASYS MAX 1-Day Contact Lenses for ASTIGMATISM`으로 **구면 모델명을 접두어로 포함**하기 때문이다.
구면만 분리하려면 `itemPermitNo=수허 22-253 호`(Q12)로 조회하거나 전수 집계해야 한다.

주의 4 — **기술명·재질명으로는 검색되지 않는다.** `TearStable`·`TEARSTABLE`·`OptiBlue`·`senofilcon`·`세노필콘` 모두 0건이다.
`HydraLuxe`(10,895건)는 이 제품이 아니라 **아큐브 오아시스 원데이 계열**을 잡는다.

주의 5 — **한글 `맥스`로는 모델명 조회가 0건이다.** 한글 제품명은 `prdtNmCn`(업체 제품 명칭) 쪽에만 있고
이 화면의 검색 폼에는 `prdtNmCn` 입력란이 없다.

### S1-2. Q3(`modelnm=OASYS MAX`, 21,580건) 전수 집계 — 허가번호 × 모델명 distinct

21,580행을 500건 × 44페이지로 모두 가져와 집계한 결과 distinct **4건**:

```
(주)한국존슨앤드존슨비전 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 22-253 호 | ACUVUE® OASYS MAX 1-Day Contact Lenses | ACUVUE® OASYS MAX 1-Day Contact Lenses, 아큐브® 오아시스 맥스 원데이, 아큐브® 오아시스 MAX 원데이 ## 508
(주)한국존슨앤드존슨비전 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 23-190 호 | ACUVUE® OASYS MAX 1-Day MULTIFOCAL Contact Lenses | ACUVUE® OASYS MAX 1-Day MULTIFOCAL Contact Lenses, 아큐브® 오아시스 맥스 원데이 멀티포컬, 아큐브® 오아시스 MAX  원데이 멀티포컬 ## 732
(주)한국존슨앤드존슨비전 | 수입업 | 매일착용 소프트 콘택트렌즈 | 2 | 수허 24-225 호 | ACUVUE® OASYS MAX 1-Day Contact Lenses for ASTIGMATISM | ACUVUE® OASYS MAX 1-Day Contact Lenses for ASTIGMATISM,  아큐브® 오아시스 맥스 원데이 난시용, 아큐브® 오아시스 MAX 원데이 난시용 ## 14850
(주)한국존슨앤드존슨비전 | 수입업 | 매일착용 소프트 콘택트렌즈 | 2 | 수허 26-21 호 | ACUVUE® OASYS MAX 1-Day MULTIFOCAL Contact Lenses for ASTIGMATISM | ACUVUE® OASYS MAX 1-Day MULTIFOCAL Contact Lenses for ASTIGMATISM, 아큐브® 오아시스 맥스 원데이 멀티포컬 난시용, 아큐브® 오아시스 MAX 원데이 멀티포컬 난시용 ## 5490
```

형식: `업체명 | 업체구분 | 소분류 품목 명칭 | 등급 | 품목허가번호 | 모델명 | 업체 제품 명칭 ## 행 수`

**구면·멀티포컬·난시용·멀티포컬 난시용의 허가번호가 모두 다르다.** 본 검증 대상(구면)은 `수허 22-253 호` 하나뿐이다.
소분류 품목 명칭 표기도 흔들린다: 구면·멀티포컬은 `매일착용소프트콘택트렌즈`(공백 없음),
난시용 2종은 `매일착용 소프트 콘택트렌즈`(공백 있음). 원문 그대로 기록한다.

> 같은 집계는 2026-08-28 `acuvue-oasys-2-week` 검증의 `modelnm=OASYS`(38,345건) 전수 집계에서도
> 동일한 4건이 나왔다. 두 번의 독립 조회가 일치한다.

### S1-3. Q12(`itemPermitNo=수허 22-253 호`, 업체명 비움) 전수 집계

- 조회 건수 **508건**, distinct 신원 **1건**:
  `(주)한국존슨앤드존슨비전 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 22-253 호 | ACUVUE® OASYS MAX 1-Day Contact Lenses | ACUVUE® OASYS MAX 1-Day Contact Lenses, 아큐브® 오아시스 맥스 원데이, 아큐브® 오아시스 MAX 원데이`
- distinct UDI-DI 코드 **508건**(중복 없음)
- 포장내수량(`mummPunitQy`) 분포: `1` 130건 · `5` 126건 · `30` 126건 · `90` 126건
- 코드체계: `GS1` 508건 · 요양급여 대상 치료재료 여부: `N` 508건
- UDI-DI 예시(원문): `00193377652191`, `00193377652207`, `00193377652153`, `00193377652160`, `00193377652177`, `00193377652184`

### S1-4. 화면에 표시된 결과 행 — 원문 그대로

`itemPermitNo=수허 22-253 호`로 화면 조회했을 때의 결과 표 첫 행들:

```
1 | 매일착용소프트콘택트렌즈 | 2 | ACUVUE® OASYS MAX 1-Day Contact Lenses, 아큐브® 오아시스 맥스 원데이, 아큐브® 오아시스 MAX 원데이 | (주)한국존슨앤드존슨비전 | 수허 22-253 호 | ACUVUE® OASYS MAX 1-Day Contact Lenses | 00193377652191 | N |  | 1
2 | 매일착용소프트콘택트렌즈 | 2 | ACUVUE® OASYS MAX 1-Day Contact Lenses, 아큐브® 오아시스 맥스 원데이, 아큐브® 오아시스 MAX 원데이 | (주)한국존슨앤드존슨비전 | 수허 22-253 호 | ACUVUE® OASYS MAX 1-Day Contact Lenses | 00193377652207 | N |  | 1
3 | 매일착용소프트콘택트렌즈 | 2 | ACUVUE® OASYS MAX 1-Day Contact Lenses, 아큐브® 오아시스 맥스 원데이, 아큐브® 오아시스 MAX 원데이 | (주)한국존슨앤드존슨비전 | 수허 22-253 호 | ACUVUE® OASYS MAX 1-Day Contact Lenses | 00193377652153 | N |  | 1
```

열 순서: 연번 | 소분류 품목 명칭 | 등급 | 업체 제품 명칭 | 업체명 | 품목허가번호 | 모델명 | 고유식별자(UDI-DI)코드 | 요양급여 대상 치료재료 여부 | 치료재료코드 | 포장내수량

**허가번호 원문: `수허 22-253 호`** (앞에 `수허`, 공백, `22-253`, 공백, `호`)

업체 제품 명칭 원문에 한국어 판매명 `아큐브® 오아시스 맥스 원데이`와 `아큐브® 오아시스 MAX 원데이`가 **둘 다** 들어 있다.
한국 공식 제품 페이지의 표기는 `아큐브® 오아시스 MAX 원데이`(S2)이고, MFDS 원장에는 두 표기가 병기돼 있다.

**이 원장에서 확인되지 않는 것**: 재질명(`senofilcon` 0건) · UV 관련 문구(모델명에 `UV Blocker` 없음) ·
BC·DIA·함수율·Dk/t·중심두께 수치. UDI 조회 화면에는 허가 상태(유효·취하) 열도 없다.

---

## S2. 한국 공식 제품 페이지 — 아큐브® 오아시스 MAX 원데이

- URL: https://acuvue.co.kr/products/acuvue-oasys-max-1-day
- 조회일: 2026-08-28 · HTTP 200 · 63,355 bytes
- 방법: `curl -L`로 HTML 저장 후 script/style/svg 제거 + 태그 제거

### 페이지 텍스트에서 확인된 항목 (원문 발췌)

```
아큐브® 오아시스 MAX 원데이
MAX의 편안함, MAX의 선명함*, MAX의 퍼포먼스
```

```
1일 착용
근시/원시
블루라이트
```

제품별 특징 절 — **이 페이지는 이미지 전용이 아니라 실제 텍스트다**:

```
제품별 특징
옵티블루™ 기술 (OptiBlue™) - 높은 레벨의 블루라이트 차단±
옵티블루™ 기술 (OptiBlue™)로 블루라이트의 약 55% 차단
눈물 안정화™ 기술(Tearstable™) - 하루 종일 편안하게
수분 증발을 막고 눈 속 눈물층을 오랫 동안 유지
자외선 차단 1등급 - UVA 90%, UVB 99% 이상 차단#
자외선을 차단하는 효과로 외부활동을 고려한 안전성 제공
1박스 30/90렌즈
1박스에 약 1개월(30렌즈) / 3개월(90렌즈) 분량
```

각주와 경고문:

```
이 제품은 의료기기(시력보정용 매일착용 소프트콘택트렌즈)이며, 사용상의 주의사항과 사용방법을 잘 읽고 사용하십시오. 의료기기심의필 42024-I10-23-2075 (유효기간: 27.06.21)
*아큐브 오아시스 원데이®
±콘택트렌즈를 통해 HEV 광선을 차단하는 것은 망막 보호, 백내장 진행 방지, 눈의 피로 감소, 대비 또는 시력 개선, 눈부심 감소, 저조도 상황에서의 시력 개선, 일주기 리듬/수면 주기 개선 등 착용자에게 안구 건강에 어떠한 이점도 제공하지 않는 것으로 나타났습니다. 자세한 내용은 안 전문가와 상담하세요.
# UVA 316~380nm, UVB 280~315nm 범위에서 측정
자외선은 눈의 노화와 각종 안질환의 원인이 될 수 있습니다. (출처: WHO)
경고: 자외선 차단 콘택트렌즈는 눈과 주변을 완전히 덮지 못하므로 고글이나 선글라스와 같은 자외선 차단 안경을 대신할 수 없습니다. 지침에 따라 자외선 차단 안경은 계속해서 사용해야 합니다. 참고: 자외선 장기간 노출은 백내장과 관련된 위험 요인 중 하나입니다. 환경 조건(고도, 지리, 구름) 및 개인적 요인(야외 활동 범위와 정도) 등 노출  정도는 여러 요인에 따라 달라집니다. 자외선 차단 콘택트렌즈는 유해한 자외선으로부터 눈을 보호하는 데 도움이 됩니다. 그러나 자외선 차단 콘택트렌즈 착용이 백내장이나 기타 안질환 발병 위험을 감소시킨다는 임상 연구는 아직 수행되지 않았습니다. 자세한 내용은 안 전문가와 상담하세요.
KR_2024_319
```

```
(주)한국존슨앤드존슨비전
서울시 용산구 한강대로 92 l 대표자: 김예리
등록번호 569-87-02736
```

전역 내비게이션의 착용 주기 분류에 `1일 착용 / 2주 착용 / 1달 착용`이 있고, 이 제품은 `1일 착용`에 속한다.
제품 브랜드별 분류에도 `오아시스 MAX`가 `신제품` 배지와 함께 있다.

### ⚠ SVG path 좌표 함정 — 이 페이지에서 실제로 발생한다

HTML 안에서 `8.5`는 **14회**, `9.0`은 **66회** 나오는데 **80회 전부 로고 SVG의 `<path d="...">` 좌표**다.
(예: `<path d="M81.1425 1.00488V19.8313C81.1425 25.3325 78.449 29.0506 72.213 29.0506C…`)
`<svg>…</svg>` 블록 밖에서는 `8.5`·`9.0`이 **0건**이다.
**이 제품의 실제 BC가 8.5 / 9.0이라 가장 위험한 오독 함정이다.** 좌표 문자열을 스펙으로 쓰지 않았다.

### 이 페이지에 **없는** 것 (직접 확인)

- BC · DIA · 함수율 · Dk/t · 중심두께 · 도수 범위 **수치 문자열 0건** (`14.3` 0건, `함수` 0건, `Dk` 0건)
- **재질명 없음**: `senofilcon` · `세노필콘` · `실리콘` 문자열 전체에 **0건**
- **허가번호 없음**: `수허` · `허가` 문자열 0건
- **제품명 표기 절 없음**: `제품명` 문자열 0건 (아큐브 오아시스® 2주 페이지에는 있었다)
- **교체(replacement) 문자열 없음.** 페이지에 있는 것은 `1일 착용`이지 `1일 교체`가 아니다
- `TearStable`(대문자 S) 0건 — 이 페이지의 표기는 `Tearstable™`(소문자 s)이며 글로벌 사양의 `TearStable™`과 다르다
- `42024-I10-23-2075`는 **의료기기 광고 사전심의 번호**다. 허가번호가 아니므로 허가 필드에 넣지 않는다

---

## S3. 한국 사용설명서(IFU) PDF

- URL: https://acuvue.co.kr/files/patient-instruction-guides/OasysMAX_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf
- 조회일: 2026-08-28 · HTTP 200 · 123,424 bytes · 3페이지
- 방법: `curl -L` 다운로드 후 `pypdf`로 텍스트 추출 — **텍스트 레이어 정상 추출**(3,916자)

### 제품 연결 근거

한국 IFU 목록 페이지 https://acuvue.co.kr/patient-instruction-guides (2026-08-28, HTTP 200)에서
이 PDF는 **`아큐브® 오아시스 MAX 원데이`** 항목의 `아큐브® 제품 사용 안내` 링크로 게시돼 있다.
같은 목록에 다음 3종이 별도 PDF로 게시돼 있어 변형과 혼동되지 않는다.

| 목록의 제품명 | PDF 파일명 |
| --- | --- |
| 아큐브® 오아시스 MAX 원데이 | `OasysMAX_사용방법.pdf` ← 본 검증 대상 |
| 아큐브® 오아시스 MAX 원데이 난시용 | `OasysMAX_Astigmatism_사용방법.pdf` |
| 아큐브® 오아시스 MAX 원데이 멀티포컬 | `OasysMAX_MF_사용방법.pdf` |
| 아큐브® 오아시스 MAX 원데이 멀티포컬 난시용 | `OasysMAX_MF_Astigmatism_사용방법.pdf` |
| 아큐브 오아시스 원데이® | `Oasys1day_사용방법.pdf` (별개 제품) |

목록 페이지가 표기한 파일 크기는 `103 KB`인데 실제 내려받은 파일은 123,424 bytes다 — 목록의 크기 표기는 최신 파일과 어긋난다.
같은 어긋남이 모이스트(`97 KB` 표기 / 112,074 bytes 실제)와 오아시스 2주(`148 KB` 표기 / 177,029 bytes 실제)에서도 관찰됐다.

### 원문 발췌 — 교체(1일 착용·재사용 금지) 문장

3쪽 `다. 콘택트렌즈 사용 후 보관 및 관리 방법` 절 전문:

```
다. 콘택트렌즈 사용 후 보관 및 관리 방법
1. 일일 착용 콘택트렌즈는 별도의 세척 또는 소독이 필요하지 않다. 렌즈를 제거한 후 폐기
하고 새로운 콘택트렌즈 또는 안경을 착용한다. 
2. 재사용 금지
```

1쪽 `가. 사용전 준비사항` 7번에 파라미터 확인 지시가 있으나 **수치는 없다**:

```
7. 본인에게 맞는 사양의 렌즈(예, 직경, 내면곡률반경, 정점굴절력 등)인지 확인하기 위해 멀
티팩과 각각의 포장지에 기재된 렌즈 파라미터를 확인한다. 일치하지 않는 경우, 사용하지 
않는다.
```

### 이 PDF에 **없는** 것 (전문 검색으로 확인)

- `수허` / `허가` 문자열 **0건** → **이 IFU에는 허가번호가 없다.**
- `오아시스` / `OASYS` / `MAX` / `senofilcon` / `세노필콘` / `실리콘` 문자열 0건 → 제품명·재질명 표기도 없다.
- `자외선` / `UV` / `Dk` / `함수` 문자열 0건.
- `1일` / `교체` 문자열 0건 → 교체주기 문장은 위 `일일 착용 … 제거한 후 폐기` 표현으로만 있다.
  파일럿의 아큐브 오아시스 원데이 IFU에 있던 `착용한 렌즈는 1회(1일) 착용 후 교체하여야 한다.`와 **문장이 다르다.**
- BC · DIA · 함수율 · Dk/t · 중심두께 수치 없음.

> 따라서 이 제품의 허가번호 근거는 **MFDS UDI(S1)가 유일**하다.

---

## S4. ACUVUE Technical Specification Guide (글로벌 기술 사양)

- URL: https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf
- 조회일: 2026-08-28 · HTTP 200 · 2,097,103 bytes · 4페이지
- 방법: `curl -L` 다운로드 → pypdf 텍스트 추출. 표가 다단 컬럼이라 **텍스트 순서만으로는 열 귀속이 흔들리므로,
  pypdf `visitor_text`로 각 문자열의 좌표(x, y)를 함께 뽑아 열·행 귀속을 확인**했다.
- 문서 식별 표기: 4쪽 `© Johnson & Johnson and its afﬁliates 2025  |  PP2020ACLP4800 v13`, 각 쪽 하단 `AS112401`
- **1쪽이 OASYS MAX 1-Day 계열 표다.** (2쪽은 1-DAY ACUVUE MOIST·DEFINE·ACUVUE 2, 3쪽은 ACUVUE OASYS 2주·VITA)

### S4-0. ⚠ 열 오귀속 함정 — 1쪽 6개 열 중 5개가 값이 겹친다

1쪽 열 머리글(y ≈ 499 / 490 / 481)의 좌표별 구성:

| 열 | 값 영역 x | 머리글 원문 |
| --- | --- | --- |
| 1 | ≈ 157–195 | `ACUVUE® OASYS` + `MAX 1-Day` ← **본 검증 대상(구면)** |
| 2 | ≈ 259–300 | `ACUVUE® OASYS` + `MAX 1-Day` + `MULTIFOCAL` |
| 3 | ≈ 362–405 | `ACUVUE® OASYS` + `MAX 1-Day for` + `ASTIGMATISM` |
| 4 | ≈ 466–506 | `ACUVUE® OASYS` + `MAX 1-Day MULTIFOCAL` + `for ASTIGMATISM` |
| 5 | ≈ 575–612 | `ACUVUE® OASYS` + `1-Day` ← **별개 제품(아큐브 오아시스 원데이)** |
| 6 | ≈ 675–722 | `ACUVUE® OASYS` + `1-Day for` + `ASTIGMATISM` |

**가장 위험한 것은 5열(ACUVUE® OASYS 1-Day)이다.**
1열과 5열은 재질(`senofilcon A`) · Dk/t(`121 x 10-9 (-3.00D)`) · 함수율(`38%`) ·
중심두께(`0.085`) · BC/DIA(`8.5/14.3`, `9.0/14.3`)가 **전부 같다.**
다른 것은 Pack Size · Technology · **UV 차단율** · Plano 도수 취급뿐이다.
즉 열을 잘못 읽으면 UV 말고는 아무 값도 틀리지 않아 **오류가 드러나지 않는다.** 좌표로 열을 고정했다.

2열(MULTIFOCAL)은 Dk/t `147`, 중심두께 `0.070`, BC `8.4/14.3`으로 다르다.

### S4-1. 1쪽 좌표 추출 — 1열 `ACUVUE® OASYS MAX 1-Day`(x 150–215)만 필터링

행 라벨은 왼쪽 x ≈ 33–61에 있고, 값은 같은 y 좌표에 놓인다.

```
   166.4    499.1  ACUVUE® OASYS               <- 열 머리글
   178.4    489.5  MAX 1-Day                   <- 부제 (MULTIFOCAL·ASTIGMATISM 없음 = 구면)
   162.6    454.0  Daily Disposable Lens       <- Recommended Replacement (label y 458.1/449.1)
   179.7    431.6  Daily Wear                  <- Wearing Schedule (label y 431.2)
   168.8    410.1  30 and 90 Packs†            <- Pack Size (label y 410.7)
   157.4    385.7  • TearStable™  Technology   <- Technology (label y 382.3)
   157.4    377.7  • OptiBlue™  Light Filter**
   176.8    351.2  senoﬁlcon A                 <- Lens Material (label y 351.1)
   167.5    329.6  121 x 10-9 (-3.00D)         <- Dk/t Value1 (edge corrected) (label y 333.8/325.8)
   191.4    309.7  38%                         <- Water Content (label y 309.5)
   162.7    272.5  Blocks 100% of UVB          <- Approximate UV Blocking*† (label y 272.3/263.3)
   170.5    263.5  & 99.9% of UVA
   193.9    224.7  No                          <- Orientation Mark (label y 225.6)
   189.1    204.8  0.085                       <- Center Thickness (mm @ -3.00D) (label y 210.6/202.6)
   180.4    182.4  8.5/14.3                    <- Parameters BC (mm) / Dia (mm) (label y 186.8/177.8)
   190.7    174.6  Plano                       <- Power Range (D) (label y 169.8)
   171.6    166.7  -0.50D to -12.00D
   171.3    158.8  +0.50D to +8.00D
   166.1    152.3  (in 0.50D steps above ±6.00D)
   180.4    136.6  9.0/14.3                    <- 두 번째 BC/Dia
   190.7    128.7  Plano
   171.6    120.8  -0.50D to -12.00D
   171.3    112.9  +0.50D to +8.00D
   166.1    106.4  (in 0.50D steps above ±6.00D)
   (Visibility Tint 행 y 290.0 · I/O Mark 행 y 245.2 에는 이 열에 값이 없다)
```

대조용 — 5열 `ACUVUE® OASYS 1-Day`(x 570–625):

```
   582.7    499.1  ACUVUE® OASYS
   605.7    490.1  1-Day
   580.9    454.0  Daily Disposable Lens
   596.9    431.6  Daily Wear
   602.7    410.7  90 Pack                     <- 1열은 30 and 90 Packs†
   580.9    381.7  HydraLuxe® Technology       <- 1열은 TearStable™ + OptiBlue™
   594.1    351.1  senoﬁlcon A                 <- 같음
   586.6    329.6  121 x 10-9 (-3.00D)         <- 같음
   608.6    309.5  38%                         <- 같음
   575.3    272.3  Blocks >99.9% of UVB        <- 다름
   591.2    263.4  & 96% of UVA                <- 다름
   605.3    204.7  0.085                       <- 같음
   597.4    182.7  8.5/14.3                    <- 같음
   597.4    146.0  9.0/14.3                    <- 같음
```

1쪽 하단 각주 원문:

```
† 9.0 Base Curve only available in the 30-lens pack.    £ Plus powers only available in the 30-lens pack.
```

표기 주의:
- `senofilcon A`는 PDF에서 `fi` 합자 글리프(U+FB01)로 그려져 추출 문자열이 `senoﬁlcon A`가 된다. 인쇄된 단어는 `senofilcon A`다.
- `121 x 10-9`의 `-9`는 인쇄물에서 위첨자다. 추출 문자열은 `121 x 10-9 (-3.00D)`.
- UV 행은 이 열에서 UVB·UVA 모두 부등호 없이 `Blocks 100% of UVB` / `& 99.9% of UVA`로 인쇄된다.
  같은 표의 5열(오아시스 원데이)만 `>99.9%`로 부등호가 붙는다.

### S4-2. 4쪽 각주 원문 — Dk/t 시험 조건, 블루라이트, UV 경고

```
1. Oxygen transmissibility measured via polarographic method at centre -3.00D lens using boundary corrected, edge corrected Dk value. Units (cm/sec) (ml O2/ml x mm Hg) at 35° C.
**Filtering of HEV light by contact lenses has not been demonstrated to confer any health beneﬁt to the user, including but not limited to retinal protection, protection from cataract progression, reduced eye strain, improved contrast, improved acuity, reduced glare, improved low light vision, or improved circadian rhythm/sleep cycle. The Eye Care Professional should be consulted for more information.
* Helps protect against transmission of harmful UV radiation to the cornea and into the eye.
† WARNING: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear such as UV-absorbing goggles or sunglasses because they do not completely cover the eye and surrounding area. You should continue to use UV-absorbing eyewear as directed. NOTE: Long-term exposure to UV radiation is one of the risk factors associated with cataracts. Exposure is based on a number of factors such as environmental conditions (altitude, geography, cloud cover) and personal factors (extent and nature of outdoor activities). UV-blocking contact lenses help provide protection against harmful UV radiation. However, clinical studies have not been done to demonstrate that wearing UV-blocking contact lenses reduces the risk of developing cataracts or other eye disorders. Consult your eye care practitioner for more information.
```

4쪽 `Important Information for Contact Lens Wearers` 원문에는 다음 문장이 있다.

```
To help avoid these problems, follow the wear and replacement schedule and the lens care instructions provided by your eye doctor.
```

> 이 문서는 `Recommended Replacement`(교체주기)와 `Wearing Schedule`(착용방식)을 **서로 다른 행**으로 분리해 적는다.
> 이 제품은 두 행이 각각 `Daily Disposable Lens` / `Daily Wear`다.

---

## ⚠ UV — 한국 표기와 글로벌 표기가 다르다 (conflict)

| 출처 | 인쇄된 원문 | 조건 |
| --- | --- | --- |
| 한국 공식 제품 페이지 | `자외선 차단 1등급 - UVA 90%, UVB 99% 이상 차단` | 각주 `# UVA 316~380nm, UVB 280~315nm 범위에서 측정` |
| ACUVUE Technical Specification Guide 1쪽 1열 | `Blocks 100% of UVB` / `& 99.9% of UVA` | 행 제목 `Approximate UV Blocking*†` |

두 값을 하나로 합치지 않고 병기한다.
같은 지역 차이가 파일럿의 아큐브 오아시스 원데이에서도 관찰됐다
(한국 `UVA 90%, UVB 99% 이상` / 글로벌 `Blocks >99.9% of UVB & 96% of UVA`).
**한국 페이지의 문장은 두 제품이 완전히 같고, 글로벌 사양의 숫자는 두 제품이 다르다.**

MFDS 등록 모델명 `ACUVUE® OASYS MAX 1-Day Contact Lenses`에는 UV 관련 문구가 없어
UV 차단 기능 자체의 한국 **허가 원장** 근거는 없다(한국 제품 페이지 표기가 한국 측 유일 근거).

---

## 확인하지 못한 것

1. **한국 표기 물성값 일체** — 한국 제품 페이지·한국 IFU 어디에도 BC·DIA·함수율·Dk/t·중심두께·재질명이 없다.
   이 제품의 모든 물성값은 **글로벌 기술 사양이 유일한 근거**다.
2. **한국 유통 BC·도수 구성** — 글로벌 사양은 BC 8.5 / 9.0에 `30 and 90 Packs†`(각주: 9.0 BC는 30렌즈 팩에만)인데
   MFDS UDI 포장내수량은 `1`·`5`·`30`·`90`이다. 한국 파라미터 표가 없어 한국에서 실제 유통되는 BC 구성을 확인하지 못했다.
3. **허가 상태(유효·취하)** — MFDS UDI 화면에는 상태 열이나 품목허가 상세 링크가 없다.
   다만 이 제품은 오아시스 2주와 달리 **허가번호가 1건뿐**이라 병기 문제가 발생하지 않는다.
4. **UV 두 표기의 관계** — 한국의 `자외선 차단 1등급`이 어떤 기준(등급 분류)인지, 글로벌 `Approximate UV Blocking`의
   `100% / 99.9%`와 어떻게 대응하는지는 두 문서 어디에도 설명이 없다. 값만 병기하고 해석하지 않는다.
5. **`Tearstable` / `TearStable` 표기 차이** — 한국 페이지는 `눈물 안정화™ 기술(Tearstable™)`, 글로벌 사양은
   `TearStable™  Technology`로 대소문자가 다르다. 어느 쪽이 정정인지 확인하지 못해 각 원문 그대로 둔다.
6. **`curl` 경로의 MFDS 조회 재현** — 세션 쿠키를 받아 같은 파라미터로 POST해도 `{"dataList":[]}`가 돌아왔다.
   원인을 특정하지 못했고, 브라우저 세션 경로로만 재현했다.
