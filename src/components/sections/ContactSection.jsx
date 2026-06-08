import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export default function ContactSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'var(--color-bg-primary)',
        py: { xs: 8, md: 10 },
        borderTop: '1px solid var(--color-border-light)',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="overline"
            sx={{ color: 'var(--color-accent)', letterSpacing: 4 }}
          >
            Contact
          </Typography>
          <Typography
            variant="h3"
            sx={{ mt: 1, fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 600 }}
          >
            Contact 섹션
          </Typography>
          <Divider
            sx={{ width: 40, mx: 'auto', mt: 2, borderColor: 'var(--color-primary)', borderWidth: 2 }}
          />
          <Typography variant="body2" sx={{ mt: 2, color: 'var(--color-text-muted)' }}>
            여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
          </Typography>
        </Box>

        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2.5,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="이름"
                variant="outlined"
                size="small"
                sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'var(--color-border-light)' } } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="이메일"
                variant="outlined"
                size="small"
                sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'var(--color-border-light)' } } }}
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            label="메시지"
            multiline
            rows={4}
            variant="outlined"
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'var(--color-border-light)' } } }}
          />
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              backgroundColor: 'var(--color-button-primary)',
              color: '#fff',
              py: 1.5,
              '&:hover': { backgroundColor: 'var(--color-button-hover)' },
            }}
          >
            메시지 보내기
          </Button>
        </Box>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'var(--color-text-muted)', mb: 1 }}>
            SNS 링크가 들어갈 예정입니다
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
            {['GitHub', 'LinkedIn', 'Instagram'].map((sns) => (
              <Typography
                key={sns}
                variant="body2"
                sx={{
                  color: 'var(--color-accent)',
                  cursor: 'pointer',
                  '&:hover': { color: 'var(--color-primary-dark)' },
                }}
              >
                {sns}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
