import React from 'react'
import MarbleBackground from "../../img/MarbleBackground.png"


import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import MoneyIcon from "@material-ui/icons/Money";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    background: `url(${MarbleBackground}) no-repeat center center fixed`,
    backgroundSize: "cover",
  },

  holder: {
    width: "1181px",
    height: "130px",
    background: "#F5E9DE",
    border: "1px solid #BF7950",
    boxSizing: "border-box",
    borderRadius: "2px",
    padding: "0px 0px 0px 10px"

  },

  title: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(2),
    padding: "10px 0px 0px 15px",
    margin: "0px 0px 20px 0px"
  },

  address: {
    fontSize: theme.spacing(2),
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },

  price: {
    color: theme.palette.secondary.main,
    fontSize: "1rem",
  },

  margin: {
    float:"right",
  },

}));

const SinglePropertyTitle = ({ title, address, price }) => {
    const classes = useStyles();
    return (
        <div className={classes.backgroundImage}>
            <div className={classes.holder}>
                <Grid container>
                    <Grid item xs={12} >
                        <Typography className={classes.title}>
                            4 Bedroom Apartment for Rent
                        </Typography>    
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={1}>
                            <LocationOnIcon color="primary" fontSize="large" />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography className={classes.address}>
                                10, Sangotedo Ajah
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <MoneyIcon fontSize="large" color="primary" />
                        </Grid>
                        <Grid item xs={2}>
                            <Typography className={classes.price}>
                                N1.8 Million p.a.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default SinglePropertyTitle




