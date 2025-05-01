import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router';

interface RouterProviderProps {
  children: ReactNode;
}

export function RouterProvider(props: RouterProviderProps) {
  const { children } = props;

  return <BrowserRouter>{children}</BrowserRouter>;
}
