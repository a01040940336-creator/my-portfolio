import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const tools = [
  { name: 'Figma',       abbr: 'Fg', bg: '#1E1E1E', color: '#A259FF' },
  { name: 'Photoshop',   abbr: 'Ps', bg: '#001E36', color: '#31A8FF' },
  { name: 'Illustrator', abbr: 'Ai', bg: '#2E0000', color: '#FF9A00' },
  { name: 'HTML5',       abbr: 'H5', bg: '#E34F26', color: '#FFFFFF' },
  { name: 'CSS3',        abbr: 'CS', bg: '#1572B6', color: '#FFFFFF' },
]

const devSkills = ['JavaScript', 'React', 'GitHub', 'Supabase']

const interests = ['패션 & 라이프스타일', '브랜드 경험', '트렌드 분석', 'UI 디자인', '사용자 리서치']

export default function SkillTreeSection() {
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
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* ── 좌측: 주력 툴 ── */}
          <Box>
            <Typography
              sx={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                mb: 3,
                letterSpacing: '-0.3px',
              }}
            >
              Softwares
            </Typography>

            {/* 아이콘 그리드 */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
              {tools.map((tool) => (
                <Box
                  key={tool.name}
                  sx={{
                    width: 64,
                    height: 64,
                    backgroundColor: tool.bg,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '14px',
                    gap: 0.3,
                    flexShrink: 0,
                    cursor: 'default',
                    transition: 'transform 0.2s ease',
                    '&:hover': { transform: 'scale(1.08)' },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 800,
                      color: tool.color,
                      lineHeight: 1,
                      fontStyle: 'italic',
                      letterSpacing: '-0.5px',
                    }}
                  >
                    {tool.abbr}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* 툴 이름 레이블 */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {tools.map((tool) => (
                <Typography
                  key={tool.name}
                  sx={{
                    fontSize: '0.72rem',
                    color: 'var(--color-text-muted)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {tool.name}{' '}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* ── 우측: 개발 스킬 + 관심사 ── */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>

            {/* 개발 스킬 */}
            <Box>
              <Typography
                sx={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  mb: 3,
                  letterSpacing: '-0.3px',
                }}
              >
                Development
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
                {devSkills.map((skill) => (
                  <Box
                    key={skill}
                    sx={{
                      px: 2.2,
                      py: 0.8,
                      border: '1.5px solid var(--color-border-mid)',
                      borderRadius: '999px',
                      fontSize: '0.82rem',
                      color: 'var(--color-text-secondary)',
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                      cursor: 'default',
                      transition: 'border-color 0.2s, color 0.2s',
                      '&:hover': {
                        borderColor: 'var(--color-accent)',
                        color: 'var(--color-accent)',
                      },
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* 관심 분야 */}
            <Box>
              <Typography
                sx={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  mb: 3,
                  letterSpacing: '-0.3px',
                }}
              >
                Interests
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
                {interests.map((item) => (
                  <Box
                    key={item}
                    sx={{
                      px: 2.2,
                      py: 0.8,
                      border: '1.5px solid var(--color-primary-light, #E5B0BC)',
                      borderRadius: '999px',
                      fontSize: '0.82rem',
                      color: 'var(--color-accent)',
                      fontWeight: 500,
                      cursor: 'default',
                      backgroundColor: 'var(--color-primary-light)',
                      opacity: 0.85,
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>

          </Box>
        </Box>
      </Container>
    </Box>
  )
}
