import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import GTBLogo from "../../img/GTB-logo.png";
import ZenithBankLogo from "../../img/ZenithBank-Logo.png";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#FFFFFF",
    border: "1px solid #BF7950",
    boxSizing: "border-box",
    borderRadius: "2px",
    // paddingBottom: "50px",
    marginTop: theme.spacing(2),
  },
  title: {
    background: theme.palette.primary.main,
    color: "white",
    padding: theme.spacing(1, 2),
    // marginBottom: theme.spacing(5),
    fontSize: "1.1rem",
  },
  titleSpan: {
    fontSize: "1.3rem",
    fontWeight: "bold",
  },

  planContainer: {
    paddingLeft: theme.spacing(5),
    // marginBottom: theme.spacing(4),
    textAlign: "left",
  },
  priceContainer: {
    // paddingLeft: theme.spacing(5),
    marginTop: theme.spacing(4),
    textAlign: "left",
    padding: theme.spacing(2, 5),
    color: theme.palette.secondary.main,
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
  },
  historyContainer: {
    // paddingLeft: theme.spacing(5),
    marginBottom: theme.spacing(10),
    textAlign: "left",
    padding: theme.spacing(2, 5),
    color: theme.palette.secondary.main,
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
  },

  text: {
    color: "rgba(0, 0, 0, 0.51)",
    fontSize: "1.2rem",
  },
  textValue: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
    paddingRight: theme.spacing(2),
    marginLeft: "auto",
  },
  greenText: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  button1: {
    background: theme.palette.primary.main,
    borderRadius: theme.spacing(0.2),
    color: "white",
    fontSize: "1.2rem",
    "&:hover": {
      background: "white",
      color: theme.palette.primary.main,
      border: "2px solid #BF7950",
    },
  },
  button2: {
    marginLeft: "20px",
    background: "white",
    width: "101px",
    height: "45px",
    border: "2px solid #BF7950",
    borderRadius: theme.spacing(0.2),
    color: theme.palette.primary.main,
    fontSize: "1.2rem",
    "&:hover": {
      background: theme.palette.primary.main,
      color: "white",
    },
  },
  divider: {
    margin: "20px 0",
    backgroundColor: theme.palette.primary.main,
    height: "1px",
  },
  financialContainer: {
    // paddingLeft: theme.spacing(5),
    // marginTop: theme.spacing(4),
    textAlign: "left",
    padding: theme.spacing(2, 5),
    color: theme.palette.secondary.main,
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
  },
  imageContainer: {
    width: "150px",
    height: "150px",
    margin: "0 auto",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
}));

const details = [
  {
    name: "Duration",
    value: "Jan. 8 2020 to Jun. 7 2020 (6 months)",
  },
  {
    name: "Maximum Listings",
    value: "250 Listings",
  },
  {
    name: "Maximum Premium Listings",
    value: "50 Premium Listings",
  },
  {
    name: "Max. Featured Ad. Listings",
    value: "40 Featured Ad. Listings",
  },
];

const NewUpgrade = () => {
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
            New Subscription Plan:
            <span className={classes.titleSpan}>BRONZE</span>
          </Typography>
        </Grid>
        <Grid
          container
          className={classes.planContainer}
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12} sm container>
            {details.map((detail) => (
              <Grid item xs={12} key={detail.value}>
                <Typography style={{ display: "flex", marginTop: "15px" }}>
                  <span className={classes.text}>{detail.name}</span>
                  <span className={classes.textValue}>{detail.value}</span>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid container className={classes.priceContainer}>
          <Grid item xs={6}>
            <Typography className={classes.greenText}>Price</Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Typography
              style={{
                marginRight: "15px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {57000}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        className={classes.container}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} className={classes.title}>
          <Typography>Subscription History</Typography>
        </Grid>

        <Grid
          container
          className={classes.historyContainer}
          direction="row"
          justify="center"
          alignItems="center"
          style={{ paddingRight: "30px" }}
        >
          <Grid item xs={1}>
            <Typography>Plan</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>Duration</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Max. Listings</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Max. Prem.</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Max. Featured Ad.</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>Price</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Method</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>Status</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{ marginTop: "50px" }}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <Button className={classes.button1}>PROCEED </Button>
        </Grid>
        <Grid item xs={3}>
          <Button className={classes.button2}>BACK</Button>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>

      <div>
        <Divider variant="middle" className={classes.divider} />
        <Grid
          container
          className={classes.container}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} className={classes.title}>
            <Typography>Financial Partners</Typography>
          </Grid>

          <Grid container className={classes.financialContainer}>
            <Grid>
              <Typography>Payments should be made to</Typography>
            </Grid>
            <Grid item container style={{ margin: "30px 0" }}>
              <Grid item container xs={6} spacing={2}>
                <Grid item xs={3}>
                  <div className={classes.imageContainer}>
                    <img
                      src={ZenithBankLogo}
                      alt="Zenith Bank Logo"
                      className={classes.image}
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={9}
                  style={{
                    paddingTop: "50px",
                    paddingLeft: "30px",
                  }}
                >
                  <Typography className={classes.greenText}>
                    Terrell Davies Enterprise
                  </Typography>
                  <Typography className={classes.greenText}>
                    Acc No: 1234567890
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={6} spacing={2}>
                <Grid item xs={3}>
                  <div className={classes.imageContainer}>
                    <img
                      src={GTBLogo}
                      alt="GTB Logo"
                      className={classes.image}
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={9}
                  style={{
                    paddingTop: "50px",
                    paddingLeft: "30px",
                  }}
                >
                  <Typography className={classes.greenText}>
                    Terrell Davies Enterprise
                  </Typography>
                  <Typography className={classes.greenText}>
                    Acc No: 1234567890
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item container>
              <Grid item xs={12}>
                <Typography>
                  Payments are processed and confirmed within 24hrs. Please send
                  your payment receipt to payments@terrelldavies.co.uk
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default NewUpgrade;
