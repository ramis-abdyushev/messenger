import { lazy } from 'react';

export const ProductsPage = lazy(
  () =>
    new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setTimeout(() => resolve(import('./products-page')), 1000);
    }),
);
