import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root:{
    // display: "inline-block",
    // verticalAlign: "top",
    // marginTop:`calc(100% - 500px)`
  },
  title: {
    margin: "20px 0",
    paddingLeft: theme.spacing(10),
    textAlign: "left",
    color: theme.palette.primary.main,
    fontSize: "24px",
    lineHeight: "24px",
  },
  subtitle: {
    margin: "20px 0",
    paddingLeft: theme.spacing(10),
    textAlign: "left",
    color: theme.palette.secondary.main,
    fontSize: "18px",
    lineHeight: "24px",
  },
}));

const ProfileSectionTitle = (props) => {
  console.log()
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h3">
            {props.children[0].props.children}
          </Typography>
          <Typography className={classes.subtitle} variant="h5">
            {props.children[1].props.children}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileSectionTitle;
