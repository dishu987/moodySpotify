import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from 'sass'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@emotion/styled'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});


