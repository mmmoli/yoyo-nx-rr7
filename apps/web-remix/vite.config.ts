import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  plugins: [reactRouter(), nxViteTsPaths()],
});
