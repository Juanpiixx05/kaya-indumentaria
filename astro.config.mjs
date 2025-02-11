import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  output: 'static', // Asegúrate de que sea 'static'
  adapter: vercel(),
  integrations: [react(), tailwind()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  vite: {
    define: {
      'process.env.SUPABASE_KEY': JSON.stringify(process.env.SUPABASE_KEY)
    },
    server: {
      host: 'localhost',
      port: 3000,
      strictPort: true,
      watch: {
        usePolling: true
      }
    }
  }
});