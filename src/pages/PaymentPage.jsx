import React from "react";
import Payment from "../components/subscriptionPlan/payment";

import { makeStyles } from "@material-ui/core/styles";
import Footer from "../components/footer";
import NavigationHeader from "../components/navigationHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 40, 3, 40),
  },
}));

const PaymentPage = () => {
  const classes = useStyles();
  return (
    <div className="BackgroundImage">
      <NavigationHeader />
      <div className={classes.root}>
        <Payment />
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;
