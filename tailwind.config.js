/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        darkPrimary: "#798645",
      },
      boxShadow: {
        shadow: "-4px 2px 33px 24px rgba(0,0,0,0.27)",
      },
    },
  },
  plugins: [],
};
