import React from "react";
import Portfolio from "./Portfolio";
import SectionTitle from "../sectionTitle";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FlatIcon from '../../img/Flats-Icon.png';
import HouseIcon from '../../img/Houses-Icon.png';
import CommercialProjectsIcon from '../../img/commercial-projects-Icon.png';
import LandIcon from '../../img/Land-Icon.png';


const portfolios = [
  {
    id: 0,
    title: "Flats",
    icon: FlatIcon,
  },
  {
    id: 1,
    title: "Houses",
    icon: HouseIcon,
  },
  {
    id: 2,
    title: "Commercial Properties",
    icon: CommercialProjectsIcon,
  },
  {
    id: 3,
    title: "Land",
    icon: LandIcon,
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
