/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "grey-button":'#6B7280'
      }
    },
  },
  plugins: [
    function ({addUtilities}) {
      const extendUnderline = {
        '.underline': {
          'textDecoration': 'underline',
          'text-decoration-color': '#FFC001',
        },
      }
      addUtilities(extendUnderline)
  }
  ],
}
