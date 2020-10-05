import React from "react";
// import { detailsProperties } from "../../demoData/demoDataCard";

import CardProperty from "./cardProperty";
import Grid from "@material-ui/core/Grid";

const PropertiesList = ({ properties }) => {
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        {properties.map((property) => (
          <Grid key={property.id} item xs={12}>
            <CardProperty {...property} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default PropertiesList;
