import { useMemo, useState } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import { themeOptions } from './config/themeOptions';
import { ThemeContext } from '@/shared/context';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const theme = useMemo(
    () => ({
      mode,
      toggle: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [mode],
  );

  const muiTheme = useMemo(() => createTheme(themeOptions(mode)), [mode]);

  return (
    <ThemeContext.Provider value={theme}>
      <MUIThemeProvider theme={muiTheme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
