import React from 'react';
import NavigationHeader from '../navigationHeader.jsx'
import MarbleBackground from '../../img/MarbleBackground.png'
import Footer from '../footer';
import SaleRentShortlet from '../home/saleRentShortlet';


import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backgroundImage :{
    height: '80vh',
    backgroundImage: `url(${MarbleBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // width: `calc(100vw + 48px)`,
    
  },
  cardRight :{
    background: "#F5E9DE",
    width: "324px",
    height: "200px",
    left: "848px",
    top: "189px",
    border: "0.8px solid #BF7950",
    boxsizing: "border-box",
    borderradius: "2px" 
  },
  filters :{
    width: "630px",
    height: "199px",
    left: "108px",
    top: "373px",
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    boxsizing: "border-box",
    borderradius: "2px",
    margin: "10px"
  },

  Typography: {
    width: "235px",
    height: "50px",
    left: "894px",
    top: "236px",
    fontfamily: "Metropolis",
    fontstyle: "normal",
    fontweight: "500",
    fontsize: "25px",
    lineheight:"25px",
    textalign: "center !important",
    color: "#ffff"
  },


  text: {
    padding: "20px 80px",
    color: theme.palette.primary.main,
    fontSize: "30px",
    textalign: "center",
  },

  all: {
    padding: "10px",
  },
  
  result: {
    width: "630px",
    height: "71px",
    left: "108px",
    top:"598px", 
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    boxsizing: "border-box",
    borderradius: "2px",
    margin: "10px", 

  },
  
  holder: {
    margin: "20px 50px 20px 50px",
  },

  typo: {
    textAlign: "center",
    width: "235px",
    height: "50px",
    left: "894px",
    top: "236px",
    padding: "10px",
    fontFamily: "Metropolis",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "25px",
    lineHeight: "25px",
    color: "#04403A",
  },

  typohead: {
    width: "525px",
    height: "65px",
    left: "108px",
    top: "230px",
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "49px",
    padding: "0px 0px 0px 10px",
    lineHeight: "65px",
    color: "#BF7950"
  },

  bar: {
    width: "630px",
    height: "199px",
    left: "108px",
    top: "373px",
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    boxSizing: "border-box",
    borderRadius: "2px"
  },

  itemCard: {
    width: "629.34px",
    height: "261.67px",
    left: "108px",
    top: "694px",
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    borderradius: "2px",
    margin: "10px"
  },

  divider: {
    margin: "20px 0",
    backgroundColor: theme.palette.primary.main,
    height: "1px",
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
      <div className={classes.holder}>
        <Grid container spacing={3}>
          {//right-column  
          }
          <Grid item container xs={8}>
            <Grid item>
              <Typography  className={classes.typohead} color="textSecondary" >Flats for rent in Nigeria </Typography>
            </Grid>

            <Grid item>
              <Card className={classes.bar} variant="outlined">
                <Typography  className={classes.typo}>
                  Quick Filters
                </Typography>
              </Card>
            </Grid>
          </Grid>


          {//left-column  
          }
          <Grid item container xs={4}>
            <Grid item xs={12}>
              <Card className={classes.cardRight} variant="outlined">
                <CardContent>
                  <Typography  className={classes.typo} color="textSecondary" gutterBottom>
                    Can’t find your ideal property?
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained"color="primary">POST A REQUEST</Button>
                </CardActions>
              </Card>
            </Grid>  
          </Grid>
        </Grid>
      </div>
              
      <SaleRentShortlet />
      <Footer />


    </div>
  );
};
export default ForRent;




