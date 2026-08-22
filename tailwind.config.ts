import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#060F0A",
          900: "#0B1B12",
          800: "#122A1C",
          700: "#1B3D28",
          600: "#265136",
          500: "#356B49"
        },
        accent: {
          400: "#DDD2BA",
          500: "#CBBA95",
          600: "#A6916A"
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        display: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"]
      }
    }
  },
  plugins: []
}

export default config
