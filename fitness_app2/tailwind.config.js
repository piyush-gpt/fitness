/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins:[
    require('tailwind-scrollbar'),
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minWidth:{
      '320':'320px'
    },
    screens: {
      'xxs':'250px',
      'xs': '500px', 
      'sm':'600px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px'
    },
  }
};
