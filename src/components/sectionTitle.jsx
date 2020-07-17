import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.secondary,
  },
}));

const sectionTitle = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography className={classes.title}>
        {props.children}
    </Typography>
        </Grid>
      </Grid>
    </div>

    
  );
};

export default sectionTitle;
