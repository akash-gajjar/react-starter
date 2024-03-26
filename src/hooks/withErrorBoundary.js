import React, { Suspense } from 'react';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '#/components/ErrorFallback';

/**
 * Wrap component using `react-error-boundary`
 *
 * @typedef {import('react').ReactNode} Component
 *
 * @param {Component} Component
 * @param {*} ErrorFallbackComponent
 * @return {Component}
 */
const WithErrorBoundary = (Component, ErrorFallbackComponent) => {
  const Closure = (props) => {
    return (
      <Suspense fallback={<div>Loading</div>}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary onReset={reset} fallbackRender={ErrorFallbackComponent || ErrorFallback}>
              <Component {...props} />
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </Suspense>
    );
  };
  Closure.displayName = 'ComponentWithErrorBoundary';

  return Closure;
};

WithErrorBoundary.defaultProps = {
  ErrorFallbackComponent: ErrorFallback,
};

WithErrorBoundary.propTypes = {
  Component: PropTypes.node.isRequired,
  ErrorFallbackComponent: PropTypes.node,
};

export default WithErrorBoundary;
