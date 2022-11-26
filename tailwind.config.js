/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'fondo': "url('/src/assets/updo.png')",
        'peluqueria': "url('/src/assets/peluqueria.jpg')",
        'letras': "url('/src/assets/letras.png')",
        'ellos': "url('/src/assets/elloslogo.png')",
        'ellas': "url('/src/assets/ellaslogo.png')",
        'logos': "url('/src/assets/logos2.png')",


      }
    },
  },
  plugins: [],
}
