import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "20px 0",
    paddingLeft: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.primary.main,
    // fontStyle: "normal",
    // fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "24px",
  },
}));

const ProfileSectionTitle = (props) => {
  const classes = useStyles();
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

export default ProfileSectionTitle;
