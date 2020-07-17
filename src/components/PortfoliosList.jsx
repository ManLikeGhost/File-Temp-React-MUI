import React from "react";
import Portfolio from "./Portfolio";
import SectionTitle from "./sectionTitle";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const iconSize = { fontSize: 90 };
const iconColor = "primary";

const portfolios = [
  {
    id: 0,
    title: "Flats",
    icon: <FavoriteIcon style={iconSize} color={iconColor} />,
  },
  {
    id: 1,
    title: "Houses",
    icon: <ShareIcon style={iconSize} color={iconColor} />,
  },
  {
    id: 2,
    title: "Commercial Properties",
    icon: <ExpandMoreIcon style={iconSize} color={iconColor} />,
  },
  {
    id: 3,
    title: "Land",
    icon: <MoreVertIcon style={iconSize} color={iconColor} />,
  },
];

function PortfoliosList() {
  return (
    <div>
      <SectionTitle>Our Portfolio Listings</SectionTitle>
      <Box p={(2, 4)}>
        <Grid container justify="center" alignItems="center" spacing={2}>
          {portfolios.map((property) => (
            <Grid key={property.id} item xs={3}>
              <Portfolio title={property.title} icon={property.icon} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default PortfoliosList;
