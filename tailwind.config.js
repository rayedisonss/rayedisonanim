/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
    },
    // colors: {
    //   color: {

    //     primary: '#eeeeee',
    //     accent: '#00ADB5',
    //     secondary: '#393e46',
    //     dark: '#222831',
    //     success: '#65B741'
    //   }
    // }
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: ["nord"],
    themes: [{
      myTheme: {
        "primary": "#FBA834",
        "secondary": "#333A73",
        "accent": "#387ADF",
        "neutral": "#50C4ED",
        "base-100": "#ffffff",
      }
    }]
  },

}


// Kuning: kebahagiaan, optimisme, kreativitas, energi, peringatan
// Ungu: royalitas, kemewahan, kebijaksanaan, kreativitas, misteri