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

          ".container": {
            width: "100%",
            height: "100%",
          },
          ".card": {
            width: "50%",
            height: "70%",
            "min-height": "700px",
            "border-width": "10px",
            "border-color": "rgb(25,50,20)",
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
