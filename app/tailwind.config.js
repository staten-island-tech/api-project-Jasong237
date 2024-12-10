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
        hello: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(0)" },
        },
        animation: {
          hello: "hello 1s ease-in-out",
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
