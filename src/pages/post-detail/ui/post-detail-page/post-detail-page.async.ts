import { lazy } from 'react';

export const PostDetailPage = lazy(
  () =>
    new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setTimeout(() => resolve(import('./post-detail-page')), 1000);
    }),
);
