import { lazy } from 'react';

export const PostsPage = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./PostsPage')), 1000);
    }),
);
