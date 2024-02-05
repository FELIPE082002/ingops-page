/* eslint-env node */
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner-background': "url('src/assets/circles.png')",
      },
      fontFamily: {
        sans: ['Alata', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
