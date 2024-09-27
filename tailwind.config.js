module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Correctly set to 'class' for class-based dark mode
  theme: {
    extend: {}, // Add custom styles or configurations here if needed
  },
  variants: {
    extend: {}, // Extend any variants here if necessary
  },
  plugins: [], // You can add Tailwind plugins here if needed
}
