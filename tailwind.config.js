/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat-Regular'],
        'mont-bold': ['Montserrat-Bold'],
        'mont-medium': ['Montserrat-Medium'],
        'mont-light': ['Montserrat-Light'],
        comfortaa: ['Comfortaa-Regular'],
        'comfortaa-bold': ['Comfortaa-Bold'],
        'comfortaa-light': ['Comfortaa-Light'],
      },
      colors: {
        'tropical-indigo': '#9F85FF',
        ghost: '#F9F8FF',
        tuatura: '#242423',
        watermelon: '#FF6978',
        helio: '#7E5BFF',
        tickle: '#FF85AB',
        candy: '#FFC2E2',
        mauve: '#D4ABEF',
      },
    },
  },
  plugins: [],
}
