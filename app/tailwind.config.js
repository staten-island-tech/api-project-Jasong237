/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      md: [".75rem", "1.5rem"],
      lg: ["1.5rem", "2.75rem"],
      xl: ["2.5rem", "3.5rem"],
    },
    extend: {
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(100%)" },
          "50%": { transform: "scale(105%)" },
        },
        bounce: {
          "0%, 100%": { transform: "scale(100%)" },
          "50%": { transform: "scale(105%)" },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        forest: {
          ...require("daisyui/src/theming/themes")["forest"],

          primary: "rgb(10, 54, 44)",
          secondary: "#1C360A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

// forest
