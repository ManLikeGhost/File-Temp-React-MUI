import React from "react";
//Components

//MUI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
  propertyText:{
fontSize: 15
  },
  addressText:{
    fontWeight: 'bold'
  }
}));


export default function Blog({ title, imagePath, text, type, date}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={type}
        height="200"
        image={imagePath || 'http://placehold.it/200'}
        title={type}
      />

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
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" component="p" color="secondary" className={classes.addressText}>
                {text}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        
      </CardContent>
    </Card>
  );
}
