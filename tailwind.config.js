/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sdg1: {
          100: "#FDE9EA",
          200: "#F6A7AC",
          600: "#B30A16",
        },
        sdg2: {
          100: "#FAF6EB",
          200: "#E3C788",
          600: "#D0A138",
        },
      },
    },
  },
  plugins: [],
};
