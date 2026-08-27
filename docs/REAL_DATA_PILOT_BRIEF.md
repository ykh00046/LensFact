# LensFact real-data pilot implementation brief

검증일: 2026-08-27

## 목표

정적 프로토타입의 예시 데이터를 다음 실데이터로 교체한다.

- 투명 구면 렌즈 3개
- 제품별 값과 공식 출처
- 출처 간 충돌과 확인되지 않은 값을 숨기지 않는 비교 화면
- 첫 검증 글 `함수율이 높으면 더 촉촉한 렌즈일까요?`

판매 링크, 점수, 순위, 추천, 개인 적합성 판단은 넣지 않는다. 광고는 `ADS_ENABLED=false`로 유지한다.

## 출처 원칙

- 한국 유통·허가 식별: 제조사 한국 공식 페이지·한국 IFU·MFDS UDI 조회
- BC·DIA·함수율·Dk/t: 제조사 기술 사양서 또는 전문가용 공식 사양
- 지역별 숫자가 다르면 하나로 합치지 않고 각 출처의 원문값과 조건을 병기
- 광고성 성능 문구는 물성값과 분리하고 본 파일럿에는 사용하지 않음
- 한국 공식 자료에서 찾지 못한 값은 글로벌 공식 자료임을 명시

## 제품 1 — 아큐브 오아시스 원데이 근시·원시

한국 공식 제품 페이지와 한국 IFU에서 한국 유통 제품임을 확인했다.[1][21]

- 제품명: 아큐브 오아시스 원데이®
- 제조사/한국 유통: Johnson & Johnson Vision / (주)한국존슨앤드존슨비전
- 한국 수입허가번호: `수허 16-499 호` — 한국 IFU 원문 표기, MFDS 상세 원장 직접 대조는 미완료[21]
- 유형: 근시·원시용 투명 구면, 1일 교체
- 재질: `senofilcon A` (실리콘 하이드로겔)
- BC: `8.5 mm`, `9.0 mm`
- DIA: `14.3 mm`
- 함수율: `38%`
- Dk/t: `121 × 10⁻⁹` at `-3.00D`
- Dk/t 조건: 분극법, 렌즈 중심, boundary-corrected·edge-corrected Dk, 35℃
- 중심두께: `0.085 mm` at `-3.00D`
- 도수 범위: `-0.50D~-12.00D`, `+0.50D~+8.00D`
- UV: 글로벌 기술 사양은 `UVB >99.9% / UVA 96%`; 한국 페이지는 `UVB 99% 이상 / UVA 90%`라고 표기하므로 지역별 원문값을 합치지 않는다.[1][2]
- 경고: UV 차단 콘택트렌즈는 선글라스·고글을 대신하지 않는다.[1][2]

`의료기기심의필` 번호는 광고 사전심의 번호이지 제품 허가번호가 아니다. 허가번호 필드에 넣지 않는다.

## 제품 2 — 데일리스 토탈원 구면

한국 공식 사이트에서 한국 유통 제품임을 확인했다.[3][17]

- 제품명: 데일리스 토탈원® / DAILIES TOTAL1®
- 제조사/한국 유통: Alcon / 한국알콘(주)
- 한국 수입허가번호: `수허 13-112 호` — MFDS UDI 원문 표기
- 허가 확인 근거: 2026-08-27 MFDS UDI 표준코드 조회에서 한국알콘 전체 46,382건을 조회한 뒤 `modelnm=Dailies Total1`, `prdtNmCn=워터렌즈`, `prdlNm=매일착용소프트콘택트렌즈`인 105건이 모두 `수허 13-112 호`로 연결됨.[20]
- 유형: 근시·원시용 투명 구면, 1일 교체
- 재질: `delefilcon A` (워터 그라디언트 실리콘 하이드로겔)
- BC: `8.5 mm`
- DIA: `14.1 mm`
- 함수율: 코어 `33%`; 표면 `80% 이상` 또는 `약 100%`로 별도 표기
- 함수율 조건: 코어·표면 함수율 측정법은 렌즈 전체 함수율 측정법과 다르므로 하나의 함수율 숫자로 합치지 않는다.[12][16]
- Dk/t: `156` at `-3.00D`
- 중심두께: `0.09 mm` at `-3.00D`
- 도수 범위: `+0.50D~+6.00D`, `-0.50D~-12.00D`
- UV: 제조사 전문 사양에서 확인되지 않음. `없음`으로 단정하지 않고 `공식 UV 표기 확인되지 않음`으로 표시

한국 공식 사이트는 유통 근거로, 글로벌 전문가 사양은 숫자 근거로 범위를 구분한다.[15][17]

## 제품 3 — 바이오피니티 구면

한국 공식 제품 페이지·전체 제품 목록·한국 사양서에서 한국 유통 제품임을 확인했다.[5][22][23]

- 제품명: 바이오피니티® / Biofinity®
- 제조사/한국 유통: CooperVision / 쿠퍼비젼코리아(주)
- 한국 수입허가번호: `수허 08-131` — 한국 공식 제품 목록 원문 표기(`호` 없음), MFDS 상세 원장 직접 대조는 미완료[23]
- 유형: 근시·원시용 투명 구면, 비구면 디자인, 월간 교체
- 재질: `comfilcon A` (실리콘 하이드로겔)
- BC: `8.6 mm`
- DIA: `14.0 mm`
- 함수율: `48%`
- Dk/t 충돌: 현재 한국 제품 페이지 `170`(조건 미표기) / 한국 2023 사양서와 미국 전문가 페이지 `171 at -3.00D`. 두 값을 병기한다.[5][14][22]
- 중심두께: `0.08 mm` at `-3.00D`
- 표준 도수 범위(한국 사양서): `-12.00D~-0.25D`, `+0.25D~+8.00D`
- 교체와 착용 구분: `30일`은 교체주기이다. 연속착용은 전문가 판단이 필요한 별도 착용방식이며, 페이지의 `연속 착용 콘택트렌즈` 문구를 임의의 수면착용 허용으로 해석하지 않는다.[5]
- UV 충돌: 현재 한국 페이지는 UV 기술 적용을 주장하지만 한국 2023 공식 사양서는 `No`. 허가 원장 또는 최신 정정 사양 확인 전에는 `공식 자료 간 충돌`로 표시한다.[5][22]

## 비교 화면 규칙

세 제품을 다음 행으로 비교한다.

- 한국 수입허가번호
- 교체주기
- 재질
- BC
- DIA
- 함수율(벌크/코어/표면 기준을 라벨에 포함)
- Dk/t(도수·시험조건을 값 옆에 포함)
- 중심두께
- UV
- 확인 메모

직접 비교를 제한하는 이유를 표 위에 먼저 보여준다.

- 함수율은 재질 계열과 측정 위치가 다를 수 있다.
- Dk/t는 두께와 시험도수에 좌우된다.
- 수치가 높다는 이유만으로 착용감이나 개인 적합성을 판단하지 않는다.

모바일에서는 가로 스크롤 영역 안에서 표가 잘리지 않아야 한다. 첫 열 헤더와 각 제품명이 스크린리더에 연결돼야 한다.

## 홈 해석기

제품 선택 버튼 3개를 추가한다.

- 아큐브 오아시스 원데이
- 데일리스 토탈원
- 바이오피니티

기본 선택은 아큐브 오아시스 원데이로 한다. 선택 시 포장 카드, 필드 값, 상세 출처가 함께 바뀌어야 한다.

제품별 필드는 다음 상태를 지원한다.

- `verified`: 공식 원문과 조건을 확인한 값
- `conflict`: 공식 출처 간 값이 다른 값
- `unknown`: 검토한 공식 자료에서 확인하지 못한 값

출처 URL은 텍스트가 아니라 실제 링크로 렌더링한다. 새 탭 링크에는 `rel="noopener noreferrer"`를 넣는다.

## 핵심 글 원고

### 제목

함수율이 높으면 더 촉촉한 렌즈일까요?

### 짧은 결론

아닙니다. 함수율은 렌즈 소재가 머금은 물의 비율을 나타내지만, 착용 중 느끼는 촉촉함이나 편안함을 단독으로 예측하지는 못합니다. 재질 계열, 표면 습윤성·마찰, 렌즈 디자인과 피팅, 눈물막, 착용 환경이 함께 작용합니다.[7][8][11]

### 1. 함수율이 말하는 것

함수율은 렌즈의 물 함량을 나타내는 물성값입니다. 그러나 제품 자료의 숫자가 렌즈 전체, 코어 또는 표면 중 어디를 뜻하는지 먼저 확인해야 합니다. 데일리스 토탈원은 코어 33%와 표면 80% 이상을 별도로 제시하며, 제조사는 이 측정법이 렌즈 전체 함수율 측정법과 다르다고 밝힙니다.[12][16]

따라서 `함수율 33%`와 `표면 함수율 약 100%`는 서로 모순된 숫자가 아니라 서로 다른 위치와 방법을 설명하는 값입니다.

### 2. 하이드로겔과 실리콘 하이드로겔은 같은 축이 아닙니다

일반 하이드로겔에서는 물이 산소 전달의 주요 통로이므로 함수율이 높아질수록 Dk가 증가하는 경향이 있습니다. 실리콘 하이드로겔에서는 실리콘 성분이 산소 전달을 담당해 함수율과 Dk의 관계가 반대로 나타날 수 있습니다. 25년 리뷰에서는 실리콘 하이드로겔의 함수율과 Dk 사이에 음의 상관관계가 보고됐습니다.[9]

따라서 재질 계열이 다른 렌즈의 함수율만 보고 산소 전달이나 품질 우열을 판단할 수 없습니다.

### 3. 탈수량과 건조감은 같은 말이 아닙니다

무작위 이중맹검 연구에서는 omafilcon A가 etafilcon A보다 덜 탈수됐지만 두 렌즈의 주관적 편안함과 건조감에는 차이가 없었고, 렌즈 탈수와 증상 사이 상관도 확인되지 않았습니다.[10]

고함수율 하이드로겔 착용과 콘택트렌즈 관련 건조감 사이 연관을 보고한 연구도 있지만, 그 연구에서도 렌즈 탈수 자체는 건조감 상태와 관련되지 않았습니다.[18]

그러므로 `함수율이 높으면 반드시 더 촉촉하다`와 `함수율이 낮으면 반드시 덜 건조하다`는 문장은 모두 근거보다 강한 단정입니다.

### 4. 착용감은 무엇과 함께 봐야 하나요

TFOS 보고서는 물 함량·탈수·산소 투과 같은 벌크 물성뿐 아니라 표면 마찰·습윤성, 디자인, 피팅, 관리용액과 눈물막을 함께 봅니다.[7][8]

최근 재질 연구도 실리콘 하이드로겔의 탈수, 습윤성, 윤활성이 서로 연결되지만 동일한 하나의 지표로 환원되지 않는다고 설명합니다.[24]

소비자가 포장에서 확인할 수 있는 최소 항목은 다음과 같습니다.

- 함수율의 기준이 전체·코어·표면 중 무엇인지
- 재질이 하이드로겔인지 실리콘 하이드로겔인지
- Dk인지 Dk/t인지, 시험도수와 두께 조건이 있는지
- 교체주기와 착용방식이 구분돼 있는지
- 공식 자료에서 확인하지 못한 값인지

이 정보는 렌즈를 추천하거나 개인의 착용 결과를 예측하지 않습니다. 최종 도수·피팅·착용방식은 안경사 또는 안과 전문인에게 확인해야 합니다.

## 콘텐츠 허브

실제 완성된 글은 함수율 글 1개뿐이다. 아직 작성되지 않은 카드 7개는 `준비 중`으로 표시하고 현재 글로 잘못 연결하지 않는다. 확인일 문구에서 `예시`를 제거한다.

## 기술 구현

- 새 파일 권고: `site/assets/data/products.js`
- `window.LENSFACT_PRODUCTS`에 세 제품과 각 필드·출처를 구조화
- 현재 `fields.js` 샘플은 제거하거나 제품 데이터의 공통 용어 설명만 남김
- DOM 문자열에 외부 원문을 그대로 넣지 말고 저장소에 고정한 검증 데이터만 사용
- 기존 메뉴·disclosure·reduced motion·광고 비활성 동작을 유지
- 외부 CDN, 분석, 광고, API 요청 금지
- 정적 파일만 사용

## 수용 기준

1. `example.invalid`, `제조사 A`, `화면 예시 데이터`가 사용자 화면에서 0건
2. 제품 3개 모두 선택 가능하고 값·출처가 동기화
3. 비교표 3개 제품 표시, 점수·순위·추천 문구 0건
4. 함수율 글에 과학 출처 링크와 제품 공식 출처 링크가 존재
5. 허가번호 3개를 원문 그대로 표시: `수허 16-499 호`, `수허 13-112 호`, `수허 08-131`
6. Biofinity Dk/t 170/171 및 UV 충돌을 숨기지 않음
7. DAILIES TOTAL1 코어/표면 함수율을 하나의 값으로 합치지 않음
8. 모든 페이지 h1 1개, 모바일 가로 페이지 넘침 0
9. source disclosure, 제품 선택 키보드 동작, 모바일 메뉴 aria 상태 정상
10. `ADS_ENABLED=false`, 광고 DOM 비표시, 외부 네트워크 요청 0

## Sources

[1] https://acuvue.co.kr/products/acuvue-oasys-1-day — 아큐브 오아시스 원데이 공식 제품 페이지
[2] https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf — ACUVUE Technical Specification Guide 2025
[3] https://total.myalcon.com/kr/products/dailies-total1 — DAILIES TOTAL1 한국 공식 제품 페이지
[5] https://coopervision.co.kr/contact-lenses/biofinity — 바이오피니티 한국 공식 제품 페이지
[7] https://europepmc.org/articles/PMC4686219 — TFOS Contact Lens Discomfort Executive Summary
[8] https://pubmed.ncbi.nlm.nih.gov/24058138 — TFOS Materials Design and Care Subcommittee
[9] https://pmc.ncbi.nlm.nih.gov/articles/PMC12184980 — Twenty-five years of silicone hydrogel soft contact lenses
[10] https://pubmed.ncbi.nlm.nih.gov/10524785 — Hydrogel lens dehydration and subjective comfort
[11] https://pubmed.ncbi.nlm.nih.gov/28002225 — Impact of Contact Lens Material Design and Fitting on Discomfort
[12] https://pubmed.ncbi.nlm.nih.gov/26543349 — Surface water characteristics of daily disposable lens materials
[14] https://coopervision.com/practitioner/our-products/biofinity-family/biofinity-biofinity-xr — Biofinity & XR US practitioner specs
[15] https://www.myalcon.com/professional/contact-lenses/daily/dailies-total1 — DAILIES TOTAL1 US professional specs
[16] https://www.myalcon.com/jp/contact-lenses/daily/dailies-total1 — DAILIES TOTAL1 Japan official page
[17] https://total.myalcon.com/kr — 데일리스 토탈원 워터렌즈 한국 공식
[18] https://pmc.ncbi.nlm.nih.gov/articles/PMC2628947 — Treatment Material Care Patient Factors CL-related Dry Eye
[20] https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do — MFDS 의료기기 UDI 표준코드 조회
[21] https://acuvue.co.kr/files/patient-instruction-guides/Oasys1day_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf — 아큐브 오아시스 원데이 한국 사용설명서
[22] https://coopervision.co.kr/sites/coopervision.co.kr/files/CVK%20Product%20Specifications.pdf — 쿠퍼비전코리아 제품 사양서 2023
[23] https://coopervision.co.kr/contact-lenses — 쿠퍼비전코리아 전체 제품 목록
[24] https://pmc.ncbi.nlm.nih.gov/articles/PMC7917563 — Silicone hydrogel desiccation wettability lubricity
