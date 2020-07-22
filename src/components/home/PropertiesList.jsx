import React from "react";
import Property from "./Property";
import SectionTitle from "../sectionTitle";
import {properties} from '../../demoData/demoData'

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";




function PropertiesList() {
  return (
    <div>
      <SectionTitle>Lastest Listed Properties</SectionTitle>
      <Box p={(2, 4)}>
        <Grid container justify="center" alignItems="center">
          {properties.map((property) => (
            <Grid key={property.id} item xs={4}>
              <Property imagePath={property.imagePath} saleText={property.saleText} address={property.address} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default PropertiesList;
