import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import SectionTitle from "../sectionTitle";
import MarbleBackground from "../../img/MarbleBackground.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    height: "80vh",
    backgroundImage: `url(${MarbleBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // width: `calc(100vw + 48px)`,
  },
 
  text: {
    padding: "20px 80px",
    color: theme.palette.primary.main,
    fontSize: "30px",
    textAlign: "justify",
  },
  button: {
    marginLeft: "60px",
    color: theme.palette.primary.contrastText,
    fontSize: 21,
    borderRadius: 1,
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));

const AboutHome = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <SectionTitle>About Terrell Davies Enterprise</SectionTitle>
      <Typography className={classes.text}>
      At Terrell Davies, it is our mission to inspire a positive {"&"} lasting change.
      We have a vision be an excellent {"&"} true real estate marketing agency providing quality {"&"} consistent customer experience at all times
      </Typography>
      <Link href="/about">
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={classes.button}
        >
          LEARN MORE
        </Button>
      </Link>
    </div>
  );
};

export default AboutHome;
