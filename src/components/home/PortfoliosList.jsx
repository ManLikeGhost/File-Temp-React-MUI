import React from "react";
import Portfolio from "./Portfolio";
import SectionTitle from "../sectionTitle";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {portfolios} from '../../demoData/demoData'



function PortfoliosList() {
  return (
    <div>
      <SectionTitle>Our Portfolio Listings</SectionTitle>
      <Box p={(2, 4)}>
        <Grid container justify="center" alignItems="center" spacing={2}>
          {portfolios.map((property) => (
            <Grid key={property.id} item xs={3}>
              <Portfolio title={property.title} icon={property.icon} link={property.link} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default PortfoliosList;
