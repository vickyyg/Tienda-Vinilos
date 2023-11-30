import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Ajusta esta ruta base según la ruta de tu página en GitHub Pages
export default defineConfig({
  base: ' https://vickyyg.github.io/Tienda-Vinilos/',
  plugins: [react()]
});
