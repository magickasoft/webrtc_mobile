import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableFreeze} from 'react-native-screens';

import {AppNavigator} from './AppNavigator';
import {ThemeSchemeProvider} from './theme';

enableFreeze();

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeSchemeProvider>
        <AppNavigator />
      </ThemeSchemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
