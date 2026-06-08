import { useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Chip from '@mui/material/Chip'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const allProjects = [
  {
    id: 1,
    badge: '대표 프로젝트',
    title: 'Project 01',
    desc: '프로젝트 한 줄 소개가 들어갈 예정입니다.',
    tags: ['React', 'MUI'],
    period: '2024.03',
  },
  {
    id: 2,
    badge: '추천 프로젝트',
    title: 'Project 02',
    desc: '프로젝트 한 줄 소개가 들어갈 예정입니다.',
    tags: ['Python', 'FastAPI'],
    period: '2024.06',
  },
  {
    id: 3,
    badge: null,
    title: 'Project 03',
    desc: '프로젝트 한 줄 소개가 들어갈 예정입니다.',
    tags: ['Node.js', 'MongoDB'],
    period: '2024.09',
  },
  {
    id: 4,
    badge: null,
    title: 'Project 04',
    desc: '프로젝트 한 줄 소개가 들어갈 예정입니다.',
    tags: ['React', 'TypeScript'],
    period: '2024.12',
  },
]

const PAGE_SIZE = 3

export default function ProjectsSection() {
  const [page, setPage] = useState(0)
  const maxPage = Math.ceil(allProjects.length / PAGE_SIZE) - 1
  const visible = allProjects.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'var(--color-bg-secondary)',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="md">
        {/* 헤더 */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 1.5 }}
          >
            Projects 섹션
          </Typography>
          <Typography variant="body2" sx={{ color: 'var(--color-text-muted)' }}>
            대표작 썸네일과 설명이 들어갈 예정입니다.
          </Typography>
          <Divider sx={{ width: 40, mx: 'auto', mt: 3, borderColor: 'var(--color-primary)', borderWidth: 2 }} />
        </Box>

        {/* 카드 + 좌우 화살표 */}
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          {/* 왼쪽 화살표 */}
          <IconButton
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            sx={{
              position: 'absolute',
              left: { xs: -16, md: -40 },
              zIndex: 1,
              color: page === 0 ? 'var(--color-border-mid)' : 'var(--color-text-secondary)',
              '&:hover': { color: 'var(--color-accent)' },
            }}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>

          {/* 카드 3개 */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: 0,
              width: '100%',
              border: '1px solid var(--color-border-light)',
              borderRadius: 2,
              overflow: 'hidden',
              backgroundColor: 'var(--color-bg-primary)',
            }}
          >
            {visible.map((project, idx) => (
              <Box
                key={project.id}
                sx={{
                  borderRight: idx < visible.length - 1
                    ? '1px solid var(--color-border-light)'
                    : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* 썸네일 */}
                <Box sx={{ position: 'relative' }}>
                  <Box
                    sx={{
                      height: 240,
                      backgroundColor: 'var(--color-bg-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="body2" sx={{ color: 'var(--color-text-muted)' }}>
                      Thumbnail {project.id}
                    </Typography>
                  </Box>
                  {/* 배지 */}
                  {project.badge && (
                    <Typography
                      variant="caption"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 14,
                        color: 'var(--color-accent)',
                        fontWeight: 500,
                        fontSize: '0.72rem',
                        letterSpacing: 0.3,
                        backgroundColor: 'rgba(255,255,255,0.85)',
                        px: 1,
                        py: 0.3,
                        borderRadius: 0.5,
                      }}
                    >
                      {project.badge}
                    </Typography>
                  )}
                </Box>

                {/* 카드 내용 */}
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    px: 3,
                    pt: 2.5,
                    pb: 2,
                    borderTop: '1px solid var(--color-border-light)',
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, color: 'var(--color-text-primary)', mb: 0.5 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'var(--color-text-muted)', mb: 2, lineHeight: 1.7 }}
                  >
                    {project.desc}
                  </Typography>

                  {/* 태그 */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2 }}>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: 'var(--color-primary-light)',
                          color: 'var(--color-primary-dark)',
                          border: '1px solid var(--color-primary)',
                          fontSize: '0.72rem',
                          height: 22,
                        }}
                      />
                    ))}
                  </Box>

                  {/* 기간 */}
                  <Typography variant="caption" sx={{ color: 'var(--color-text-muted)', mb: 2 }}>
                    {project.period}
                  </Typography>

                  {/* CTA 버튼 */}
                  <Button
                    component={Link}
                    to="/projects"
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 'auto',
                      backgroundColor: 'var(--color-button-primary)',
                      color: '#fff',
                      borderRadius: 0.5,
                      py: 1.2,
                      fontSize: '0.82rem',
                      letterSpacing: 0.5,
                      '&:hover': { backgroundColor: 'var(--color-button-hover)' },
                    }}
                  >
                    프로젝트 보기
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>

          {/* 오른쪽 화살표 */}
          <IconButton
            onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
            disabled={page === maxPage}
            sx={{
              position: 'absolute',
              right: { xs: -16, md: -40 },
              zIndex: 1,
              color: page === maxPage ? 'var(--color-border-mid)' : 'var(--color-text-secondary)',
              '&:hover': { color: 'var(--color-accent)' },
            }}
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </Box>

        {/* 페이지 인디케이터 */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
          {Array.from({ length: maxPage + 1 }).map((_, i) => (
            <Box
              key={i}
              onClick={() => setPage(i)}
              sx={{
                width: i === page ? 20 : 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: i === page ? 'var(--color-accent)' : 'var(--color-border-mid)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
