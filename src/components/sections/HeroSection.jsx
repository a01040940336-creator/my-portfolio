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
        pt: { xs: 8, md: 11 },
        pb: { xs: 7, md: 10 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 상단 레이블 */}
      <Typography
        sx={{
          fontSize: '0.68rem',
          letterSpacing: '0.45em',
          color: 'rgba(255,255,255,0.65)',
          textTransform: 'uppercase',
          mb: { xs: 4, md: 6 },
          fontWeight: 400,
        }}
      >
        Sueun An. — UI/UX Web Designer
      </Typography>

      {/* 메인 헤드라인 */}
      <Typography
        variant="h1"
        sx={{
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-1.5px',
          color: '#FFFFFF',
          fontSize: { xs: '2.6rem', sm: '3.6rem', md: '5rem', lg: '6rem' },
          mb: { xs: 5, md: 8 },
          maxWidth: 860,
          wordBreak: 'keep-all',
        }}
      >
        사용자의 경험을<br />
        디자인하는<br />
        웹디자이너.
      </Typography>

      {/* 하단: 서브카피(좌) + 버튼(우) */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'flex-end' },
          justifyContent: 'space-between',
          gap: { xs: 4, sm: 0 },
        }}
      >
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: { xs: '0.88rem', md: '0.95rem' },
            lineHeight: 1.9,
            maxWidth: 380,
            wordBreak: 'keep-all',
          }}
        >
          서비스업 경험을 통해 고객의 시선에서 생각하는 습관을 갖게 되었고,<br />
          이를 바탕으로 브랜드와 사용자를 연결하는 디자인을 추구합니다.
        </Typography>

        <Button
          component={Link}
          to="/projects"
          sx={{
            borderColor: 'rgba(255,255,255,0.6)',
            color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.6)',
            borderRadius: '999px',
            px: { xs: 4, md: 5 },
            py: 1.3,
            fontSize: '0.82rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            alignSelf: { xs: 'flex-start', sm: 'auto' },
            '&:hover': {
              backgroundColor: '#FFFFFF',
              color: 'var(--color-primary)',
              borderColor: '#FFFFFF',
            },
            transition: 'all 0.25s ease',
          }}
        >
          View Projects
        </Button>
      </Box>
    </Box>
  )
}
