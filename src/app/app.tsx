import './styles/index.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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
