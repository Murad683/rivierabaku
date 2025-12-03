/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBg: '#4B5554',
        lightBg: '#F5F5F5',
        cardBg: '#F5EFE7',
        textMain: '#111111',
        textMuted: '#4C4F48',
        accentGold: '#E3B56A',
        accentRed: '#C49B75',
        secondarySand: '#C49B75',
        textLight: '#F5F3EE',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
