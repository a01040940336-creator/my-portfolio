import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'

const slots = [1, 2, 3, 4, 5, 6]

export default function Projects() {
  return (
    <Box
      sx={{
        backgroundColor: 'var(--color-bg-secondary)',
        minHeight: 'calc(100vh - 64px)',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="overline"
            sx={{ color: 'var(--color-accent)', letterSpacing: 4 }}
          >
            Page
          </Typography>

          <Typography
            variant="h2"
            sx={{ mt: 1, mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem' }, fontWeight: 700 }}
          >
            Projects
          </Typography>

          <Divider
            sx={{ width: 48, mx: 'auto', my: 3, borderColor: 'var(--color-primary)', borderWidth: 2 }}
          />

          <Typography variant="body1" sx={{ color: 'var(--color-text-secondary)' }}>
            Projects 페이지가 개발될 공간입니다.
            <br />
            포트폴리오 작품들이 들어갈 예정입니다.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {slots.map((n) => (
            <Grid item xs={12} sm={6} md={4} key={n}>
              <Box
                sx={{
                  backgroundColor: 'var(--color-bg-primary)',
                  border: '1px dashed var(--color-border-mid)',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    borderColor: 'var(--color-accent)',
                    boxShadow: '0 4px 20px var(--color-shadow)',
                    borderStyle: 'solid',
                  },
                }}
              >
                <Box
                  sx={{
                    height: 160,
                    backgroundColor: 'var(--color-bg-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px dashed var(--color-border-light)',
                  }}
                >
                  <Typography variant="body2" sx={{ color: 'var(--color-text-muted)' }}>
                    Thumbnail {n}
                  </Typography>
                </Box>
                <Box sx={{ p: 2.5 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}
                  >
                    Project {n} 제목이 들어갈 예정입니다
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
