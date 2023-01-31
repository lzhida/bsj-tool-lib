import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      name: 'index',
      fileName: (format) => `index.${format}.js`,
      entry: path.resolve(__dirname, 'src/index.ts'),
    },
  },
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['vue'],
  },
});
