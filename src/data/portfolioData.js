export const aboutData = {
  basicInfo: {
    name: '안수은',
    education: '계명대학교',
    major: '국제통상학',
    role: '신입 웹디자이너',
  },
  story: [
    '국제통상학을 전공한 후 다양한 의류 및 서비스 업종에서 근무하며 고객과 가장 가까운 곳에서 경험을 쌓았습니다.',
    '고객이 브랜드를 경험하는 과정에 관심을 가지게 되었고, 자연스럽게 사용자 경험과 웹디자인에 흥미를 갖게 되었습니다.',
    '비전공자로 시작했지만 꾸준한 학습과 프로젝트 경험을 통해 UI/UX와 웹디자인 역량을 키워가고 있으며, 사용자와 브랜드를 연결하는 디자이너로 성장하고 있습니다.',
  ],
  philosophy: [
    '좋은 디자인은 사용자를 이해하는 것에서 시작된다고 생각합니다.',
    '다양한 레퍼런스를 분석하고 벤치마킹하며 배우는 과정을 중요하게 생각하며, 이를 나만의 방식으로 재해석하여 더 나은 사용자 경험을 만드는 것을 목표로 합니다.',
    '끊임없이 배우고 도전하며 성장하는 자세를 가장 중요한 가치로 생각합니다.',
  ],
  interest:
    '패션, 뷰티, 라이프스타일 브랜드의 디자인과 트렌드에 관심이 많습니다. 브랜드가 사용자와 소통하는 방식, 감성을 전달하는 비주얼 디자인, 그리고 사용자 경험을 고려한 UI/UX 사례를 꾸준히 탐색하고 연구하고 있습니다.',
}

export const skills = [
  {
    id: 1, name: 'Figma',        level: 70, category: 'Design',    isMain: true,
    abbr: 'Fg', bg: '#1E1E1E', color: '#A259FF',
    desc: ['와이어프레임 제작', 'UI 디자인 작업', '프로토타이핑'],
  },
  {
    id: 2, name: 'Photoshop',    level: 60, category: 'Design',    isMain: true,
    abbr: 'Ps', bg: '#001E36', color: '#31A8FF',
    desc: ['이미지 편집 · 그래픽', '비주얼 리터칭'],
  },
  {
    id: 3, name: 'Illustrator',  level: 55, category: 'Design',    isMain: false,
    abbr: 'Ai', bg: '#2E0000', color: '#FF9A00',
    desc: ['벡터 그래픽', '아이콘 · 일러스트'],
  },
  {
    id: 4, name: 'HTML5',        level: 50, category: 'Frontend',  isMain: true,
    abbr: 'H5', bg: '#E34F26', color: '#FFFFFF',
    desc: ['시맨틱 마크업', '반응형 웹 구현'],
  },
  {
    id: 5, name: 'CSS3',         level: 50, category: 'Frontend',  isMain: true,
    abbr: 'CS', bg: '#1572B6', color: '#FFFFFF',
    desc: ['Flexbox · Grid 레이아웃', '애니메이션'],
  },
  {
    id: 6, name: 'JavaScript',   level: 40, category: 'Frontend',  isMain: false,
    abbr: 'JS', bg: '#F0DB4F', color: '#323330',
    desc: ['DOM 조작', '이벤트 처리', '기본 문법'],
  },
  {
    id: 7, name: 'React',        level: 35, category: 'Framework', isMain: false,
    abbr: 'Re', bg: '#20232A', color: '#61DAFB',
    desc: ['컴포넌트 기반 개발', '개인 프로젝트 경험'],
  },
  {
    id: 8, name: 'GitHub',       level: 40, category: 'Tools',     isMain: false,
    abbr: 'Gh', bg: '#24292E', color: '#FFFFFF',
    desc: ['버전 관리', 'GitHub Pages 배포'],
  },
  {
    id: 9, name: 'Supabase',     level: 30, category: 'Tools',     isMain: false,
    abbr: 'Sb', bg: '#1C1C1C', color: '#3ECF8E',
    desc: ['DB 설계', 'REST API 연동'],
  },
]

export const categoryMeta = {
  Design:    { label: 'Design',           color: '#C97A8A', bg: '#F9EEF1' },
  Frontend:  { label: 'Frontend',         color: '#5B8DD9', bg: '#EEF3FB' },
  Framework: { label: 'Framework',        color: '#7E7E7E', bg: '#F2F2F2' },
  Tools:     { label: 'Framework & Tools',color: '#7E7E7E', bg: '#F2F2F2' },
}

export const mainSkills = skills
  .filter(s => s.isMain)
  .sort((a, b) => b.level - a.level)
  .slice(0, 4)
