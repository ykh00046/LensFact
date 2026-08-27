window.LENSFACT_FIELDS = [
  {
    code: "BC",
    label: "베이스커브",
    value: "8.6 mm",
    main: true,
    teaser: "렌즈 뒷면이 얼마나 둥근지를 나타내는 숫자입니다.",
    meaning: "렌즈 뒷면의 곡률입니다. 숫자가 작을수록 곡면이 더 급합니다. 도수와는 관계가 없습니다.",
    caution: "같은 BC라도 재질과 형상이 다르면 착용 상태는 달라집니다.",
    srcSummary: "제조사 공식 사양 · 예시 확인일 2026.08.27",
    src: {
      type: "제조사 공식 사양",
      org: "제조사 A (화면 예시)",
      doc: "SAMPLE-A 제품 사양 페이지 (예시 문서)",
      raw: "Base Curve 8.6 mm",
      url: "example.invalid/sample-a/spec",
      date: "예시 · 2026.08.27",
      cond: "해당 없음",
      link: "허가명·포장 표기·제조사 자료 일치"
    }
  },
  {
    code: "DIA",
    label: "전체 지름",
    value: "14.2 mm",
    main: true,
    teaser: "렌즈 전체의 지름입니다. 착색 지름과는 다릅니다.",
    meaning: "렌즈 바깥 지름입니다. 각막을 덮는 범위를 설명하는 표기이며, 도수와는 관계가 없습니다.",
    caution: "색이 있는 렌즈의 착색 지름과는 다른 값입니다.",
    srcSummary: "제조사 공식 사양 · 예시 확인일 2026.08.27",
    src: {
      type: "제조사 공식 사양",
      org: "제조사 A (화면 예시)",
      doc: "SAMPLE-A 제품 사양 페이지 (예시 문서)",
      raw: "Diameter 14.2 mm",
      url: "example.invalid/sample-a/spec",
      date: "예시 · 2026.08.27",
      cond: "해당 없음",
      link: "허가명·포장 표기·제조사 자료 일치"
    }
  },
  {
    code: "함수율",
    label: "수분 함량",
    value: "59 %",
    main: true,
    teaser: "렌즈 무게에서 물이 차지하는 비율입니다.",
    meaning: "렌즈 무게 대비 수분 비율입니다. 소재 계열이 다르면 이 숫자만으로 비교할 수 없습니다.",
    caution: "높다고 더 좋은 렌즈라는 뜻은 아닙니다. 이 출처는 표기 기준을 밝히지 않았습니다.",
    srcSummary: "제조사 공식 사양 · 예시 확인일 2026.08.27",
    flag: "표기 기준 확인 필요",
    src: {
      type: "제조사 공식 사양",
      org: "제조사 A (화면 예시)",
      doc: "SAMPLE-A 제품 사양 페이지 (예시 문서)",
      raw: "Water content 59%",
      url: "example.invalid/sample-a/spec",
      date: "예시 · 2026.08.27",
      cond: "core / bulk / surface 중 어느 기준인지 표기 없음",
      link: "허가명·포장 표기·제조사 자료 일치"
    }
  },
  {
    code: "재질",
    label: "재질 표기",
    value: "hilafilcon B",
    meaning: "허가정보에 기재된 재질명입니다. 뒤에 붙는 계열 표기는 산소가 전달되는 방식이 다르다는 뜻입니다.",
    caution: "하이드로겔과 실리콘 하이드로겔은 산소 전달 방식이 달라 함수율을 같은 기준으로 비교할 수 없습니다.",
    srcSummary: "식약처 허가정보 · 예시 확인일 2026.08.27",
    src: {
      type: "식약처 허가정보",
      org: "식품의약품안전처 (화면 예시)",
      doc: "의료기기 품목허가 정보 · 예시 레코드",
      raw: "원재료: hilafilcon B",
      url: "example.invalid/mfds/record",
      date: "예시 · 2026.08.27",
      cond: "해당 없음",
      link: "허가명 기준 연결 확인"
    }
  },
  {
    code: "Dk",
    label: "산소 투과성",
    value: "22",
    meaning: "재질 자체가 산소를 얼마나 통과시키는지를 나타냅니다. 렌즈 두께는 반영되지 않은 값입니다.",
    caution: "두 공식 출처가 서로 다른 값을 표기하고 있습니다.",
    srcSummary: "제조사 공식 사양 / 식약처 허가정보 · 예시 확인일 2026.08.27",
    flag: "출처 간 값이 다릅니다",
    conflicts: [
      { src: "제조사 공식 사양 · SAMPLE-A 사양 페이지", v: "22" },
      { src: "식약처 허가정보 · 예시 레코드", v: "24.5" }
    ],
    src: {
      type: "제조사 공식 사양 · 식약처 허가정보",
      org: "제조사 A · 식품의약품안전처 (화면 예시)",
      doc: "예시 문서 2건 · 표기 상이",
      raw: "Dk 22 (제조사) / Dk 24.5 (허가정보)",
      url: "example.invalid/sample-a/spec · example.invalid/mfds/record",
      date: "예시 · 2026.08.27",
      cond: "단위 표기 방식이 출처마다 다름",
      link: "허가명 기준 연결 확인"
    }
  },
  {
    code: "Dk/t",
    label: "산소 투과율",
    value: "22.8",
    meaning: "재질의 산소 투과성을 렌즈 두께로 나눈 값입니다. 두께가 반영되므로 Dk와는 다른 지표입니다.",
    caution: "시험 도수와 두께 기준이 공개되지 않아 다른 제품과 그대로 비교하지 않습니다.",
    srcSummary: "제조사 공식 사양 · 예시 확인일 2026.08.27",
    flag: "직접 비교 제한",
    src: {
      type: "제조사 공식 사양",
      org: "제조사 A (화면 예시)",
      doc: "SAMPLE-A 제품 사양 페이지 (예시 문서)",
      raw: "Dk/t 22.8 (시험 도수·두께 표기 없음)",
      url: "example.invalid/sample-a/spec",
      date: "예시 · 2026.08.27",
      cond: "시험 도수·중심 두께·단위 표기 없음",
      link: "허가명·포장 표기·제조사 자료 일치"
    }
  },
  {
    code: "교체",
    label: "교체 일정",
    value: "1일",
    meaning: "포장과 제조사 자료에 적힌 교체 일정입니다.",
    caution: "표기된 일정을 넘겨 사용하는 것을 전제로 한 정보는 제공하지 않습니다.",
    srcSummary: "제조사 공식 사양(포장 표기) · 예시 확인일 2026.08.27",
    src: {
      type: "제조사 공식 사양 (포장 표기)",
      org: "제조사 A (화면 예시)",
      doc: "SAMPLE-A 포장 표기 · 예시 촬영본",
      raw: "1 DAY / 1일용",
      url: "example.invalid/sample-a/pack",
      date: "예시 · 2026.08.27",
      cond: "해당 없음",
      link: "포장 표기 기준 연결 확인"
    }
  },
  {
    code: "UV",
    label: "공식 UV 표기",
    value: "확인되지 않음",
    unknown: true,
    meaning: "포장과 공식 자료에 UV 차단 표기가 있는지를 나타냅니다.",
    caution: "검토한 자료에서 표기를 찾지 못했습니다. 표기가 없다는 것과 기능이 없다는 것은 다릅니다.",
    srcSummary: "공개 자료에서 확인되지 않음 · 예시 확인일 2026.08.27",
    flag: "확인되지 않음",
    src: {
      type: "확인되지 않음",
      org: "해당 없음",
      doc: "검토한 예시 문서 2건에서 관련 표기 없음",
      raw: "해당 표기 없음",
      url: "해당 없음",
      date: "예시 · 2026.08.27",
      cond: "차단율·측정 조건 확인되지 않음. 콘택트렌즈는 자외선 차단 안경이나 선글라스를 대체하지 않습니다.",
      link: "해당 없음"
    }
  }
];
