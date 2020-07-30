import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  message: {
    fontSize: " 25px",
    lineHeight: "22px",
    color: theme.palette.secondary.main,
    padding: theme.spacing(3),
  },
}));
const MessageAccount = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Typography  className={classes.message}>{props.children} </Typography>
    </div>
  );
};

export default MessageAccount;
