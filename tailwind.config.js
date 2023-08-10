/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),require("daisyui")],
  daisyui: {
    themes: ["light", "dark",],
  },
}

