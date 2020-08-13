import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    background: "#FFFFFF",
    border: "1px solid #BF7950",
    boxSizing: "border-box",
    borderRadius: "2px",
    paddingBottom: "50px",
    marginTop: theme.spacing(2),
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
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  button: {
    background: theme.palette.primary.main,
    borderRadius: theme.spacing(0.2),
    color: "white",
    fontSize: "1.2rem",
    "&:hover": {
      background: "white",
      color: theme.palette.primary.main,
    },
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
            Current Subscription Status:
            <span className={classes.titleSpan}>STANDARD</span>
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
          <Grid item xs={6}>
            <Typography className={classes.text}>
              Expiry Date:
              <span className={classes.textValue}>
                {0} {`(0 Months)`}
              </span>
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
          <Typography>Upgrade Details</Typography>
        </Grid>

        <Grid
          container
          className={classes.listingContainer}
          direction="row"
          justify="center"
          alignItems="center"
          style={{ paddingRight: "30px" }}
        >
          <Link href="/subscription-plans"  style={{marginLeft: "auto"}}>
            <Typography>See Plans</Typography>
          </Link>

          <Grid item xs={12}>
            <TextField
              id="select-subscription"
              select
              label="New Subscription Plan"
              variant="outlined"
              fullWidth="true"
            >
              <MenuItem value={"realEstateAgent"}>Real Estate Agent</MenuItem>
              <MenuItem value={"propertyDeveloper"}>
                Property Developer
              </MenuItem>
              <MenuItem value={"homeOwner"}>Home Owner</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.listingContainer}
          spacing={3}
          style={{ marginTop: "10px", paddingRight: "30px" }}
        >
          <Grid item xs={6}>
            <TextField
              id="select-subscription"
              select
              label=" Duration"
              variant="outlined"
              fullWidth="true"
            >
              <MenuItem value={"realEstateAgent"}>Real Estate Agent</MenuItem>
              <MenuItem value={"propertyDeveloper"}>
                Property Developer
              </MenuItem>
              <MenuItem value={"homeOwner"}>Home Owner</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="select-subscription"
              select
              label="Payment Method"
              variant="outlined"
              fullWidth="true"
            >
              <MenuItem value={"realEstateAgent"}>Real Estate Agent</MenuItem>
              <MenuItem value={"propertyDeveloper"}>
                Property Developer
              </MenuItem>
              <MenuItem value={"homeOwner"}>Home Owner</MenuItem>
            </TextField>
          </Grid>
          <Grid container justify="flex-end">
            <Grid item style={{ paddingRight: "10px", marginTop: "10px" }}>
              <Button href="/new-upgrade" className={classes.button}>PROCEED</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpgradeSubscription;
