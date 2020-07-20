import React from "react";
//Components
import PropertyFeatures from "./propertyFeatures";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme=>( {
  root: {
    maxWidth: 345,
  },
  cardColor: {
    backgroundColor: "#F5E9DE",
  }
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
        <CardContent  className={classes.cardColor}>
          <Grid container>
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
              <Grid container>
                <Grid item xs={2}>
                  <LocationOnOutlinedIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="body2" component="p" color="secondary">
                    {address}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <PropertyFeatures />
        </CardContent>

      
      <CardActions className={classes.cardColor}>
       
      </CardActions>
    </Card>
  );
}
