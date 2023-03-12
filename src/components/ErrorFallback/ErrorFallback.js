import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './ErrorFallback.styled';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <Container role="alert">
      <div>Error Image</div>
      <div>Something went wrong!</div>
      <div>{error?.message}</div>
      <button type="button" onClick={() => resetErrorBoundary()}>
        Try Again
      </button>
    </Container>
  );
};

ErrorFallback.propTypes = {
  error: PropTypes.shape({ message: PropTypes.string }).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorFallback;
