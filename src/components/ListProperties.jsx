import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
  },
  iconStyle: {
    textAlign: "center",
  },
  titleStyle: {
    fontWeight: "fontWeightMedium",
    paddingBottom: 3,
    // fontSize: 18,
    fontFamily: theme.fontFamily,
    color: theme.palette.secondary.main
}
}));

export default function ListProperties({ title, icon }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
          <div className={classes.iconStyle}>
          {icon}
          </div>
       
        <Typography variant="h4" component="p" className={classes.titleStyle} align='center'>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
