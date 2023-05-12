/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ["./src/**/*.{html,js,tsx}"],
  ],

  theme: {
    extend: {},
    fontFamily: {
      sans: ['Cantarell', 'Roboto', 'sedgwick', 'sans-serif'],
    },

  },
  plugins: [require('prettier-plugin-tailwindcss')],
}

