/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BC5',
        loading: '#FDFDFD',
        text: '#393939',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', '"Libre Baskerville"', 'serif']
      }
    },
  },
  plugins: [],
}
