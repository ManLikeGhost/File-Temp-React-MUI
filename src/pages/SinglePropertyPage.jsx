import React from "react";
import NavigationHeader from "../components/navigationHeader.jsx";
import MarbleBackground from "../img/MarbleBackground.png";
import Footer from "../components/footer";
import SaleRentShortlet from "../components/home/saleRentShortlet";

import SinglePropertyLeft from "../components/properties/singlePropertyLeft";
import SinglePropertyRight from "../components/properties/singlePropertyRight";
import { detailsProperties } from "../demoData/demoDataCard";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import SinglePropertyTitle from "../components/properties/singlePropertyTitle.jsx";

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    background: `url(${MarbleBackground}) no-repeat center center fixed`,
    backgroundSize: "cover",
  },

  holder: {
    margin: "20px 50px 20px 50px",
  },
}));

const SinglePropertyPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <NavigationHeader />
      <div className={classes.holder}>
        <Grid container spacing={6}>
        
          <Grid key={SinglePropertyTitle.id} item container xs={8}>
              <SinglePropertyTitle 
              />
          </Grid> 
          <Grid item container xs={8}>
            <SinglePropertyLeft />
          </Grid>

          <Grid item container xs={4}>
            <SinglePropertyRight />
          </Grid>
        </Grid>
      </div>

      <SaleRentShortlet />
      <Footer />
    </div>
  );
};
export default SinglePropertyPage;
