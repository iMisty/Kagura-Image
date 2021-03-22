/*
 * @Author: Miya
 * @Date: 2021-03-15 11:14:06
 * @LastEditTime: 2021-03-22 14:37:36
 * @LastEditors: Miya
 * @Description: vite config
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\vite.config.ts
 * @Version: 1.0
 */
import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJSX from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7478,
    proxy: {
      '/api': {
        target: 'http://localhost:12450/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [vue(), vueJSX()],
});
