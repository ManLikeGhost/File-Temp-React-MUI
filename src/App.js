import React from "react";
import MarbleBackground from "./img/MarbleBackground.png";
import Header from "./components/header/header";
import Button from "@material-ui/core/Button";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/muiTheme";
const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paperContainer: {
    height: "100vh",
    backgroundImage: `url(${MarbleBackground})`,
  },
  categoryHeaderText: {
    fontSize: 15,
    fontWeight: 500,
    color: theme.palette.common.white,
  },
  itemText: {
    fontSize: 50,
    fontWeight: 500,
  },
  button: {
    color: theme.palette.secondary.light,
  },
}));

function App() {
  const classes = useStyles();
  return (

      <div>
        <Header />
        <Button variant="contained" className={classes.itemText}> Welcome to Terrel Davies... </Button>
      </div>

  );
}

export default App;
