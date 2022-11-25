/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '450px',
        ...defaultTheme.screens
      },
      boxShadow: {
        'light': '0 0 2px rgba(0, 0, 0, .3)',
        'outer': '0 1px 4px rgba(0, 0, 0, .3)',
        'intensed': "0 0 9px rgba(0, 0, 0, .3)",
        "spread": "0 0 20px 4px rgb(154 161 177 / 15%), 0 4px 80px -8px rgb(36 40 47 / 25%), 0 4px 4px -2px rgb(91 94 105 / 15%)"
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
      }
    },
  },
  plugins: [],
}
