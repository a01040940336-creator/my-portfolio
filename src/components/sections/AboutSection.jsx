import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const values = [
  {
    num: '01',
    title: '사용자 이해',
    desc: '좋은 디자인은 사용자를 이해하는 것에서 시작된다.',
  },
  {
    num: '02',
    title: '배움과 발전',
    desc: '벤치마킹을 통해 배우고 나만의 방식으로 발전시킨다.',
  },
  {
    num: '03',
    title: '도전과 성장',
    desc: '끊임없이 도전하며 성장한다.',
  },
]

export default function AboutSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'var(--color-bg-secondary)',
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="md">

        {/* 섹션 레이블 */}
        <Typography
          sx={{
            fontSize: '0.65rem',
            letterSpacing: '0.45em',
            color: 'var(--color-accent)',
            textTransform: 'uppercase',
            mb: 2,
          }}
        >
          About
        </Typography>

        {/* 스토리 헤드라인 */}
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.8rem', md: '2.6rem' },
            fontWeight: 700,
            letterSpacing: '-0.5px',
            lineHeight: 1.25,
            color: 'var(--color-text-primary)',
            mb: { xs: 4, md: 5 },
            maxWidth: 560,
            wordBreak: 'keep-all',
          }}
        >
          브랜드와 사용자 사이,<br />그 경험을 디자인합니다.
        </Typography>

        {/* 스토리 본문 */}
        <Box
          sx={{
            borderLeft: '2px solid var(--color-primary)',
            pl: { xs: 3, md: 4 },
            mb: { xs: 6, md: 8 },
          }}
        >
          <Typography
            sx={{
              color: 'var(--color-text-secondary)',
              fontSize: { xs: '0.92rem', md: '0.98rem' },
              lineHeight: 2.1,
              wordBreak: 'keep-all',
            }}
          >
            국제통상학을 전공한 후 의류·서비스 업종에서 고객과 가장 가까운 곳에서 경험을 쌓았습니다.
            고객이 브랜드를 경험하는 과정에 관심을 가지게 되었고, 자연스럽게 디자인과 사용자 경험에
            매력을 느끼며 웹디자인 분야에 도전하게 되었습니다.
          </Typography>
          <Typography
            sx={{
              color: 'var(--color-text-muted)',
              fontSize: { xs: '0.88rem', md: '0.92rem' },
              lineHeight: 2,
              mt: 2,
              wordBreak: 'keep-all',
            }}
          >
            비전공자로 시작해 어려움도 있었지만, 꾸준한 학습과 프로젝트 경험을 통해
            디자인 역량을 키워가고 있습니다.
          </Typography>
        </Box>

        {/* 핵심 가치관 */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          {values.map((v, i) => (
            <Box
              key={v.num}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: { xs: 3, md: 4 },
                py: 3,
                borderTop: '1px solid var(--color-border-light)',
                ...(i === values.length - 1 && {
                  borderBottom: '1px solid var(--color-border-light)',
                }),
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.62rem',
                  letterSpacing: '0.15em',
                  color: 'var(--color-accent)',
                  fontWeight: 600,
                  flexShrink: 0,
                  mt: 0.4,
                }}
              >
                {v.num}
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    letterSpacing: '0.02em',
                    mb: 0.5,
                  }}
                >
                  {v.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.7,
                    wordBreak: 'keep-all',
                  }}
                >
                  {v.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* 더 알아보기 버튼 */}
        <Box sx={{ display: 'flex' }}>
          <Button
            component={Link}
            to="/about"
            sx={{
              borderBottom: '1px solid var(--color-text-primary)',
              borderRadius: 0,
              color: 'var(--color-text-primary)',
              fontSize: '0.75rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              px: 0,
              pb: 0.5,
              '&:hover': {
                color: 'var(--color-accent)',
                borderColor: 'var(--color-accent)',
                backgroundColor: 'transparent',
              },
              transition: 'color 0.2s, border-color 0.2s',
            }}
          >
            About Me 더 보기 ↗
          </Button>
        </Box>

      </Container>
    </Box>
  )
}
