import React, { useState, useEffect } from "react";
import authHeader from "../../services/auth-header";
import history from "../../history";
import { API_BASE_URL} from "../../constants/apiConstants";

import { Link } from "react-router-dom";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
// import Link from "@material-ui/core/Link";
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
  form: {
    width: "100%", // Fix IE 11 issue.

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
  const [subscription, setSubscription] = useState({
    plan: "",
    duration: "",
    paymentMethod: "",
  });

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://api.terrelldavies.com/api/subscription",
        {
          headers: authHeader(),
        }
      );
      // console.log(result);
      // setPlan(result.data.data);
    }
    fetchData();
  }, []);

  const handleChange = (name) => (event) => {
    setSubscription({
      ...subscription,
      [name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

      axios
        .post(API_BASE_URL + "/subscribe",subscription)
        .then((response) => {
          history.push('/new-upgrade')
          window.location.reload();
        //  console.log(response)
        })
        .catch((err) => {
          // console.log(err);
          // setLoading(false);
        });
    }

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
              Featured Ad Listings:
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
          <Link to="/subscription-plans" style={{ marginLeft: "auto" }}>
            <Typography>See Plans</Typography>
          </Link>
        </Grid>
        <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit}
          >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.listingContainer}
          spacing={3}
          style={{ marginTop: "10px", paddingRight: "30px" }}
        >
           
            <Grid item xs={12}>
            <TextField
              id="select-subscription"
              select
              label="New Subscription Plan"
              variant="outlined"
              fullWidth="true"
              value={subscription.plan}
              onChange={handleChange("plan")}
            >
              <MenuItem value={"standard"}>Standard ₦0</MenuItem>
              <MenuItem value={"bronze"}>Bronze ₦10,000</MenuItem>
              <MenuItem value={"Silver"}>Silver ₦15,000</MenuItem>
              <MenuItem value={"Gold"}>Gold ₦20,000</MenuItem>
              <MenuItem value={"Platinum"}>Platinum ₦25,000</MenuItem>
              <MenuItem value={"Platinum+"}>Platinum+ ₦35,000</MenuItem>
            </TextField>
          </Grid>
          
          <Grid item xs={6}>
            <TextField
              id="select-subscription"
              select
              label=" Duration"
              variant="outlined"
              fullWidth="true"
              value={subscription.duration}
              onChange={handleChange("duration")}
            >
              <MenuItem value={"1"}>1 Month</MenuItem>
              <MenuItem value={"2"}>2 Months</MenuItem>
              <MenuItem value={"3"}>3 Months</MenuItem>
              <MenuItem value={"4"}>4 Months</MenuItem>
              <MenuItem value={"57"}>5 Months</MenuItem>
              <MenuItem value={"6"}>6 Months</MenuItem>
              <MenuItem value={"7"}>7 Months</MenuItem>
              <MenuItem value={"8"}>8 Months</MenuItem>
              <MenuItem value={"9"}>9 Months</MenuItem>
              <MenuItem value={"10"}>10 Months</MenuItem>
              <MenuItem value={"11"}>11 Months</MenuItem>
              <MenuItem value={"12"}>12 Months</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="select-subscription"
              select
              label="Payment Method"
              variant="outlined"
              fullWidth="true"
              value={subscription.paymentMethod}
              onChange={handleChange("paymentMethod")}
            >
              <MenuItem value={"realEstateAgent"}>Online Payment</MenuItem>
              <MenuItem value={"propertyDeveloper"}>Alternate Payment</MenuItem>
            </TextField>
          </Grid>
          <Grid container justify="flex-end">
            <Grid item style={{ paddingRight: "10px", marginTop: "10px" }}>
              <Button className={classes.button}>PROCEED</Button>
            </Grid>
          </Grid>
        </Grid>
        </form>
      </Grid>
    </div>
  );
};

export default UpgradeSubscription;
