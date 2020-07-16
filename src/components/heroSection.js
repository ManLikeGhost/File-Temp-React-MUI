import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import HeroImage from "../img/heroImage.png";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  heroImage: {
    position: "relative",
    // backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    height: "100vh",
    backgroundImage: `url(${HeroImage})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    // backgroundColor: "rgba(0,0,0,.3)",
  },
  heroContent: {
    position: "relative",
    // padding: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    // marginLeft: theme.spacing(5),
    marginTop: 100,
  },
  searchField: {
    backgroundColor: "white",
  },
  iconButton: {
    padding: 10,
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));
const HeroSection = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.heroImage}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={HeroImage} alt="" />}
      <div className={classes.overlay} />
      <Grid container justify="center">
        <Grid item md={6}>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              We help our clients make better informed decisions in real estate.
            </Typography>
            {/* <TextField id="filled-search" 
            fullWidth
            className={classes.searchField}
            type="search" 
            variant="filled" 
            placeholder="SEARCH BY STATE, AREA, OR CITY "/> */}
            <Paper component="form" className={classes.root}>
          
              <InputBase
                className={classes.input}
                placeholder="SEARCH BY STATE, AREA, OR CITY "
                inputProps={{ "aria-label": "search by state" }}
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              {/* <Divider className={classes.divider} orientation="vertical" /> */}
             
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HeroSection;

// div className={styles.heroImage}>
//     <Typography>
//     We help our clients make better informed decisions in real estate.
//     </Typography>
//   </div>
