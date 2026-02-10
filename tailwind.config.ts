import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-urbanist)", "sans-serif"],
        serif: ["var(--font-cinzel)", "serif"],
        gotham: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        secondary: "#6d2626",
        borravino: "#6d2626",
        darkBg: "#0a0a0a", // Darker, more premium black
        gold: {
          100: "#f9f1d8",
          200: "#f0deaa",
          300: "#e6c670",
          400: "#deb23c",
          500: "#d4a017", // Classic Gold
          600: "#aa8012",
          700: "#80600e",
        },
        primary: "#f97316", // Main Orange
        accent: "#00f0ff", // Cyberpunk accent if needed
        glass: "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "degrade-azul": "linear-gradient(300deg, #fffff 0%, #000000 100%)",
        "gold-gradient": "linear-gradient(to right, #d4a017, #f9f1d8, #d4a017)",
      },
    },
  },
  plugins: [],
} satisfies Config;
