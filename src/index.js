import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './styles/normalise.css';

import App from './App';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

import Favicon from '#/components/Favicon';
import queryClient from '#/utils/queryClient';
import '#/assets/fonts/stylesheet.css';

const container = document.getElementById('root');
const root = createRoot(container, {});
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools position="bottom-right" />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle theme={theme} />
          <Favicon />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
