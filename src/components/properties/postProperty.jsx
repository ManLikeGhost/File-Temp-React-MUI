import React, { useState } from "react";
import axios from "../../axios/index";
import { API_BASE_URL } from "../../constants/apiConstants";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
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
    //height: "59.53px",
    /* Rectangle 88 */
    width: "257px",
    height: "62px",
    float: "right",
  },
}));

const PostProperty = () => {
  const classes = useStyles();
  const [newPropertyRequest, setNewPropertyRequest] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    type: "",
    user_type: "",
    state: "",
    locality: "",
    area: "",
    bedrooms: "",
    budget: "",
    comment: "",
  });
  const handleChange = (name) => (event) => {
    setNewPropertyRequest({
      ...newPropertyRequest,
      [name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        API_BASE_URL + "/submit-request",
        newPropertyRequest);
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <SectionTitle>Post a Property Request</SectionTitle>
      <Grid container className={classes.detailsContainer}>
        <Grid item>
          <Typography className={classes.detailsText}>
            Property Details
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.formContainer}>
        <Grid container>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={5}>
              <Grid item xs={8}>
                <TextField
                  required
                  id="fullName"
                  name="fullName"
                  label="Full name"
                  fullWidth
                  autoComplete="full-name"
                  className={classes.label}
                  variant="outlined"
                  value={newPropertyRequest.name}
                  onChange={handleChange("name")}
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl className={classes.accountFormControl}>
                  <InputLabel id="user_type">I’m a/an...</InputLabel>
                  <Select
                    required
                    fullWidth
                    labelId="user_type"
                    id="user_type"
                    variant="outlined"

                    value={newPropertyRequest.user_type}
                    onChange={handleChange("user_type")}
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
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"

                    value={newPropertyRequest.email}
                    onChange={handleChange("email")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                    value={newPropertyRequest.phone}
                    onChange={handleChange("phone")}
                />
              </Grid>
            </Grid>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <FormControl className={classes.accountFormControl}>
                  <InputLabel id="category">Select Category</InputLabel>
                  <Select
                    required
                    fullWidth
                    labelId="category"
                    id="category"
                    variant="outlined"
                    value={newPropertyRequest.category}
                    onChange={handleChange("category")}
                  >
                    <MenuItem value={"rent"}>
                     Rent
                    </MenuItem>
                    <MenuItem value={"sale"}>
                      Sale
                    </MenuItem>
                    <MenuItem value={"shortlet"}>
                      Shortlet
                    </MenuItem>
                    
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl className={classes.accountFormControl}>
                  <InputLabel id="type">Select Type</InputLabel>
                  <Select
                    required
                    fullWidth
                    labelId="type"
                    id="type"
                    variant="outlined"
                    value={newPropertyRequest.type}
                    onChange={handleChange("type")}
                  >
                    <MenuItem value={"propertyShopper"}>
                     Flats
                    </MenuItem>
                    <MenuItem value={"realEstateAgent"}>
                      Houses
                    </MenuItem>
                    <MenuItem value={"propertyDeveloper"}>
                      Commercial Projects
                    </MenuItem>
                    <MenuItem value={"homeOwner"}>Lands</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={6}>
              <Grid item xs={4}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="state"
                  label="State"
                  name="state"
                  autoComplete="state"
                    value={newPropertyRequest.state}
                    onChange={handleChange("state")}
                />
              </Grid>
              <Grid item xs={4}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="locality"
                  label="Locality"
                  name="locality"
                  autoComplete="locality"
                    value={newPropertyRequest.locality}
                    onChange={handleChange("locality")}
                />
              </Grid>
              <Grid item xs={4}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="area"
                  label="Area"
                  name="area"
                  autoComplete="area"
                    value={newPropertyRequest.area}
                    onChange={handleChange("area")}
                />
              </Grid>
            </Grid>
            <Grid container spacing={5}>
              <Grid item xs={6}>
                <FormControl className={classes.accountFormControl}>
                  <InputLabel id="bedrooms">
                    Select No. of bedrooms
                  </InputLabel>
                  <Select
                    required
                    fullWidth
                    labelId="bedrooms"
                    id="bedrooms"
                    variant="outlined"
                    value={newPropertyRequest.bedrooms}
                    onChange={handleChange("bedrooms")}
                  >
                    <MenuItem value={"propertyShopper"}>
                      1 Bedroom
                    </MenuItem>
                    <MenuItem value={"realEstateAgent"}>
                    2 Bedrooms
                    </MenuItem>
                    <MenuItem value={"propertyDeveloper"}>
                    3 Bedrooms
                    </MenuItem>
                    <MenuItem value={"homeOwner"}> 4 Bedrooms</MenuItem>
                    <MenuItem value={"homeOwner"}> +5 Bedrooms</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                
                <FormLabel component="legend">Budget</FormLabel>
                <OutlinedInput
                  required
                  id="budget"
                  name="budget"
                  fullWidth
                  autoComplete="budget"
                  className={classes.label}
                  variant="outlined"
                  startAdornment={
                    <InputAdornment position="start">₦</InputAdornment>
                  }
                  value={newPropertyRequest.budget}
                    onChange={handleChange("budget")}
                />
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
                
                <TextField
                  id="outlined-multiline-static"
                  // label="Description"
                  multiline
                  rows={10}
                  variant="outlined"
                  placeholder="Add additional comment here"
                    value={newPropertyRequest.comment}
                    onChange={handleChange("comment")}
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
              POST REQUEST
            </Button>
          </form>
        </Grid>
      </div>
    </div>
  );
};

export default PostProperty;
