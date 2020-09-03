import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from '@material-ui/core/InputAdornment';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";

import SectionTitle from "../sectionTitle";

const useStyles = makeStyles((theme) => ({
  detailsContainer: {
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    boxSizing: "border-box",
    boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.1)",
    borderRadius: "2px",
    // height: theme.spacing(8),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(4),
  },
  detailsText: {
    color: theme.palette.secondary.main,
    fontSize: theme.spacing(3),
    fontWeight: "bold",
  },
  publishRadioButton: {
    color: theme.palette.primary.main,
    "&$checked": {
      color: theme.palette.primary.main,
    },
  },
  publishContainer: {
    // background: "#F5E9DE",
    borderBottom: `0.8px solid ${theme.palette.primary.main}`,
    // borderTop: "0px",
    borderRadius: "0px 2px 0px 0px",
    boxSizing: "border-box",
    width: "100%",
    // height: "50px",
    marginBottom: theme.spacing(5),
    // marginTop: "-16px",
  },

  formContainer: {
    background: "#FFFFFF",
    border: "0.8px solid #BF7950",
    boxSizing: "border-box",
    boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.1)",
    borderRadius: "2px",
    padding: theme.spacing(3, 6),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    // margin: theme.spacing(3, 1, 100, 1),
    background: "white",
  },
  label: {
    fontSize: "15px",
    // '& input:valid + fieldset': {
    //     borderColor: 'green',
    //     borderWidth: 2,
    //   },
    "& input:invalid + fieldset": {
      borderColor: theme.palette.primary.main,
      borderWidth: 1,
    },
    //   '& input:valid:focus + fieldset': {
    //     borderLeftWidth: 6,
    //     padding: '4px !important', // override inline-style
    //   },
  },

  accountFormControl: {
    // margin: theme.spacing(1),
    width: "100%",
    // minWidth: 120,
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: "2px",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "20px",
    textAlign: "center",
    // width: "440.54px",
    height: "59.53px",
  },
}));

const AddListing = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    publish: 'unpublish',
    title: '',
    marketStatus: '',
    category: '',
    type: '',
    state: '',
    locality: '',
    area: '',
    location: '',
    budget: '',
    bedrooms: '',
    toilets: '',
    bathrooms: '',
    parking: '',
    totalArea: '',
    videoLink: '',
    serviced: false,
    furnished: false,
    description:" "
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handlePublishChange = (event) => {
    setPublishValue(event.target.value);
  };
  return (
    <div>
      <SectionTitle>Add Listing</SectionTitle>
      <Grid container className={classes.detailsContainer}>
        <Grid item>
          <Typography className={classes.detailsText}>
            Add property details
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.formContainer}>
        <form className={classes.form}>
          <div className={classes.publishContainer}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="publishStatus"
                name="publishStatus"
                value={publishValue}
                onChange={handlePublishChange}
              >
                <Grid container>
                  <Grid item xs={6}>
                    <FormControlLabel
                      value="publish"
                      control={
                        <Radio
                          color="primary"
                          className={classes.publishRadioButton}
                        />
                      }
                      label="Publish"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      value="unpublish"
                      control={
                        <Radio
                          color="primary"
                          className={classes.publishRadioButton}
                        />
                      }
                      label="Unpublish"
                      // className={classes.publishRadioButton}
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            </FormControl>
          </div>
          <Grid container spacing={5}>
            <Grid item xs={8}>
              <FormLabel component="legend">Title</FormLabel>
              <TextField
                required
                id="title"
                name="title"
                placeholder="Example: 3 bedroom flat in Lekki, with standard facilities"
                fullWidth
                autoComplete="title"
                className={classes.label}
                variant="outlined"
                //   value={state.name}
                //   onChange={handleChange("name")}
              />
            </Grid>
            <Grid item xs={4}>
              <FormLabel component="legend">Market Status</FormLabel>
              <FormControl className={classes.accountFormControl}>
                <InputLabel id="accountType">Any</InputLabel>
                <Select
                  required
                  fullWidth
                  labelId="accountType"
                  id="accountType"
                  variant="outlined"

                  // value={state.accountType}
                  // onChange={handleChange("accountType")}
                >
                  <MenuItem value={"propertyShopper"}>
                    Property Shopper
                  </MenuItem>
                  <MenuItem value={"realEstateAgent"}>
                    Real Estate Agent
                  </MenuItem>
                  <MenuItem value={"propertyDeveloper"}>
                    Property Developer
                  </MenuItem>
                  <MenuItem value={"homeOwner"}>Home Owner</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <FormLabel component="legend">Category</FormLabel>
              <FormControl className={classes.accountFormControl}>
                <InputLabel id="accountType">Select Category</InputLabel>
                <Select
                  required
                  fullWidth
                  labelId="accountType"
                  id="accountType"
                  variant="outlined"

                  // value={state.accountType}
                  // onChange={handleChange("accountType")}
                >
                  <MenuItem value={"propertyShopper"}>
                    Property Shopper
                  </MenuItem>
                  <MenuItem value={"realEstateAgent"}>
                    Real Estate Agent
                  </MenuItem>
                  <MenuItem value={"propertyDeveloper"}>
                    Property Developer
                  </MenuItem>
                  <MenuItem value={"homeOwner"}>Home Owner</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormLabel component="legend">Type</FormLabel>
              <FormControl className={classes.accountFormControl}>
                <InputLabel id="accountType">Select Type</InputLabel>
                <Select
                  required
                  fullWidth
                  labelId="accountType"
                  id="accountType"
                  variant="outlined"

                  // value={state.accountType}
                  // onChange={handleChange("accountType")}
                >
                  <MenuItem value={"propertyShopper"}>
                    Property Shopper
                  </MenuItem>
                  <MenuItem value={"realEstateAgent"}>
                    Real Estate Agent
                  </MenuItem>
                  <MenuItem value={"propertyDeveloper"}>
                    Property Developer
                  </MenuItem>
                  <MenuItem value={"homeOwner"}>Home Owner</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={4}>
              <FormLabel component="legend">State</FormLabel>
              <FormControl className={classes.accountFormControl}>
                <InputLabel id="accountType">Select State</InputLabel>
                <Select
                  required
                  fullWidth
                  labelId="accountType"
                  id="accountType"
                  variant="outlined"
                  // value={state.accountType}
                  // onChange={handleChange("accountType")}
                >
                  <MenuItem value={"propertyShopper"}>
                    Property Shopper
                  </MenuItem>
                  <MenuItem value={"realEstateAgent"}>
                    Real Estate Agent
                  </MenuItem>
                  <MenuItem value={"propertyDeveloper"}>
                    Property Developer
                  </MenuItem>
                  <MenuItem value={"homeOwner"}>Home Owner</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormLabel component="legend">Locality</FormLabel>
              <FormControl className={classes.accountFormControl}>
                <InputLabel id="accountType">Select Locality</InputLabel>
                <Select
                  required
                  fullWidth
                  labelId="accountType"
                  id="accountType"
                  variant="outlined"
                  // value={state.accountType}
                  // onChange={handleChange("accountType")}
                >
                  <MenuItem value={"propertyShopper"}>
                    Property Shopper
                  </MenuItem>
                  <MenuItem value={"realEstateAgent"}>
                    Real Estate Agent
                  </MenuItem>
                  <MenuItem value={"propertyDeveloper"}>
                    Property Developer
                  </MenuItem>
                  <MenuItem value={"homeOwner"}>Home Owner</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormLabel component="legend">Area</FormLabel>
              <FormControl className={classes.accountFormControl}>
                <InputLabel id="accountType">Select Area</InputLabel>
                <Select
                  required
                  fullWidth
                  labelId="accountType"
                  id="accountType"
                  variant="outlined"
                  // value={state.accountType}
                  // onChange={handleChange("accountType")}
                >
                  <MenuItem value={"propertyShopper"}>
                    Property Shopper
                  </MenuItem>
                  <MenuItem value={"realEstateAgent"}>
                    Real Estate Agent
                  </MenuItem>
                  <MenuItem value={"propertyDeveloper"}>
                    Property Developer
                  </MenuItem>
                  <MenuItem value={"homeOwner"}>Home Owner</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={12}>
            <FormLabel component="legend">Location</FormLabel>
              <TextField
                required
                id="location"
                name="location"
                placeholder="Example: 123, Doe Street, Acme Estate..."
                fullWidth
                autoComplete="location"
                className={classes.label}
                variant="outlined"
                //   value={state.name}
                //   onChange={handleChange("name")}
              />
             </Grid>
            <Grid item xs={6}>
            <FormLabel component="legend">Budget</FormLabel>
              <TextField
                required
                id="budget"
                name="budget"
                fullWidth
                autoComplete="budget"
                className={classes.label}
                variant="outlined"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                
                value={values.budget}
            onChange={handleChange('budget')}
              />
              {/* <TextField
                required
                id="budget"
                name="budget"
                label="Budget"
                fullWidth
                autoComplete="budget"
                className={classes.label}
                variant="outlined"
                //   value={state.name}
                //   onChange={handleChange("name")}
              /> */}
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              style={{
                marginTop: "2rem",
              }}
            >
              <InputLabel id="comment" style={{ paddingBottom: "10px" }}>
                Comments
              </InputLabel>
              <TextareaAutosize
                rowsMax={20}
                aria-label="maximum height"
                style={{
                  width: "39rem",
                  height: "10rem",
                }}

                //   placeholder=""
                //       defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                //   ut labore et dolore magna aliqua."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
