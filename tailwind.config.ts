import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hhs: {
          blue: {
            DEFAULT: "#003366", // Primary HHS Blue
            light: "#336699",
            dark: "#002244",
          },
          accent: "#F5A623", // Professional Gold/Accent
          slate: {
            50: "#F8FAFC",
            900: "#0F172A",
          }
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} as Config;
