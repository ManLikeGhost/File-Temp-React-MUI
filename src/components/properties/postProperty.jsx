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
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
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
  const handleSubmit = (event) => {
    event.preventDefault();
// console.log(newPropertyRequest)
    axios
      .post(API_BASE_URL + "/submit-request", newPropertyRequest)
      .then((response) => {
        // console.log(response);
      })
      .catch((err) => {
        // console.log(err);
      });
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
                    <MenuItem value={"propertyShopper"}>
                      {" "}
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
                      {" "}
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
                <FormControl className={classes.accountFormControl}>
                  <InputLabel id="state">Select State</InputLabel>
                  <Select
                    required
                    fullWidth
                    labelId="state"
                    id="state"
                    variant="outlined"
                    value={newPropertyRequest.state}
                    onChange={handleChange("state")}
                  >
                    <MenuItem value={"propertyShopper"}>
                      {" "}
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
                <FormControl className={classes.accountFormControl}>
                  <InputLabel id="locality">Select Locality</InputLabel>
                  <Select
                    required
                    fullWidth
                    labelId="locality"
                    id="locality"
                    variant="outlined"
                    value={newPropertyRequest.locality}
                    onChange={handleChange("locality")}
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
                <FormControl className={classes.accountFormControl}>
                  <InputLabel id="area">Select Area</InputLabel>
                  <Select
                    required
                    fullWidth
                    labelId="area"
                    id="area"
                    variant="outlined"
                    value={newPropertyRequest.area}
                    onChange={handleChange("area")}
                  >
                    <MenuItem value={"propertyShopper"}>
                      {" "}
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
                      {" "}
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
                <TextField
                  required
                  id="budget"
                  name="budget"
                  label="Budget"
                  fullWidth
                  autoComplete="budget"
                  className={classes.label}
                  variant="outlined"
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
                <TextareaAutosize
                  rowsMax={20}
                  aria-label="maximum height"
                  style={{
                    width: "39rem",
                    height: "10rem",
                  }}

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
