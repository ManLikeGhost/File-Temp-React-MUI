import React from "react";
import MarbleBackground from "./img/MarbleBackground.png";
import Header from "./components/header/header";
import Button from "@material-ui/core/Button";
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
      <Header />
      
    </div>
  );
}

export default App;
