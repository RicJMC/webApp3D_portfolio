import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react/dist/index.cjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
