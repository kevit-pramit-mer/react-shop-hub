import { QueryClient } from '@tanstack/react-query';

// Configure TanStack Query client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Stale time - Data considered fresh for 5 minutes
      staleTime: 5 * 60 * 1000,
      
      // Cache time - Data kept in cache for 10 minutes
      cacheTime: 10 * 60 * 1000,
      
      // Retry failed requests 3 times
      retry: 3,
      
      // Retry delay increases exponentially
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      
      // Refetch on window focus
      refetchOnWindowFocus: false,
      
      // Refetch on reconnect
      refetchOnReconnect: true,
      
      // Refetch on mount if data is stale
      refetchOnMount: true,
      
      // Error handling
      onError: (error) => {
        console.error('Query Error:', error);
      },
    },
    mutations: {
      // Retry mutations once
      retry: 1,
      
      // Error handling for mutations
      onError: (error) => {
        console.error('Mutation Error:', error);
      },
    },
  },
});

export default queryClient;
