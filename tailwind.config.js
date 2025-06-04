/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          light: '#7dd3fc',  /* light blue */
          DEFAULT: '#0284c7', /* medium blue */
          dark: '#075985',    /* dark blue */
        },
        'turquoise': {
          light: '#5eead4',  /* light turquoise */
          DEFAULT: '#14b8a6', /* medium turquoise */
          dark: '#0f766e',    /* dark turquoise */
        },
        'misty': '#f0f9ff',  /* very light sky blue */
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}