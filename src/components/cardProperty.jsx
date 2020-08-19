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
import LocationOnIcon from '@material-ui/icons/LocationOn';
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
  propertyText:{
    fontSize: 15
  },
  addressText:{
    fontWeight: 'bold'
  }
}));

export default function CardProperty({ imagePath, saleText, address, details, description }) {
  const classes = useStyles();

  return (
    <div className={classes.cardProperty}>
      <Grid container xs={12} spacing={1}>
        <Card className={classes.root}>
          <Grid item container xs={6}>
            <CardMedia
              component="img"
              alt={saleText}
              height="200"
              image={imagePath || 'http://placehold.it/200'}
              title={saleText}
            />
          </Grid>

          <Grid item container xs={6}>
            <CardContent className={classes.cardColor}>
              <Grid container>
                <Grid
                  item
                  xs={2}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <LocationOnIcon fontSize="large" color="primary" />
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h4"
                      color="primary"
                      className={classes.propertyText}
                    >
                      {saleText}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" component="p" color="secondary" className={classes.addressText}>
                      {address}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" component="p" color="secondary" >
                      {description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Divider variant="middle" className={classes.divider} />
              <CardPropertyFeatures />
            </CardContent>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
}
