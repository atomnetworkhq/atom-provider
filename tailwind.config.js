const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx}'], 
  theme: {
    extend: {colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      background: 'rgb(var(--color-background) / <alpha-value>)',
      backgroundaccent: 'rgb(var(--color-background-accent) / <alpha-value>)'
  }},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

