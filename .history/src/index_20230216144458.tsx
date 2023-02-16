import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppRouter, { router } from './router';
import { GlobalStyle } from './styledComponents/styledComponents';
import { mainTheme } from './styledComponents/theme';
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@src/react-query/queryClient';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if (process.env.NODE_ENV === 'development') {
  alert('현재 개발서버');
} else {
  alert('현재배포서버');
}

root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={mainTheme}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <AppRouter />
        </RecoilRoot>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  </>
);
