import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  // Indique à Vite que tous les assets seront servis sous /chertier-creative-flow/
  base: '/chertier-creative-flow/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Optionnel : si vous avez besoin de config Tailwind / PostCSS,
  // Vite les prendra en compte automatiquement s’ils sont présents.
})
