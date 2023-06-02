/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./static/**/*.{html,js}"],
  daisyui: {
    darkTheme: "mydarktheme",
    themes: [
      {
        mytheme: {
          primary: "#0072B5",
          secondary: "#e86a92",
          neutral: "#292929",
          "base-100": "#f7f7f7",
          accent: "#737373",
          error: "#C8C8C8",
        },
      },
      {
        mydarktheme: {
          primary: "#e86a92",
          secondary: "#0072B5",
          neutral: "#f7f7f7",
          "base-100": "#282729",
          accent: "#737373",
          error: "#202021",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "Segoe UI", "sans-serif"],
      },
      colors: {
        text_color: "#282729",
        background: "#f7f9f7",
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
};