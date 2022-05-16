import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteAliases } from 'vite-aliases'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteAliases({
      useTypescript: true,
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //     '@assets': path.resolve(__dirname, './src/assets'),
  //     '@components': path.resolve(__dirname, './src/components'),
  //     '@layouts': path.resolve(__dirname, './src/layouts'),
  //     '@pages': path.resolve(__dirname, './src/pages'),
  //     '@plugins': path.resolve(__dirname, './src/plugins'),
  //     '@services': path.resolve(__dirname, './src/services'),
  //   },
  // },
})
