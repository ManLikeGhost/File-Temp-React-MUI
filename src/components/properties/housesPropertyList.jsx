import React from "react";
import { detailsProperties } from "../../demoData/demoDataCard";

import CardProperty from "./cardProperty";
import Grid from "@material-ui/core/Grid";


const HousesPropertyList = ({properties}) => {
  console.log(properties)
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        
        {[].map((cardProperty) => (
          <Grid key={cardProperty.id} item xs={12}>
            <CardProperty
              title={cardProperty.title}
              imagePath={cardProperty.imagePath}
              saleText={cardProperty.saleText}
              address={cardProperty.address}
              price={cardProperty.price}
              description={cardProperty.description}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default HousesPropertyList;
