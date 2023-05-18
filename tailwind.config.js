/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [["./src/**/*.{html,js,tsx}"]],

  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ["Cantarell", "Roboto", "sedgwick", "sans-serif"],
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
