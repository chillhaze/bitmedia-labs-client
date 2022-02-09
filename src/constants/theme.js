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
      blue: '#3A80BA',
      red: '#E7192E',
      redText: '#EB5757',
    },
    button: '#3A80BA',
  },
  spacing: val => `${4 * val}px`,
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});
