module.exports = {
  mode: 'jit',
  content: ["./pages/**/*.{html,js}", "./Components/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
}