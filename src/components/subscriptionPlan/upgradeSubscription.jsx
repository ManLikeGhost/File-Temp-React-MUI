import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const UpgradeSubscription = () => {
  return (
    <div>
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
          Premium Listings: {0}{" "}
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
          Premium Listings: {0}{" "}
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
