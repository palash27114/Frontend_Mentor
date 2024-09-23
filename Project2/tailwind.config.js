/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily:{
        'figtree': ['Figtree', 'sans-serif'],
        'custom-offset': '10px 10px 0px 0px rgba(0, 0, 0, 0.25)', // No blur, no spread
      }
    },
  },
  plugins: [],
}

