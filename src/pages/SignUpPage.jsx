import React, { useState } from "react";
import axios from "../axios/index";
import history from "../history";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../constants/apiConstants";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";

import BackgroundImage from "../img/SignIn-UpImage.png";
import NavigationHeader from "../components/navigationHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "1000px",
    background: `url(${BackgroundImage}) no-repeat center center fixed`,
    backgroundSize: "cover",
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
    padding: theme.spacing(1, 6),
  },
  label: {
    fontSize: "15px",
  },

  accountFormControl: {
    margin: theme.spacing(1),
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
  error: {
    textAlign: "center",
    fontSize: "30px",
    color: "red",
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

const SignUpPage = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleChange = (name) => (event) => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const { name, email, password, confirmPassword, userType } = state;
    if (!name) {
      return setError("*Full name is required");
    }
    if (!email) {
      return setError("*Email is required");
    }

    if (!password) {
      return setError("*Password is required");
    }
    if (!confirmPassword) {
      return setError("*Confirm Password is required");
    }
    if (!userType) {
      return setError("*Please select account type");
    }
    if (state.password === state.confirmPassword) {
      const newUser = {
        name,
        email,
        confirmPassword,
        userType,
      };
      // this.props.setCurrentUser(user);
      console.log("to be sent to server", { newUser });
      axios
        .post(API_BASE_URL + "/register", newUser)
        .then((response) => {
          console.log("Response from server", response);

          localStorage.setItem(
            ACCESS_TOKEN_NAME,
            `Bearer ${response.data.token}`
          );
          setLoading(false);
          history.push('/subscription-plans')
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
          console.log(err);
          setLoading(false);
        });
    } else {
      setError("Passwords do not match");
    }
  };

  // const handleuserTypeChange = (event) => {
  //   setuserType(event.target.value);
  // };

  return (
    <div>
      <NavigationHeader />
      <div className={classes.root}>
        <CssBaseline />
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item xs={2}>
            <Link href="/signin" variant="body2">
              <Typography className={classes.signIn}>SIGN IN</Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={4} className={classes.margin}>
            <AccountCircleIcon className={classes.icon} />
          </Grid>
        </Grid>

        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.title}>
            Sign up
          </Typography>
          <Typography component="h1" variant="h5" className={classes.subtitle}>
            Create your account
          </Typography>

          {error ? (
            <Typography component="h1" variant="h5" className={classes.error}>
              {error}
            </Typography>
          ) : null}

          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="fullName"
                  name="fullName"
                  label="Full name"
                  fullWidth
                  autoComplete="full-name"
                  className={classes.label}
                  value={state.name}
                  onChange={handleChange("name")}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  // variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={state.email}
                  onChange={handleChange("email")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  // variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={state.password}
                  onChange={handleChange("password")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  // variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                  value={state.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.accountFormControl}>
                  <InputLabel id="userType">Account Type</InputLabel>
                  <Select
                    required
                    fullWidth
                    labelId="userType"
                    id="userType"
                    value={state.userType}
                    onChange={handleChange("userType")}
                  >
                    <MenuItem value={"individual"}>Individual</MenuItem>
                    <MenuItem value={"property_owner"}>Property Owner</MenuItem>
                    <MenuItem value={"real_estate_agent"}>
                      Real Estate Agent
                    </MenuItem>
                    <MenuItem value={"property_developer"}>
                      Property Developer
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={loading}
            >
              Sign Up
              {loading && <CircularProgress />}
            </Button>

            <Grid item xs={12}>
              <FormControlLabel
                className={classes.text}
                control={<Checkbox value="acceptTerms" color="primary" />}
                label="By registering you accept our Terms of Use and Privacy and agree that we and our selected partners may contact you with relevant offers and services."
              />
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
