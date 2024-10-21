import type { Config } from "tailwindcss";
import { IoIosSearch } from "react-icons/io";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '30rem',
        '142': '33rem',
        '256': '41rem',
      },
      colors: {
        'geyser': '#DEE2E6',
        'bg-icons': '#F2F2F2',
        'gray-clean': 'rgba(255, 255, 255, 0.72)',
        'borders': 'rgba(255, 255, 255, 0.19)',
        'cover-img-immobile': 'rgba(0, 0, 0, 0.38)',
        'color-text-filter': '#727379',
        'bg-header': "#FAFAFA",
        'border-btn': "#BEBEBE",
        'green': '#53917E',
        'iron': '#6494AA',
        'pastel-yellow': '#FCD0A1',
        'gray-side-bar': '#808191',
        'bg-admin': '#F4F4F4',
        'secondary': '#A2708A',
        'secondary-hover': '#6D445A',
        'primary': '#2F323A',
        'third': '#ECE2D0',
        'secondary-64-opacity': 'rgba(168, 112, 138, 0.64)',
        'bg-btn': '#FEFEFE',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      content: {
        'btn-submit': "'teste'",
      }
    },
  },
  daisyui: {
    themes: ['light'],
  },
  plugins: [require('daisyui')],
};
export default config;
