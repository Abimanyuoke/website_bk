import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary : "#B7292E",
        secondary: "#E4262C",
        gray: "rgba(69, 69, 69, 1)"
      },
      fontFamily: {
        roboto: ["Roboto", "serif"]
      },
      backgroundColor: {
        abu: "rgba(136, 137, 136, 0.2)"
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      animation: {
        'gradient-move': 'gradientMove 3s ease infinite',
      },
      keyframes: {
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
