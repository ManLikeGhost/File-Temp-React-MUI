import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/core/styles";
import MarbleBackground from "../../img/MarbleBackground.png";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(5),
    backgroundImage: `url(${MarbleBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: theme.spacing(10),
  },
  firstText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: theme.spacing(2),
    // lineHeight: "27px",
    color: theme.palette.primary.main,
  },
  secondText: {
    fontWeight: "bold",
    fontSize: theme.spacing(3),
    // lineHeight: "27px",
    color: theme.palette.secondary.main,
  },
}));

const ContactDetails = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={3}>
          <Typography className={classes.firstText}>
            We are here to help
          </Typography>
          <Typography className={classes.secondText}>
            <Link color="inherit" href="tel:2348121412045">
              +234 812 141 2045
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.firstText}>Let’s talk</Typography>
          <Typography className={classes.secondText}>
            <Link color="inherit" href="mailto:help@terrelldavies.co.uk">
              help@terrelldavies.co.uk
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid
          item
          xs={3}
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Link color="inherit" href="#">
            <FacebookIcon color="primary" fontSize="large" />
          </Link>

           <Link href="#"><InstagramIcon color="primary" fontSize="large" /></Link>
           <Link href="#"><LinkedInIcon color="primary" fontSize="large" /></Link>
           <Link href="#"><TwitterIcon color="primary" fontSize="large" /></Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactDetails;
