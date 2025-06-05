/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0284c7',         // azul medio
        accent: '#14b8a6',          // turquesa vibrante
        secondary: '#0f766e',       // turquesa oscuro
        'light-blue': '#7dd3fc',    // azul claro para brillos
        'soft-turquoise': '#e0f2fe',// azul muy suave (fondos)
        'light-bg': '#f0f9ff',      // fondo celestial
        dark: '#0c4a6e',            // azul profundo (textos)
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
