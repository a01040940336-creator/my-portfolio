import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import LinearProgress from '@mui/material/LinearProgress'

const skillGroups = [
  { category: 'Frontend', skills: ['React', 'JavaScript', 'HTML/CSS', 'MUI'] },
  { category: 'Backend',  skills: ['Node.js', 'Python', 'REST API'] },
  { category: 'Tools',    skills: ['Git', 'Figma', 'Photoshop', 'Illustrator', 'MS Office', 'Vite'] },
]

const progressSkills = [
  { name: 'React', value: 70 },
  { name: 'JavaScript', value: 65 },
  { name: 'Python', value: 50 },
]

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
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="overline"
            sx={{ color: 'var(--color-accent)', letterSpacing: 4 }}
          >
            Skills
          </Typography>
          <Typography
            variant="h3"
            sx={{ mt: 1, fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 600 }}
          >
            Skill Tree 섹션
          </Typography>
          <Divider
            sx={{ width: 40, mx: 'auto', mt: 2, borderColor: 'var(--color-primary)', borderWidth: 2 }}
          />
          <Typography variant="body2" sx={{ mt: 2, color: 'var(--color-text-muted)' }}>
            여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 5 }}>
          {skillGroups.map((group) => (
            <Grid item xs={12} sm={4} key={group.category}>
              <Box
                sx={{
                  p: 3,
                  backgroundColor: 'var(--color-bg-tertiary)',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: 2,
                  height: '100%',
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: 'var(--color-accent)',
                    fontWeight: 600,
                    letterSpacing: 1,
                    mb: 2,
                    textTransform: 'uppercase',
                    fontSize: '0.75rem',
                  }}
                >
                  {group.category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {group.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{
                        backgroundColor: 'var(--color-primary-light)',
                        color: 'var(--color-primary-dark)',
                        border: '1px solid var(--color-primary)',
                        fontSize: '0.78rem',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ maxWidth: 480, mx: 'auto' }}>
          <Typography
            variant="subtitle2"
            sx={{ color: 'var(--color-text-muted)', mb: 2, letterSpacing: 1, textTransform: 'uppercase', fontSize: '0.75rem' }}
          >
            Progress Preview
          </Typography>
          {progressSkills.map((s) => (
            <Box key={s.name} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="body2" sx={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                  {s.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--color-text-muted)' }}>
                  {s.value}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={s.value}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: 'var(--color-primary-light)',
                  '& .MuiLinearProgress-bar': { backgroundColor: 'var(--color-accent)' },
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
