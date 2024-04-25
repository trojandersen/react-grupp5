/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bitcoin: "#FFAE34",
        ninja: "#222222",
        blockchain: "#8B58F9",
        evilcorp: "#F33355",
        placeholdergray: "#D0D0D0",
      },
      fontFamily: {
        source: ["Source Sans 3", "sans-serif"],
        mono: ["PT Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
