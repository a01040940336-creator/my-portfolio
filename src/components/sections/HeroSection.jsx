import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { supabase } from '../../lib/supabase'

export default function HeroSection() {
  const [latest, setLatest] = useState(null)

  useEffect(() => {
    supabase
      .from('guestbook')
      .select('id, name, message, created_at')
      .order('created_at', { ascending: false })
      .limit(1)
      .then(({ data }) => { if (data?.length) setLatest(data[0]) })
  }, [])

  async function handleDelete() {
    if (!window.confirm('이 방명록을 삭제할까요?')) return
    const { error } = await supabase.from('guestbook').delete().eq('id', latest.id)
    if (!error) setLatest(null)
  }

  function scrollToEdit() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

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

        {/* 최신 방명록 프리뷰 */}
        {latest && (
          <Box
            sx={{
              mt: { xs: 3, sm: 0 },
              p: 2,
              border: '1px solid rgba(17,17,17,0.2)',
              maxWidth: { xs: '100%', sm: 260 },
              flexShrink: 0,
            }}
          >
            <Typography
              sx={{
                fontSize: '0.58rem',
                letterSpacing: '0.4em',
                color: 'rgba(17,17,17,0.5)',
                textTransform: 'uppercase',
                mb: 1,
              }}
            >
              Latest Note
            </Typography>
            <Typography
              sx={{
                fontSize: '0.82rem',
                color: 'var(--color-secondary)',
                fontWeight: 600,
                mb: 0.5,
              }}
            >
              {latest.name}
            </Typography>
            <Typography
              sx={{
                fontSize: '0.78rem',
                color: 'rgba(17,17,17,0.65)',
                lineHeight: 1.6,
                mb: 1.5,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {latest.message}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Typography
                component="button"
                onClick={scrollToEdit}
                sx={{
                  fontSize: '0.62rem', letterSpacing: '0.1em',
                  color: 'rgba(17,17,17,0.5)', background: 'none',
                  border: '1px solid rgba(17,17,17,0.25)',
                  px: 1.5, py: 0.4, cursor: 'pointer',
                  '&:hover': { color: 'var(--color-secondary)', borderColor: 'rgba(17,17,17,0.6)' },
                  transition: 'all 0.2s',
                }}
              >
                수정
              </Typography>
              <Typography
                component="button"
                onClick={handleDelete}
                sx={{
                  fontSize: '0.62rem', letterSpacing: '0.1em',
                  color: 'rgba(17,17,17,0.5)', background: 'none',
                  border: '1px solid rgba(17,17,17,0.25)',
                  px: 1.5, py: 0.4, cursor: 'pointer',
                  '&:hover': { color: '#A85A6A', borderColor: '#A85A6A' },
                  transition: 'all 0.2s',
                }}
              >
                삭제
              </Typography>
            </Box>
          </Box>
        )}

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
