/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5',
        },
        secondary: '#8b5cf6',
        accent: '#22d3ee',
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        background: {
          DEFAULT: '#0a0a0f',
          card: '#1a1a2e',
          elevated: '#252542',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
          muted: '#64748b',
        },
        border: '#2e2e4a',
      },
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
        'tajawal': ['Tajawal', 'sans-serif'],
      },
      borderRadius: {
        'default': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0,0,0,0.3)',
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.4)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'gradient-accent': 'linear-gradient(135deg, #22d3ee 0%, #6366f1 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 100%)',
      }
    },
  },
  plugins: [],
}
