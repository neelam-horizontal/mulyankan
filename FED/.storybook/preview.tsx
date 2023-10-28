// Global
import { DocsContainer, DocsContainerProps } from '@storybook/blocks';
import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

// Lib
import { ALL_THEMES } from '../src/lib/context/ThemeContext';

// Local
import '../src/assets/styles/global.css';
import { componentGlobalWrapper, componentThemeWrapper } from './decorators';

// @ts-ignore
const projectThemes = require('../src/theme');

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const preview: Preview = {
  globalTypes: {
    rtlDirection: {
      defaultValue: false,
    },
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: projectThemes.default.default.name,
      toolbar: {
        icon: 'paintbrush',
        items: ALL_THEMES,
        showName: false,
        dynamicTitle: false,
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      classTarget: 'body',
      stylePreview: true,
    },
    docs: {
      theme: themes.light,
    },
    rtlDirection: {
      autoLocales: ['ar'],
      reload: true,
    },
  },
};

export const decorators = [componentGlobalWrapper, componentThemeWrapper];

export default preview;
