import React from "react";
// import { detailsProperties } from "../../demoData/demoDataCard";
import { Link } from "react-router-dom";
import CardProperty from "./cardProperty";
import Grid from "@material-ui/core/Grid";

const PropertiesList = ({ properties }) => {
  
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        {properties.map((property) => (
          <Grid key={property.id} item xs={12}>
            <Link to={`/properties/${property.id}`}>
              <CardProperty {...property} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default PropertiesList;
