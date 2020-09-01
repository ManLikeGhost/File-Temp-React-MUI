import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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
  iconBox: {
    width: "100%",
    // height: "150px",
    margin: "0 auto",
    textAlign: "center",
  },
  icon: {
    width: "100%",
    height: "80px",
    objectFit: "contain",
  },
  titleStyle: {
    fontWeight: "Medium",
    paddingBottom: 3,
    fontSize: 18,
    fontFamily: theme.fontFamily,
    color: theme.palette.secondary.main,
  },
  paperContainer: {
    padding: 50,
    border: `1px solid ${theme.palette.primary.main}`,
    transition: "all 1s linear",
    // boxShadow: '5px 10px 5px 1px'
    "&:hover": {
     marginTop: "150px"
    },
  },
}));

export default function Portfolio({ title, icon, link }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href={link}>
        <Paper elevation={3} className={classes.paperContainer}>
          <div className={classes.iconBox}>
            <img src={icon} alt={title} className={classes.icon} />
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
      </Link>
    </div>
  );
}
