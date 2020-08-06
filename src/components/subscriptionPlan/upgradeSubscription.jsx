import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    background: "#FFFFFF",
    border: "1px solid #BF7950",
    boxSizing: "border-box",
    borderRadius: "2px",
  },
  title: {
    background: theme.palette.primary.main,
    color: "white",
    padding: theme.spacing(1, 2),
    marginBottom: theme.spacing(5),
  },
  listingContainer: {
    padding: theme.spacing(1, 2),
    marginBottom: theme.spacing(5),
  },
  divider: {
    // border: "1px solid #BF7950",
    margin: "20px 0",
    backgroundColor: theme.palette.primary.main,
    height: "1px",
  },
}));

const UpgradeSubscription = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.title}>
          <Typography>
            Current Subscription Status: <span>STANDARD</span>
          </Typography>
        </Grid>
        <Grid container className={classes.listingContainer}>
          <Grid item xs={4}>
            Listings: {5}
          </Grid>
          <Grid item xs={4}>
            Premium Listings: {0}
          </Grid>
          <Grid item xs={4}>
            Featured Ad Listings: 0
          </Grid>
        </Grid>

        <Divider variant="middle" className={classes.divider} />
        <Grid item xs={4}>
          Expiry Date: 0
        </Grid>
      </Grid>
      <Grid container></Grid>
      <Grid container>
        <Grid item xs={12}>
          <Typography>
            Current Subscription Status: <span>STANDARD</span>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          Listings: {5}
        </Grid>
        <Grid item xs={4}>
          Premium Listings: {0}
        </Grid>
        <Grid item xs={4}>
          Featured Ad Listings: 0
        </Grid>
        <Divider />
        <Grid item xs={4}>
          Expiry Date: 0
        </Grid>
      </Grid>
      <Grid container></Grid>
    </div>
  );
};

export default UpgradeSubscription;
