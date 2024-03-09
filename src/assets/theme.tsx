import { createTheme } from '@mui/material/styles';
import InterRegular from "./fonts/Inter-Regular.woff2";
import InterMedium from "./fonts/Inter-Medium.woff2";
import InterBlack from "./fonts/Inter-Black.woff2";

const theme = createTheme({
  palette: {
    primary: {
      main: '#4C34C2',  // Фиолетовые кнопки
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#F5F5F5', // Шапка таблицы и фоны
      dark: '#3F3F3F', // Шрифт
      light: '#C2C2C2', // Границы для чекбоксов
      // contrastText: will be calculated to contrast with palette.secondary.main
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
  },
  
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Inter'), local('Inter-Regular'), url(${InterRegular}) format('woff2');
        }

        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('Inter'), local('Inter-Medium'), url(${InterMedium}) format('woff2');
        }

        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 900;
          src: local('Inter'), local('Inter-Black'), url(${InterBlack}) format('woff2');
        }
      `,
    },
  },
});

export default theme
