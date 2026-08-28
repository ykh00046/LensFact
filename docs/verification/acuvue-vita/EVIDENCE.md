# 검증 근거 — 아큐브 비타® (ACUVUE® VITA® · 1달)

검증일: 2026-08-28
대상: 근시·원시용 투명 구면, 1달 교체 (**난시용은 별도 허가·별도 IFU·별도 열이므로 제외**)
제조사: Johnson & Johnson Vision · 한국 유통: (주)한국존슨앤드존슨비전

이 문서는 실제로 가져온 공식 자료의 **원문**만 담는다. 값의 해석·정규화는 하지 않는다.

가져온 출처와 상태:

| # | 출처 | URL | 상태 |
| --- | --- | --- | --- |
| S1 | MFDS 의료기기 UDI 표준코드 조회 | https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do | 200 · 조회 정상 |
| S2 | 아큐브 비타® 한국 공식 제품 페이지 | https://acuvue.co.kr/products/acuvue-vita | 200 · 61,119 bytes |
| S3 | 아큐브 비타® 한국 사용설명서 PDF | https://acuvue.co.kr/files/patient-instruction-guides/Vita_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf | 200 · 156,489 bytes · 3쪽 |
| S3b | 한국 IFU 목록 페이지 | https://acuvue.co.kr/patient-instruction-guides | 200 · 69,126 bytes |
| S4 | ACUVUE Technical Specification Guide PDF | https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf | 200 · 2,097,103 bytes · 4쪽 |

---

## S1. MFDS 의료기기 UDI 표준코드 조회 — 한국 유통·허가 식별

- URL: https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do
- 조회일: 2026-08-28
- 방법: `schStddCdLstView.do`를 먼저 GET해 세션 쿠키(`JSESSIONID`, `elevisor_for_j2ee_uid`)를 받은 뒤,
  화면의 `searchList()`가 실제로 쓰는 것과 같은 엔드포인트 `POST /msismext/udi/uif/selectStddCdLstAjax.do`를 같은 세션으로 호출했다.
  화면은 `form[name=baseForm]`을 `serializeArray()`해서 이 엔드포인트로 POST하므로 폼 입력과 동일한 요청이다.
- 공통 조회 조건: `udiCd=` · `ediCd=` · `prdlNm=` · `sDate=` · `eDate=` 비움, `dateCancelChk=N`(통합정보등록일자제외 체크됨), `selRcprslryTrgtYn=`(전체)
- 등록일자 구간 조회를 할 때만 `dateCancelChk`를 빼고 `sDate` / `eDate`를 채웠다.

> ⚠ 도구 주의 — 한글 검색어를 셸 인자로 넘기면 **0건이 나온다.**
> Git Bash에서 `curl --data-urlencode "bplcNm=한국존슨앤드존슨비전"`으로 보낸 요청은 `{"dataList":[]}`를 돌려줬다.
> 같은 조건을 파이썬 `urllib.parse.urlencode(..., encoding="utf-8")`로 보내면 51,144건이 나온다.
> **0건을 "등록 없음"으로 읽지 않도록 한글 조건은 반드시 UTF-8 인코딩을 직접 확인해야 한다.**

### S1-1. 조회 조건별 건수 — 시도한 모든 표기

| # | `bplcNm` | `modelnm` | `itemPermitNo` | 조회 건수(`totCnt`) |
| --- | --- | --- | --- | --- |
| Q1 | `한국존슨앤드존슨비전` | (비움) | | 51,144 |
| Q2 | `한국존슨앤드존슨비전` | `VITA` (전부 대문자) | | **248** |
| Q3 | `한국존슨앤드존슨비전` | `Vita` (파스칼) | | **4,950** |
| Q4 | `한국존슨앤드존슨비전` | `vita` (전부 소문자) | | **0** |
| Q5 | `한국존슨앤드존슨비전` | `ACUVUE VITA` (® 없음) | | **248** |
| Q6 | `한국존슨앤드존슨비전` | `ACUVUE® VITA®` (® 있음) | | **0** |
| Q7 | `한국존슨앤드존슨비전` | `ACUVUE VITA Brand Contact Lenses` | | **248** |
| Q8 | `한국존슨앤드존슨비전` | `ACUVUE® VITA® Brand Contact Lenses` | | **0** |
| Q9 | `한국존슨앤드존슨비전` | `VITA Brand` | | **248** |
| Q10 | `한국존슨앤드존슨비전` | `senofilcon` | | **0** |
| Q11 | `한국존슨앤드존슨비전` | `senofilcon C` | | **0** |
| Q12 | `한국존슨앤드존슨비전` | `Senofilcon` | | **0** |
| Q13 | `한국존슨앤드존슨비전` | `HydraMax` | | **0** |
| Q14 | `한국존슨앤드존슨비전` | `HYDRAMAX` | | **0** |
| Q15 | `한국존슨앤드존슨비전` | `비타` (한글) | | **0** |
| Q16 | (비움) | `VITA` | | 5,214 (타사 `HP VITARAN` 등 포함) |
| Q17 | (비움) | (비움) | `수허 16-568 호` | **248** |
| Q18 | (비움) | (비움) | `수허 18-97 호` (난시용) | **4,950** |

주의 1 — **® 함정이 구면과 난시용을 가른다.**
아큐브 비타 **구면** 등록 모델명에는 ®·™이 **없고**(`ACUVUE VITA Brand Contact Lenses`),
**난시용** 등록 모델명에는 ®·™이 **있다**(`ACUVUE® Vita™ Brand Contact Lenses for Astigmatism`).
따라서 Q6·Q8(® 포함)은 **0건**이다. 오아시스 2주에서는 ® 유무가 같은 제품의 두 허가번호를 갈랐지만,
비타에서는 ® 유무가 **구면과 난시용을 갈랐다.** 제품군마다 규칙이 다르다.

주의 2 — **대소문자를 구분하고, 구면과 난시용의 표기가 서로 다르다.**
구면은 `VITA`(전부 대문자), 난시용은 `Vita`(파스칼)다. `vita`(소문자)는 0건이다.
`Vita`로 검색해 나온 4,950건을 비타 구면으로 오인하면 **전부 난시용**이다.

주의 3 — **재질명·기술명으로는 검색되지 않는다.** `senofilcon` · `senofilcon C` · `HydraMax` 모두 0건이다.
등록 모델명·업체 제품 명칭 어디에도 재질명이 없다.

주의 4 — **한글 `비타`는 모델명 검색으로 0건이다.** 한글 표기는 업체 제품 명칭(`prdtNmCn`)에만 있고
이 화면의 검색 폼에는 업체 제품 명칭 입력란이 없다.

### S1-2. Q2(`modelnm=VITA`, 248건) 전수 집계 — distinct 1건

248행을 모두 가져와 집계한 결과 distinct **1건**:

```
(주)한국존슨앤드존슨비전 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 16-568 호 | ACUVUE VITA Brand Contact Lenses | ACUVUE VITA Brand Contact Lenses (아큐브 비타) ## 248
```

형식: `업체명 | 업체구분 | 소분류 품목 명칭 | 등급 | 품목허가번호 | 모델명 | 업체 제품 명칭 ## 행 수`

- 고유식별자(UDI-DI) 248개가 모두 서로 다르다(중복 0).
- 포장내수량 분포: `6` 124건 · `12` 124건.
- 요양급여 대상 치료재료 여부: 248건 전부 `N`.
- 통합정보 등록일자 구간 조회: **248건 전부 2021년**(2005~2020 0건 · 2022~2026-08-28 0건).

> **오아시스 2주와 달리 허가번호가 1건뿐이다.** 오아시스 2주 구면은 동일한 UDI-DI 377개에
> `수허 05-310 호` · `수허 08-938 호` 두 허가번호가 붙어 병기가 필요했지만, 비타 구면은 그런 중복이 없다.

### S1-2b. Q1(`bplcNm=한국존슨앤드존슨비전`, 51,144건) 전수 집계 — 누락 검증

모델명 조건 없이 업체명만으로 51,144행을 전부 가져와 집계한 결과 distinct **19건**이다.
`VITA` / `Vita` / `비타`가 들어간 등록은 그 19건 중 **2건뿐**이며, 나머지 17건에는 비타로 오인할 항목이 없다.
즉 **아큐브 비타 구면의 한국 등록은 `수허 16-568 호` 하나뿐**이고, 검색어 표기 때문에 놓친 등록은 없다.

```
수허 05-310 호 | ACUVUE® OASYS® Brand Contact Lenses with HYDRACLEAR® PLUS | ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS (아큐브 오아시스®) ## 377
수허 06-1 호 | 1-Day ACUVUE® MOIST® Brand Contact Lenses (Etafilcon A) Visibility Tinted with UV Blocker | 1-Day ACUVUE MOIST Brand Contact Lenses (Etafilcon A) Visibility Tinted with UV Blocker(원데이 아큐브 모이스트®) ## 499
수허 07-29 호 | ACUVUEⓡ 2 DEFINE Brand Contact Lenses (Etafilcon A) with UV Blocker |  ## 64
수허 08-938 호 | ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS | ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS ## 377
수허 09-873 호 | 1-DAY ACUVUE TruEye Brand Contact Lenses |  ## 349
수허 10-43 호 | ACUVUE OASYS Brand Contact Lens for ASTIGMATISM |  ## 4950
수허 11-1308 호 | 1 DAY ACUVUE DEFINE Brand Contact Lenses (etafilcon A) with LACREON |  ## 1492
수허 11-384 호 | 1-DAY ACUVUE MOIST Brand Contact Lenses(etafilcon A) for ASTIGMATISM |  ## 4767
수허 15-1673 호 | 1-DAY ACUVUE MOIST Brand MULTIFOCAL Contact Lenses (etafilcon A) | 1-Day ACUVUE MOIST Brand MULTIFOCAL Contact Lenses (etafilcon A) ## 366
수허 16-499 호 | ACUVUE OASYS Brand Contact Lenses with HydraLuxe | ACUVUE OASYS Brand Contact Lenses with HydraLuxe (아큐브 오아시스 원데이) ## 497
수허 16-568 호 | ACUVUE VITA Brand Contact Lenses | ACUVUE VITA Brand Contact Lenses (아큐브 비타) ## 248        <- 본 검증 대상
수허 17-520 호 | ACUVUE OASYS® Brand Contact Lenses with HydraLuxe™ for ASTIGMATISM | ACUVUE OASYS® Brand Contact Lenses with HydraLuxe™ for ASTIGMATISM (아큐브 오아시스 원데이 난시용) ## 10398
수허 18-97 호 | ACUVUE® Vita™ Brand Contact Lenses for Astigmatism | ACUVUE® Vita™ Brand Contact Lenses for Astigmatism (아큐브 비타 난시용) ## 4950   <- 난시용, 대상 아님
수허 19-277 호 | ACUVUE® OASYS with Transitions™ | ACUVUE® OASYS with Transitions™ (아큐브ⓡ 오아시스 트랜지션스™) ## 166
수허 22-253 호 | ACUVUE® OASYS MAX 1-Day Contact Lenses | ACUVUE® OASYS MAX 1-Day Contact Lenses, 아큐브® 오아시스 맥스 원데이, 아큐브® 오아시스 MAX 원데이 ## 508
수허 23-190 호 | ACUVUE® OASYS MAX 1-Day MULTIFOCAL Contact Lenses | ... ## 732
수허 24-225 호 | ACUVUE® OASYS MAX 1-Day Contact Lenses for ASTIGMATISM | ... ## 14850
수허 24-44 호 | ACUVUE® Abiliti™ 1-Day Soft Therapeutic Lenses for Myopia Management | ACUVUE® Abiliti™ 1-Day Soft Therapeutic Lenses for Myopia Management ## 64
수허 26-21 호 | ACUVUE® OASYS MAX 1-Day MULTIFOCAL Contact Lenses for ASTIGMATISM | ... ## 5490
```

형식: `품목허가번호 | 모델명 | 업체 제품 명칭 ## 행 수` (긴 업체 제품 명칭은 `...`로 줄임 — 원문 전체는 위 표 형식의 조회 결과에 있다)

### S1-3. Q3(`modelnm=Vita`, 4,950건) 전수 집계 — **난시용, 본 검증 대상 아님**

4,950행을 전수 집계한 결과 distinct **1건**:

```
(주)한국존슨앤드존슨비전 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 18-97 호 | ACUVUE® Vita™ Brand Contact Lenses for Astigmatism | ACUVUE® Vita™ Brand Contact Lenses for Astigmatism (아큐브 비타 난시용) ## 4950
```

- 포장내수량 전부 `6`. UDI-DI 4,950개 전부 고유.
- **구면(`수허 16-568 호`)과 난시용(`수허 18-97 호`)은 서로 다른 허가번호다.** 값을 섞지 않았다.

### S1-4. 화면에 표시된 결과 행 — 원문 그대로

`bplcNm=한국존슨앤드존슨비전` + `modelnm=VITA`:

```
총 248건이 조회되었습니다.

1 | 매일착용소프트콘택트렌즈 | 2 | ACUVUE VITA Brand Contact Lenses (아큐브 비타) | (주)한국존슨앤드존슨비전 | 수허 16-568 호 | ACUVUE VITA Brand Contact Lenses | 00733905987410 | N |  | 12
2 | 매일착용소프트콘택트렌즈 | 2 | ACUVUE VITA Brand Contact Lenses (아큐브 비타) | (주)한국존슨앤드존슨비전 | 수허 16-568 호 | ACUVUE VITA Brand Contact Lenses | 00733905987427 | N |  | 12
3 | 매일착용소프트콘택트렌즈 | 2 | ACUVUE VITA Brand Contact Lenses (아큐브 비타) | (주)한국존슨앤드존슨비전 | 수허 16-568 호 | ACUVUE VITA Brand Contact Lenses | 00733905987434 | N |  | 12
```

열 순서: 연번 | 소분류 품목 명칭 | 등급 | 업체 제품 명칭 | 업체명 | 품목허가번호 | 모델명 | 고유식별자(UDI-DI)코드 | 요양급여 대상 치료재료 여부 | 치료재료코드 | 포장내수량

**허가번호 원문: `수허 16-568 호`** (앞에 `수허`, 공백, 숫자-숫자, 공백, `호`)

업체 제품 명칭 원문 `ACUVUE VITA Brand Contact Lenses (아큐브 비타)`는
한국 공식 제품 페이지 하단의 제품명 표기(S2)와 **문자열이 그대로 일치**한다.

---

## S2. 한국 공식 제품 페이지 — 아큐브 비타®

- URL: https://acuvue.co.kr/products/acuvue-vita
- 조회일: 2026-08-28 · HTTP 200 · 61,119 bytes
- 방법: `curl -L`로 HTML 저장 후 script/style/svg 제거 + 태그 제거(222줄 추출)

### 페이지 텍스트에서 확인된 항목 (원문 발췌)

```
아큐브 비타®
한 달 착용에도 촉촉하게!
습윤성 연구로 탄생하다!
아큐브의 콘택트렌즈 습윤성 연구를 통해 한 달 동안 촉촉함이 유지되는 경제적인 렌즈, 아큐브 비타®를 경험해 보세요! (근시용)
안경원 찾기
1달 착용
근시/원시
```

```
이 제품은 의료기기(시력보정용 매일착용 소프트콘택트렌즈)이며, 사용상의 주의사항과 사용방법을 잘 읽고 사용하십시오. 의료기기 광고심의필 52025-I10-31-3477 (유효기간: 28.08.27)
제품명
- ACUVUE VITA Brand Contact Lenses (아큐브 비타)
- ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS (아큐브 오아시스®)
† HYDRACLEAR® PLUS 대비
1. JJV Data on File 2017. HydraMax Technology Definition.
2. JJV Data on File 2021. ACUVUE VITA with HydraMax Technology Maximizes and Maintains Hydration.
3. UVA 316~380nm, UVB 280~315nm 범위에서 측정
4. 자외선은 눈의 노화와 각종 안질환의 원인이 될 수 있습니다. (출처: WHO)
경고: 자외선 차단 콘택트렌즈는 눈과 주변을 완전히 덮지 못하므로 고글이나 선글라스와 같은 자외선 차단 안경을 대신할 수 없습니다. 지침에 따라 자외선 차단 안경은 계속해서 사용해야 합니다. 참고: 자외선 장기간 노출은 백내장과 관련된 위험 요인 중 하나입니다. 환경 조건(고도, 지리, 구름) 및 개인적 요인(야외 활동 범위와 정도) 등 노출 정도는 여러 요인에 따라 달라집니다. 자외선 차단 콘택트렌즈는 유해한 자외선으로부터 눈을 보호하는 데 도움이 됩니다. 그러나 자외선 차단 콘택트렌즈 착용이 백내장이나 기타 안질환 발병 위험을 감소시킨다는 임상 연구는 아직 수행되지 않았습니다. 자세한 내용은 안 전문가와 상담하세요.
KR_2025_465
```

```
(주)한국존슨앤드존슨비전
서울시 용산구 한강대로 92 l 대표자: 김예리
등록번호 569-87-02736
```

전역 내비게이션의 착용 주기 분류에 `1일 착용 / 2주 착용 / 1달 착용`이 있고, 이 제품은 `1달 착용`에 속한다.
제품 브랜드별 분류에는 `오아시스 MAX / 오아시스 / 모이스트 / 비타 / 디파인`이 있다.

⚠ 페이지 본문 카피에는 `(근시용)`이라고만 적혀 있으나, 같은 화면의 제품 배지는 `근시/원시`다. 두 표기가 같은 페이지 안에서 어긋난다.

### 이 페이지에 **없는** 것 (직접 확인)

- BC · DIA · 함수율 · Dk/t · 중심두께 · 도수 범위 **수치 문자열 0건**
  - HTML 안의 `8.4`(26회) · `8.8`(32회) · `8.5`(14회)는 **전부 로고 SVG의 path 좌표**다.
    (예: `<path d="M81.1425 1.00488V19.8313C81.1425 25.3325 78.449 29.0506 72.213...`)
    이 제품의 실제 BC가 8.4 / 8.8이라 **가장 위험한 오독 함정**이다. 좌표 문자열을 스펙으로 쓰지 않았다.
  - `14.0` · `41%` · `함수` · `Dk` 문자열은 HTML 전체에 **0건**.
- **재질명 없음**: `senofilcon` · `세노필콘` 문자열 HTML 전체에 **0건**.
- UV 차단 **퍼센트 수치 0건**. 텍스트에는 위 경고문과 측정 파장 범위(각주 3)만 있다.
- 허가번호 문자열 없음(`수허` · `허가` 0건).
- **교체(replacement) 문자열 0건.** 페이지에 있는 것은 `1달 착용` · `한 달 착용에도 촉촉하게!`이지 `1달 교체`가 아니다.
  `30일` 문자열도 0건이다.
- 연속착용·수면착용 언급 없음(`연속` · `수면` 0건).
- 제품 기술·특징 설명은 **이미지 전용**이다:
  `content-sm.webp`(alt `아큐브 비타의 기술`), `features-sm.webp`(alt `아큐브 비타의 특징`)
  — 대체 텍스트에 수치가 없어 **본 검증에서 수치를 추출하지 못했다.**
- `52025-I10-31-3477`은 **의료기기 광고 사전심의 번호**다. 허가번호가 아니므로 허가 필드에 넣지 않는다.
  (같은 사이트 오아시스 페이지의 `52025-I10-31-3479`와 끝자리만 다르다.)

---

## S3. 한국 사용설명서(IFU) PDF

- URL: https://acuvue.co.kr/files/patient-instruction-guides/Vita_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf
- 조회일: 2026-08-28 · HTTP 200 · 156,489 bytes · 3페이지
- 방법: `curl -L` 다운로드 후 `pypdf` 6.16.2로 텍스트 추출 — **텍스트 레이어 정상 추출**(5,306자)

### 제품 연결 근거

한국 IFU 목록 페이지 https://acuvue.co.kr/patient-instruction-guides (2026-08-28, HTTP 200)에서
이 PDF는 **`아큐브 비타®`** 항목의 `아큐브® 제품 사용 안내` 링크로 게시돼 있다.
바로 아래에 **`아큐브 비타® 난시용`**이 `VitaAstigmatism_사용방법.pdf`로 **별도 게시**돼 있어 구면과 난시용이 문서 단위로 갈린다.
(목록 페이지가 표기한 파일 크기는 `144 KB`인데 실제 내려받은 파일은 156,489 bytes다 — 오아시스·모이스트에서도 관찰된 같은 어긋남이다.)

### 원문 발췌 — 재사용 렌즈 관리 절 (교체주기 문장이 아님)

```
보관
1. 다시 사용하기 전까지 렌즈는 소독되어 닫힌 케이스 안에 보관되어야 한다. 렌즈를 사용하지 않을
때에는 항상 권장 소독용액으로 렌즈가 완전히 덮여 있어야 한다. 렌즈의 마른상태가 지속되면 다시
수화되기 어렵다. 렌즈가 완전히 마르게 되면 폐기하고 새로운 렌즈로 교체한다.
```

```
4. 케이스에 있는 라벨 또는 안경사/안 전문가가 알려준 대로 렌즈 케이스를 교체한다.
```

문서 안의 `교체` 2회는 위 두 문장(**마른 렌즈 폐기 / 렌즈 케이스 교체**)뿐이다.
모이스트·오아시스 원데이 IFU에 있던 `1회(1일) 착용 후 교체하여야 한다` 같은 **교체주기 문장이 이 IFU에는 없다.**

### 이 PDF에 **없는** 것 (전문 검색으로 확인)

- `수허` / `허가` 문자열 **0건** → **이 IFU에는 허가번호가 없다.**
- `비타` / `VITA` / `Vita` / `senofilcon` / `세노필콘` 문자열 0건 → 제품명·재질명 표기도 없다.
- `1개월` / `1달` / `한 달` / `30일` 문자열 0건 → **교체주기 표기 없음.**
- `연속` / `자외선` / `UV` / `Dk` / `함수` 문자열 0건.
- BC · DIA · 함수율 · Dk/t · UV 수치 없음.

> 문서는 사용 전 준비 / 착용·제거 방법 / 사용 후 보관·관리(세척·소독·보관) 절만 담고 있다.
> 따라서 이 제품의 허가번호 근거는 **MFDS UDI(S1)가 유일**하고,
> 교체주기의 한국 근거는 **한국 제품 페이지의 `1달 착용` 배지(S2)가 유일**하다.

---

## S4. ACUVUE Technical Specification Guide (글로벌 기술 사양)

- URL: https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf
- 조회일: 2026-08-28 · HTTP 200 · 2,097,103 bytes · 4페이지
- 방법: `curl -L` 다운로드 → pypdf 텍스트 추출. 표가 다단 컬럼이라 **텍스트 순서만으로는 열 귀속이 흔들리므로,
  pypdf `visitor_text`로 각 문자열의 좌표(x, y)를 함께 뽑아 열·행 귀속을 확인**했다(3쪽 151개 문자열).
- 문서 식별 표기: 4쪽 하단 `© Johnson & Johnson and its affiliates 2025  |  PP2020ACLP4800 v13`, 각 쪽 하단 `AS112401`
- `VITA` 문자열은 **3쪽에 2회, 4쪽에 1회**만 나온다. 1·2쪽에는 없다.

### S4-0. ⚠ 열 오귀속 함정 — 비타는 오아시스와 숫자 4개가 겹친다

3쪽 표에서 **`ACUVUE® VITA®`(구면) 열과 `ACUVUE® OASYS`(2주 구면) 열은 다음 값이 동일하다.**

| 행 | ACUVUE® OASYS (x≈152–203) | ACUVUE® VITA® (x≈547–580) |
| --- | --- | --- |
| Parameters BC/Dia | `8.4/14.0` · `8.8/14.0` | **동일** `8.4/14.0` · `8.8/14.0` |
| Center Thickness | `0.070` | **동일** `0.070` |
| Dk/t Value1 | `147 x 10-9 (-3.00D)` | **동일** `147 x 10-9 (-3.00D)` |
| Orientation Mark | `No` | **동일** `No` |

두 열이 갈리는 것은 다음뿐이다.

| 행 | ACUVUE® OASYS | ACUVUE® VITA® |
| --- | --- | --- |
| Recommended Replacement | `1 Week EW or` / `2 Weeks DW` (2줄) | `1 Month DW` (1줄) |
| Wearing Schedule | `Extended Wear` / `Daily Wear` (2줄) | `Daily Wear` (1줄) |
| Pack Size | `12 and 24 Packs` | `6 and 12 Packs` |
| Technology | `HYDRACLEAR® PLUS Technology` | `HydraMax® Technology` |
| Lens Material | `senofilcon A` | `senofilcon C` |
| Water Content | `38%` | `41%` |
| Approximate UV Blocking | `Blocks >99.9% of UVB` / `& ~96% of UVA` | `Blocks >99% of UVB` / `& >93% of UVA` |
| Power Range | `Plano (6 Pack only)` 포함 | Plano 표기 **없음** |

**좌표로 열을 고정하지 않으면 이 두 제품이 그대로 섞인다.** 본 검증은 x 좌표로 열을 고정했다.

또한 **3쪽 마지막 열(x≈660–706)은 `ACUVUE® VITA® for ASTIGMATISM`**이며 본 검증 대상이 아니다.
그 열의 값은 `senofilcon C` · `41%` · `1 Month DW`로 구면과 겹치지만 `129 x 10-9 (-3.00D)` · `0.080` · `8.6/14.5`로 다르다.

### S4-1. 3쪽 좌표 추출 — `ACUVUE® VITA®` 구면 열(x ≈ 547–580)

행 라벨은 왼쪽 x ≈ 35–37에 있고, 값은 같은 y 좌표(±1)에 놓인다.
아래는 x 540–625 구간(= VITA 구면 열)만 필터링한 결과 전부다.

```
   547.6    549.9  ACUVUE® VITA®              <- 열 머리글 (부제 없음 = 구면)
   561.9    505.3  1 Month DW                 <- Recommended Replacement (label y 509.1/500.3)
   565.4    482.4  Daily Wear                 <- Wearing Schedule (label y 482.4)
   558.1    463.3  6 and 12 Packs             <- Pack Size (label y 463.3)
   547.0    436.7  HydraMax® Technology       <- Technology (label y 436.7)
   562.4    408.6  senoﬁlcon C                <- Lens Material (label y 408.6)
   551.7    387.2  147 x 10-9 (-3.00D)        <- Dk/t Value1 (edge corrected) (label y 392.7/384.9)
   577.1    367.8  41%                        <- Water Content (label y 367.8)
   547.0    331.8  Blocks >99% of UVB         <- Approximate UV Blocking*† (label y 332.2/323.4)
   556.9    323.0  & >93% of UVA
   (Visibility Tint 행 y 348.0 · I/O Mark 행 y 304.9 에는 이 열에 값이 없다)
   578.6    285.5  No                         <- Orientation Mark (label y 286.5)
   574.8    266.4  0.070                      <- Center Thickness (mm @ -3.00D) (label y 272.4/264.5)
   566.5    245.0  8.4/14.0                   <- Parameters BC (mm) / Dia (mm) (label y 251.4/241.6)
   557.8    237.3  -0.50D to -12.00D          <- Power Range (D) (label y 233.8)
   557.4    229.6  +0.50D to +8.00D
   552.3    222.9  (in 0.50D steps above ±6.00D)
   566.5    208.6  8.8/14.0                   <- 두 번째 BC/Dia
   557.8    201.0  -0.50D to -12.00D
   557.4    193.3  +0.50D to +8.00D
   552.3    186.6  (in 0.50D steps above ±6.00D)
```

표기 주의:
- `senofilcon C`는 PDF에서 `fi` 합자 글리프(U+FB01)로 그려져 추출 문자열이 `senoﬁlcon C`가 된다. **인쇄된 단어는 `senofilcon C`다.**
- `147 x 10-9`의 `-9`는 인쇄물에서 위첨자다. 추출 문자열은 `147 x 10-9 (-3.00D)`.
- UV 행은 UVB·UVA **둘 다 부등호 `>`** 다(`>99%` / `>93%`). 오아시스는 UVA에 근사 기호 `~`가 붙는다는 점이 다르다.
- 표 라벨 자체가 `Approximate UV Blocking`이므로 근사 표기다.

### S4-2. 4쪽 원문 — Dk/t 시험 조건, UV 경고, **비타 전용 교체주기 문장**

```
1. Oxygen transmissibility measured via polarographic method at centre -3.00D lens using boundary corrected, edge corrected Dk value. Units (cm/sec) (ml O2/ml x mm Hg) at 35° C.
* Helps protect against transmission of harmful UV radiation to the cornea and into the eye.
† WARNING: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear such as UV-absorbing goggles or sunglasses because they do not completely cover the eye and surrounding
area. You should continue to use UV-absorbing eyewear as directed. NOTE: Long-term exposure to UV radiation is one of the risk factors associated with cataracts. Exposure is based on a number of factors such
as environmental conditions (altitude, geography, cloud cover) and personal factors (extent and nature of outdoor activities). UV-blocking contact lenses help provide protection against harmful UV radiation.
However, clinical studies have not been done to demonstrate that wearing UV-blocking contact lenses reduces the risk of developing cataracts or other eye disorders. Consult your eye care practitioner for more
information.
```

4쪽 `Important Information for Contact Lens Wearers` 절에는 **비타를 이름으로 지목한 문장**이 있다.

```
Important Information for Contact Lens Wearers: ACUVUE® Brand Contact Lenses are available by prescription only for vision correction. ACUVUE® VITA® Brand Contact Lenses are available by prescription only for vision correction as a daily wear lens with one-month recommended replacement. An eye care professional will determine whether contact lenses are right for you.
```

```
To help avoid these problems, follow the wear and replacement schedule and the lens care instructions provided by your eye doctor.
```

> 이 문서는 `Recommended Replacement`(교체주기)와 `Wearing Schedule`(착용방식)을 **서로 다른 행**으로 분리해 적는다.
> 비타는 두 행이 각각 `1 Month DW` 한 줄과 `Daily Wear` 한 줄뿐이고, 4쪽 본문도 `as a daily wear lens with one-month recommended replacement`라고 적는다.
> 즉 **오아시스 2주와 달리 비타에는 `Extended Wear`(연속착용) 표기가 없다.**
> 그렇더라도 `Daily Wear`는 착용방식 표기이지 수면착용 허용·불허의 선언이 아니며, 착용방식은 안 전문가의 판단 사항이다.
> 한국 공식 자료에는 연속착용·수면착용 문구가 **한 건도 없다**(S2·S3).

---

## 확인하지 못한 것

1. **한국 표기 수치 일체** — 한국 제품 페이지·한국 IFU 어디에도 BC·DIA·함수율·Dk/t·중심두께·재질명 수치/문자열이 없다.
   따라서 이 제품의 모든 물성값은 **글로벌 기술 사양(S4)이 유일한 근거**다.
2. **한국 페이지의 UV 퍼센트** — 기술·특징 영역이 이미지 전용(`content-sm.webp`, `features-sm.webp`)이라
   **한국 표기 수치를 추출하지 못했다.** 파일럿의 아큐브 오아시스 원데이에서 한국 표기(`UVB 99% 이상 / UVA 90%`)와
   글로벌 표기(`UVB >99.9% / UVA 96%`)가 **달랐으므로 이 제품에서도 지역 차이는 배제하지 못했다.**
   MFDS 등록 모델명에도 `with UV Blocker` 같은 문구가 없어 UV 차단 기능 자체의 한국 원장 근거는 없다.
3. **`교체` 표현의 한국 원문** — 한국 공식 자료의 원문은 `1달 착용` · `한 달 착용에도 촉촉하게!`이며
   `1달 교체` · `1개월 교체` · `30일` 문자열은 **어디에도 없다.** 교체주기를 명시한 한국어 원문은 확인되지 않았다.
4. **한국 유통 사양의 BC 8.8 취급 여부** — 글로벌 사양은 BC 8.4/8.8, `6 and 12 Packs`이고
   MFDS UDI의 포장내수량은 `6`·`12`로 일치하지만, 한국 파라미터 표가 없어 한국에서 실제 유통되는 BC 구성을 확인하지 못했다.
5. **근시/원시 표기 불일치** — 한국 페이지 배지는 `근시/원시`, 본문 카피는 `(근시용)`이다.
   글로벌 사양의 도수 범위는 `-0.50D to -12.00D` / `+0.50D to +8.00D`로 원시 도수를 포함한다.
   한국 유통 도수 범위를 확인할 공식 자료를 찾지 못해 어느 쪽이 최신인지 판정하지 못했다.
