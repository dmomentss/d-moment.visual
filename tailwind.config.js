/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './wedding/wedding.html', './graduate/graduate.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      fontSize: {
        xss: ['8px', '14px'],
      }
    },
    fontFamily: {
      poppins: ['Poppins'],
      'gyahegi': ['gyahegi', 'sans-serif'],
      'arsenica': ['arsenica', 'sans-serif'],
      'catchye': ['catchye', 'sans-serif'],
      'soage': ['soage', 'sans-serif'],
      'agraham': ['agraham', 'sans-serif'],
      'rantera': ['rantera', 'sans-serif'],
    },
  },
  plugins: [],
}