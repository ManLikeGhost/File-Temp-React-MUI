import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const RightColumn = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <Typography>Can’t find your ideal property?</Typography>
        </Grid>
        <Button>POST A REQUEST</Button>
      </Grid>
      <Grid item container justify="center" xs={12}>
        <form action="">
          <div>
            <FormControl>
              <div>
                <Grid item container justify="center" xs={12}>
                  <InputLabel id="accountType">Locations</InputLabel>
                  <TextField
                    id="outlined-secondary"
                    label="Locations"
                    variant="outlined"
                    color="secondary"
                    // className={classes.locations}
                  />
                </Grid>
              </div>
              <div>
                <Grid item container justify="center" xs={12}>
                  <FormControl>
                    <InputLabel id="accountType">Account Type</InputLabel>
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
              </div>

              <Grid item container justify="center" spacing={3} xs={12}>
                <Grid item xs={6}>
                  <TextField
                    // className={classes.types}
                    id="outlined-select-native"
                    variant="outlined"
                    select
                    label="types"
                  ></TextField>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    // className={classes.bedrooms}
                    id="outlined-select-native"
                    variant="outlined"
                    select
                    label="bedrooms"
                  ></TextField>
                </Grid>
              </Grid>

              <Grid item container justify="center" spacing={3} xs={12}>
                <Grid item xs={6}>
                  <TextField
                    // className={classes.MinPrice}
                    id="outlined-select-native"
                    variant="outlined"
                    select
                    label="MinPrice"
                  ></TextField>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    // className={classes.MaxPrice}
                    id="outlined-select-native"
                    variant="outlined"
                    select
                    label="MaxPrice"
                  ></TextField>
                </Grid>
              </Grid>

              <Grid item container justify="center" spacing={3} xs={12}>
                <Grid item xs={6}>
                  <TextField
                    // className={classes.furnished}
                    id="outlined-select-native"
                    variant="outlined"
                    select
                    label="furnished"
                  ></TextField>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    // className={classes.added}
                    id="outlined-select-native"
                    variant="outlined"
                    select
                    label="added"
                  ></TextField>
                </Grid>
              </Grid>

              <Grid item container justify="center" spacing={3} xs={12}>
                <Grid item xs={6}>
                  <TextField
                    // className={classes.keywords}
                    id="outlined-secondary"
                    variant="outlined"
                    label="keywords"
                    color="secondary"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    // className={classes.ref}
                    id="outlined-secondary"
                    variant="outlined"
                    label="ref"
                    color="secondary"
                  />
                </Grid>
              </Grid>

              <Button variant="contained" color="primary">
                SEARCH
              </Button>
            </FormControl>
          </div>
        </form>
      </Grid>
    </div>
  );
};

export default RightColumn;
