import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FilterListIcon from "@material-ui/icons/FilterList";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import Divider from "@material-ui/core/Divider";

import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  postARequestContainer: {
    background: "#F5E9DE",
    border: `0.8px solid ${theme.palette.primary.main}`,
    boxSizing: "border-box",
    borderRadius: "2px",
    padding: theme.spacing(8),
    color: theme.palette.primary.main,
    marginBottom: "20px",
  },
  postARequestText: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: theme.spacing(3),
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(3),
  },
  advancedFilter: {
    background: " #FFFFFF",
    border: `0.8px solid ${theme.palette.primary.main}`,
    borderRadius: "2px",
    marginBottom: theme.spacing(3),
  },
  advacedFilterFormContainer: {
    padding: theme.spacing(2),
    paddingRight: theme.spacing(4),
  },
  advancedFilterTitleContainer: {
    background: "#F5E9DE",
    borderBottom: `0.8px solid ${theme.palette.primary.main}`,
    // borderTop: "0px",
    borderRadius: "0px 2px 0px 0px",
    boxSizing: "border-box",
    width: "100%",
    height: "50px",
    marginBottom: theme.spacing(5),
    // marginTop: "-16px",
  },
  advancedFilterTitleText: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: theme.palette.secondary.main,
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(2),
    minWidth: "100%",
  },
  availablePropertyContainer: {
    padding: "20px",
  },
  divider: {
    margin: "15px 0",
    backgroundColor: theme.palette.primary.main,
    height: "1px",
  },
  textRight: { textAlign: "right", paddingRight: "10px" },

  button: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "2px",
    fontSize: theme.spacing(2),
    color: "white",
    width: "100%",
    height: theme.spacing(7),
    "&:hover": {
      backgroundColor: "white",
      boxShadow: "none",
      color: theme.palette.primary.main,
      borderRadius: "2px",
      border: `0.8px solid ${theme.palette.primary.main}`,
    },
  },
  newsletterTitle: {
    textAlign: "left",
    fontWeight: "bold",
    color: theme.palette.secondary.main,
    fontSize: "30px",
    // lineHeight: "21px",
  },
  newsletterDesc: {
    fontSize: "18px",
    color: "rgba(0, 0, 0, 0.51)",
    margin: "30px 0",
  },
}));

const PostARequestButton = withStyles({
  root: {
    backgroundColor: " #BF7950",
    borderColor: "white",
    borderRadius: "2px",
    boxShadow: "none",
    color: "white",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    height: "50px",
    // border: "1px solid",
    lineHeight: 1.5,
    "&:hover": {
      backgroundColor: "white",
      borderColor: "white",
      boxShadow: "none",
      color: "#BF7950",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "white",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);
const RightColumn = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        className={classes.postARequestContainer}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography className={classes.postARequestText}>
            Can’t find your ideal property?
          </Typography>
          <Link href="/post-property-request">
            <PostARequestButton>POST A REQUEST</PostARequestButton>
          </Link>
        </Grid>
      </Grid>
      <div className={classes.advancedFilter}>
        <div className={classes.advancedFilterTitleContainer}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={2}>
              <FilterListIcon color="secondary" fontSize="large" />
            </Grid>
            <Grid item xs={10}>
              <Typography className={classes.advancedFilterTitleText}>
                Advanced Filter Options
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.advacedFilterFormContainer}
        >
          <Grid item xs={12}>
            <TextField
              id="location"
              label="Location"
              style={{ margin: 8 }}
              placeholder="Enter a state, city or area"
              helperText="Enter a state, city or area"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="category">Category</InputLabel>
              <Select
                native
                // value={state.category}
                // onChange={handleCategoryChange}
                inputProps={{
                  name: "category",
                  id: "category",
                }}
              >
                <option aria-label="None" value="" />
                <option value="rent">For Rent</option>
                <option value="sale">For Sale</option>
                <option value={30}>For something else</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="type">Type</InputLabel>
                <Select
                  native
                  // value={state.type}
                  // onChange={handleTypeChange}
                  inputProps={{
                    name: "type",
                    id: "type",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="rent">All types</option>
                  <option value="sale">For Sale</option>
                  <option value={30}>For something else</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="bedroom">Bedrooms</InputLabel>
                <Select
                  native
                  // value={state.bedroom}
                  // onChange={handleBedroomChange}
                  inputProps={{
                    name: "bedroom",
                    id: "bedroom",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="rent">Any</option>
                  <option value="sale">For Sale</option>
                  <option value={30}>For something else</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="type">Min Price</InputLabel>
                <Select
                  native
                  // value={state.type}
                  // onChange={handleTypeChange}
                  inputProps={{
                    name: "type",
                    id: "type",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="rent">No Min</option>
                  <option value="sale">For Sale</option>
                  <option value={30}>For something else</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="bedroom">Max Price</InputLabel>
                <Select
                  native
                  // value={state.bedroom}
                  // onChange={handleBedroomChange}
                  inputProps={{
                    name: "bedroom",
                    id: "bedroom",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="rent">No Max</option>
                  <option value="sale">For Sale</option>
                  <option value={30}>For something else</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="type">Furnished</InputLabel>
                <Select
                  native
                  // value={state.type}
                  // onChange={handleTypeChange}
                  inputProps={{
                    name: "type",
                    id: "type",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="rent">Any</option>
                  <option value="sale">For Sale</option>
                  <option value={30}>For something else</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="bedroom">Added to Site</InputLabel>
                <Select
                  native
                  // value={state.bedroom}
                  // onChange={handleBedroomChange}
                  inputProps={{
                    name: "bedroom",
                    id: "bedroom",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="rent">Any Time</option>
                  <option value="sale">For Sale</option>
                  <option value={30}>For something else</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="keywords"
                label="Keywords"
                style={{ margin: 8 }}
                placeholder="e.g 'pool', 'jacuzzi'"
                helperText="e.g 'pool', 'jacuzzi'"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="propertyRef"
                label="Property Ref."
                style={{ margin: 8 }}
                placeholder="012345"
                helperText="Property Ref."
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button className={classes.button}>SEARCH</Button>
          </Grid>
        </Grid>
      </div>
      <div className={classes.advancedFilter}>
        <div className={classes.advancedFilterTitleContainer}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={2}>
              <InsertChartIcon color="secondary" fontSize="large" />
            </Grid>
            <Grid item xs={10}>
              <Typography className={classes.advancedFilterTitleText}>
                Available Property
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Grid
          container
          // justify="center"
          // alignItems="center"
          className={classes.availablePropertyContainer}
        >
          <div style={{ width: "100%" }}>
            <Grid item xs={12}>
              <Typography>Currently available for rent in Nigeria</Typography>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container>
              <Grid item xs={6}>
                <Typography>Property Type</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.textRight}>Count</Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container>
              <Grid item xs={6}>
                <Typography>Flats</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.textRight}>{145}</Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container>
              <Grid item xs={6}>
                <Typography>House</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.textRight}>{3442}</Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container>
              <Grid item xs={6}>
                <Typography>Lands</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.textRight}>{278}</Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container>
              <Grid item xs={6}>
                <Typography>Commercial Property</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.textRight}>{56}</Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container>
              <Grid item xs={2}>
                <Typography>Type</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>1 Bed</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>2 Bed</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>3 Bed</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>4 Bed</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>+5 Bed</Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container>
              <Grid item xs={2}>
                <Typography>Flats</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>14</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>37</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>24</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>35</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>30</Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container>
              <Grid item xs={2}>
                <Typography>Houses</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>256</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>698</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>900</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>765</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>823</Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container>
              <Grid item xs={6}>
                <Typography>Land Type</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.textRight}>Count</Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container>
              <Grid item xs={6}>
                <Typography>Residential Land</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.textRight}>{74}</Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container>
              <Grid item xs={6}>
                <Typography>Commercial Land</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.textRight}>{26}</Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container>
              <Grid item xs={6}>
                <Typography>Industrial Land</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.textRight}>{17}</Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container>
              <Grid item xs={6}>
                <Typography>Mixed-use Land</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.textRight}>{92}</Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container>
              <Grid item xs={6}>
                <Typography>Other Land</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.textRight}>{86}</Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container>
              <Grid item xs={6}>
                <Typography>All Land</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.textRight}>{278}</Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
          </div>
        </Grid>
      </div>
      <Grid
        container
        className={classes.postARequestContainer}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography className={classes.newsletterTitle}>
            Subscribe to our Weekly Newsletter
          </Typography>
          <Typography className={classes.newsletterDesc}>
            Get weekly updates on the best deal on property {"&"} developments
            in Nigeria.
          </Typography>
          <PostARequestButton>SUBSCRIBE</PostARequestButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default RightColumn;
