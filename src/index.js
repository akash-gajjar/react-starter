import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './styles/normalise.scss';

import App from './App';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

import '#/assets/fonts/stylesheet.css';
import Favicon from '#/components/Favicon';
import queryClient from '#/utils/queryClient';

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
          <h1 className="bg-red-900 text-white">Hello world</h1>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
