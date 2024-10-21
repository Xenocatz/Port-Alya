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
        lightPrimary: "#FEFAE0",
        darkBrown: "#231C1B",
        Brown: "#8E6E51",
        lightBrown: "#534D14",
        darkBlue: "#20304D",
        Blue: "#344265",
        bgSecondary: "#626F47",
      },
      boxShadow: {
        shadow: "-4px 2px 33px 24px rgba(0,0,0,0.27)",
      },
    },
  },
  plugins: [],
};
