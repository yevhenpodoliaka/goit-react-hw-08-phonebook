import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Container } from 'GlobalStyle';

export default function Layout () {
  return (
    <>
      
      <Container>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

