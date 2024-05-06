import { ThemeOptions } from '@mui/material';

export const themeOptions = (mode: 'light' | 'dark'): ThemeOptions => {
  return {
    palette: {
      mode,
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
      background: {
        default: mode === 'light' ? '#fff' : '#22272E',
        paper: mode === 'light' ? '#fff' : '#002884',
      },
    },
  };
};
