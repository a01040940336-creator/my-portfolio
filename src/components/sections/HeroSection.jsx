import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border-light)',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography
          variant="overline"
          sx={{ color: 'var(--color-accent)', letterSpacing: 4, fontSize: '0.8rem' }}
        >
          Welcome
        </Typography>

        <Typography
          variant="h2"
          sx={{
            mt: 1,
            mb: 2,
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            lineHeight: 1.2,
          }}
        >
          Hero 섹션
        </Typography>

        <Divider
          sx={{
            width: 48,
            mx: 'auto',
            my: 3,
            borderColor: 'var(--color-primary)',
            borderWidth: 2,
          }}
        />

        <Typography
          variant="body1"
          sx={{
            color: 'var(--color-text-secondary)',
            fontSize: { xs: '1rem', md: '1.15rem' },
            maxWidth: 560,
            mx: 'auto',
            lineHeight: 1.9,
          }}
        >
          여기는 Hero 섹션입니다.
          <br />
          메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
        </Typography>

        <Box sx={{ mt: 5, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'var(--color-button-primary)',
              color: '#fff',
              px: 4,
              '&:hover': { backgroundColor: 'var(--color-button-hover)' },
            }}
          >
            프로젝트 보기
          </Button>
          <Button
            variant="outlined"
            size="large"
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
            연락하기
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
