/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#009688',
          light: '#00C48C',
        },
        secondary: '#0288D1',
        success: '#43A047',
        error: '#E53935',
        background: '#F5F7FB',
        text: {
          primary: '#333333',
          secondary: '#777777',
        }
      },
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
        'tajawal': ['Tajawal', 'sans-serif'],
      },
      borderRadius: {
        'default': '8px',
        'lg': '12px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
}
