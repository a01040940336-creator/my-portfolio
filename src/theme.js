import { createTheme } from '@mui/material/styles';

const palette = {
  primary:      '#8D6E63',
  primaryLight: '#E5DDD5',
  primaryDark:  '#6D4C41',
  secondary:    '#222222',
  accent:       '#8D6E63',
  bgPrimary:    '#FFFFFF',
  bgSecondary:  '#F5F2ED',
  bgTertiary:   '#E5DDD5',
  bgBanner:     '#222222',
  textPrimary:  '#222222',
  textSecond:   '#4A4040',
  textMuted:    '#9E8E85',
  borderLight:  '#E5DDD5',
  borderMid:    '#C8BAB2',
};

const theme = createTheme({
  palette: {
    primary: {
      main:  palette.primary,
      light: palette.primaryLight,
      dark:  palette.primaryDark,
    },
    secondary: {
      main: palette.secondary,
    },
    background: {
      default: palette.bgSecondary,
      paper:   palette.bgPrimary,
    },
    text: {
      primary:   palette.textPrimary,
      secondary: palette.textSecond,
      disabled:  palette.textMuted,
    },
    divider: palette.borderLight,
  },
  typography: {
    fontFamily: "'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: { color: palette.textPrimary, fontWeight: 700 },
    h2: { color: palette.textPrimary, fontWeight: 600 },
    h3: { color: palette.textPrimary, fontWeight: 600 },
    h4: { color: palette.textPrimary, fontWeight: 500 },
    body1: { color: palette.textSecond },
    body2: { color: palette.textMuted },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: palette.secondary,
          color: '#FFFFFF',
          '&:hover': { backgroundColor: '#3A3030' },
        },
        outlinedPrimary: {
          borderColor: palette.primary,
          color: palette.accent,
          '&:hover': {
            borderColor: palette.primaryDark,
            backgroundColor: palette.primaryLight,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${palette.borderLight}`,
          boxShadow: `0 2px 12px rgba(34,34,34,0.06)`,
          '&:hover': {
            borderColor: palette.accent,
            boxShadow: `0 4px 20px rgba(34,34,34,0.10)`,
          },
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.bgSecondary,
          color: palette.textPrimary,
          boxShadow: `0 1px 0 ${palette.borderLight}`,
        },
      },
    },
  },
});

export { palette };
export default theme;
