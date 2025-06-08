import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
