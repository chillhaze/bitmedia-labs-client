import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3A80BA',
      mainBg: '#FFFFFF',
    },
    secondary: {
      main: '#1C3B55',
    },
    text: {
      mainTextColor: '#1A1A1A',
      black: '#000000',
      grey: '#F1F1F1',
      white: '#FFFFFF',
      red: '#E7192E',
      redText: '#EB5757',
    },
  },
  spacing: val => `${4 * val}px`,
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});

export const spacing = {
  spacing: val => `${4 * val}px`,
};

// export const colors = {
//   colors: {
//     BgColor: '#FFFFFF',
//     BgColorThemeLight: '#3A80BA',
//     BgColorThemeDark: '#1C3B55',
//     black: '#000000',
//     white: '#FFFFFF',
//     red: '#E7192E',
//     redText: '#EB5757',
//   },
//   spacing: val => `${4 * val}px`,
// };
