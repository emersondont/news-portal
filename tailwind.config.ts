import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black80: '#121221',
        black60: '#444444',
        black40: '#6C6C6C',
        black20: '#949494',
        white: '#fdfdfd'
      }
    },
  },
  plugins: [],
};
export default config;
