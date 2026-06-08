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
            About Me 섹션
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
          <CardContent sx={{ p: { xs: 3, md: 5 }, textAlign: 'center' }}>
            <Typography
              variant="body1"
              sx={{ color: 'var(--color-text-secondary)', lineHeight: 2, mb: 4 }}
            >
              여기는 About Me 섹션입니다.
              <br />
              간단한 자기소개와 &apos;더 알아보기&apos; 버튼이 들어갈 예정입니다.
            </Typography>

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
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
