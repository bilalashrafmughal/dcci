// tailwind.config.js
module.exports = {
  // purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       colors: {
         "main": "#314149",
         "cgray50": "#f9fafb",         

       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }