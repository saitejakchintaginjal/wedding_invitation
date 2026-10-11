/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#fff3b8",
        cream: "#fffdf0",
        maroon: "#1e5fa8",
        marigold: "#f59e0b",
        saffron: "#fbbf24",
        gold: "#d99a06",
        leaf: "#2e8b57",
        sky: "#38a3d8",
        blush: "#f472b6",
        ink: "#1f2d3d",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
    },
  },
  plugins: [],
};
