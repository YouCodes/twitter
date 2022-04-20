module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
   darkMode: 'media',  // or darkMode: 'class'
  plugins: [
    require("tailwind-scrollbar")
  ],
  variants: {
    // ...
    scrollbar: ['dark']
}
}
