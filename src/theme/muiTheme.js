// import { createMuiTheme } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#f4a87d',
      main: '#bf7950',
      dark: '#8b4c26',
      contrastText: '#000000',
    },
    secondary: {
      light: '#376b64',
      main: '#04403a',
      dark: '#001b14',
      contrastText: '#ffffff',
    },
    shape: {
      borderRadius: 8,
    },
  },
});

export default theme;