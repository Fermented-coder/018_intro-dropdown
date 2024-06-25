/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        Almost_White: "hsl(0, 0%, 98%)",
        Medium_Gray: "hsl(0, 0%, 41%)",
        Almost_Black: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
