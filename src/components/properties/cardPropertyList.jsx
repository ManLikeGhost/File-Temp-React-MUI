import React from "react";
import { detailsProperties } from "../../demoData/demoDataCard";

import CardProperty from "./cardProperty";
import Grid from "@material-ui/core/Grid";

// import MarbleBackground from "../img/MarbleBackground.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    height: "80vh",
    // backgroundImage: `url(${MarbleBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // width: `calc(100vw + 48px)`,
  },
}));

const CardPropertyList = () => {
  // const classes = useStyles();
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        {detailsProperties.map((cardProperty) => (
          <Grid key={cardProperty.id} item xs={12}>
            <CardProperty
              imagePath={cardProperty.imagePath}
              saleText={cardProperty.saleText}
              address={cardProperty.address}
              description={cardProperty.description}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default CardPropertyList;