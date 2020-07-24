import React from "react";

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

const PropertyFeatures = () => {
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
          <HotelOutlinedIcon className={classes.icon} />
          <Typography  className={classes.text}>4 Bedrooms</Typography>
        </Grid>
        <Grid item xs={2}>
          <BathtubOutlinedIcon className={classes.icon} />
          <Typography className={classes.text}>4 Baths</Typography>
        </Grid>
        <Grid item xs={3}>
          <WcIcon className={classes.icon} />
          <Typography  className={classes.text}>5 Toilets</Typography>
        </Grid>
        <Grid item xs={4}>
          <DirectionsCarOutlinedIcon className={classes.icon} />
          <Typography className={classes.text}>5 Parking Space</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default PropertyFeatures;
