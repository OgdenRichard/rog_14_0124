import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Root = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};
