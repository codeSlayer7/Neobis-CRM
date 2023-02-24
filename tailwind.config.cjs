const defaultTheme = require('tailwindcss/defaultTheme')

function withOpacity(variableName){
  return ({opacityValue}) => {
    if(opacityValue !== undefined){
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  } 
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [defaultTheme.fontFamily.sans[4],],
      },
      textColor: {
        skin: {
          baseText:'var(--color-base-text)',
          'text-violet': withOpacity('--color-violet-card'),
          'text-green': withOpacity('--color-green-btn'),
          'text-darkViolet': withOpacity('--color-text-darkViolet'),

        },
      },
      backgroundColor: {
        neobis: {
          fill: 'var(--color-violet-card)',
          'bg-violet': withOpacity('--color-violet-card'),
          'bg-red': withOpacity('--color-red-btn'),
          'bg-column-color': withOpacity('--color-colum-color'),
          'bg-column-border': withOpacity('--color-column-border'),
          'bg-card-color': withOpacity('--color-card-color'),
          'bg-card-border': withOpacity('--color-card-border'),
          'bg-card-text': withOpacity('--color-card-text-bg'),
          'bg-green': withOpacity('--color-green-btn'),
          
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
// custom colors doesnt support oppacity utilitys
// --color-green-btn: 112,191,68;
// --color-red-btn: 255,89,89;
// --color-violet-card: 136,116,200; 
// --color-base-text: 0,0,0; 
// --color-wait-call: 46,53,58; 
// --color-colum-color: 244,247,253; 
// --color-column-border: 244,244,244; 
// --color-card-color: 252,253,254;
// --color-card-border: 218,218,218; 