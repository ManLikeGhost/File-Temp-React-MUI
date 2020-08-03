import React from 'react';
import NavigationHeader from '../navigationHeader.jsx'
import MarbleBackground from '../../img/MarbleBackground.png'
import Footer from '../footer';
import SaleRentShortlet from '../home/saleRentShortlet';


import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  backgroundImage :{
    height: '80vh',
    backgroundImage: `url(${MarbleBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // width: `calc(100vw + 48px)`,
    
  },
  text: {
    padding: "20px 80px",
    color: theme.palette.primary.main,
    fontSize: "30px",
    textAlign: "justify",
  },
  button: {
    marginLeft: "60px",
    color: theme.palette.primary.contrastText,
    fontSize: 21,
    borderRadius: 1,
    border: `2px solid ${theme.palette.primary.main}`
  },
 
}));

const ForRent = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <NavigationHeader />
        <Grid container 
          direction="row" justify="center" 
          alignItems="center" spacing={3} 
        >
          <Grid item xs={1} />
          <Grid item xs={12} sm={6}>
            <h1>Flats for rent in Nigeria</h1>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2">Quick Filters</Typography>
                  <Grid justify="space-between">
                    <Typography variant="body2" component="p">1 Bedroom</Typography>
                  </Grid>
                  <Grid justify="space-between">
                    <Typography variant="body2" component="p">2 Bedroom</Typography>
                  </Grid>  
                </CardContent>
              </Card>
            </Grid>
 
          <Grid item xs={1} />    
        </Grid>
      <SaleRentShortlet />
      <Footer />


    </div>
  );
};
export default ForRent;




