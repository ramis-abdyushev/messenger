import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
}

export function StoreProvider(props: StoreProviderProps) {
  const { children } = props;

  return <Provider store={store}>{children}</Provider>;
}
