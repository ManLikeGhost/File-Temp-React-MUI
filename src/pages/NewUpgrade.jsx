import React from "react";
import NewUpgrade from "../components/subscriptionPlan/newUpgrade";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../components/footer";
import NavigationHeader from "../components/navigationHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 40, 3, 40),
  },
}));

const NewUpgradePage = () => {
  const classes = useStyles();
  return (
    <div className="BackgroundImage">
      <NavigationHeader />
      <div className={classes.root}>
        <NewUpgrade />
      </div>
      <Footer />
    </div>
  );
};

export default NewUpgradePage;
