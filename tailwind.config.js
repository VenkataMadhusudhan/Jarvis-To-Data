/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Iron-man-bg-color": "#202020",
        "Ironman-red": "#9b1423",
        "Ironman-gold": "#f3d34c",
        "jarvis-glow": "#4bf0ff",
      },
    },
  },
  plugins: [],
};
