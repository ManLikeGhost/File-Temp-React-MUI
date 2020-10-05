import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    // margin: "20px 0",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.primary.main,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "41px",
    lineHeight: "55px",
  },
}));

const ProfileTitle = (props) => {
  const classes = useStyles();
  // console.log(props);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h3">
            {props.children}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileTitle;
