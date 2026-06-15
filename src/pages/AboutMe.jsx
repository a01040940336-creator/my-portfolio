import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const timeline = [
  { year: '2024 —', text: '웹디자인 학습 시작 · React, Figma 역량 개발' },
  { year: '2023 —', text: '의류·서비스 업종 근무 · 고객 응대 및 브랜드 경험' },
  { year: '2020 —', text: '국제통상학 전공 · 글로벌 비즈니스 커뮤니케이션' },
]

const interests = [
  { label: '패션 & 라이프스타일', desc: '트렌드를 관찰하고 브랜드 감도를 키웁니다.' },
  { label: '브랜드 경험', desc: '다양한 브랜드의 디자인 언어를 분석하고 기록합니다.' },
  { label: '학습 & 기록', desc: '새로운 것을 배우고 정리하는 습관을 갖고 있습니다.' },
]

export default function AboutMe() {
  return (
    <Box
      sx={{
        backgroundColor: 'var(--color-bg-secondary)',
        minHeight: 'calc(100vh - 64px)',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">

        {/* 헤더 */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography
            sx={{
              fontSize: '0.65rem',
              letterSpacing: '0.45em',
              color: 'var(--color-accent)',
              textTransform: 'uppercase',
              mb: 2,
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              fontWeight: 800,
              letterSpacing: '-1px',
              color: 'var(--color-text-primary)',
              lineHeight: 1.15,
              mb: 3,
              wordBreak: 'keep-all',
            }}
          >
            안수은입니다.<br />웹디자이너로 성장 중입니다.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.92rem', md: '1rem' },
              color: 'var(--color-text-muted)',
              lineHeight: 1.9,
              maxWidth: 540,
              wordBreak: 'keep-all',
            }}
          >
            사용자의 시선으로 생각하고, 디자인으로 이야기하는 UI/UX 웹 디자이너입니다.
            단순히 보기 좋은 화면이 아닌, 누구나 직관적으로 쓸 수 있는 경험을 만드는 것에 집중합니다.
          </Typography>
        </Box>

        {/* 디자인 시작 스토리 */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography
            sx={{
              fontSize: '0.6rem', letterSpacing: '0.4em',
              color: 'var(--color-text-muted)', textTransform: 'uppercase', mb: 3,
            }}
          >
            Story
          </Typography>
          <Box sx={{ borderLeft: '2px solid var(--color-primary)', pl: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography sx={{ fontSize: { xs: '0.92rem', md: '0.98rem' }, color: 'var(--color-text-secondary)', lineHeight: 2.1, wordBreak: 'keep-all' }}>
              국제통상학을 전공한 후 다양한 의류 및 서비스 업종에서 근무하며 고객과 가장 가까운 곳에서 경험을 쌓았습니다.
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.92rem', md: '0.98rem' }, color: 'var(--color-text-secondary)', lineHeight: 2.1, wordBreak: 'keep-all' }}>
              고객이 브랜드를 경험하는 과정에 관심을 가지게 되었고, 자연스럽게 디자인과 사용자 경험에 매력을 느끼며 웹디자인 분야에 도전하게 되었습니다.
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.92rem', md: '0.98rem' }, color: 'var(--color-text-muted)', lineHeight: 2, wordBreak: 'keep-all' }}>
              비전공자로 시작해 어려움도 있었지만 꾸준한 학습과 프로젝트 경험을 통해 디자인 역량을 키워가고 있습니다.
            </Typography>
          </Box>
        </Box>

        {/* 타임라인 */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography sx={{ fontSize: '0.6rem', letterSpacing: '0.4em', color: 'var(--color-text-muted)', textTransform: 'uppercase', mb: 3 }}>
            Timeline
          </Typography>
          {timeline.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                gap: { xs: 3, md: 5 },
                py: 3,
                borderTop: '1px solid var(--color-border-light)',
                ...(i === timeline.length - 1 && { borderBottom: '1px solid var(--color-border-light)' }),
              }}
            >
              <Typography sx={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, flexShrink: 0, minWidth: 60, pt: 0.2 }}>
                {item.year}
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, wordBreak: 'keep-all' }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* 관심사 */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography sx={{ fontSize: '0.6rem', letterSpacing: '0.4em', color: 'var(--color-text-muted)', textTransform: 'uppercase', mb: 3 }}>
            Interests
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 2 }}>
            {interests.map((item) => (
              <Box
                key={item.label}
                sx={{
                  p: 3,
                  backgroundColor: 'var(--color-bg-primary)',
                  border: '1px solid var(--color-border-light)',
                }}
              >
                <Typography sx={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-primary)', mb: 1 }}>
                  {item.label}
                </Typography>
                <Typography sx={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.7, wordBreak: 'keep-all' }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* 성장 목표 */}
        <Box
          sx={{
            p: { xs: 4, md: 6 },
            backgroundColor: 'var(--color-primary)',
          }}
        >
          <Typography sx={{ fontSize: '0.6rem', letterSpacing: '0.4em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', mb: 2 }}>
            Goal
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.15rem' },
              color: '#FFFFFF',
              lineHeight: 2,
              fontWeight: 300,
              wordBreak: 'keep-all',
            }}
          >
            사용자 경험을 고려한 UI/UX 역량을 지속적으로 발전시키고<br />
            브랜드의 가치를 효과적으로 전달하는 웹디자이너로 성장하는 것
          </Typography>
        </Box>

      </Container>
    </Box>
  )
}
