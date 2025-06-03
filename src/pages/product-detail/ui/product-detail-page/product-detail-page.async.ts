import { lazy } from 'react';

export const ProductDetailPage = lazy(
  () =>
    new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setTimeout(() => resolve(import('./product-detail-page')), 1000);
    }),
);
