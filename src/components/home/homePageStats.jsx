import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EstateAgentImage from "../../img/Estate-Agent.png";
import AreasCoveredImage from "../../img/Areas-Covered.png";
import PropertyListingImage from "../../img/Property-Listings.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F5E9DE",
    marginTop: theme.spacing(5)
  },
  container: {
      margin: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridItem: {
    textAlign: "center",
    margin: '100px 0'
  },
number: {
    fontWeight: 'bold'
}
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center" alignItems="center" className={classes.container}>
        <Grid item xs={4} className={classes.gridItem}>
          <img src={EstateAgentImage} alt="" height="100" />
          <Typography variant="h2" color="secondary" className= {classes.number}>
            18,585
          </Typography>
          <Typography variant="h6" color='primary'>ESTATE AGENTS</Typography>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <img src={PropertyListingImage} alt="" height="100" />
          <Typography variant="h2" color="secondary" className= {classes.number}>
          27,086
          </Typography>
          <Typography variant="h6" color='primary'>PROPERTY LISTINGS</Typography>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <img src={AreasCoveredImage} alt="" height="100" />
          <Typography variant="h2" color="secondary" className= {classes.number}>
          3,620
          </Typography>
          <Typography variant="h6" color='primary'>AREAS COVERED</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
