// 아큐브® 오아시스 맥스 원데이 — products.js 편입용 엔트리 (검증일 2026-08-28)
// 근거: docs/verification/acuvue-oasys-max-1-day/EVIDENCE.md
// 이 파일은 검토용이다. site/assets/data/products.js 는 이 검증 단계에서 수정하지 않았다.
{
  id: "acuvue-oasys-max-1-day",
  slug: "acuvue-oasys-max-1-day",
  aliases: ["아큐브 오아시스 맥스 원데이", "ACUVUE OASYS MAX 1-Day", "senofilcon A"],
  name: "아큐브® 오아시스 MAX 원데이",
  selectorLabel: "아큐브 오아시스 맥스 원데이",
  maker: "Johnson & Johnson Vision",
  distributor: "(주)한국존슨앤드존슨비전",
  type: "근시·원시용 투명 구면 · 1일 교체",
  packageSpecs: [
    { value: "BC 8.5 / 9.0", label: "Base Curve · mm" },
    { value: "DIA 14.3", label: "Diameter · mm" },
    { value: "38%", label: "Water content" },
    { value: "Dk/t 121", label: "-3.00D · 35℃" }
  ],
  fields: [
    {
      id: "bc",
      value: "8.5 mm / 9.0 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 1쪽 ACUVUE® OASYS MAX 1-Day 열 · 2026.08.28 확인",
      caution: "한국 공식 페이지와 한국 사용설명서에는 파라미터 표가 없어 글로벌 기술 사양이 유일한 근거입니다. 같은 표의 각주는 9.0 곡률이 30렌즈 팩에서만 제공된다고 적습니다. 한국에서 두 곡률이 모두 유통되는지는 확인하지 못했습니다. 한국 제품 페이지 HTML에 보이는 8.5·9.0 문자열 80건은 전부 로고 SVG의 좌표이며 스펙이 아닙니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "8.5/14.3  ·  9.0/14.3",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "1쪽 ACUVUE® OASYS MAX 1-Day 열(좌표 x≈157–195) · Parameters BC (mm) / Dia (mm) 행 · 같은 쪽 각주 `† 9.0 Base Curve only available in the 30-lens pack.`",
          linkNote: "같은 쪽 ACUVUE® OASYS 1-Day 열(별개 제품)도 8.5/14.3 · 9.0/14.3이라 좌표로 열을 고정해 구분했다. 한국 공식 제품 페이지와 MFDS UDI 원장에서 한국 유통 제품 연결 확인"
        }
      ]
    },
    {
      id: "dia",
      value: "14.3 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 1쪽 ACUVUE® OASYS MAX 1-Day 열 · 2026.08.28 확인",
      caution: "한국 공식 자료에 직경 표기가 없어 글로벌 기술 사양이 유일한 근거입니다. 출처는 직경을 단독으로 인쇄하지 않고 곡률과 결합해 8.5/14.3 형식으로 적습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "8.5/14.3  ·  9.0/14.3",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "1쪽 ACUVUE® OASYS MAX 1-Day 열 · Parameters BC (mm) / Dia (mm) 행 · 두 곡률 모두 직경 14.3",
          linkNote: "14.3 단독 인쇄는 없다. 한국 공식 제품 페이지와 MFDS UDI 원장에서 한국 유통 제품 연결 확인"
        }
      ]
    },
    {
      id: "water",
      value: "38%",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 Water Content 행 · 2026.08.28 확인",
      caution: "출처는 측정 위치(벌크·코어·표면)를 표기하지 않고 Water Content 한 줄만 제시합니다. 측정 위치를 나눠 표기하는 제품의 숫자와 같은 축에 놓고 비교하지 않습니다. 실리콘 하이드로겔이므로 함수율이 낮다는 것이 산소 전달이 낮다는 뜻은 아닙니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "38%",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "1쪽 ACUVUE® OASYS MAX 1-Day 열(좌표 x≈157–195) · Water Content 행 · 측정 위치 별도 표기 없음",
          linkNote: "senofilcon A 실리콘 하이드로겔 사양. 같은 쪽 MULTIFOCAL·난시용 열과 ACUVUE® OASYS 1-Day 열도 38%로 같아 값만으로는 열이 구분되지 않는다"
        }
      ]
    },
    {
      id: "material",
      value: "senofilcon A",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 Lens Material 행 · 2026.08.28 확인",
      caution: "한국 공식 제품 페이지·한국 사용설명서·MFDS 허가 원장 어디에도 재질명 표기가 없어 글로벌 기술 사양이 유일한 근거입니다. 한국 페이지에는 senofilcon·세노필콘·실리콘 문자열이 한 건도 없습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "senofilcon A",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "1쪽 ACUVUE® OASYS MAX 1-Day 열 · Lens Material 행",
          linkNote: "PDF는 fi 합자 글리프(U+FB01)로 인쇄돼 추출 문자열이 senoﬁlcon A로 나온다. 인쇄된 단어는 senofilcon A다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "ACUVUE® OASYS MAX 1-Day Contact Lenses (재질명 표기 없음)",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "modelnm=senofilcon 조회 0건 · modelnm=세노필콘 조회 0건 · 등록 모델명과 업체 제품 명칭에 재질명 문자열 없음",
          linkNote: "한국 원장에서는 재질명을 확인할 수 없다. 원데이 아큐브 모이스트는 등록 모델명에 (Etafilcon A)가 들어 있었으나 이 제품에는 없다"
        }
      ]
    },
    {
      id: "dkt",
      value: "121 × 10⁻⁹",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 · 시험도수와 측정 조건 확인",
      caution: "-3.00D 렌즈 중심, 분극법, boundary·edge 보정 Dk, 35℃ 조건의 값입니다. 조건이 다른 Dk/t와 숫자만 직접 비교하지 않습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "121 x 10-9 (-3.00D)",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "1쪽 ACUVUE® OASYS MAX 1-Day 열(좌표 x≈157–195) · Dk/t Value1 (edge corrected) 행 · 각주 1: Oxygen transmissibility measured via polarographic method at centre -3.00D lens using boundary corrected, edge corrected Dk value. Units (cm/sec) (ml O2/ml x mm Hg) at 35° C.",
          linkNote: "같은 표의 중심두께 0.085 mm @ -3.00D와 함께 해석. 인쇄물에서 -9는 위첨자다. 같은 쪽 MULTIFOCAL 열은 147로 다르고 ACUVUE® OASYS 1-Day 열은 121로 같다"
        }
      ]
    },
    {
      id: "thickness",
      value: "0.085 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "ACUVUE 글로벌 기술 사양 Center Thickness 행 · 2026.08.28 확인",
      caution: "-3.00D 기준 중심두께입니다. 도수가 달라지면 두께도 달라집니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "0.085",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "1쪽 ACUVUE® OASYS MAX 1-Day 열 · Center Thickness (mm @ -3.00D) 행",
          linkNote: "Dk/t 시험 조건과 연결. 같은 쪽 MULTIFOCAL 열은 0.070으로 다르다"
        }
      ]
    },
    {
      id: "replacement",
      value: "1일",
      state: "verified",
      flag: "착용방식 표기 별도",
      sourceSummary: "한국 사용설명서 사용 후 관리 절 원문 · 한국 공식 제품 페이지 1일 착용 표기 · 글로벌 기술 사양 Recommended Replacement 행",
      caution: "한국 공식 페이지에는 `1일 착용`만 있고 `1일 교체`라는 문자열이 없습니다. 한국 사용설명서도 `1일 교체`가 아니라 제거 후 폐기·재사용 금지 문장으로 적습니다. 글로벌 기술 사양은 교체주기(Recommended Replacement)와 착용방식(Wearing Schedule)을 서로 다른 행으로 분리합니다. 착용방식은 안경사 또는 안과 전문인의 판단 사항입니다.",
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)한국존슨앤드존슨비전",
          document: "아큐브® 오아시스 MAX 원데이 한국 사용설명서",
          raw: "1. 일일 착용 콘택트렌즈는 별도의 세척 또는 소독이 필요하지 않다. 렌즈를 제거한 후 폐기하고 새로운 콘택트렌즈 또는 안경을 착용한다. \n2. 재사용 금지",
          url: "https://acuvue.co.kr/files/patient-instruction-guides/OasysMAX_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf",
          condition: "3쪽 `다. 콘택트렌즈 사용 후 보관 및 관리 방법` 절 전문 · 문서 전체에 `1일`·`교체` 문자열 0건",
          linkNote: "한국 IFU 목록 페이지에서 이 PDF가 `아큐브® 오아시스 MAX 원데이` 항목에 게시된 것을 확인했다. 파일럿의 아큐브 오아시스 원데이 IFU 문장(`착용한 렌즈는 1회(1일) 착용 후 교체하여야 한다.`)과는 표현이 다르다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)한국존슨앤드존슨비전",
          document: "아큐브® 오아시스 MAX 원데이 한국 공식 제품 페이지",
          raw: "1일 착용",
          url: "https://acuvue.co.kr/products/acuvue-oasys-max-1-day",
          condition: "제품 배지 표기 · 같은 줄에 근시/원시 · 블루라이트 표기 · 전역 내비게이션 착용 주기 분류에서도 1일 착용",
          linkNote: "이 페이지에 `1일 교체` 문자열은 없다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "Daily Disposable Lens",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "1쪽 ACUVUE® OASYS MAX 1-Day 열 · Recommended Replacement 행 · 별도 행인 Wearing Schedule은 Daily Wear",
          linkNote: "교체주기와 착용방식이 표에서 서로 다른 행으로 분리돼 있다"
        }
      ]
    },
    {
      id: "permit",
      value: "수허 22-253 호",
      state: "verified",
      flag: "MFDS 원장 대조 완료",
      sourceSummary: "MFDS 의료기기 UDI 표준코드 조회 508건 전수 집계 · distinct 신원 1건 · 2026.08.28 확인",
      caution: "한국 사용설명서에는 허가번호가 없어 MFDS 원장이 유일한 근거입니다. 오아시스 MAX 계열은 구면·멀티포컬·난시용·멀티포컬 난시용의 허가번호가 모두 다르고, 별개 제품인 아큐브 오아시스 원데이(수허 16-499 호)와도 다릅니다. 한국 제품 페이지의 42024-I10-23-2075는 광고 사전심의 번호이며 허가번호가 아닙니다. UDI 조회 화면에 허가 상태(유효·취하) 열이 없어 상태는 확인하지 못했습니다.",
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 22-253 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "itemPermitNo=수허 22-253 호 조회 508건이 모두 단일 신원((주)한국존슨앤드존슨비전 · 수입업 · 매일착용소프트콘택트렌즈 · 등급 2 · 모델명 ACUVUE® OASYS MAX 1-Day Contact Lenses)으로 연결 · distinct UDI-DI 508건 · 포장내수량 1(130) · 5(126) · 30(126) · 90(126)",
          linkNote: "업체 제품 명칭 원문 `ACUVUE® OASYS MAX 1-Day Contact Lenses, 아큐브® 오아시스 맥스 원데이, 아큐브® 오아시스 MAX 원데이` — 한국어 판매명 두 표기가 병기돼 있다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회 — 계열 분리 확인",
          raw: "수허 23-190 호 (MULTIFOCAL) · 수허 24-225 호 (ASTIGMATISM) · 수허 26-21 호 (MULTIFOCAL for ASTIGMATISM)",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "bplcNm=한국존슨앤드존슨비전 + modelnm=OASYS MAX 조회 21,580건 전수 집계에서 distinct 4건 · 구면 508 · 멀티포컬 732 · 난시용 14,850 · 멀티포컬 난시용 5,490",
          linkNote: "® 없는 modelnm=ACUVUE OASYS MAX 1-Day Contact Lenses 조회는 0건이며, ® 있는 같은 문자열 조회(15,358건)에는 난시용이 접두어 일치로 함께 잡힌다. 구면 분리는 허가번호 조회 또는 전수 집계로만 가능하다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)한국존슨앤드존슨비전",
          document: "아큐브® 오아시스 MAX 원데이 한국 사용설명서",
          raw: "허가번호 표기 없음 (수허·허가 문자열 0건)",
          url: "https://acuvue.co.kr/files/patient-instruction-guides/OasysMAX_%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95.pdf",
          condition: "3쪽 전문 텍스트 추출(3,916자) 후 검색",
          linkNote: "이 IFU에는 허가번호가 없어 MFDS UDI가 유일한 근거다. 파일럿의 아큐브 오아시스 원데이 IFU에는 수허16-499 호가 인쇄돼 있었으나 이 문서에는 없다"
        }
      ]
    },
    {
      id: "uv",
      value: "한국 표기 `UVA 90%, UVB 99% 이상` / 글로벌 표기 `UVB 100%, UVA 99.9%`",
      state: "conflict",
      flag: "지역별 공식 표기 상이",
      sourceSummary: "한국 공식 제품 페이지와 ACUVUE 글로벌 기술 사양의 UV 차단율 표기가 다름 · 2026.08.28 확인",
      caution: "한국 공식 페이지와 글로벌 기술 사양의 차단율 표기가 다르므로 하나로 합치지 않고 두 원문을 병기합니다. 한국 표기는 `자외선 차단 1등급`이라는 등급 표현과 함께 UVA 316~380nm, UVB 280~315nm 범위 측정이라는 각주를, 글로벌 표기는 `Approximate UV Blocking`이라는 근사값 행 제목을 답니다. 두 표기의 대응 관계는 어느 문서에도 설명돼 있지 않습니다. MFDS 등록 모델명에는 UV 관련 문구가 없어 UV 차단 기능 자체의 한국 허가 원장 근거는 없습니다. 자외선 차단 콘택트렌즈는 눈과 주변을 완전히 덮지 못하므로 선글라스나 고글을 대신할 수 없습니다.",
      conflicts: [
        { source: "아큐브® 오아시스 MAX 원데이 한국 공식 제품 페이지", value: "자외선 차단 1등급 - UVA 90%, UVB 99% 이상 차단" },
        { source: "ACUVUE Technical Specification Guide 1쪽 ACUVUE® OASYS MAX 1-Day 열", value: "Blocks 100% of UVB & 99.9% of UVA" }
      ],
      sources: [
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "(주)한국존슨앤드존슨비전",
          document: "아큐브® 오아시스 MAX 원데이 한국 공식 제품 페이지",
          raw: "자외선 차단 1등급 - UVA 90%, UVB 99% 이상 차단",
          url: "https://acuvue.co.kr/products/acuvue-oasys-max-1-day",
          condition: "제품별 특징 절 · 문장 끝 각주 기호 # · 같은 페이지 각주 `# UVA 316~380nm, UVB 280~315nm 범위에서 측정`",
          linkNote: "이 페이지는 아큐브 모이스트·아큐브 오아시스 2주와 달리 특징 영역이 이미지가 아니라 실제 텍스트다. 같은 문장이 파일럿의 아큐브 오아시스 원데이 페이지에도 동일하게 인쇄돼 있다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Johnson & Johnson Vision",
          document: "ACUVUE Technical Specification Guide (PP2020ACLP4800 v13 · AS112401)",
          raw: "Blocks 100% of UVB & 99.9% of UVA",
          url: "https://shop.acuvue.com/pub/media/ACUVUE-Technical-Specification-Guide-05-27-25.pdf",
          condition: "1쪽 ACUVUE® OASYS MAX 1-Day 열(좌표 x≈157–195) · Approximate UV Blocking*† 행 · 두 줄로 인쇄(`Blocks 100% of UVB` / `& 99.9% of UVA`) · 각주 †: WARNING: UV-absorbing contact lenses are NOT substitutes for protective UV-absorbing eyewear such as UV-absorbing goggles or sunglasses because they do not completely cover the eye and surrounding area.",
          linkNote: "행 제목이 Approximate UV Blocking이므로 근사값 표기다. 같은 쪽 ACUVUE® OASYS 1-Day 열은 `Blocks >99.9% of UVB & 96% of UVA`로 이 제품과 다르다 — 좌표로 열을 고정하지 않으면 두 제품이 섞인다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "ACUVUE® OASYS MAX 1-Day Contact Lenses",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "허가번호 수허 22-253 호 모델명 원문 · with UV Blocker 등 UV 관련 문구 없음",
          linkNote: "원데이 아큐브 모이스트(수허 06-1 호)의 등록 모델명에는 Visibility Tinted with UV Blocker가 있었으나 이 제품 모델명에는 UV 관련 문구가 없다"
        }
      ]
    }
  ]
}
