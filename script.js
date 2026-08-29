/* 2027 EU Trip Portal — script.js
 * Data loaded from data/trips.json (GitHub Pages) with embedded fallback (file://).
 */

const FALLBACK_DATA = {
  "meta": {
    "title": "2027 유럽 여행 — 항공 & 지상 동선",
    "subtitle": "부다페스트(BUD) in/out · 베이징 경유 · 렌트카 · 시계방향 원형루프",
    "version": "v1",
    "createdDate": "2026.08",
    "tripDates": "2027.07.17 - 08.07",
    "totalDays": 21,
    "totalNights": 19,
    "countries": 4,
    "countryCodes": ["HU", "AT", "CZ", "IT"],
    "totalDistanceKm": 2090,
    "distanceNote": "참고값 (지도 기반 실측 권장)"
  },
  "flights": {
    "airline": "중국국제항공 (Air China, CA)",
    "cabin": "일반석",
    "outbound": [
      { "leg": 1, "date": "7/17 (토)", "route": "GMP → PEK", "flight": "CA138", "aircraft": "보잉 737-300", "depart": "14:25", "arrive": "15:45", "duration": "2h20m" },
      { "leg": "transit", "location": "베이징", "duration": "11h05m", "note": "수하물 수취/재수속 불필요 · 한국 국적 무비자 경유" },
      { "leg": 2, "date": "7/18 (일)", "route": "PEK → BUD", "flight": "CA719", "aircraft": "보잉 787-9", "depart": "02:50", "arrive": "07:00 (+1)", "duration": "10h10m", "arrivalTerminal": "BUD T2B" }
    ],
    "outboundTotal": "23h35m",
    "return": [
      { "leg": 1, "date": "8/6 (금)", "route": "BUD → PEK", "flight": "CA720", "aircraft": "보잉 787-9", "depart": "13:00", "arrive": "04:10 (+1)", "duration": "9h10m", "departureTerminal": "BUD T2B" },
      { "leg": "transit", "location": "베이징", "duration": "5h50m", "note": "수하물 수취/재수속 불필요" },
      { "leg": 2, "date": "8/7 (토)", "route": "PEK → GMP", "flight": "CA137", "aircraft": "보잉 737-300", "depart": "10:00", "arrive": "13:05", "duration": "2h05m", "arrivalTerminal": "GMP T1" }
    ],
    "returnTotal": "17h05m",
    "transitWarning": "베이징 환승 11h05m — 시내 나들이 가능. 한국 국적은 무비자 경유 대상이라 가능하나, 수하물은 체크쓰루로 부다페스트까지 걸고, 여권 지참 + 입국시 임시입국허가 카드 작성 필요. 환승 대기로 공항에만 있어도 무방."
  },
  "phases": [
    { "num": 1, "title": "비엔나 도착", "dates": "7/18-7/19", "nights": 2, "route": "BUD → 비엔나", "country": "AT", "distance": "~240km", "highlights": ["Schönbrunn 궁전", "링슈트라세"] },
    { "num": 2, "title": "프라하", "dates": "7/20-7/21", "nights": 2, "route": "비엔나 → 프라하", "country": "CZ", "distance": "~330km", "highlights": ["카를교", "프라하성"] },
    { "num": 3, "title": "체스키크룸로프", "dates": "7/22", "nights": 1, "route": "프라하 → 크룸로프", "country": "CZ", "distance": "~180km", "highlights": ["UNESCO 중세마을", "크룸로프 성"] },
    { "num": 4, "title": "할슈타트", "dates": "7/23-7/24", "nights": 2, "route": "크룸로프 → 할슈타트", "country": "AT", "distance": "~180km", "highlights": ["5fingers 전망대", "호숫가 산책"] },
    { "num": 5, "title": "잘츠부르크", "dates": "7/25-7/26", "nights": 2, "route": "할슈타트 → 잘츠부르크", "country": "AT", "distance": "~70km", "highlights": ["호엔잘츠부르크 성", "구시가지"] },
    { "num": 6, "title": "돌로미티 동부 (코르티나)", "dates": "7/27-7/29", "nights": 3, "route": "잘츠부르크 → 코르티나", "country": "IT", "distance": "~330km", "highlights": ["미수리나 호수", "트레 치메", "알프스 산악구간"] },
    { "num": 7, "title": "돌로미티 서부 (오르티세이)", "dates": "7/30-8/1", "nights": 3, "route": "코르티나 → 오르티세이", "country": "IT", "distance": "~65km", "highlights": ["Alpe di Siusi", "Sella 계곡", "가르데나 패스"] },
    { "num": 8, "title": "그라츠 경유", "dates": "8/2", "nights": 1, "route": "오르티세이 → 그라츠", "country": "AT", "distance": "~400km", "highlights": ["장거리 이동", "오스트리아 복귀"] },
    { "num": 9, "title": "부다페스트 & 귀국", "dates": "8/3-8/6", "nights": 3, "route": "그라츠 → 부다페스트 → BUD", "country": "HU", "distance": "~295km", "highlights": ["어부의 요새", "다뉴브 야경", "게르트 온천", "공항 반납"] }
  ],
  "days": [
    { "day": 1, "date": "7/18", "weekday": "일", "from": "BUD 공항", "to": "비엔나", "km": "240", "nights": "비엔나 1박", "note": "✈ 07:00 BUD 도착 → 렌트 픽업 → 비엔나 (~2.5h) · 밤샘 비행 후 무리 없는 이동", "country": "AT" },
    { "day": 2, "date": "7/19", "weekday": "월", "from": "비엔나", "to": "비엔나", "km": "0", "nights": "비엔나 +1 (2박)", "note": "쇤브룬 궁 · 링슈트라세", "country": "AT" },
    { "day": 3, "date": "7/20", "weekday": "화", "from": "비엔나", "to": "프라하", "km": "330", "nights": "프라하 1박", "note": "~3.5h 이동", "country": "CZ" },
    { "day": 4, "date": "7/21", "weekday": "수", "from": "프라하", "to": "프라하", "km": "0", "nights": "프라하 +1 (2박)", "note": "카를교 · 프라하성", "country": "CZ" },
    { "day": 5, "date": "7/22", "weekday": "목", "from": "프라하", "to": "체스키크룸로프", "km": "180", "nights": "크룸로프 1박", "note": "~2h · 남부 보헤미아", "country": "CZ" },
    { "day": 6, "date": "7/23", "weekday": "금", "from": "체스키크룸로프", "to": "할슈타트", "km": "180", "nights": "할슈타트 1박", "note": "~2.5-3h · 오스트리아 진입", "country": "AT" },
    { "day": 7, "date": "7/24", "weekday": "토", "from": "할슈타트", "to": "할슈타트", "km": "0", "nights": "할슈타트 +1 (2박)", "note": "5fingers 전망대 · 호숫가 산책", "country": "AT" },
    { "day": 8, "date": "7/25", "weekday": "일", "from": "할슈타트", "to": "잘츠부르크", "km": "70", "nights": "잘츠부르크 1박", "note": "~1h", "country": "AT" },
    { "day": 9, "date": "7/26", "weekday": "월", "from": "잘츠부르크", "to": "잘츠부르크", "km": "0", "nights": "잘츠부르크 +1 (2박)", "note": "호엔잘츠부르크 성 · 구시가지", "country": "AT" },
    { "day": 10, "date": "7/27", "weekday": "화", "from": "잘츠부르크", "to": "코르티나", "km": "330", "nights": "코르티나 1박", "note": "~3.5-4h · 알프스 산악구간", "country": "IT" },
    { "day": 11, "date": "7/28", "weekday": "수", "from": "코르티나", "to": "코르티나", "km": "0", "nights": "코르티나 +1 (3박)", "note": "미수리나 호수 · 동부 돌로미티", "country": "IT" },
    { "day": 12, "date": "7/29", "weekday": "목", "from": "코르티나", "to": "코르티나", "km": "0", "nights": "코르티나 +1 (3박)", "note": "트레 치메 하이킹", "country": "IT" },
    { "day": 13, "date": "7/30", "weekday": "금", "from": "코르티나", "to": "오르티세이", "km": "65", "nights": "오르티세이 1박", "note": "~1.5h · 가르데나 계곡 이동", "country": "IT" },
    { "day": 14, "date": "7/31", "weekday": "토", "from": "오르티세이", "to": "오르티세이", "km": "0", "nights": "오르티세이 +1 (3박)", "note": "Alpe di Siusi · 세체다", "country": "IT" },
    { "day": 15, "date": "8/1", "weekday": "일", "from": "오르티세이", "to": "오르티세이", "km": "0", "nights": "오르티세이 +1 (3박)", "note": "Sella 계곡 · 가르데나 패스", "country": "IT" },
    { "day": 16, "date": "8/2", "weekday": "월", "from": "오르티세이", "to": "그라츠", "km": "400", "nights": "그라츠 1박", "note": "~4h · 오스트리아 복귀 · 장거리", "country": "AT" },
    { "day": 17, "date": "8/3", "weekday": "화", "from": "그라츠", "to": "부다페스트", "km": "275", "nights": "부다페스트 1박", "note": "~4h", "country": "HU" },
    { "day": 18, "date": "8/4", "weekday": "수", "from": "부다페스트", "to": "부다페스트", "km": "0", "nights": "부다페스트 +1 (3박)", "note": "어부의 요새 · 다뉴브 야경", "country": "HU" },
    { "day": 19, "date": "8/5", "weekday": "목", "from": "부다페스트", "to": "부다페스트", "km": "0", "nights": "부다페스트 +1 (3박)", "note": "게르트 온천 · 시내 관광", "country": "HU" },
    { "day": 20, "date": "8/6", "weekday": "금", "from": "부다페스트", "to": "BUD 공항", "km": "20", "nights": "—", "note": "렌트 반납 → ✈ 13:00 출발", "country": "HU" }
  ],
  "coords": {
    "BUD": [47.4298, 19.2611],
    "Vienna": [48.2082, 16.3738],
    "Prague": [50.0755, 14.4378],
    "Český Krumlov": [48.8107, 14.3176],
    "Hallstatt": [47.5622, 13.6493],
    "Salzburg": [47.8095, 13.0550],
    "Cortina": [46.5405, 12.1357],
    "Ortisei": [46.5737, 11.6723],
    "Graz": [47.0707, 15.4395],
    "Budapest": [47.4979, 19.0402]
  },
  "route": ["BUD", "Vienna", "Prague", "Český Krumlov", "Hallstatt", "Salzburg", "Cortina", "Ortisei", "Graz", "Budapest", "BUD"],
  "rental": {
    "carType": "토요타 프로에이스 (7인승+)",
    "pickup": "부다페스트 리스트 페렌츠 국제공항 (BUD)",
    "dropoff": "동일 지점 (BUD)",
    "period": "7/17 (토) 08:00 → 8/6 (금) 13:00 · 21일",
    "freeCancel": "2027/7/15 08:00 이전 (현지시간)",
    "confirmation": "1시간 이내 확정",
    "payment": "온라인 선결제",
    "totalPrice": "미정",
    "priceBreakdown": [],
    "insuranceWarning": "보장이 기본 ₩8,049,325 미만만 커버. 슈페리어 보장으로 낮췄지만 사고 시 산악구간 접수 리스크. 자기부담금 0원(풀커버리지) 추가 여부 인수 시점 확인 권장.",
    "capacityWarning": "5인 + 23kg 수하물 5개 → 프로에이스급 적당. 3번째 열도 짐으로 쓰거나 길이 확보 확인. 국경 통행 수수료 별도인지 확인."
  },
  "accommodations": [
    { "city": "비엔나", "nights": 2, "period": "7/18-19", "area": "구시가지 외곽 · 7구/서부 (주차 가능)", "points": "공항접근+도심 트램. 구시가지는 주차난, 외곽 아파트 추천", "country": "AT" },
    { "city": "프라하", "nights": 2, "period": "7/20-21", "area": "구시가지 경계 · 비노라디/카를린", "points": "도보 관광 + 주차장 확보된 건물", "country": "CZ" },
    { "city": "체스키크룸로프", "nights": 1, "period": "7/22", "area": "구시가지 외곽 주차가능 숙소", "points": "성곽 도보권, 오래된 시내는 차 진입 제한", "country": "CZ" },
    { "city": "할슈타트", "nights": 2, "period": "7/23-24", "area": "마을 입구(파킹)가 아닌 상류 숙소", "points": "호수 전망 + 5인 숙소 희소 — 일찍 예약 필수", "country": "AT" },
    { "city": "잘츠부르크", "nights": 2, "period": "7/25-26", "area": "시내 외곽 · 리트 또는 남부", "points": "성곽 도보, 주차 포함 아파트", "country": "AT" },
    { "city": "코르티나(동)", "nights": 3, "period": "7/27-29", "area": "코르티나 담페초 시내 외곽", "points": "곤돌라·호수 근접, 산악권 주차 필수", "country": "IT" },
    { "city": "오르티세이(서)", "nights": 3, "period": "7/30-8/1", "area": "오르티세이/셀바 마을", "points": "가르데나 계곡 거점, 파킹+발코니 전망", "country": "IT" },
    { "city": "그라츠", "nights": 1, "period": "8/2", "area": "시내 외곽", "points": "경유지 — 세탁/휴식 위주", "country": "AT" },
    { "city": "부다페스트", "nights": 3, "period": "8/3-5", "area": "페슈(1구) 외곽 · 다뉴브 페스트측", "points": "도보+주차+마지막 공항접근(30분)", "country": "HU" }
  ],
  "tips": [
    { "title": "렌터카", "icon": "🚐", "content": "BUD 공항에서 수령. 자동변속기 대형 승합차 추천. 유럽용 내비 필수. 주차 대부분 유료. 4개국(HU·AT·CZ·IT) 국경 통행 허용 계약인지 확인 — 체코·이탈리아 통과료 별도인 경우 많음." },
    { "title": "비네트 & 톨", "icon": "🛣️", "content": "오스트리아: 디지털 10일권(€9.90) 필수. 체코: edalnice.cz에서 구매. 헝가리: ematrica.nemzetiutdijfizetes.hu. 이탈리아: 자동차로(Autostrada) 톨비 높음 — 톨게이트 카드 권장." },
    { "title": "유심 & 통신", "icon": "📱", "content": "EU roaming. 한국에서 유심 구매 또는 현지 구매. 4개국 커버리지 확인." },
    { "title": "화폐 & 결제", "icon": "💰", "content": "오스트리아·이탈리아·헝가리: 유로화(€). 체코: 코루나(CZK). 신용카드 대부분 가능, 현금도 준비. 헝가리는 포린트(HUF) 기본." },
    { "title": "날씨 & 복장", "icon": "🌤️", "content": "7-8월 평균 25-30도. 돌로미티 산악지대는 쌀쌀 — 겉옷 필수. 자외선 차단 필수." },
    { "title": "식사", "icon": "🍽️", "content": "오스트리아: 비너 슈니첼, 자허토르테. 헝가리: 굴라시. 체코: 트들니크. 이탈리아: 파스타, 피자." },
    { "title": "언어", "icon": "🗣️", "content": "독일어(오스트리아), 이탈리아어, 헝가리어, 체코어. 영어 관광지에서 통용. 기본 인사 필수." },
    { "title": "보험 & 안전", "icon": "🛡️", "content": "해외여행보험 필수. 유럽 의료비 비쌈. 도난 주의. 산악구간 사고 시 접수 리스크 — 풀커버리지 권장." },
    { "title": "성수기 예약", "icon": "⏰", "content": "7-8월 유럽 피크시즌. 할슈타트·돌로미티는 2~3달 전 풀매진. 지금부터 예약 가능한 곳부터 순차 확보 권장." },
    { "title": "베이징 환승", "icon": "✈️", "content": "환승 11h05m — 시내 나들이 가능(무비자 경유). 수하물은 체크쓰루로 BUD까지 직행. 여권 지참 + 임시입국허가 카드 작성." },
    { "title": "산악 주행", "icon": "⛰️", "content": "잘츠부르크→코르티나(~4h), 오르티세이→그라츠(~4h) — 알프스 산길. 비나 늦은 출발 시 5h+ 가능. 조기 출발 권장." }
  ],
  "budget": {
    "currency": "KRW",
    "categories": [
      { "id": "flights", "name": "항공권 (5인 왕복)", "icon": "✈️", "amount": 5000000, "confirmed": false, "note": "중국국제항공 CA138/719/720/137 · 추정값, 실제 발권가 입력" },
      { "id": "rental", "name": "렌트카 (21일)", "icon": "🚐", "amount": 0, "confirmed": false, "note": "토요타 프로에이스 · BUD in/out · 미정" },
      { "id": "accommodation", "name": "숙박 (19박)", "icon": "🏠", "amount": 3800000, "confirmed": false, "note": "에어비앤비 가족형 · ~₩200,000/박 추정" },
      { "id": "fuel", "name": "유류", "icon": "⛽", "amount": 420000, "confirmed": false, "note": "~2,090km · 유럽 유가 ₩200/km 추정" },
      { "id": "tolls", "name": "톨 & 비네트", "icon": "🛣️", "amount": 200000, "confirmed": false, "note": "AT 비네트 + CZ/HU 톨 + IT 자동차로" },
      { "id": "food", "name": "식비 (21일)", "icon": "🍽️", "amount": 3150000, "confirmed": false, "note": "5인 × 21일 × ~₩30,000/일 추정" },
      { "id": "activities", "name": "관광 & 액티비티", "icon": "🎟️", "amount": 1000000, "confirmed": false, "note": "케이블카·박물관·유람선·입장료" },
      { "id": "misc", "name": "기타 (유심·보험 등)", "icon": "📋", "amount": 500000, "confirmed": false, "note": "유심·해외여행보험·간식·기념품" }
    ]
  },
  "warnings": [
    { "type": "warn", "text": "1일차 피로 — 베이징 환승 + 밤샘 비행 직후 07:00 착륙 → 바로 2.5h 운전. 비엔나 도착 후 가벼운 일정만 권장." },
    { "type": "warn", "text": "최장 산악주행 2구간 — ① 잘츠부르크→코르티나(~4h) ② 오르티세이→그라츠(~4h). 돌로미티 6박 배정으로 주행 부담 완화." },
    { "type": "note", "text": "숙박 합계 19박 — 비엔나 2 · 프라하 2 · 크룸로프 1 · 할슈타트 2 · 잘츠부르크 2 · 돌로미티 6(코르티나 3 + 오르티세이 3) · 그라츠 1 · 부다페스트 3. 마지막 밤(8/5)은 출발 공항과 가까운 부다페스트." }
  ]
};

/* ---- Data Loading ---- */
const STORAGE_KEY = 'euTrip2027_v1';
let TRIP_DATA = null; // global ref for edit mode

async function loadData() {
  // 1. Check localStorage for saved edits
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.days && parsed.budget) return parsed;
    } catch (e) { /* ignore corrupt */ }
  }
  // 2. Fetch from server (GitHub Pages) or fallback
  try {
    const res = await fetch('data/trips.json');
    if (!res.ok) throw new Error('fetch failed: ' + res.status);
    return await res.json();
  } catch (e) {
    console.warn('[trips] fetch 실패, 내장 데이터 사용. HTTP 서버 권장 (예: python -m http.server)');
    return FALLBACK_DATA;
  }
}

function saveData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error('[trips] 저장 실패:', e);
    return false;
  }
}

function resetData() {
  localStorage.removeItem(STORAGE_KEY);
}

/* ---- Toast notification ---- */
function showToast(msg, type) {
  const toast = document.createElement('div');
  toast.className = 'toast toast-' + (type || 'info');
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(function () { toast.classList.add('show'); }, 10);
  setTimeout(function () {
    toast.classList.remove('show');
    setTimeout(function () { toast.remove(); }, 300);
  }, 2500);
}

/* ---- Helpers ---- */
const COUNTRY_FLAG = { HU: '🇭🇺', AT: '🇦🇹', CZ: '🇨🇿', IT: '🇮🇹' };
const COUNTRY_NAME = { HU: '헝가리', AT: '오스트리아', CZ: '체코', IT: '이탈리아' };

function badge(country) {
  return '<span class="country-badge badge-' + country.toLowerCase() + '" title="' + COUNTRY_NAME[country] + '">' + country + '</span>';
}

/* ---- Hero ---- */
function buildHero(d) {
  const m = d.meta;
  document.getElementById('heroTitle').textContent = m.title;
  document.getElementById('heroSubtitle').textContent = m.subtitle;

  const stats = [
    { num: m.totalDays, label: '총 일수' },
    { num: m.totalNights, label: '숙박(박)' },
    { num: m.countries, label: '개국' },
    { num: m.totalDistanceKm.toLocaleString(), label: 'km (참고값)' },
    { num: '4', label: 'HU·AT·CZ·IT' },
    { num: m.tripDates.split(' - ')[0].slice(5), label: '출발' }
  ];
  document.getElementById('heroStats').innerHTML = stats.map(s =>
    '<div class="stat"><span class="num">' + s.num + '</span><span class="label">' + s.label + '</span></div>'
  ).join('');

  const route = d.route.map((c, i) => {
    if (i === 0 || i === d.route.length - 1) return 'BUD';
    return c;
  });
  const unique = [...new Set(route)];
  document.getElementById('routeSummary').innerHTML =
    '✈ ' + unique.join(' → ') + ' ✈  ·  시계방향 원형루프 · 뮌헨 제외';
}

/* ---- Flights ---- */
function buildFlights(d) {
  const f = d.flights;
  let html = '';

  html += '<table><thead><tr><th>방향</th><th>날짜</th><th>구간</th><th>항공편</th><th>기종</th><th>출발 → 도착</th><th>비행시간</th><th>좌석</th></tr></thead><tbody>';

  // Outbound
  html += '<tr><td rowspan="4"><b>가는편</b><br>' + f.outbound[0].date.split(' ')[0] + '</td>';
  f.outbound.forEach((leg, idx) => {
    if (leg.leg === 'transit') {
      html += '<tr><td class="dim" colspan="4">환승 ' + leg.location + ' <b>' + leg.duration + '</b> · ' + leg.note + '</td></tr>';
    } else {
      if (idx > 0) html += '<tr>';
      html += '<td>' + leg.date + '</td><td>' + leg.route + '</td><td>' + leg.flight + '</td><td>' + leg.aircraft + '</td><td>' + leg.depart + ' → ' + leg.arrive + '</td><td>' + leg.duration + '</td>';
      if (idx === 0) html += '<td rowspan="4">' + f.cabin + '</td>';
      html += '</tr>';
    }
  });
  html += '<tr><td class="dim" colspan="4">총 소요 <b>' + f.outboundTotal + '</b> · 도착 ' + f.outbound[2].arrivalTerminal + '</td></tr>';

  // Return
  html += '<tr><td rowspan="4"><b>오는편</b><br>' + f.return[0].date.split(' ')[0] + '</td>';
  f.return.forEach((leg, idx) => {
    if (leg.leg === 'transit') {
      html += '<tr><td class="dim" colspan="4">환승 ' + leg.location + ' <b>' + leg.duration + '</b> · ' + leg.note + '</td></tr>';
    } else {
      if (idx > 0) html += '<tr>';
      html += '<td>' + leg.date + '</td><td>' + leg.route + '</td><td>' + leg.flight + '</td><td>' + leg.aircraft + '</td><td>' + leg.depart + ' → ' + leg.arrive + '</td><td>' + leg.duration + '</td>';
      if (idx === 0) html += '<td rowspan="4">' + f.cabin + '</td>';
      html += '</tr>';
    }
  });
  html += '<tr><td class="dim" colspan="4">총 소요 <b>' + f.returnTotal + '</b> · 도착 ' + f.return[2].arrivalTerminal + '</td></tr>';

  html += '</tbody></table>';
  html += '<div class="callout callout-warn"><b>🕐 ' + f.transitWarning + '</b></div>';

  document.getElementById('flightContent').innerHTML = html;
}

/* ---- Phases ---- */
function buildPhases(d) {
  const html = d.phases.map(p => {
    const cls = 'country-' + p.country.toLowerCase();
    const tags = p.highlights.map(h => '<span class="tag">' + h + '</span>').join('');
    return '<div class="phase-card ' + cls + '">' +
      '<span class="phase-num">' + p.num + '</span>' +
      '<h3>' + badge(p.country) + p.title + '</h3>' +
      '<div class="meta">' + p.dates + ' · ' + p.nights + '박 · ' + p.distance + '</div>' +
      '<div class="meta">' + p.route + '</div>' +
      '<div class="highlights">' + tags + '</div>' +
      '</div>';
  }).join('');
  document.getElementById('phaseGrid').innerHTML = html;
}

/* ---- Timeline ---- */
function buildTimeline(d) {
  const html = d.days.map(day => {
    const cls = 'country-' + day.country.toLowerCase();
    return '<div class="timeline-item ' + cls + '">' +
      '<div class="timeline-header">' +
      '<span class="timeline-day">' + day.date + ' (' + day.weekday + ')</span>' +
      '<span class="timeline-route">' + badge(day.country) + day.from + ' → ' + day.to + '</span>' +
      '</div>' +
      '<div class="timeline-note">' + day.note + '</div>' +
      '<div class="timeline-nights">' + day.nights + (day.km !== '0' ? ' · ~' + day.km + 'km' : '') + '</div>' +
      '</div>';
  }).join('');
  document.getElementById('timelineList').innerHTML = html;
}

/* ---- Schedule Table ---- */
let EDIT_MODE = false;

function buildScheduleTable(d) {
  let html = '<thead><tr><th>Day</th><th>날짜</th><th>요일</th><th>출발</th><th>도착</th><th>거리</th><th>숙박</th><th>국가</th><th>비고</th></tr></thead><tbody>';
  let lastPhase = 0;
  let totalKm = 0;

  d.days.forEach(function (day, idx) {
    // Phase separator
    const phase = d.phases[day.day <= 2 ? 0 : day.day <= 4 ? 1 : day.day === 5 ? 2 : day.day <= 7 ? 3 : day.day <= 9 ? 4 : day.day <= 12 ? 5 : day.day <= 15 ? 6 : day.day === 16 ? 7 : 8];
    if (phase && phase.num !== lastPhase) {
      html += '<tr class="phase-sep"><td colspan="9"><b>PHASE ' + phase.num + ' · ' + phase.title + '</b></td></tr>';
      lastPhase = phase.num;
    }
    const km = parseInt(day.km) || 0;
    totalKm += km;

    if (EDIT_MODE) {
      html += '<tr class="edit-row">';
      html += '<td>' + day.day + '</td>';
      html += '<td><input class="edit-input edit-date" data-idx="' + idx + '" value="' + day.date + '" style="width:60px;"></td>';
      html += '<td><input class="edit-input edit-weekday" data-idx="' + idx + '" value="' + day.weekday + '" style="width:40px;"></td>';
      html += '<td><input class="edit-input edit-from" data-idx="' + idx + '" value="' + day.from + '" style="width:90px;"></td>';
      html += '<td><input class="edit-input edit-to" data-idx="' + idx + '" value="' + day.to + '" style="width:90px;"></td>';
      html += '<td><input class="edit-input edit-km" data-idx="' + idx + '" type="number" value="' + day.km + '" style="width:60px;"></td>';
      html += '<td><input class="edit-input edit-nights" data-idx="' + idx + '" value="' + day.nights + '" style="width:100px;"></td>';
      html += '<td><select class="edit-input edit-country" data-idx="' + idx + '" style="width:60px;">';
      ['HU', 'AT', 'CZ', 'IT'].forEach(function (c) {
        html += '<option value="' + c + '"' + (day.country === c ? ' selected' : '') + '>' + c + '</option>';
      });
      html += '</select></td>';
      html += '<td><input class="edit-input edit-note" data-idx="' + idx + '" value="' + day.note.replace(/"/g, '&quot;') + '" style="width:180px;"></td>';
      html += '</tr>';
    } else {
      html += '<tr><td>' + day.day + '</td><td>' + day.date + '</td><td>' + day.weekday + '</td><td>' + day.from + '</td><td>' + day.to + '</td><td>' + (km > 0 ? km + 'km' : '—') + '</td><td>' + day.nights + '</td><td>' + badge(day.country) + '</td><td style="text-align:left;font-size:13px;">' + day.note + '</td></tr>';
    }
  });

  html += '<tr class="sum-row"><td colspan="5">합계</td><td>~' + totalKm + 'km</td><td>19박</td><td>4개국</td><td>참고값</td></tr>';
  html += '</tbody>';
  document.getElementById('scheduleTable').innerHTML = html;
}

/* ---- Rental ---- */
function buildRental(d) {
  const r = d.rental;
  let html = '<table><tbody>';
  html += '<tr><th>차종</th><td>' + r.carType + '</td></tr>';
  html += '<tr><th>인수/반납</th><td>' + r.pickup + ' · ' + r.dropoff + '</td></tr>';
  html += '<tr><th>기간</th><td>' + r.period + '</td></tr>';
  html += '<tr><th>무료 취소</th><td>' + r.freeCancel + '</td></tr>';
  html += '<tr><th>결제</th><td>' + r.payment + ' · ' + r.confirmation + '</td></tr>';
  html += '<tr><th>총 금액</th><td><b>' + r.totalPrice + '</b></td></tr>';
  html += '</tbody></table>';

  html += '<h3 style="margin:18px 0 10px;color:var(--primary);">요금 명세</h3>';
  html += '<table><thead><tr><th>항목</th><th>금액</th><th>비고</th></tr></thead><tbody>';
  r.priceBreakdown.forEach(item => {
    html += '<tr><td>' + item.item + '</td><td><b>' + item.amount + '</b></td><td style="text-align:left;font-size:13px;">' + item.note + '</td></tr>';
  });
  html += '</tbody></table>';

  html += '<div class="callout callout-amber"><b>⚠️ 보험</b> — ' + r.insuranceWarning + '</div>';
  html += '<div class="callout callout-warn"><b>⚠️ 적재공간</b> — ' + r.capacityWarning + '</div>';

  document.getElementById('rentalContent').innerHTML = html;
}

/* ---- Accommodations ---- */
function buildAccommodations(d) {
  let html = '<thead><tr><th>도시</th><th>박</th><th>기간</th><th>추천 지역</th><th>가족형 포인트</th><th>국가</th></tr></thead><tbody>';
  d.accommodations.forEach(a => {
    html += '<tr><td><b>' + a.city + '</b></td><td>' + a.nights + '</td><td>' + a.period + '</td><td style="text-align:left;">' + a.area + '</td><td style="text-align:left;">' + a.points + '</td><td>' + badge(a.country) + '</td></tr>';
  });
  html += '</tbody>';
  document.getElementById('accommodationTable').innerHTML = html;
}

/* ---- Warnings ---- */
function buildWarnings(d) {
  const html = d.warnings.map(w => {
    const cls = w.type === 'warn' ? 'callout-warn' : 'callout-note';
    const icon = w.type === 'warn' ? '⚠️' : '💡';
    return '<div class="callout ' + cls + '">' + icon + ' ' + w.text + '</div>';
  }).join('');
  document.getElementById('warnings').innerHTML = html;
}

/* ---- Tips ---- */
function buildTips(d) {
  const html = d.tips.map(t => {
    return '<div class="tip-card"><span class="icon">' + t.icon + '</span><h4>' + t.title + '</h4><p>' + t.content + '</p></div>';
  }).join('');
  document.getElementById('tipsGrid').innerHTML = html;
}

/* ---- Map ---- */
function initMap(d) {
  const c = d.coords;
  const routePoints = d.route.map(k => c[k]).filter(Boolean);

  const map = L.map('map', { scrollWheelZoom: false }).setView([47.5, 14.5], 6);
  window._mapInstance = map;
  L.control.zoom({ position: 'topright' }).addTo(map);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Polyline route
  L.polyline(routePoints, { color: '#1a5f7a', weight: 3, opacity: 0.7, dashArray: '8,6' }).addTo(map);

  // Colored segments per phase
  const phaseColors = { AT: '#3498db', CZ: '#9b59b6', IT: '#2ecc71', HU: '#e74c3c' };
  for (let i = 0; i < routePoints.length - 1; i++) {
    // Determine country for this segment from days
    const dayIdx = i < d.days.length ? i : d.days.length - 1;
    const country = d.days[dayIdx] ? d.days[dayIdx].country : 'AT';
    L.polyline([routePoints[i], routePoints[i + 1]], { color: phaseColors[country], weight: 3, opacity: 0.9 }).addTo(map);
  }

  // Markers
  const cityNames = d.route;
  for (let i = 0; i < routePoints.length; i++) {
    const name = cityNames[i];
    const isEndpoint = (i === 0 || i === routePoints.length - 1);
    const color = isEndpoint ? '#e74c3c' : '#1a5f7a';
    const icon = L.divIcon({
      className: '',
      html: '<div style="width:28px;height:28px;border-radius:50%;background:' + color + ';color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.3)">' + (i + 1) + '</div>',
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });
    L.marker(routePoints[i], { icon: icon }).addTo(map).bindPopup(
      '<b style="font-size:14px;color:#1a5f7a">' + name + '</b>'
    );
  }

  map.fitBounds(L.latLngBounds(routePoints).pad(0.1));

  // Day sidebar
  const sidebarHtml = d.days.map(day => {
    return '<div class="day-card" data-day="' + day.day + '">' +
      '<div class="day-num">Day ' + day.day + ' · ' + day.date + ' (' + day.weekday + ')</div>' +
      '<div class="day-route">' + day.from + ' → ' + day.to + '</div>' +
      '<div class="day-km">' + (day.km !== '0' ? '~' + day.km + 'km' : '관광') + '</div>' +
      '</div>';
  }).join('');
  document.getElementById('daySidebar').innerHTML = sidebarHtml;

  // Day card click → zoom
  const dayCards = document.querySelectorAll('.day-card');
  dayCards.forEach(card => {
    card.addEventListener('click', function () {
      const dayNum = parseInt(this.getAttribute('data-day'));
      const dayData = d.days[dayNum - 1];
      if (dayData) {
        const toKey = dayData.to;
        const coord = c[toKey];
        if (coord) {
          map.setView(coord, 10, { animate: true });
          dayCards.forEach(x => x.classList.remove('active'));
          this.classList.add('active');
        }
      }
    });
  });

  // Enable scroll zoom on click
  map.on('click', function () {
    map.scrollWheelZoom.enable();
  });
  map.on('mouseout', function () {
    map.scrollWheelZoom.disable();
  });
}

/* ---- Budget ---- */
function buildBudget(d) {
  const b = d.budget;
  let total = 0;
  let confirmedTotal = 0;

  let html = '<p style="margin-bottom:16px;color:var(--text-secondary);font-size:14px;">';
  html += '항목별 금액을 직접 수정하면 총합이 실시간으로 갱신됩니다. ';
  html += '<b style="color:var(--primary);">확정</b>된 항목은 녹색, <b style="color:var(--amber);">추정</b> 항목은 주황색으로 표시.';
  html += '</p>';

  html += '<table class="budget-table"><thead><tr>';
  html += '<th>항목</th><th>금액 (원)</th><th>상태</th><th>비고</th>';
  html += '</tr></thead><tbody>';

  b.categories.forEach(function (cat) {
    total += cat.amount;
    if (cat.confirmed) confirmedTotal += cat.amount;

    const statusBadge = cat.confirmed
      ? '<span class="budget-status confirmed">확정</span>'
      : '<span class="budget-status estimated">추정</span>';

    html += '<tr class="budget-row' + (cat.confirmed ? ' is-confirmed' : '') + '">';
    html += '<td class="budget-name"><span class="budget-icon">' + cat.icon + '</span> ' + cat.name + '</td>';
    html += '<td class="budget-amount"><input type="number" class="budget-input" data-id="' + cat.id + '" value="' + cat.amount + '" min="0" step="10000" style="text-align:right;"></td>';
    html += '<td class="budget-status-cell">' + statusBadge + '</td>';
    html += '<td class="budget-note">' + cat.note + '</td>';
    html += '</tr>';
  });

  html += '</tbody><tfoot>';
  html += '<tr class="budget-subtotal"><td colspan="1">확정 합계</td><td id="budgetConfirmed" style="text-align:right;font-weight:700;color:var(--it);">' + confirmedTotal.toLocaleString() + '</td><td colspan="2"></td></tr>';
  html += '<tr class="budget-total"><td colspan="1">총 예산</td><td id="budgetTotal" style="text-align:right;font-weight:800;font-size:18px;color:var(--primary);">' + total.toLocaleString() + '</td><td colspan="2"></td></tr>';
  html += '</tfoot></table>';

  html += '<div class="budget-summary" id="budgetSummary"></div>';

  document.getElementById('budgetContent').innerHTML = html;

  // Live total calculation
  function updateTotal() {
    let sum = 0;
    let conf = 0;
    b.categories.forEach(function (cat) {
      const input = document.querySelector('.budget-input[data-id="' + cat.id + '"]');
      if (input) {
        const val = parseInt(input.value) || 0;
        sum += val;
        if (cat.confirmed) conf += val;
      }
    });
    document.getElementById('budgetTotal').textContent = sum.toLocaleString();
    document.getElementById('budgetConfirmed').textContent = conf.toLocaleString();

    const perPerson = Math.round(sum / 5);
    const perDay = Math.round(sum / 21);
    document.getElementById('budgetSummary').innerHTML =
      '<div class="budget-summary-grid">' +
      '<div class="budget-summary-item"><span class="bs-num">₩' + sum.toLocaleString() + '</span><span class="bs-label">총 예산</span></div>' +
      '<div class="budget-summary-item"><span class="bs-num">₩' + perPerson.toLocaleString() + '</span><span class="bs-label">인당 (5인)</span></div>' +
      '<div class="budget-summary-item"><span class="bs-num">₩' + perDay.toLocaleString() + '</span><span class="bs-label">일평균 (21일)</span></div>' +
      '<div class="budget-summary-item"><span class="bs-num">₩' + conf.toLocaleString() + '</span><span class="bs-label">확정 합계</span></div>' +
      '</div>';
  }

  document.querySelectorAll('.budget-input').forEach(function (input) {
    input.addEventListener('input', updateTotal);
  });

  updateTotal();
}

/* ---- Edit Mode ---- */
function toggleEditMode() {
  EDIT_MODE = !EDIT_MODE;
  const btn = document.getElementById('editToggleBtn');

  if (EDIT_MODE) {
    // Enter edit mode: collect current inputs first (budget may have been changed)
    collectBudgetChanges();
    btn.textContent = '💾 변경사항 저장';
    btn.classList.add('editing');
    rebuildAll();
    showToast('편집 모드 ON — 일정을 직접 수정하세요', 'info');
  } else {
    // Exit edit mode: save
    collectDayChanges();
    collectBudgetChanges();
    if (saveData(TRIP_DATA)) {
      btn.textContent = '✏ 편집 모드';
      btn.classList.remove('editing');
      rebuildAll();
      showToast('저장 완료! 새로고침해도 유지됩니다', 'success');
    } else {
      showToast('저장 실패 — 브라우저 저장공간 확인 필요', 'error');
    }
  }
}

function collectDayChanges() {
  if (!TRIP_DATA || !TRIP_DATA.days) return;
  document.querySelectorAll('.edit-date').forEach(function (inp) {
    const idx = parseInt(inp.dataset.idx);
    if (TRIP_DATA.days[idx]) TRIP_DATA.days[idx].date = inp.value;
  });
  document.querySelectorAll('.edit-weekday').forEach(function (inp) {
    const idx = parseInt(inp.dataset.idx);
    if (TRIP_DATA.days[idx]) TRIP_DATA.days[idx].weekday = inp.value;
  });
  document.querySelectorAll('.edit-from').forEach(function (inp) {
    const idx = parseInt(inp.dataset.idx);
    if (TRIP_DATA.days[idx]) TRIP_DATA.days[idx].from = inp.value;
  });
  document.querySelectorAll('.edit-to').forEach(function (inp) {
    const idx = parseInt(inp.dataset.idx);
    if (TRIP_DATA.days[idx]) TRIP_DATA.days[idx].to = inp.value;
  });
  document.querySelectorAll('.edit-km').forEach(function (inp) {
    const idx = parseInt(inp.dataset.idx);
    if (TRIP_DATA.days[idx]) TRIP_DATA.days[idx].km = inp.value;
  });
  document.querySelectorAll('.edit-nights').forEach(function (inp) {
    const idx = parseInt(inp.dataset.idx);
    if (TRIP_DATA.days[idx]) TRIP_DATA.days[idx].nights = inp.value;
  });
  document.querySelectorAll('.edit-country').forEach(function (sel) {
    const idx = parseInt(sel.dataset.idx);
    if (TRIP_DATA.days[idx]) TRIP_DATA.days[idx].country = sel.value;
  });
  document.querySelectorAll('.edit-note').forEach(function (inp) {
    const idx = parseInt(inp.dataset.idx);
    if (TRIP_DATA.days[idx]) TRIP_DATA.days[idx].note = inp.value;
  });
}

function collectBudgetChanges() {
  if (!TRIP_DATA || !TRIP_DATA.budget) return;
  TRIP_DATA.budget.categories.forEach(function (cat) {
    const input = document.querySelector('.budget-input[data-id="' + cat.id + '"]');
    if (input) cat.amount = parseInt(input.value) || 0;
  });
}

function resetAll() {
  if (!confirm('모든 수정사항을 초기화하고 원본 데이터로 되돌릴까요?')) return;
  resetData();
  TRIP_DATA = null;
  EDIT_MODE = false;
  const btn = document.getElementById('editToggleBtn');
  if (btn) { btn.textContent = '✏ 편집 모드'; btn.classList.remove('editing'); }
  location.reload();
}

/* ---- Rebuild (after edit) ---- */
function rebuildAll() {
  if (!TRIP_DATA) return;
  buildTimeline(TRIP_DATA);
  buildScheduleTable(TRIP_DATA);
  buildBudget(TRIP_DATA);
  buildWarnings(TRIP_DATA);
  // Re-init map with updated data
  if (window._mapInstance) {
    window._mapInstance.remove();
    window._mapInstance = null;
  }
  initMap(TRIP_DATA);
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', async function () {
  TRIP_DATA = await loadData();
  buildHero(TRIP_DATA);
  buildFlights(TRIP_DATA);
  buildPhases(TRIP_DATA);
  buildTimeline(TRIP_DATA);
  buildScheduleTable(TRIP_DATA);
  buildRental(TRIP_DATA);
  buildAccommodations(TRIP_DATA);
  buildBudget(TRIP_DATA);
  buildWarnings(TRIP_DATA);
  buildTips(TRIP_DATA);
  initMap(TRIP_DATA);

  // Edit button listeners
  const editBtn = document.getElementById('editToggleBtn');
  if (editBtn) editBtn.addEventListener('click', toggleEditMode);
  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) resetBtn.addEventListener('click', resetAll);
});
