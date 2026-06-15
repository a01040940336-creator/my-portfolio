import { createTheme } from '@mui/material/styles';

const palette = {
  primary:      '#F9B5C8',
  primaryLight: '#FCE0EA',
  primaryDark:  '#E8849F',
  secondary:    '#111111',
  accent:       '#E8849F',
  bgPrimary:    '#FFFFFF',
  bgSecondary:  '#FFF5F8',
  bgTertiary:   '#FCE8F0',
  bgBanner:     '#111111',
  textPrimary:  '#111111',
  textSecond:   '#333333',
  textMuted:    '#888888',
  borderLight:  '#F5D5DF',
  borderMid:    '#E8BFCC',
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
          '&:hover': { backgroundColor: '#3A3A3A' },
        },
        outlinedPrimary: {
          borderColor: palette.primary,
          color: palette.accent,
          '&:hover': {
            borderColor: palette.accent,
            backgroundColor: palette.primaryLight,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${palette.borderLight}`,
          boxShadow: `0 2px 12px rgba(26,26,26,0.08)`,
          '&:hover': {
            borderColor: palette.accent,
            boxShadow: `0 4px 20px rgba(26,26,26,0.12)`,
          },
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.bgPrimary,
          color: palette.textPrimary,
          boxShadow: `0 1px 0 ${palette.borderLight}`,
        },
      },
    },
  },
});

export { palette };
export default theme;
