/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: '#E50914',
          black: '#141414',
        },
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#E50914',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        }
      },
      fontFamily: {
        'netflix': ['Bebas Neue', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-10px) rotate(0.5deg)' },
        },
        glow: {
          '0%, 100%': {
            textShadow: '0 0 20px rgba(229, 9, 20, 0.3), 0 0 40px rgba(229, 9, 20, 0.2)',
          },
          '50%': {
            textShadow: '0 0 25px rgba(229, 9, 20, 0.4), 0 0 50px rgba(229, 9, 20, 0.3)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(229, 9, 20, 0.3), 0 0 40px rgba(229, 9, 20, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(229, 9, 20, 0.4), 0 0 50px rgba(229, 9, 20, 0.3)',
          },
        },
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% center' },
          '50%': { backgroundPosition: '100% center' },
          '100%': { backgroundPosition: '0% center' },
        },
      },
      transitionTimingFunction: {
        'netflix': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}