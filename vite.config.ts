import { defineConfig } from 'vite'
import { resolve } from 'path'
import TailwindCSS from '@tailwindcss/vite'
import { VitePluginRadar } from 'vite-plugin-radar'
import viteImagemin from 'vite-plugin-imagemin'
import Sitemap from 'vite-plugin-sitemap'
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig(({ mode }) => ({
  appType: 'mpa',
  plugins: [
    TailwindCSS(),
    Sitemap({ hostname: 'https://www.legacy-boxing.com' }),
    VitePluginRadar({
      analytics: {
        id: 'G-9LQ8HHZE9B',
      },
    }),
    injectHTML(),
    viteImagemin({
      webp: {
        quality: 30,
      },
    }),
  ],
  build: {
    outDir: "./dist",
    cacheDir: '.vite',
    emptyOutDir: true,
    minify: mode === 'development' ? false : 'esbuild',
    sourcemap: mode === 'development' ? true : false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        courses: resolve(__dirname, 'pages/courses/index.html'),
        membership: resolve(__dirname, 'pages/membership/index.html'),
        gallery: resolve(__dirname, 'pages/gallery/index.html'),
        contact: resolve(__dirname, 'pages/contact/index.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    }
  },
}))
