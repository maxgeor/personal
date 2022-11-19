const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: colors.white,
      gray: colors.stone,
    },
    extend: {
      fontFamily: {
        'pt-serif': ["PT Serif", "serif"],
        'noto-serif': ["Noto Serif", "serif"],
        'crimson-pro': ["Crimson Pro", "serif"],
        'crimson-text': ["Crimson Text", "serif"],
        'baskerville': ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
}