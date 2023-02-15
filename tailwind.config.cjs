/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          
        },
      },
      backgroundColor: {
        neobis: {
          fill: 'var(--color-fill)',
        },
      },
    },
  },
  plugins: [],
};
// custom colors doesnt support oppacity utilitys
