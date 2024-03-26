import React from 'react';

import { StyledContainer } from './Landing.styled';

import ReactLogo from '#/assets/images/react.svg?react';
import WithErrorBoundary from '#/hooks/withErrorBoundary';

const Landing = () => {
  return (
    <StyledContainer>
      <ReactLogo width={150} />
    </StyledContainer>
  );
};

export default WithErrorBoundary(Landing);
