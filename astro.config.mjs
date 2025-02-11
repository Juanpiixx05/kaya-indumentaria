import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server', // Obligatorio para APIs
  integrations: [react(), tailwind()],
  vite: {
    define: {
      'process.env.SUPABASE_KEY': JSON.stringify(process.env.SUPABASE_KEY)
    },
    server: {
      host: 'localhost', // Fuerza dirección específica
      port: 3000, // Puerto fijo
      strictPort: true, // Evita cambios automáticos
      watch: {
        usePolling: true // Necesario en Windows/WSL
      }
    }
  }
});