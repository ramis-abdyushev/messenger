import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import analyzer from 'vite-bundle-analyzer';

export default defineConfig((env) => ({
  plugins: [react(), tsconfigPaths(), env.mode === 'analyze' && analyzer()],
}));
