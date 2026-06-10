import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'

export default function AboutSection() {
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
            About
          </Typography>
          <Typography
            variant="h3"
            sx={{ mt: 1, fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 600 }}
          >
            About Me
          </Typography>
          <Divider
            sx={{ width: 40, mx: 'auto', mt: 2, borderColor: 'var(--color-primary)', borderWidth: 2 }}
          />
        </Box>

        <Card
          sx={{
            backgroundColor: 'var(--color-bg-primary)',
            border: '1px solid var(--color-border-light)',
            boxShadow: 'none',
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 }, textAlign: 'left' }}>
            <Typography
              variant="body1"
              sx={{ color: 'var(--color-text-secondary)', lineHeight: 2.2, mb: 1.5, fontSize: { xs: '0.95rem', md: '1rem' } }}
            >
              사용자의 시선으로 생각하고, 디자인으로 이야기하는 UI/UX 웹 디자이너입니다.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'var(--color-text-muted)', lineHeight: 2, mb: 4, fontSize: { xs: '0.9rem', md: '0.95rem' } }}
            >
              단순히 보기 좋은 화면이 아닌, 누구나 직관적으로 쓸 수 있는 경험을 만드는 것에 집중합니다.
              <br />
              Figma부터 실제 구현까지, 아이디어가 화면이 되는 과정을 즐깁니다.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="outlined"
                component={Link}
                to="/about"
                sx={{
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-accent)',
                  px: 4,
                  '&:hover': {
                    borderColor: 'var(--color-accent)',
                    backgroundColor: 'var(--color-primary-light)',
                  },
                }}
              >
                더 알아보기
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
