/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      brown: {
        50: '#242424',
      },aqua: {
        50:'#64EEBC',
      },
      cream: {
        50:'#FFFFFF'
      }
    }}
  },
  plugins: [],
}