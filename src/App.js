import React from "react";
import MarbleBackground from "./img/MarbleBackground.png";
import Header from "./components/header/header";
import Button from "@material-ui/core/Button";
import "./App.css";

const styles = {
  paperContainer: {
    height: "100vh",
    backgroundImage: `url(${MarbleBackground})`,
  },
};

function App() {
  return (
    <div style={styles.paperContainer}>
      <Header />
      <Button variant="contained"> Welcome to Terrel Davies... </Button>
    </div>
  );
}

export default App;
