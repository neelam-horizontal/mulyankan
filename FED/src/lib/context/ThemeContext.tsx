// Global
import { createContext, useContext } from 'react';

export const ALL_THEMES = ['Base', 'BrandA', 'BrandZ'] as const;

type ThemeTuple = typeof ALL_THEMES;

//export type ThemeName = 'Base' | 'Dark';
export type ThemeName = ThemeTuple[number];

export type ThemeFile = {
  [key in ThemeName]: undefined;
};

export const ThemeContext = createContext<ThemeName>('Base');

export const useTheme = (themeFile?: ThemeFile): Record<string, unknown> => {
  const themeName = useContext(ThemeContext);
  const themeData = themeFile ? themeFile[themeName] : undefined;
  return { themeName, themeData };
};
