import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CircularProgress from '@mui/material/CircularProgress'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import { supabase } from '../../lib/supabase'

const CONTACT_INFO = [
  {
    icon: <EmailOutlinedIcon />,
    label: 'EMAIL',
    value: 'a01040940336@gmail.com',
    href: 'mailto:a01040940336@gmail.com',
  },
  {
    icon: <LocalPhoneOutlinedIcon />,
    label: 'PHONE',
    value: '010-4094-0336',
    href: null,
  },
  {
    icon: <PlaceOutlinedIcon />,
    label: 'LOCATION',
    value: 'Seoul, Korea',
    href: null,
  },
]

const SNS_LINKS = [
  { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/a01040940336-creator' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
  { icon: <InstagramIcon />, label: 'Instagram', href: '#' },
]

const EMPTY_FORM = { name: '', message: '', email: '', sns: '', keyword: '' }

export default function ContactSection() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [snack, setSnack] = useState({ open: false, msg: '', severity: 'success' })
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  useEffect(() => {
    fetchEntries()
  }, [])

  async function fetchEntries() {
    setLoading(true)
    const { data, error } = await supabase
      .from('guestbook')
      .select('id, name, message, keyword, sns, created_at')
      .order('created_at', { ascending: false })
      .limit(20)
    if (!error) setEntries(data)
    setLoading(false)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) return
    setSubmitting(true)
    const { error } = await supabase.from('guestbook').insert({
      name: form.name.trim(),
      message: form.message.trim(),
      email: form.email.trim() || null,
      sns: form.sns.trim() || null,
      keyword: form.keyword.trim() || null,
    })
    setSubmitting(false)
    if (error) {
      setSnack({ open: true, msg: '저장 중 오류가 발생했어요.', severity: 'error' })
    } else {
      setSnack({ open: true, msg: '방명록이 등록되었어요!', severity: 'success' })
      setForm(EMPTY_FORM)
      fetchEntries()
    }
  }

  async function deleteEntry(id) {
    if (!window.confirm('이 방명록을 삭제할까요?')) return
    const { error } = await supabase.from('guestbook').delete().eq('id', id)
    if (error) {
      setSnack({ open: true, msg: '삭제 중 오류가 발생했어요.', severity: 'error' })
    } else {
      setEntries((prev) => prev.filter((e) => e.id !== id))
      setSnack({ open: true, msg: '삭제되었어요.', severity: 'success' })
    }
  }

  async function saveEdit(id) {
    const trimmed = editText.trim()
    if (!trimmed) return
    const { error } = await supabase.from('guestbook').update({ message: trimmed }).eq('id', id)
    if (error) {
      setSnack({ open: true, msg: '수정 중 오류가 발생했어요.', severity: 'error' })
    } else {
      setEntries((prev) => prev.map((e) => (e.id === id ? { ...e, message: trimmed } : e)))
      setEditId(null)
      setEditText('')
      setSnack({ open: true, msg: '수정되었어요.', severity: 'success' })
    }
  }

  function formatDate(iso) {
    return new Date(iso).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const actionBtnSx = (hoverColor) => ({
    fontSize: '0.65rem',
    letterSpacing: '0.1em',
    color: 'var(--color-text-muted)',
    background: 'none',
    border: '1px solid var(--color-border-light)',
    borderRadius: '2px',
    px: 1.2,
    py: 0.4,
    cursor: 'pointer',
    lineHeight: 1.8,
    transition: 'color 0.2s, border-color 0.2s',
    '&:hover': { color: hoverColor, borderColor: hoverColor },
  })

  const inputSx = {
    '& .MuiInput-root': { fontSize: '0.9rem' },
    '& .MuiInput-underline:before': { borderBottomColor: 'var(--color-border-light)' },
    '& .MuiInput-underline:hover:before': { borderBottomColor: 'var(--color-border-mid)' },
    '& .MuiInput-underline:after': { borderBottomColor: 'var(--color-accent)' },
    '& label': { fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--color-text-muted)' },
    '& label.Mui-focused': { color: 'var(--color-accent)' },
  }

  return (
    <Box
      component="section"
      id="contact"
      sx={{ backgroundColor: 'var(--color-bg-primary)', py: { xs: 12, md: 16 } }}
    >
      <Container maxWidth="md">

        {/* ─── CONTACT 타이틀 ─── */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
          <Typography
            variant="overline"
            sx={{ fontSize: '0.6rem', letterSpacing: '0.5em', color: 'var(--color-text-muted)', display: 'block', mb: 1.5 }}
          >
            PORTFOLIO
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '2.8rem', md: '4rem' },
              fontWeight: 300,
              letterSpacing: '0.18em',
              color: 'var(--color-text-primary)',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}
          >
            Contact
          </Typography>
          <Box
            sx={{
              width: 36,
              height: '1px',
              backgroundColor: 'var(--color-accent)',
              mx: 'auto',
              mt: 3,
            }}
          />
        </Box>

        {/* ─── 연락처 카드 3열 ─── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            border: '1px solid var(--color-border-light)',
            mb: { xs: 6, md: 8 },
          }}
        >
          {CONTACT_INFO.map((item, i) => (
            <Box
              key={item.label}
              component={item.href ? 'a' : 'div'}
              href={item.href || undefined}
              sx={{
                p: { xs: 3.5, md: 4.5 },
                borderRight: {
                  sm: i < CONTACT_INFO.length - 1 ? '1px solid var(--color-border-light)' : 'none',
                },
                borderBottom: {
                  xs: i < CONTACT_INFO.length - 1 ? '1px solid var(--color-border-light)' : 'none',
                  sm: 'none',
                },
                textDecoration: 'none',
                display: 'block',
                transition: 'background-color 0.25s ease',
                '&:hover': {
                  backgroundColor: item.href ? 'var(--color-bg-secondary)' : 'transparent',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Box sx={{ color: 'var(--color-accent)', lineHeight: 0, '& svg': { fontSize: '0.95rem' } }}>
                  {item.icon}
                </Box>
                <Typography
                  variant="overline"
                  sx={{ fontSize: '0.58rem', letterSpacing: '0.35em', color: 'var(--color-text-muted)', lineHeight: 1 }}
                >
                  {item.label}
                </Typography>
              </Box>
              <Box sx={{ width: 20, height: '1px', backgroundColor: 'var(--color-border-light)', mb: 2 }} />
              <Typography
                sx={{ color: 'var(--color-text-primary)', fontSize: '0.85rem', fontWeight: 400, letterSpacing: '0.02em' }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* ─── SNS 아이콘 ─── */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mb: { xs: 10, md: 14 } }}>
          {SNS_LINKS.map((sns) => (
            <IconButton
              key={sns.label}
              component="a"
              href={sns.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={sns.label}
              sx={{
                color: 'var(--color-text-muted)',
                border: '1px solid var(--color-border-light)',
                borderRadius: 0,
                width: 44,
                height: 44,
                '& svg': { fontSize: '1.1rem' },
                transition: 'color 0.2s ease, border-color 0.2s ease',
                '&:hover': {
                  color: 'var(--color-accent)',
                  borderColor: 'var(--color-accent)',
                  backgroundColor: 'transparent',
                },
              }}
            >
              {sns.icon}
            </IconButton>
          ))}
        </Box>

        {/* ─── GUESTBOOK 타이틀 ─── */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{ fontSize: '0.6rem', letterSpacing: '0.5em', color: 'var(--color-text-muted)', display: 'block', mb: 1.5 }}
          >
            MESSAGES
          </Typography>
          <Typography
            component="h3"
            sx={{
              fontSize: { xs: '1.6rem', md: '2rem' },
              fontWeight: 300,
              letterSpacing: '0.2em',
              color: 'var(--color-text-primary)',
              textTransform: 'uppercase',
            }}
          >
            Guestbook
          </Typography>
          <Typography
            sx={{
              mt: 2,
              color: 'var(--color-text-muted)',
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
            }}
          >
            방문해주셔서 감사해요. 짧은 인사라도 남겨주세요.
          </Typography>
          <Box sx={{ width: 36, height: '1px', backgroundColor: 'var(--color-border-light)', mx: 'auto', mt: 3 }} />
        </Box>

        {/* ─── 방명록 폼 ─── */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            border: '1px solid var(--color-border-light)',
            p: { xs: 3.5, md: 5 },
            mb: { xs: 6, md: 8 },
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: { xs: 3, sm: 4 },
              mb: { xs: 3, sm: 4 },
            }}
          >
            <TextField
              required
              label="이름"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              variant="standard"
              fullWidth
              sx={inputSx}
            />
            <TextField
              label="한마디 키워드"
              value={form.keyword}
              onChange={(e) => setForm({ ...form, keyword: e.target.value })}
              variant="standard"
              fullWidth
              placeholder="디자이너, 개발자, 구경 왔어요 …"
              sx={inputSx}
            />
          </Box>

          <TextField
            required
            label="메시지"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            variant="standard"
            fullWidth
            multiline
            rows={3}
            sx={{ ...inputSx, mb: { xs: 3, sm: 4 } }}
          />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: { xs: 3, sm: 4 },
              mb: { xs: 4, sm: 5 },
            }}
          >
            <TextField
              label="이메일 (선택 · 비공개 저장)"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              variant="standard"
              fullWidth
              type="email"
              sx={inputSx}
            />
            <TextField
              label="SNS (선택)"
              value={form.sns}
              onChange={(e) => setForm({ ...form, sns: e.target.value })}
              variant="standard"
              fullWidth
              placeholder="@instagram / github.com/…"
              sx={inputSx}
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              type="submit"
              disabled={submitting || !form.name.trim() || !form.message.trim()}
              variant="outlined"
              sx={{
                borderColor: 'var(--color-text-primary)',
                color: 'var(--color-text-primary)',
                borderRadius: 0,
                px: 5,
                py: 1.5,
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                minWidth: 130,
                '&:hover': {
                  backgroundColor: 'var(--color-text-primary)',
                  color: '#FFFFFF',
                  borderColor: 'var(--color-text-primary)',
                },
                '&.Mui-disabled': {
                  borderColor: 'var(--color-border-light)',
                  color: 'var(--color-text-muted)',
                },
              }}
            >
              {submitting
                ? <CircularProgress size={14} sx={{ color: 'var(--color-text-muted)' }} />
                : 'Leave a note'}
            </Button>
          </Box>
        </Box>

        {/* ─── 방명록 목록 ─── */}
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress size={22} sx={{ color: 'var(--color-accent)' }} />
          </Box>
        ) : entries.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography
              sx={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', letterSpacing: '0.15em' }}
            >
              아직 방명록이 없어요. 첫 번째 방문자가 되어주세요.
            </Typography>
          </Box>
        ) : (
          <Box>
            {entries.map((entry, i) => (
              <Box
                key={entry.id}
                sx={{
                  py: { xs: 3.5, md: 4 },
                  borderTop: '1px solid var(--color-border-light)',
                  ...(i === entries.length - 1 && {
                    borderBottom: '1px solid var(--color-border-light)',
                  }),
                }}
              >
                {/* 헤더: 이름 + 키워드 + 날짜 + 액션 버튼 */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 2,
                    mb: 1.5,
                    flexWrap: 'wrap',
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: 'var(--color-text-primary)',
                      fontSize: '0.88rem',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {entry.name}
                  </Typography>
                  {entry.keyword && (
                    <Typography
                      sx={{
                        color: 'var(--color-accent)',
                        fontSize: '0.68rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        borderLeft: '1px solid var(--color-border-mid)',
                        pl: 2,
                      }}
                    >
                      {entry.keyword}
                    </Typography>
                  )}
                  <Typography
                    sx={{
                      color: 'var(--color-text-muted)',
                      fontSize: '0.68rem',
                      ml: 'auto',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {formatDate(entry.created_at)}
                  </Typography>

                  {/* 수정 / 삭제 버튼 */}
                  <Box sx={{ display: 'flex', gap: 1, ml: 1 }}>
                    {editId === entry.id ? (
                      <>
                        <Typography
                          component="button"
                          onClick={() => saveEdit(entry.id)}
                          sx={actionBtnSx('#22c55e')}
                        >
                          저장
                        </Typography>
                        <Typography
                          component="button"
                          onClick={() => { setEditId(null); setEditText('') }}
                          sx={actionBtnSx('var(--color-text-muted)')}
                        >
                          취소
                        </Typography>
                      </>
                    ) : (
                      <>
                        <Typography
                          component="button"
                          onClick={() => { setEditId(entry.id); setEditText(entry.message) }}
                          sx={actionBtnSx('var(--color-text-muted)')}
                        >
                          수정
                        </Typography>
                        <Typography
                          component="button"
                          onClick={() => deleteEntry(entry.id)}
                          sx={actionBtnSx('var(--color-accent)')}
                        >
                          삭제
                        </Typography>
                      </>
                    )}
                  </Box>
                </Box>

                {/* 본문: 수정 모드 or 일반 표시 */}
                {editId === entry.id ? (
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    rows={3}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: '1px solid var(--color-border-mid)',
                      borderRadius: '4px',
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.88rem',
                      lineHeight: 1.9,
                      padding: '8px 12px',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      outline: 'none',
                    }}
                  />
                ) : (
                  <Typography
                    sx={{
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.88rem',
                      lineHeight: 1.9,
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {entry.message}
                  </Typography>
                )}

                {entry.sns && (
                  <Typography
                    sx={{
                      display: 'block',
                      mt: 1,
                      color: 'var(--color-text-muted)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {entry.sns}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        )}
      </Container>

      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity={snack.severity}
          variant="filled"
          sx={{ borderRadius: 0, fontSize: '0.82rem' }}
          onClose={() => setSnack((s) => ({ ...s, open: false }))}
        >
          {snack.msg}
        </Alert>
      </Snackbar>
    </Box>
  )
}
