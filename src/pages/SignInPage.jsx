import React, { useState } from "react";
import axios from "axios";
import history from "../history";

import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../constants/apiConstants';
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";

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
    height: "553px",
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
  error: {
    textAlign: "center",
    fontSize: "30px",
    color: "red",
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

const SignInPage = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);
  const handleChange = (name) => (event) => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    const { email, password } = state;
    if (!email) {
      return setError("*Email is required");
    }

    if (!password) {
      return setError("*Password is required");
    }

    const user = {
      email,
      password,
    };
    // this.props.setCurrentUser(user);
    // console.log("To be sent", { user });
    axios
      .post(API_BASE_URL+"/login", user)
      .then((response) => {
        // console.log("Response from server", response);
        setLoading(false)
        if (response.status === 200) {
          localStorage.setItem(ACCESS_TOKEN_NAME,JSON.stringify(response.data));
          history.push('/profile-settings/account')
          window.location.reload();
        } 
        else if(response.data.code === 204){
          setError("Username and password do not match");
      }else if(response.data.code === 404){
        setError("Email does not exist");
    }else {
          setError("Some errors ocurred while registering your account");
        }
      })
      .catch((err) => {
        // console.log(err.message);
        setError(err.message);
        setLoading(false)
      });
  };

  // const handleAccountTypeChange = (event) => {
  //   setAccountType(event.target.value);
  // };

  return (
    <div>
      <NavigationHeader />
      <div className={classes.root}>
        <CssBaseline />
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item xs={2}>
            <Link href="/signup" variant="body2">
              <Typography className={classes.signIn}>SIGN UP</Typography>
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
            Sign In
          </Typography>
          <Typography component="h1" variant="h5" className={classes.subtitle}>
            Log into your account
          </Typography>
          {error ? (
            <Typography
              component="h1"
              variant="h5"
              className={classes.error}
            >
              {error}
            </Typography>
          ) : null}
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
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
                  // helperText={error.email}
                  // error={error.email ? true:false}
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
                  // helperText={error.password}
                  // error={error.password ? true:false}
                />
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
              LOGIN
              {loading && <CircularProgress />}
            </Button>
          </form>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" color="secondary">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
