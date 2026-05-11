import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        neo: {
          primary: "#00B4D8",
          "primary-dark": "#0077B6",
          "accent-green": "#06D6A0",
          "accent-yellow": "#FFD166",
          "accent-pink": "#EF476F",
          "accent-purple": "#7B2FBE",
          "accent-orange": "#FF6B35",
          yellow: "#FFD166",
          pink: "#EF476F",
          green: "#06D6A0",
          blue: "#00B4D8",
          teal: "#00B4D8",
          purple: "#7B2FBE",
          orange: "#FF6B35",
          black: "#0A0A0A",
          white: "#FFFFFF",
          gray: "#F0F4F8",
          "gray-mid": "#CBD5E1",
        },
      },
      boxShadow: {
        neo: "4px 4px 0px #0A0A0A",
        "neo-lg": "6px 6px 0px #0A0A0A",
        "neo-xl": "8px 8px 0px #0A0A0A",
        "neo-hover": "2px 2px 0px #0A0A0A",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(3deg)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 25s linear infinite",
        "marquee-right": "marquee-right 25s linear infinite",
        bounce: "bounce 2s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
