import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "20px 0",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.secondary.main,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "41px",
    lineHeight: "55px",
  },
}));

const SectionTitle = (props) => {
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

export default SectionTitle;
