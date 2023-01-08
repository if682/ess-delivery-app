import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange, amber } from '@mui/material/colors';
import { ReactNode } from 'react';

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: object,
      secondary: object,
    }
  }
  // allow configuration using `createTheme`
}

interface ThemeProps {
  children: ReactNode
}

const theme = createTheme({
  palette: {
    primary: orange,
    secondary: amber,
  },
});

export default function AppTheme({ children }: ThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}