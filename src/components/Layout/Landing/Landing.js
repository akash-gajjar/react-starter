import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { Container } from './Landing.styled';

import Loader from '#/components/Loader';

const Landing = () => {
  return (
    <Suspense fallback={Loader}>
      <Container>
        <Outlet />
        <div>Footer</div>
      </Container>
    </Suspense>
  );
};

export default Landing;
