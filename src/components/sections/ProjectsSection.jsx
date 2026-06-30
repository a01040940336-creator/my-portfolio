import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { supabase } from '../../lib/supabase'

export default function ProjectsSection() {
  const [projects, setProjects] = useState([])
  const [hoveredId, setHoveredId] = useState(null)
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    supabase
      .from('projects')
      .select('*')
      .eq('is_published', true)
      .order('sort_order', { ascending: true })
      .then(({ data }) => {
        if (data?.length) setProjects(data)
      })
  }, [])

  const activeId = hoveredId || selectedId
  const active = projects.find((p) => p.id === activeId)

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
          flex: { xs: '0 0 auto', md: 1 },
          minHeight: { xs: 'auto', md: 0 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* 좌측: 썸네일 프리뷰 */}
        <Box
          sx={{
            flex: { xs: '0 0 auto', md: '0 0 55%' },
            height: { xs: 'clamp(220px, 56vw, 380px)', md: 'auto' },
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg-secondary)',
          }}
        >
          {/* 실제 썸네일 이미지 (호버 시) */}
          {projects.map((p) => (
            <Box
              key={p.id}
              component="img"
              src={p.thumbnail_url}
              alt={p.title}
              sx={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: activeId === p.id ? 1 : 0,
                transition: 'opacity 0.4s ease',
              }}
            />
          ))}

          {/* 기본 상태 — 콜라주 무드보드 */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: '#F7F2EC',
              opacity: activeId ? 0 : 1,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none',
              overflow: 'hidden',
            }}
          >
            {/* 좌측 수직 텍스트 */}
            <Typography sx={{
              position: 'absolute', left: 22, top: '50%',
              transform: 'translateY(-50%) rotate(-90deg)',
              fontSize: '0.58rem', letterSpacing: '0.45em',
              color: 'var(--color-text-muted)', textTransform: 'uppercase',
              whiteSpace: 'nowrap', userSelect: 'none',
            }}>
              Selected Works
            </Typography>

            {/* 우측 수직 텍스트 */}
            <Typography sx={{
              position: 'absolute', right: 22, top: '50%',
              transform: 'translateY(-50%) rotate(90deg)',
              fontSize: '0.58rem', letterSpacing: '0.45em',
              color: 'var(--color-text-muted)', textTransform: 'uppercase',
              whiteSpace: 'nowrap', userSelect: 'none',
            }}>
              Portfolio 2025
            </Typography>

            {/* 콜라주 이미지 1 — 좌상단, 반시계 기울기 */}
            {projects[0] && (
              <Box sx={{
                position: 'absolute',
                top: '6%', left: '10%',
                width: '54%',
                aspectRatio: '3 / 4',
                overflow: 'hidden',
                transform: 'rotate(-4deg)',
                boxShadow: '0 10px 36px rgba(0,0,0,0.13)',
                border: '7px solid #fff',
                zIndex: 1,
              }}>
                <Box component="img" src={projects[0].thumbnail_url} alt={projects[0].title}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </Box>
            )}

            {/* 콜라주 이미지 2 — 우하단, 시계 기울기 */}
            {projects[1] && (
              <Box sx={{
                position: 'absolute',
                bottom: '5%', right: '8%',
                width: '46%',
                aspectRatio: '3 / 4',
                overflow: 'hidden',
                transform: 'rotate(3.5deg)',
                boxShadow: '0 10px 36px rgba(0,0,0,0.10)',
                border: '7px solid #fff',
                zIndex: 2,
              }}>
                <Box component="img" src={projects[1].thumbnail_url} alt={projects[1].title}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </Box>
            )}

            {/* 하단 힌트 텍스트 */}
            <Typography sx={{
              position: 'absolute', bottom: 20, left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '0.6rem', letterSpacing: '0.38em',
              color: 'var(--color-text-muted)', textTransform: 'uppercase',
              whiteSpace: 'nowrap', userSelect: 'none',
            }}>
              — hover to explore
            </Typography>
          </Box>
        </Box>

        {/* 우측: 프로젝트 정보 */}
        <Box
          sx={{
            flex: { xs: '0 0 auto', md: 1 },
            minHeight: { xs: 360, md: 0 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            p: { xs: 3, md: 8 },
            pb: { xs: 4, md: 7 },
            position: 'relative',
          }}
        >
          {/* VIEW ALL — 우측 상단 고정 (겹침 방지) */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: 20, md: 28 },
              right: { xs: 16, md: 32 },
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
          </Box>

          {/* 기본 상태 — 에디토리얼 라벨 */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              opacity: activeId ? 0 : 1,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none',
            }}
          >
            {/* 상단 레이블 — VIEW ALL과 같은 top, 왼쪽 배치 */}
            <Box sx={{ position: 'absolute', top: { xs: 20, md: 28 }, left: { xs: 20, md: 28 } }}>
              <Typography sx={{
                fontSize: '0.58rem', letterSpacing: '0.45em',
                color: 'var(--color-text-muted)', textTransform: 'uppercase',
                userSelect: 'none', lineHeight: 2,
              }}>
                Selected Works
              </Typography>
              <Typography sx={{
                fontSize: '0.55rem', letterSpacing: '0.3em',
                color: 'var(--color-border-mid)', textTransform: 'uppercase',
                userSelect: 'none',
              }}>
                Portfolio 2025
              </Typography>
            </Box>

            {/* 컬러 스와치 — 우측 세로 스택 */}
            <Box sx={{
              position: 'absolute', right: { xs: 20, md: 32 }, top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex', flexDirection: 'column', gap: 0.8,
            }}>
              {[
                'var(--color-primary)',
                'var(--color-primary-light)',
                'var(--color-bg-tertiary)',
              ].map((color, i) => (
                <Box key={i} sx={{ width: { xs: 22, md: 26 }, height: { xs: 38, md: 48 }, backgroundColor: color }} />
              ))}
              <Typography sx={{
                fontSize: '0.48rem', letterSpacing: '0.2em',
                color: 'var(--color-text-muted)', textTransform: 'uppercase',
                mt: 0.5, userSelect: 'none', textAlign: 'center',
              }}>
                palette
              </Typography>
            </Box>

            {/* 프로젝트 번호 + 타이틀 목록 */}
            <Box sx={{
              position: 'absolute', left: { xs: 20, md: 28 }, top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex', flexDirection: 'column', gap: { xs: 2.5, md: 3.5 },
            }}>
              {projects.map((p, i) => (
                <Box key={p.id}>
                  <Typography sx={{
                    fontSize: '0.52rem', letterSpacing: '0.3em',
                    color: 'var(--color-accent)', textTransform: 'uppercase',
                    userSelect: 'none', mb: 0.4,
                  }}>
                    0{i + 1}
                  </Typography>
                  <Typography sx={{
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    fontWeight: 600, color: 'var(--color-text-primary)',
                    letterSpacing: '-0.2px', userSelect: 'none',
                  }}>
                    {p.title}
                  </Typography>
                  <Typography sx={{
                    fontSize: '0.68rem', color: 'var(--color-text-muted)',
                    letterSpacing: '0.05em', userSelect: 'none', mt: 0.3,
                  }}>
                    {p.tech_stack?.slice(0, 2).join(' / ')}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* 하단 힌트 */}
            <Typography sx={{
              position: 'absolute', bottom: { xs: 18, md: 24 }, left: { xs: 20, md: 28 },
              fontSize: '0.52rem', letterSpacing: '0.35em',
              color: 'var(--color-border-mid)', textTransform: 'uppercase',
              userSelect: 'none',
            }}>
              — hover thumbnails to preview
            </Typography>
          </Box>

          {/* 호버/클릭 상태 — 프로젝트 상세 정보 */}
          <Box
            sx={{
              opacity: activeId ? 1 : 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: activeId ? 'auto' : 'none',
            }}
          >
            {/* 장식용 큰 번호 */}
            <Typography
              sx={{
                fontSize: { xs: '3.5rem', md: '9rem' },
                fontWeight: 900,
                lineHeight: 0.85,
                color: 'var(--color-border-light)',
                letterSpacing: { xs: '-2px', md: '-4px' },
                mb: { xs: 1.5, md: 3 },
                userSelect: 'none',
              }}
            >
              {active ? String(active.sort_order).padStart(2, '0') : ''}
            </Typography>

            {/* 기술 스택 */}
            <Typography
              sx={{
                fontSize: '0.62rem',
                letterSpacing: '0.4em',
                color: 'var(--color-accent)',
                textTransform: 'uppercase',
                mb: 1.5,
              }}
            >
              {active?.tech_stack?.join(' · ')}
            </Typography>

            {/* 프로젝트 제목 */}
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

            {/* 설명 */}
            <Typography
              sx={{
                color: 'var(--color-text-muted)',
                fontSize: { xs: '0.85rem', md: '0.92rem' },
                lineHeight: 1.9,
                maxWidth: 340,
                wordBreak: 'keep-all',
              }}
            >
              {active?.description}
            </Typography>

            {/* 링크 */}
            <Typography
              component="a"
              href={active?.detail_url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-block',
                mt: { xs: 3, md: 4 },
                mb: { xs: 2, md: 3 },
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
            pb: { xs: 1.5, md: 4 },
            scrollbarWidth: 'thin',
            scrollbarColor: 'var(--color-border-mid) transparent',
            '&::-webkit-scrollbar': { height: '3px' },
            '&::-webkit-scrollbar-track': { background: 'transparent' },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'var(--color-border-mid)',
              borderRadius: '2px',
            },
          }}
        >
          {projects.map((p) => (
            <Box
              key={p.id}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedId((prev) => (prev === p.id ? null : p.id))}
              sx={{
                flexShrink: 0,
                width: { xs: 160, md: 200 },
                cursor: 'pointer',
                opacity: activeId !== null && activeId !== p.id ? 0.3 : 1,
                transition: 'opacity 0.3s ease',
              }}
            >
              {/* 썸네일 */}
              <Box
                sx={{
                  height: 130,
                  position: 'relative',
                  overflow: 'hidden',
                  outline: activeId === p.id ? '1.5px solid var(--color-accent)' : '1.5px solid transparent',
                  transition: 'outline-color 0.3s ease',
                  backgroundColor: 'var(--color-bg-tertiary)',
                  backgroundImage:
                    'repeating-linear-gradient(45deg, var(--color-border-light) 0px, var(--color-border-light) 1px, transparent 1px, transparent 12px)',
                }}
              >
                <Box
                  component="img"
                  src={p.thumbnail_url}
                  alt={p.title}
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              {/* 타이틀 */}
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  mt: 1,
                  fontSize: '0.65rem',
                  letterSpacing: '0.18em',
                  color: activeId === p.id ? 'var(--color-accent)' : 'var(--color-text-muted)',
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
