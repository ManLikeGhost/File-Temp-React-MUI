import React from "react";
import PropertyTitle from "./propertyTitle";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import CardPropertyList from "./cardPropertyList";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 40, 3, 40),
  },
  quickFilterContainer: {
    background: "#F5E9DE",
    border: `0.8px solid ${theme.palette.primary.main}`,
    boxSizing: "border-box",
    borderRadius: "2px",
    padding: theme.spacing(3),
    color: theme.palette.primary.main,
    marginBottom: "20px",
  },
  quickFilterTitle: {
    fontSize: "2rem",
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    margin: "0 0 10px 10px",
  },
  resultDropdownFilter: {
    width: "100%",
  },
  resultOf: {
    fontSize: "1.5rem",
    color: theme.palette.primary.main,
  },
}));

const QuickFilterButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    // border: "1px solid",
    lineHeight: 1.5,
    // backgroundColor: "#0063cc",
    // borderColor: "#0063cc",
    // fontFamily: [
    //   "-apple-system",
    //   "BlinkMacSystemFont",
    //   '"Segoe UI"',
    //   "Roboto",
    //   '"Helvetica Neue"',
    //   "Arial",
    //   "sans-serif",
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(","),
    "&:hover": {
      backgroundColor: " #BF7950",
      borderColor: "white",
      boxShadow: "none",
      color: "white",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "white",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);

const LeftColumn = () => {
  const classes = useStyles();
  const [filterByType, setFilterByType] = React.useState("");

  const handleFilterByTypeChange = (event) => {
    setFilterByType(event.target.value);
  };

  return (
    <div>
      <PropertyTitle>HI</PropertyTitle>
      <Grid container className={classes.quickFilterContainer}>
        <Grid item={12}>
          <Typography className={classes.quickFilterTitle}>
            Quick Filters
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item xs={2}>
            <QuickFilterButton color="primary" disableRipple>
              1 Bedroom
            </QuickFilterButton>
          </Grid>
          <Grid item xs={2}>
            <QuickFilterButton color="primary">2 Bedroom</QuickFilterButton>
          </Grid>
          <Grid item xs={2}>
            <QuickFilterButton color="primary">3 Bedroom</QuickFilterButton>
          </Grid>
          <Grid item xs={2}>
            <QuickFilterButton color="primary">4 Bedroom</QuickFilterButton>
          </Grid>
          <Grid item xs={2}>
            <QuickFilterButton color="primary">+5 Bedroom</QuickFilterButton>
          </Grid>
          <Grid item xs={2}>
            {/* <QuickFilterButton color="primary">6 Bedroom</QuickFilterButton> */}
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={2}>
            <QuickFilterButton color="primary">Mini Flat</QuickFilterButton>
          </Grid>
          <Grid item xs={2}>
            <QuickFilterButton color="primary">Single Room</QuickFilterButton>
          </Grid>
          <Grid item xs={2}>
            <QuickFilterButton color="primary">1 Bedroom</QuickFilterButton>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={2}>
            <QuickFilterButton color="primary">Serviced</QuickFilterButton>
          </Grid>
          <Grid item xs={2}>
            <QuickFilterButton color="primary">Furnished</QuickFilterButton>
          </Grid>
          <Grid item xs={2}>
            <QuickFilterButton color="primary">Non-furnished</QuickFilterButton>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        className={classes.quickFilterContainer}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Typography className={classes.resultOf}>Results 1-4 of 4</Typography>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <FormControl
            variant="outlined"
            className={classes.resultDropdownFilter}
          >
            <InputLabel id="demo-simple-select-helper-label">
              Filter By Type
            </InputLabel>
            <Select
              required
              fullWidth
              labelId="accountType"
              id="accountType"
              MenuItem
              value={filterByType}
              onChange={handleFilterByTypeChange}
            >
              <MenuItem value={"forRent"}>For Rent</MenuItem>
              <MenuItem value={"forSale"}>For Sale</MenuItem>
              <MenuItem value={"forShortlet"}>For Shortlet</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <CardPropertyList />
    </div>
  );
};

export default LeftColumn;
