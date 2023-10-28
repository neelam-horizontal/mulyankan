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
    colors: {
      'light-gray': '#d8d8d8',
      'dark-gray': '#393738',
      gray: '#9e9e9e',
      primary: '#7FC3BA',
      rose:'#F8AA97',
      'dark-rose':'#D79181',
      salmon:'#F58466',
      beige:'#F0EFE7',      
      turquoise:'#7FC3BA',
      'turquoise-dark':'#6BA69E',
      'turquoise-black':'#497978',
      green: '#2F4E40',     
      white: '#FFFFFF',
      black: '#2F2D2E',     
      'errors-white': '#E02020',
      'errors-black': '#FF5E5E'
    },
    fontFamily: {
      'futura-pt': 'Futura-pt',
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
