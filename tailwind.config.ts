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
        'brand-blue': '#007ACC',
        'brand-purple': '#6f42c1',
        'brand-green': '#28a745',
        'light-gray': '#f8f9fa',
        'medium-gray': '#e9ecef',
        'dark-gray': '#6c757d',
      }
    },
  },
  plugins: [],
};
export default config;