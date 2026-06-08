import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

const placeholderProjects = [
  { id: 1, title: 'Project 01', desc: '프로젝트 썸네일과 설명이 들어갈 예정입니다.' },
  { id: 2, title: 'Project 02', desc: '프로젝트 썸네일과 설명이 들어갈 예정입니다.' },
  { id: 3, title: 'Project 03', desc: '프로젝트 썸네일과 설명이 들어갈 예정입니다.' },
]

export default function ProjectsSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'var(--color-bg-secondary)',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="overline"
            sx={{ color: 'var(--color-accent)', letterSpacing: 4 }}
          >
            Work
          </Typography>
          <Typography
            variant="h3"
            sx={{ mt: 1, fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 600 }}
          >
            Projects 섹션
          </Typography>
          <Divider
            sx={{ width: 40, mx: 'auto', mt: 2, borderColor: 'var(--color-primary)', borderWidth: 2 }}
          />
          <Typography variant="body2" sx={{ mt: 2, color: 'var(--color-text-muted)' }}>
            여기는 Projects 섹션입니다. 대표작 썸네일 3–4개와 &apos;더 보기&apos; 버튼이 들어갈 예정입니다.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 5 }}>
          {placeholderProjects.map((project) => (
            <Grid item xs={12} sm={4} key={project.id}>
              <Card
                sx={{
                  border: '1px solid var(--color-border-light)',
                  boxShadow: 'none',
                  backgroundColor: 'var(--color-bg-primary)',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    borderColor: 'var(--color-accent)',
                    boxShadow: '0 4px 20px var(--color-shadow)',
                  },
                }}
              >
                <Box
                  sx={{
                    height: 140,
                    backgroundColor: 'var(--color-bg-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid var(--color-border-light)',
                  }}
                >
                  <Typography variant="body2" sx={{ color: 'var(--color-text-muted)' }}>
                    Thumbnail
                  </Typography>
                </Box>
                <CardContent sx={{ p: 2.5 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, color: 'var(--color-text-primary)', mb: 0.5 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--color-text-muted)' }}>
                    {project.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="outlined"
            component={Link}
            to="/projects"
            sx={{
              borderColor: 'var(--color-primary)',
              color: 'var(--color-accent)',
              px: 5,
              '&:hover': {
                borderColor: 'var(--color-accent)',
                backgroundColor: 'var(--color-primary-light)',
              },
            }}
          >
            더 보기
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
