/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2446d8',
          light: '#4f6be5',
          dark: '#17319e',
        },
        secondary: '#e9673f',
        accent: '#087f72',
        success: '#18794e',
        error: '#c43d3d',
        warning: '#a45b12',
        background: {
          DEFAULT: '#f3f0e8',
          card: '#fffdf8',
          elevated: '#e9e5da',
        },
        text: {
          primary: '#182027',
          secondary: '#46515a',
          muted: '#667078',
        },
        border: '#c8c6bd',
      },
      fontFamily: {
        'cairo': ['"Segoe UI Variable"', '"Segoe UI"', 'Arial', 'sans-serif'],
        'tajawal': ['ui-monospace', 'Consolas', 'monospace'],
      },
      borderRadius: {
        'default': '2px',
        'lg': '4px',
        'xl': '6px',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(24, 32, 39, 0.08)',
        'glow': '3px 3px 0 rgba(36, 70, 216, 0.18)',
        'glow-lg': '5px 5px 0 rgba(36, 70, 216, 0.2)',
        'card': '4px 4px 0 #d9d5ca',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #2446d8 0%, #2446d8 72%, #e9673f 72%, #e9673f 100%)',
        'gradient-accent': 'linear-gradient(90deg, #087f72 0%, #2446d8 100%)',
        'gradient-dark': 'linear-gradient(180deg, #fffdf8 0%, #f3f0e8 100%)',
      }
    },
  },
  plugins: [],
}
