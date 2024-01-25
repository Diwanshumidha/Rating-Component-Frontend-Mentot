import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: 'var(--orange)',

        'light-grey': 'var(--light-grey)',
        'medium-grey': 'var(--medium-grey)',
        'dark-blue': 'var(--dark-blue)',
        'very-dark-blue': 'var(--very-dark-blue)',
      },
      fontSize: {
        '600': 'var(--fs-600)',
        '400': 'var(--fs-400)',
      },
      fontWeight: {
        '400': 'var(--fw-400)',
        '700': 'var(--fw-700)',
      },
      spacing: {
        '400': 'var(--size-400)',
        '300': 'var(--size-300)',
      },
    },
  },
  plugins: [],
};
export default config;
