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
<<<<<<< HEAD
  plugins: [require("daisyui")],
=======
  plugins: [
    require('tailwind-scrollbar', 'tailwind-scrollbar-hide'),
  ],
>>>>>>> cc2af0f2d6f7442792a7e39ab849121a476b0291
}
