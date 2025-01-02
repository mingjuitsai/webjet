/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
    }
  },
  plugins: [],
}