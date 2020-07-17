import React from "react";
import Property from "./Property";
import SectionTitle from "./sectionTitle";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const iconSize = { fontSize: 90 };
const iconColor = "primary";

const Properties = [
  {
    id: 0,
    imagePath,
    saleText,
    address,
    details: <FavoriteIcon style={iconSize} color={iconColor} />,
    
  },
  {
    id: 1,
    imagePath,
    saleText,
    address,
    details: <FavoriteIcon style={iconSize} color={iconColor} />,
    
  },
  {
    id: 2,
    imagePath,
    saleText,
    address,
    details: <FavoriteIcon style={iconSize} color={iconColor} />,
  },
  {
    id: 3,
    imagePath,
    saleText,
    address,
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
              <Portfolio title={property.title} icon={property.icon} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default PropertiesList;
