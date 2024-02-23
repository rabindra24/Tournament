/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#181A1B',
        secondary : '#F8102C',
        title : '#FFF',
        para : '#969696',
      },
      backgroundImage : {
        gradient : 'linear-gradient(106deg, #F8102C 0%, #FA4606 98.51%);',
      },
      backgroundColor : {
        darkbox : '#0F1012;',
        lightbox : '#2D2D2D',
      }
    },
  },
  plugins: [],
}