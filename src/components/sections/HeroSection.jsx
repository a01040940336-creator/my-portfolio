import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'var(--color-primary)',
        px: { xs: 3, sm: 5, md: 8 },
        pt: { xs: 7, md: 9 },
        pb: { xs: 6, md: 8 },
      }}
    >
      {/* 초대형 헤드라인 — 좌측 정렬 */}
      <Typography
        variant="h1"
        sx={{
          fontWeight: 900,
          lineHeight: 1.0,
          letterSpacing: '-2px',
          color: 'var(--color-secondary)',
          fontSize: { xs: '3.6rem', sm: '5rem', md: '7rem', lg: '8.5rem' },
          mb: { xs: 4, md: 6 },
          maxWidth: 900,
        }}
      >
        이름.
        <br />
        포트폴리오.
      </Typography>

      {/* 하단 행: 소개 텍스트(좌) + pill 버튼(우) */}
      <Box
        sx={{
          display: 'flex',
          alignItems: { xs: 'flex-start', sm: 'center' },
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          gap: { xs: 3, sm: 0 },
          maxWidth: 900,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'var(--color-secondary)',
            fontSize: { xs: '0.95rem', md: '1rem' },
            lineHeight: 1.75,
            opacity: 0.8,
            maxWidth: 280,
          }}
        >
          메인 비주얼, 이름,<br />
          간단 소개가 들어갈 예정입니다.
        </Typography>

        <Button
          component={Link}
          to="/projects"
          variant="outlined"
          sx={{
            borderColor: 'var(--color-secondary)',
            color: 'var(--color-secondary)',
            borderRadius: '999px',
            px: { xs: 3.5, md: 4 },
            py: 1.2,
            fontSize: '0.9rem',
            fontWeight: 500,
            letterSpacing: 0.3,
            whiteSpace: 'nowrap',
            flexShrink: 0,
            '&:hover': {
              backgroundColor: 'var(--color-secondary)',
              color: 'var(--color-primary)',
              borderColor: 'var(--color-secondary)',
            },
            transition: 'all 0.2s ease',
          }}
        >
          프로젝트 보기
        </Button>
      </Box>
    </Box>
  )
}
