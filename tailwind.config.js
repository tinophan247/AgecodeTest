const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        20: '20px',
      },
      colors: {
        'age-gray-1': '#99908d',
        'age-gray-2': '#ebe9e9',
        'age-gray-3': '#f2f4f7',
        'age-gray-4': '#667085'
      },
      fontFamily: {
        'hiragino-sans': ['Hiragino-Sans'],
      },
      fontSize: {
        10: '10px',
        17: '17px'
      },
      height: {
        '52px': '52px',
        '84px': '84px'
      },
      inset: {
        '20px': '50px',
      },
      maxWidth: {
        375: '375px'
      },
      minWidth: {
        113: '113px'
      },
      spacing: {
        '50': '55%'
      },
      width: {
        '84px': '84px',
        275: '275px',
        343: '343px',
        375: '375px',
      }
    },
  },
  plugins: [],
}