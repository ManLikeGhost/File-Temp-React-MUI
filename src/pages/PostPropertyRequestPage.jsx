import React from "react";
import PostProperty from "../components/properties/postProperty";

import { makeStyles } from "@material-ui/core/styles";
import Footer from "../components/footer";
import NavigationHeader from "../components/navigationHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 40, 3, 40),
  },
}));

const PostPropertyRequestPage = () => {
  const classes = useStyles();
  return (
    <div className="BackgroundImage">
      <NavigationHeader />
      <div className={classes.root}>
        <PostProperty />
      </div>
      <Footer />
    </div>
  );
};

export default PostPropertyRequestPage;
