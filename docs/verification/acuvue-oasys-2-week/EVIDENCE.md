# 검증 근거 — 아큐브 오아시스® (ACUVUE OASYS with HYDRACLEAR PLUS · 2주)

검증일: 2026-08-28
대상: 근시·원시용 투명 구면, 2주 교체 (난시용·트랜지션스·오아시스 원데이·오아시스 MAX 변형은 제외)
제조사: Johnson & Johnson Vision · 한국 유통: (주)한국존슨앤드존슨비전

이 문서는 실제로 가져온 공식 자료의 **원문**만 담는다. 값의 해석·정규화는 하지 않는다.

가져온 출처와 상태:

| # | 출처 | URL | 상태 |
| --- | --- | --- | --- |
| S1 | MFDS 의료기기 UDI 표준코드 조회 | https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do | 200 · 조회 정상 |
| S2 | 아큐브 오아시스® 한국 공식 제품 페이지 | https://acuvue.co.kr/products/acuvue-oasys | 200 · 60,937 bytes |
| S3 | 아큐브 오아시스® 한국 사용설명서 PDF | https://acuvue.co.kr/files/patient-instruction-guides/Oasys_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf | 200 · 177,029 bytes · 4쪽 |
| S3b | 한국 IFU 목록 페이지 | https://acuvue.co.kr/patient-instruction-guides | 200 · 69,126 bytes |
| S4 | ACUVUE Technical Specification Guide PDF | https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf | 200 · 2,097,103 bytes · 4쪽 |

---

## S1. MFDS 의료기기 UDI 표준코드 조회 — 한국 유통·허가 식별

- URL: https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do
- 조회일: 2026-08-28
- 방법: gstack 헤드리스 브라우저(`browse goto`)로 페이지를 연 뒤, 화면 폼(`#bplcNm`·`#modelnm`·`#itemPermitNo` → `#searchBtn`)과
  화면이 사용하는 동일 엔드포인트 `POST /msismext/udi/uif/selectStddCdLstAjax.do`(같은 세션) 응답을 **양쪽 모두** 확인했다.
- 공통 조회 조건: `dateCancelChk=N`(통합정보등록일자 제외 체크됨), `selRcprslryTrgtYn=`(전체), `sDate=` / `eDate=` 비움
- 등록일자 구간 조회를 할 때만 `dateCancelChk=`(체크 해제) + `sDate` / `eDate`를 채웠다.

### S1-1. 조회 조건별 건수

| # | 조회 조건 | 조회 건수(totCnt) |
| --- | --- | --- |
| Q1 | `bplcNm=한국존슨앤드존슨비전` | 51,144 |
| Q2 | `modelnm=OASYS` | 38,345 |
| Q3 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=OASYS` | 38,345 |
| Q4 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=ACUVUE OASYS` | 16,222 |
| Q5 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=ACUVUE® OASYS®` | **377** |
| Q6 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=HYDRACLEAR` | **754** |
| Q7 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=HYDRACLEAR® PLUS` | **377** |
| Q8 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS` (® 없음) | **377** |
| Q9 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=ACUVUE® OASYS® Brand Contact Lenses with HYDRACLEAR® PLUS` (® 있음) | **377** |
| Q10 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=Oasys` (대소문자 혼용) | **0** |
| Q11 | `bplcNm=한국존슨앤드존슨비전` + `modelnm=senofilcon` | **0** |
| Q12 | `itemPermitNo=수허 05-310 호` | **377** |
| Q13 | `itemPermitNo=수허 08-938 호` | **377** |
| Q14 | `itemPermitNo=수허 10-43 호` (난시용) | 4,950 |

주의 1 — **® 함정이 여기서는 반대로 작동한다.**
`ACUVUE OASYS`(® 없음) 검색은 16,222건을 주지만 그 안에 **2주 구면의 최신 등록분이 없다.**
Q8(® 없음)은 `수허 08-938 호`만, Q9(® 있음)은 `수허 05-310 호`만 잡는다.
두 등록 모두를 보려면 `HYDRACLEAR`(Q6, 754건)처럼 ® 없는 부분 문자열로 넓혀야 한다.

주의 2 — **모델명 검색은 대소문자를 구분한다.** Q10(`Oasys`)은 0건이다.

주의 3 — **재질명으로는 검색되지 않는다.** Q11(`senofilcon`)은 0건이다.
아큐브 모이스트와 달리 이 제품의 MFDS 등록 모델명·업체 제품 명칭에는 **재질명이 들어 있지 않다.**

### S1-2. Q2(`modelnm=OASYS`, 38,345건) 전수 집계 — 허가번호 × 모델명 distinct

38,345행을 500건 × 77페이지로 모두 가져와 집계한 결과 distinct **10건**:

```
(주)한국존슨앤드존슨비전 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 05-310 호 | ACUVUE® OASYS® Brand Contact Lenses with HYDRACLEAR® PLUS | ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS (아큐브 오아시스®) ## 377
(주)한국존슨앤드존슨비전 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 08-938 호 | ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS | ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS ## 377
(주)한국존슨앤드존슨비전 | 수입업 | 매일착용 소프트 콘택트렌즈 | 2 | 수허 10-43 호 | ACUVUE OASYS Brand Contact Lens for ASTIGMATISM |  ## 4950
(주)한국존슨앤드존슨비전 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 16-499 호 | ACUVUE OASYS Brand Contact Lenses with HydraLuxe | ACUVUE OASYS Brand Contact Lenses with HydraLuxe (아큐브 오아시스 원데이) ## 497
(주)한국존슨앤드존슨비전 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 17-520 호 | ACUVUE OASYS® Brand Contact Lenses with HydraLuxe™ for ASTIGMATISM | ACUVUE OASYS® Brand Contact Lenses with HydraLuxe™ for ASTIGMATISM (아큐브 오아시스 원데이 난시용) ## 10398
(주)한국존슨앤드존슨비전 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 19-277 호 | ACUVUE® OASYS with Transitions™ | ACUVUE® OASYS with Transitions™ (아큐브ⓡ 오아시스 트랜지션스™) ## 166
(주)한국존슨앤드존슨비전 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 22-253 호 | ACUVUE® OASYS MAX 1-Day Contact Lenses | ACUVUE® OASYS MAX 1-Day Contact Lenses, 아큐브® 오아시스 맥스 원데이, 아큐브® 오아시스 MAX 원데이 ## 508
(주)한국존슨앤드존슨비전 | 수입업 | 매일착용소프트콘택트렌즈 | 2 | 수허 23-190 호 | ACUVUE® OASYS MAX 1-Day MULTIFOCAL Contact Lenses | ACUVUE® OASYS MAX 1-Day MULTIFOCAL Contact Lenses, 아큐브® 오아시스 맥스 원데이 멀티포컬, 아큐브® 오아시스 MAX  원데이 멀티포컬 ## 732
(주)한국존슨앤드존슨비전 | 수입업 | 매일착용 소프트 콘택트렌즈 | 2 | 수허 24-225 호 | ACUVUE® OASYS MAX 1-Day Contact Lenses for ASTIGMATISM | ACUVUE® OASYS MAX 1-Day Contact Lenses for ASTIGMATISM,  아큐브® 오아시스 맥스 원데이 난시용, 아큐브® 오아시스 MAX 원데이 난시용 ## 14850
(주)한국존슨앤드존슨비전 | 수입업 | 매일착용 소프트 콘택트렌즈 | 2 | 수허 26-21 호 | ACUVUE® OASYS MAX 1-Day MULTIFOCAL Contact Lenses for ASTIGMATISM | ACUVUE® OASYS MAX 1-Day MULTIFOCAL Contact Lenses for ASTIGMATISM, 아큐브® 오아시스 맥스 원데이 멀티포컬 난시용, 아큐브® 오아시스 MAX 원데이 멀티포컬 난시용 ## 5490
```

형식: `업체명 | 업체구분 | 소분류 품목 명칭 | 등급 | 품목허가번호 | 모델명 | 업체 제품 명칭 ## 행 수`

즉 오아시스 계열은 **구면(2주) / 난시용(2주) / 트랜지션스 / 오아시스 원데이 / 오아시스 원데이 난시용 / 오아시스 MAX 4종이 서로 다른 허가번호**를 갖는다.
본 검증 대상(2주 구면)에 해당하는 것은 위 10건 중 **맨 위 2건**이다.

### S1-3. ⚠ 2주 구면 허가번호가 **2건**이다

`수허 05-310 호`와 `수허 08-938 호` 두 건 모두

- 업체명 `(주)한국존슨앤드존슨비전` · 업체구분 `수입업`
- 소분류 품목 명칭 `매일착용소프트콘택트렌즈` · 등급 `2`
- 업체 제품 명칭이 `ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS`로 시작

이고, **각각 377행**이다. 두 허가번호의 고유식별자(UDI-DI) 집합을 직접 대조한 결과:

```
inter=377  onlyA=0  onlyB=0
```

즉 **377개 UDI-DI 코드가 완전히 동일**하다. 같은 제품 코드 집합이 서로 다른 두 허가번호로 등록돼 있다.
포장내수량 분포도 두 건 모두 동일하다: `1` 3건 · `6` 126건 · `12` 248건.

두 등록을 가르는 확인된 차이는 다음 둘뿐이다.

**(1) 업체 제품 명칭의 한국어 제품명 유무**

| 허가번호 | 모델명(원문) | 업체 제품 명칭(원문) |
| --- | --- | --- |
| `수허 05-310 호` | `ACUVUE® OASYS® Brand Contact Lenses with HYDRACLEAR® PLUS` | `ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS (아큐브 오아시스®)` |
| `수허 08-938 호` | `ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS` | `ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS` |

`수허 05-310 호`의 업체 제품 명칭은 한국 공식 제품 페이지 하단의 제품명 표기
`ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS (아큐브 오아시스®)`(S2)와 **문자열이 그대로 일치**한다.

**(2) 통합정보 등록일자 구간** (`dateCancelChk` 해제 + `sDate`/`eDate` 조회)

| 등록일자 구간 | `수허 05-310 호` | `수허 08-938 호` |
| --- | --- | --- |
| 2005-01-01 ~ 2019-12-31 | 0 | 0 |
| 2020-01-01 ~ 2021-12-31 | 0 | 372 (전부 2021-01-01~2021-06-30) |
| 2022-01-01 ~ 2022-12-31 | 0 | 4 |
| 2023-01-01 ~ 2023-12-31 | 0 | 1 |
| 2024-01-01 ~ 2024-05-28 | 0 | 0 |
| 2024-05-29 ~ 2024-05-31 | **377** | 0 |
| 2024-06-01 ~ 2026-08-28 | 0 | 0 |

`수허 05-310 호`의 377행은 **2024-05-29~31 사흘 안에 일괄 등록**됐고, `수허 08-938 호`의 377행은 **2021~2023년에 등록**됐다.

> 이 두 사실은 `수허 05-310 호`가 더 최근 등록이고 한국 제품 페이지 제품명과 일치한다는 것만 보여준다.
> **어느 한쪽이 취하·갱신됐는지는 UDI 조회 화면에 상태 열이 없어 확인하지 못했다.**
> MFDS UDI 화면에는 품목허가 상세(제조원·허가일·취하 여부) 링크가 없고, 한국 IFU에도 허가번호가 없다(S3).
> 따라서 본 검증은 **허가번호를 단일 값으로 확정하지 않고 두 원문을 병기한다.**

### S1-4. 화면에 표시된 결과 행 — 원문 그대로

`bplcNm=한국존슨앤드존슨비전` + `modelnm=ACUVUE® OASYS® Brand Contact Lenses with HYDRACLEAR® PLUS`:

```
총 377건이 조회됐습니다.

1 | 매일착용소프트콘택트렌즈 | 2 | ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS (아큐브 오아시스®) | (주)한국존슨앤드존슨비전 | 수허 05-310 호 | ACUVUE® OASYS® Brand Contact Lenses with HYDRACLEAR® PLUS | 00888290772506 | N |  | 1
2 | 매일착용소프트콘택트렌즈 | 2 | ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS (아큐브 오아시스®) | (주)한국존슨앤드존슨비전 | 수허 05-310 호 | ACUVUE® OASYS® Brand Contact Lenses with HYDRACLEAR® PLUS | 00733905849831 | N |  | 6
3 | 매일착용소프트콘택트렌즈 | 2 | ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS (아큐브 오아시스®) | (주)한국존슨앤드존슨비전 | 수허 05-310 호 | ACUVUE® OASYS® Brand Contact Lenses with HYDRACLEAR® PLUS | 00733905849848 | N |  | 6
```

`itemPermitNo=수허 08-938 호`:

```
총 377건이 조회됐습니다.

1 | 매일착용소프트콘택트렌즈 | 2 | ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS | (주)한국존슨앤드존슨비전 | 수허 08-938 호 | ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS | 00733905355363 | N |  | 1
2 | 매일착용소프트콘택트렌즈 | 2 | ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS | (주)한국존슨앤드존슨비전 | 수허 08-938 호 | ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS | 00733905849848 | N |  | 6
```

열 순서: 연번 | 소분류 품목 명칭 | 등급 | 업체 제품 명칭 | 업체명 | 품목허가번호 | 모델명 | 고유식별자(UDI-DI)코드 | 요양급여 대상 치료재료 여부 | 치료재료코드 | 포장내수량

**허가번호 원문: `수허 05-310 호` 와 `수허 08-938 호`** (앞에 `수허`, 공백, 숫자-숫자, 공백, `호`)

---

## S2. 한국 공식 제품 페이지 — 아큐브 오아시스®

- URL: https://acuvue.co.kr/products/acuvue-oasys
- 조회일: 2026-08-28 · HTTP 200 · 60,937 bytes
- 방법: `curl -L`로 HTML 저장 후 script/style/svg 제거 + 태그 제거

### 페이지 텍스트에서 확인된 항목 (원문 발췌)

```
아큐브 오아시스®
2주 착용에도 촉촉하고 편안하게
아큐브 오아시스®는 하루 종일 촉촉함과 우수한 편안함을 제공합니다.
안경원 찾기
2주 착용
근시/원시
```

```
이 제품은 의료기기(시력보정용 매일착용 소프트콘택트렌즈)이며, 사용상의 주의사항과 사용방법을 잘 읽고 사용하십시오. 의료기기 광고심의필 52025-I10-31-3479 (유효기간: 28.08.27)
제품명
- ACUVUE OASYS Brand Contact Lenses with HYDRACLEAR PLUS (아큐브 오아시스®)
- ACUVUE VITA Brand Contact Lenses (아큐브 비타)
1. JJV Data on File 2021. ACUVUE Brand Contact Lenses: PVP [poly(N-vinyl pyrrolidone)] and its Similarity to Mucin.
2. UVA 316~380nm, UVB 280~315nm 범위에서 측정
3. 자외선은 눈의 노화와 각종 안질환의 원인이 될 수 있습니다. (출처: WHO)
경고: 자외선 차단 콘택트렌즈는 눈과 주변을 완전히 덮지 못하므로 고글이나 선글라스와 같은 자외선 차단 안경을 대신할 수 없습니다. 지침에 따라 자외선 차단 안경은 계속해서 사용해야 합니다. 참고: 자외선 장기간 노출은 백내장과 관련된 위험 요인 중 하나입니다. 환경 조건(고도, 지리, 구름) 및 개인적 요인(야외 활동 범위와 정도) 등 노출 정도는 여러 요인에 따라 달라집니다. 자외선 차단 콘택트렌즈는 유해한 자외선으로부터 눈을 보호하는 데 도움이 됩니다. 그러나 자외선 차단 콘택트렌즈 착용이 백내장이나 기타 안질환 발병 위험을 감소시킨다는 임상 연구는 아직 수행되지 않았습니다. 자세한 내용은 안 전문가와 상담하세요.
KR_2025_465
```

```
(주)한국존슨앤드존슨비전
서울시 용산구 한강대로 92 l 대표자: 김예리
등록번호 569-87-02736
```

전역 내비게이션의 착용 주기 분류에도 `1일 착용 / 2주 착용 / 1달 착용`이 있고, 이 제품은 `2주 착용`에 속한다.

### 이 페이지에 **없는** 것 (직접 확인)

- BC · DIA · 함수율 · Dk/t · 중심두께 · 도수 범위 **수치 문자열 0건**
  - HTML 안의 `8.4`(26회) · `8.8`(32회)는 **전부 로고 SVG의 path 좌표**다.
    (예: `<path d="M81.1425 1.00488V19.8313C81.1425 25.3325 78.449 29.0506 ...`)
    이 제품의 실제 BC가 8.4 / 8.8이라 **가장 위험한 오독 함정**이다. 좌표 문자열을 스펙으로 쓰지 않았다.
  - `14.0` · `함수` · `Dk` 문자열은 HTML 전체에 **0건**.
- **재질명 없음**: `senofilcon` · `세노필콘` 문자열 HTML 전체에 **0건**.
- UV 차단 **퍼센트 수치 0건**. 텍스트에는 위 경고문과 측정 파장 범위(각주 2)만 있다.
- 허가번호 문자열 없음(`수허` · `허가` 0건).
- **교체(replacement) 문자열 없음.** 페이지에 있는 것은 `2주 착용`이지 `2주 교체`가 아니다.
- 연속착용·수면착용 언급 없음(`연속` · `수면` 0건).
- 제품 기술·특징 설명은 **이미지 전용**이다:
  `content-sm.webp`(alt `아큐브 오아시스의 기술`), `features-sm.webp`(alt `아큐브 오아시스 특징`)
  — 대체 텍스트에 수치가 없어 **본 검증에서 수치를 추출하지 못했다.**
- `52025-I10-31-3479`는 **의료기기 광고 사전심의 번호**다. 허가번호가 아니므로 허가 필드에 넣지 않는다.

---

## S3. 한국 사용설명서(IFU) PDF

- URL: https://acuvue.co.kr/files/patient-instruction-guides/Oasys_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf
- 조회일: 2026-08-28 · HTTP 200 · 177,029 bytes · 4페이지
- 방법: `curl -L` 다운로드 후 `python -m pypdf`(pypdf 6.16.2)로 텍스트 추출 — **텍스트 레이어 정상 추출**(5,361자)

### 제품 연결 근거

한국 IFU 목록 페이지 https://acuvue.co.kr/patient-instruction-guides (2026-08-28, HTTP 200)에서
이 PDF는 **`아큐브 오아시스®`** 항목의 `아큐브® 제품 사용 안내` 링크로 게시돼 있다.
(같은 목록에 `아큐브 오아시스® 난시용`이 `OasysAstigmatism_사용방법.pdf`로 별도 게시돼 있다.
목록 페이지가 표기한 파일 크기는 `148 KB`인데 실제 내려받은 파일은 177,029 bytes다 — 목록의 크기 표기는 최신 파일과 어긋난다.
같은 어긋남이 모이스트(`97 KB` 표기 / 112,074 bytes 실제)에서도 관찰됐다.)

### 원문 발췌 — 재사용 렌즈 관리 절 (교체주기 문장이 아님)

```
다. 사용 후 보관 및 관리 방법
1. 처음 렌즈를 받으면, 안경사/안 전문가로부터 권장된 세척과 소독의 규칙을 받을 것이다. 권장된 절
차를 따르지 않으면 경고에 나와 있는 심각한 눈의 문제들이 야기될 수 있다.
```

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
- `오아시스` / `OASYS` / `senofilcon` / `세노필콘` 문자열 0건 → 제품명·재질명 표기도 없다.
- `2주` 문자열 0건 → **교체주기 표기 없음.**
- `연속` / `자외선` / `UV` / `Dk` / `함수` 문자열 0건.
- BC · DIA · 함수율 · Dk/t · UV 수치 없음.

> 문서는 사용 전 준비 / 착용·제거 방법 / 사용 후 보관·관리(세척·소독·보관) 절만 담고 있다.
> 따라서 이 제품의 허가번호 근거는 **MFDS UDI(S1)가 유일**하고,
> 교체주기의 한국 근거는 **한국 제품 페이지의 `2주 착용` 배지(S2)가 유일**하다.

---

## S4. ACUVUE Technical Specification Guide (글로벌 기술 사양)

- URL: https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf
- 조회일: 2026-08-28 · HTTP 200 · 2,097,103 bytes · 4페이지
- 방법: `curl -L` 다운로드 → pypdf 텍스트 추출. 표가 다단 컬럼이라 **텍스트 순서만으로는 열 귀속이 흔들리므로,
  pypdf `visitor_text`로 각 문자열의 좌표(x, y)를 함께 뽑아 열·행 귀속을 확인**했다.
- 문서 식별 표기: 4쪽 하단 `© Johnson & Johnson and its affiliates 2025  |  PP2020ACLP4800 v13`, 각 쪽 하단 `AS112401`

### S4-0. ⚠ 열 오귀속 함정 두 가지

**(a) 2쪽 마지막 열은 `ACUVUE® 2`이지 오아시스가 아니다.**
2쪽 x ≈ 683–722에 `ACUVUE® 2` 열이 있고, 그 값이 `1 Week EW or / 2 Weeks DW`, `8.3/14.0`, `8.7/14.0`, `etafilcon A`, `58%`, `6 Pack`이다.
**2주 교체라는 이유만으로 이 열을 오아시스로 착각하면 안 된다.**

**(b) 3쪽 `ACUVUE® VITA®` 열은 BC·DIA·중심두께·Dk/t가 오아시스와 겹친다.**
VITA 구면(x ≈ 547–580)도 `8.4/14.0`, `8.8/14.0`, `0.070`, `147 x 10-9 (-3.00D)`다.
재질(`senofilcon C`)과 함수율(`41%`), 교체(`1 Month DW`), UV(`Blocks >99% of UVB & >93% of UVA`)만 다르다.
**좌표로 열을 고정하지 않으면 이 두 제품이 그대로 섞인다.**

### S4-1. 3쪽 좌표 추출 — `ACUVUE® OASYS` 열(x ≈ 152–203)

행 라벨은 왼쪽 x ≈ 35–37에 있고, 값은 같은 y 좌표에 놓인다.
아래는 x 150–215 구간(= OASYS 2주 구면 열)만 필터링한 결과다.
(x ≈ 297 열은 `ACUVUE® OASYS for ASTIGMATISM`, x ≈ 423 열은 `ACUVUE® OASYS MULTIFOCAL`,
x ≈ 547 열은 `ACUVUE® VITA®`, x ≈ 677 열은 `ACUVUE® VITA® for ASTIGMATISM`이므로 본 제품과 혼동하지 않는다.)

```
   165.0    549.1  ACUVUE® OASYS               <- 열 머리글 (부제 없음 = 구면)
   182.9    510.3  1 Week EW or                <- Recommended Replacement (label y 509.1/500.3)
   185.3    501.5  2 Weeks DW
   180.5    486.0  Extended Wear               <- Wearing Schedule (label y 482.4)
   188.9    477.2  Daily Wear
   179.3    463.3  12 and 24 Packs             <- Pack Size (label y 463.3)
   152.5    436.7  HYDRACLEAR® PLUS Technology <- Technology (label y 436.7)
   186.1    408.6  senoﬁlcon A                 <- Lens Material (label y 408.6)
   175.7    387.2  147 x 10-9 (-3.00D)         <- Dk/t Value1 (edge corrected) (label y 392.7/384.9)
   200.6    367.8  38%                         <- Water Content (label y 367.8)
   168.4    330.9  Blocks >99.9% of UVB        <- Approximate UV Blocking*† (label y 332.2/323.4)
   179.8    322.1  & ~96% of UVA
   (Visibility Tint 행 y 348.0 · I/O Mark 행 y 304.9 에는 이 열에 값이 없다)
   202.9    285.3  No                          <- Orientation Mark (label y 286.5)
   198.3    266.4  0.070                       <- Center Thickness (mm @ -3.00D) (label y 272.4/264.5)
   189.5    245.2  8.4/14.0                    <- Parameters BC (mm) / Dia (mm) (label y 251.4/241.6)
   186.5    237.5  Plano (6 Pack only)         <- Power Range (D) (label y 233.8)
   181.2    229.8  -0.50D to -12.00D
   180.9    222.1  +0.50D to +8.00D
   176.0    215.5  (in 0.50D steps above ±6.00D)
   189.5    201.3  8.8/14.0                    <- 두 번째 BC/Dia
   186.3    193.6  Plano (6 Pack only)
   181.2    185.9  -0.50D to -12.00D
   180.9    178.2  +0.50D to +8.00D
   176.0    171.6  (in 0.50D steps above ±6.00D)
```

표기 주의:
- `senofilcon A`는 PDF에서 `fi` 합자 글리프(U+FB01)로 그려져 추출 문자열이 `senoﬁlcon A`가 된다. 인쇄된 단어는 `senofilcon A`다.
- `147 x 10-9`의 `-9`는 인쇄물에서 위첨자다. 추출 문자열은 `147 x 10-9 (-3.00D)`.
- UVA 값 앞의 `~`는 근사 기호다. 원문은 `& ~96% of UVA`이며 UVB만 `>99.9%`로 부등호가 붙는다.

### S4-2. 4쪽 각주 원문 — Dk/t 시험 조건과 UV 경고

```
1. Oxygen transmissibility measured via polarographic method at centre -3.00D lens using boundary corrected, edge corrected Dk value. Units (cm/sec) (ml O2/ml x mm Hg) at 35° C.
* Helps protect against transmission of harmful UV radiation to the cornea and into the eye.
† WARNING: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear such as UV-absorbing goggles or sunglasses because they do not completely cover the eye and surrounding
area. You should continue to use UV-absorbing eyewear as directed. NOTE: Long-term exposure to UV radiation is one of the risk factors associated with cataracts. Exposure is based on a number of factors such
as environmental conditions (altitude, geography, cloud cover) and personal factors (extent and nature of outdoor activities). UV-blocking contact lenses help provide protection against harmful UV radiation.
However, clinical studies have not been done to demonstrate that wearing UV-blocking contact lenses reduces the risk of developing cataracts or other eye disorders. Consult your eye care practitioner for more
information.
```

4쪽 `Important Information for Contact Lens Wearers` 원문에는 다음 문장이 있다.

```
To help avoid these problems, follow the wear and replacement schedule and the lens care instructions provided by your eye doctor.
```

> 이 문서는 `Recommended Replacement`(교체주기)와 `Wearing Schedule`(착용방식)을 **서로 다른 행**으로 분리해 적는다.
> `1 Week EW or 2 Weeks DW`는 **착용방식에 따라 권장 교체주기가 달라진다**는 뜻이며,
> `Extended Wear`(연속착용) 표기를 임의의 수면착용 허용으로 해석하지 않는다. 착용방식은 안 전문가의 판단 사항이다.
> 한국 공식 자료에는 연속착용·수면착용 문구가 **한 건도 없다**(S2·S3).

---

## 확인하지 못한 것

1. **허가번호 단일 확정** — 2주 구면에 `수허 05-310 호`·`수허 08-938 호` 두 건이 붙어 있고
   UDI-DI 377개가 완전히 동일하다. MFDS UDI 화면에는 허가 상태(유효·취하) 열이나 품목허가 상세 링크가 없고,
   한국 IFU에도 허가번호가 없어 **한쪽으로 좁히지 못했다.** 두 원문을 병기한다.
2. **한국 표기 수치 일체** — 한국 제품 페이지·한국 IFU 어디에도 BC·DIA·함수율·Dk/t·중심두께·재질명 수치/문자열이 없다.
   따라서 이 제품의 모든 물성값은 **글로벌 기술 사양이 유일한 근거**다.
3. **한국 페이지의 UV 퍼센트** — 기술·특징 영역이 이미지 전용(`content-sm.webp`, `features-sm.webp`)이라
   **한국 표기 수치를 추출하지 못했다.** 파일럿의 아큐브 오아시스 원데이에서 한국 표기(`UVB 99% 이상 / UVA 90%`)와
   글로벌 표기(`UVB >99.9% / UVA 96%`)가 **달랐으므로 이 제품에서도 지역 차이는 배제하지 못했다.**
   모이스트와 달리 이 제품은 MFDS 등록 모델명에 `with UV Blocker`가 **없어**, UV 차단 기능 자체의 한국 원장 근거도 없다.
4. **한국 유통 사양의 BC 8.8 취급 여부와 포장 단위** — 글로벌 사양은 BC 8.4/8.8, `12 and 24 Packs`, `Plano (6 Pack only)`인데
   MFDS UDI의 포장내수량은 `1`·`6`·`12`다. 한국 파라미터 표가 없어 한국에서 실제 유통되는 BC·포장 구성을 확인하지 못했다.
5. **`교체` 표현의 한국 원문** — 한국 공식 자료의 원문은 `2주 착용`이며 `2주 교체`라는 문자열은 어디에도 없다.
