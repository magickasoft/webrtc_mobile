import React from 'react';
import {useColorScheme} from 'react-native';

import {storage} from '../storage.mmkv';
import {appTheme, ThemeSchemeType} from './theme-app';

const STORE_THEME_SCHEME_KEY = '@app/theme-scheme';

export const useThemeScheme = () => {
  const defaultThemeScheme = useColorScheme() || 'light';
  const [themeScheme, setThemeScheme] =
    React.useState<ThemeSchemeType>(defaultThemeScheme);
  const theme = appTheme[themeScheme];

  React.useEffect(() => {
    loadThemeSchemeFromStorage();
  }, []);

  const loadThemeSchemeFromStorage = () => {
    try {
      const schemeValue =
        (storage.getString(STORE_THEME_SCHEME_KEY) as ThemeSchemeType) ||
        defaultThemeScheme;
      if (schemeValue) {
        setThemeScheme(schemeValue);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setThemeSchemeToStorage = async (themeSchemeValue: ThemeSchemeType) => {
    try {
      storage.set(STORE_THEME_SCHEME_KEY, themeSchemeValue);
      setThemeScheme(themeSchemeValue);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    loadThemeSchemeFromStorage,
    setThemeSchemeToStorage,
    themeScheme,
    setThemeScheme,
    theme,
  };
};
