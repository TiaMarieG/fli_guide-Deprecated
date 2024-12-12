/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.{html,js,ejs}",
    "./public/**/*.{html,js,ejs}"
  ],
  theme: {
    extend: {
      colors: {
        'pancho': '#edccab',
        'cape-palliser': '#a67647'
      }
    },
  },
  plugins: [],
}

