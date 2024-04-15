/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#353232',
        secondary: '#d18d29',
        third: '#ffffeb'
      },
      fontFamily: {
        'boucherie-sans': ['boucherie-sans', 'sans-serif'],
        'alata': ['Alata', 'sans-serif'],
        'lemon-milk': ['lemon-milk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}