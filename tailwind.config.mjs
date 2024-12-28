/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        'kaya-dark': '#0A0A0A',
        'kaya-light': '#F5F5F5',
        'kaya-accent': '#FF3D00',
      },
    },
  },
  plugins: [],
}