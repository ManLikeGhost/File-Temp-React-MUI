import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "246px",
    height: "45px",
    background: "#BF7950",
    borderRadius: "2px",
  },
}));
const ButtonAccount = (props) => {
    const classes = useStyles();
  return (
    <div>
      <Button variant="contained" size="large" color="primary" className={classes.button}>
        <Typography>{props.children}</Typography>
      </Button>
    </div>
  );
};

export default ButtonAccount;
