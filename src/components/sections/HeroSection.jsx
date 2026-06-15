import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const GRAIN = `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/></filter><rect width='300' height='300' filter='url(%23g)' opacity='0.12'/></svg>")`

const LABELS = ['WEB DESIGNER', 'UI/UX DESIGNER', 'CREATIVE THINKER']

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#f8f6f2',
        height: '100vh',
        minHeight: 560,
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* ── 좌측 상단 레이블 ── */}
      <Box sx={{
        position: 'absolute',
        top: { xs: 22, md: 38 },
        left: { xs: 22, md: 52 },
        zIndex: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 0.3,
      }}>
        {LABELS.map((label) => (
          <Typography key={label} sx={{
            fontSize: '0.52rem',
            letterSpacing: '0.3em',
            color: '#888888',
            textTransform: 'uppercase',
            lineHeight: 1.9,
            fontWeight: 400,
          }}>
            {label}
          </Typography>
        ))}
      </Box>

      {/* ── 우측 상단 연도 ── */}
      <Typography sx={{
        position: 'absolute',
        top: { xs: 22, md: 38 },
        right: { xs: 22, md: 52 },
        zIndex: 4,
        fontSize: '0.52rem',
        letterSpacing: '0.3em',
        color: '#aaaaaa',
        textTransform: 'uppercase',
      }}>
        © 2025
      </Typography>

      {/* ── 우측 이미지 ── */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: { xs: '48%', sm: '44%', md: '40%' },
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
      }}>
        {/* 그레인 오버레이 */}
        <Box sx={{
          position: 'absolute', inset: 0, zIndex: 2,
          backgroundImage: GRAIN,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
          opacity: 0.6,
          pointerEvents: 'none',
        }} />
        {/* 좌측 페이드 */}
        <Box sx={{
          position: 'absolute', inset: 0, zIndex: 3,
          background: 'linear-gradient(to right, #f8f6f2 0%, transparent 30%)',
          pointerEvents: 'none',
        }} />
        <Box
          component="img"
          src="https://picsum.photos/seed/sueun-hero/900/1200"
          alt=""
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
            filter: 'grayscale(80%) saturate(0.3) contrast(1.06) brightness(0.96)',
          }}
        />
      </Box>

      {/* ── 장식용 수직 라인 ── */}
      <Box sx={{
        display: { xs: 'none', md: 'block' },
        position: 'absolute',
        top: '18%',
        right: '40%',
        width: '1px',
        height: '28%',
        backgroundColor: '#c8b8a6',
        opacity: 0.35,
        zIndex: 4,
      }} />

      {/* ══════════════════════════════
          메인 타이포그래피
      ══════════════════════════════ */}
      <Box sx={{
        position: 'absolute',
        left: { xs: 22, md: 52 },
        top: '50%',
        transform: 'translateY(-52%)',
        zIndex: 4,
        maxWidth: { xs: '65%', md: '58%' },
      }}>

        {/* 손글씨 서브 텍스트 */}
        <Typography sx={{
          fontFamily: '"Dancing Script", cursive',
          fontSize: { xs: '0.85rem', md: '1rem' },
          color: '#c8b8a6',
          letterSpacing: '0.02em',
          mb: { xs: 1, md: 1.5 },
          lineHeight: 1,
        }}>
          creative archive
        </Typography>

        {/* AN */}
        <Box
          component="h1"
          sx={{
            m: 0, p: 0,
            fontSize: 'clamp(4.2rem, 11vw, 11rem)',
            fontWeight: 800,
            letterSpacing: '-0.07em',
            lineHeight: 0.85,
            color: '#111111',
            display: 'block',
            userSelect: 'none',
          }}
        >
          AN
        </Box>

        {/* SUEUN — 살짝 들여쓰기 */}
        <Box
          component="span"
          sx={{
            display: 'block',
            fontSize: 'clamp(4.2rem, 11vw, 11rem)',
            fontWeight: 800,
            letterSpacing: '-0.07em',
            lineHeight: 0.85,
            color: '#111111',
            ml: { xs: '0.08em', md: '0.14em' },
            userSelect: 'none',
          }}
        >
          SUEUN
        </Box>

        {/* since 2025 */}
        <Typography sx={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '0.6rem',
          fontStyle: 'italic',
          color: '#bbbbbb',
          letterSpacing: '0.18em',
          mt: { xs: 2, md: 3.5 },
        }}>
          — since 2025
        </Typography>
      </Box>

      {/* ── 하단 좌측 "selected works" ── */}
      <Typography sx={{
        position: 'absolute',
        bottom: { xs: 54, md: 44 },
        left: { xs: 22, md: 52 },
        zIndex: 4,
        fontFamily: '"Dancing Script", cursive',
        fontSize: { xs: '0.82rem', md: '0.95rem' },
        color: '#c8b8a6',
        letterSpacing: '0.02em',
      }}>
        selected works
      </Typography>

      {/* ── 하단 우측 "visual diary" ── */}
      <Typography sx={{
        display: { xs: 'none', md: 'block' },
        position: 'absolute',
        bottom: 44,
        right: 52,
        zIndex: 4,
        fontFamily: '"Playfair Display", serif',
        fontSize: '0.52rem',
        fontStyle: 'italic',
        color: '#bbbbbb',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
      }}>
        visual diary
      </Typography>

      {/* ── 스크롤 유도 ── */}
      <Box sx={{
        position: 'absolute',
        bottom: { xs: 22, md: 22 },
        left: { xs: 22, md: 52 },
        zIndex: 4,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}>
        <Typography sx={{
          fontSize: '0.48rem',
          letterSpacing: '0.38em',
          color: '#bbbbbb',
          textTransform: 'uppercase',
        }}>
          Scroll
        </Typography>
        <Typography sx={{
          fontSize: '0.65rem',
          color: '#c8b8a6',
          lineHeight: 1,
        }}>
          ↓
        </Typography>
      </Box>

    </Box>
  )
}
