import React from "react";
//Components
import CardPropertyFeatures from "./cardPropertyFeatures";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import Paper from "@material-ui/core/Paper";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 345,
    width: "629.34px",
    height: "261.67px",
    left: "108px",
    top: "694px",
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    borderradius: "2px",
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

  cardProperty: {
    padding: "20px 0px 0px 0px",
  },
  propertyText: {
    fontSize: 15,
  },
  addressText: {
    fontWeight: "bold",
  },
}));

export default function CardProperty({
  imagePath,
  saleText,
  address,
  details,
  description,
}) {
  const classes = useStyles();

  return (
    <div className={classes.cardProperty}>
      <Card className={classes.root}>
        <Grid container xs={12}>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              alt={description}
              title={saleText}
              image={imagePath || "http://placehold.it/200"}
            />
          </Grid>

          <Grid item xs={6}>
            <CardContent>
              <LocationOnIcon fontSize="large" color="primary" />
              <Typography>{address}</Typography>
              <Typography>{details}</Typography>
              <Typography>{description}</Typography>
              <Divider variant="middle" className={classes.divider} />
              <CardPropertyFeatures />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
