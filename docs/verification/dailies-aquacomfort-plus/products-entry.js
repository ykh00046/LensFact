// 데일리스 아쿠아컴포트 플러스 (DAILIES® AquaComfort Plus®) — products.js 편입용 엔트리 (검증일 2026-08-28)
// 근거: docs/verification/dailies-aquacomfort-plus/EVIDENCE.md
// 이 파일은 검토용이다. site/assets/data/products.js 는 이 검증 단계에서 수정하지 않았다.
//
// 이 제품의 특수성 두 가지.
// 1) 한국 공식 제품 페이지가 존재하지 않는다. 알콘 코리아 사이트맵 66건에 이 제품이 없다.
//    물성값 6개(bc·dia·water·material·dkt·thickness)와 uv 는 전부 글로벌 공식 자료가 유일한 근거이고,
//    한국 유통 근거와 허가번호 근거는 MFDS UDI 원장 단독이다.
// 2) nelfilcon A 는 실리콘 하이드로겔이 아니라 일반 하이드로겔이다. 파일럿의 다른 알콘 제품과 재질 계열이 다르다.
{
  id: "dailies-aquacomfort-plus",
  slug: "dailies-aquacomfort-plus",
  aliases: ["데일리스 아쿠아컴포트 플러스", "DAILIES AquaComfort Plus", "nelfilcon A"],
  name: "데일리스 아쿠아컴포트 플러스® / DAILIES® AquaComfort Plus®",
  selectorLabel: "데일리스 아쿠아컴포트",
  maker: "Alcon",
  distributor: "한국알콘(주)",
  type: "근시·원시용 투명 구면 · 1일 교체",
  packageSpecs: [
    { value: "BC 8.7", label: "Base Curve · mm" },
    { value: "DIA 14.0", label: "Diameter · mm" },
    { value: "함수율 69%", label: "하이드로겔" },
    { value: "Dk/t 26", label: "-3.00D · 측정법 미표기" }
  ],
  fields: [
    {
      id: "bc",
      value: "8.7 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Alcon 미국 전문가 사양·미국 Package Insert·미국 Fitting Guide · 2026.08.28 확인",
      caution: "한국 공식 제품 페이지가 존재하지 않아 글로벌 공식 자료가 유일한 근거입니다. 같은 Package Insert가 함께 다루는 다른 제품은 값이 다릅니다. FOCUS DAILIES 계열은 8.6 mm, 이 제품의 난시용은 8.8 mm입니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "DAILIES® AquaComfort PLUS® 전문가용 공식 사양 (US-DAP-2100005)",
          raw: "Base Curve (mm)\n8.7",
          url: "https://www.myalcon.com/professional/contact-lenses/daily/dailies-aquacomfort-plus/",
          condition: "Product Information 표 · 표 제목 셀 Dailies® AquaComfort Plus® · Base Curve (mm) 행 · 같은 셀에 Base curve optimization is influenced by: Lens diameter / Modulus / Other material characteristics 병기",
          linkNote: "표의 라벨과 값 귀속은 HTML 셀 경계 단위로 확인했다. 국제 전문가 페이지의 파라미터 이미지도 같은 8.7을 인쇄한다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "FOCUS® DAILIES®, DAILIES® AquaComfort Plus® (nelfilcon A) Package Insert (W900252461 · effective as of June 2020)",
          raw: "• Base curve 8.7 mm",
          url: "https://alcon.widen.net/s/sdb7jb8jjj/w900252461-i-nelfilcon-a",
          condition: "Lens Parameters Available 절 · DAILIES® AquaComfort Plus® (nelfilcon A) Soft (hydrophilic) One-Day Contact Lenses 항목 · 이 문서는 6개 제품을 함께 다루므로 제품별 항목을 분리해 인용",
          linkNote: "전문가 페이지가 거는 공유 페이지 주소를 인용한다. 원본 PDF는 만료 서명이 붙은 프리뷰 URL로만 내려받히며, 프리시전원에서 통했던 /content/<id>/original/ 형태는 이 자산에서 404다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "DAILIES® Professional Fitting and Information Guide (W900252465 · 48쪽)",
          raw: "DAILIES® AquaComfort Plus®  (nelfilcon A) One-Day Contact Lenses\n• Base Curve: 8.7 mm",
          url: "https://alcon.widen.net/s/t6qcj5drpc/w900252465-fg-nelfa-dailies-us",
          condition: "7쪽 제품별 파라미터 목록 · 같은 문서 본문은 DAILIES® (nelfilcon A) One-Day Contact Lenses are available in a single base curve/diameter combination of 8.6/13.8 mm for FOCUS® DAILIES® contact lenses and 8.7/14.0 mm for DAILIES® AquaComfort Plus® contact lenses 라고 적는다",
          linkNote: "이 문서에 S3·S4에 없는 새로운 물성값은 없어 대조 근거로만 사용"
        }
      ]
    },
    {
      id: "dia",
      value: "14.0 mm",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Alcon 미국 전문가 사양·미국 Package Insert·미국 Fitting Guide · 2026.08.28 확인",
      caution: "한국 공식 제품 페이지가 존재하지 않아 글로벌 공식 자료가 유일한 근거입니다. 같은 Package Insert의 난시용은 14.4 mm, FOCUS DAILIES는 13.8 mm로 다릅니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "DAILIES® AquaComfort PLUS® 전문가용 공식 사양 (US-DAP-2100005)",
          raw: "Diameter (mm)\n14.0",
          url: "https://www.myalcon.com/professional/contact-lenses/daily/dailies-aquacomfort-plus/",
          condition: "Product Information 표 · Diameter (mm) 행",
          linkNote: "국제 전문가 페이지의 파라미터 이미지도 같은 14.0을 인쇄한다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "FOCUS® DAILIES®, DAILIES® AquaComfort Plus® (nelfilcon A) Package Insert (W900252461 · effective as of June 2020)",
          raw: "• Diameter  14.0 mm",
          url: "https://alcon.widen.net/s/sdb7jb8jjj/w900252461-i-nelfilcon-a",
          condition: "Lens Parameters Available 절 · DAILIES® AquaComfort Plus®(구면) 항목 · 원문에 Diameter 와 14.0 사이 공백 두 칸",
          linkNote: "이 PI는 FOCUS DAILIES 3종과 AquaComfort Plus 3종을 함께 다루므로 제품별 항목을 분리해 인용"
        }
      ]
    },
    {
      id: "water",
      value: "69%",
      state: "verified",
      flag: "글로벌 공식 자료 · 지역별로 라벨이 다름",
      sourceSummary: "미국 전문가 사양은 Water Content 69%, 국제 전문가 사양은 CORE WATER CONTENT 69% · 2026.08.28 확인",
      caution: "숫자는 모든 공식 자료에서 69%로 같지만 부르는 이름이 다릅니다. 미국 전문가 사양표와 Package Insert는 Water Content(렌즈 재질 전체)라고 적고, 국제 전문가 사양 이미지는 CORE WATER CONTENT(코어)라고 적습니다. 데일리스 토탈원처럼 코어와 표면 함수율이 따로 제시된 제품이 아니므로 69% 하나만 값으로 씁니다. 같은 사양표의 Moisturizing Agents(하이드록시프로필 메틸셀룰로오스·PEG·PVA)는 렌즈에 배합된 습윤제 성분 목록이지 함수율의 측정 위치나 조건이 아니므로 함수율에 합치지 않았습니다. nelfilcon A는 실리콘 하이드로겔이 아닌 일반 하이드로겔이므로, 재질 계열이 다른 렌즈와 함수율 숫자만 비교하지 마십시오.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "DAILIES® AquaComfort PLUS® 전문가용 공식 사양 (US-DAP-2100005)",
          raw: "Water Content\n69%",
          url: "https://www.myalcon.com/professional/contact-lenses/daily/dailies-aquacomfort-plus/",
          condition: "Product Information 표 · Water Content 행 · 같은 표의 Moisturizing Agents 행(Unique Moisture System: Hydroxypropyl methylcellulose / Polyethylene glycol (PEG) / Polyvinyl alcohol (PVA))은 별개 항목",
          linkNote: "이 표에는 코어·표면 함수율 구분이 없다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "FOCUS® DAILIES®, DAILIES® AquaComfort Plus® (nelfilcon A) Package Insert (W900252461 · effective as of June 2020)",
          raw: "Water Content: 69% by weight in normal saline",
          url: "https://alcon.widen.net/s/sdb7jb8jjj/w900252461-i-nelfilcon-a",
          condition: "Lens Properties 절 · 6개 제품 공통 재질 수준 값 · 같은 문서 PRODUCT DESCRIPTION은 The lenses are made of a material that is approximately 69% water and 31% nelfilcon A polymer (polyvinyl alcohol partially acetalized with N-formylmethyl acrylamide) 라고 적는다",
          linkNote: "측정 조건은 normal saline 중 중량 기준이다. 미국 Fitting Guide(W900252465)도 같은 문장을 인쇄한다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "DAILIES® AquaComfort® PLUS Table Parameters (국제 전문가 페이지 이미지 · UKIE-DAP-2500001)",
          raw: "CORE WATER CONTENT\n69%",
          url: "https://www.myalcon.com/international/professional/contact-lenses/daily/dailies-aquacomfort-plus/",
          condition: "국제 전문가 페이지의 파라미터 표는 텍스트가 아니라 2236×901 PNG 이미지(DAILIES-AquaComfort-PLUS-Parameters-Table-Parameters-V2.png)이며 이 값은 이미지 판독 결과다",
          linkNote: "숫자는 미국과 같고 라벨만 CORE 가 붙는다. 이미지 판독이므로 값의 1차 출처로 쓰지 않고 라벨 차이의 근거로만 쓴다"
        }
      ]
    },
    {
      id: "material",
      value: "nelfilcon A (하이드로겔)",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Alcon 미국 전문가 사양·미국 Package Insert · 2026.08.28 확인",
      caution: "한국 공식 자료에는 이 제품의 재질명은 물론 제품 페이지 자체가 없습니다. nelfilcon A는 실리콘 하이드로겔이 아니라 일반 하이드로겔입니다. Package Insert는 이 렌즈를 Soft (hydrophilic)로 기술하며 문서 전체에 silicone이라는 단어가 없습니다. 같은 알콘 제품이라도 데일리스 토탈원(delefilcon A)과 프리시전원(verofilcon A)은 실리콘 하이드로겔이므로 재질 계열이 다릅니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "DAILIES® AquaComfort PLUS® 전문가용 공식 사양 (US-DAP-2100005)",
          raw: "Material\nnelfilcon A",
          url: "https://www.myalcon.com/professional/contact-lenses/daily/dailies-aquacomfort-plus/",
          condition: "Product Information 표 · Material 행",
          linkNote: "국제 전문가 페이지의 파라미터 이미지도 같은 nelfilcon A를 인쇄한다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "FOCUS® DAILIES®, DAILIES® AquaComfort Plus® (nelfilcon A) Package Insert (W900252461 · effective as of June 2020)",
          raw: "The lenses are made of a material that is approximately 69% water and 31% nelfilcon A polymer (polyvinyl alcohol partially acetalized with N-formylmethyl acrylamide).",
          url: "https://alcon.widen.net/s/sdb7jb8jjj/w900252461-i-nelfilcon-a",
          condition: "PRODUCT DESCRIPTION · Lens Material 절 · 문서 표제는 DAILIES® AquaComfort Plus® … (nelfilcon A) Soft (hydrophilic) One-Day Contact Lenses · 문서 전문에 silicone 0건",
          linkNote: "재질 계열을 하이드로겔로 판단한 근거는 이 Soft (hydrophilic) 표기와 silicone 0건이다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "재질명 표기 없음 (modelnm=nelfilcon 0건, modelnm=Nelfilcon 0건)",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "bplcNm=한국알콘 조건에서 재질명으로는 조회되지 않음 · 원장의 모델명은 DAILIES AquaComfort Plus One-Day Contact Lens, 업체 제품 명칭은 아쿠아 렌즈",
          linkNote: "한국 자료에서 재질명을 확인할 수 있는 경로가 없다는 사실의 근거"
        }
      ]
    },
    {
      id: "dkt",
      value: "26 @ -3.00D",
      state: "verified",
      flag: "글로벌 공식 자료 · 측정법·온도 미표기",
      sourceSummary: "Alcon 미국·국제 전문가 사양 · 시험도수만 표기 · 2026.08.28 확인",
      caution: "이 값에는 시험도수(-3.00D)만 붙어 있고 측정법·보정 방식·측정 온도가 어떤 공식 자료에도 없습니다. 같은 문서군의 Package Insert와 Fitting Guide에 나오는 Oxygen Permeability (Dk): 26 x 10-11 … measured at 35 °C (Fatt, edge effect corrected)는 재질 고유 산소 투과성(Dk)의 값과 조건이지 산소 전달률(Dk/t)의 조건이 아닙니다. 두 숫자가 모두 26인 것은 단위 자릿수에서 비롯된 일치이며 같은 값이 아닙니다. 이 검증은 두 값을 섞지 않았고 Dk와 중심두께로 Dk/t를 역산하지도 않았습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "DAILIES® AquaComfort PLUS® 전문가용 공식 사양 (US-DAP-2100005)",
          raw: "Dk/t\n26 @ ‑3.00D",
          url: "https://www.myalcon.com/professional/contact-lenses/daily/dailies-aquacomfort-plus/",
          condition: "Product Information 표 · Dk/t 행 · 측정법·보정·온도 표기 없음 · 인쇄된 하이픈은 일반 하이픈이 아니라 비분리 하이픈(U+2011)이며 원문 그대로 보존",
          linkNote: "국제 전문가 페이지의 파라미터 이미지도 26 @ -3.00D로 같다. 지역 간 값 차이 없음"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "FOCUS® DAILIES®, DAILIES® AquaComfort Plus® (nelfilcon A) Package Insert (W900252461 · effective as of June 2020)",
          raw: "Oxygen Permeability (Dk): 26 x 10 -11 (cm2/sec) (ml O2/ml x mm Hg) at\n 35 °C (Fatt, edge effect corrected)",
          url: "https://alcon.widen.net/s/sdb7jb8jjj/w900252461-i-nelfilcon-a",
          condition: "Lens Properties 절 · 6개 제품 공통 재질 수준 값 · 이것은 Dk(투과성)이지 Dk/t(전달률)가 아니다 · 미국 Fitting Guide(W900252465)도 같은 값과 조건을 인쇄한다",
          linkNote: "Dk/t 행에 조건이 없다는 사실과, 조건이 붙은 26은 다른 물리량이라는 사실을 함께 보이기 위해 병기한다. 값으로는 쓰지 않는다"
        }
      ]
    },
    {
      id: "thickness",
      value: "0.10 mm (at -3.00D)",
      state: "verified",
      flag: "글로벌 공식 자료",
      sourceSummary: "Alcon 미국 전문가 사양·미국 Package Insert · 2026.08.28 확인",
      caution: "중심두께는 도수에 따라 달라집니다. Package Insert는 varies with power라고 명시합니다. 이 값은 -3.00D 기준입니다. 같은 Package Insert의 FOCUS DAILIES Progressives는 0.11 mm로 다릅니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "DAILIES® AquaComfort PLUS® 전문가용 공식 사양 (US-DAP-2100005)",
          raw: "Center Thickness (‑3.00D, mm)\n0.10",
          url: "https://www.myalcon.com/professional/contact-lenses/daily/dailies-aquacomfort-plus/",
          condition: "Product Information 표 · Center Thickness 행 · 시험도수와 단위가 라벨 안에 괄호로 붙어 있음 · 하이픈은 비분리 하이픈(U+2011)",
          linkNote: "국제 전문가 페이지의 파라미터 이미지도 같은 0.10을 인쇄한다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "FOCUS® DAILIES®, DAILIES® AquaComfort Plus® (nelfilcon A) Package Insert (W900252461 · effective as of June 2020)",
          raw: "• Center Thickness 0.10 mm at -3.00 D (varies with power)",
          url: "https://alcon.widen.net/s/sdb7jb8jjj/w900252461-i-nelfilcon-a",
          condition: "Lens Parameters Available 절 · DAILIES® AquaComfort Plus®(구면) 항목",
          linkNote: "도수에 따라 달라진다는 단서가 값과 같은 줄에 인쇄돼 있다"
        }
      ]
    },
    {
      id: "replacement",
      value: "1일",
      state: "verified",
      sourceSummary: "미국 Package Insert의 단회 사용 규정과 MFDS 원장 소분류 · 2026.08.28 확인",
      caution: "알콘 전문가용 사양표에는 교체주기 행이 아예 없습니다. 데일리스 토탈원·프리시전원과 같은 구조입니다. 한국 공식 제품 페이지가 없으므로 한국 표기 근거는 MFDS 원장의 소분류 품목 명칭뿐입니다. 교체주기는 착용방식과 다릅니다. Package Insert는 이 렌즈가 수면 중 착용에 대해 시험되지 않았으며 잠들기 전 반드시 제거해야 한다고 적습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "FOCUS® DAILIES®, DAILIES® AquaComfort Plus® (nelfilcon A) Package Insert (W900252461 · effective as of June 2020)",
          raw: "DAILIES® (nelfilcon A) One-Day Contact Lenses are to be prescribed for single use, daily disposable wear The lenses are not intended to be cleaned or disinfected and should be discarded after a single use.",
          url: "https://alcon.widen.net/s/sdb7jb8jjj/w900252461-i-nelfilcon-a",
          condition: "INDICATIONS (USES) 절 말미 · 같은 문서는 Daily wear lenses are not indicated for overnight wear, and patients should be instructed not to wear lenses while sleeping 및 WEARING SCHEDULE 절의 Normal daily wear of lenses assumes a minimum of 6 hours of non-lens wear per 24-hour period 를 별도로 적는다",
          linkNote: "원문에 single use, 뒤 daily disposable wear 와 The lenses 사이 마침표가 빠져 있으나 인쇄된 그대로 인용한다"
        },
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "매일착용 소프트 콘택트렌즈",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "수허 09-217 호 구면 58건의 소분류 품목 명칭 · 등급 2 · 같은 제품군의 난시용(수허 15-658 호)은 공백 없는 매일착용소프트콘택트렌즈로 표기가 흔들린다",
          linkNote: "한국 공식 제품 페이지가 없어 한국 표기로 확인할 수 있는 유일한 근거"
        }
      ]
    },
    {
      id: "permit",
      value: "수허 09-217 호",
      state: "verified",
      sourceSummary: "MFDS 의료기기 UDI 표준코드 조회 · 2026.08.28 확인",
      caution: "구면과 난시용의 허가번호가 다릅니다. 이 번호는 구면 제품의 번호이며 아쿠아렌즈 난시용은 수허 15-658 호로 별개입니다. 이름이 비슷한 데일리스 토탈원은 수허 13-112 호, 데일리스 프레시룩 일루미네이트는 수허 09-809 호로 모두 별개입니다. 아쿠아컴포트 플러스 다초점은 한국 원장에 등록돼 있지 않습니다. 이 조회는 원장에 등록이 있다는 사실까지만 보여 주며, 허가의 현재 유효성이나 한국에서의 현재 판매 여부는 확인하지 못했습니다.",
      sources: [
        {
          sourceType: "MFDS 허가·UDI",
          verifiedAt: "2026-08-28",
          organization: "식품의약품안전처",
          document: "의료기기 UDI 표준코드 조회",
          raw: "수허 09-217 호",
          url: "https://emedi.mfds.go.kr/msismext/udi/uif/schStddCdLstView.do",
          condition: "bplcNm=한국알콘 · modelnm=DAILIES AquaComfort Plus 조회 1,044건 중 구면 58건, itemPermitNo=수허 09-217 호 단독 조회 58건이 모두 단일 신원(한국알콘(주) · 수입업 · 매일착용 소프트 콘택트렌즈 · 2등급 · 모델명 DAILIES AquaComfort Plus One-Day Contact Lens · 업체 제품 명칭 아쿠아 렌즈)으로 연결 · distinct UDI-DI 58건 · 포장내수량 5가 29건, 30이 29건",
          linkNote: "모델명 검색은 대소문자를 구분한다. 이 제품은 전부 대문자 DAILIES 로 시작하는 표기가 정답이며 파스칼 표기 Dailies AquaComfort Plus 는 0건이다. 같은 화면에서 프리시전원은 반대로 파스칼 Precision1 이 정답이었다. 폼 파라미터는 UTF-8로 인코딩해야 하며 EUC-KR로 보내면 0건이 나온다"
        },
        {
          sourceType: "한국 공식 페이지·IFU",
          verifiedAt: "2026-08-28",
          organization: "한국알콘(주)",
          document: "알콘 코리아 사이트맵 및 원데이 콘택트렌즈 카테고리",
          raw: "허가번호 표기 없음 (제품 페이지 자체가 없음)",
          url: "https://www.myalcon.com/kr/contact-lenses/daily/",
          condition: "사이트맵 https://www.myalcon.com/kr/sitemap.xml 의 URL 66건 전수 확인 결과 aquacomfort·aqua 를 포함하는 경로 0건 · 원데이 카테고리 본문에 실린 제품은 워터렌즈·워터렌즈 멀티포컬·워터렌즈 난시·프리시전 원·프리시전 원 난시 다섯 가지뿐 · 한국 페이지 전문 검색에서 아쿠아·AquaComfort·nelfilcon 모두 0건",
          linkNote: "이 제품은 한국 IFU 경로도 없어 MFDS UDI가 허가번호와 한국 유통의 유일한 근거다. 알콘 공식 eIFU 포털은 로그인 인증이 필요하다"
        }
      ]
    },
    {
      id: "uv",
      value: "공식 UV 표기 확인되지 않음",
      state: "unknown",
      flag: "확인되지 않음",
      sourceSummary: "검토한 알콘 공식 자료 4종 어디에도 이 제품의 UV 표기가 없음 · 2026.08.28 확인",
      caution: "UV 차단이 없다고 단정하지 않습니다. 검토한 공식 자료가 이 제품의 UV를 말하지 않는다는 사실만 적습니다. 미국 전문가 사양표에는 UV 행이 아예 없고, Package Insert 2쪽·Fitting Guide 48쪽·Patient Instruction Booklet 24쪽 전문에서 UV와 ultraviolet이 각각 0건입니다. 참고로 국제 전문가 페이지의 파라미터 이미지에는 배경과 구분되지 않는 흰색 글자로 UV BLOCKER* / Class 1 UV blocker (≥90% of UVA, ≥99% of UVB) 두 줄이 지워지지 않은 채 남아 있습니다. 화면에서는 보이지 않고, 문자열이 프리시전원 사양표의 UV 행과 한 글자도 다르지 않아 템플릿 잔재로 판단했으며, 이 제품의 UV 값으로 쓰지 않았습니다.",
      sources: [
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "DAILIES® AquaComfort PLUS® 전문가용 공식 사양 (US-DAP-2100005)",
          raw: "Product Information 표에 UV 항목 없음",
          url: "https://www.myalcon.com/professional/contact-lenses/daily/dailies-aquacomfort-plus/",
          condition: "표의 행은 Material · Center Thickness · Water Content · Core Modulus · Diameter · Handling Tint · Packaging · Dk/t · Power Range · Base Curve · Moisturizing Agents 열한 가지이며 UV BLOCKER 행이 없다 · 같은 회사 프리시전원 사양표에는 UV BLOCKER 행이 있다",
          linkNote: "HTML 셀 단위로 표 전체를 열거해 확인했다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "FOCUS® DAILIES®, DAILIES® AquaComfort Plus® (nelfilcon A) Package Insert (W900252461 · effective as of June 2020)",
          raw: "UV 및 ultraviolet 문자열 0건",
          url: "https://alcon.widen.net/s/sdb7jb8jjj/w900252461-i-nelfilcon-a",
          condition: "2쪽 27,038자 전문 검색 · 프리시전원 Package Insert가 싣는 ACTIONS 절의 UV 차단율 문단과 UV 경고문이 이 문서에는 존재하지 않는다 · 같은 문서의 Lens Material 절도 UV 흡수 단량체를 언급하지 않는다",
          linkNote: "프리시전원 PI는 lenses contain a benzotriazole UV-absorbing monomer 라고 명시했다. 이 문서에는 그런 문장이 없다"
        },
        {
          sourceType: "제조사 기술·전문가 사양",
          verifiedAt: "2026-08-28",
          organization: "Alcon",
          document: "DAILIES® Professional Fitting and Information Guide (W900252465) 및 Patient Instruction Booklet (W900252462)",
          raw: "UV 및 ultraviolet 문자열 0건",
          url: "https://alcon.widen.net/s/t6qcj5drpc/w900252465-fg-nelfa-dailies-us",
          condition: "Fitting Guide 48쪽 92,759자와 Patient Instruction Booklet 24쪽 38,046자 전문 검색 · 두 문서 모두 0건",
          linkNote: "값을 unknown으로 둔 근거를 넓히기 위해 부속 문서까지 확인했다"
        }
      ]
    }
  ]
}
