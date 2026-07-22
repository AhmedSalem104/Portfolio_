/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          light: '#60a5fa',
          dark: '#1d4ed8',
        },
        secondary: '#7c3aed',
        accent: '#0d9488',
        success: '#059669',
        error: '#dc2626',
        warning: '#d97706',
        background: {
          DEFAULT: '#f7f9fc',
          card: '#ffffff',
          elevated: '#eef2ff',
        },
        text: {
          primary: '#0f172a',
          secondary: '#475569',
          muted: '#64748b',
        },
        border: '#e2e8f0',
      },
      fontFamily: {
        cairo: ['"Segoe UI Variable"', 'Inter', '"Segoe UI"', 'Arial', 'sans-serif'],
        tajawal: ['"Cascadia Code"', '"SFMono-Regular"', 'Consolas', 'monospace'],
      },
      borderRadius: {
        default: '0.5rem',
        lg: '0.625rem',
        xl: '0.75rem',
        '2xl': '0.875rem',
      },
      boxShadow: {
        soft: '0 10px 35px rgba(15, 23, 42, 0.07)',
        card: '0 20px 60px rgba(15, 23, 42, 0.09)',
        float: '0 24px 80px rgba(37, 99, 235, 0.18)',
        glow: '0 0 0 6px rgba(37, 99, 235, 0.08)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
        'gradient-accent': 'linear-gradient(135deg, #0d9488 0%, #2563eb 100%)',
        'gradient-dark': 'linear-gradient(145deg, #0f172a 0%, #172554 100%)',
      },
    },
  },
  plugins: [],
};
