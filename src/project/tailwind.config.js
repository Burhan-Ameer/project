/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        edu:[' Edu AU VIC WA NT Hand',' cursive;'],
      },

animation:{

'spin-slow':'spin  3s linear infinite'
},
     colors:{
        crimson:"#FF5733"
      },
      screens:{
'xs':{'min':'320px','max':'640px'}
      }
    },
  },
  plugins: [],
}

