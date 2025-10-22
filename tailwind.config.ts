import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/[locale]/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        raleway: ["var(--font-montserrat)", "sans-serif"],
        lexend:["var(--font-lexend)", "sans-serif"]
      },
      colors:{
        main:"#009900"
      }
    },
  },
  plugins: [],
};
export default config;
