/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_white: "var(--color-primary-white)",
        secondary_dark: "var(--color-secondary-dark)",
        secondary_light: "var(--color-secondary-light)",
        secondary_yellow: "var(--color-secondary-yellow)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
