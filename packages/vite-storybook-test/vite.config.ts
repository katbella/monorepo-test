import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve('../amazing-component-library', 'src/index.ts'),
      name: 'AmazingComponentLibrary',
    },
  },
  plugins: [react()],
})
