import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SectionTitle from "../sectionTitle";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: "20px",
    color: " #BF7950",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "41px",
    lineHeight: "41px",
    textAlign: "justify",
  },
  button: {
    marginLeft: "50px",
    borderRadius: "2px",
    width: "244px",
    height: "71.09px",
    // fontFamily: "Metropolis",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "23px",
    lineHeight: "23px",
    textAlign: "center",
  },
 
}));

const AboutHome = () => {
  const classes = useStyles();
  return (
    <div>
      <SectionTitle>About Terrell Davies Enterprise</SectionTitle>
      <Typography className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididuntut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
        ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
        accumsan lacus vel faca
      </Typography>
      <Button
        color="primary"
        variant="contained"
        size="large"
        className={classes.button}
      >
        LEARN MORE
      </Button>
    </div>
  );
};

export default AboutHome;
