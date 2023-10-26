const themes = require('./src/theme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: themes.default.default,
      themes: themes.default.themes,
    }),
    require('@tailwindcss/typography'),
  ],
  theme: {},
};
