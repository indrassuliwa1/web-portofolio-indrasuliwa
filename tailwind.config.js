/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          darkest: '#0c0517',
          deep: '#1A0B2E',
          purple: '#2D1B4E',
          mid: '#3C2064',
          card: 'rgba(45, 27, 78, 0.42)',
          cardLight: 'rgba(74, 43, 128, 0.35)',
          border: 'rgba(255, 255, 255, 0.12)',
          borderGlow: 'rgba(168, 85, 247, 0.35)',
          accent: '#A855F7',
          cyan: '#38BDF8',
          pink: '#F472B6',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(10, 4, 20, 0.37)',
        'glass-hover': '0 14px 40px 0 rgba(168, 85, 247, 0.22), 0 0 15px rgba(168, 85, 247, 0.15)',
        'cosmic': '0 0 25px rgba(168, 85, 247, 0.45), 0 0 50px rgba(56, 189, 248, 0.2)',
        'glow-cyan': '0 0 25px rgba(56, 189, 248, 0.4)',
      },
      backdropBlur: {
        glass: '16px',
        glassThick: '24px',
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
}
