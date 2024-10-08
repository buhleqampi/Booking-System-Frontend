/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css,jsx}",
    "./node_modules/flowbite/**/*.js",
    // './node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') ,
    // require('preline/plugin'),
    // require('flowbite/plugin') 
    require('daisyui'),
  ],
}

