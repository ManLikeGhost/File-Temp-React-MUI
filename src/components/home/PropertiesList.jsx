import React, { useState, useEffect }  from "react";
import axios from "axios";
import Property from "./Property";
import SectionTitle from "../sectionTitle";
import {properties} from '../../demoData/demoData';

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function PropertiesList() {
  const [newProperties, setNewProperties] = useState(properties);
const [currentProperties, setCurrentProperties] = useState(3)
const displayProperties = newProperties.slice(0, currentProperties);


  useEffect(() => {
    async function fetchData() {
      // You can await here
      const result = await axios(
        'https://api.terrelldavies.com/api/properties');
        // console.log(result.data.data)
        setNewProperties(result.data.data)
    }
    fetchData();
  }, []);
  return (
    <div>
      <SectionTitle>Lastest Listed Properties</SectionTitle>
      <Box p={(2, 4)}>
        <Grid container justify="center" alignItems="center">
          {displayProperties.map((property) => (
            <Grid key={property.id} item xs={4}>
              <Property imagePath={property.galleryImage} title={property.title} address={property.metaDescription} {...property}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default PropertiesList;
