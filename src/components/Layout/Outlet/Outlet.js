import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { Container } from './Outlet.styled';

import Loader from '#/components/Loader';

const OutletContainer = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <Outlet />
      </Container>
    </Suspense>
  );
};

export default OutletContainer;
