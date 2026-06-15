import { useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import { mainSkills, categoryMeta } from '../../data/portfolioData'

export default function SkillTreeSection() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'var(--color-bg-primary)',
        py: { xs: 8, md: 10 },
        borderTop: '1px solid var(--color-border-light)',
        borderBottom: '1px solid var(--color-border-light)',
      }}
    >
      <Container maxWidth="md">

        {/* 섹션 타이틀 */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography sx={{
            fontSize: '0.65rem', letterSpacing: '0.45em',
            color: 'var(--color-accent)', textTransform: 'uppercase', mb: 1.5,
          }}>
            Skills
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="h2" sx={{
              fontSize: { xs: '2rem', md: '2.8rem' },
              fontWeight: 700, letterSpacing: '-1px',
              color: 'var(--color-text-primary)', lineHeight: 1.1,
            }}>
              Skill Set.
            </Typography>
            <Typography
              component={Link}
              to="/about"
              sx={{
                fontSize: '0.72rem', letterSpacing: '0.2em',
                color: 'var(--color-text-muted)', textDecoration: 'none',
                textTransform: 'uppercase', pb: 0.3,
                borderBottom: '1px solid var(--color-border-mid)',
                '&:hover': { color: 'var(--color-accent)', borderColor: 'var(--color-accent)' },
                transition: 'color 0.2s, border-color 0.2s',
                mb: 0.5,
              }}
            >
              전체 스킬 보기 ↗
            </Typography>
          </Box>
        </Box>

        {/* 주력 스킬 4개 — 아이콘 + 프로그레스바 */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
          gap: { xs: 2, md: 3 },
        }}>
          {mainSkills.map((skill) => {
            const meta = categoryMeta[skill.category]
            const isHovered = hoveredId === skill.id

            return (
              <Box
                key={skill.id}
                onMouseEnter={() => setHoveredId(skill.id)}
                onMouseLeave={() => setHoveredId(null)}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  border: '1px solid',
                  borderColor: isHovered ? meta.color : 'var(--color-border-light)',
                  backgroundColor: isHovered ? meta.bg : 'var(--color-bg-primary)',
                  transition: 'all 0.25s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* 아이콘 박스 */}
                <Box sx={{
                  width: 44, height: 44,
                  backgroundColor: skill.bg,
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  mb: 2,
                }}>
                  <Typography sx={{
                    fontSize: '0.85rem', fontWeight: 800,
                    color: skill.color, fontStyle: 'italic',
                    letterSpacing: '-0.5px',
                  }}>
                    {skill.abbr}
                  </Typography>
                </Box>

                {/* 스킬명 + 카테고리 */}
                <Typography sx={{
                  fontSize: '0.9rem', fontWeight: 600,
                  color: 'var(--color-text-primary)', mb: 0.3,
                }}>
                  {skill.name}
                </Typography>
                <Typography sx={{
                  fontSize: '0.62rem', letterSpacing: '0.1em',
                  color: meta.color, textTransform: 'uppercase', mb: 1.8,
                }}>
                  {skill.category}
                </Typography>

                {/* 프로그레스바 */}
                <Box sx={{ mb: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 3, borderRadius: 2,
                      backgroundColor: 'var(--color-border-light)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: meta.color,
                        transition: 'transform 0.8s ease',
                      },
                    }}
                  />
                  <Typography sx={{
                    fontSize: '0.62rem', color: 'var(--color-text-muted)',
                    mt: 0.5, textAlign: 'right',
                  }}>
                    {skill.level}%
                  </Typography>
                </Box>

                {/* hover 시 설명 */}
                <Box sx={{
                  mt: 1.5,
                  maxHeight: isHovered ? 80 : 0,
                  overflow: 'hidden',
                  opacity: isHovered ? 1 : 0,
                  transition: 'max-height 0.3s ease, opacity 0.25s ease',
                }}>
                  {skill.desc.map((d, i) => (
                    <Typography key={i} sx={{
                      fontSize: '0.72rem', color: 'var(--color-text-muted)',
                      lineHeight: 1.8,
                    }}>
                      · {d}
                    </Typography>
                  ))}
                </Box>
              </Box>
            )
          })}
        </Box>

      </Container>
    </Box>
  )
}
