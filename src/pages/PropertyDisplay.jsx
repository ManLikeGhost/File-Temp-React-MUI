import React from "react";
import NavigationHeader from "../components/navigationHeader.jsx";
import MarbleBackground from "../img/MarbleBackground.png";
import Footer from "../components/footer";
import SaleRentShortlet from "../components/home/saleRentShortlet";

import CardPropertyList from "../components/properties/cardPropertyList";
import LeftColumn from "../components/properties/leftColumn";
import RightColumn from "../components/properties/rightColumn";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import FilterListIcon from "@material-ui/icons/FilterList";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    background: `url(${MarbleBackground}) no-repeat center center fixed`,
    backgroundSize: "cover",
  },
  cardRight: {
    background: "#F5E9DE",
    width: "324px",
    height: "200px",
    left: "848px",
    top: "189px",
    border: "0.8px solid #BF7950",
    boxsizing: "border-box",
    borderradius: "2px",
    margin: "0px 0px 20px 0px",
    //padding: "0px 0px 10px 0px",
  },

  filters: {
    width: "630px",
    height: "199px",
    left: "108px",
    top: "373px",
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    boxsizing: "border-box",
    borderradius: "2px",
    margin: "10px",
  },

  homeImg: {
    width: "629.34",
    height: "261.67px",
    left: "108px",
    top: "694px",
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    borderradius: "2px",
    margin: "10px 0px 0px 0px",
  },

  dropdownMenu: {
    width: "630px",
    height: "71px",
    left: "108px",
    top: "598px",
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    boxsizing: "border-box",
    borderradius: "2px",
  },

  holder: {
    margin: "20px 50px 20px 50px",
  },

  typo: {
    width: "235px",
    height: "50px",
    left: "894px",
    top: "236px",
    fontFamily: "Metropolis",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "25px",
    lineHeight: "25px",
    color: "#04403A",
  },

  typohead: {
    width: "525px",
    height: "65px",
    left: "108px",
    top: "230px",
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "49px",
    padding: "0px 0px 0px 10px",
    lineHeight: "65px",
    color: "#BF7950",
  },

  bar: {
    width: "630px",
    height: "299px",
    left: "108px",
    top: "373px",
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    boxSizing: "border-box",
    borderRadius: "2px",
    margin: "0px 0px 10px 0px",
  },

  button: {
    marginLeft: "60px",
    color: theme.palette.primary.contrastText,
    fontSize: 21,
    borderRadius: 1,
    border: `2px solid ${theme.palette.primary.main}`,
    width: "256.47px",
    height: "29.55px",
    background: "#BF7950",
    borderradius: "2px",
  },

  aFilters: {
    width: "323.89px",
    height: "531.52px",
    left: "848.11px",
    top: "438px",
    background: "#FFFFFF",
    border: "0.8px solid #BF7950",
    borderradius: "2px",
    margin: "0px 0px 20px 0px",
  },

  textpaper: {
    textAlign: "center",
    background: "#F5E9DE",
  },

  dropText: {
    margin: "20px 0px 0px 30px",
    width: "136px",
    height: "20px",
    left: "137px",
    top: "626px",
    fontfamily: "Metropolis",
    fontstyle: "normal",
    fontweight: "normal",
    fontsize: "20px",
    lineheight: "20px",
    color: "#BF7950",
  },

  dropMenu: {
    width: "136px",
  },

  cardProp: {
    padding: "10px 0px 0px 0px",
  },

  locations: {
    padding: "0px 0px 10px 0px",
    width: "288.46px",
  },

  category: {
    padding: "0px 0px 10px 0px",
    width: "288.46px",
  },
  types: {
    padding: "0px 0px 10px 0px",
    width: "129px",
  },
  bedrooms: {
    padding: "0px 0px 10px 0px",
    width: "129px",
  },
  ref: {
    padding: "0px 0px 10px 0px",
    width: "129px",
  },
  keywords: {
    padding: "0px 0px 10px 0px",
    width: "129px",
  },
  added: {
    padding: "0px 0px 10px 0px",
    width: "129px",
  },
  furnished: {
    padding: "0px 0px 10px 0px",
    width: "129px",
  },
  MaxPrice: {
    padding: "0px 0px 10px 0px",
    width: "129px",
  },
  MinPrice: {
    padding: "0px 0px 10px 0px",
    width: "129px",
  },
  papah: {
    width: "323.89px",
    padding: "10px 0px 10px 0px",
    height: "595.19px",
    left: "848px",
    top: "981.59px",
    background: "#FFFFFF",
    border: "0.8px solid #BF7950",
    borderradius: "2px",
    margin: "0px 0px 20px 0px",
  },
}));

const PropertyDisplay = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <NavigationHeader />
      <div className={classes.holder}>
        <Grid container spacing={6}>
          <Grid item container xs={8}>
            <LeftColumn />
            <CardPropertyList />
          </Grid>

          <Grid item container xs={4}>
            <RightColumn />
          </Grid>
        </Grid>
      </div>

      <SaleRentShortlet />
      <Footer />
    </div>
  );
};
export default PropertyDisplay;
