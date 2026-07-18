/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        'primary-hover': '#1d4ed8',
        secondary: '#0f172a',
        surface: '#f8fafc',
        muted: '#64748b',
      },
    },
  },
  plugins: [],
};
