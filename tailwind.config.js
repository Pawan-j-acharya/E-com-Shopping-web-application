import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 0px 50px rgba(0, 0, 0, 1)",
      },
      colors: {
        "pastel-pink": "#E7D3DC",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "cupcake", "lofi", "business", "pastel", "nord"],
  },
};
