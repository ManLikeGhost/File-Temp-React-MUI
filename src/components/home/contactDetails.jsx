import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
  root:{
    margin: theme.spacing(2),
    marginLeft: theme.spacing(5)
  },
  firstText:{
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: theme.spacing(2),
    // lineHeight: "27px",
    color: theme.palette.primary.main
  },
  secondText:{
    fontWeight: "bold",
    fontSize: theme.spacing(3),
    // lineHeight: "27px",
    color: theme.palette.secondary.main
  }
}))

const contactDeatils = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
    <Grid container direction='row' justify='center' alignItems='center'>
      <Grid item xs={4}>
        <Typography className={classes.firstText}>We are here to help</Typography>
        <Typography className={classes.secondText}>+234 812 141 2045</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography className={classes.firstText}>Let’s talk</Typography>
        <Typography className={classes.secondText}>help@terrelldavies.co.uk</Typography>
      </Grid>
      <Grid item xs={4}>
        <FacebookIcon color='primary' fontSize='large'/>
        <InstagramIcon color='primary' fontSize='large'/>
        <LinkedInIcon color='primary' fontSize='large'/>
        <TwitterIcon color='primary' fontSize='large'/>
      </Grid>
    </Grid>
    </div>
  )
};

export default contactDeatils;
