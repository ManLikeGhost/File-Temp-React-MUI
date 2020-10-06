import React, { useState } from "react";
import axios from "axios";
import { ACCESS_TOKEN_NAME, API_BASE_URL } from "../../constants/apiConstants";

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
  },

  accountFormControl: {
    width: "100%",
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

const API_BASE = "https://api.terrelldavies.com/api/property/create";

function submitForm(contentType, data, setResponse) {
  axios({
    url: `${API_BASE}/upload`,
    method: "POST",
    data: data,
    headers: {
      "Content-Type": contentType,
    },
  })
    .then((response) => {
      setResponse(response.data);
    })
    .catch((error) => {
      setResponse("error");
    });
}

const AddListing = () => {
  const classes = useStyles();
  const [property, setProperty] = useState({
    publishStatus: "unpublish",
    title: "",
    marketStatus: "",
    cat_id: "",
    type_id: "",
    state: "",
    locality: "",
    area: "",
    location: "",
    budget: "",
    bedroom: "",
    toilet: "",
    bathroom: "",
    parking: "",
    totalArea: "",
    videoLink: "",
    serviced: false,
    furnished: false,
    description: " ",
    featuredImage: null,
    galleryImage: null,
    garage:"",
    totalarea: ""
  });
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  const handleChange = (prop) => (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setProperty({ ...property, [prop]: value });
  };
  const tokenStr = localStorage.getItem(ACCESS_TOKEN_NAME);

  const handleSubmit = (event) => {
    event.preventDefault();
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    const convertedImage = toBase64(image).then((result) => result);

    const newProperty = {
      ...property,
      galleryImage: convertedImage,
      featuredImage: convertedImage,
    };
console.log("to be sent to server", newProperty)
    axios
      .post(API_BASE_URL+"/property/create", newProperty, {
        headers: {
          Authorization: `Bearer ${tokenStr}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
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
                value={property.publishStatus}
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
                value={property.title}
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
                  value={property.marketStatus}
                  onChange={handleChange("marketStatus")}
                >
                  <MenuItem value={"active"}>Available</MenuItem>
                  <MenuItem value={"sold"}>Sold</MenuItem>
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
                  value={property.cat_id}
                  onChange={handleChange("category")}
                >
                  <MenuItem value={"1"}>Flat</MenuItem>
                  <MenuItem value={"2"}>Houses</MenuItem>
                  <MenuItem value={"3"}>
                    Commercial Projects
                  </MenuItem>
                  <MenuItem value={"4"}>Lands</MenuItem>
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
                  value={property.type_id}
                  onChange={handleChange("type")}
                >
                  <MenuItem value={"1"}>Rent</MenuItem>
                  <MenuItem value={"2"}>Sale</MenuItem>
                  <MenuItem value={"3"}>Shortlet</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={4}>
              <FormLabel component="legend">Area</FormLabel>
              <TextField
                required
                id="area"
                name="area"
                placeholder="Your area"
                fullWidth
                autoComplete="area"
                className={classes.label}
                variant="outlined"
                value={property.area}
                onChange={handleChange("area")}
              />
            </Grid>
            <Grid item xs={4}>
              <FormLabel component="legend">Locality</FormLabel>
              <TextField
                required
                id="locality"
                name="locality"
                placeholder="Your locality"
                fullWidth
                autoComplete="locality"
                className={classes.label}
                variant="outlined"
                value={property.locality}
                onChange={handleChange("locality")}
              />
            </Grid>
            <Grid item xs={4}>
              <FormLabel component="legend">State</FormLabel>
              <TextField
                required
                id="state"
                name="state"
                placeholder="Your state"
                fullWidth
                autoComplete="state"
                className={classes.label}
                variant="outlined"
                value={property.state}
                onChange={handleChange("state")}
              />
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
                value={property.location}
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
                value={property.budget}
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
                value={property.bedroom}
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
                value={property.toilet}
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
                value={property.bathroom}
                onChange={handleChange("bathrooms")}
              />
            </Grid>
          </Grid>
          <Grid container spacing={5}> 
            <Grid item xs={6}>
              <FormLabel component="legend">Parking</FormLabel>
              <TextField
                required
                id="parking"
                name="parking"
                // placeholder="Example: 3 bedroom flat in Lekki, with standard facilities"
                fullWidth
                autoComplete="parking"
                className={classes.label}
                variant="outlined"
                value={property.garage}
                onChange={handleChange("parking")}
              />
            </Grid>
            <Grid item xs={6}>
              <FormLabel component="legend">Total Area</FormLabel>
              <TextField
                required
                id="totalarea"
                name="totalarea"
                // placeholder="Example: 3 bedroom flat in Lekki, with standard facilities"
                fullWidth
                autoComplete="totalarea"
                className={classes.label}
                variant="outlined"
                value={property.totalarea}
                onChange={handleChange("totalarea")}
              />
            </Grid>
            
          </Grid>
          <Grid container spacing={5}> 
            <Grid item xs={12}>
              <FormLabel component="legend">Video Link (YouTube/Facebook)</FormLabel>
              <TextField
                required
                id="videoLink"
                name="videoLink"
                // placeholder="Example: 3 bedroom flat in Lekki, with standard facilities"
                fullWidth
                autoComplete="videoLink"
                className={classes.label}
                variant="outlined"
                value={property.videoLink}
                onChange={handleChange("videoLink")}
              />
            </Grid>
            
          </Grid>
          
          <Grid container>
            <Grid item xs={4}>
              <div className={classes.uploadPhotoContainer}>
                <input
                  accept="image/*"
                  className={classes.hideInputField}
                  id="file"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <label htmlFor="file">
                  {image ? (
                    <img src={URL.createObjectURL(image)} alt="" width="100%" />
                  ) : (
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      size="medium"
                    >
                      <AddAPhotoIcon className={classes.uploadPhotoIcon} />
                    </IconButton>
                  )}
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
                    checked={property.serviced}
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
                    checked={property.furnished}
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
                  width: "45vw",
                  height: "10rem",
                }}
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
                // onClick={uploadWithJSON}
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
