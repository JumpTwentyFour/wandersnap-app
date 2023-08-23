/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat-Regular'],
        'mont-bold': ['Montserrat-Bold'],
        'mont-light': ['Montserrat-Light'],
        comfortaa: ['Comfortaa-Regular'],
        'comfortaa-bold': ['Comfortaa-Bold'],
        'comfortaa-light': ['Comfortaa-Light'],
      },
    },
  },
  plugins: [],
}
