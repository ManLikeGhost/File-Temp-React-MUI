import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    margin: "50px",
    height: "100vh",
  },
  textStyle: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "55px",
    lineHeight: "73px",
    textAlign: "center",
    color: theme.palette.primary.main,
    marginTop: 200,
  },
  buttonContainer: {
    marginTop: 80,
    textAlign: "center",
    color: theme.palette.secondary.text,
  },
  button: {
    margin: theme.spacing(1),
    color: theme.palette.primary.contrastText,
    fontSize: 21,
    borderRadius: 1,
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));

const AddListingSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography className={classes.textStyle}>
            Are you a real estate agent, List your Property here
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            ADD LISTINGS
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddListingSection;
