import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ferrari Red family
        red: {
          DEFAULT: "#DC143C",
          dark: "#9B0E28",
          light: "#FF3A5C",
          faint: "rgba(220,20,60,0.10)",
          ghost: "rgba(220,20,60,0.05)",
        },
        // Monegasque Gold
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C870",
          dark: "#8B6914",
          faint: "rgba(201,168,76,0.12)",
        },
        // Carbon backgrounds
        carbon: {
          DEFAULT: "#0A0A0A",
          mid: "#141414",
        },
        surface: {
          DEFAULT: "#1A1A1A",
          2: "#222222",
          3: "#2A2A2A",
        },
        // Semantic race colors
        live: "#00FF88",
        // White ramp
        cream: "#FAFAF8",
        shop: "#F5F1EC",
        terminal: "#001A00",
        ferrari: "#120008",
      },
      fontFamily: {
        display: ["var(--font-barlow-condensed)", "sans-serif"],
        body: ["var(--font-barlow)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        telemetry: ["var(--font-orbitron)", "sans-serif"],
      },
      fontSize: {
        "2xs": ["10px", { lineHeight: "1.4", letterSpacing: "0.1em" }],
        "3xs": ["9px", { lineHeight: "1.4", letterSpacing: "0.12em" }],
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "2px",
        lg: "6px",
      },
      spacing: {
        18: "72px",
        22: "88px",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.7)" },
        },
        "ticker-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "waveform": {
          from: { transform: "scaleY(0.4)", opacity: "0.3" },
          to: { transform: "scaleY(1)", opacity: "0.8" },
        },
        "page-wipe-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "page-wipe-out": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        "count-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "underline-sweep": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "velocity-reveal": {
          from: { opacity: "0", filter: "blur(8px)", transform: "translateX(-30px)" },
          to: { opacity: "1", filter: "blur(0px)", transform: "translateX(0)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 1.4s ease-in-out infinite",
        "ticker-scroll": "ticker-scroll 40s linear infinite",
        "waveform": "waveform 0.8s ease-in-out infinite alternate",
        "page-wipe-in": "page-wipe-in 0.3s cubic-bezier(0.4,0,0.6,1) forwards",
        "page-wipe-out": "page-wipe-out 0.25s cubic-bezier(0.4,0,1,1) forwards",
        "count-up": "count-up 0.4s cubic-bezier(0.22,0.61,0.36,1) forwards",
        "underline-sweep": "underline-sweep 0.3s cubic-bezier(0.22,0.61,0.36,1) forwards",
        "fade-up": "fade-up 0.4s cubic-bezier(0.22,0.61,0.36,1) forwards",
        "velocity-reveal": "velocity-reveal 0.4s cubic-bezier(0.22,0.61,0.36,1) forwards",
      },
      transitionTimingFunction: {
        "ease-in-ferrari": "cubic-bezier(0.22,0.61,0.36,1)",
        "ease-out-ferrari": "cubic-bezier(0.4,0,1,1)",
        "ease-sharp": "cubic-bezier(0.4,0,0.6,1)",
      },
    },
  },
  plugins: [],
};

export default config;
