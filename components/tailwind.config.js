/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans"],
      },
      colors: {
        "twitter-blue": "#1D9BF0",
        "twitter-blue-2": "#1871CA",
        "blue-wash": "#75BEEF33",
        "button-stroke": "#1D9BF03D",
        "searchbar-fill": "#212327",
        "card-fill": "#16181C",
        "green-success": "#00BE74",
        "red-error": "#F4245E",
        "red-like": "rgb(239 68 68)",
        "neutral-50": "#f9f9f9",
        "neutral-100": "#f4f4f4",
        "neutral-200": "#e4e4e4",
        "neutral-300": "#d3d3d3",
        "neutral-400": "#a2a2a2",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0a0a0a",
        "neutral-1000": "#000000",
      },
      spacing: {
        25: "6.25rem",
      },
      fontSize: {
        "3.5xl": ["1.938rem", { lineHeight: "2.5rem" }],
        "2.5xl": ["1.625rem", { lineHeight: "2rem" }],
        lg3: ["1.188rem", { lineHeight: "1rem" }],
        lg2: ["1.063rem", { lineHeight: "1rem" }],
        sm2: ["0.938rem", { lineHeight: "0.75rem" }],
        xxs: ["0.625rem", { lineHeight: "0.75rem" }],
      },
    },
  },
  plugins: [],
};
