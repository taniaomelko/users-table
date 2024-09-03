/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      black: '#000',
      white: '#fff',
      'dark-blue': '#1E1E2C',
      cyan: '#0266d1',
      'dark-grey': '#4d4d4d',
      grey: '#c1c1c1',
      'light-grey': '#e8e8e8',
    },
    extend: {
      screens: {
        tablet: '768px',
        laptop: '1024px',
        desktop: '1280px',
      },
      spacing: {
        4: '4px',
        10: '10px',
        20: '20px',
        40: '40px',
      },
      height: {
        8: '8px',
      },
      width: {
        8: '8px',
      },
      minWidth: {
        150: '150px',
      },
      maxWidth: {
        1290: '1290px',
      },
      borderRadius: {
        small: '4px',
        medium: '10px',
      },
      fontSize: {
        14: '14px',
        16: '16px',
      },
      lineHeight: {
        15: 1.5,
      },
      fontFamily: {
        nunito: 'Nunito, sans-serif',
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

