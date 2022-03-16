module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        tilt: 'tilt 10s infinite alternate'
      },
      keyframes: {
        tilt: {
          '0%': {
            transform: 'rotate(1deg)'
          },
          '100%': {
            transform: 'rotate(-1deg)'
          }
        }
      }
    },
  },
  plugins: [],
}
