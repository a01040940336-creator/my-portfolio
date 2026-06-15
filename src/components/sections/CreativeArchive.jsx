import { useState, useEffect, useCallback } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const FOLDERS = [
  { name: 'GRAPHIC\nDESIGN', color: '#e8dfd2', tab: '6%',  offset: 0,   seed: 101 },
  { name: 'UI/UX',           color: '#f4ebe1', tab: '33%', offset: 20,  seed: 202 },
  { name: 'TYPOGRAPHY',      color: '#e7d7cf', tab: '57%', offset: -10, seed: 303 },
  { name: 'BRANDING',        color: '#d7c3b4', tab: '6%',  offset: 14,  seed: 404 },
  { name: 'POSTERS',         color: '#efd5c7', tab: '33%', offset: -6,  seed: 505 },
  { name: 'EDITORIAL',       color: '#f3e9dc', tab: '57%', offset: 24,  seed: 606 },
  { name: 'MOTION',          color: '#e8dfd2', tab: '6%',  offset: 6,   seed: 707 },
  { name: 'PHOTOGRAPHY',     color: '#efd5c7', tab: '33%', offset: -16, seed: 808 },
  { name: 'PINTEREST',       color: '#f4ebe1', tab: '57%', offset: 12,  seed: 909 },
  { name: 'WEB DESIGN',      color: '#d7c3b4', tab: '33%', offset: -4,  seed: 110 },
]

const getImages = (seed) =>
  Array.from({ length: 12 }, (_, i) => ({
    src: `https://picsum.photos/seed/${seed + i * 13}/600/600`,
    id: seed + i * 13,
  }))

export default function CreativeArchive() {
  const [openFolder, setOpenFolder] = useState(null)

  const close = useCallback(() => setOpenFolder(null), [])

  useEffect(() => {
    if (!openFolder) return
    const onKey = (e) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openFolder, close])

  useEffect(() => {
    document.body.style.overflow = openFolder ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [openFolder])

  return (
    <Box sx={{ backgroundColor: '#f6f2eb', pt: { xs: 10, md: 14 }, pb: { xs: 8, md: 12 } }}>

      {/* ── 폴더 그리드 ── */}
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(5, 1fr)',
        },
        columnGap: { xs: 1.5, md: 1 },
        rowGap: { xs: '60px', md: '72px' },
        px: { xs: 3, sm: 4, md: 6 },
        pb: 4,
      }}>
        {FOLDERS.map((folder, i) => (
          <FolderCard
            key={folder.name}
            folder={folder}
            index={i}
            onOpen={() => setOpenFolder(folder)}
          />
        ))}
      </Box>

      {/* ── 룩북 모달 ── */}
      {openFolder && (
        <LookbookModal folder={openFolder} onClose={close} />
      )}
    </Box>
  )
}

/* ─────────── FOLDER CARD ─────────── */
function FolderCard({ folder, index, onOpen }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Box
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: 'relative',
        transform: `translateY(${hovered ? folder.offset - 8 : folder.offset}px) scale(${hovered ? 1.03 : 1})`,
        zIndex: hovered ? 30 : index + 1,
        transition: 'transform 0.3s ease, z-index 0s',
        cursor: 'pointer',
        willChange: 'transform',
      }}
    >
      {/* 탭 (상단 돌출부) */}
      <Box sx={{
        position: 'absolute',
        top: -28,
        left: folder.tab,
        width: '36%',
        height: 28,
        backgroundColor: folder.color,
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        filter: hovered ? 'brightness(0.95)' : 'brightness(1)',
        transition: 'filter 0.3s ease',
        zIndex: 1,
      }} />

      {/* 폴더 본체 */}
      <Box sx={{
        position: 'relative',
        zIndex: 2,
        backgroundColor: folder.color,
        height: { xs: 130, md: 170 },
        borderRadius: '0 3px 3px 3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        boxShadow: hovered
          ? '0 16px 36px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)'
          : '0 2px 6px rgba(0,0,0,0.05)',
        filter: hovered ? 'brightness(0.96)' : 'brightness(1)',
        transition: 'box-shadow 0.3s ease, filter 0.3s ease',
      }}>
        <Typography sx={{
          fontFamily: '"Inter", "Noto Sans KR", sans-serif',
          fontSize: { xs: '0.72rem', md: '0.82rem' },
          fontWeight: 700,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          color: '#1a1a1a',
          textAlign: 'center',
          lineHeight: 1.25,
          whiteSpace: 'pre-line',
          userSelect: 'none',
        }}>
          {folder.name}
        </Typography>
      </Box>
    </Box>
  )
}

/* ─────────── LOOKBOOK MODAL ─────────── */
function LookbookModal({ folder, onClose }) {
  const images = getImages(folder.seed)
  const displayName = folder.name.replace('\n', ' ')

  return (
    <Box
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 1300,
        backgroundColor: 'rgba(10,10,10,0.60)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        p: { xs: 0, md: 3 },
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          backgroundColor: '#FAFAF8',
          width: '100%',
          maxWidth: { xs: '100%', md: 980 },
          maxHeight: { xs: '92vh', md: '90vh' },
          overflowY: 'auto',
          borderRadius: { xs: '12px 12px 0 0', md: '2px' },
          position: 'relative',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {/* 헤더 */}
        <Box sx={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          backgroundColor: '#FAFAF8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 3, md: 6 },
          pt: { xs: 3.5, md: 5 },
          pb: 2.5,
          borderBottom: '1px solid #E5E0D8',
        }}>
          <Box>
            <Typography sx={{
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              color: '#9a9080',
              textTransform: 'uppercase',
              mb: 0.5,
            }}>
              Creative Archive
            </Typography>
            <Typography sx={{
              fontFamily: '"Inter", "Noto Sans KR", sans-serif',
              fontSize: { xs: '1.3rem', md: '1.8rem' },
              fontWeight: 700,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: '#111111',
              lineHeight: 1,
            }}>
              {displayName}
            </Typography>
          </Box>

          {/* 닫기 */}
          <Box
            onClick={onClose}
            sx={{
              cursor: 'pointer',
              width: 36, height: 36,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#888',
              fontSize: '1rem',
              border: '1px solid #DDD',
              borderRadius: '2px',
              flexShrink: 0,
              '&:hover': { color: '#111', borderColor: '#111' },
              transition: 'all 0.2s ease',
              userSelect: 'none',
            }}
          >
            ✕
          </Box>
        </Box>

        {/* 갤러리 그리드 */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: { xs: 1, md: 1.5 },
          p: { xs: 2, md: 4 },
        }}>
          {images.map((img, i) => (
            <GalleryImage key={img.id} src={img.src} index={i} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

/* ─────────── GALLERY IMAGE ─────────── */
function GalleryImage({ src, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        aspectRatio: '1 / 1',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#E8E4DF',
      }}
    >
      <Box
        component="img"
        src={src}
        alt=""
        loading="lazy"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.4s ease',
          filter: 'saturate(0.9) contrast(1.02)',
        }}
      />
      {/* 번호 레이블 */}
      <Typography sx={{
        position: 'absolute',
        bottom: 8, left: 10,
        fontSize: '0.6rem',
        color: 'rgba(255,255,255,0.7)',
        fontFamily: '"Playfair Display", serif',
        fontStyle: 'italic',
        userSelect: 'none',
        textShadow: '0 1px 3px rgba(0,0,0,0.3)',
      }}>
        {String(index + 1).padStart(2, '0')}
      </Typography>
    </Box>
  )
}
