import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

export default function AboutMe() {
  return (
    <Box
      sx={{
        backgroundColor: 'var(--color-bg-secondary)',
        minHeight: 'calc(100vh - 64px)',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
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
          About Me
        </Typography>

        <Divider
          sx={{ width: 48, mx: 'auto', my: 3, borderColor: 'var(--color-primary)', borderWidth: 2 }}
        />

        <Box
          sx={{
            mt: 4,
            p: { xs: 4, md: 6 },
            backgroundColor: 'var(--color-bg-primary)',
            border: '1px solid var(--color-border-light)',
            borderRadius: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: 'var(--color-text-secondary)', lineHeight: 2.2, fontSize: '1.05rem' }}
          >
            About Me 페이지가 개발될 공간입니다.
            <br />
            상세한 자기소개가 들어갈 예정입니다.
          </Typography>

          <Box
            sx={{
              mt: 4,
              pt: 4,
              borderTop: '1px solid var(--color-border-light)',
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
            }}
          >
            {['경력 / 학력', '가치관 & 개발 철학', '취미 & 관심사'].map((item) => (
              <Box
                key={item}
                sx={{
                  p: 2,
                  backgroundColor: 'var(--color-bg-tertiary)',
                  border: '1px dashed var(--color-border-mid)',
                  borderRadius: 1,
                }}
              >
                <Typography variant="body2" sx={{ color: 'var(--color-text-muted)' }}>
                  {item} 섹션이 들어갈 예정입니다
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
