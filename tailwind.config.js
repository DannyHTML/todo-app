/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(235, 21%, 11%)",
      },
      fontFamily: {
        main: "Josefin Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
