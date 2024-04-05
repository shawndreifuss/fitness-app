/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

const config = withMT({
  content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
"./src/**/**/*.{js,ts,jsx,tsx}",
"./src/**/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: { // Feel free to name this key according to what this color palette represents to you
          50: "#eceff1",
          100: "#cfd8dc",
          200: "#b0bec5",
          300: "#90a4ae",
          400: "#78909c",
          500: "#607d8b",
          600: "#546e7a",
          700: "#455a64",
          800: "#37474f",
          900: "#263238",
        },
      },
    },
  },
  plugins: [],
});

module.exports = config;

