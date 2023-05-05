/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ["./src/**/*.{html,js,tsx}"],
  ],

  theme: {
    extend: {},
    fontFamily: {
      sans: ['Cantarell', 'Roboto', 'Sedgwick Ave', 'sans-serif'],
    },

  },
  plugins: [require('prettier-plugin-tailwindcss')],
}

