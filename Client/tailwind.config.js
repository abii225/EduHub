/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Roboto, sans-serif",
      },
      colors: {
        primary: "#003c8d",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
