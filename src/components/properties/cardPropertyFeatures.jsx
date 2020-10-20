import React from "react";

//MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import HotelOutlinedIcon from "@material-ui/icons/HotelOutlined";
//import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
//import WcIcon from "@material-ui/icons/Wc";
//import DirectionsCarOutlinedIcon from "@material-ui/icons/DirectionsCarOutlined";
import { makeStyles } from "@material-ui/core/styles";

import FeatureBedroom from "../../img/Feature/FeatureBedroom.png";
import FeatureBath from "../../img/Feature/FeatureBath.png";
import FeatureToilet from "../../img/Feature/FeatureToilet.png";
import FeatureCar from "../../img/Feature/FeatureCar.png";



const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    // marginLeft: 30,
  },
  icon: {
    fontSize: 40,
    color: theme.palette.primary.main,
  },
  text: {
    fontSize: 13,
    color: theme.palette.secondary.main,
  },
}));

const CardPropertyFeatures = ({ bedroom, bathroom, toilet, garage }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={3}>
          {//<HotelOutlinedIcon className={classes.icon} />
          }
          <img src={FeatureBedroom} alt="Feature Bedroom"/>
          <Typography className={classes.text}>{bedroom} Bedrooms</Typography>
        </Grid>
        <Grid item xs={3}>
          {
          //<BathtubOutlinedIcon className={classes.icon} />
          }
          <img src={FeatureBath} alt="Feature Bath"/>
          <Typography className={classes.text}>{bathroom} Baths</Typography>
        </Grid>
        <Grid item xs={3}>
          {
          //<WcIcon className={classes.icon} />
          }
          <img src={FeatureToilet} alt="Feature Toilet"/>
          <Typography className={classes.text}>{toilet} Toilets</Typography>
        </Grid>
        <Grid item xs={3}>
          {
          //<DirectionsCarOutlinedIcon className={classes.icon} />
          }
          <img src={FeatureCar} alt="Feature Car"/>
          <Typography className={classes.text}>
            {garage} Parking Space
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardPropertyFeatures;
