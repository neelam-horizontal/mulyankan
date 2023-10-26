// Global
import { merge } from 'lodash';
const defaultTheme = require('tailwindcss/defaultTheme');

// Local
import { mergeConfigs, objectMap } from '../lib/theme-utils';

import BASETOKENS from './tokens.base.json';
import TOKENS from './tokens.brand-z.json';
const MERGEDTOKENS = mergeConfigs(BASETOKENS, TOKENS);

const theme = {
  name: 'BrandZ',
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
      ...objectMap(MERGEDTOKENS.BorderRadius, (v) => v.value),
    },
    colors: {
      brand: {
        ...objectMap(MERGEDTOKENS['Brand Colors'].Brand, (v) => v.value),
      },
      scale: {
        ...objectMap(MERGEDTOKENS['Brand Colors'].Scale, (v) => v.value),
      },
    },
    fontFamily: {
      ...objectMap(MERGEDTOKENS.fontFamilies, (v) => [v.value]),
    },
    lineHeight: {
      ...objectMap(MERGEDTOKENS.lineHeights, (v) => v.value),
    },
    screens: {
      '2xl': '1536px',
    },
  },
};

export default theme;
