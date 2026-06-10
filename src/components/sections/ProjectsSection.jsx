import { useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const projects = [
  {
    id: 1,
    title: 'PROJECT 01',
    category: 'Brand Identity',
    desc: '브랜드 아이덴티티 디자인. 로고, 컬러 시스템, 타이포그래피를 통해 일관된 브랜드 경험을 구축.',
    height: 130,
  },
  {
    id: 2,
    title: 'PROJECT 02',
    category: 'Web Design',
    desc: '미니멀한 레이아웃과 여백 중심의 브랜드 웹사이트. 데스크탑·모바일 반응형 설계.',
    height: 160,
  },
  {
    id: 3,
    title: 'PROJECT 03',
    category: 'UI / UX',
    desc: 'Figma 기반 모바일 앱 UI 설계. 사용자 여정 분석부터 와이어프레임, 프로토타입까지.',
    height: 145,
  },
  {
    id: 4,
    title: 'PROJECT 04',
    category: 'Editorial',
    desc: '에디토리얼 스타일 랜딩 페이지. 잡지형 그리드와 대형 타이포그래피로 시선을 유도.',
    height: 130,
  },
  {
    id: 5,
    title: 'PROJECT 05',
    category: 'Interaction',
    desc: '인터랙티브 웹 경험 디자인. 섬세한 모션과 전환 효과로 몰입감 있는 UX 구현.',
    height: 150,
  },
]

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState(null)
  const active = projects.find((p) => p.id === hoveredId)

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'var(--color-bg-primary)',
        height: { xs: 'auto', md: '100vh' },
        minHeight: { xs: '80vh', md: 'unset' },
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* ── 상단 프리뷰 영역 ── */}
      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          display: 'flex',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* 좌측: 이미지 */}
        <Box
          sx={{
            flex: '0 0 55%',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg-secondary)',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'var(--color-bg-tertiary)',
              backgroundImage:
                'repeating-linear-gradient(45deg, var(--color-border-light) 0px, var(--color-border-light) 1px, transparent 1px, transparent 14px)',
              opacity: hoveredId ? 1 : 0,
              transform: hoveredId ? 'scale(1)' : 'scale(1.04)',
              transition: 'opacity 0.5s ease, transform 0.55s ease',
            }}
          />
          {/* 기본 상태 — 좌측 빈 영역 텍스트 */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'flex-end',
              p: { xs: 4, md: 6 },
              opacity: hoveredId ? 0 : 1,
              transition: 'opacity 0.35s ease',
              pointerEvents: 'none',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '0.7rem', md: '0.72rem' },
                letterSpacing: '0.35em',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
              }}
            >
              — hover to explore
            </Typography>
          </Box>
        </Box>

        {/* 우측: 텍스트 정보 */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            p: { xs: 4, md: 8 },
            pb: { xs: 5, md: 7 },
            position: 'relative',
          }}
        >
          {/* VIEW ALL / ARCHIVE — 우측 하단 고정 */}
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: 20, md: 28 },
              right: { xs: 16, md: 32 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 0.8,
            }}
          >
            <Typography
              component={Link}
              to="/projects"
              variant="caption"
              sx={{
                color: 'var(--color-text-secondary)',
                letterSpacing: '0.18em',
                fontSize: '0.68rem',
                fontWeight: 500,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                '&:hover': { color: 'var(--color-accent)' },
                transition: 'color 0.2s',
              }}
            >
              VIEW ALL ↗
            </Typography>
            <Typography
              component={Link}
              to="/projects"
              variant="caption"
              sx={{
                color: 'var(--color-text-muted)',
                letterSpacing: '0.18em',
                fontSize: '0.68rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                '&:hover': { color: 'var(--color-accent)' },
                transition: 'color 0.2s',
              }}
            >
              ARCHIVE ↗
            </Typography>
          </Box>
          {/* 기본 상태 — 우측 WORKS 텍스트 */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: hoveredId ? 0 : 1,
              transition: 'opacity 0.35s ease',
              pointerEvents: 'none',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '3.5rem', md: '6rem' },
                fontWeight: 900,
                letterSpacing: '-3px',
                color: 'var(--color-border-light)',
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              WORKS
            </Typography>
          </Box>

          {/* 호버 상태 — 프로젝트 정보 */}
          <Box
            sx={{
              opacity: hoveredId ? 1 : 0,
              transform: hoveredId ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.45s ease 0.06s, transform 0.45s ease 0.06s',
            }}
          >
            {/* 장식용 큰 번호 */}
            <Typography
              sx={{
                fontSize: { xs: '5rem', md: '9rem' },
                fontWeight: 900,
                lineHeight: 0.85,
                color: 'var(--color-border-light)',
                letterSpacing: '-4px',
                mb: { xs: 2, md: 3 },
                userSelect: 'none',
              }}
            >
              {active ? String(active.id).padStart(2, '0') : ''}
            </Typography>

            <Typography
              sx={{
                fontSize: '0.62rem',
                letterSpacing: '0.4em',
                color: 'var(--color-accent)',
                textTransform: 'uppercase',
                mb: 1.5,
              }}
            >
              {active?.category}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '1.6rem', md: '2.6rem' },
                fontWeight: 300,
                letterSpacing: '0.04em',
                color: 'var(--color-text-primary)',
                lineHeight: 1.15,
                mb: { xs: 2, md: 3 },
              }}
            >
              {active?.title}
            </Typography>

            <Typography
              sx={{
                color: 'var(--color-text-muted)',
                fontSize: { xs: '0.85rem', md: '0.92rem' },
                lineHeight: 1.9,
                maxWidth: 340,
                wordBreak: 'keep-all',
              }}
            >
              {active?.desc}
            </Typography>

            <Typography
              component={Link}
              to="/projects"
              sx={{
                display: 'inline-block',
                mt: { xs: 3, md: 4 },
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                borderBottom: '1px solid var(--color-text-primary)',
                pb: 0.3,
                '&:hover': { color: 'var(--color-accent)', borderColor: 'var(--color-accent)' },
                transition: 'color 0.2s, border-color 0.2s',
              }}
            >
              View Project ↗
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ── 하단 썸네일 갤러리 ── */}
      <Box sx={{ borderTop: '1px solid var(--color-border-light)' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: { xs: 2, md: 3 },
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x',
            px: { xs: 3, md: 6 },
            pt: 3,
            pb: 4,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {projects.map((p) => (
            <Box
              key={p.id}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              sx={{
                flexShrink: 0,
                width: { xs: 160, md: 180 },
                cursor: 'pointer',
                opacity: hoveredId !== null && hoveredId !== p.id ? 0.3 : 1,
                transition: 'opacity 0.35s ease',
              }}
            >
              {/* 썸네일 이미지 */}
              <Box
                sx={{
                  height: p.height,
                  backgroundColor: 'var(--color-bg-tertiary)',
                  backgroundImage:
                    'repeating-linear-gradient(45deg, var(--color-border-light) 0px, var(--color-border-light) 1px, transparent 1px, transparent 12px)',
                  position: 'relative',
                  overflow: 'hidden',
                  outline: hoveredId === p.id ? '1.5px solid var(--color-accent)' : '1.5px solid transparent',
                  transition: 'outline-color 0.3s ease',
                }}
              />
              {/* 썸네일 타이틀 */}
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  mt: 1,
                  fontSize: '0.65rem',
                  letterSpacing: '0.18em',
                  color: hoveredId === p.id ? 'var(--color-accent)' : 'var(--color-text-muted)',
                  transition: 'color 0.3s ease',
                  textTransform: 'uppercase',
                }}
              >
                {p.title}
              </Typography>
            </Box>
          ))}

        </Box>
      </Box>
    </Box>
  )
}
