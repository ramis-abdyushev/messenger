import './styles/index.scss';
import { AppRouter } from 'app/routes';
import { AppProvider } from 'app/providers';
import { Layout } from 'app/layout';

export function App() {
  return (
    <AppProvider>
      <div className="app">
        <Layout>
          <AppRouter />
        </Layout>
      </div>
    </AppProvider>
  );
}
