/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        // Nattehimmel (nordlys): dype blåsvarte toner i stedet for malens #121723
        black: "#070B16",
        dark: "#0C1222",
        // Aurora-aksent (nordlysgrønn/teal) – erstatter malens generiske blå
        primary: "#1EC8A5",
        yellow: "#FBB040",
        aurora: {
          green: "#34D399",
          teal: "#22D3EE",
          blue: "#38BDF8",
          purple: "#A78BFA",
          pink: "#F472B6",
        },
        night: {
          900: "#070B16",
          800: "#0C1222",
          700: "#131B30",
          600: "#1C2742",
          500: "#2A3756",
        },
        "bg-color-dark": "#0C1222",
        "body-color": {
          DEFAULT: "#6B7585",
          dark: "#9AA4BC",
        },
        stroke: {
          stroke: "#E3E8EF",
          dark: "#223049",
        },
        gray: {
          ...colors.gray,
          dark: "#131B30",
          light: "#F0F2F9",
        },
      },

      backgroundImage: {
        "aurora-gradient":
          "linear-gradient(135deg, #22D3EE 0%, #34D399 45%, #A78BFA 100%)",
        "aurora-text":
          "linear-gradient(120deg, #22D3EE 0%, #34D399 40%, #A78BFA 90%)",
        "night-radial":
          "radial-gradient(1200px 600px at 80% -10%, rgba(52,211,153,0.18), transparent 60%), radial-gradient(900px 500px at 10% 10%, rgba(56,189,248,0.14), transparent 55%), radial-gradient(1000px 700px at 50% 120%, rgba(167,139,250,0.14), transparent 60%)",
      },

      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
        glow: "0 0 40px rgba(34, 211, 238, 0.25)",
        "glow-soft": "0 10px 50px rgba(52, 211, 153, 0.18)",
        card: "0 20px 60px rgba(3, 7, 18, 0.45)",
      },
      dropShadow: {
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
      },
      keyframes: {
        "aurora-shift": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0.9" },
          "50%": { transform: "translate3d(4%, -3%, 0) scale(1.15)", opacity: "1" },
        },
        "aurora-shift-2": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1.1)", opacity: "0.8" },
          "50%": { transform: "translate3d(-5%, 4%, 0) scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "aurora-shift": "aurora-shift 14s ease-in-out infinite",
        "aurora-shift-2": "aurora-shift-2 18s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out both",
        twinkle: "twinkle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
