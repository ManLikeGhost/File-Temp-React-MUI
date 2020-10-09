import React from 'react'

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";


import { makeStyles, withStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    postARequestContainer: {
      background: "#F5E9DE",
      border: `0.8px solid ${theme.palette.primary.main}`,
      boxSizing: "border-box",
      borderRadius: "2px",
      padding: theme.spacing(8),
      color: theme.palette.primary.main,
      marginBottom: "20px",
    },
    postARequestText: {
      textAlign: "center",
      fontWeight: 900,
      fontSize: theme.spacing(3),
      color: theme.palette.secondary.main,
      marginBottom: theme.spacing(3),
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


const PostARequest = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid
            container
            className={classes.postARequestContainer}
            justify="center"
            alignItems="center"
            >
                <Grid item xs={12} style={{ textAlign: "center" }}>
                <Typography className={classes.postARequestText}>
                    Can’t find your ideal property?
                </Typography>
                <Link href="/post-property-request">
                    <PostARequestButton>POST A REQUEST</PostARequestButton>
                </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default PostARequest
