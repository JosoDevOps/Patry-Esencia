/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Escalas cromáticas base
        blue: {
          light: '#7dd3fc',
          DEFAULT: '#0284c7',
          dark: '#075985',
        },
        turquoise: {
          light: '#5eead4',
          DEFAULT: '#14b8a6',
          dark: '#0f766e',
        },

        // Alias de uso directo
        primary: '#0284c7',
        accent: '#14b8a6',
        secondary: '#4a235a',
        'light-blue': '#7dd3fc',
        'soft-turquoise': '#e0f2fe',
        'light-bg': '#f0f9ff',
        dark: '#0c4a6e',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
