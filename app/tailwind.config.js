/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
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
          ".card": {
            width: "25%",
            height: "70%",
            "min-height": "70%",
          },
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
