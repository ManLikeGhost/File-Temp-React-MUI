import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     maxWidth: 345,
  //     maxHeigth: 500
  //   },
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: "100%",
    },
  },
  iconStyle: {
    textAlign: "center",
  },
  titleStyle: {
    fontWeight: "fontWeightMedium",
    paddingBottom: 3,
    // fontSize: 18,
    fontFamily: theme.fontFamily,
    color: theme.palette.secondary.main,
  },
}));

export default function Portfolio({ title, icon }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div className={classes.iconStyle}>
          <img src={icon} alt={title} />
        </div>
        <Typography
          variant="h4"
          component="p"
          className={classes.titleStyle}
          align="center"
        >
          {title}
        </Typography>
      </Paper>
    </div>
  );
}
