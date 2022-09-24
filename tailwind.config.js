/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Owl : 'Owl',
        Sono : 'Sono',
        Hack : 'Hack',
        Futurist : 'Futurist',
        CocoGoose : 'CocoGoose',
        Crystal : 'Crystal',
        Roboto : 'Roboto'
      }
    },
  },
  
  plugins: [require('daisyui'),
  require('@tailwindcss/aspect-ratio'),],
  daisyui: {
    themes: [],
  }
}
