import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import { PROJECTS } from '../data/projects'

function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false)

  return (
    <Box
      sx={{
        backgroundColor: 'var(--color-bg-primary)',
        border: '1px solid var(--color-border-light)',
        overflow: 'hidden',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px) scale(1.01)',
          boxShadow: '0 16px 40px var(--color-shadow)',
          '& .card-buttons': { opacity: 1, transform: 'translateY(0)' },
        },
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      {/* 16:9 썸네일 */}
      <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden', flexShrink: 0 }}>
        {!imgError && project.thumbnail_url ? (
          <Box
            component="img"
            src={project.thumbnail_url}
            alt={project.title}
            onError={() => setImgError(true)}
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.35s ease',
              '&:hover': { transform: 'scale(1.04)' },
            }}
          />
        ) : (
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'var(--color-bg-tertiary)',
              backgroundImage:
                'repeating-linear-gradient(45deg, var(--color-border-light) 0px, var(--color-border-light) 1px, transparent 1px, transparent 14px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
              {project.title}
            </Typography>
          </Box>
        )}
      </Box>

      {/* 카드 본문 */}
      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* 제목 */}
        <Typography
          sx={{
            fontSize: '1.1rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--color-text-primary)',
            mb: 0.8,
          }}
        >
          {project.title}
        </Typography>

        {/* 한 줄 설명 */}
        <Typography
          sx={{
            fontSize: '0.85rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
            mb: 2,
            flex: 1,
          }}
        >
          {project.description}
        </Typography>

        {/* 기술 스택 뱃지 */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2.5 }}>
          {project.tech_stack?.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.03em',
                backgroundColor: 'var(--color-bg-tertiary)',
                color: 'var(--color-text-secondary)',
                border: '1px solid var(--color-border-light)',
                borderRadius: '4px',
                height: 24,
                '& .MuiChip-label': { px: 1.2 },
              }}
            />
          ))}
        </Box>

        {/* 버튼 영역 */}
        <Box
          className="card-buttons"
          sx={{
            display: 'flex',
            gap: 1.2,
            opacity: { xs: 1, md: 0.7 },
            transform: { xs: 'none', md: 'translateY(4px)' },
            transition: 'opacity 0.25s ease, transform 0.25s ease',
          }}
        >
          <Button
            component="a"
            href={project.detail_url}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              flex: 1,
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              backgroundColor: 'var(--color-secondary)',
              color: '#fff',
              borderRadius: '4px',
              py: 0.9,
              '&:hover': { backgroundColor: 'var(--color-button-hover)' },
              transition: 'background-color 0.2s ease',
            }}
          >
            Live Demo ↗
          </Button>
          <Button
            component="a"
            href={project.detail_url}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            variant="outlined"
            sx={{
              flex: 1,
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              borderColor: 'var(--color-border-mid)',
              color: 'var(--color-text-secondary)',
              borderRadius: '4px',
              py: 0.9,
              '&:hover': {
                borderColor: 'var(--color-accent)',
                color: 'var(--color-accent)',
                backgroundColor: 'transparent',
              },
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default function Projects() {
  const projects = PROJECTS

  return (
    <Box
      sx={{
        backgroundColor: 'var(--color-bg-secondary)',
        minHeight: 'calc(100vh - 64px)',
        py: { xs: 7, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* 헤더 */}
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Typography
            sx={{
              fontSize: '0.68rem',
              letterSpacing: '0.45em',
              color: 'var(--color-accent)',
              textTransform: 'uppercase',
              mb: 1.5,
            }}
          >
            Portfolio
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--color-text-primary)',
              lineHeight: 1.1,
            }}
          >
            Projects.
          </Typography>
        </Box>

        {/* 카드 그리드 */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '20px', md: '24px' },
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
