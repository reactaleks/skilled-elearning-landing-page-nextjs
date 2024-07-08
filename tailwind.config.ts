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
        'gradient-pink-two': '#F02AA6',
        'gradient-blue': '#4851FF'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero-image-mobile': 'url(../public/assets/image-hero-mobile@2x.webp)',
        'hero-image-tablet': 'url(../public/assets/image-hero-tablet@2x.webp)',
        'hero-image-desktop': 'url(../public/assets/image-hero-desktop@2x.webp)',
      },
      fontFamily: {
        'jakarta': 'Jakarta'
      },

    },
  },
  plugins: [],
};
export default config;
