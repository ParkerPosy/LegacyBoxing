import { defineConfig } from 'vite'
import { resolve } from 'path'
import TailwindCSS from '@tailwindcss/vite'
import { VitePluginRadar } from 'vite-plugin-radar'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig(({ mode }) => ({
  appType: 'mpa',
  plugins: [
    TailwindCSS(),
    VitePluginRadar({
      analytics: {
        id: 'G-9LQ8HHZE9B',
      },
    }),
    viteImagemin({
      webp: {
        quality: 20,
      },
      optipng: {
        optimizationLevel: 5,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
        ],
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
        pricing: resolve(__dirname, 'pages/pricing/index.html'),
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
