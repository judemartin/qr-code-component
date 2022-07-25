/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        lightGrey: "#D5E1EF",
        grey: "#7D889E",
        darknavy: "#1F314F",
        blue: "#2C7DFA",
      },
    },
  },
  plugins: [],
};
