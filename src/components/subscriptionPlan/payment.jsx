import React from "react";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import HttpsIcon from "@material-ui/icons/Https";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../img/logo.png";
import PaystackLogo from "../../img/paystack-logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#FFFFFF",
    border: "1px solid #BF7950",
    boxSizing: "border-box",
    borderRadius: "2px",
    // paddingBottom: "50px",
    marginTop: theme.spacing(2),
    padding: theme.spacing(6),
  },
  text: {
    color: "rgba(0, 0, 0, 0.51)",
    fontSize: "1rem",
  },
  amount: {
    color: theme.palette.secondary.main,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  divider: {
    margin: "40px 0",
    backgroundColor: theme.palette.primary.main,
    height: "1px",
  },
  info: {
    color: theme.palette.secondary.main,
    fontSize: "1.2rem",
    textAlign: "center",
    fontWeight: "bold",
    margin: theme.spacing(1, 0, 8, 0),
  },
}));

const Payment = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <img src={Logo} alt="logo" width="50px" />
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <Typography className={classes.text}>john.doe@xyz.com</Typography>
          <Typography className={classes.text}>
            Pay <span className={classes.amount}>N57,000</span>{" "}
          </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Typography className={classes.info}>
        Enter your debit card details to pay
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={12} sm={12}>
          <TextField
            required
            id="cardNumber"
            label="CARD NUMBER"
            defaultValue="0000 0000 0000 0000"
            fullWidth
            autoComplete="cc-number"
            variant="outlined"
            className={classes.text}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="CARD EXPIRY"
            defaultValue="MM/YY"
            helperText="Card Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="outlined"
            className={classes.text}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            defaultValue="123"
            helperText="Last three digits at the back of your card"
            fullWidth
            autoComplete="cc-csc"
            variant="outlined"
            className={classes.text}
          />
        </Grid>
      </Grid>

      <Grid container style={{ marginTop: "50px" }}>
        <Grid item xs={4}></Grid>
        <Grid item xs={6}>
          <div style={{ display: "flex" }}>
            <HttpsIcon color="primary" />
            <Typography>Secured by</Typography>
            <img src={PaystackLogo} alt="Paystack logo" width="100px" />
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
};

export default Payment;
