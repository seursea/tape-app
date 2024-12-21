/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#73DAC0",
        secondary: {
          default: "#F1EDE4",
        },
        black: {
          default: "#000000",
          light: "#1E1E1E",
        },
        gray: {
          light: "#D9D9D9",
          dark: "#CBCACA",
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        kantumruy: ["'Kantumruy Pro'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
        josefin: ["'Josefin Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
