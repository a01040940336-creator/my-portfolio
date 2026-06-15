import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import { aboutData, skills, categoryMeta } from '../data/portfolioData'

const CATEGORIES = ['Design', 'Frontend', 'Framework', 'Tools']

const groupedSkills = CATEGORIES.reduce((acc, cat) => {
  const list = skills.filter(s => s.category === cat)
  if (list.length) acc[cat] = list
  return acc
}, {})

function SkillBar({ skill }) {
  const [hovered, setHovered] = useState(false)
  const meta = categoryMeta[skill.category]

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        p: { xs: 2, md: 2.5 },
        border: '1px solid',
        borderColor: hovered ? meta.color : 'var(--color-border-light)',
        backgroundColor: hovered ? meta.bg : '#fff',
        transition: 'all 0.22s ease',
        cursor: 'default',
      }}
    >
      {/* 아이콘 + 이름 행 */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
        <Box sx={{
          width: 34, height: 34, borderRadius: '8px',
          backgroundColor: skill.bg, flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Typography sx={{
            fontSize: '0.7rem', fontWeight: 800,
            color: skill.color, fontStyle: 'italic',
          }}>
            {skill.abbr}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
          {skill.name}
        </Typography>
        <Typography sx={{
          ml: 'auto', fontSize: '0.72rem', fontWeight: 600,
          color: meta.color,
        }}>
          {skill.level}%
        </Typography>
      </Box>

      {/* 프로그레스바 */}
      <LinearProgress
        variant="determinate"
        value={skill.level}
        sx={{
          height: 4, borderRadius: 2,
          backgroundColor: 'var(--color-border-light)',
          mb: 1.2,
          '& .MuiLinearProgress-bar': {
            backgroundColor: meta.color,
            transition: 'transform 0.9s ease',
          },
        }}
      />

      {/* hover 설명 */}
      <Box sx={{
        maxHeight: hovered ? 60 : 0,
        overflow: 'hidden',
        opacity: hovered ? 1 : 0,
        transition: 'max-height 0.28s ease, opacity 0.22s ease',
      }}>
        <Typography sx={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
          {skill.desc.join(' · ')}
        </Typography>
      </Box>
    </Box>
  )
}

export default function AboutMe() {
  return (
    <Box sx={{ backgroundColor: 'var(--color-bg-secondary)', minHeight: 'calc(100vh - 64px)' }}>

      {/* ══════════════════════════════════════
          VINTAGE EDITORIAL HERO
      ══════════════════════════════════════ */}
      <Box sx={{
        position: 'relative',
        backgroundColor: '#f6f4f1',
        minHeight: { xs: '88vh', md: '94vh' },
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* ── 그레인 텍스처 오버레이 ── */}
        <Box sx={{
          position: 'absolute', inset: 0, zIndex: 1,
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/></filter><rect width='300' height='300' filter='url(%23n)' opacity='0.09'/></svg>")`,
          backgroundRepeat: 'repeat',
          pointerEvents: 'none',
          mixBlendMode: 'multiply',
        }} />

        {/* ── 흩어진 워터마크 텍스트 ── */}
        {[
          { top: '7%',  left: '2%',   rotate: -2   },
          { top: '24%', right: '6%',  rotate: 1.5  },
          { top: '46%', left: '1%',   rotate: -1   },
          { top: '63%', right: '2%',  rotate: 2    },
          { top: '80%', left: '18%',  rotate: -1.5 },
        ].map((pos, i) => (
          <Typography key={i} sx={{
            position: 'absolute', zIndex: 0,
            top: pos.top, left: pos.left, right: pos.right,
            transform: `rotate(${pos.rotate}deg)`,
            fontFamily: '"Playfair Display", serif',
            fontSize: '0.55rem', letterSpacing: '0.38em',
            color: '#b89d8d', opacity: 0.28,
            textTransform: 'uppercase', whiteSpace: 'nowrap',
            userSelect: 'none',
          }}>
            안수은 · UI/UX Designer · Portfolio 2025
          </Typography>
        ))}

        {/* ── 상단 바 ── */}
        <Box sx={{
          position: 'relative', zIndex: 2,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          px: { xs: 3, md: 7 }, pt: { xs: 3, md: 5 },
        }}>
          <Typography sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '0.58rem', letterSpacing: '0.3em',
            color: '#1a1a1a', opacity: 0.5,
            textTransform: 'uppercase', fontStyle: 'italic',
          }}>
            — About Me · Portfolio
          </Typography>
          <Typography sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '0.58rem', letterSpacing: '0.3em',
            color: '#1a1a1a', opacity: 0.5, textTransform: 'uppercase',
          }}>
            Based in Korea · 2025
          </Typography>
        </Box>

        {/* ── 폴라로이드 (우측 상단) ── */}
        <Box sx={{
          position: 'absolute',
          top: { xs: '9%', md: '13%' },
          right: { xs: '-3%', md: '3.5%' },
          width: { xs: 105, md: 160 },
          zIndex: 3,
          transform: 'rotate(5.5deg)',
          filter: 'drop-shadow(3px 6px 16px rgba(0,0,0,0.13))',
        }}>
          <Box sx={{ backgroundColor: '#ede9e1', p: '8px', pb: '28px' }}>
            <Box sx={{
              width: '100%', paddingTop: '118%',
              position: 'relative', overflow: 'hidden',
              backgroundColor: '#ccc4b8',
              filter: 'sepia(25%) saturate(75%) brightness(0.92)',
            }}>
              {/* 그레인 */}
              <Box sx={{
                position: 'absolute', inset: 0,
                backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.2'/></svg>")`,
                backgroundRepeat: 'repeat', mixBlendMode: 'multiply',
              }} />
              {/* 비네팅 */}
              <Box sx={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.28) 100%)',
              }} />
              <Typography sx={{
                position: 'absolute', bottom: 8, left: 0, right: 0, textAlign: 'center',
                fontFamily: '"Playfair Display", serif',
                fontSize: '0.42rem', letterSpacing: '0.18em',
                color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase',
              }}>
                photo
              </Typography>
            </Box>
          </Box>
          <Typography sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '0.48rem', letterSpacing: '0.1em',
            color: '#9a8a7a', textAlign: 'center',
            mt: 0.5, fontStyle: 'italic',
          }}>
            Sueun, '25
          </Typography>
        </Box>

        {/* ── 초대형 스크립트 타이틀 ── */}
        <Box sx={{
          position: 'relative', zIndex: 2,
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          pt: { xs: 2, md: 0 }, pb: { xs: 6, md: 8 },
          overflow: 'visible',
        }}>
          {/* 아웃라인 Sueun */}
          <Box component="h1" sx={{
            m: 0, p: 0,
            fontFamily: '"Dancing Script", cursive',
            fontSize: { xs: '5.8rem', sm: '8.5rem', md: '13rem', lg: '16rem' },
            fontWeight: 700,
            lineHeight: 0.82,
            color: 'transparent',
            WebkitTextStroke: { xs: '1.5px #1a1a1a', sm: '1.8px #1a1a1a', md: '2.2px #1a1a1a' },
            textAlign: 'center',
            userSelect: 'none',
            letterSpacing: '-0.02em',
            ml: { xs: 0, md: '-4%' },
            display: 'block',
          }}>
            Sueun
          </Box>

          {/* 채워진 An. — 살짝 오른쪽 오프셋 */}
          <Box component="span" sx={{
            display: 'block',
            fontFamily: '"Dancing Script", cursive',
            fontSize: { xs: '4.2rem', sm: '6.5rem', md: '10rem', lg: '12rem' },
            fontWeight: 700,
            lineHeight: 0.88,
            color: '#1a1a1a',
            textAlign: 'center',
            letterSpacing: '-0.02em',
            ml: { xs: 0, md: '7%' },
            mb: { xs: 5, md: 7 },
          }}>
            An.
          </Box>

          {/* 크레딧 블록 */}
          <Box sx={{ textAlign: 'center', zIndex: 2 }}>
            <Typography sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: '0.6rem', md: '0.72rem' },
              letterSpacing: '0.45em', color: '#1a1a1a',
              textTransform: 'uppercase', fontWeight: 500, mb: 2,
            }}>
              UI/UX Web Designer
            </Typography>
            <Box sx={{
              width: 32, height: '1px',
              backgroundColor: '#b89d8d',
              mx: 'auto', mb: 2,
            }} />
            <Box sx={{
              display: 'flex', justifyContent: 'center',
              gap: { xs: 3, md: 5 }, flexWrap: 'wrap',
            }}>
              {[
                ['Education', '계명대학교 국제통상학'],
                ['Role',      '신입 웹디자이너'],
                ['Location',  'Seoul, Korea'],
              ].map(([label, val]) => (
                <Box key={label} sx={{ textAlign: 'center' }}>
                  <Typography sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: '0.45rem', letterSpacing: '0.32em',
                    color: '#b89d8d', textTransform: 'uppercase',
                    display: 'block', mb: 0.4,
                  }}>
                    {label}
                  </Typography>
                  <Typography sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: '0.6rem', color: '#4a4040',
                    letterSpacing: '0.05em', fontStyle: 'italic',
                  }}>
                    {val}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ── 종이 찢김 하단 엣지 ── */}
        <Box sx={{
          position: 'absolute', bottom: -1, left: 0, right: 0,
          height: { xs: 44, md: 62 }, zIndex: 5,
          pointerEvents: 'none', lineHeight: 0,
        }}>
          <svg viewBox="0 0 1440 62" preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', display: 'block' }}>
            <path d="M0,62 L0,26 C60,38 120,14 180,28 C240,42 300,16 360,30 C420,44 480,18 540,32 C600,46 660,20 720,34 C780,48 840,22 900,36 C960,50 1020,24 1080,36 C1140,48 1200,22 1260,34 C1320,46 1380,28 1440,36 L1440,62 Z"
              fill="#ffffff"/>
          </svg>
        </Box>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 7, md: 11 } }}>

        {/* ── 나의 디자인 스토리 ── */}
        <Box sx={{ mb: { xs: 8, md: 11 } }}>
          <Typography sx={{
            fontSize: '0.6rem', letterSpacing: '0.4em',
            color: 'var(--color-accent)', textTransform: 'uppercase', mb: 1.5,
          }}>
            Story
          </Typography>
          <Typography variant="h2" sx={{
            fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700,
            letterSpacing: '-0.5px', mb: 4, color: 'var(--color-text-primary)',
          }}>
            나의 디자인 스토리
          </Typography>
          <Box sx={{ borderLeft: '2px solid var(--color-primary)', pl: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            {aboutData.story.map((para, i) => (
              <Typography key={i} sx={{
                fontSize: { xs: '0.92rem', md: '0.98rem' },
                color: i < 2 ? 'var(--color-text-secondary)' : 'var(--color-text-muted)',
                lineHeight: 2, wordBreak: 'keep-all',
              }}>
                {para}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* ── 디자인 철학 ── */}
        <Box sx={{ mb: { xs: 8, md: 11 } }}>
          <Typography sx={{
            fontSize: '0.6rem', letterSpacing: '0.4em',
            color: 'var(--color-accent)', textTransform: 'uppercase', mb: 1.5,
          }}>
            Philosophy
          </Typography>
          <Typography variant="h2" sx={{
            fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700,
            letterSpacing: '-0.5px', mb: 4, color: 'var(--color-text-primary)',
          }}>
            디자인 철학
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {aboutData.philosophy.map((line, i) => (
              <Box key={i} sx={{
                py: 2.5, borderTop: '1px solid var(--color-border-light)',
                ...(i === aboutData.philosophy.length - 1 && { borderBottom: '1px solid var(--color-border-light)' }),
                display: 'flex', gap: 3, alignItems: 'flex-start',
              }}>
                <Typography sx={{
                  fontSize: '0.6rem', color: 'var(--color-accent)',
                  letterSpacing: '0.2em', mt: 0.4, flexShrink: 0,
                }}>
                  0{i + 1}
                </Typography>
                <Typography sx={{
                  fontSize: { xs: '0.9rem', md: '0.95rem' },
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.9, wordBreak: 'keep-all',
                }}>
                  {line}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Skills 전체 ── */}
        <Box sx={{ mb: { xs: 8, md: 11 } }}>
          <Typography sx={{
            fontSize: '0.6rem', letterSpacing: '0.4em',
            color: 'var(--color-accent)', textTransform: 'uppercase', mb: 1.5,
          }}>
            Skills
          </Typography>
          <Typography variant="h2" sx={{
            fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700,
            letterSpacing: '-0.5px', mb: 6, color: 'var(--color-text-primary)',
          }}>
            Skill Set
          </Typography>

          {Object.entries(groupedSkills).map(([cat, list]) => {
            const meta = categoryMeta[cat]
            return (
              <Box key={cat} sx={{ mb: 6 }}>
                {/* 카테고리 헤더 */}
                <Box sx={{
                  display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5,
                }}>
                  <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: meta.color, flexShrink: 0 }} />
                  <Typography sx={{
                    fontSize: '0.72rem', fontWeight: 700,
                    color: meta.color, letterSpacing: '0.2em', textTransform: 'uppercase',
                  }}>
                    {meta.label}
                  </Typography>
                </Box>

                {/* 스킬 그리드: 3열 / 2열 / 1열 */}
                <Box sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                  gap: 1.5,
                }}>
                  {list.map(skill => <SkillBar key={skill.id} skill={skill} />)}
                </Box>
              </Box>
            )
          })}
        </Box>

        {/* ── 디자인 관심사 ── */}
        <Box sx={{
          p: { xs: 4, md: 6 },
          backgroundColor: 'var(--color-primary)',
        }}>
          <Typography sx={{
            fontSize: '0.6rem', letterSpacing: '0.4em',
            color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', mb: 2,
          }}>
            Interests
          </Typography>
          <Typography variant="h3" sx={{
            fontSize: { xs: '1.2rem', md: '1.5rem' }, fontWeight: 700,
            color: '#fff', mb: 2.5,
          }}>
            디자인 관심사
          </Typography>
          <Typography sx={{
            fontSize: { xs: '0.9rem', md: '0.95rem' },
            color: 'rgba(255,255,255,0.82)',
            lineHeight: 2, wordBreak: 'keep-all',
          }}>
            {aboutData.interest}
          </Typography>
        </Box>

      </Container>
    </Box>
  )
}
