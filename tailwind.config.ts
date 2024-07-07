import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
        'white': '#FFFFFF',
        'pink': '#FFA7C3',
        'dark-pink': '#F74780',
        'gray': '#83869A',
        'dark-blue': '#13183F',
        'light-blue': '#666CA3',
        'gradient-pink': '#F02AA6',
        'gradient-orange': '#FF6F48',
        'gradient-pink-two': '#4851FF',
        'gradient-blue': '#F02AA6'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'jakarta': 'Jakarta'
      },

    },
  },
  plugins: [],
};
export default config;
