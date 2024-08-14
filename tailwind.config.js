/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
   extend: {
      colors:{
        lightBlue : "#404EED"
      },
      fontFamily: {
        ggsans: ["ggsans"],
        GintoNord: ["Ginto-Nord"],
        ggsansN:["ggsans-normal"]
        
      },
      spacing: {
        '30' : '120px'
      }
    },
  },
  plugins: [],
}

