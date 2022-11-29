/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");
module.exports = {
  darkMode:"class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          950: "#C6FFDD",
        },
      },
    },
  },
  plugins: [],
};
