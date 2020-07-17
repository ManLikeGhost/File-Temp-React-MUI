import React from "react";
import Property from "./Property";
import SectionTitle from "./sectionTitle";
import PropertyImage from '../img/houses/5.png'

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const iconSize = { fontSize: 90 };
const iconColor = "primary";

const properties = [
  {
    id: 0,
    imagePath:  PropertyImage,
    saleText:`Office spaces for sale`,
    address:`Skyline Towers, Adeola Odeku Street, V.I.`,
    details: <FavoriteIcon style={iconSize} color={iconColor} />,
    
  },
  {
    id: 1,
    imagePath: PropertyImage,
    saleText:`Office spaces for sale`,
    address:`Skyline Towers, Adeola Odeku Street, V.I.`,
    details: <FavoriteIcon style={iconSize} color={iconColor} />,
    
  },
  {
    id: 2,
    imagePath: PropertyImage,
    saleText:`Office spaces for sale`,
    address:`Skyline Towers, Adeola Odeku Street, V.I.`,
    details: <FavoriteIcon style={iconSize} color={iconColor} />,
  },
  {
    id: 3,
    imagePath: PropertyImage,
    saleText:`Office spaces for sale`,
    address:`Skyline Towers, Adeola Odeku Street, V.I.`,
    details: <FavoriteIcon style={iconSize} color={iconColor} />,
  },
];

function PropertiesList() {
  return (
    <div>
      <SectionTitle>Our Property Listings</SectionTitle>
      <Box p={(2, 4)}>
        <Grid container justify="center" alignItems="center" spacing={2}>
          {properties.map((property) => (
            <Grid key={property.id} item xs={3}>
              <Property imagePath={property.imagePath} saleText={property.saleText} address={property.address} details={property.details}  />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default PropertiesList;
