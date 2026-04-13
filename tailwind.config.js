/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#C17B2A',
          light: '#D4941F',
          dark: '#A06520',
        },
        dark: {
          DEFAULT: '#111110',
          surface: '#1A1A18',
          card: '#222220',
          border: '#2E2E2B',
        },
        cream: '#F5F0E8',
        muted: '#A89F8C',
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
