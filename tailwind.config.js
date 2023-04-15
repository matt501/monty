/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ["./src/**/*.{html,js,tsx}"],
  ],

  theme: {
    extend: {},
    fontFamily: {
      'lato': ['Lato', 'sans-serif']
    },

  },
  plugins: [require('prettier-plugin-tailwindcss')],
}

