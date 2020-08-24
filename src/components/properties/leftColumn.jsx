import React from "react";
import PropertyTitle from "./propertyTitle";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


import CardPropertyList from "./cardPropertyList";

const LeftColumn = () => {
  return (
    <div>
      <PropertyTitle>HI</PropertyTitle>
      <Grid container>
        <Grid item={12}>
          <Typography>Quick Filters</Typography>
        </Grid>
        <Grid item container>
          <Grid item xs={2}>
            <Button>1 Bedroom</Button>
          </Grid>
          <Grid item xs={2}>
            <Button>2 Bedroom</Button>
          </Grid>
          <Grid item xs={2}>
            <Button>3 Bedroom</Button>
          </Grid>
          <Grid item xs={2}>
            <Button>4 Bedroom</Button>
          </Grid>
          <Grid item xs={2}>
            <Button>+5 Bedroom</Button>
          </Grid>
          <Grid item xs={2}>
            {/* <Button>6 Bedroom</Button> */}
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={2}>
            <Button>Mini Flat</Button>
          </Grid>
          <Grid item xs={2}>
            <Button>Single Room</Button>
          </Grid>
          <Grid item xs={2}>
            <Button>1 Bedroom</Button>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={2}>
            <Button>Serviced</Button>
          </Grid>
          <Grid item xs={2}>
            <Button>Furnished</Button>
          </Grid>
          <Grid item xs={2}>
            <Button>Non-furnished</Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={4}>
          <Typography>Results 1-4 of 4</Typography>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <FormControl>
            <Select
              required
              fullWidth
              labelId="accountType"
              id="accountType"
              MenuItem
            >
              <MenuItem value={"forSale"}>For Sale</MenuItem>
              <MenuItem value={"forRent"}>For Rent</MenuItem>
              <MenuItem value={"forShortlet"}>For Shortlet</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <CardPropertyList />
    </div>
  );
};

export default LeftColumn;
