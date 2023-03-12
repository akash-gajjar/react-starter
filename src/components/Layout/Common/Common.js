import React from 'react';

import Outlet from '../Outlet';

import { Container } from './Common.styled';

const Common = () => {
  return (
    <Container color="white" bg="raisinBlack">
      <Outlet />
    </Container>
  );
};

export default Common;
