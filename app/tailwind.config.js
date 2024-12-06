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

          ".container": {
            width: "100%",
            height: "100%",
          },
          ".card": {},
          ".card-title": {
            "text-align": "center",
          },
          ".card-normal": {
            "font-size": "50px",
            "text-align": "center",
          },
          ".card-id": {},
          ".left": {},
          ".right": {},
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

// forest
