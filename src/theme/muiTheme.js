// import { createMuiTheme } from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createPalette from '@material-ui/core/styles/createPalette';
import createTypography from '@material-ui/core/styles/createTypography';

const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
        multiline: {
            width: '45vw'
        }
    }
},
  typography: createTypography(createPalette({}), {
    fontFamily: '"PlayfairDisplay"'
  }),
  palette: {
    primary: {
      light: "#f4a87d",
      main: "#bf7950",
      dark: "#8b4c26",
      text: "#000000",
    },
    secondary: {
      light: "#376b64",
      main: "#04403a",
      dark: "#001b14",
      text: "#ffffff",
    },
    shape: {
      borderRadius: 8,
    },
  },
});

export default theme;