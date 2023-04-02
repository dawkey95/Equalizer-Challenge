/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
      },

      colors: {
        "sky-blue": "#66E2DC",
        "outrageous-orange": "#FA7453",
        rajah: "#FFB964",
        snow: "#FCFAF9",
        "eerie-black": "#191826",
        background: "#F2F2F2",
      },

      screens: {
        desktop: { max: "1440px" },
        tablet: { max: "768px" },
        mobile: { max: "375px" },
      },
    },
  },
  plugins: [],
};
