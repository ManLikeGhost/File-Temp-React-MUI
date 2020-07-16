import React from "react";
import MarbleBackground from "./img/MarbleBackground.png";
import HomePage from './pages/HomePage'

import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

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
  
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.paperContainer}>
      <HomePage />
      
    </div>
  );
}

export default App;
