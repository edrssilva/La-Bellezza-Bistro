/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xs": "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
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
