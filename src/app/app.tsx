import './styles/index.scss';
import { Sidebar } from 'widgets/sidebar';
import { AppRouter } from 'app/routes';
import { AppProvider } from 'app/providers';

export function App() {
  return (
    <AppProvider>
      <div className="app">
        <Sidebar />
        <AppRouter />
      </div>
    </AppProvider>
  );
}
