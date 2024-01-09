/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'manrope': ["'Manrope', sans-serif"]
    },
    extend: {
      colors: {
        'theme1': '#6C2C1E',
        'theme2': '#542200',
        'theme3': '#bbbcb3',
        'theme4': '#6d6b5e',
        'theme5': '#ff9000',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

