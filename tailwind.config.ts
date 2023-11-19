import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "ajou-blue": "#0072CE",
      // based on catppuccin: light = Latte, dark = Frappe
      base: "#eff1f5",
      mantle: "#e6e9ef",
      "base-dark": "#303446",
      "mantle-dark": "#292c3c",
      blue: "#1e66f5",
      "blue-dark": "#8caaee",
      red: "#d20f39",
      "red-dark": "#e78284",
      yellow: "#df8e1d",
      "yellow-dark": "#e5c890",
      green: "#40a02b",
      "green-dark": "#a6d189",
    },
  },
  plugins: [],
};
export default config;
