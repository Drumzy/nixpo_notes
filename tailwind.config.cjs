/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*{jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "maize-crayola":{
          100: "#F5DD8F",
          200: "#F3D77C",
          300: "#F1D26A",
          400: "#EFCC57",
          500: "#EEC643",
          600: "#ECC032",
          700: "#EABB1F",
          800: "#E0B115",
          900: "#CDA213",
        },
        "eerie-black":{
          DEFAULT: "#141414",
          500:"#292929"
        },
        "cultured":{
          DEFAULT :"#EEF0F2"
        },
        "blue-pantone":{
          100: "#1D38ED",
          200: "#122EE2",
          300: "#112AD0",
          400: "#0f26BD",
          500: "#0D21A1",
          600: "#0C1F97",
          700: "#0B1B84",
          800: "#091771",
          900: "#08135E",
        },
        "oxford-blue":{
          100: "#0457DC",
          200: "#044FC8",
          300: "#0447B4",
          400: "#033FA0",
          500: "#03378C",
          600: "#022F78",
          700: "#022864",
          800: "#022050",
          900: "#011638",
        }
      },
      height:{
        "1/10":"10%",
        "2/10":"20%",
        "3/10":"30%",
        "4/10":"40%",
        "5/10":"50%",
        "6/10":"60%",
        "7/10":"70%",
        "8/10":"80%",
        "9/10":"90%",
      }
    },
    screens:{
      "small": {'max': "639px"}
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
