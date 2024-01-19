/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/*.{html}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightOrange: "hsl(31, 77%, 52%);",
        darkCyan: "hsl(184, 100%, 22%)",
        veryDarkCyan: "hsl(179, 100%, 13%)",
        transparentWhite: "hsla(0, 0%, 100%, 0.75)",
        veryLightGray: "hsl(0, 0%, 95%)",
      },
      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
        bigshoulders: ["Big Shoulders Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
