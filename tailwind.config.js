/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["var(--font-lora)"],
        nunito: ["var(--font-nunito)"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
