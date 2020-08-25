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
  // root: {
  //   //maxWidth: 345,
  //   width: "629.34px",
  //   height: "261.67px",
  //   left: "108px",
  //   top: "694px",
  //   background: "#F5E9DE",
  //   border: "0.8px solid #BF7950",
  //   borderradius: "2px",
  // },
  card: {
    background: "#F5E9DE",
    border: `0.8px solid ${theme.palette.primary.main}`,
    borderRadius: "2px",
    marginBottom: theme.spacing(2),
  },
  divider: {
    margin: "20px 0",
    backgroundColor: theme.palette.primary.main,
    height: "1px",
  },
  title: {},
  // location: {
  //   display: "flex",
  // },
  // locationIcon: {
  //   alignSelf: "flex-end",
  // },
  // cardProperty: {
  //   padding: "20px 0px 0px 0px",
  // },
  // propertyText: {
  //   fontSize: 15,
  // },
  // addressText: {
  //   fontWeight: "bold",
  // },
}));

export default function CardProperty({
  imagePath,
  address,
  description,
  title,
  price,
}) {
  const classes = useStyles();

  return (
    <div className={classes.cardProperty}>
      <Card className={classes.card}>
        <Grid container xs={12}>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              alt={title}
              title={title}
              image={imagePath || "http://placehold.it/200"}
            />
          </Grid>

          <Grid item xs={6}>
            <CardContent>
              <Grid container>
                <Grid item xs={10}>
                  <Typography className={classes.title}>{title}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <LocationOnIcon fontSize="large" color="primary" />
                </Grid>
                <Grid item xs={2}>
                  <LocationOnIcon fontSize="large" color="primary" />
                </Grid>
                <Grid item xs={10}>
                  <Typography className={classes.address}>{address}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.price}>{price}</Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography>{description}</Typography>
                </Grid>
              </Grid>

              <Divider variant="middle" className={classes.divider} />
              <CardPropertyFeatures />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
