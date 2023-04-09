/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.js', './src/components/header.js', './src/pages/home.js','./src/pages/register.js'
  ,'.src/components/headerA.js','.src/components/Form.js','./src/pages/login.js','./src/pages/homeA.js',
   './src/components/create.js','./src/components/list.js', './src/components/SignUp.js', './src/components/Login.js',
    './src/pages/blog.js'],
  theme: {
    fontFamily: {
      S: ['Soyz'],
      O: ['Onest'],
    },
    extend: {},
  },
  plugins: [],
}
