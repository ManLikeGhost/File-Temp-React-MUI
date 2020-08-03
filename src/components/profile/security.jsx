import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ProfileSectionTitle from "./miniComponents/profilesectionTitle";
import { makeStyles } from "@material-ui/core/styles";

import "./content.css";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "1000px",
    // background: `url(${BackgroundImage}) no-repeat center center fixed`,
    // backgroundSize: "cover",
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
const Security = () => {
  const classes = useStyles();
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (name) => (event) => {
    setPasswords({
      ...passwords,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { oldPassword, newPassword, confirmNewPassword } = passwords;

    const changedPassword = {
      oldPassword,
      newPassword,
      confirmNewPassword,
    };
    // this.props.setCurrentAccount(newAccount);
    console.log({ changedPassword });
  };

  return (
    <div>
      <ProfileSectionTitle>
        <div>Security</div>
        <div>Manage your passwords</div>
      </ProfileSectionTitle>
      <div className="content">
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                name="oldpassword"
                label="Old Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={passwords.oldPassword}
                onChange={handleChange("oldpassword")}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                name="newpassword"
                label="New Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={passwords.newPassword}
                onChange={handleChange("newpassword")}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                name="confirmNewPassword"
                label="Confirm New Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={passwords.confirmNewPassword}
                onChange={handleChange("confirmNewPassword")}
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
      </div>
    </div>
  );
};

export default Security;
