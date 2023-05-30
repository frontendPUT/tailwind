/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'ocean': '#458F98'
      },
      backgroundImage:{
        'golfKalinowePola': "url(./assets/golf_kalinowe_pola.jpg)"
      }
    },
  },
  plugins: [
    require('tailwind-clip-path')
  ],
}