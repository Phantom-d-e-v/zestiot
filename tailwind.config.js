/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Manrope"],
    },
    extend: {
      colors: {
        primary: {
          100: "#0021FF",
          200: "#0066E4",
          300: "#0C0048",
        },
        secondary: {
          100: "#ff",
          200: "#C8C8C8",
          300: "#1B1B1B",
        },
      },
    },
  },
  plugins: [],
};
