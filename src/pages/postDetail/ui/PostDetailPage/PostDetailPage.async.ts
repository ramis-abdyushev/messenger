import { lazy } from 'react';

export const PostDetailPage = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./PostDetailPage')), 1000);
    }),
);
