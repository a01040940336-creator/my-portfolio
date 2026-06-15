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
      <Typography
        variant="h1"
        sx={{
          fontWeight: 900,
          lineHeight: 1.0,
          letterSpacing: '-2px',
          color: 'var(--color-secondary)',
          fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4.2rem', lg: '5rem' },
          mb: { xs: 4, md: 6 },
          maxWidth: 900,
        }}
      >
        Sueun An.
        <br />
        Portfolio.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: { xs: 'flex-start', sm: 'space-between' },
          gap: { xs: 3, sm: 0 },
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
          UI/UX Web Designer<br />
          Based in Korea.
        </Typography>

        <Button
          component={Link}
          to="/projects"
          variant="outlined"
          sx={{
            borderColor: 'var(--color-secondary)',
            color: 'var(--color-secondary)',
            borderRadius: '999px',
            px: { xs: 4, md: 4 },
            py: 1.2,
            fontSize: '0.9rem',
            fontWeight: 500,
            letterSpacing: 0.3,
            whiteSpace: 'nowrap',
            flexShrink: 0,
            alignSelf: { xs: 'center', sm: 'auto' },
            '&:hover': {
              backgroundColor: 'var(--color-secondary)',
              color: 'var(--color-primary)',
              borderColor: 'var(--color-secondary)',
            },
            transition: 'all 0.2s ease',
          }}
        >
          View Projects
        </Button>
      </Box>
    </Box>
  )
}
