/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      primary: "#303841",
      secondary: "#3A4750",
      tertiary: "#C5A51B",
      complementary: "#EEEEEE",
      white: "#FFFFFF",
      red: "#C23616",
      green: "#44BD32",
    },
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"],
        "press-start": ['"Press Start 2P"', "cursive"],
      },
    },
  },
  plugins: [],
};
