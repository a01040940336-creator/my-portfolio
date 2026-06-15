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
    <Box sx={{
      backgroundColor: 'var(--color-bg-secondary)',
      minHeight: 'calc(100vh - 64px)',
    }}>

      {/* ── 헤더 배너 ── */}
      <Box sx={{
        backgroundColor: 'var(--color-primary)',
        px: { xs: 3, sm: 5, md: 8 },
        pt: { xs: 8, md: 11 },
        pb: { xs: 7, md: 10 },
      }}>
        <Typography sx={{
          fontSize: '0.65rem', letterSpacing: '0.45em',
          color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', mb: 2,
        }}>
          About Me
        </Typography>
        <Typography variant="h1" sx={{
          fontSize: { xs: '2.4rem', md: '3.6rem' },
          fontWeight: 800, letterSpacing: '-1.5px',
          color: '#fff', lineHeight: 1.1, mb: 3,
        }}>
          안수은입니다.
        </Typography>

        {/* 기본 정보 칩 */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
          {[
            aboutData.basicInfo.role,
            aboutData.basicInfo.education,
            aboutData.basicInfo.major,
          ].map((item) => (
            <Box key={item} sx={{
              px: 2, py: 0.7,
              border: '1px solid rgba(255,255,255,0.4)',
              borderRadius: '999px',
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.85)',
              letterSpacing: '0.03em',
            }}>
              {item}
            </Box>
          ))}
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
