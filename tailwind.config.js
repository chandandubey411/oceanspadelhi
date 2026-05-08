/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50:  '#e6f4f9',
          100: '#cce9f3',
          200: '#99d3e7',
          300: '#66bcdb',
          400: '#33a6cf',
          500: '#0d6b8c',
          600: '#0a5570',
          700: '#083f54',
          800: '#052a38',
          900: '#03151c',
        },
        sand: {
          50:  '#fdf8f1',
          100: '#faf1e3',
          200: '#f5e3c7',
          300: '#edd5aa',
          400: '#dfc185',
          500: '#c9a97a',
          600: '#b08856',
          700: '#8c6a3e',
          800: '#664e2d',
          900: '#40301c',
        },
        gold: {
          300: '#f0d060',
          400: '#e5c040',
          500: '#d4af37',
          600: '#b8961e',
          700: '#9c7e10',
        },
        cream: '#faf7f2',
        charcoal: '#1a1a2e',
        'warm-white': '#fffdf9',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(135deg, #0d6b8c 0%, #1a4a6b 50%, #0a3352 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #b8961e 100%)',
        'cream-gradient': 'linear-gradient(180deg, #faf7f2 0%, #f5ede0 100%)',
        'hero-overlay': 'linear-gradient(to right, rgba(10,50,80,0.85) 0%, rgba(10,50,80,0.5) 60%, transparent 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'slide-in': 'slideIn 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212,175,55,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(212,175,55,0.7)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'luxury': '0 25px 60px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.1)',
        'gold': '0 10px 40px rgba(212,175,55,0.3)',
        'ocean': '0 10px 40px rgba(13,107,140,0.3)',
        'glass': 'inset 0 0 0 1px rgba(255,255,255,0.15), 0 20px 40px rgba(0,0,0,0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}