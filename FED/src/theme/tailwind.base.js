// Global
const defaultTheme = require('tailwindcss/defaultTheme');

// Local
import { objectMap } from '../lib/theme-utils';

import TOKENS from './tokens.base.json';

const theme = {
  name: 'Base',
  extend: {
    aspectRatio: {
      hero: '21 / 9',
      video: '16 / 9',
      picture: '4 / 3',
      snapshot: '3 / 2',
      portrait: '2 / 3',
      square: '1 / 1',
    },
    borderRadius: {
      ...objectMap(TOKENS.BorderRadius, (v) => v.value),
    },
    borderWidth: {
      ...objectMap(TOKENS.BorderWidth, (v) => v.value),
    },
    colors: {
      brand: {
        ...objectMap(TOKENS['Brand Colors'].Brand, (v) => v.value),
      },
      scale: {
        ...objectMap(TOKENS['Brand Colors'].Scale, (v) => v.value),
      },
    },
    fontFamily: {
      ...objectMap(TOKENS.fontFamilies, (v) => [v.value]),
    },
    lineHeight: {
      ...objectMap(TOKENS.lineHeights, (v) => v.value),
    },
    screens: {
      '2xl': '1536px',
    },
    body: {
      large: {
        fontFamily: ['Roboto'],
        fontSize: '8px',
      },
    },
  },
};

export default theme;
