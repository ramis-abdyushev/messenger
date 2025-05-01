import { ReactNode, StrictMode } from 'react';
import { StoreProvider } from 'app/store';
import { RouterProvider } from 'app/routes';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider(props: AppProviderProps) {
  const { children } = props;

  return (
    <StrictMode>
      <RouterProvider>
        <StoreProvider>{children}</StoreProvider>
      </RouterProvider>
    </StrictMode>
  );
}
