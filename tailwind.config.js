/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor :{
        'primary' : 'rgb(85 81 227)',
        'Secondary' : '#2b2d77',
      }
    },
    fontFamily : {
      'hero-font' :  'Poppins'
  }
},
  plugins: [],
}

