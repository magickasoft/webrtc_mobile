import {Theme} from '@react-navigation/native';

import {
  BaseColor,
  BaseFormatterColor,
  color,
  formatterColor,
} from './color-palette';
import {space, SpaceProps} from './space';

export interface DefaultThemeScheme extends Theme {
  name: string;
  colorPalette: {
    color: BaseColor;
    formatterColor: BaseFormatterColor;
  };
  buttons: {
    primary: {
      background: string;
      text: string;
    };
    secondary: {
      background: string;
      text: string;
    };
    third: {
      background: string;
      text: string;
    };
  };
  text: {
    primary: string;
    secondary: string;
    third: string;
    fourth: string;
    fifth: string;
    raiting: string;
  };
  dots: {
    primary: string;
    secondary: string;
  };
  header: {
    background: string;
  };
  space: SpaceProps;
}

export const light: DefaultThemeScheme = {
  name: 'light-theme',
  dark: false,
  colorPalette: {
    color,
    formatterColor,
  },
  colors: {
    primary: color.White,
    background: color.White,
    card: color.White,
    text: color.White,
    border: color.White,
    notification: color.White,
  },
  buttons: {
    primary: {
      background: color.Blue,
      text: color.White,
    },
    secondary: {
      background: color.Blue1,
      text: color.Blue,
    },
    third: {
      background: color.Black1,
      text: color.White,
    },
  },
  text: {
    primary: color.Black1,
    secondary: color.Black2,
    third: color.White,
    fourth: color.Purple,
    fifth: color.Gray,
    raiting: color.Orange,
  },
  dots: {
    primary: color.White,
    secondary: color.White1,
  },
  header: {
    background: color.Gray4,
  },
  space,
};

export const dark: DefaultThemeScheme = {
  name: 'dark-theme',
  dark: true,
  colorPalette: {
    color,
    formatterColor,
  },
  colors: {
    primary: color.White,
    background: color.White,
    card: color.White,
    text: color.White,
    border: color.White,
    notification: color.White,
  },
  buttons: {
    primary: {
      background: color.Blue,
      text: color.White,
    },
    secondary: {
      background: color.Blue1,
      text: color.Blue,
    },
    third: {
      background: color.Black1,
      text: color.White,
    },
  },
  text: {
    primary: color.Black1,
    secondary: color.Black2,
    third: color.White,
    fourth: color.Purple,
    fifth: color.Gray,
    raiting: color.Orange,
  },
  dots: {
    primary: color.White,
    secondary: color.White1,
  },
  header: {
    background: color.Gray4,
  },
  space,
};

export type ThemeSchemeType = 'light' | 'dark';

export type DefaultAppThemeScheme = {
  light: DefaultThemeScheme;
  dark: DefaultThemeScheme;
};

export const appTheme: DefaultAppThemeScheme = {
  light,
  dark,
};
