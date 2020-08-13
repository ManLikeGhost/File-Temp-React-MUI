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
}))

const payment = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <img src={Logo} alt="logo" width="50px" />
        </Grid>
        <Grid item xs={6} style={{marginLeft: "auto"}}>
          <Typography>john.doe@xyz.com</Typography>
          <Typography>Pay N57,000</Typography>
        </Grid>
      </Grid>
      <Divider />
      <Typography>Enter your debit card details to pay</Typography>

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
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <span>
            <HttpsIcon color="primary" />
          </span>

          <Typography>Secured by</Typography>
        </Grid>
        <Grid item xs={3}>
          <img src={PaystackLogo} alt="Paystack logo" />
        </Grid>
      </Grid>
    </div>
  );
};

export default payment;
