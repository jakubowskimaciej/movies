import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './constants/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        gray: {
          main: '#37474F',
          dark: '#263238',
          light: '#546E7A',
          lighter: '#B0BEC5',
          lightest: '#D9D9D9',
          link: '#444444',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
