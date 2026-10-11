import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        page: "var(--bg)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        cream: "var(--cream)",
        navbg: "var(--nav)",
        gdg: {
          blue: "#4f9cf9",
          "blue-soft": "#60a5fa",
          red: "#f75f66",
          "red-soft": "#f87171",
          yellow: "#ffbf12",
          green: "#00d66a",
          "green-soft": "#4ade80",
          indigo: "#706eff",
        },
      },
      fontFamily: {
        pixel: ['"Pixelify Sans"', 'Tiny5', "ui-monospace", "monospace"],
        sans: ['"Hanken Grotesk Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"Courier Prime"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        brut: "4px 4px 0 0 var(--ink)",
        "brut-sm": "3px 3px 0 0 var(--ink)",
        "brut-md": "6px 6px 0 0 var(--ink)",
        "brut-lg": "8px 8px 0 0 var(--ink)",
        "brut-xl": "10px 10px 0 0 var(--ink)",
      },
    },
  },
  plugins: [],
};

export default config;
