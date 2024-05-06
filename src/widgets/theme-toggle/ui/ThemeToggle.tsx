import IconButton from '@mui/material/IconButton';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useContext } from 'react';
import { ThemeContext } from '@/shared/context/ThemeContext';

export const ThemeToggle = () => {
  const theme = useContext(ThemeContext);

  return (
    <IconButton sx={{ width: 40, height: 40 }} color="inherit" onClick={theme.toggle}>
      {theme.mode === 'dark' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};
