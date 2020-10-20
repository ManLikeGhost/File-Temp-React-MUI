import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import NavigationHeader from "../components/navigationHeader.jsx";
import MarbleBackground from "../img/MarbleBackground.png";
import Footer from "../components/footer";
import SaleRentShortlet from "../components/home/saleRentShortlet";

import SinglePropertyLeft from "../components/properties/singlePropertyLeft";
import SinglePropertyRight from "../components/properties/singlePropertyRight";
import { detailsProperties } from "../demoData/demoDataCard";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import SinglePropertyTitle from "../components/properties/singlePropertyTitle.jsx";

const useStyles = makeStyles((theme) => ({
  progress: {
    textAlign: "center",
    margin: "5rem auto"
  },

  backgroundImage: {
    background: `url(${MarbleBackground}) no-repeat center center fixed`,
    backgroundSize: "cover",
  },

  holder: {
    margin: "20px 50px 20px 50px",
  },
}));

const SinglePropertyPage = () => {
  const { propertyId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [property, setProperty] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://api.terrelldavies.com/api/property/${propertyId}`
      );
      setProperty(result.data[0]);
      console.log(result.data[0])
      setIsLoading(false);
    }
    fetchData();
  }, [propertyId]);

  const classes = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <NavigationHeader />
      {isLoading ? (
        <div className={classes.progress}>
          <CircularProgress size="10rem"/>
        </div>
      ) : (
        <div className={classes.holder}>
          <Grid container spacing={6}>
            <Grid item container xs={8}>
              <SinglePropertyTitle
                title={property.title}
                address={property.location}
                price={property.budget}
              />
            </Grid>
            <Grid item container xs={8}>
              <SinglePropertyLeft property={property} />
            </Grid>

            <Grid item container xs={4}>
              <SinglePropertyRight />
            </Grid>
          </Grid>
        </div>
      )}

      <SaleRentShortlet />
      <Footer />
    </div>
  );
};
export default SinglePropertyPage;
