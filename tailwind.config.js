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
  safelist: [
    "hover:bg-primary",
    "hover:bg-secondary",
    "hover:bg-tertiary",
    "hover:bg-complementary",
    "hover:text-primary",
    "hover:text-secondary",
    "hover:text-tertiary",
    "hover:text-complementary",
  ],
};
