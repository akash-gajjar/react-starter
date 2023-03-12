import { QueryClient } from '@tanstack/react-query';

/**
@typedef {import('@tanstack/react-query').QueryClient} queryClient
@returns {queryClient}
*/
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
    },
  },
});

export default queryClient;
