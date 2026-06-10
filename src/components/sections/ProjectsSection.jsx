import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const projects = [
  { id: 1, title: 'PROJECT 01', height: 200, mt: 40 },
  { id: 2, title: 'PROJECT 02', height: 300, mt: 0  },
  { id: 3, title: 'PROJECT 03', height: 260, mt: 20 },
  { id: 4, title: 'PROJECT 04', height: 200, mt: 50 },
  { id: 5, title: 'PROJECT 05', height: 280, mt: 10 },
]

export default function ProjectsSection() {
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
            sx={{
              flexShrink: 0,
              width: { xs: 220, sm: 240, md: 260 },
              mb: `${p.mt}px`,
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
                '&:hover .overlay': { opacity: 1 },
                '&:hover img': { transform: 'scale(1.04)' },
              }}
            >
              {/* 플레이스홀더 — 실제 이미지로 교체 시 <img> 사용 */}
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--color-bg-tertiary)',
                  backgroundImage:
                    'repeating-linear-gradient(45deg, var(--color-border-light) 0px, var(--color-border-light) 1px, transparent 1px, transparent 12px)',
                  transition: 'transform 0.4s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="caption" sx={{ color: 'var(--color-text-muted)', letterSpacing: 1 }}>
                  Image
                </Typography>
              </Box>

              {/* 호버 오버레이 */}
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(26,26,26,0.18)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              />
            </Box>

            {/* 프로젝트 이름 */}
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
        {/* 좌측 — 초대형 WORKS */}
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

        {/* 우측 — 링크들 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 0.8,
            pb: 1,
          }}
        >
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
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
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
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
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
