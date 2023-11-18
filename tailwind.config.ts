import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [
    require("@heathmont/moon-core-tw/lib/private/presets/ds-moon-preset"),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SpaceGrotesk"', 'sans-serif'], 
      },
      colors: {
        gold: '#DFB511',
        lightGray: '#EBEBEB',
        darkGray: "#1B1E25",
        ash:'#3A3C42'
      }
    },
  },
  plugins: [],
};

export default config;

