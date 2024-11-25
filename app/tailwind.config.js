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
          ".container": {},
          ".card": {
            width: "500px",
            height: "700px",
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
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

// forest
