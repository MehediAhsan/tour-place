/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Berkshire': ['Berkshire Swash', 'cursive'],
        'Lato': ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}