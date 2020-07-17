import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import HeroImage from "../img/heroImage.png";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  heroImage: {
    position: "relative",
    backgroundColor: "transparent",
    color: theme.palette.common.white,
    marginTop: theme.spacing(4),
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
    right: 25,
    left: 25,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  heroContent: {
    position: "relative",
    // padding: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },

    marginTop: 100,
  },
  iconButton: {
    padding: 10,
  },
  searchForm: {
    marginTop: '30px',
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 700,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));
const HeroSection = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.heroImage}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={HeroImage} alt="" />}
      <div className={classes.overlay} />
      <Grid container justify="center">
        <Grid item md={8}>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              We help our clients make better informed decisions in real estate.
            </Typography>

            <Paper component="form" className={classes.searchForm}>
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
                <SearchIcon color="primary" />
              </IconButton>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HeroSection;
