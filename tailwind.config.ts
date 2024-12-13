import type { Config } from "tailwindcss";

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pokemons/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shopping-cart/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      boxShadow: {
        'custom-light-bottom': ' 0px 0px 17px 5px  rgba(0,189,76,1);',
      },
    },
  },
  plugins: [],
} satisfies Config;









