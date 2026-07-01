import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import { aboutData, skills, categoryMeta } from '../data/portfolioData'
import CreativeArchive from '../components/sections/CreativeArchive'

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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
        <Box sx={{
          width: 34, height: 34, borderRadius: '8px',
          backgroundColor: skill.bg, flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, color: skill.color, fontStyle: 'italic' }}>
            {skill.abbr}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
          {skill.name}
        </Typography>
        <Typography sx={{ ml: 'auto', fontSize: '0.72rem', fontWeight: 600, color: meta.color }}>
          {skill.level}%
        </Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={skill.level}
        sx={{
          height: 4, borderRadius: 2,
          backgroundColor: 'var(--color-border-light)',
          mb: 1.2,
          '& .MuiLinearProgress-bar': { backgroundColor: meta.color, transition: 'transform 0.9s ease' },
        }}
      />

      <Box sx={{
        maxHeight: hovered ? 60 : 0, overflow: 'hidden',
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
    <Box sx={{ backgroundColor: '#F3F3F3', minHeight: 'calc(100vh - 64px)' }}>

      {/* ═══════════════════════════════════════════
          SWISS GRID HERO — 상단 정보 그리드
      ═══════════════════════════════════════════ */}
      <Box sx={{
        px: { xs: 3, sm: 5, md: 7 },
        pt: { xs: 8, md: 11 },
        pb: { xs: 7, md: 10 },
      }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '38% 22% 40%' },
          gap: { xs: 6, md: 0 },
          alignItems: 'flex-start',
        }}>

          {/* ── LEFT: 화살표 + 대형 타이틀 ── */}
          <Box>
            <Typography sx={{
              fontSize: { xs: '1rem', md: '1.3rem' },
              color: '#111111', mb: { xs: 1.5, md: 2.5 }, lineHeight: 1,
            }}>
              →
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '3rem', sm: '4.2rem', md: '5.5rem', lg: '6.5rem' },
                fontWeight: 800,
                lineHeight: 1.0,
                color: '#111111',
                letterSpacing: { xs: '-1.5px', md: '-3px' },
                m: 0,
              }}
            >
              AN<br />SUEUN
            </Typography>
          </Box>

          {/* ── MIDDLE: ROLE + SKILLS ── */}
          <Box sx={{ pl: { md: 5 }, pt: { md: '4px' } }}>
            <Typography sx={{
              fontSize: '0.58rem', letterSpacing: '0.22em',
              color: '#777777', textTransform: 'uppercase', mb: 1.5,
            }}>
              Role
            </Typography>
            {['Web Designer', 'UI Designer', 'Creative Thinker'].map(r => (
              <Typography key={r} sx={{ fontSize: '0.88rem', color: '#111111', lineHeight: 2.1 }}>
                {r}
              </Typography>
            ))}

            <Box sx={{ mt: { xs: 4, md: 5.5 } }}>
              <Typography sx={{
                fontSize: '0.58rem', letterSpacing: '0.22em',
                color: '#777777', textTransform: 'uppercase', mb: 1.5,
              }}>
                Skills
              </Typography>
              {['Figma', 'Photoshop', 'Illustrator', 'HTML / CSS'].map(s => (
                <Typography key={s} sx={{ fontSize: '0.88rem', color: '#111111', lineHeight: 2.1 }}>
                  {s}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* ── RIGHT: DESCRIPTION ── */}
          <Box sx={{ pl: { md: 5 }, pt: { md: '4px' } }}>
            <Typography sx={{
              fontSize: '0.58rem', letterSpacing: '0.22em',
              color: '#777777', textTransform: 'uppercase', mb: 1.5,
            }}>
              Description
            </Typography>
            {aboutData.story.map((para, i) => (
              <Typography key={i} sx={{
                fontSize: { xs: '0.92rem', md: '1rem' },
                color: i === 0 ? '#111111' : '#555555',
                lineHeight: 1.85,
                maxWidth: 480,
                wordBreak: 'keep-all',
                mb: i < aboutData.story.length - 1 ? 2.5 : 0,
              }}>
                {para}
              </Typography>
            ))}
          </Box>

        </Box>
      </Box>

      {/* ═══════════════════════════════════════════
          PROFILE INFO — 학력 / 경력 / 스킬 및 자격
      ═══════════════════════════════════════════ */}
      <Box sx={{
        px: { xs: 3, sm: 5, md: 7 },
        pb: { xs: 7, md: 9 },
        borderTop: '1px solid #DEDEDE',
        pt: { xs: 6, md: 7 },
      }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: { xs: 5, md: 0 },
        }}>

          {/* 학력 */}
          <Box sx={{ pr: { md: 6 } }}>
            <Typography sx={{
              fontSize: '0.58rem', letterSpacing: '0.22em',
              color: '#777777', textTransform: 'uppercase', mb: 2,
            }}>
              Education
            </Typography>
            <Typography sx={{ fontSize: '0.92rem', fontWeight: 600, color: '#111111', lineHeight: 1.6 }}>
              계명대학교
            </Typography>
            <Typography sx={{ fontSize: '0.88rem', color: '#555555', lineHeight: 1.8 }}>
              국제통상학전공
            </Typography>
          </Box>

          {/* 경력 */}
          <Box sx={{
            px: { md: 6 },
            borderLeft: { md: '1px solid #DEDEDE' },
          }}>
            <Typography sx={{
              fontSize: '0.58rem', letterSpacing: '0.22em',
              color: '#777777', textTransform: 'uppercase', mb: 2,
            }}>
              Experience
            </Typography>
            <Box sx={{ height: 44 }} />
          </Box>

          {/* 스킬 및 자격 */}
          <Box sx={{
            pl: { md: 6 },
            borderLeft: { md: '1px solid #DEDEDE' },
          }}>
            <Typography sx={{
              fontSize: '0.58rem', letterSpacing: '0.22em',
              color: '#777777', textTransform: 'uppercase', mb: 2,
            }}>
              Skills &amp; Certifications
            </Typography>
            <Box sx={{ height: 44 }} />
          </Box>

        </Box>
      </Box>

      {/* 가는 구분선 */}
      <Box sx={{ borderTop: '1px solid #DEDEDE', mx: { xs: 3, md: 7 } }} />

      {/* ═══════════════════════════════════════════
          이미지 섹션 — 40 : 60 비대칭
      ═══════════════════════════════════════════ */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%' }}>

        {/* 좌: 세로 이미지 */}
        <Box sx={{ flex: { xs: '1 1 auto', md: '0 0 40%' }, position: 'relative' }}>
          <Box
            component="img"
            src="https://picsum.photos/seed/sueun-a/800/1000"
            alt="portfolio visual 01"
            sx={{
              width: '100%',
              height: { xs: 240, sm: 380, md: 560 },
              display: 'block',
              objectFit: 'cover',
            }}
          />
          <Box sx={{ px: { xs: 2, md: 3 }, py: 1.5 }}>
            <Typography sx={{ fontSize: '0.72rem', color: '#777777', letterSpacing: '0.1em' }}>
              (01)
            </Typography>
          </Box>
        </Box>

        {/* 우: 가로 이미지 */}
        <Box sx={{ flex: { xs: '1 1 auto', md: '0 0 60%' } }}>
          <Box
            component="img"
            src="https://picsum.photos/seed/sueun-b/1200/800"
            alt="portfolio visual 02"
            sx={{
              width: '100%',
              height: { xs: 200, sm: 320, md: 560 },
              display: 'block',
              objectFit: 'cover',
            }}
          />
        </Box>

      </Box>

      {/* ═══════════════════════════════════════════
          BELOW — 기존 콘텐츠
      ═══════════════════════════════════════════ */}
      <Container maxWidth="md" sx={{ py: { xs: 7, md: 11 } }}>

        {/* 디자인 철학 */}
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
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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

        {/* Skill Set 전체 */}
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                  <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: meta.color, flexShrink: 0 }} />
                  <Typography sx={{
                    fontSize: '0.72rem', fontWeight: 700,
                    color: meta.color, letterSpacing: '0.2em', textTransform: 'uppercase',
                  }}>
                    {meta.label}
                  </Typography>
                </Box>
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

      </Container>

      {/* ── Creative Archive (Interests 대체) ── */}
      <CreativeArchive />

    </Box>
  )
}
