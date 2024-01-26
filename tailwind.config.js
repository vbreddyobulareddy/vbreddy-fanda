import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      eurostile: ["eurostile", "sans-serif"],
      quickpen: ["Quickpen", "cursive"],
      FFNort: ['FF Nort', "sans-serif"],
      FFNortExtLt: ['FF Nort ExtLt', "sans-serif"],
      FFNortExtBold: ['FF Nort ExtBd', "sans-serif"],
      FFNortMed: ['FF Nort Med', "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
