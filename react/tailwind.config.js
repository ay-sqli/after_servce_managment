/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
            "./**/*.{html,js}",

],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}