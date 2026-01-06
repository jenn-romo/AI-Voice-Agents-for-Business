/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#161616', // primary dark
          blue: '#60B7E3', // primary blue
        },
        secondary: {
          gray: '#E7E7E7', // light gray
          blue: '#A4D6EF', // soft blue
        },
        accent: {
          red: '#FF0000',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}