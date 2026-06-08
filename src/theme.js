import { createTheme } from '@mui/material/styles';

const palette = {
  primary:      '#D4B5A8',
  primaryLight: '#EAD8D0',
  primaryDark:  '#B8927F',
  secondary:    '#1A1A1A',
  accent:       '#C08B7A',
  bgPrimary:    '#FFFFFF',
  bgSecondary:  '#F5F3F1',
  bgTertiary:   '#F0EBE7',
  bgBanner:     '#E8746A',
  textPrimary:  '#1A1A1A',
  textSecond:   '#4A4A4A',
  textMuted:    '#8A8A8A',
  borderLight:  '#E8E2DD',
  borderMid:    '#D4CCC7',
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
    fontFamily: "'Apple SD Gothic Neo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
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
