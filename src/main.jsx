import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import './index.css';
import './styles/accessibility.css';
import App from './App.jsx';
import { store } from './redux/store';
import { queryClient } from './queryClient';
import ErrorBoundary from './components/common/ErrorBoundary';
import { AccessibilityProvider } from './contexts/AccessibilityContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <AccessibilityProvider>
              <BrowserRouter>
                <App />
                <Toaster position="top-right" />
                <ReactQueryDevtools initialIsOpen={false} />
              </BrowserRouter>
            </AccessibilityProvider>
          </HelmetProvider>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
