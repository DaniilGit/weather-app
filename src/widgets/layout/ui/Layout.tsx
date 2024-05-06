import { Header } from '@/widgets/header';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <Container sx={{ py: 6 }}>
        <Outlet />
      </Container>
    </>
  );
};
