import React from "react";
//Components
import PropertyFeatures from "./propertyFeatures";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  cardColor: {
    backgroundColor: "#F5E9DE",
  },
  divider: {
    margin: "20px 0",
    backgroundColor: theme.palette.primary.main,
    height: "1px",
  },
  location: {
    display: "flex",
  },
  locationIcon: {
    alignSelf: "flex-end",
  },
}));

export default function Property({ imagePath, saleText, address, details }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={saleText}
        height="300"
        image={imagePath}
        title={saleText}
      />

      <CardContent className={classes.cardColor}>
        <Grid container>
          <Grid item xs={2}>
            <LocationOnOutlinedIcon />
          </Grid>
          <Grid container xs={10}>
            <Grid item xs={12}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                color="primary"
              >
                {saleText}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" component="p" color="secondary">
                {address}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider variant="middle" className={classes.divider} />
        <PropertyFeatures />
      </CardContent>
    </Card>
  );
}
