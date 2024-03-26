/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "green": "#12664F",
      "red": "#EB5160",
      "gray": "#87A0B2",
      "lightPurple": "#594157",
      "darkPurple": "#3E1929",
      "dark" : "#49405F",
    }
  },
  plugins: [
    require('flowbite/plugin')
],
}

