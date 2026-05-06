/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kalnia: ['"Kalnia"', "serif"],
        rethink: ['"Rethink Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        red: {
          500: "#F62905",
        },
        green: {
          500: "#2FB35E",
        },
      },
    },
  },
  plugins: [],
};
