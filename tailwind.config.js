/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-primary": "#662D91",
      },
      fontSize: {
        xs: "9px",
      },
    },
  },
  plugins: [],
};
