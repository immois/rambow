/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@rambow/ui/tailwind")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@rambow/ui/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
