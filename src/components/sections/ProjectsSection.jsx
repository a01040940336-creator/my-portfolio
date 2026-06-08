import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const placeholderProjects = [
  { id: 1, title: 'Project 01', desc: '프로젝트 설명이 들어갈 예정입니다.' },
  { id: 2, title: 'Project 02', desc: '프로젝트 설명이 들어갈 예정입니다.' },
  { id: 3, title: 'Project 03', desc: '프로젝트 설명이 들어갈 예정입니다.' },
]

export default function ProjectsSection() {
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
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="overline"
            sx={{ color: 'var(--color-accent)', letterSpacing: 4 }}
          >
            Work
          </Typography>
          <Typography
            variant="h3"
            sx={{ mt: 1, fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 600 }}
          >
            Projects 섹션
          </Typography>
          <Divider
            sx={{ width: 40, mx: 'auto', mt: 2, borderColor: 'var(--color-primary)', borderWidth: 2 }}
          />
          <Typography variant="body2" sx={{ mt: 2, color: 'var(--color-text-muted)' }}>
            여기는 Projects 섹션입니다. 대표작 썸네일 3개와 더보기 버튼이 들어갈 예정입니다.
          </Typography>
        </Box>

        {/* 썸네일 3개 가로 배치 */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 2.5,
            mb: 4,
          }}
        >
          {placeholderProjects.map((project) => (
            <Box
              key={project.id}
              sx={{
                backgroundColor: 'var(--color-bg-primary)',
                border: '1px solid var(--color-border-light)',
                borderRadius: 2,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': {
                  borderColor: 'var(--color-accent)',
                  boxShadow: '0 6px 24px rgba(26,26,26,0.10)',
                  transform: 'translateY(-3px)',
                },
              }}
            >
              {/* 썸네일 영역 */}
              <Box
                sx={{
                  height: { xs: 180, sm: 160, md: 180 },
                  backgroundColor: 'var(--color-bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid var(--color-border-light)',
                }}
              >
                <Typography variant="body2" sx={{ color: 'var(--color-text-muted)', letterSpacing: 1 }}>
                  Thumbnail {project.id}
                </Typography>
              </Box>

              {/* 카드 텍스트 */}
              <Box sx={{ px: 2.5, py: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, color: 'var(--color-text-primary)', mb: 0.5 }}
                >
                  {project.title}
                </Typography>
                <Typography variant="caption" sx={{ color: 'var(--color-text-muted)' }}>
                  {project.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* 더보기 아이콘 버튼 */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Tooltip title="전체 프로젝트 보기" placement="top">
            <IconButton
              component={Link}
              to="/projects"
              sx={{
                width: 52,
                height: 52,
                border: '1.5px solid var(--color-primary)',
                color: 'var(--color-accent)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: 'var(--color-primary-light)',
                  borderColor: 'var(--color-accent)',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
    </Box>
  )
}
