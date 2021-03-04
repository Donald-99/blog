module.exports = {
  purge: ['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "cw-gray-050" : "#F0F4FB",
      "cw-gray-100" : "#D9E2EC",
      "cw-gray-700" : "#334E68",
      "cw-gray-800" : "#243D53",
      "cw-gray-900" : "#102A43",
      "cw-blue-300" : "#62B0E8",
      "cw-blue-400" : "#4098D7",
      "cw-blue-600" : "#186FAF",
    },
    extend: {
      fontFamily: {
        'roboto' : ['Roboto', 'sans-serif'],
        'work-sans' : ['Work Sans', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
