import { lazy } from 'react';

export const PostsPage = lazy(
  () =>
    new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setTimeout(() => resolve(import('./posts-page')), 1000);
    }),
);
