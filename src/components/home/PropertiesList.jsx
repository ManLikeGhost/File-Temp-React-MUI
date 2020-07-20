import React from "react";
import Property from "./Property";
import SectionTitle from "../sectionTitle";
import {properties} from '../../demoData/demoData'

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";




function PropertiesList() {
  return (
    <div>
      <SectionTitle>Our Property Listings</SectionTitle>
      <Box p={(2, 4)}>
        <Grid container justify="center" alignItems="center" spacing={2}>
          {properties.map((property) => (
            <Grid key={property.id} item xs={3}>
              <Property imagePath={property.imagePath} saleText={property.saleText} address={property.address} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default PropertiesList;
