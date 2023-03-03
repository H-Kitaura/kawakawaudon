/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'title-back': "url('/public/logo1.png')"
      }
    },
  },
  plugins: [],
}
