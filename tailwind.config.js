import { nextui } from "@nextui-org/react"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"]
      },
      colors: {
        "primary": "#165EDB",
        "boxcolor": "rgba(27,27,27,0.5)",
        "blackbox": "rgba(16,17,18,0.4)",
        "blinkbox": "rgba(42,42,42,1)"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
