import React from "react";
import UpgradeSubscription from "../components/subscriptionPlan/upgradeSubscription";
import { makeStyles } from "@material-ui/core/styles";
import Footer from '../components/footer';
import NavigationHeader from '../components/navigationHeader'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 50, 3, 50),

  },
}));

const UpgradeSubscriptionPage = () => {
  const classes = useStyles();
  return (
    <div className="BackgroundImage">
        <NavigationHeader />
      <div className={classes.root}>
        <UpgradeSubscription />
      </div>
      <Footer/>
    </div>
  );
};

export default UpgradeSubscriptionPage;
