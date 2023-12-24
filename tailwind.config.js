/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: "#0F0F0F",
        customBlackNav: "#161616",
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://image.tmdb.org/t/p/w220_and_h330_face/rRcNmiH55Tz0ugUsDUGmj8Bsa4V.jpg')",
      },
      backgroundColor: {
        bgShadow: "linear-gradient(180deg, #6A57CD 14.32%, #9481f4 100%)",
      },
      height: {
        0.1: "1px",
        454: "454px",
        500: "500px",
      },
      boxShadow: {
        "black-md": "0px 0px 10px 2px black",
      },
      top: {
        11: "-5",
      },
      screens: {
        "3xs": { max: "450px" },
        "2xs": { max: "550px" },
        xs: { max: "500px" },
        sm: { max: "700px" },
        md: { max: "1000px" },
        lg: { max: "1200px" },
        xl: { max: "1500px" },
      },
    },
  },
  plugins: [require("rippleui")],
};
