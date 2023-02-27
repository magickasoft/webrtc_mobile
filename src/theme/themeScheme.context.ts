import React from 'react';

export const ThemeScheme = React.createContext({} as any);

export const useThemeSchemeContext = () => React.useContext(ThemeScheme);
