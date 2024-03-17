/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#c8886b",
        headingColor: "#0c2b35",
        headingTextColor: "#f2e8e1",
        smallTextcolor: "#193256",
      },
      keyframes:{
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards' 
      }
    },
  },
  plugins: [],
}

