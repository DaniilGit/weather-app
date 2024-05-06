import { AppBar, Container, Toolbar } from '@mui/material';
import { ThemeToggle } from '@/widgets/theme-toggle';
import { HeaderLogo } from './HeaderLogo';

export const Header = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar variant="dense" disableGutters sx={{ justifyContent: 'space-between' }}>
          <HeaderLogo />
          <ThemeToggle />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
