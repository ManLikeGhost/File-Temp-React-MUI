import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.secondary.main,
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "35px",
      lineHeight: "55px",
    },
  }));

const SaleRentShortlet = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={4}>
          <Typography className={classes.title}>
            For Sale by Town
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.title}>
          For Rent by Town
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.title}>
          Shortlet by Surburb
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default SaleRentShortlet;
