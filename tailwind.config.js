/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#2c3e50",
      },
      keyframes: {
        'social-bounce': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '30%': { transform: 'translateY(-8px) scale(1.1)' },
          '60%': { transform: 'translateY(-2px) scale(1.05)' },
        },
      },
      animation: {
        'social-bounce': 'social-bounce 0.4s ease-out',
      },
    },
  },
  corePlugins: {
    textColor: true,
    backgroundColor: true,
  },
  plugins: [],
}

