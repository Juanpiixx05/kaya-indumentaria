import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server', // Obligatorio para APIs
  integrations: [react(), tailwind()],
  vite: {
    envPrefix: ['VITE_'], // Solo expone variables con este prefijo
    server: {
      host: 'localhost', // Fuerza dirección específica
      port: 4321, // Puerto fijo
      strictPort: true, // Evita cambios automáticos
      watch: {
        usePolling: true // Necesario en Windows/WSL
      }
    }
  }
});