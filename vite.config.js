import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/VideoMemoria/",  // Asegúrate de cambiarlo por el nombre de tu repo en GitHub
  plugins: [react()],
});
