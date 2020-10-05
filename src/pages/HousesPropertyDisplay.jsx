import React,{useState, useEffect} from "react";
import axios from "axios";
import NavigationHeader from "../components/navigationHeader.jsx";
import MarbleBackground from "../img/MarbleBackground.png";
import Footer from "../components/footer";
import SaleRentShortlet from "../components/home/saleRentShortlet";

import HousesPropertyList from "../components/properties/housesPropertyList";
import LeftColumn from "../components/properties/leftColumn";
import RightColumn from "../components/properties/rightColumn";

import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    background: `url(${MarbleBackground}) no-repeat center center fixed`,
    backgroundSize: "cover",
  },

  holder: {
    margin: "20px 50px 20px 50px",
  },
}));

const HousesPropertyDisplay = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios("https://api.terrelldavies.com/api/properties");
      setProperties(result.data.data);
    }
    fetchData();
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <NavigationHeader />
      <div className={classes.holder}>
        <Grid container spacing={6}>
          <Grid item container xs={8}>
            <LeftColumn title="Houses for rent in Nigeria" />
            <HousesPropertyList properties={properties}/>
          </Grid>
          <Grid item container xs={4}>
            <RightColumn />
          </Grid>
        </Grid>
      </div>

      {/* <SaleRentShortlet /> */}
      <Footer />
    </div>
  );
};
export default HousesPropertyDisplay;
