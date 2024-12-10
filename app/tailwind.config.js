/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(100%)" },
          "50%": { transform: "scale(105%)" },
        },
        spin: {},
        animation: {
          spin: "spin 1s linear",
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
