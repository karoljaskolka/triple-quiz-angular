/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      black: "#1E2022",
      gray: "#C9D6DF",
      "dark-gray": "#52616B",
      white: "#F0F5F9",
      yellow: "#E1B12C",
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
