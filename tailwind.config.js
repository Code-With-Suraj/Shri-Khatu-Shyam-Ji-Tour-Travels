/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            50: '#f0f5fa',
            100: '#e1ecf6',
            200: '#c2d8ed',
            300: '#94bde0',
            400: '#5f9dcf',
            500: '#387ebd',
            600: '#25639f',
            700: '#1d4f82',
            800: '#1a436c',
            900: '#0f2c4a',
            950: '#091c30',
          },
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
          gold: {
            400: '#facc15',
            500: '#eab308',
            600: '#ca8a04',
          },
          whatsapp: {
            DEFAULT: '#25D366',
            hover: '#20bd5a',
            dark: '#128C7E',
            light: '#dcf8c6',
          }
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(15, 44, 74, 0.08), 0 2px 6px -2px rgba(15, 44, 74, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(15, 44, 74, 0.12), 0 4px 12px -2px rgba(15, 44, 74, 0.06)',
        'cta': '0 10px 25px -5px rgba(234, 88, 12, 0.4), 0 8px 10px -6px rgba(234, 88, 12, 0.2)',
        'wa': '0 10px 25px -5px rgba(37, 211, 102, 0.4), 0 8px 10px -6px rgba(37, 211, 102, 0.2)',
      },
    },
  },
  plugins: [],
}
