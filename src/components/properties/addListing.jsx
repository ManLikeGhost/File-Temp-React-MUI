import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

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
  uploadPhotoContainer: {
    border: `0.8px solid ${theme.palette.primary.main}`,
    boxSizing: "border-box",
    borderRadius: "2px",
    borderStyle: "dashed",
    textAlign: "center",
    marginTop: theme.spacing(3),
  },
  uploadPhotoIcon: {
    fontSize: theme.spacing(9),
    margin: theme.spacing(9),
    // marginRight:theme.spacing(20),
  },
  hideInputField: {
    display: "none",
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
  const [values, setValues] = useState({
    publishStatus: "unpublish",
    title: "",
    marketStatus: "",
    category: "",
    type: "",
    state: "",
    locality: "",
    area: "",
    location: "",
    budget: "",
    bedrooms: "",
    toilets: "",
    bathrooms: "",
    parking: "",
    totalArea: "",
    videoLink: "",
    serviced: false,
    furnished: false,
    description: " ",
  });
  const [error, setError] = useState(null);

  const handleChange = (prop) => (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setValues({ ...values, [prop]: value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const { 
    title,
    marketStatus,
    category,
    type,
    state,
    locality,
    area,
    location,
    budget,
    bedrooms,
    toilets,
    bathrooms,
    parking,
    totalArea,
    videoLink,
    description} = state;
    if (!title) {
      return setError("*Title is required");
    }
const tokenStr= localStorage.getItem("user")
    const res = await axios.post('https://api.terrelldavies.com/api/create-properties', values, {
      headers: {
        'Authorization': `Bearer ${tokenStr}`
      }
    });
      axios
        .post(API_BASE_URL + "/register", newUser)
        .then((response) => {
          // console.log("Response from server", response);

          localStorage.setItem(
            ACCESS_TOKEN_NAME,
            `Bearer ${response.data.token}`
          );
          setLoading(false);
          history.push("/subscription-plans");
          window.location.reload();
          // if (response.status === 200) {
          //   // localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
          //   localStorage.setItem('login_access_token',`Bearer ${response.data.token}`);
          //   history.push('/')
          // } else {
          //   setError("Some errors ocurred while registering your account");
          // }
        })
        .catch((err) => {
          // console.log(err);
          setLoading(false);
        });
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
        <form className={classes.form} noValidate onSubmit={handleSubmit}> 
          <div className={classes.publishContainer}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="publishStatus"
                name="publishStatus"
                value={values.publishStatus}
                onChange={handleChange("publishStatus")}
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
                value={values.title}
                onChange={handleChange("title")}
              />
            </Grid>
            <Grid item xs={4}>
              <FormLabel component="legend">Market Status</FormLabel>
              <FormControl className={classes.accountFormControl}>
                <InputLabel id="marketStatus">Any</InputLabel>
                <Select
                  required
                  fullWidth
                  labelId="marketStatus"
                  id="marketStatus"
                  variant="outlined"
                  value={values.marketStatus}
                  onChange={handleChange("marketStatus")}
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
                <InputLabel id="category">Select Category</InputLabel>
                <Select
                  required
                  fullWidth
                  labelId="category"
                  id="category"
                  variant="outlined"
                  value={values.category}
                  onChange={handleChange("category")}
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
                <InputLabel id="type">Select Type</InputLabel>
                <Select
                  required
                  fullWidth
                  labelId="type"
                  id="type"
                  variant="outlined"
                  value={values.type}
                  onChange={handleChange("type")}
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
                <InputLabel id="state">Select State</InputLabel>
                <Select
                  required
                  fullWidth
                  labelId="state"
                  id="state"
                  variant="outlined"
                  value={values.state}
                  onChange={handleChange("state")}
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
                <InputLabel id="locality">Select Locality</InputLabel>
                <Select
                  required
                  fullWidth
                  labelId="locality"
                  id="locality"
                  variant="outlined"
                  value={values.locality}
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
              <FormLabel component="legend">Area</FormLabel>
              <FormControl className={classes.accountFormControl}>
                <InputLabel id="area">Select Area</InputLabel>
                <Select
                  required
                  fullWidth
                  labelId="area"
                  id="area"
                  variant="outlined"
                  value={values.area}
                  onChange={handleChange("area")}
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
                value={values.location}
                onChange={handleChange("location")}
              />
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
                value={values.budget}
                onChange={handleChange("budget")}
              />
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <FormLabel component="legend">Bedrooms</FormLabel>
              <TextField
                required
                id="bedrooms"
                name="bedrooms"
                // placeholder="Example: 3 bedroom flat in Lekki, with standard facilities"
                fullWidth
                autoComplete="bedrooms"
                className={classes.label}
                variant="outlined"
                value={values.bedrooms}
                onChange={handleChange("bedrooms")}
              />
            </Grid>
            <Grid item xs={4}>
              <FormLabel component="legend">Toilets</FormLabel>
              <TextField
                required
                id="toilets"
                name="toilets"
                // placeholder="Example: 3 bedroom flat in Lekki, with standard facilities"
                fullWidth
                autoComplete="toilets"
                className={classes.label}
                variant="outlined"
                value={values.toilets}
                onChange={handleChange("toilets")}
              />
            </Grid>
            <Grid item xs={4}>
              <FormLabel component="legend">Bathrooms</FormLabel>
              <TextField
                required
                id="bathrooms"
                name="bathrooms"
                // placeholder="Example: 3 bathroom flat in Lekki, with standard facilities"
                fullWidth
                autoComplete="bathrooms"
                className={classes.label}
                variant="outlined"
                value={values.bathrooms}
                onChange={handleChange("bathrooms")}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4}>
              <div className={classes.uploadPhotoContainer}>
                <input
                  accept="image/*"
                  className={classes.hideInputField}
                  id="icon-button-file"
                  type="file"
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    size="medium"
                  >
                    <AddAPhotoIcon className={classes.uploadPhotoIcon} />
                  </IconButton>
                </label>
              </div>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.serviced}
                    color="primary"
                    name="Serviced"
                    onChange={handleChange("serviced")}
                  />
                }
                label="Serviced"
              />
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.furnished}
                    onChange={handleChange("furnished")}
                    name="Furnished"
                    color="primary"
                  />
                }
                label="Furnished"
              />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Grid container>
            <Grid
              style={{
                marginTop: "2rem",
              }}
            >
              <InputLabel id="comment" style={{ paddingBottom: "10px" }}>
                Description
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
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Add Listing
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
