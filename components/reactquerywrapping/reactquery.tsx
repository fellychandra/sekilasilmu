'use client';
import React, { ReactNode, Suspense } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import Loading from '../loading';
import Header from '../header';

interface QueryRootWrapperProps {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function ReactQueryWrapper({ children }: QueryRootWrapperProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Suspense fallback={<Loading />}>
          <Header />
          {children}
        </Suspense>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default ReactQueryWrapper;
