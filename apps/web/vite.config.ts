import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { lingui } from '@lingui/vite-plugin';
import macrosPlugin from 'vite-plugin-babel-macros';

export default defineConfig({
  root: __dirname,
  plugins: [reactRouter(), macrosPlugin(), lingui(), nxViteTsPaths()],
});
