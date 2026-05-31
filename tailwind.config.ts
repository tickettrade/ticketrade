import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "Heebo", "system-ui", "sans-serif"],
        secular: ["var(--font-secular-one)", "Secular One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
