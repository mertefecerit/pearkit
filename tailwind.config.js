/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-gradient': `linear-gradient(to top, ${colors.lime[200]}, ${colors.white} 40%)`,
        'custom-gradient-dark': `linear-gradient(to top, ${colors.lime[500]}, ${colors.gray[900]} 90%)`,
      }),
    }
  },
  plugins: [],
};
