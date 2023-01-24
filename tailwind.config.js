/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'light-blue': '#29293A',
      'dark-blue': '#29293A',
      'pink': '#E92E5B',
      'gray': '#59596A',
    },
    fontFamily: {
      sans: ['Samsung', 'sans-serif'],
      bold: ['Samsung Bold', 'sans-serif'],
      medium: ['Samsung Medium', 'sans-serif'],
    }
  }
}