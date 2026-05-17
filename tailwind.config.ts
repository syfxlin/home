import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { breakpoints } from "./src/theme/tokens";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: breakpoints,
      colors: {
        text: {
          primary: "var(--color-text-primary)",
          title: "var(--color-text-title)",
          paragraph: "var(--color-text-paragraph)",
          description: "var(--color-text-description)",
        },
        background: {
          full: "var(--color-background-full)",
          card: "var(--color-background-card)",
          hover: "var(--color-background-hover)",
          focus: "var(--color-background-focus)",
        },
        scrollbar: {
          track: "var(--color-scrollbar-track)",
          thumb: "var(--color-scrollbar-thumb)",
        },
        info: {
          text: "var(--color-info-text)",
          background: "var(--color-info-background)",
        },
        warn: {
          text: "var(--color-warn-text)",
          background: "var(--color-warn-background)",
        },
        success: {
          text: "var(--color-success-text)",
          background: "var(--color-success-background)",
        },
        error: {
          text: "var(--color-error-text)",
          background: "var(--color-error-background)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        display: ["var(--font-display)", "cursive"],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
        focus: "0 0 0 2px var(--color-background-focus)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease",
      },
      maxWidth: {
        content: "45rem",
      },
    },
  },
};

export default config;
