import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/VideoMemoria/", // Cambia "VideoMemoria" por el nombre EXACTO de tu repositorio
  plugins: [react()],
});

