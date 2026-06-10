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
    height: 200,
    mt: 40,
  },
  {
    id: 2,
    title: 'PROJECT 02',
    category: 'Web Design',
    desc: '미니멀한 레이아웃과 여백 중심의 브랜드 웹사이트. 데스크탑·모바일 반응형 설계.',
    height: 300,
    mt: 0,
  },
  {
    id: 3,
    title: 'PROJECT 03',
    category: 'UI / UX',
    desc: 'Figma 기반 모바일 앱 UI 설계. 사용자 여정 분석부터 와이어프레임, 프로토타입까지.',
    height: 260,
    mt: 20,
  },
  {
    id: 4,
    title: 'PROJECT 04',
    category: 'Editorial',
    desc: '에디토리얼 스타일 랜딩 페이지. 잡지형 그리드와 대형 타이포그래피로 시선을 유도.',
    height: 200,
    mt: 50,
  },
  {
    id: 5,
    title: 'PROJECT 05',
    category: 'Interaction',
    desc: '인터랙티브 웹 경험 디자인. 섬세한 모션과 전환 효과로 몰입감 있는 UX 구현.',
    height: 280,
    mt: 10,
  },
]

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'var(--color-bg-primary)',
        pt: { xs: 6, md: 8 },
        overflowX: 'hidden',
      }}
    >
      {/* 가로 스크롤 갤러리 */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: { xs: 2, md: 3 },
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-x',
          px: { xs: 3, md: 6 },
          pb: 3,
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          cursor: { xs: 'default', md: 'grab' },
          '&:active': { cursor: { md: 'grabbing' } },
        }}
      >
        {projects.map((p) => (
          <Box
            key={p.id}
            onMouseEnter={() => setHoveredId(p.id)}
            onMouseLeave={() => setHoveredId(null)}
            sx={{
              flexShrink: 0,
              width: { xs: 220, sm: 240, md: 260 },
              mb: `${p.mt}px`,
              opacity: hoveredId !== null && hoveredId !== p.id ? 0.12 : 1,
              transition: 'opacity 0.4s ease',
            }}
          >
            {/* 썸네일 */}
            <Box
              component={Link}
              to="/projects"
              sx={{
                display: 'block',
                height: p.height,
                backgroundColor: 'var(--color-bg-tertiary)',
                overflow: 'hidden',
                position: 'relative',
                textDecoration: 'none',
              }}
            >
              {/* 플레이스홀더 이미지 */}
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--color-bg-tertiary)',
                  backgroundImage:
                    'repeating-linear-gradient(45deg, var(--color-border-light) 0px, var(--color-border-light) 1px, transparent 1px, transparent 12px)',
                  transition: 'transform 0.5s ease',
                  ...(hoveredId === p.id && { transform: 'scale(1.04)' }),
                }}
              />

              {/* 호버 정보 오버레이 */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(20,18,16,0.92) 0%, rgba(20,18,16,0.5) 60%, transparent 100%)',
                  px: 2.5,
                  pt: 5,
                  pb: 2.5,
                  opacity: hoveredId === p.id ? 1 : 0,
                  transform: hoveredId === p.id ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'opacity 0.35s ease, transform 0.35s ease',
                }}
              >
                <Typography
                  sx={{
                    color: 'var(--color-primary-light)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    mb: 0.8,
                  }}
                >
                  {p.category}
                </Typography>
                <Typography
                  sx={{
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    letterSpacing: '0.08em',
                    mb: 1,
                  }}
                >
                  {p.title}
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.72)',
                    fontSize: '0.73rem',
                    lineHeight: 1.7,
                    wordBreak: 'keep-all',
                  }}
                >
                  {p.desc}
                </Typography>
              </Box>
            </Box>

            {/* 프로젝트 이름 (하단) */}
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mt: 1.2,
                color: 'var(--color-text-primary)',
                fontWeight: 500,
                letterSpacing: 1.5,
                fontSize: '0.7rem',
              }}
            >
              {p.title}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* 하단 바 */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          px: { xs: 3, md: 6 },
          pt: 1,
          pb: { xs: 4, md: 5 },
          borderTop: '1px solid var(--color-border-light)',
          mt: 1,
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 900,
            fontSize: { xs: '3.5rem', sm: '5rem', md: '7rem' },
            lineHeight: 1,
            letterSpacing: '-2px',
            color: 'var(--color-text-primary)',
            mt: { xs: 1, md: 2 },
          }}
        >
          WORKS
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 0.8, pb: 1 }}>
          <Typography
            component={Link}
            to="/projects"
            variant="caption"
            sx={{
              color: 'var(--color-text-secondary)',
              letterSpacing: 1.5,
              fontSize: '0.72rem',
              fontWeight: 500,
              textDecoration: 'none',
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
              letterSpacing: 1.5,
              fontSize: '0.72rem',
              textDecoration: 'none',
              '&:hover': { color: 'var(--color-accent)' },
              transition: 'color 0.2s',
            }}
          >
            ARCHIVE ↗
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
