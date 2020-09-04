import React from "react";
import NavigationHeader from "../components/navigationHeader.jsx";
import Typography from "@material-ui/core/Typography";
import SectionTitle from "../components/sectionTitle.jsx";
import MarbleBackground from "../img/MarbleBackground.png";
import Footer from "../components/footer";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

import Marble from "../img/AboutPageMarble8.png";
import PropertyImage3 from "../img/houses/7.png";
import AboutPagePhone from "../img/AboutPagePhone.png";
import AboutPageMarble8 from "../img/AboutPageMarble8.png";
import AboutPageMarble2 from "../img/AboutPageMarble2.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    height: "80vh",
    backgroundImage: `url(${MarbleBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "0px 5px 0px 50px",
    // width: `calc(100vw + 48px)`,
  },

  head: {
    width: "509px",
    padding: "0px 0px 30px 50px",
    color: "#BF7950",
  },

  sub: {
    width: "281px",
    padding: "30px 0px 50px 50px",
    fontSize: "25px",
    color: "#04403A",
    fontFamily: "Metropolis",
  },

  text: {
    padding: "20px 0px 0px 50px",
    width: "466px",
    color: "#04403A",
    fontSize: "25px",
  },

  imgBox: {
    width: "563px",
    height: "733px",
  },

  imgBox1: {
    width: "563px",
    height: "733px",
    border: "1px solid #BF7950",
    boxSizing: "border-box",
  },

  imgBox2: {
    width: "563px",
    height: "733px",
    border: "1px solid #BF7950",
    boxSizing: "border-box",
    padding: "20px 0px 0px 250px",
  },

  keep: {
    padding: "0px 0px 200px 0px",
  },

  space: {
    padding: "0px 0px 100px 0px",
  },

  box: {
    width: "294px",
    height: "374px",
    border: "0.8px solid #BF7950",
    boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
    background: "#FFFFFF",
    boxSizing: "border-box",
  },

  marble: {
    backgroundImage: `url(${Marble})`,
  },

  holder: {
    margin: "20px 50px 20px 100px",
  },

  button: {
    marginLeft: "60px",
    color: theme.palette.primary.contrastText,
    fontSize: 21,
    borderRadius: 1,
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));

const AboutPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <NavigationHeader />
      <SectionTitle>About Terrell Davies</SectionTitle>
      <div>
        <Grid container spacing={1} className={classes.space}>
          <Grid item xs={6}>
            <Typography variant="h2" className={classes.head}>
              At Terrell Davies, it is our mission to inspire a positive {`&`}
              lasting change.
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <div className={classes.imgBox1}>
              <img alt="marble" src={AboutPageMarble8} />
            </div>
          </Grid>
        </Grid>

        <Grid className={classes.space} container spacing={1}>
          <Grid item xs={6}>
            <div className={classes.imgBox2}>
              <img alt="marble" src={AboutPageMarble2} />
            </div>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h2" className={classes.head}>
              We have a vision be an excellent {`&`} true real estate marketing
              agency providing quality {`&`} consistent customer experience at
              all times
            </Typography>
          </Grid>
        </Grid>
      </div>

      <SectionTitle>Our Core Values</SectionTitle>
      <Box className={classes.keep}>
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={2}
          xs={12}
        >
          <Grid item xs={3}>
            <div className={classes.box}></div>
          </Grid>

          <Grid item xs={3}>
            <div className={classes.box}></div>
          </Grid>

          <Grid item xs={3}>
            <div className={classes.box}></div>
          </Grid>

          <Grid item xs={3}>
            <div className={classes.box}></div>
          </Grid>
        </Grid>
      </Box>

      <Grid container justify="center" alignItems="center" spacing={2} xs={12}>
        <Grid item xs={6}>
          <Typography variant="h2" className={classes.head}>
            Sell, lease, buy... On the go.
          </Typography>
          <Typography className={classes.text}>
            Download our mobile app and conduct your housing transactions
            online, real time, anywhere, anytime, as we are committed to
            delivering you quality service on the go.
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.imgBox2}>
            <img alt=" " src={AboutPagePhone} className={classes.icon} />
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};
export default AboutPage;
