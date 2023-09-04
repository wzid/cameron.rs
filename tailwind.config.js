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
          neutral: "#171717",
          "base-100": "#f7f7f7",
          accent: "#737373",
          error: "#e8e8e8",
        },
      },
      {
        mydarktheme: {
          primary: "#0072B5",
          secondary: "#e86a92",
          neutral: "#D4D4D4",
          "base-100": "#171717",
          accent: "#737373",
          error: "#202020",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Source Sans 3'", "'Segoe UI'", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
};