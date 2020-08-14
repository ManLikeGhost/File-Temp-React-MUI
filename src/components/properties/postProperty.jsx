import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "1000px",
    //   background: `url(${BackgroundImage}) no-repeat center center fixed`,
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

const PostProperty = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item>
          <Typography>Property Details</Typography>
        </Grid>
      </Grid>
      <form className={classes.form}>
        <Grid container>
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
              //   value={state.name}
              //   onChange={handleChange("name")}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl className={classes.accountFormControl}>
              <InputLabel id="accountType">I’m a/an...</InputLabel>
              <Select
                required
                fullWidth
                labelId="accountType"
                id="accountType"
                variant="outlined"
                // value={state.accountType}
                // onChange={handleChange("accountType")}
              >
                <MenuItem value={"propertyShopper"}> Property Shopper</MenuItem>
                <MenuItem value={"realEstateAgent"}>Real Estate Agent</MenuItem>
                <MenuItem value={"propertyDeveloper"}>
                  Property Developer
                </MenuItem>
                <MenuItem value={"homeOwner"}>Home Owner</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"

              //   value={state.email}
              //   onChange={handleChange("email")}
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
              //   value={state.email}
              //   onChange={handleChange("email")}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
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
                <MenuItem value={"propertyShopper"}> Property Shopper</MenuItem>
                <MenuItem value={"realEstateAgent"}>Real Estate Agent</MenuItem>
                <MenuItem value={"propertyDeveloper"}>
                  Property Developer
                </MenuItem>
                <MenuItem value={"homeOwner"}>Home Owner</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
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
                <MenuItem value={"propertyShopper"}> Property Shopper</MenuItem>
                <MenuItem value={"realEstateAgent"}>Real Estate Agent</MenuItem>
                <MenuItem value={"propertyDeveloper"}>
                  Property Developer
                </MenuItem>
                <MenuItem value={"homeOwner"}>Home Owner</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4}>
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
                <MenuItem value={"propertyShopper"}> Property Shopper</MenuItem>
                <MenuItem value={"realEstateAgent"}>Real Estate Agent</MenuItem>
                <MenuItem value={"propertyDeveloper"}>
                  Property Developer
                </MenuItem>
                <MenuItem value={"homeOwner"}>Home Owner</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
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
                <MenuItem value={"propertyShopper"}> Property Shopper</MenuItem>
                <MenuItem value={"realEstateAgent"}>Real Estate Agent</MenuItem>
                <MenuItem value={"propertyDeveloper"}>
                  Property Developer
                </MenuItem>
                <MenuItem value={"homeOwner"}>Home Owner</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
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
                <MenuItem value={"propertyShopper"}> Property Shopper</MenuItem>
                <MenuItem value={"realEstateAgent"}>Real Estate Agent</MenuItem>
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
              <InputLabel id="accountType">Select No. of bedrooms</InputLabel>
              <Select
                required
                fullWidth
                labelId="accountType"
                id="accountType"
                variant="outlined"
                // value={state.accountType}
                // onChange={handleChange("accountType")}
              >
                <MenuItem value={"propertyShopper"}> Property Shopper</MenuItem>
                <MenuItem value={"realEstateAgent"}>Real Estate Agent</MenuItem>
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
              //   value={state.name}
              //   onChange={handleChange("name")}
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
  );
};

export default PostProperty;