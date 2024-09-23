/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        'primary drak':'#bb2c51',
        'secondary': '#21d4b9',
        dark: '#303030'

      },
      fontFamily:{
        'display':['poppins'],
        'body': ['poppins']
      },
      container:{
        center: true,
        padding:{
          default: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        }
      }
      
      
    },
  },
  plugins: [],
}

