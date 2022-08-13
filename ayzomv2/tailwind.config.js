/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}