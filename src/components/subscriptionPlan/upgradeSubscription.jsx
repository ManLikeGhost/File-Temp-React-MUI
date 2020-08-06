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
    paddingBottom: "50px",
  },
  title: {
    background: theme.palette.primary.main,
    color: "white",
    padding: theme.spacing(1, 2),
    marginBottom: theme.spacing(5),
    fontSize: "1.1rem",
  },
  titleSpan: {
    fontSize: "1.3rem",
    fontWeight: "bold",
  },

  listingContainer: {
    paddingLeft: theme.spacing(5),
    // marginBottom: theme.spacing(4),
    textAlign: "left",
  },
  divider: {
    border: "1px solid #BF7950",
    margin: theme.spacing(6, 0),

    width: "90%",
    background: theme.palette.primary.main,
  },
  text: {
    color: "rgba(0, 0, 0, 0.51)",
    fontSize: "1.2rem",
  },
  textValue: {
    color: theme.palette.primary.main,
  },
}));

const UpgradeSubscription = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        className={classes.container}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} className={classes.title}>
          <Typography>
            Current Subscription Status: <span className={classes.titleSpan} >STANDARD</span>
          </Typography>
        </Grid>
        <Grid
          container
          className={classes.listingContainer}
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Typography className={classes.text}>
              Listings: <span className={classes.textValue}>{5}</span>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.text}>
              Premium Listings: <span className={classes.textValue}>{0}</span>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.text}>
              Featured Ad Listings:{" "}
              <span className={classes.textValue}>{0}</span>
            </Typography>
          </Grid>
        </Grid>

        <Divider variant="middle" className={classes.divider} />
        <Grid container className={classes.listingContainer}>
          <Grid item xs={4}>
            <Typography className={classes.text}>
              Expiry Date:<span className={classes.textValue}>{0}</span>{" "}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

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
