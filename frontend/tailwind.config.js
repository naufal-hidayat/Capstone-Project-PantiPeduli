/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-pink": "#f3edf1",
        pink: "#AB245C",
        "light-pink": "#FFF7FD",
        "medium-pink": "#E8CCE0",
        purple: "#5A0845",
        gray: "#5A5757",
        "border-color": "#E5DCDC",
      },
    },
  },
  plugins: [],
};
