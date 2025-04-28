import { lazy } from 'react';

export const MessagesPage = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./MessagesPage')), 1000);
    }),
);
