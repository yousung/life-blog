export const SITE_TITLE = '방송 건강노트';
export const SITE_DESCRIPTION = 'TV 건강 프로그램에서 다룬 혈압·혈당·관절·뇌 건강 정보를 50대 이후 눈높이에 맞춰 크게, 쉽게, 출처와 함께 정리합니다.';
export const SITE_URL = 'https://health.lovizu.com';
export const SITE_AUTHOR = 'lovizu';

// Google AdSense (account pub-1322828698634218, site lovizu.com covers health.lovizu.com)
export const ADSENSE_CLIENT = 'ca-pub-1322828698634218';
// Google Analytics 4 (러비쥬 account, property p565077105 "health.lovizu.com", web stream "health.lovizu.com 웹")
export const GA_MEASUREMENT_ID = 'G-WE3NBDXHQY';
// Naver Analytics site "러비쥬 건강노트" / Naver Search Advisor ownership meta for https://health.lovizu.com
export const NAVER_ANALYTICS_ID = '85cff4cc4642d8';
export const NAVER_SITE_VERIFICATION = '261740f9e777b403fee1f09120a1749abe7dea76';
// AdSense ad units dedicated to health (names start with "health " — per-site revenue in 광고 단위 report)
export const AD_SLOTS = {
  postTopDisplay: '9006207490', // "health 글 상단 디스플레이"
  postInArticle: '8319811782', // "health 글 본문 인아티클"
  postMultiplex: '4188995087' // "health 글 하단 멀티플렉스"
} as const;

export const NAV_ITEMS = [
  { href: '/', label: '홈' },
  { href: '/categories/', label: '증상·주제별' },
  { href: '/programs/', label: '방송별' },
  { href: '/search/', label: '검색' }
];

/** 카테고리 키(slug) → 표시 이름. 순서가 홈·카테고리 화면 순서다. */
export const CATEGORY_LABELS: Record<string, string> = {
  blood: '혈압·혈관·심장',
  sugar: '혈당·당뇨',
  joint: '관절·무릎·척추',
  brain: '뇌·치매·수면',
  gut: '위·장·간',
  senses: '눈·귀·치아',
  hormone: '갱년기·호르몬',
  food: '건강 음식·식단',
  exercise: '근력·운동·스트레칭',
  habit: '생활습관·마음'
};

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  blood: '고혈압, 콜레스테롤, 혈관 건강, 심장 질환 관련 방송 정보',
  sugar: '혈당 관리, 당뇨 전단계, 인슐린 저항성 관련 방송 정보',
  joint: '무릎·허리 통증, 척추, 골다공증 관련 방송 정보',
  brain: '치매 예방, 기억력, 불면증·수면 관련 방송 정보',
  gut: '위염, 장 건강, 변비, 지방간 관련 방송 정보',
  senses: '노안·백내장, 난청, 잇몸 건강 관련 방송 정보',
  hormone: '갱년기 증상, 호르몬 변화, 전립선 관련 방송 정보',
  food: '방송에서 소개한 건강 식재료, 차, 식단 정보',
  exercise: '근감소증 예방 근력 운동, 스트레칭, 걷기 관련 방송 정보',
  habit: '생활습관, 스트레스, 마음 건강 관련 방송 정보'
};

export const CATEGORY_KEYS = Object.keys(CATEGORY_LABELS) as [string, ...string[]];

export const HEALTH_DISCLAIMER =
  '이 글은 TV 방송 내용과 공개된 건강 정보를 쉽게 정리한 것으로, 의사의 진료나 처방을 대신하지 않습니다. 복용 중인 약이 있거나 지병이 있다면 식단·운동·건강식품을 바꾸기 전에 꼭 담당 의사나 약사와 상담하세요.';
