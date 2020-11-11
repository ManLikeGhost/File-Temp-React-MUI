import React, { useState, useEffect } from "react";
import ProfileSectionTitle from "./miniComponents/profilesectionTitle";
import axios from "../../axios/index";
import { ACCESS_TOKEN_NAME, API_BASE_URL } from "../../constants/apiConstants";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";

import Grid from "@material-ui/core/Grid";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "1000px",
  },

  paper: {
    width: "628.4px",
    height: "709.1px",
    margin: "50px auto",
    padding: "20px",
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
  },
  signIn: {
    // textAlign: "right",
    color: "white",
    fontSize: "25px",
    lineHeight: "25px",
    margin: "71px auto",
  },
  icon: {
    fontSize: "150px",
    color: theme.palette.primary.main,
    marginLeft: 130,
    // marginBottom: "-500",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    // margin: theme.spacing(3, 1, 100, 1),
    padding: theme.spacing(10, 6),
  },
  label: {
    fontSize: "15px",
  },
  accountFormControl: {
    // margin: theme.spacing(1),
    width: "100%",
    // minWidth: 120,
  },
  margin: {
    marginBottom: "-150px",
  },
  text: {
    fontSize: "12px",
    color: theme.palette.secondary.main,
  },
  title: {
    marginTop: "100px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "30px",
    color: theme.palette.secondary.main,
  },
  subtitle: {
    textAlign: "center",
    fontSize: "20px",
    color: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: "2px",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "20px",
    textAlign: "center",
    width: "220.54px",
    height: "48.53px",
  },
}));

const AccountSettings = () => {
  const [token, setToken] = useState("");
  const [savedMessage, setSavedMessage] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const classes = useStyles();
  const [account, setAccount] = useState({
    userType: "",
    name: "",
    company_name: "",
    address: "",
    locality: "",
    state: "",
    country: "",
    phone: "",
    mobile: "",
    email: "",
    services: "",
    facebook_profile: "",
    twitter_profile: "",
    linkedin_profile: "",
  });

  useEffect(() => {
    async function fetchData() {
      const { token } = await JSON.parse(
        localStorage.getItem(ACCESS_TOKEN_NAME)
      );
      setToken(token);
      const response = await axios.get(API_BASE_URL + "/user-detail", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (true) {
        const {
          userType,
          name,
          company_name,
          address,
          locality,
          state,
          country,
          phone,
          mobile,
          email,
          services,
          facebook_profile,
          twitter_profile,
          linkedin_profile,
        } = response.data.data;

        setAccount({
          userType,
          name,
          company_name,
          address,
          locality,
          state,
          country,
          phone,
          mobile,
          email,
          services,
          facebook_profile,
          twitter_profile,
          linkedin_profile,
        });
      }
    }
    fetchData();
  }, []);

  const handleChange = (name) => (event) => {
    setAccount({
      ...account,
      [name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    try {
      const response = await axios.post(
        API_BASE_URL + "/profile-update",
        account,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsUpdated(true);
      setSavedMessage(response.data[0].message);
    } catch (error) {
      console.err(error);
    }
  };

  return (
    <div>
      <div>
        <CssBaseline />
        <div>
          <ProfileSectionTitle>
            <div>Account</div>
            <div> Edit your account settings</div>
          </ProfileSectionTitle>
          {isUpdated ? (
            <Alert severity="success">{savedMessage}</Alert>
          ) : (
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container>
                <Grid item xs={6}>
                  <FormControl className={classes.accountFormControl}>
                    <InputLabel id="userType">Account Type</InputLabel>
                    <Select
                      fullWidth
                      labelId="userType"
                      id="userType"
                      value={account.userType || ""}
                      onChange={handleChange("userType")}
                    >
                      <MenuItem value={"propertyShopper"}>
                        Property Shopper
                      </MenuItem>
                      <MenuItem value={"real_estate_agent"}>
                        Real Estate Agent
                      </MenuItem>
                      <MenuItem value={"property_developer"}>
                        Property Developer
                      </MenuItem>
                      <MenuItem value={"homeOwner"}>Home Owner</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    id="name"
                    name="name"
                    label="Name"
                    value={account.name || ""}
                    fullWidth
                    autoComplete="name"
                    className={classes.label}
                    // value={account.name}
                    onChange={handleChange("name")}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    // variant="outlined"
                    type="text"
                    id="company"
                    name="company"
                    label="Company Name"
                    fullWidth
                    autoComplete="company"
                    className={classes.label}
                    value={account.company_name || ""}
                    onChange={handleChange("company_name")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="address"
                    label="Address"
                    type="text"
                    id="address"
                    autoComplete="address-line1"
                    value={account.address || ""}
                    onChange={handleChange("address")}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    id="locality"
                    name="locality"
                    label="Locality"
                    fullWidth
                    autoComplete="shipping locality"
                    className={classes.label}
                    value={account.locality || ""}
                    onChange={handleChange("locality")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                    autoComplete="shipping region"
                    className={classes.label}
                    value={account.state || ""}
                    onChange={handleChange("state")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    autoComplete="shipping country"
                    className={classes.label}
                    value={account.country || ""}
                    onChange={handleChange("country")}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    id="phone"
                    name="phone"
                    label="Phone"
                    fullWidth
                    autoComplete="tel"
                    className={classes.label}
                    value={account.phone || ""}
                    onChange={handleChange("phone")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="mobile"
                    name="mobile"
                    label="Mobile"
                    fullWidth
                    autoComplete="tel"
                    className={classes.label}
                    value={account.mobile || ""}
                    onChange={handleChange("mobile")}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    autoComplete="email"
                    className={classes.label}
                    value={account.email || ""}
                    onChange={handleChange("email")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="services"
                    name="services"
                    label="Your Services"
                    fullWidth
                    autoComplete="services"
                    className={classes.label}
                    value={account.services || ""}
                    onChange={handleChange("services")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="facebook"
                    name="facebook"
                    label="Facebook Profile"
                    fullWidth
                    autoComplete="facebook"
                    className={classes.label}
                    value={account.facebook_profile || ""}
                    onChange={handleChange("facebook_profile")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="twitter"
                    name="twitter"
                    label="Twitter Profile"
                    fullWidth
                    autoComplete="twitter"
                    className={classes.label}
                    value={account.twitter_profile || ""}
                    onChange={handleChange("twitter_profile")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="linkedin"
                    name="linkedin"
                    label="Linkedin Profile"
                    fullWidth
                    autoComplete="linkedin"
                    className={classes.label}
                    value={account.linkedin_profile || ""}
                    onChange={handleChange("linkedin_profile")}
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
                Save
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
