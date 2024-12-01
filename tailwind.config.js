/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction:{
        "jump":'top 0.3s cubic-bezier(0.68,-0.55,0.265,1.55)'
      },
    },
  },
  plugins: [],
}

