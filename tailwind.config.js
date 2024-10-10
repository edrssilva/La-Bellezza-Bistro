/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#590C13",
        },
        secondary: {
          DEFAULT: "#C5AB87",
        },
        offblack: {
          DEFAULT: "#190103",
        },
        offwhite: {
          DEFAULT: "#F3F2F2",
          transparent: "#F3F2F226",
        },
      },

      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
