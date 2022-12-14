/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-bg": "#F4F4F4",
        "nav-bg": "white",
        "nav-txt-color": "#333868",
        "primary-text": "#525168",
        "secondary-text": "#828282",
        "blue-bg": "#3C3A5F",
      },
      fontFamily: {
        sans: ["Karla", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
