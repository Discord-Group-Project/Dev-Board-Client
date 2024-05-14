/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    daisyui: {
      themes: ["light", "dark"],
    },
    extend: {
      colors: {
        primary: "#182b93",
        secondary: "#ff5722",
        mutate: "#212121",
      },
    },
  },
  plugins: [daisyui],
};
