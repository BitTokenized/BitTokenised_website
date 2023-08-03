/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        coolTheme: {
          primary: "#FFD700",
          secondary: "#0070FF",
          neutral: "#2C2C2E",
          "primary-focus": "#FFD700",
          "secondary-focus": "#62A0F9",
          "neutral-focus": "#6D6D6F",
          "primary-content": "#000000",
          "secondary-content": "#000000",
          "neutral-content": "#FFFFFF",
          base: "#1C1C1E",
          "base-alt": "#3A3A3C",
          "border-base": "#707070",
          "primary-hover": "#FFD700",
          "secondary-hover": "#1E90FF",
          "neutral-hover": "#4D4D4F",
        },
      },
    ],
  },
};
