import React from 'react';

import { StyledContainer } from './Landing.styled';

import WithErrorBoundary from '#/hooks/withErrorBoundary';

const Landing = () => {
  return <StyledContainer>Hi!</StyledContainer>;
};

export default WithErrorBoundary(Landing);
