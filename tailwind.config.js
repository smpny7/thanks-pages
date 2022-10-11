/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007DC7",
        loading: "#FDFDFD",
        text: "#393939",
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', '"Roboto"', 'serif']
      }
    },
  },
  plugins: [],
}
