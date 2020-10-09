import React from "react";
import Typography from "@material-ui/core/Typography";
//IMPORT POST A REQUEST
import PostARequest from "../postARequest";
//IMPORT POST A REQUEST

//IMPORT ADVANCED FILTER
import AdvancedSearchFilter from "../advancedSearchFilter";
//IMPORT ADVANCED FILTER

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  //POST A REQUEST CSS.
  postARequestContainer: {
    background: "#F5E9DE",
    border: `0.8px solid ${theme.palette.primary.main}`,
    boxSizing: "border-box",
    borderRadius: "2px",
    padding: theme.spacing(8),
    color: theme.palette.primary.main,
    marginBottom: "20px",
  },
  //ADVANCED FILTER CSS.


  button: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "2px",
    fontSize: theme.spacing(2),
    color: "white",
    width: "100%",
    height: theme.spacing(7),
    "&:hover": {
      backgroundColor: "white",
      boxShadow: "none",
      color: theme.palette.primary.main,
      borderRadius: "2px",
      border: `0.8px solid ${theme.palette.primary.main}`,
    },
  },
  newsletterTitle: {
    textAlign: "left",
    fontWeight: "bold",
    color: theme.palette.secondary.main,
    fontSize: "30px",
    // lineHeight: "21px",
  },
  newsletterDesc: {
    fontSize: "18px",
    color: "rgba(0, 0, 0, 0.51)",
    margin: "30px 0",
  },
}));

const PostARequestButton = withStyles({
  root: {
    backgroundColor: " #BF7950",
    borderColor: "white",
    borderRadius: "2px",
    boxShadow: "none",
    color: "white",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    height: "50px",
    // border: "1px solid",
    lineHeight: 1.5,
    "&:hover": {
      backgroundColor: "white",
      borderColor: "white",
      boxShadow: "none",
      color: "#BF7950",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "white",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);

const RightColumn = () => {
  const classes = useStyles();
  return (
    <div>
      {
        //POST A REQUEST
      }
      <PostARequest />
      {
        //POST A REQUEST
      }
      {
        //ADVANCED SEARCHED FILTER
      }
      <AdvancedSearchFilter />
      {
        //ADVANCED SEARCHED FILTER
      }
      <Grid
        container
        className={classes.postARequestContainer}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography className={classes.newsletterTitle}>
            Subscribe to our Weekly Newsletter
          </Typography>
          <Typography className={classes.newsletterDesc}>
            Get weekly updates on the best deal on property {"&"} developments
            in Nigeria.
          </Typography>
          <PostARequestButton>SUBSCRIBE</PostARequestButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default RightColumn;
