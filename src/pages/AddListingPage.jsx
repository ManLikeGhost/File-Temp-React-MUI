import React from "react";
import AddListing from "../components/properties/addListing";

import { makeStyles } from "@material-ui/core/styles";
import Footer from "../components/footer";
import NavigationHeader from "../components/navigationHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 40, 3, 40),
  },
}));


// let currentUser = localStorage.getItem(ACCESS_TOKEN_NAME);

const AddListingPage = () => {
  const classes = useStyles();
  return (
    <div className="BackgroundImage">
      <NavigationHeader />
      <div className={classes.root}>
        <AddListing />
      </div>
      <Footer />
    </div>
  );
};

export default AddListingPage;
