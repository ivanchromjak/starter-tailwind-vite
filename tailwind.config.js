module.exports = {
  content: [
    "./src/*.html",
  ],
  // safelist: [
  //   'overflow-auto',
  // ],    
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        sans: "Montserrat, sans-serif",
      },
      fontSize: {
      },
    },
  },
  plugins: [
    // ...
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/typography'),
  ]
};
  