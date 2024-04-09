/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito", 'sans-serif'],
        mont: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar', 'tailwind-scrollbar-hide'),
  ],
}

