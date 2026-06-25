import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: "#2CA9EE",
        "light-blue": "#6EC1E4",
        "dark-navy": "#0D1A2B",
        "body-gray": "#7A7A7A",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-lato)", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
};

export default config;
