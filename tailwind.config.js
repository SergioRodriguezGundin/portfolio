module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      keyframes: {
        "gradient": {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
      },
      animation: {
        "gradient": "gradient 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}