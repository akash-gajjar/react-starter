import React from 'react';

import WithErrorBoundary from '#/hooks/withErrorBoundary';
import { StyledContainer } from './Landing.styled';

const Landing = () => {
  return (
    <StyledContainer>
      Hi!
    </StyledContainer>
  );
};

export default WithErrorBoundary(Landing);
