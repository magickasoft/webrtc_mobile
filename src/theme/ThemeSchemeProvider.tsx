import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import {ThemeScheme} from './themeScheme.context';
import {useThemeScheme} from './useThemeScheme';

export const ThemeSchemeProvider: FC<{
  children: JSX.Element | JSX.Element[];
}> = ({children}) => {
  const value = useThemeScheme();

  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <ThemeProvider theme={value.theme}>
        <NavigationContainer theme={value.theme}>
          <ThemeScheme.Provider value={value}>{children}</ThemeScheme.Provider>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};
