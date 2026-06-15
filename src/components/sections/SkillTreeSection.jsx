import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const mainSkills = [
  { name: 'Figma',        tag: 'Design Tool',  desc: 'UI 디자인 · 프로토타이핑' },
  { name: 'Photoshop',    tag: 'Design Tool',  desc: '이미지 편집 · 그래픽' },
  { name: 'Illustrator',  tag: 'Design Tool',  desc: '벡터 그래픽 · 브랜딩' },
  { name: 'HTML5',        tag: 'Markup',       desc: '시맨틱 마크업' },
  { name: 'CSS3',         tag: 'Styling',      desc: '레이아웃 · 반응형' },
]

const subSkills = ['JavaScript', 'React', 'GitHub', 'Supabase']

export default function SkillTreeSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'var(--color-bg-primary)',
        py: { xs: 10, md: 14 },
        borderTop: '1px solid var(--color-border-light)',
        borderBottom: '1px solid var(--color-border-light)',
      }}
    >
      <Container maxWidth="md">

        {/* 섹션 레이블 */}
        <Typography
          sx={{
            fontSize: '0.65rem',
            letterSpacing: '0.45em',
            color: 'var(--color-accent)',
            textTransform: 'uppercase',
            mb: 2,
          }}
        >
          Skills
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            justifyContent: 'space-between',
            gap: 2,
            mb: { xs: 7, md: 10 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.6rem' },
              fontWeight: 700,
              letterSpacing: '-0.5px',
              color: 'var(--color-text-primary)',
              lineHeight: 1.2,
            }}
          >
            Skill Set
          </Typography>
          <Typography
            sx={{
              fontSize: '0.82rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.7,
              maxWidth: 280,
              wordBreak: 'keep-all',
            }}
          >
            디자인 툴부터 실제 구현까지,<br />아이디어를 화면으로 만듭니다.
          </Typography>
        </Box>

        {/* 주력 기술 목록 */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            sx={{
              fontSize: '0.6rem',
              letterSpacing: '0.4em',
              color: 'var(--color-text-muted)',
              textTransform: 'uppercase',
              mb: 3,
            }}
          >
            주력 기술
          </Typography>

          {mainSkills.map((skill, i) => (
            <Box
              key={skill.name}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: { xs: 2.5, md: 3 },
                borderTop: '1px solid var(--color-border-light)',
                ...(i === mainSkills.length - 1 && {
                  borderBottom: '1px solid var(--color-border-light)',
                }),
                gap: 2,
                '&:hover': {
                  '& .skill-name': { color: 'var(--color-accent)' },
                },
                transition: 'all 0.2s ease',
                cursor: 'default',
              }}
            >
              <Typography
                className="skill-name"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  fontWeight: 600,
                  color: 'var(--color-text-primary)',
                  letterSpacing: '-0.3px',
                  transition: 'color 0.2s ease',
                  minWidth: 120,
                }}
              >
                {skill.name}
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.7rem',
                  color: 'var(--color-accent)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: { xs: 'none', sm: 'block' },
                  flexShrink: 0,
                }}
              >
                {skill.tag}
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.82rem',
                  color: 'var(--color-text-muted)',
                  textAlign: 'right',
                  flexShrink: 0,
                }}
              >
                {skill.desc}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* 보유 기술 */}
        <Box>
          <Typography
            sx={{
              fontSize: '0.6rem',
              letterSpacing: '0.4em',
              color: 'var(--color-text-muted)',
              textTransform: 'uppercase',
              mb: 3,
            }}
          >
            보유 기술 (학습 중)
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {subSkills.map((skill) => (
              <Box
                key={skill}
                sx={{
                  px: 2.5,
                  py: 1,
                  border: '1px solid var(--color-border-mid)',
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.05em',
                  fontWeight: 500,
                  '&:hover': {
                    borderColor: 'var(--color-accent)',
                    color: 'var(--color-accent)',
                  },
                  transition: 'border-color 0.2s, color 0.2s',
                  cursor: 'default',
                }}
              >
                {skill}
              </Box>
            ))}
          </Box>
        </Box>

      </Container>
    </Box>
  )
}
