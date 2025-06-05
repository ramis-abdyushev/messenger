import { ReactNode, StrictMode } from 'react';
import { ThemeProvider } from '../theme-provider/theme-provider';
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
        <ThemeProvider>
          <StoreProvider>{children}</StoreProvider>
        </ThemeProvider>
      </RouterProvider>
    </StrictMode>
  );
}
