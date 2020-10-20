import React from "react";

import FeatureBedroom from "../../img/Feature/FeatureBedroom.png";
import FeatureBath from "../../img/Feature/FeatureBath.png";
import FeatureToilet from "../../img/Feature/FeatureToilet.png";
import FeatureCar from "../../img/Feature/FeatureCar.png";


//MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HotelOutlinedIcon from "@material-ui/icons/HotelOutlined";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import WcIcon from "@material-ui/icons/Wc";
import DirectionsCarOutlinedIcon from "@material-ui/icons/DirectionsCarOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    // marginLeft: 30,
  },
  icon: {
    fontSize: 40,
    color: theme.palette.primary.main,
  },
  text:{
      fontSize: 13,
      color: theme.palette.secondary.main
  }
}));

const PropertyFeatures = ({bedroom, bathroom, toilet, parkingSpace}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <div></div> */}
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={3}>
          <img src={FeatureBedroom} alt="Bedroom icon"/>
          <Typography  className={classes.text}>{bedroom}</Typography>
        </Grid>
        <Grid item xs={2}>
          <img src={FeatureBath} alt="Bathroom icon"/>
          <Typography className={classes.text}>{bathroom}</Typography>
        </Grid>
        <Grid item xs={3}>
          <img src={FeatureToilet} alt="Toilet icon"/>
          <Typography  className={classes.text}>{toilet}</Typography>
        </Grid>
        <Grid item xs={4}>
          <img src={FeatureCar} alt="Parking-spcae icon"/>
          <Typography className={classes.text}>{parkingSpace}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default PropertyFeatures;
