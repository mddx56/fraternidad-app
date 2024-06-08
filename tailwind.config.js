/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="forest"]'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0205a1",

          secondary: "#00ca59",

          accent: "#3f43fd",

          neutral: "#1acc8d",

          "base-100": "#f5f5f4",

          info: "#FFFFCC",

          success: "#1acc8d",

          warning: "#fdba74",

          error: "#E74C3C",
        },
      },
      "forest",
    ],
  },
};
